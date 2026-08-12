// Post-build prerender: generates static HTML shells for every (language x route)
// combination in dist/. Each file is a copy of dist/index.html with route-specific
// <title>, <meta description>, canonical, hreflang, and Open Graph tags injected
// into the <head>. The React SPA still hydrates normally after load — this only
// gives crawlers unique per-route metadata without needing JS execution.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve } from "path";
import { pathToFileURL } from "url";
import pt from "../src/i18n/locales/pt";
import { LANDINGS, getLandingContent } from "../src/data/landings";
import en from "../src/i18n/locales/en";
import es from "../src/i18n/locales/es";
import fr from "../src/i18n/locales/fr";
import ar from "../src/i18n/locales/ar";

const BASE_URL = "https://baixarvideoskwai.com";
const DIST = resolve("dist");

type Locale = typeof pt;
const LOCALES: Record<string, { data: Locale; hreflang: string; ogLocale: string; dir: "ltr" | "rtl"; htmlLang: string }> = {
  pt: { data: pt as unknown as Locale, hreflang: "pt-BR", ogLocale: "pt_BR", dir: "ltr", htmlLang: "pt-BR" },
  en: { data: en as unknown as Locale, hreflang: "en", ogLocale: "en_US", dir: "ltr", htmlLang: "en" },
  es: { data: es as unknown as Locale, hreflang: "es", ogLocale: "es_ES", dir: "ltr", htmlLang: "es" },
  fr: { data: fr as unknown as Locale, hreflang: "fr", ogLocale: "fr_FR", dir: "ltr", htmlLang: "fr" },
  ar: { data: ar as unknown as Locale, hreflang: "ar", ogLocale: "ar_AR", dir: "rtl", htmlLang: "ar" },
};

// route path -> meta key in locale.meta
const ROUTES: Array<{ path: string; metaKey?: keyof Locale["meta"]; meta?: { title: string; description: string } }> = [
  { path: "/", metaKey: "home" },
  { path: "/baixar-videos-kwai", metaKey: "baixarKwai" as keyof Locale["meta"] },
  {
    path: "/baixar-videos-facebook",
    meta: {
      title: "Baixar Vídeos do Facebook Grátis e em HD | KwaiSave",
      description:
        "Baixar vídeos do Facebook online, grátis e em HD. Salve vídeos e reels do Facebook por link, sem instalar programas — direto no navegador do celular ou PC.",
    },
  },
  {
    path: "/baixar-videos-youtube",
    meta: {
      title: "Baixar Vídeos do YouTube Online e Grátis | KwaiSave",
      description:
        "Baixar vídeos do YouTube online em MP4 e alta qualidade. Baixador de vídeos do YouTube grátis, sem programas, funcionando no celular e no PC.",
    },
  },
  {
    path: "/baixar-videos-instagram",
    meta: {
      title: "Baixar Vídeos do Instagram, Reels e Stories | KwaiSave",
      description:
        "Baixar vídeos do Instagram, reels e stories em HD e sem marca d'água. Baixador de Instagram online, grátis, no celular ou no PC, sem instalar nada.",
    },
  },
  {
    path: "/baixar-videos-tiktok",
    meta: {
      title: "Baixar Vídeos do TikTok Sem Marca d'Água | KwaiSave",
      description:
        "Baixar vídeos do TikTok sem marca d'água em HD, grátis e online. Baixador de TikTok por link, no celular ou PC, sem app e sem cadastro.",
    },
  },
  {
    path: "/baixar-videos-twitter",
    meta: {
      title: "Baixar Vídeos do Twitter (X) em HD | KwaiSave",
      description:
        "Baixar vídeos do Twitter (X) online e grátis em MP4. Baixador de vídeos do X por link, em HD, no celular ou no PC, sem instalar nada.",
    },
  },
  { path: "/baixar-tutorial", metaKey: "tutorial" },
  { path: "/kwai-apk", metaKey: "kwaiApk" },
  { path: "/faq", metaKey: "faqPage" },
  { path: "/blog", metaKey: "blog" },
  { path: "/downloads", metaKey: "downloads" },
  { path: "/sobre", metaKey: "sobre" },
  { path: "/contato", metaKey: "contato" },
  { path: "/uso-responsavel", metaKey: "uso" },
  { path: "/termos-de-uso", metaKey: "termos" },
  { path: "/privacidade", metaKey: "privacidade" },
  { path: "/dmca", metaKey: "dmca" },
];

