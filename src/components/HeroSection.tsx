import { Download, Link as LinkIcon, ClipboardPaste, X } from "lucide-react";
import { useState, ReactNode } from "react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { useCurrentLanguage, buildPath } from "@/hooks/use-current-language";
import kwaiHero1 from "@/assets/kwai-hero-1.png";
import kwaiHero2 from "@/assets/kwai-hero-2.png";

interface HeroSectionProps {
  onSearch: (url: string) => void;
  isLoading: boolean;
  resultsSlot?: ReactNode;
}

export function HeroSection({ onSearch, isLoading, resultsSlot }: HeroSectionProps) {
  const [url, setUrl] = useState("");
  const { t } = useTranslation();
  const { lang } = useCurrentLanguage();

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      toast.success(t("hero.toasts.pasted"));
    } catch {
      toast.error(t("hero.toasts.pasteError"));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      toast.error(t("hero.toasts.empty"));
      return;
    }
    onSearch(url.trim());
  };

  return (
    <section className="text-center py-14 px-4 animate-fade-in section-cinematic">
      <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight">
        {t("hero.h1a")}{" "}
        <span className="gradient-kwai-text">{t("hero.h1b")}</span>
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
        {t("hero.subtitle")}
      </p>

      <form onSubmit={handleSubmit} className="max-w-[700px] mx-auto">
        <div className="relative flex items-center">
          <div className="absolute left-4 text-primary z-10">
            <LinkIcon className="h-5 w-5" />
          </div>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={t("hero.placeholder")}
            className="w-full h-16 pl-12 pr-28 rounded-2xl border border-input bg-card text-foreground placeholder:text-muted-foreground text-lg shadow-premium focus:outline-none focus:border-primary focus:ring-[4px] focus:ring-primary/20 transition-all overflow-hidden text-ellipsis"
            aria-label={t("hero.inputAria")}
          />
          <div className="absolute right-2 flex items-center gap-1 bg-card pl-2">
            {url && (
              <button
                type="button"
                onClick={() => { setUrl(""); }}
                className="flex items-center gap-1 px-2 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
              >
                <X className="h-4 w-4" />
                <span className="hidden sm:inline">{t("hero.clear")}</span>
              </button>
            )}
            <button
              type="button"
              onClick={handlePaste}
              className="flex items-center gap-1 px-2 py-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
            >
              <ClipboardPaste className="h-4 w-4" />
              <span className="hidden sm:inline">{t("hero.paste")}</span>
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="mt-5 h-16 px-14 btn-premium text-primary-foreground font-display font-bold text-lg rounded-2xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
        >
          {isLoading ? (
            <div className="h-6 w-6 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
          ) : (
            <Download className="h-6 w-6" />
          )}
          {isLoading ? t("hero.ctaLoading") : t("hero.cta")}
        </button>

        <p className="mt-5 text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
          {t("hero.disclaimer")}{" "}
          <a href={buildPath(lang, "/uso-responsavel")} className="text-primary font-semibold hover:underline">{t("hero.learnMore")}</a>
        </p>
      </form>

      {/* Results slot */}
      {resultsSlot}

      {/* Showcase images */}
      <div className="max-w-5xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 px-2">
        <div className="rounded-3xl overflow-hidden hairline border shadow-premium-lg hover:-translate-y-1 transition-all duration-500">
          <img
            src={kwaiHero1}
            alt={t("hero.img1Alt")}
            width={1088}
            height={608}
            className="w-full h-auto object-cover"
            loading="eager"
            {...{ fetchpriority: "high" }}
            decoding="async"
          />
        </div>
        <div className="rounded-3xl overflow-hidden hairline border shadow-premium-lg hover:-translate-y-1 transition-all duration-500">
          <img
            src={kwaiHero2}
            alt={t("hero.img2Alt")}
            width={1088}
            height={608}
            className="w-full h-auto object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}