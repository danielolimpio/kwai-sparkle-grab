import { Shield, Lock, Eye, Database, Globe, Cookie, Bell, UserCheck } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";

export default function Privacidade() {
  return (
    <PageLayout>
      <SEOHead title="Política de Privacidade — Baixar Vídeos Kwai com Segurança" description="Saiba como o KwaiSave protege seus dados ao baixar vídeos do Kwai. Não coletamos informações pessoais. Download vídeo Kwai com total privacidade." canonical="/privacidade" breadcrumbs={[{ name: "Início", url: "/" }, { name: "Privacidade", url: "/privacidade" }]} />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="gradient-kwai p-2.5 rounded-xl shadow-kwai">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="gradient-kwai text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Sua Segurança</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mt-4 mb-2">Política de Privacidade</h1>
        <p className="text-muted-foreground mb-8">Última atualização: 08 de abril de 2026</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {[
            { icon: Lock, label: "HTTPS Seguro" },
            { icon: Database, label: "Sem Banco de Dados" },
            { icon: Eye, label: "Sem Rastreamento" },
            { icon: UserCheck, label: "Sem Cadastro" },
          ].map((b) => (
            <div key={b.label} className="bg-card border border-border rounded-xl p-3 text-center">
              <b.icon className="h-5 w-5 text-primary mx-auto mb-1" />
              <span className="text-xs font-semibold text-foreground">{b.label}</span>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <Section icon={Eye} title="1. Informações que Coletamos">
            <p>Prezamos pela sua privacidade ao baixar vídeos do Kwai. O baixarvideoskwai.com foi projetado para funcionar com o mínimo de dados possível. <strong className="text-foreground">Não coletamos dados pessoais identificáveis.</strong></p>
            <p>Os únicos dados processados são:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-foreground">URL do vídeo do Kwai:</strong> processada em tempo real e descartada imediatamente após o download</li>
              <li><strong className="text-foreground">Dados técnicos anônimos:</strong> tipo de navegador, sistema operacional e resolução de tela (para otimização)</li>
            </ul>
          </Section>

          <Section icon={Database} title="2. Armazenamento de Dados">
            <p>Não mantemos banco de dados com informações de usuários. Os links processados para baixar vídeo do Kwai são descartados imediatamente após a conclusão do download. Nenhum histórico é armazenado em nossos servidores.</p>
          </Section>

          <Section icon={Cookie} title="3. Cookies e Tecnologias">
            <p>Utilizamos apenas cookies essenciais para o funcionamento do baixador de vídeos do Kwai. Não utilizamos cookies de rastreamento, publicidade comportamental ou análise de perfil. Você pode desativar cookies nas configurações do seu navegador.</p>
          </Section>

          <Section icon={Globe} title="4. Compartilhamento com Terceiros">
            <p>Não vendemos, alugamos ou compartilhamos seus dados com terceiros. O processamento dos vídeos do Kwai para download é realizado inteiramente em nossos servidores seguros.</p>
          </Section>

          <Section icon={Lock} title="5. Segurança">
            <p>Implementamos medidas de segurança robustas para que você possa baixar vídeos Kwai com tranquilidade:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Conexão criptografada via HTTPS/TLS</li>
              <li>Servidores protegidos com firewall avançado</li>
              <li>Sem armazenamento persistente de dados do usuário</li>
              <li>Monitoramento contínuo contra ameaças</li>
            </ul>
          </Section>

          <Section icon={Bell} title="6. Seus Direitos">
            <p>Como não coletamos dados pessoais ao processar o download vídeo Kwai, não há dados para solicitar exclusão ou portabilidade. Para dúvidas sobre privacidade, acesse nossa página de Contato.</p>
          </Section>
        </div>

        <div className="mt-12 bg-card border border-border rounded-2xl p-6 text-center">
          <p className="text-sm text-muted-foreground">Sua privacidade é nossa prioridade. Baixar vídeos do Kwai aqui é seguro e privado.</p>
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