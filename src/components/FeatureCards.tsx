import { CheckCircle, Star, Infinity, Gift, Zap } from "lucide-react";

const features = [
  { icon: CheckCircle, title: "Sem Marca d'Água", desc: "Baixar vídeo do Kwai sem marca d'água" },
  { icon: Star, title: "Alta Qualidade", desc: "Download vídeo Kwai até 1080p Full HD" },
  { icon: Infinity, title: "Download Ilimitado", desc: "Baixar vídeos Kwai sem limites" },
  { icon: Gift, title: "100% Grátis", desc: "Baixador de vídeos do Kwai gratuito" },
  { icon: Zap, title: "Super Rápido", desc: "Salvar vídeo do Kwai em segundos" },
];

export function FeatureCards() {
  return (
    <section className="px-4 py-8" aria-label="Recursos do baixador de vídeos do Kwai">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-card border border-border rounded-2xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="gradient-kwai inline-flex p-3 rounded-2xl mb-3 shadow-kwai">
              <f.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">{f.title}</h3>
            <p className="text-xs text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}