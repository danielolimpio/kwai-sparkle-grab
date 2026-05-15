import { BookOpen, Calendar, Clock, ArrowRight, TrendingUp, Sparkles, Video, Shield, Zap } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import kwaiHero1 from "@/assets/kwai-hero-1.png";
import kwaiHero2 from "@/assets/kwai-hero-2.png";

const posts = [
  { id: 1, title: "Como Baixar Vídeos do Kwai Sem Marca d'Água em 2026", excerpt: "Aprenda o passo a passo completo para baixar vídeos Kwai em alta qualidade, sem marca d'água e de forma totalmente gratuita. O melhor baixador de vídeos do Kwai online.", date: "08 Abr 2026", readTime: "5 min", tag: "Tutorial", icon: Video, image: kwaiHero1 },
  { id: 2, title: "Kwai Baixar Vídeos: Guia Completo para Download em HD", excerpt: "Descubra como usar o KwaiSave para baixar vídeo do Kwai por link em qualquer dispositivo. Download vídeo Kwai rápido, grátis e sem instalar nada.", date: "05 Abr 2026", readTime: "8 min", tag: "Guia", icon: TrendingUp, image: kwaiHero2 },
  { id: 3, title: "10 Dicas para Salvar Vídeo do Kwai com Qualidade Máxima", excerpt: "Confira as melhores práticas para baixar vídeos do Kwai online com a melhor qualidade disponível, incluindo Full HD e sem marca d'água.", date: "01 Abr 2026", readTime: "6 min", tag: "Dicas", icon: Sparkles },
  { id: 4, title: "Segurança ao Baixar Vídeo do Kwai: O Que Você Precisa Saber", excerpt: "Guia completo sobre segurança digital ao utilizar um baixador de vídeos do Kwai. Como proteger seus dados ao fazer download vídeo Kwai online.", date: "28 Mar 2026", readTime: "4 min", tag: "Segurança", icon: Shield },
  { id: 5, title: "Novidades do Kwai 2026: Baixar Kwai Vídeos com Novos Recursos", excerpt: "Confira as atualizações do Kwai e como o KwaiSave acompanha as mudanças para você continuar a baixar vídeos do Kwai sem marca d'água.", date: "25 Mar 2026", readTime: "7 min", tag: "Novidades", icon: Zap },
];

const tagColors: Record<string, string> = {
  Tutorial: "bg-primary/10 text-primary",
  Guia: "bg-accent/10 text-accent",
  Dicas: "bg-primary/10 text-primary",
  Segurança: "bg-primary/10 text-primary",
  Novidades: "bg-accent/10 text-accent",
};

export default function Blog() {
  return (
    <PageLayout breadcrumbs={[{ name: "Início", url: "/" }, { name: "Blog", url: "/blog" }]}>
      <SEOHead title="Blog — Como Baixar Vídeos do Kwai | Dicas e Tutoriais" description="Dicas e tutoriais sobre como baixar vídeos Kwai sem marca d'água. Guias atualizados sobre download vídeo Kwai, salvar vídeo do Kwai por link e mais." canonical="/blog" breadcrumbs={[{ name: "Início", url: "/" }, { name: "Blog", url: "/blog" }]} />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="gradient-kwai p-2.5 rounded-xl shadow-kwai">
            <BookOpen className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="gradient-kwai text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Blog</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mt-4 mb-2">Blog — Baixar Vídeos do Kwai</h1>
        <p className="text-muted-foreground mb-10">Dicas, tutoriais e guias sobre como baixar vídeos Kwai, salvar vídeo do Kwai e download vídeo Kwai em alta qualidade</p>

        <div className="bg-card border border-border rounded-2xl overflow-hidden mb-10 hover:shadow-lg transition-all duration-300">
          {posts[0].image && <img src={posts[0].image} alt="Como baixar vídeos do Kwai sem marca d'água" className="w-full h-48 sm:h-64 object-cover" />}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[posts[0].tag]}`}>{posts[0].tag}</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" />{posts[0].date}</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{posts[0].readTime}</span>
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">{posts[0].title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{posts[0].excerpt}</p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">Ler mais <ArrowRight className="h-4 w-4" /></span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts.slice(1).map((post) => (
            <article key={post.id} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              {post.image ? (
                <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
              ) : (
                <div className="w-full h-40 flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(8, 100%, 50%), hsl(27, 100%, 60%))" }}>
                  <post.icon className="h-12 w-12 text-primary-foreground/80" />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColors[post.tag]}`}>{post.tag}</span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-bold text-foreground text-sm mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-3 mb-3">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">Ler mais <ArrowRight className="h-3 w-3" /></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}