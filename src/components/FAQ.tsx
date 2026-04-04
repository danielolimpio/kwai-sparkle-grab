import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "É grátis para baixar?", a: "Sim! O KwaiSave é 100% grátis e sem limites. Baixe quantos vídeos quiser, sem cadastro e sem pagamento." },
  { q: "Preciso fazer login no Kwai?", a: "Não! Basta copiar o link do vídeo público do Kwai e colar aqui. Não pedimos login nem dados pessoais." },
  { q: "Os vídeos baixam sem a logo do Kwai?", a: "Sim! Nosso sistema remove a marca d'água automaticamente, entregando o vídeo limpo e em alta qualidade." },
  { q: "Qual a qualidade dos downloads?", a: "Oferecemos download em várias qualidades: 1080p, 720p, 480p e 360p. Você escolhe a que preferir!" },
  { q: "Funciona em contas privadas?", a: "Não. Só é possível baixar vídeos de contas públicas. Conteúdos privados são protegidos." },
  { q: "É seguro usar?", a: "Totalmente! Não armazenamos seus dados, não pedimos login e o site é protegido por HTTPS." },
];

export function FAQ() {
  return (
    <section className="px-4 py-10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-foreground text-center mb-8">Perguntas Frequentes</h2>
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <Accordion type="single" collapsible className="divide-y divide-border">
          {faqs.map((faq, i) => (
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
