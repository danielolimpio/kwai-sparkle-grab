import {
  HelpCircle, Shield, Download, Smartphone, Globe, Lock, Video, Zap,
  Settings, AlertTriangle, FileText, Users, Eye, Scale, Clock, ChevronRight,
  MonitorSmartphone, Wifi, WifiOff, HardDrive, Share2, Copyright, Bell,
  LayoutGrid, Bookmark, Search, RefreshCw, Headphones
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQCategory {
  title: string;
  icon: React.ElementType;
  badge: string;
  questions: { q: string; a: string }[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "Como Baixar em Cada Dispositivo",
    icon: Smartphone,
    badge: "Passo a passo",
    questions: [
      {
        q: "Como baixar vídeo do Kwai no celular Android?",
        a: "Abra o app Kwai, toque em Compartilhar e escolha \"Copiar link\". Volte ao KwaiSave, cole o link no campo e toque em Baixar Agora. O arquivo MP4 vai direto para a pasta Downloads do Android, sem marca d'água e sem instalar nenhum aplicativo.",
      },
      {
        q: "Como baixar vídeos do Kwai no iPhone?",
        a: "No iPhone, copie o link do vídeo pelo botão Compartilhar do Kwai e cole no KwaiSave usando o Safari ou o Chrome. Ao tocar em baixar, o iOS salva o vídeo no app Arquivos; de lá você pode movê-lo para o rolo da câmera.",
      },
      {
        q: "Como baixar vídeo do Kwai no PC ou notebook?",
        a: "No computador, abra o vídeo no site do Kwai, copie o endereço da barra do navegador e cole no KwaiSave. O download do vídeo Kwai começa em segundos e o MP4 fica na pasta de downloads do Windows, macOS ou Linux.",
      },
      {
        q: "Onde ficam os vídeos baixados do Kwai?",
        a: "Os vídeos baixados ficam sempre no seu dispositivo: pasta Downloads no Android e no computador, app Arquivos no iPhone. O KwaiSave não guarda cópias — o histórico exibido no site fica apenas no seu navegador.",
      },
      {
        q: "Dá para baixar vídeo do Kwai sem marca d'água pelo link encurtado?",
        a: "Sim. Links encurtados do tipo kw.ai são reconhecidos automaticamente. Cole o link como veio do botão Compartilhar e o baixador resolve o endereço final antes de gerar o MP4 sem marca d'água.",
      },
    ],
  },
  {
    title: "Kwai, Kuaishou e Aplicativos",
    icon: Smartphone,
    badge: "Plataforma",
    questions: [
      {
        q: "Preciso baixar o Kwai APK para usar o baixador?",
        a: "Não. O KwaiSave é um Kwai downloader online: funciona pelo navegador, sem Kwai APK, sem Kwai Lite e sem mod. Se quiser o app oficial, prefira sempre a Google Play ou a App Store.",
      },
      {
        q: "O KwaiSave funciona como Kuaishou video downloader?",
        a: "Sim. O Kwai é a versão internacional do Kuaishou, então links das duas plataformas são aceitos. Basta colar a URL para fazer o download do vídeo em MP4, com a mesma qualidade original.",
      },
      {
        q: "Consigo converter o vídeo do Kwai em MP3?",
        a: "Quando o vídeo possui trilha própria, é possível salvar o áudio a partir do MP4 baixado usando qualquer conversor. O KwaiSave entrega o arquivo com áudio original intacto, pronto para extração.",
      },
      {
        q: "Posso baixar Kwai grátis sem cadastro e sem limite?",
        a: "Sim. Baixar Kwai grátis é o padrão aqui: sem cadastro, sem login, sem assinatura e sem limite diário de downloads. Nenhuma etapa extra é exigida além de colar o link.",
      },
      {
        q: "O baixador funciona com Kwai Shorts, lives ou fotos?",
        a: "Não. O KwaiSave é focado exclusivamente em vídeos padrão do Kwai. Transmissões ao vivo, publicações de fotos e formatos especiais não são compatíveis com o download.",
      },
    ],
  },
  {
    title: "Funcionalidades e Uso Geral",
    icon: Settings,
    badge: "Básico",
    questions: [
      {
        q: "Quantos vídeos posso baixar do Kwai por dia no KwaiSave?",
        a: "Não há limite diário. Você pode baixar vídeos Kwai quantas vezes quiser, sem restrições de quantidade, sem cadastro e sem custos. Nosso baixador de vídeos do Kwai foi projetado para suportar alto volume de requisições.",
      },
      {
        q: "O KwaiSave funciona com links encurtados para baixar vídeo do Kwai?",
        a: "Sim. O KwaiSave reconhece automaticamente links encurtados (como kw.ai/xxx) e links completos da plataforma. Basta colar o link para baixar vídeo do Kwai por link de forma automática.",
      },
      {
        q: "Posso baixar vídeos do Kwai de qualquer país?",
        a: "Sim. O KwaiSave funciona globalmente para download vídeo Kwai, sem restrições geográficas. Desde que o vídeo esteja público, você pode baixar vídeos Kwai de qualquer lugar do mundo.",
      },
      {
        q: "O KwaiSave salva meu histórico ao baixar vídeos do Kwai?",
        a: "Não armazenamos histórico de downloads em nossos servidores. Os vídeos recentes aparecem apenas localmente no seu navegador. Sua privacidade ao salvar vídeo do Kwai é garantida.",
      },
      {
        q: "Preciso instalar app para baixar Kwai vídeos?",
        a: "Não. O KwaiSave é uma ferramenta 100% online. Não é necessário baixar Kwai Lite ou qualquer aplicativo. Basta acessar o site, colar o link e fazer o download vídeo Kwai direto no navegador.",
      },
    ],
  },
  {
    title: "Qualidade e Formato dos Vídeos",
    icon: Video,
    badge: "Técnico",
    questions: [
      {
        q: "Em quais formatos o vídeo é baixado ao usar o baixador de vídeos do Kwai?",
        a: "Os vídeos são baixados no formato MP4 (H.264), universalmente compatível com todos os dispositivos. Este é o formato padrão ao baixar vídeos do Kwai sem marca d'água pelo KwaiSave.",
      },
      {
        q: "A qualidade do download vídeo Kwai é igual à do original?",
        a: "Sim. O KwaiSave permite baixar vídeo do Kwai na melhor qualidade disponível no servidor, preservando resolução, taxa de quadros e áudio originais. Não aplicamos recompressão.",
      },
      {
        q: "Posso escolher a resolução ao baixar vídeos Kwai?",
        a: "Quando disponíveis múltiplas resoluções, o KwaiSave apresenta opções como 360p, 480p, 720p e 1080p para você escolher antes de baixar vídeo do Kwai sem marca d'água.",
      },
      {
        q: "Os vídeos baixados do Kwai possuem áudio?",
        a: "Sim. Todo download vídeo Kwai inclui a trilha de áudio original integrada no arquivo MP4, pronto para reprodução imediata após salvar vídeo do Kwai.",
      },
      {
        q: "Existe limite de duração para baixar vídeos do Kwai?",
        a: "Não impomos limite de duração. Vídeos curtos ou longos podem ser baixados normalmente. O tempo do download dependerá do tamanho do arquivo e da sua conexão.",
      },
    ],
  },
  {
    title: "Compatibilidade e Dispositivos",
    icon: MonitorSmartphone,
    badge: "Dispositivos",
    questions: [
      {
        q: "Posso baixar vídeo do Kwai no iPhone e iPad?",
        a: "Sim. O KwaiSave funciona perfeitamente no Safari e Chrome do iOS. Toque no botão de download para salvar vídeo do Kwai na pasta Arquivos ou no rolo da câmera.",
      },
      {
        q: "Funciona baixar vídeos Kwai no Firefox e Edge?",
        a: "Sim. O baixador de vídeos do Kwai é compatível com Chrome, Firefox, Edge, Safari, Opera, Brave e Samsung Internet. Mantenha o navegador atualizado para a melhor experiência.",
      },
      {
        q: "Posso usar o KwaiSave para baixar Kwai vídeos em Smart TVs?",
        a: "Se sua Smart TV possui navegador com suporte a downloads, é possível. Recomendamos baixar vídeo do Kwai pelo celular ou computador e transferir via USB ou Chromecast.",
      },
      {
        q: "O site funciona bem em conexões lentas para download vídeo Kwai?",
        a: "Sim. O KwaiSave foi otimizado para performance. O processamento do link é feito em nossos servidores, então apenas o download do vídeo do Kwai depende da sua conexão.",
      },
      {
        q: "Onde o vídeo do Kwai é salvo após o download no Android?",
        a: "No Android, o vídeo geralmente é salvo na pasta 'Downloads'. Você pode acessar os vídeos baixados do Kwai pelo gerenciador de arquivos ou galeria do celular.",
      },
    ],
  },
  {
    title: "Segurança e Privacidade",
    icon: Shield,
    badge: "Segurança",
    questions: [
      {
        q: "O KwaiSave coleta dados ao baixar vídeos do Kwai?",
        a: "Não. Nosso baixador de vídeos do Kwai não solicita cadastro, login ou qualquer dado pessoal. Não utilizamos cookies de rastreamento. Sua privacidade ao baixar vídeos Kwai é absoluta.",
      },
      {
        q: "O site possui certificado SSL para download vídeo Kwai seguro?",
        a: "Sim. Todo tráfego é protegido por HTTPS com certificado SSL válido. Baixar vídeo do Kwai por link aqui garante comunicação criptografada e segura.",
      },
      {
        q: "Os vídeos baixados do Kwai podem conter vírus?",
        a: "Não. Os vídeos são obtidos diretamente dos servidores do Kwai. Arquivos MP4 são mídias passivas que não executam código. Baixar vídeos do Kwai pelo KwaiSave é seguro.",
      },
      {
        q: "O Kwai sabe quando eu baixo vídeo do Kwai pelo KwaiSave?",
        a: "O KwaiSave acessa vídeos públicos de forma similar a qualquer navegador. Não compartilhamos dados com o Kwai e não existe notificação ao criador quando você salva vídeo do Kwai por ferramentas externas.",
      },
      {
        q: "Minha conta corre risco ao usar o baixador de vídeos do Kwai?",
        a: "Não. O KwaiSave não acessa sua conta, não solicita credenciais e não interage com perfis. A ferramenta trabalha apenas com links públicos para baixar vídeo do Kwai sem marca d'água.",
      },
    ],
  },
  {
    title: "Direitos Autorais e Uso Legal",
    icon: Scale,
    badge: "Legal",
    questions: [
      {
        q: "É legal baixar vídeos do Kwai sem marca d'água?",
        a: "Baixar vídeos públicos para uso pessoal e privado é geralmente permitido pela legislação brasileira, dentro das exceções da Lei de Direitos Autorais (Lei 9.610/98). Redistribuição ou uso comercial sem autorização é proibido.",
      },
      {
        q: "Posso usar vídeos baixados do Kwai em trabalhos escolares?",
        a: "Sim, desde que o uso seja educacional e sem fins lucrativos, com atribuição ao autor original. A legislação brasileira prevê exceções para uso didático ao baixar vídeos do Kwai.",
      },
      {
        q: "Posso republicar vídeos que baixei do Kwai em outras redes?",
        a: "Não recomendamos. Republicar conteúdo de terceiros sem autorização viola direitos autorais. O download vídeo Kwai deve ser para uso pessoal. Respeite o trabalho dos criadores.",
      },
      {
        q: "O que acontece se eu usar indevidamente um vídeo baixado do Kwai?",
        a: "O uso indevido pode resultar em notificações DMCA, penalizações nas plataformas e responsabilização legal. Baixar vídeos Kwai é para uso pessoal e privado.",
      },
      {
        q: "Como verificar se um vídeo do Kwai tem direitos autorais?",
        a: "Presuma que todo conteúdo possui proteção autoral. Verifique se o criador disponibilizou licenças abertas na descrição. Em caso de dúvida, contate o criador antes de baixar vídeo do Kwai.",
      },
    ],
  },
  {
    title: "Problemas Técnicos e Suporte",
    icon: RefreshCw,
    badge: "Suporte",
    questions: [
      {
        q: "O download do vídeo do Kwai falhou. O que fazer?",
        a: "Verifique se o link está correto e se o vídeo ainda está público. Tente limpar o campo e colar novamente. Se o problema persistir ao baixar vídeo do Kwai, o vídeo pode ter sido removido.",
      },
      {
        q: "O vídeo do Kwai baixou sem áudio. Como resolver?",
        a: "Isso é raro, mas pode ocorrer com problemas de codificação no original. Tente baixar vídeo do Kwai novamente. Se persistir, verifique o vídeo original na plataforma Kwai.",
      },
      {
        q: "Por que alguns links do Kwai não funcionam no baixador?",
        a: "Links de vídeos privados, removidos ou de contas suspensas não são processados. Certifique-se de que o vídeo está público para baixar vídeos do Kwai online. Lives em andamento também não são compatíveis.",
      },
      {
        q: "O site está lento para baixar Kwai vídeos. Isso é normal?",
        a: "Picos de acesso podem causar lentidão temporária no download vídeo Kwai. Nossos servidores escalam automaticamente. Se persistir, tente em alguns minutos.",
      },
      {
        q: "Como entrar em contato com o suporte do baixador de vídeos do Kwai?",
        a: "Acesse a página de Contato no menu lateral. Responderemos em até 48 horas úteis sobre dúvidas de como baixar vídeos do Kwai. Para direitos autorais, use o canal DMCA.",
      },
    ],
  },
];

const faqSchemaData = faqCategories.flatMap((cat) =>
  cat.questions.map((q) => ({ question: q.q, answer: q.a }))
);

export default function FAQPage() {
  const { t } = useTranslation();
  return (
    <PageLayout breadcrumbs={[{ name: "Início", url: "/" }, { name: "FAQ", url: "/faq" }]}>
      <SEOHead
        title={t("meta.faqPage.title") as string}
        description={t("meta.faqPage.description") as string}
        canonical="/faq"
        breadcrumbs={[
          { name: "Início", url: "/" },
          { name: "FAQ", url: "/faq" },
        ]}
        faq={faqSchemaData}
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="gradient-kwai p-2.5 rounded-xl shadow-kwai">
            <HelpCircle className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="gradient-kwai text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            Central de Ajuda
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mt-4 mb-2">
          Perguntas Frequentes — Baixar Vídeos Kwai
        </h1>
        <p className="text-muted-foreground mb-4">
          Encontre respostas sobre como baixar vídeos do Kwai sem marca d'água, download vídeo Kwai, salvar vídeo do Kwai por link e mais.
        </p>
        <p className="text-sm text-muted-foreground mb-10">
          Última atualização: 10 de abril de 2026
        </p>

        {/* Quick Nav */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-10">
          <h2 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
            Navegação Rápida
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {faqCategories.map((cat, i) => (
              <a
                key={i}
                href={`#faq-cat-${i}`}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-background hover:border-primary/40 hover:bg-primary/5 transition-all group"
              >
                <cat.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {cat.title}
                </span>
                <ChevronRight className="h-3 w-3 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-10">
          {faqCategories.map((cat, catIndex) => (
            <section key={catIndex} id={`faq-cat-${catIndex}`} className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <cat.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">{cat.title}</h2>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border border-border bg-muted text-muted-foreground">
                  {cat.badge}
                </span>
              </div>

              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <Accordion type="single" collapsible className="divide-y divide-border">
                  {cat.questions.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`cat-${catIndex}-q-${i}`}
                      className="border-none"
                    >
                      <AccordionTrigger className="px-6 py-4 text-sm font-semibold text-foreground hover:text-primary hover:no-underline text-left">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="mt-12 bg-card border border-border rounded-2xl p-8 text-center">
          <div className="bg-primary/10 p-3 rounded-xl inline-block mb-4">
            <Headphones className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Ainda tem dúvidas sobre como baixar vídeos Kwai?</h3>
          <p className="text-sm text-muted-foreground mb-5 max-w-md mx-auto">
            Se você não encontrou a resposta sobre download vídeo Kwai, entre em contato com nossa equipe.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 gradient-kwai text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-semibold shadow-kwai hover:opacity-90 transition-opacity"
            >
              Fale Conosco
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/uso-responsavel"
              className="inline-flex items-center gap-2 border border-border bg-background text-foreground px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-muted transition-colors"
            >
              Uso Responsável
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
            Este FAQ sobre como baixar vídeos do Kwai é fornecido para fins informativos e não constitui aconselhamento jurídico. O KwaiSave não é afiliado, endossado ou patrocinado pelo Kwai ou Kuaishou Technology.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}