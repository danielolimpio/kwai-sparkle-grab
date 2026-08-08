import { Video, Music, FileImage, Hash } from "lucide-react";
import { useTranslation } from "react-i18next";

const ICONS = [Video, Music, FileImage, Hash];

export function SupportedFormats() {
  const { t } = useTranslation();
  const title = t("formats.title") as string;
  const items = (t("formats.items", { returnObjects: true }) as { title: string; desc: string }[]) || [];
  const formats = items.map((f, i) => ({ ...f, icon: ICONS[i] || Video }));
  return (
    <section className="px-4 py-14 max-w-5xl mx-auto" aria-label={title}>
      <h2 className="text-3xl font-display font-extrabold text-foreground text-center mb-3">{title}</h2>
      <hr className="divider-premium max-w-xs mx-auto mb-10" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {formats.map((f) => (
          <div key={f.title} className="card-premium p-6 text-center">
            <div className="icon-premium inline-flex p-3.5 rounded-2xl mb-4">
              <f.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-foreground text-lg mb-1.5">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}