import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGS, SupportedLang, LANG_META } from "@/i18n";

export function useCurrentLanguage(): { lang: SupportedLang; prefix: string; dir: "ltr" | "rtl" } {
  const params = useParams();
  const { i18n } = useTranslation();
  const fromUrl = (params.lang || "").toLowerCase();
  const lang: SupportedLang = (SUPPORTED_LANGS as readonly string[]).includes(fromUrl)
    ? (fromUrl as SupportedLang)
    : (i18n.language?.split("-")[0] as SupportedLang) || "en";
  const safeLang: SupportedLang = (SUPPORTED_LANGS as readonly string[]).includes(lang) ? lang : "en";

  useEffect(() => {
    if (i18n.language?.split("-")[0] !== safeLang) {
      i18n.changeLanguage(safeLang);
    }
    const meta = LANG_META[safeLang];
    if (typeof document !== "undefined") {
      document.documentElement.lang = meta.htmlLang;
      document.documentElement.dir = meta.dir;
    }
  }, [safeLang, i18n]);

  return { lang: safeLang, prefix: `/${safeLang}`, dir: LANG_META[safeLang].dir };
}

export function buildPath(lang: SupportedLang, path: string): string {
  if (!path || path === "/") return `/${lang}`;
  if (path.startsWith("/")) return `/${lang}${path}`;
  return `/${lang}/${path}`;
}