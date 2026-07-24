import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pt from "./locales/pt";
import es from "./locales/es";
import ar from "./locales/ar";
import fr from "./locales/fr";
import en from "./locales/en";

export const SUPPORTED_LANGS = ["en", "pt", "es", "fr", "ar"] as const;
export type SupportedLang = typeof SUPPORTED_LANGS[number];

export const LANG_META: Record<SupportedLang, { name: string; flag: string; dir: "ltr" | "rtl"; ogLocale: string; htmlLang: string }> = {
  en: { name: "English", flag: "🇺🇸", dir: "ltr", ogLocale: "en_US", htmlLang: "en" },
  pt: { name: "Português", flag: "🇧🇷", dir: "ltr", ogLocale: "pt_BR", htmlLang: "pt-BR" },
  es: { name: "Español", flag: "🇪🇸", dir: "ltr", ogLocale: "es_ES", htmlLang: "es" },
  fr: { name: "Français", flag: "🇫🇷", dir: "ltr", ogLocale: "fr_FR", htmlLang: "fr" },
  ar: { name: "العربية", flag: "🇸🇦", dir: "rtl", ogLocale: "ar_AR", htmlLang: "ar" },
};

if (typeof window !== "undefined") {
  i18n.use(LanguageDetector);
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
      es: { translation: es },
      fr: { translation: fr },
      ar: { translation: ar },
    },
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LANGS as unknown as string[],
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    detection: {
      order: ["path", "localStorage", "navigator"],
      lookupFromPathIndex: 0,
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    returnObjects: true,
  });

export function detectInitialLang(): SupportedLang {
  try {
    const stored = localStorage.getItem("i18nextLng") as SupportedLang | null;
    if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  } catch {}
  const nav = (typeof navigator !== "undefined" ? navigator.language || "" : "").toLowerCase();
  if (nav.startsWith("pt")) return "pt";
  if (nav.startsWith("es")) return "es";
  if (nav.startsWith("fr")) return "fr";
  if (nav.startsWith("ar")) return "ar";
  return "en";
}

export default i18n;