import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "./AppRoutes";
import i18n from "./i18n";

/** Renders a route to static HTML for build-time prerendering (SSG). */
export async function render(url: string, lang: string): Promise<string> {
  await i18n.changeLanguage(lang);
  const queryClient = new QueryClient();
  return renderToString(
    <HelmetProvider context={{}}>
      <QueryClientProvider client={queryClient}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
