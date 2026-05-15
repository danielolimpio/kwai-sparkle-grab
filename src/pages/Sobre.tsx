import { Heart, Zap, Shield, Users, Target, Star, Award, TrendingUp, Globe } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import kwaiHero1 from "@/assets/kwai-hero-1.png";
import kwaiHero2 from "@/assets/kwai-hero-2.png";

export default function Sobre() {
  return (
    <PageLayout breadcrumbs={[{ name: "Início", url: "/" }, { name: "Sobre", url: "/sobre" }]}>
      <SEOHead title="Sobre o KwaiSave — Baixador de Vídeos do Kwai" description="Conheça o KwaiSave, o melhor baixador de vídeos do Kwai. Ferramenta gratuita para baixar vídeos Kwai sem marca d'água em alta qualidade, online e por link." canonical="/sobre" breadcrumbs={[{ name: "Início", url: "/" }, { name: "Sobre", url: "/sobre" }]} />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="gradient-kwai p-2.5 rounded-xl shadow-kwai">
            <Heart className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="gradient-kwai text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Conheça-nos</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mt-4 mb-2">Sobre o KwaiSave — Baixador de Vídeos do Kwai</h1>
        <p className="text-muted-foreground mb-8">A melhor ferramenta para baixar vídeos do Kwai sem marca d'água, online e grátis</p>

        <div className="rounded-2xl overflow-hidden mb-10 border border-border">
          <img src={kwaiHero1} alt="KwaiSave — Baixar vídeos Kwai sem marca d'água online" className="w-full h-auto object-cover" />
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="gradient-kwai p-2 rounded-lg">
              <Target className="h-5 w-5 text-primary-foreground" />
            </div>
            <h2 className="text-lg font-bold text-foreground">Nossa Missão</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            O KwaiSave nasceu com uma missão simples: permitir que qualquer pessoa possa baixar vídeos Kwai de forma rápida, gratuita e sem complicações. Somos o baixador de vídeos do Kwai mais completo do Brasil.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Nossa plataforma foi desenvolvida para oferecer a melhor experiência ao salvar vídeo do Kwai por link, com tecnologia que garante download vídeo Kwai em alta qualidade e sem marca d'água.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { value: "1M+", label: "Downloads", icon: TrendingUp },
            { value: "50K+", label: "Usuários", icon: Users },
            { value: "99.9%", label: "Uptime", icon: Zap },
            { value: "4.9★", label: "Avaliação", icon: Star },
          ].map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-2xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <s.icon className="h-5 w-5 text-primary mx-auto mb-2" />
              <p className="text-2xl font-extrabold gradient-kwai-text">{s.value}</p>
              <p className="text-xs text-muted-foreground font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden mb-10 border border-border">
          <img src={kwaiHero2} alt="Plataforma Kwai — download vídeo Kwai online grátis" className="w-full h-auto object-cover" />
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="gradient-kwai p-2 rounded-lg">
              <Award className="h-5 w-5 text-primary-foreground" />
            </div>
            <h2 className="text-lg font-bold text-foreground">Nossos Valores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Shield, title: "Segurança", desc: "Conexão HTTPS, sem coleta de dados. Baixar vídeo do Kwai com total privacidade." },
              { icon: Zap, title: "Velocidade", desc: "Servidores otimizados para processar e entregar o download vídeo Kwai em segundos." },
              { icon: Heart, title: "Simplicidade", desc: "Cole o link, clique em baixar. O jeito mais fácil de salvar vídeo do Kwai." },
              { icon: Globe, title: "Acessibilidade", desc: "100% gratuito e disponível 24/7. Baixar vídeos do Kwai online, sem limites." },
            ].map((v) => (
              <div key={v.title} className="bg-muted rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <v.icon className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground text-sm">{v.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted rounded-2xl p-6 text-center">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            <strong className="text-foreground">Aviso:</strong> O KwaiSave não é afiliado, endossado ou patrocinado pelo Kwai ou Kuaishou Technology. Todos os direitos sobre os vídeos pertencem aos seus respectivos criadores.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}