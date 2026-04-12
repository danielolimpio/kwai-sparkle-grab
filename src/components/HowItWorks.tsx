import { ClipboardPaste, ListChecks, Download } from "lucide-react";

const steps = [
  { icon: ClipboardPaste, title: "Cole o link do Kwai", desc: "Copie o link do vídeo no Kwai e cole no campo acima para baixar." },
  { icon: ListChecks, title: "Escolha o formato", desc: "Selecione a qualidade desejada para o download vídeo Kwai." },
  { icon: Download, title: "Baixar vídeo do Kwai", desc: "Clique em baixar e salve o vídeo do Kwai sem marca d'água." },
];

export function HowItWorks() {
  return (
    <section className="px-4 py-10 max-w-4xl mx-auto" aria-label="Como baixar vídeos do Kwai online">
      <h2 className="text-2xl font-bold text-foreground text-center mb-8">Como Baixar Vídeos do Kwai</h2>
      <div className="bg-card border border-border rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center relative">
              <div className="gradient-kwai w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-kwai">
                <step.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 gradient-kwai text-primary-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {i + 1}
              </span>
              <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}