import {
  HelpCircle, Shield, Download, Smartphone, Globe, Lock, Video, Zap,
  Settings, AlertTriangle, FileText, Users, Eye, Scale, Clock, ChevronRight,
  MonitorSmartphone, Wifi, WifiOff, HardDrive, Share2, Copyright, Bell,
  LayoutGrid, Bookmark, Search, RefreshCw, Headphones
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
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
    title: "Funcionalidades e Uso Geral",
    icon: Settings,
    badge: "Básico",
    questions: [
      {
        q: "Quantos vídeos posso baixar por dia no KwaiSave?",
        a: "Não há limite diário de downloads. Você pode baixar quantos vídeos quiser, sem restrições de quantidade, sem cadastro e sem custos. Nossa infraestrutura foi projetada para suportar alto volume de requisições com estabilidade.",
      },
      {
        q: "O KwaiSave funciona com links encurtados do Kwai?",
        a: "Sim. O KwaiSave reconhece automaticamente links encurtados (como kw.ai/xxx) e links completos da plataforma Kwai. Basta colar o link no campo de busca e nosso sistema resolverá o redirecionamento automaticamente.",
      },
      {
        q: "Posso baixar vídeos de qualquer país pelo KwaiSave?",
        a: "Sim. O KwaiSave funciona globalmente e não possui restrições geográficas. Desde que o vídeo esteja público na plataforma Kwai, você pode baixá-lo independentemente de sua localização ou do país de origem do conteúdo.",
      },
      {
        q: "O KwaiSave salva meu histórico de downloads?",
        a: "Não armazenamos histórico de downloads em nossos servidores. Os vídeos recentes aparecem apenas localmente no seu navegador durante a sessão ativa. Ao fechar o navegador, nenhum registro é mantido.",
      },
      {
        q: "É necessário instalar algum aplicativo para usar o KwaiSave?",
        a: "Não. O KwaiSave é uma ferramenta 100% online que funciona diretamente no navegador. Não é necessário baixar aplicativos, extensões ou plugins. Basta acessar o site, colar o link e fazer o download.",
      },
    ],
  },
  {
    title: "Qualidade e Formato dos Vídeos",
    icon: Video,
    badge: "Técnico",
    questions: [
      {
        q: "Em quais formatos o vídeo é baixado?",
        a: "Os vídeos são baixados no formato MP4 (H.264), que é universalmente compatível com todos os dispositivos, sistemas operacionais e players de mídia. Este formato oferece excelente relação entre qualidade e tamanho do arquivo.",
      },
      {
        q: "A qualidade do vídeo baixado é igual à do original?",
        a: "Sim. O KwaiSave baixa o vídeo na melhor qualidade disponível no servidor do Kwai, preservando a resolução, taxa de quadros e qualidade de áudio originais. Não aplicamos recompressão ao conteúdo.",
      },
      {
        q: "Posso escolher a resolução antes de baixar?",
        a: "Quando disponíveis múltiplas resoluções no servidor de origem, o KwaiSave apresenta as opções para que você escolha. Geralmente, as opções incluem qualidades como 360p, 480p, 720p e 1080p, dependendo do vídeo original.",
      },
      {
        q: "Os vídeos baixados possuem áudio?",
        a: "Sim. Todos os vídeos são baixados com a trilha de áudio original integrada. O download inclui vídeo e áudio no mesmo arquivo MP4, pronto para reprodução imediata.",
      },
      {
        q: "Existe limite de duração para os vídeos baixados?",
        a: "Não impomos limite de duração. Vídeos curtos ou longos podem ser baixados normalmente. A velocidade do download dependerá do tamanho do arquivo e da sua conexão de internet.",
      },
    ],
  },
  {
    title: "Compatibilidade e Dispositivos",
    icon: MonitorSmartphone,
    badge: "Dispositivos",
    questions: [
      {
        q: "O KwaiSave funciona no iPhone e iPad?",
        a: "Sim. O KwaiSave funciona perfeitamente no Safari e Chrome do iOS. Para salvar o vídeo, toque no botão de download e o arquivo será salvo na pasta Arquivos ou no rolo da câmera, dependendo da versão do iOS.",
      },
      {
        q: "Funciona em navegadores como Firefox e Edge?",
        a: "Sim. O KwaiSave é compatível com todos os navegadores modernos: Chrome, Firefox, Edge, Safari, Opera, Brave e Samsung Internet. Recomendamos manter o navegador atualizado para a melhor experiência.",
      },
      {
        q: "Posso usar o KwaiSave em Smart TVs?",
        a: "Se sua Smart TV possui um navegador com suporte a downloads, é possível utilizar o KwaiSave. No entanto, recomendamos fazer o download pelo celular ou computador e transferir o arquivo para a TV via USB, Chromecast ou DLNA.",
      },
      {
        q: "O site funciona bem em conexões lentas?",
        a: "Sim. O KwaiSave foi otimizado para performance, com carregamento rápido mesmo em conexões mais lentas. O processamento do link é feito em nossos servidores, então apenas o download do vídeo depende da velocidade da sua internet.",
      },
      {
        q: "Onde o vídeo é salvo após o download no Android?",
        a: "No Android, o vídeo geralmente é salvo na pasta 'Downloads' do dispositivo. Você pode acessá-lo pelo gerenciador de arquivos ou pela galeria de fotos e vídeos do celular.",
      },
    ],
  },
  {
    title: "Segurança e Privacidade",
    icon: Shield,
    badge: "Segurança",
    questions: [
      {
        q: "O KwaiSave coleta dados pessoais dos usuários?",
        a: "Não. O KwaiSave não solicita cadastro, login, e-mail ou qualquer dado pessoal. Não utilizamos cookies de rastreamento para identificar usuários. Sua privacidade é nossa prioridade absoluta.",
      },
      {
        q: "O site possui certificado SSL e conexão segura?",
        a: "Sim. Todo o tráfego do KwaiSave é protegido por HTTPS com certificado SSL válido, garantindo que a comunicação entre seu navegador e nossos servidores seja criptografada e segura contra interceptações.",
      },
      {
        q: "Os vídeos baixados podem conter vírus ou malware?",
        a: "Não. Os vídeos são obtidos diretamente dos servidores do Kwai e entregues a você sem modificações. Arquivos de vídeo MP4 são mídias passivas que não executam código, sendo intrinsecamente seguros.",
      },
      {
        q: "O Kwai pode saber que eu baixei um vídeo?",
        a: "O KwaiSave acessa os vídeos públicos da plataforma de forma similar a qualquer navegador. Não compartilhamos dados com o Kwai e não existe mecanismo de notificação ao criador quando um vídeo público é acessado por ferramentas externas.",
      },
      {
        q: "Minha conta do Kwai corre risco ao usar o KwaiSave?",
        a: "Não. O KwaiSave não acessa sua conta do Kwai, não solicita credenciais de login e não interage com o perfil do usuário. A ferramenta trabalha apenas com links públicos, sem qualquer conexão com contas individuais.",
      },
    ],
  },
  {
    title: "Direitos Autorais e Uso Legal",
    icon: Scale,
    badge: "Legal",
    questions: [
      {
        q: "É legal baixar vídeos do Kwai?",
        a: "Baixar vídeos públicos para uso pessoal e privado é geralmente permitido pela legislação brasileira, dentro das exceções previstas na Lei de Direitos Autorais (Lei 9.610/98). No entanto, a redistribuição ou uso comercial sem autorização é proibido.",
      },
      {
        q: "Posso usar vídeos baixados em apresentações ou trabalhos escolares?",
        a: "Sim, desde que o uso se enquadre em finalidade educacional e sem fins lucrativos, com a devida atribuição ao autor original. A legislação brasileira prevê exceções para uso didático e acadêmico.",
      },
      {
        q: "Posso republicar vídeos baixados em outras redes sociais?",
        a: "Não recomendamos. Republicar conteúdo de terceiros sem autorização expressa do criador original viola os direitos autorais e os termos de serviço da maioria das plataformas. Respeite sempre o trabalho dos criadores de conteúdo.",
      },
      {
        q: "O que acontece se eu usar um vídeo baixado de forma indevida?",
        a: "O uso indevido de conteúdo protegido pode resultar em notificações de remoção (DMCA), penalizações nas plataformas onde o conteúdo for republicado e, em casos graves, responsabilização civil e criminal conforme a legislação vigente.",
      },
      {
        q: "Como posso verificar se um vídeo tem direitos autorais restritos?",
        a: "Presuma que todo conteúdo possui proteção autoral, salvo indicação contrária. Verifique se o criador disponibilizou licenças abertas (como Creative Commons) na descrição do vídeo. Em caso de dúvida, entre em contato com o criador antes de utilizar o conteúdo.",
      },
    ],
  },
  {
    title: "Problemas Técnicos e Suporte",
    icon: RefreshCw,
    badge: "Suporte",
    questions: [
      {
        q: "O download falhou. O que devo fazer?",
        a: "Verifique se o link está correto e se o vídeo ainda está público na plataforma Kwai. Tente limpar o campo e colar o link novamente. Se o problema persistir, o vídeo pode ter sido removido ou tornado privado pelo criador.",
      },
      {
        q: "O vídeo baixou sem áudio. Como resolver?",
        a: "Isso é raro, mas pode ocorrer quando o vídeo original possui problemas de codificação. Tente baixar novamente. Se o problema persistir, verifique o vídeo original no Kwai para confirmar se o áudio está presente.",
      },
      {
        q: "Por que alguns links do Kwai não funcionam?",
        a: "Links de vídeos privados, removidos ou de contas suspensas não são processados pelo KwaiSave. Certifique-se de que o vídeo está público e acessível. Links de transmissões ao vivo (lives) em andamento também não são compatíveis.",
      },
      {
        q: "O site está lento. Isso é normal?",
        a: "Picos de acesso podem causar lentidão temporária. Nossos servidores escalam automaticamente para atender a demanda. Se o problema persistir, tente novamente em alguns minutos ou verifique sua conexão de internet.",
      },
      {
        q: "Como entro em contato com o suporte do KwaiSave?",
        a: "Você pode nos contatar através da página de Contato disponível no menu lateral. Responderemos em até 48 horas úteis. Para questões urgentes relacionadas a direitos autorais, utilize o canal DMCA específico.",
      },
    ],
  },
];

const faqSchemaData = faqCategories.flatMap((cat) =>
  cat.questions.map((q) => ({ question: q.q, answer: q.a }))
);

export default function FAQPage() {
  return (
    <PageLayout>
      <SEOHead
        title="Perguntas Frequentes (FAQ) - KwaiSave"
        description="Tire suas dúvidas sobre o KwaiSave. Encontre respostas sobre como baixar vídeos do Kwai, qualidade, segurança, compatibilidade e mais."
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
          Perguntas Frequentes
        </h1>
        <p className="text-muted-foreground mb-4">
          Encontre respostas detalhadas para as dúvidas mais comuns sobre o KwaiSave.
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
          <h3 className="text-lg font-bold text-foreground mb-2">Ainda tem dúvidas?</h3>
          <p className="text-sm text-muted-foreground mb-5 max-w-md mx-auto">
            Se você não encontrou a resposta que procurava, entre em contato com nossa equipe. Estamos prontos para ajudar.
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
            Este FAQ é fornecido apenas para fins informativos e não constitui aconselhamento jurídico. Para questões legais específicas, consulte um advogado especializado. O KwaiSave não é afiliado, endossado ou patrocinado pelo Kwai ou Kuaishou Technology.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
