import { ClipboardCopy, Link2, Download, CheckCircle2, Smartphone, Monitor, Zap, ShieldCheck, HelpCircle } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Link2,
    title: "Abra o Kwai e copie o link",
    desc: "Abra o app Kwai ou acesse a Kwai short video community no navegador. Encontre o vídeo que deseja baixar, toque em 'Compartilhar' e selecione 'Copiar link' para obter a URL.",
  },
  {
    icon: ClipboardCopy,
    title: "Cole o link no KwaiSave",
    desc: "Volte para baixarvideoskwai.com e cole o link do Kwai video no campo de download. O sistema reconhece automaticamente links curtos (kw.ai) e completos.",
  },
  {
    icon: Download,
    title: "Baixe o vídeo em MP4 sem marca d'água",
    desc: "Clique em 'Baixar Agora' e em segundos seu vídeo estará pronto em MP4, sem marca d'água, em alta qualidade. Funciona como um kwai to mp4 converter premium.",
  },
];

const tips = [
  { icon: Smartphone, title: "No celular (Android e iOS)", desc: "Use o navegador padrão (Chrome, Safari). Após o download, o vídeo vai direto para a galeria ou pasta Downloads." },
  { icon: Monitor, title: "No PC (Windows, Mac, Linux)", desc: "Funciona em qualquer navegador desktop. O download kwai for pc é igual ao mobile — basta colar o link e baixar." },
  { icon: Zap, title: "Sem perda de qualidade", desc: "Preservamos a resolução original do kwai video download — HD, Full HD e até 4K quando disponível." },
  { icon: ShieldCheck, title: "100% seguro", desc: "Sem instalação de kwai apk, sem cadastro, sem coleta de dados. É um kwai downloader without watermark realmente confiável." },
];

const tutorialFaq = [
  { question: "Quanto tempo leva para baixar um vídeo do Kwai?", answer: "Em média, 5 a 15 segundos. O tempo varia conforme a duração e a resolução do vídeo, mas o KwaiSave processa o download de vídeos do Kwai diretamente, sem filas." },
  { question: "Preciso instalar algum app para seguir este tutorial?", answer: "Não. Todo o processo é feito pelo navegador. Não é necessário Kwai APK, extensão ou aplicativo extra para baixar vídeo do Kwai sem marca d'água." },
  { question: "Posso baixar vídeos do Kwai no iPhone?", answer: "Sim. O tutorial funciona em iPhone, iPad, Android, PC e Mac. No iOS, salve em 'Arquivos' ou compartilhe direto para a galeria depois do download." },
  { question: "O vídeo baixado fica em MP4?", answer: "Sim. Todos os downloads ficam em MP4 sem marca d'água, prontos para tocar em qualquer player ou enviar pelo WhatsApp." },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Baixar Vídeos do Kwai sem Marca d'Água",
  description: "Tutorial passo a passo para fazer download de vídeos do Kwai sem marca d'água em MP4, grátis e online.",
  totalTime: "PT1M",
  supply: [{ "@type": "HowToSupply", name: "Link do vídeo do Kwai" }],
  tool: [{ "@type": "HowToTool", name: "Navegador web" }],
  step: steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.desc,
    url: `https://baixarvideoskwai.com/baixar-tutorial#step-${i + 1}`,
  })),
};

export default function BaixarTutorial() {
  const crumbs = [{ name: "Início", url: "/" }, { name: "Tutorial", url: "/baixar-tutorial" }];
  return (
    <PageLayout breadcrumbs={crumbs}>
      <SEOHead
        title="Como Baixar Vídeos do Kwai | Tutorial Passo a Passo 2026"
        description="Aprenda como baixar vídeos do Kwai sem marca d'água em 3 passos. Tutorial ilustrado para download kwai video by link em MP4, grátis e online."
        canonical="/baixar-tutorial"
        breadcrumbs={crumbs}
        faq={tutorialFaq}
        schemaType="article"
        article={{
          headline: "Como Baixar Vídeos do Kwai — Tutorial Passo a Passo 2026",
          datePublished: "2026-04-08",
          dateModified: "2026-05-15",
        }}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="gradient-kwai p-2.5 rounded-xl shadow-kwai">
            <Download className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="gradient-kwai text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Tutorial Oficial</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mt-4 mb-3">
          Como Fazer Download de Vídeos do Kwai em 3 Passos
        </h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Aprenda como baixar vídeos do Kwai sem marca d'água de forma rápida e gratuita. Funciona no celular, PC e qualquer
          navegador — sem precisar instalar o Kwai APK ou qualquer aplicativo adicional.
        </p>

        <div className="space-y-4 mb-10">
          {steps.map((step, i) => (
            <div key={step.title} id={`step-${i + 1}`} className="bg-card border border-border rounded-2xl p-6 hover:shadow-kwai transition-all">
              <div className="flex items-start gap-4">
                <div className="relative shrink-0">
                  <div className="gradient-kwai w-14 h-14 rounded-2xl flex items-center justify-center shadow-kwai">
                    <step.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-foreground text-background text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-foreground mb-1">{step.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            Dicas para um Download Perfeito
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tips.map((tip) => (
              <div key={tip.title} className="flex items-start gap-3 p-4 rounded-xl bg-muted/40 border border-border">
                <div className="gradient-kwai p-2 rounded-lg shrink-0">
                  <tip.icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{tip.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <HelpCircle className="h-10 w-10 text-primary mx-auto mb-3" />
          <h2 className="text-xl font-bold text-foreground mb-2">Pronto para baixar seu primeiro vídeo?</h2>
          <p className="text-muted-foreground mb-4 text-sm">Volte para a página inicial e cole o link do Kwai video.</p>
          <Link to="/" className="inline-flex items-center gap-2 gradient-kwai text-primary-foreground font-bold px-6 py-3 rounded-xl shadow-kwai hover:shadow-kwai-lg hover:scale-[1.02] transition-all">
            <Download className="h-5 w-5" />
            Baixar Agora
          </Link>
        </div>
      </div>

      <RelatedLinks
        items={[
          { title: "Kwai APK Original 2026", description: "Saiba onde baixar o Kwai app oficial com segurança garantida.", url: "/kwai-apk", icon: "apk" },
          { title: "Perguntas Frequentes", description: "Respostas para as dúvidas mais comuns sobre o baixador.", url: "/faq", icon: "faq" },
          { title: "Meus Downloads", description: "Veja o histórico de vídeos do Kwai que você já baixou.", url: "/downloads", icon: "download" },
          { title: "Uso Responsável", description: "Direitos autorais e regras ao salvar vídeo do Kwai.", url: "/uso-responsavel", icon: "uso" },
        ]}
      />
    </PageLayout>
  );
}
