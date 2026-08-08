import { ClipboardPaste, ListChecks, Download } from "lucide-react";
import { useTranslation } from "react-i18next";

const ICONS = [ClipboardPaste, ListChecks, Download];

export function HowItWorks() {
  const { t } = useTranslation();
  const title = t("how.title") as string;
  const items = (t("how.steps", { returnObjects: true }) as { title: string; desc: string }[]) || [];
  const steps = items.map((s, i) => ({ ...s, icon: ICONS[i] || Download }));
  return (
    <section className="px-4 py-14 max-w-4xl mx-auto" aria-label={title}>
      <h2 className="text-3xl font-display font-extrabold text-foreground text-center mb-3">{title}</h2>
      <hr className="divider-premium max-w-xs mx-auto mb-10" />
      <div className="card-premium p-9">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center relative">
              <div className="icon-premium w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 icon-premium text-primary-foreground text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center">
                {i + 1}
              </span>
              <h3 className="font-display font-bold text-foreground text-xl mb-1.5">{step.title}</h3>
              <p className="text-base text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}