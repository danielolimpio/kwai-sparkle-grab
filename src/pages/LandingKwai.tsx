import { useState } from "react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Download, Link as LinkIcon, Check, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import { VideoCard } from "@/components/VideoCard";
import { useCurrentLanguage, buildPath } from "@/hooks/use-current-language";
import { LANDINGS, getLandingContent, type LandingConfig } from "@/data/landings";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { VideoResult } from "@/pages/Index";

export default function LandingKwai({ landing }: { landing: LandingConfig }) {
  const { t } = useTranslation();
  const { lang } = useCurrentLanguage();
  const c = getLandingContent(landing, lang);

  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<VideoResult[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = url.trim();
    if (!value) {
      toast.error(t("hero.toasts.empty"));
      return;
    }
    if (!/kwai\.com|kw\.ai|kwai/i.test(value)) {
      toast.error(t("hero.toasts.invalid"));
      return;
    }
    setIsLoading(true);
    setResults([]);
    try {
      const { data, error } = await supabase.functions.invoke("kwai-download", { body: { url: value } });
      if (error) { toast.error(t("hero.toasts.error")); return; }
      if (data?.error) { toast.error(data.error); return; }
      if (data?.success && data?.data) {
        setResults([data.data]);
        toast.success(t("hero.toasts.ready"));
      } else {
        toast.error(t("hero.toasts.notFound"));
      }
    } catch {
      toast.error(t("hero.toasts.connection"));
    } finally {
      setIsLoading(false);
    }
  };

  const others = LANDINGS.filter((l) => l.key !== landing.key);

  return (
    <PageLayout
      breadcrumbs={[
        { name: t("breadcrumb.home") as string, url: buildPath(lang, "/") },
        { name: c.h1, url: buildPath(lang, landing.slug) },
      ]}
    >
      <SEOHead
        title={c.title}
        description={c.description}
        canonical={landing.slug}
        breadcrumbs={[
          { name: t("breadcrumb.home") as string, url: buildPath(lang, "/") },
          { name: c.h1, url: buildPath(lang, landing.slug) },
        ]}
        faq={c.faq}
        schemaType="page"
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
          {c.h1}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">{c.intro}</p>

        {/* Downloader */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="relative flex items-center">
            <LinkIcon className="absolute left-4 h-5 w-5 text-primary z-10" aria-hidden="true" />
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={t("hero.placeholder")}
              aria-label={t("hero.inputAria")}
              className="w-full h-14 pl-12 pr-4 rounded-2xl border border-input bg-card text-foreground placeholder:text-muted-foreground shadow-premium focus:outline-none focus:border-primary focus:ring-[4px] focus:ring-primary/20 transition-all"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="mt-3 w-full sm:w-auto inline-flex items-center justify-center gap-2 gradient-kwai text-primary-foreground font-semibold px-7 h-12 rounded-xl shadow-kwai hover:opacity-95 transition-opacity disabled:opacity-60"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            {isLoading ? t("hero.ctaLoading") : t("hero.cta")}
          </button>
        </form>

        {results.length > 0 && (
          <section className="space-y-4 mb-10 animate-fade-in">
            <h2 className="text-xl font-bold text-foreground">{t("results.title")}</h2>
            {results.map((r, i) => (<VideoCard key={i} {...r} />))}
          </section>
        )}

        {/* Bullets */}
        <ul className="grid sm:grid-cols-2 gap-3 mb-12">
          {c.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-sm text-foreground leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-foreground mb-5">{c.steps.h2}</h2>
          <ol className="space-y-4">
            {c.steps.items.map((s, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="gradient-kwai text-primary-foreground text-sm font-bold h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <p className="text-muted-foreground leading-relaxed pt-1">{s}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Content sections */}
        {c.sections.map((s, i) => (
          <section key={i} className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">{s.h2}</h2>
            {s.paragraphs.map((p, j) => (
              <p key={j} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
            ))}
          </section>
        ))}

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-foreground mb-5">FAQ</h2>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <Accordion type="single" collapsible className="divide-y divide-border">
              {c.faq.map((f, i) => (
                <AccordionItem key={i} value={`q-${i}`} className="border-none">
                  <AccordionTrigger className="px-6 py-4 text-sm font-semibold text-foreground hover:text-primary hover:no-underline text-left">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Internal links */}
        <nav className="grid sm:grid-cols-2 gap-3" aria-label="Related pages">
          {others.map((l) => (
            <Link
              key={l.key}
              to={buildPath(lang, l.slug)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all group"
            >
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {getLandingContent(l, lang).h1}
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </nav>
      </article>
    </PageLayout>
  );
}
