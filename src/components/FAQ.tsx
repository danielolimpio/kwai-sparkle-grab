import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

// Kept for backwards-compat (used by Index for FAQ schema fallback). Always Portuguese.
export const homeFaqs = [
  { q: "É grátis baixar vídeos Kwai?", a: "Sim! O KwaiSave é um baixador de vídeos do Kwai 100% grátis e sem limites. Baixe quantos vídeos quiser, sem cadastro e sem pagamento." },
  { q: "Preciso fazer login para baixar vídeo do Kwai?", a: "Não! Basta copiar o link do vídeo público do Kwai e colar aqui. Não pedimos login nem dados pessoais para o download vídeo Kwai." },
  { q: "Os vídeos baixam sem a marca d'água do Kwai?", a: "Sim! Nosso sistema permite baixar vídeo do Kwai sem marca d'água automaticamente, entregando o vídeo limpo e em alta qualidade." },
  { q: "Em qual qualidade posso baixar vídeos do Kwai?", a: "Oferecemos download de vídeos do Kwai em várias qualidades: 1080p, 720p, 480p e 360p. Você escolhe a que preferir!" },
  { q: "Funciona baixar vídeo do Kwai de contas privadas?", a: "Não. Só é possível baixar vídeos do Kwai de contas públicas. Conteúdos privados são protegidos pela plataforma." },
  { q: "É seguro usar o KwaiSave para salvar vídeo do Kwai?", a: "Totalmente! Não armazenamos seus dados, não pedimos login e o site é protegido por HTTPS. Baixar vídeo do Kwai por link aqui é seguro." },
];

homeFaqs.push(
  { q: "Como baixar video do Kwai pelo celular?", a: "Para baixar video do Kwai pelo celular Android ou iPhone, abra o app Kwai, toque em Compartilhar, copie o link do vídeo e cole no KwaiSave. Em segundos você terá o baixar Kwai sem marca d'água pronto em MP4." },
  { q: "Como baixar videos do Kwai sem marca d'água no PC?", a: "Para baixar videos do Kwai sem marca d'água no PC, basta colar o link do vídeo Kwai no KwaiSave e clicar em Baixar Agora. Não é preciso instalar Kwai APK, Kwai mod APK nem nenhum kwai video downloader extra — tudo é online." },
  { q: "Posso baixar Kwai grátis sem instalar nada?", a: "Sim! O KwaiSave é um Kwai downloader 100% online. Você consegue baixar Kwai grátis, baixar vídeo Kwai online e fazer o download video Kwai direto pelo navegador, sem Kwai web app extra, sem extensão e sem cadastro." },
  { q: "Dá para baixar video do Kwai por link em MP4 HD?", a: "Sim. O KwaiSave funciona como Kwai to MP4 converter, permitindo baixar video do Kwai por link em MP4 nas qualidades 1080p, 720p, 480p e 360p, sempre baixar vídeos sem marca d'água." },
  { q: "O KwaiSave também serve como baixador do Kuaishou?", a: "Sim. Como o Kwai é a versão internacional do Kuaishou, o mesmo baixador de vídeos do Kwai funciona como Kuaishou downloader — basta colar a URL do vídeo para fazer o Kuaishou video download em MP4." },
  { q: "Onde ficam os vídeos baixados do Kwai?", a: "Os vídeos baixados pelo KwaiSave ficam salvos na pasta padrão de Downloads do seu dispositivo (celular ou computador). Como o site não armazena nada, o arquivo MP4 é totalmente seu." },
  { q: "É possível baixar Kwai sem marca d'água pelo Google Chrome?", a: "Sim. Você pode baixar Kwai sem marca d'água diretamente pelo Google Chrome, Safari, Edge ou Firefox. O KwaiSave dispensa instalar o Kwai pelo Google Play e funciona como kwai baixar pelo Google em qualquer navegador." },
);

export function FAQ() {
  const { t } = useTranslation();
  const title = t("faq.title") as string;
  const items = (t("faq.items", { returnObjects: true }) as { q: string; a: string }[]) || [];
  return (
    <section className="px-4 py-10 max-w-3xl mx-auto" aria-label={title}>
      <h2 className="text-3xl font-display font-extrabold text-foreground text-center mb-8">{title}</h2>
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <Accordion type="single" collapsible className="divide-y divide-border">
          {items.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-none">
              <AccordionTrigger className="px-6 py-4 text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-sm text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}