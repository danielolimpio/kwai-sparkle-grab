import { Shield, FileText, Scale, AlertTriangle, CheckCircle, Users, BookOpen } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";

export default function TermosDeUso() {
  return (
    <PageLayout breadcrumbs={[{ name: "Início", url: "/" }, { name: "Termos de Uso", url: "/termos-de-uso" }]}>
      <SEOHead title="Termos de Uso — Baixar Vídeos do Kwai" description="Termos de uso do KwaiSave, o baixador de vídeos do Kwai. Conheça suas responsabilidades ao baixar vídeos Kwai sem marca d'água." canonical="/termos-de-uso" breadcrumbs={[{ name: "Início", url: "/" }, { name: "Termos de Uso", url: "/termos-de-uso" }]} />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="gradient-kwai p-2.5 rounded-xl shadow-kwai">
            <FileText className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="gradient-kwai text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Documento Legal</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mt-4 mb-2">Termos de Uso</h1>
        <p className="text-muted-foreground mb-8">Última atualização: 08 de abril de 2026</p>

        <div className="space-y-8">
          <Section icon={BookOpen} title="1. Aceitação dos Termos">
            <p>Ao acessar e utilizar o site baixarvideoskwai.com ("Plataforma"), você concorda integralmente com estes Termos de Uso. Caso não concorde com qualquer disposição, recomendamos que não utilize nosso baixador de vídeos do Kwai.</p>
            <p>Estes termos constituem um acordo juridicamente vinculativo entre você ("Usuário") e a Plataforma. Reservamo-nos o direito de atualizar estes termos a qualquer momento.</p>
          </Section>

          <Section icon={Shield} title="2. Descrição do Serviço">
            <p>A Plataforma oferece um serviço gratuito para baixar vídeos do Kwai sem marca d'água. Nosso serviço permite o download vídeo Kwai público para uso pessoal e não comercial.</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Baixar vídeos Kwai em alta qualidade (até 1080p) sem marca d'água</li>
              <li>Processamento automático — sem necessidade de cadastro</li>
              <li>Serviço 100% gratuito e ilimitado para salvar vídeo do Kwai</li>
              <li>Sem coleta de dados pessoais do usuário</li>
            </ul>
          </Section>

          <Section icon={Users} title="3. Responsabilidades do Usuário">
            <p>Ao utilizar a Plataforma para baixar vídeo do Kwai, o Usuário se compromete a:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Utilizar o serviço apenas para fins pessoais e não comerciais</li>
              <li>Respeitar os direitos autorais dos criadores ao baixar vídeos do Kwai</li>
              <li>Não redistribuir, vender ou comercializar o conteúdo baixado</li>
              <li>Não utilizar o baixador de vídeos do Kwai para atividades ilegais</li>
              <li>Não realizar engenharia reversa ou tentar acessar o código-fonte da Plataforma</li>
            </ul>
          </Section>

          <Section icon={Scale} title="4. Propriedade Intelectual">
            <p>Todo conteúdo disponível para download vídeo Kwai pertence aos seus respectivos criadores e detentores de direitos autorais. A Plataforma não reivindica propriedade sobre qualquer vídeo baixado do Kwai.</p>
            <p>O design, logotipos e código-fonte da Plataforma são de propriedade exclusiva do baixarvideoskwai.com e estão protegidos pelas leis de propriedade intelectual.</p>
          </Section>

          <Section icon={AlertTriangle} title="5. Limitação de Responsabilidade">
            <p>A Plataforma para baixar vídeos Kwai é fornecida "como está". Não nos responsabilizamos por:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Uso indevido do conteúdo baixado pelo Usuário</li>
              <li>Violações de direitos autorais ao baixar vídeo do Kwai sem marca d'água</li>
              <li>Indisponibilidade temporária do serviço de download</li>
              <li>Conteúdo de terceiros acessado através da Plataforma</li>
            </ul>
          </Section>

          <Section icon={CheckCircle} title="6. Modificações dos Termos">
            <p>Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entram em vigor imediatamente após a publicação. O uso continuado do baixador de vídeos do Kwai constitui aceitação dos novos termos.</p>
          </Section>
        </div>

        <div className="mt-12 bg-card border border-border rounded-2xl p-6 text-center">
          <p className="text-sm text-muted-foreground">Ao utilizar o baixarvideoskwai.com para baixar vídeos do Kwai, você declara ter lido e compreendido estes Termos de Uso.</p>
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