// Landing pages têm meta próprio por idioma (resolvido em buildHead).
for (const l of LANDINGS) {
  ROUTES.push({ path: l.slug, meta: { title: "", description: "" } });
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildHead(
  lang: string,
  path: string,
  metaKey?: keyof Locale["meta"],
  inlineMeta?: { title: string; description: string }
): { head: string; htmlAttrs: string } {
  const locale = LOCALES[lang];
  const landing = LANDINGS.find((l) => l.slug === path);
  const meta = (landing
    ? getLandingContent(landing, lang)
    : (inlineMeta ?? (locale.data.meta[metaKey as keyof Locale["meta"]] as unknown))) as {
    title: string;
    description: string;
  };
  const url = (code: string) =>
    code === "en" && path === "/" ? `${BASE_URL}/` : `${BASE_URL}/${code}${path === "/" ? "" : path}`;
  const canonical = url(lang);

  const alternates = Object.entries(LOCALES)
    .map(([code, l]) => `<link rel="alternate" hreflang="${l.hreflang}" href="${url(code)}" />`)
    .join("\n    ");

  const ogLocaleAlts = Object.values(LOCALES)
    .filter((l) => l.hreflang !== locale.hreflang)
    .map((l) => `<meta property="og:locale:alternate" content="${l.ogLocale}" />`)
    .join("\n    ");

  const head = `<title>${esc(meta.title)}</title>
    <meta name="description" content="${esc(meta.description)}" />
    <link rel="canonical" href="${canonical}" />
    ${alternates}
    <link rel="alternate" hreflang="x-default" href="${url("en")}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${esc(meta.title)}" />
    <meta property="og:description" content="${esc(meta.description)}" />
    <meta property="og:site_name" content="KwaiSave" />
    <meta property="og:locale" content="${locale.ogLocale}" />
    ${ogLocaleAlts}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(meta.title)}" />
    <meta name="twitter:description" content="${esc(meta.description)}" />`;

  const htmlAttrs = `lang="${locale.htmlLang}" dir="${locale.dir}"`;
  return { head, htmlAttrs };
}

function injectHead(template: string, head: string, htmlAttrs: string): string {
  // Remove existing title, description, canonical, og:*, twitter:*, alternate hreflang tags
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>\s*/i, "");
  html = html.replace(/<meta\s+name="description"[^>]*>\s*/gi, "");
  html = html.replace(/<link\s+rel="canonical"[^>]*>\s*/gi, "");
  html = html.replace(/<link\s+rel="alternate"\s+hreflang[^>]*>\s*/gi, "");
  html = html.replace(/<meta\s+property="og:[^"]+"[^>]*>\s*/gi, "");
  html = html.replace(/<meta\s+name="twitter:[^"]+"[^>]*>\s*/gi, "");
  html = html.replace(/<meta\s+name="(robots|googlebot|author)"[^>]*>\s*/gi, "");
  // Update <html lang="..." dir="...">
  html = html.replace(/<html[^>]*>/i, `<html ${htmlAttrs}>`);
  // Inject the new head block right after <meta charset>
  html = html.replace(/(<meta\s+charset="[^"]+"\s*\/?>)/i, `$1\n    ${head}`);
  // Helmet emits React-style attribute casing; normalize for static HTML.
  html = html.replace(/hrefLang=/g, "hreflang=");
  return html;
}

async function main() {
  const indexPath = resolve(DIST, "index.html");
  if (!existsSync(indexPath)) {
    console.log("[prerender] dist/index.html not found — skipping (build did not run).");
    return;
  }
  const template = readFileSync(indexPath, "utf-8");

  // Load the SSR bundle (built by `vite build --ssr`) to render real page HTML.
  let render:
    | ((url: string, lang: string) => Promise<{ html: string; head: string; htmlAttrs: string }>)
    | null = null;
  const ssrEntry = resolve("dist-ssr/entry-server.js");
  if (existsSync(ssrEntry)) {
    try {
      // Minimal browser shims so client-only libs (supabase-js) can load in Node.
      const store = new Map<string, string>();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (globalThis as any).localStorage ??= {
        getItem: (k: string) => store.get(k) ?? null,
        setItem: (k: string, v: string) => void store.set(k, String(v)),
        removeItem: (k: string) => void store.delete(k),
        clear: () => store.clear(),
        key: () => null,
        length: 0,
      };
      ({ render } = await import(pathToFileURL(ssrEntry).href));
    } catch (err) {
      console.warn("[prerender] SSR bundle failed to load — falling back to meta-only shells.", err);
    }
  } else {
    console.warn("[prerender] dist-ssr/entry-server.js not found — writing meta-only shells.");
  }

  let count = 0;
  for (const lang of Object.keys(LOCALES)) {
    for (const route of ROUTES) {
      const fallback = buildHead(lang, route.path, route.metaKey, route.meta);
      const slug = route.path === "/" ? "" : route.path;
      let head = fallback.head;
      let htmlAttrs = fallback.htmlAttrs;
      let body: string | null = null;
      if (render) {
        try {
          const result = await render(`/${lang}${slug}`, lang);
          body = result.html;
          // Helmet head carries per-route title/description/canonical/hreflang/OG + JSON-LD.
          if (result.head && result.head.includes("<title")) head = result.head;
          if (result.htmlAttrs) htmlAttrs = result.htmlAttrs;
        } catch (err) {
          console.warn(`[prerender] render failed for /${lang}${slug}:`, err);
        }
      }
      let html = injectHead(template, head, htmlAttrs);
      if (body !== null) {
        const start = html.indexOf('<div id="root">');
        const end = html.indexOf("</body>", start);
        if (start !== -1 && end !== -1) {
          const tail = html.slice(start, end).replace(/[\s\S]*<\/div>/, "");
          html = `${html.slice(0, start)}<div id="root">${body}</div>${tail}${html.slice(end)}`;
        }
      }
      if (lang === "en" && route.path === "/") {
        // English homepage is the site root itself (avoids a /en duplicate).
        writeFileSync(resolve(DIST, "index.html"), html);
      } else {
        const outDir = resolve(DIST, `${lang}${slug}`);
        mkdirSync(outDir, { recursive: true });
        writeFileSync(resolve(outDir, "index.html"), html);
      }
      count++;
    }
  }
  console.log(`[prerender] wrote ${count} static HTML shells across ${Object.keys(LOCALES).length} languages.`);
}

main();