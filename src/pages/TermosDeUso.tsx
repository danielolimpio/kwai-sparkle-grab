import { Link } from "react-router-dom";
import { ArrowLeft, Shield, FileText, Scale, AlertTriangle, CheckCircle, Users, BookOpen } from "lucide-react";

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Voltar</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="gradient-kwai p-2.5 rounded-xl shadow-kwai">
            <FileText className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <span className="gradient-kwai text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Documento Legal</span>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mt-4 mb-2">Termos de Uso</h1>
        <p className="text-muted-foreground mb-8">Última atualização: 08 de abril de 2026</p>

        <div className="space-y-8">
          <Section icon={BookOpen} title="1. Aceitação dos Termos">
            <p>Ao acessar e utilizar o site baixarvideoskwai.com ("Plataforma"), você concorda integralmente com estes Termos de Uso. Caso não concorde com qualquer disposição, recomendamos que não utilize nossos serviços.</p>
            <p>Estes termos constituem um acordo juridicamente vinculativo entre você ("Usuário") e a Plataforma. Reservamo-nos o direito de atualizar estes termos a qualquer momento, sendo sua responsabilidade verificar periodicamente eventuais alterações.</p>
          </Section>

          <Section icon={Shield} title="2. Descrição do Serviço">
            <p>A Plataforma oferece um serviço gratuito de download de vídeos públicos do Kwai. Nosso serviço permite que usuários baixem conteúdo disponível publicamente na plataforma Kwai para uso pessoal e não comercial.</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Download de vídeos públicos em alta qualidade (até 1080p)</li>
              <li>Processamento automático sem necessidade de cadastro</li>
              <li>Serviço 100% gratuito e sem limites de uso</li>
              <li>Sem coleta de dados pessoais do usuário</li>
            </ul>
          </Section>

          <Section icon={Users} title="3. Responsabilidades do Usuário">
            <p>Ao utilizar a Plataforma, o Usuário se compromete a:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Utilizar o serviço apenas para fins pessoais e não comerciais</li>
              <li>Respeitar os direitos autorais e de propriedade intelectual dos criadores de conteúdo</li>
              <li>Não redistribuir, vender ou comercializar o conteúdo baixado</li>
              <li>Não utilizar o serviço para atividades ilegais ou que violem os termos de uso do Kwai</li>
              <li>Não realizar engenharia reversa, descompilar ou tentar acessar o código-fonte da Plataforma</li>
            </ul>
          </Section>

          <Section icon={Scale} title="4. Propriedade Intelectual">
            <p>Todo o conteúdo disponível para download pertence aos seus respectivos criadores e detentores de direitos autorais. A Plataforma não reivindica propriedade sobre qualquer conteúdo baixado.</p>
            <p>O design, logotipos, código-fonte e elementos visuais da Plataforma são de propriedade exclusiva do baixarvideoskwai.com e estão protegidos pelas leis de propriedade intelectual aplicáveis.</p>
          </Section>

          <Section icon={AlertTriangle} title="5. Limitação de Responsabilidade">
            <p>A Plataforma é fornecida "como está" e "conforme disponível". Não garantimos que o serviço será ininterrupto, livre de erros ou que atenderá todas as suas expectativas. A Plataforma não se responsabiliza por:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Uso indevido do conteúdo baixado pelo Usuário</li>
              <li>Violações de direitos autorais cometidas pelo Usuário</li>
              <li>Indisponibilidade temporária do serviço</li>
              <li>Conteúdo de terceiros acessado através da Plataforma</li>
            </ul>
          </Section>

          <Section icon={CheckCircle} title="6. Modificações dos Termos">
            <p>Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento, sem aviso prévio. As alterações entram em vigor imediatamente após a publicação. O uso continuado da Plataforma após as alterações constitui aceitação dos novos termos.</p>
            <p>Recomendamos que você revise esta página periodicamente para se manter informado sobre quaisquer atualizações.</p>
          </Section>
        </div>

        <div className="mt-12 bg-card border border-border rounded-2xl p-6 text-center">
          <p className="text-sm text-muted-foreground">Ao utilizar o baixarvideoskwai.com, você declara ter lido e compreendido estes Termos de Uso.</p>
          <Link to="/" className="inline-flex items-center gap-2 mt-4 gradient-kwai text-primary-foreground font-semibold px-6 py-2.5 rounded-xl shadow-kwai hover:shadow-kwai-lg transition-all">
            Voltar ao Início
          </Link>
        </div>
      </main>
    </div>
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
