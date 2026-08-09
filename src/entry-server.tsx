import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "./AppRoutes";
import i18n from "./i18n";

export interface RenderResult {
  html: string;
  head: string;
  htmlAttrs: string;
}

/** Renders a route to static HTML (+ head tags) for build-time prerendering (SSG). */
export async function render(url: string, lang: string): Promise<RenderResult> {
  await i18n.changeLanguage(lang);
  const queryClient = new QueryClient();
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
  const h = helmetContext.helmet;
  const head = h
    ? [h.title, h.meta, h.link, h.script].map((x) => x.toString()).filter(Boolean).join("\n    ")
    : "";
  const htmlAttrs = h ? h.htmlAttributes.toString() : "";
  return { html, head, htmlAttrs };
}
