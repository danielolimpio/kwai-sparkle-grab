const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
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
      return jsonResponse({ error: "Link inválido. Use um link do Kwai." }, 400);
    }

    const pageResponse = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      },
      redirect: "follow",
    });

    if (!pageResponse.ok) {
      await pageResponse.text();
      return jsonResponse({ error: "Erro ao acessar o vídeo. Tente outro link." }, 500);
    }

    const html = await pageResponse.text();
    const normalizedHtml = normalizeEscapedContent(html);
    const downloadUrl = extractBestVideoUrl(normalizedHtml);

    if (!downloadUrl) {
      return jsonResponse({ error: "Não foi possível encontrar o vídeo sem marca d'água." }, 404);
    }

    const title = decodeHtmlEntities(getMetaContent(html, "og:title") || "Vídeo do Kwai");
    const description = decodeHtmlEntities(getMetaContent(html, "og:description") || "");
    const thumbnail = getMetaContent(html, "og:image") || "";
    const author = extractAuthor(description, pageResponse.url);
    const likes = extractMetric(description, /([\d.,]+)\s*Like/i) || "0";
    const comments = extractMetric(description, /([\d.,]+)\s*Comment/i) || "0";

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
    const filename = sanitizeFilename(requestUrl.searchParams.get("filename") || "video-kwai.mp4");

    if (!shouldDownload) {
      return jsonResponse({ ok: true });
    }

    if (!isAllowedVideoUrl(source)) {
      return jsonResponse({ error: "URL de download inválida." }, 400);
    }

    const upstream = await fetch(source, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Referer: "https://www.kwai.com/",
      },
      redirect: "follow",
    });

    if (!upstream.ok || !upstream.body) {
      await upstream.text().catch(() => "");
      return jsonResponse({ error: "Não foi possível baixar o vídeo." }, 502);
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

function extractBestVideoUrl(normalizedHtml: string) {
  const allUrls = Array.from(new Set(normalizedHtml.match(/https:\/\/[^"'\s]+\.mp4[^"'\s]*/g) || []));

  const ol9Url = allUrls.find((url) => url.includes("_ol9_") || url.includes("tt=ol9"));
  if (ol9Url) return ol9Url;

  const rateBlock = normalizedHtml.match(/main_mv_urls_rate[\s\S]{0,8000}/)?.[0] || "";
  const rateUrls = rateBlock.match(/https:\/\/[^"'\s]+\.mp4[^"'\s]*/g) || [];
  if (rateUrls[0]) return rateUrls[0];

  const mainBlock = normalizedHtml.match(/main_mv_urls[\s\S]{0,4000}/)?.[0] || "";
  const mainUrls = mainBlock.match(/https:\/\/[^"'\s]+\.mp4[^"'\s]*/g) || [];
  if (mainUrls[0]) return mainUrls[0];

  return allUrls[0] || "";
}

function normalizeEscapedContent(html: string) {
  return html
    .replace(/\\u002F/g, "/")
    .replace(/\\\//g, "/")
    .replace(/&amp;/g, "&");
}

function getMetaContent(html: string, property: string) {
  const match = html.match(new RegExp(`property=\"${property}\"[^>]*content=\"([^\"]*)\"`, "i"));
  return match ? match[1] : "";
}

function extractAuthor(description: string, resolvedUrl: string) {
  const descriptionMatch = description.match(/\(@([^\)]+)\)/);
  if (descriptionMatch) return `@${descriptionMatch[1]}`;

  const urlMatch = resolvedUrl.match(/@([^/\?]+)/);
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
    return parsed.protocol === "https:" && /(^|\.)kwai\.net$/i.test(parsed.hostname);
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
