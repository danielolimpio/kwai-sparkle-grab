// Gera public/sitemap.xml e public/robots.txt antes de dev e build.
import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://baixarvideoskwai.com";
const today = new Date().toISOString().slice(0, 10);

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "daily", priority: "1.0" },
  { path: "/baixar-tutorial", changefreq: "weekly", priority: "0.9" },
  { path: "/kwai-apk", changefreq: "weekly", priority: "0.9" },
  { path: "/faq", changefreq: "weekly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/downloads", changefreq: "daily", priority: "0.7" },
  { path: "/sobre", changefreq: "monthly", priority: "0.7" },
  { path: "/contato", changefreq: "monthly", priority: "0.6" },
  { path: "/uso-responsavel", changefreq: "yearly", priority: "0.5" },
  { path: "/termos-de-uso", changefreq: "yearly", priority: "0.4" },
  { path: "/privacidade", changefreq: "yearly", priority: "0.4" },
  { path: "/dmca", changefreq: "yearly", priority: "0.4" },
];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      `    <changefreq>${e.changefreq}</changefreq>`,
      `    <priority>${e.priority}</priority>`,
      `    <xhtml:link rel="alternate" hreflang="pt-BR" href="${BASE_URL}${e.path}" />`,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${e.path}" />`,
      `  </url>`,
    ].join("\n"),
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);

const robots = `# robots.txt — KwaiSave
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 2

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /
Disallow: /downloads/private/

Sitemap: ${BASE_URL}/sitemap.xml
Host: ${BASE_URL}
`;

writeFileSync(resolve("public/robots.txt"), robots);

console.log(`sitemap.xml (${entries.length} entries) and robots.txt written for ${BASE_URL}`);
