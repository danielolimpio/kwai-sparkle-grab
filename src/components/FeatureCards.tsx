import { CheckCircle, Star, Infinity, Gift, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const ICONS = [CheckCircle, Star, Infinity, Gift, Zap];

export function FeatureCards() {
  const { t } = useTranslation();
  const items = (t("features.items", { returnObjects: true }) as { title: string; desc: string }[]) || [];
  const features = items.map((it, i) => ({ ...it, icon: ICONS[i] || CheckCircle }));
  return (
    <section className="px-4 py-12 section-cinematic" aria-label="Recursos do baixador de vídeos do Kwai">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
        {features.map((f) => (
          <div
            key={f.title}
            className="card-premium p-6 text-center"
          >
            <div className="icon-premium inline-flex p-3.5 rounded-2xl mb-4">
              <f.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-foreground text-lg mb-1.5">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}