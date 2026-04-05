const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method === "GET") {
    return handleDirectDownload(req);
  }

  try {
    const body = await req.json().catch(() => null);
    const url = body?.url;

    if (!url || typeof url !== "string") {
      return jsonResponse({ error: "URL é obrigatória" }, 400);
    }

    const kwaiPattern = /kwai\.com|k\.kwai\.com|kw\.ai|kwai/i;
    if (!kwaiPattern.test(url)) {
      return jsonResponse(
        { error: "Link inválido. Use um link do Kwai." },
        400,
      );
    }

    const pageResponse = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      },
      redirect: "follow",
    });

    if (!pageResponse.ok) {
      await pageResponse.text();
      return jsonResponse(
        { error: "Erro ao acessar o vídeo. Tente outro link." },
        500,
      );
    }

    const html = await pageResponse.text();
    const normalizedHtml = normalizeEscapedContent(html);
    const downloadUrl = extractBestVideoUrl(normalizedHtml);

    if (!downloadUrl) {
      return jsonResponse(
        { error: "Não foi possível encontrar o vídeo." },
        404,
      );
    }

    const title = decodeHtmlEntities(
      getMetaContent(html, "og:title") || "Vídeo do Kwai",
    );
    const description = decodeHtmlEntities(
      getMetaContent(html, "og:description") || "",
    );
    const thumbnail = getMetaContent(html, "og:image") || "";
    const author = extractAuthor(description, pageResponse.url);
    const likes =
      extractMetric(description, /([\d.,]+)\s*Like/i) || "0";
    const comments =
      extractMetric(description, /([\d.,]+)\s*Comment/i) || "0";

    return jsonResponse({
      success: true,
      data: {
        title,
        author,
        thumbnail,
        likes,
        comments,
        downloadUrl,
        type: "video",
      },
    });
  } catch (error) {
    console.error("kwai-download metadata error", error);
    return jsonResponse({ error: "Erro ao processar. Tente novamente." }, 500);
  }
});

async function handleDirectDownload(req: Request) {
  try {
    const requestUrl = new URL(req.url);
    const shouldDownload = requestUrl.searchParams.get("download") === "1";
    const source = requestUrl.searchParams.get("source") || "";
    const filename = sanitizeFilename(
      requestUrl.searchParams.get("filename") || "video-kwai.mp4",
    );

    if (!shouldDownload) {
      return jsonResponse({ ok: true });
    }

    if (!isAllowedVideoUrl(source)) {
      return jsonResponse({ error: "URL de download inválida." }, 400);
    }

    const upstream = await fetch(source, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Referer: "https://www.kwai.com/",
      },
      redirect: "follow",
    });

    if (!upstream.ok || !upstream.body) {
      await upstream.text().catch(() => "");
      return jsonResponse(
        { error: "Não foi possível baixar o vídeo." },
        502,
      );
    }

    return new Response(upstream.body, {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": upstream.headers.get("Content-Type") || "video/mp4",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "private, max-age=3600",
      },
    });
  } catch (error) {
    console.error("kwai-download direct error", error);
    return jsonResponse({ error: "Erro ao baixar o vídeo." }, 500);
  }
}

/**
 * Extracts the best video URL WITHOUT watermark.
 *
 * Kwai URL patterns:
 * - `_b_`  = base/original quality, NO watermark
 * - `_ol9_` = overlay, lower quality WITH watermark
 *
 * Priority:
 * 1. HIGH quality `_b_` URLs from main_mv_urls_rate (best quality, no watermark)
 * 2. `_b_` URLs from main_mv_urls (original quality, no watermark)
 * 3. Any `_b_` URL found on page
 * 4. Fallback to first mp4 (may have watermark)
 */
function extractBestVideoUrl(normalizedHtml: string): string {
  const allUrls = Array.from(
    new Set(
      normalizedHtml.match(/https:\/\/[^"'\s,}]+\.mp4[^"'\s,}]*/g) || [],
    ),
  );

  // 1. HIGH quality _b_ URL from main_mv_urls_rate
  const highBlock =
    normalizedHtml.match(
      /level:\s*["']?HIGH["']?[\s\S]{0,2000}?urls:\s*\[([\s\S]{0,2000}?)\]/,
    )?.[1] || "";
  const highUrls =
    highBlock.match(/https:\/\/[^"'\s,}]+\.mp4[^"'\s,}]*/g) || [];
  const highBase = highUrls.find((u) => u.includes("_b_"));
  if (highBase) return cleanUrl(highBase);

  // 2. _b_ URL from main_mv_urls block (original quality, no watermark)
  const mainBlock =
    normalizedHtml.match(
      /main_mv_urls\s*:\s*\[([\s\S]{0,4000}?)\]/,
    )?.[1] || "";
  const mainUrls =
    mainBlock.match(/https:\/\/[^"'\s,}]+\.mp4[^"'\s,}]*/g) || [];
  const mainBase = mainUrls.find((u) => u.includes("_b_"));
  if (mainBase) return cleanUrl(mainBase);

  // 3. Any _b_ URL on the page (base = no watermark)
  const anyBase = allUrls.find((u) => u.includes("_b_"));
  if (anyBase) return cleanUrl(anyBase);

  // 4. Fallback: first mp4 URL (may have watermark, but better than nothing)
  // Explicitly AVOID _ol9_ URLs as they contain the watermark overlay
  const nonOverlay = allUrls.find(
    (u) => !u.includes("_ol9_") && !u.includes("tt=ol9"),
  );
  if (nonOverlay) return cleanUrl(nonOverlay);

  return allUrls[0] ? cleanUrl(allUrls[0]) : "";
}

function cleanUrl(url: string): string {
  // Remove trailing commas or quotes that might have been captured
  return url.replace(/[,}"'\s]+$/, "");
}

function normalizeEscapedContent(html: string) {
  return html
    .replace(/\\u002F/g, "/")
    .replace(/\\\//g, "/")
    .replace(/&amp;/g, "&");
}

function getMetaContent(html: string, property: string) {
  const match = html.match(
    new RegExp(
      `property="${property}"[^>]*content="([^"]*)"`,
      "i",
    ),
  );
  return match ? match[1] : "";
}

function extractAuthor(description: string, resolvedUrl: string) {
  const descriptionMatch = description.match(/\(@([^)]+)\)/);
  if (descriptionMatch) return `@${descriptionMatch[1]}`;

  const urlMatch = resolvedUrl.match(/@([^/?]+)/);
  if (urlMatch) return `@${urlMatch[1]}`;

  return "";
}

function extractMetric(description: string, pattern: RegExp) {
  const match = description.match(pattern);
  return match ? match[1].trim() : "";
}

function isAllowedVideoUrl(source: string) {
  try {
    const parsed = new URL(source);
    return (
      parsed.protocol === "https:" &&
      /(^|\.)kwai\.(net|com)$/i.test(parsed.hostname)
    );
  } catch {
    return false;
  }
}

function sanitizeFilename(filename: string) {
  const clean = filename
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9.-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return clean || "video-kwai.mp4";
}

function decodeHtmlEntities(text: string) {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'");
}

function jsonResponse(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
