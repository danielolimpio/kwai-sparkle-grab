import { Navigate, useLocation } from "react-router-dom";
import { detectInitialLang } from "@/i18n";

/**
 * Renders at `/` (or any other unprefixed legacy route) and redirects to the
 * language-prefixed equivalent. Detects language from localStorage > navigator.
 * Legacy PT slugs are preserved by prefixing with `/pt`.
 */
export function LanguageRedirect({ to }: { to?: string }) {
  const location = useLocation();
  const lang = detectInitialLang();
  const target = to ?? location.pathname;
  const cleanTarget = target === "/" ? "" : target.startsWith("/") ? target : `/${target}`;
  return <Navigate to={`/${lang}${cleanTarget}${location.search}${location.hash}`} replace />;
}

/** Always redirects to /pt + path (used for legacy PT-only URLs to preserve ranking). */
export function LegacyPtRedirect() {
  const location = useLocation();
  return <Navigate to={`/pt${location.pathname}${location.search}${location.hash}`} replace />;
}