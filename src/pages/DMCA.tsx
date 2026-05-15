import { Shield, AlertTriangle, Mail, FileWarning, Scale, Clock, CheckCircle } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";

export default function DMCA() {
  return (
    <PageLayout breadcrumbs={[{ name: "Início", url: "/" }, { name: "DMCA", url: "/dmca" }]}>
      <SEOHead title="Política DMCA — Direitos Autorais | Baixar Vídeos Kwai" description="Política DMCA do KwaiSave, baixador de vídeos do Kwai. Saiba como enviar notificações sobre direitos autorais ao baixar vídeos do Kwai sem marca d'água." canonical="/dmca" breadcrumbs={[{ name: "Início", url: "/" }, { name: "DMCA", url: "/dmca" }]} />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="gradient-kwai p-2.5 rounded-xl shadow-kwai">
            <FileWarning className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="gradient-kwai text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Direitos Autorais</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mt-4 mb-2">Política DMCA</h1>
        <p className="text-muted-foreground mb-8">Digital Millennium Copyright Act — Proteção de Direitos Autorais</p>

        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 flex items-start gap-4 mb-10">
          <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-foreground text-sm mb-1">Respeito aos Direitos Autorais</h3>
            <p className="text-sm text-muted-foreground">O baixarvideoskwai.com respeita os direitos de propriedade intelectual. Nosso baixador de vídeos do Kwai atua de forma responsável perante a legislação vigente.</p>
          </div>
        </div>

        <div className="space-y-8">
          <Section icon={Shield} title="1. Nosso Compromisso">
            <p>Estamos comprometidos em cumprir o DMCA. Se você acredita que seu conteúdo foi disponibilizado indevidamente através do nosso serviço para baixar vídeos do Kwai, entre em contato imediatamente.</p>
          </Section>

          <Section icon={Mail} title="2. Como Enviar uma Notificação DMCA">
            <p>Para enviar uma notificação válida sobre violação de direitos autorais relacionada ao download vídeo Kwai, inclua:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Identificação da obra:</strong> descrição clara do conteúdo protegido</li>
              <li><strong className="text-foreground">URL do conteúdo infrator:</strong> link específico do material em questão</li>
              <li><strong className="text-foreground">Seus dados de contato:</strong> nome completo, e-mail e telefone</li>
              <li><strong className="text-foreground">Declaração de boa-fé:</strong> que o uso não é autorizado pelo detentor dos direitos</li>
              <li><strong className="text-foreground">Assinatura:</strong> física ou eletrônica do detentor dos direitos</li>
            </ul>
          </Section>

          <Section icon={Clock} title="3. Processo de Análise">
            <p>Ao receber uma notificação DMCA válida sobre conteúdo baixado do Kwai:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
              {[
                { step: "1", title: "Recebimento", desc: "Análise da notificação em até 24h" },
                { step: "2", title: "Verificação", desc: "Confirmação da validade da reclamação" },
                { step: "3", title: "Ação", desc: "Remoção ou bloqueio do conteúdo" },
              ].map((s) => (
                <div key={s.step} className="bg-muted rounded-xl p-4 text-center">
                  <span className="gradient-kwai text-primary-foreground text-xs font-bold w-6 h-6 rounded-full inline-flex items-center justify-center mb-2">{s.step}</span>
                  <h4 className="font-semibold text-foreground text-sm">{s.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section icon={Scale} title="4. Contra-Notificação">
            <p>Se você acredita que seu conteúdo foi removido por engano do nosso baixador de vídeos do Kwai, envie uma contra-notificação incluindo:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Identificação do material removido</li>
              <li>Declaração sob pena de perjúrio de que a remoção foi um erro</li>
              <li>Consentimento à jurisdição do tribunal competente</li>
              <li>Assinatura física ou eletrônica</li>
            </ul>
          </Section>

          <Section icon={CheckCircle} title="5. Contato para DMCA">
            <div className="bg-muted rounded-xl p-4">
              <p className="font-semibold text-foreground text-sm mb-2">Envie sua notificação para:</p>
              <p className="text-sm">E-mail: <span className="text-primary font-medium">dmca@baixarvideoskwai.com</span></p>
              <p className="text-sm mt-1">Assunto: <span className="text-foreground font-medium">Notificação DMCA — [Descrição Breve]</span></p>
            </div>
          </Section>
        </div>

        <div className="mt-12 bg-card border border-border rounded-2xl p-6 text-center">
          <p className="text-sm text-muted-foreground">Respeitamos os direitos autorais e agimos rapidamente em notificações válidas sobre conteúdo do Kwai.</p>
        </div>
      </div>
    </PageLayout>
  );
}

function Section({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="gradient-kwai p-2 rounded-lg">
          <Icon className="h-5 w-5 text-primary-foreground" />
        </div>
        <h2 className="text-lg font-bold text-foreground">{title}</h2>
      </div>
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}