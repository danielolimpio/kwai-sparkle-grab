import { CheckCircle2, Sparkles, Globe2, ShieldCheck } from "lucide-react";

const highlights = [
  { icon: CheckCircle2, text: "Download em MP4 sem marca d'água, 100% online" },
  { icon: Sparkles, text: "Compatível com Kwai short video community e Kuaishou" },
  { icon: Globe2, text: "Funciona em Android, iOS, PC e qualquer navegador" },
  { icon: ShieldCheck, text: "Sem instalação de Kwai APK, mod ou app adicional" },
];

export function SEOContentBlock() {
  return (
    <section className="px-4 py-10 max-w-4xl mx-auto" aria-label="Sobre o baixador de vídeos do Kwai">
      <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
        <div>
          <span className="gradient-kwai text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Baixador Premium</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-3 mb-2">
            Kwai Video Downloader — Baixar Vídeos do Kwai sem Marca d'Água
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Nosso <strong>baixador de vídeos do Kwai</strong> permite que você faça <strong>download de vídeos do Kwai sem marca d'água</strong> em segundos.
            Basta colar o link e pronto. Diferente de outras ferramentas, o KwaiSave é 100% online, gratuito e preserva a qualidade
            original do <strong>Kwai video</strong> em formato MP4.
          </p>
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
          <p>
            Compatível com <strong>Kwai APK</strong>, <strong>Kwai app download</strong> e todas as versões do
            <strong> Kwai short video community</strong>. Nossa ferramenta funciona como um <em>kwai to mp4 converter</em> integrado,
            entregando arquivos prontos para tocar em qualquer dispositivo. É o jeito mais rápido de
            <strong> download kwai video by link</strong>.
          </p>
          <p>
            Como o Kwai é a versão internacional do Kuaishou, nosso <strong>kuaishou video downloader</strong> integrado
            permite baixar vídeos de ambas as plataformas com a mesma facilidade. Sem <em>kwai mod apk</em>,
            sem cadastro e sem cobranças escondidas — apenas <strong>kwai video download</strong> rápido e seguro.
          </p>
          <p>
            Quer <strong>baixar video do Kwai</strong>, <strong>baixar video Kwai</strong> ou <strong>baixar videos do Kwai</strong> em
            lote? Use o KwaiSave para <strong>baixar Kwai grátis</strong>, <strong>baixar Kwai sem marca d'água</strong> e
            <strong> salvar vídeo do Kwai</strong> direto pelo navegador. Funciona também como
            <strong> baixar vídeo Kwai online</strong>, <strong>baixar video do Kwai por link</strong> e
            <strong> baixar video do Kwai online</strong> sem precisar instalar nada.
          </p>
          <p>
            Procura por <strong>kwai download</strong>, <strong>kwai downloader</strong>, <strong>download video Kwai</strong> ou
            <strong> kwai baixar vídeos</strong> em alta qualidade? Aqui você consegue
            <strong> baixar video Kwai sem marca</strong>, <strong>baixar vídeo do Kwai</strong> em MP4 HD 1080p, 720p, 480p ou 360p,
            sempre <em>baixar vídeos sem marca d'água</em> em poucos segundos. Alternativa rápida e segura a soluções como
            <em> magicdown</em>, <em>vidburner</em>, <em>anydownloader</em>, <em>dlbunny</em> e <em>kuaishou video downloader</em>.
          </p>
          <p>
            Use o KwaiSave também para <strong>kwai baixar pelo Google</strong>, <strong>kwai web</strong>,
            <strong> baixar Kwai sem marca dagua</strong> e <strong>baixar do Kwai sem marca d água</strong> em qualquer
            dispositivo — Android, iPhone, iPad, Windows, Mac e Linux. É a forma mais simples de
            <strong> como baixar video do Kwai</strong> e <strong>como baixar videos do Kwai sem marca d'água</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
