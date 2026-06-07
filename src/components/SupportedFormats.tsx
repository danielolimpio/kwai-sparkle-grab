import { Video, Music, FileImage, Hash } from "lucide-react";
import { useTranslation } from "react-i18next";

const ICONS = [Video, Music, FileImage, Hash];

export function SupportedFormats() {
  const { t } = useTranslation();
  const title = t("formats.title") as string;
  const items = (t("formats.items", { returnObjects: true }) as { title: string; desc: string }[]) || [];
  const formats = items.map((f, i) => ({ ...f, icon: ICONS[i] || Video }));
  return (
    <section className="px-4 py-10 max-w-5xl mx-auto" aria-label={title}>
      <h2 className="text-2xl font-bold text-foreground text-center mb-8">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {formats.map((f) => (
          <div key={f.title} className="bg-card border border-border rounded-2xl p-5 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className="gradient-kwai inline-flex p-3 rounded-xl mb-3">
              <f.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">{f.title}</h3>
            <p className="text-xs text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}