import { CheckCircle2, Sparkles, Globe2, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const ICONS = [CheckCircle2, Sparkles, Globe2, ShieldCheck];

export function SEOContentBlock() {
  const { t } = useTranslation();
  const highlightTexts = (t("seoBlock.highlights", { returnObjects: true }) as string[]) || [];
  const highlights = highlightTexts.map((text, i) => ({ text, icon: ICONS[i] || CheckCircle2 }));
  return (
    <section className="px-4 py-10 max-w-4xl mx-auto" aria-label={t("seoBlock.title") as string}>
      <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
        <div>
          <span className="gradient-kwai text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">{t("seoBlock.badge")}</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-3 mb-2">{t("seoBlock.title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("seoBlock.p1")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {highlights.map((h) => (
            <div key={h.text} className="flex items-start gap-3 p-3 rounded-xl bg-muted/40 border border-border">
              <div className="gradient-kwai p-2 rounded-lg shrink-0">
                <h.icon className="h-4 w-4 text-primary-foreground" />
              </div>
              <p className="text-sm text-foreground">{h.text}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>{t("seoBlock.p2")}</p>
          <p>{t("seoBlock.p3")}</p>
          <p>{t("seoBlock.p4")}</p>
        </div>
      </div>
    </section>
  );
}
