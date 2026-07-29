import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import { RelatedLinks } from "@/components/RelatedLinks";
import type { PlatformConfig } from "@/data/platforms";
import { PLATFORMS } from "@/data/platforms";

export default function BaixarPlataforma({ platform }: { platform: PlatformConfig }) {
  const Icon = platform.icon;
  const crumbs = [
    { name: "Início", url: "/" },
    { name: platform.label, url: platform.slug },
  ];
  const others = PLATFORMS.filter((p) => p.key !== platform.key);

  return (
    <PageLayout breadcrumbs={crumbs}>
      <SEOHead
        title={platform.title}
        description={platform.description}
        canonical={platform.slug}
        breadcrumbs={crumbs}
        faq={platform.faq}
        schemaType="page"
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="p-3 rounded-2xl text-white shadow-kwai"
            style={{ backgroundColor: platform.color }}
          >
            <Icon className="h-6 w-6" />
          </div>
          <span className="gradient-kwai text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            Baixador oficial da rede {platform.name}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">{platform.h1}</h1>
        <p className="text-muted-foreground leading-relaxed mb-6">{platform.intro}</p>

        <a
          href={platform.url}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 gradient-kwai text-primary-foreground font-bold px-7 py-4 rounded-2xl shadow-kwai hover:opacity-95 transition-opacity"
        >
          <Icon className="h-5 w-5" />
          Abrir {platform.label}
          <ArrowUpRight className="h-5 w-5" />
        </a>
        <p className="text-xs text-muted-foreground mt-2">
          Abre em uma nova aba em {platform.url.replace("https://", "")}
        </p>

        <section className="mt-10">
          <h2 className="text-xl md:text-2xl font-extrabold text-foreground mb-4">
            O que dá para fazer no baixador do {platform.name}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {platform.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 p-4 rounded-2xl bg-card border border-border">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl md:text-2xl font-extrabold text-foreground mb-4">
            Como baixar vídeos do {platform.name} em 3 passos
          </h2>
          <ol className="space-y-3">
            {platform.steps.map((s, i) => (
              <li key={s} className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border">
                <span className="gradient-kwai text-primary-foreground text-xs font-bold h-6 w-6 rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-foreground leading-relaxed">{s}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-xl md:text-2xl font-extrabold text-foreground mb-4">
            Perguntas frequentes sobre baixar vídeos do {platform.name}
          </h2>
          <div className="space-y-3">
            {platform.faq.map((f) => (
              <div key={f.question} className="p-4 rounded-2xl bg-card border border-border">
                <h3 className="font-semibold text-foreground text-sm mb-1">{f.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl md:text-2xl font-extrabold text-foreground mb-4">Outros baixadores</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {others.map((p) => {
              const OtherIcon = p.icon;
              return (
                <a
                  key={p.slug}
                  href={p.slug}
                  className="group flex items-center gap-3 p-4 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-kwai transition-all"
                >
                  <span className="p-2 rounded-lg text-white shrink-0" style={{ backgroundColor: p.color }}>
                    <OtherIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {p.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground ml-auto" />
                </a>
              );
            })}
          </div>
        </section>

        <div className="mt-10 flex items-start gap-2 p-4 rounded-2xl bg-secondary/40 border border-border">
          <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            Este site não é afiliado, endossado ou patrocinado por {platform.name}. Baixe apenas conteúdos
            públicos e respeite os direitos autorais dos criadores.
          </p>
        </div>
      </div>

      <RelatedLinks
        items={[
          { title: "Baixar Vídeos Kwai", description: "Baixe vídeos do Kwai sem marca d'água em HD.", url: "/baixar-videos-kwai", icon: "download" },
          { title: "Tutorial passo a passo", description: "Como baixar vídeos no celular e no PC.", url: "/baixar-tutorial", icon: "tutorial" },
          { title: "Perguntas frequentes", description: "Dúvidas sobre downloads e qualidade.", url: "/faq", icon: "faq" },
          { title: "Uso responsável", description: "Direitos autorais e boas práticas.", url: "/uso-responsavel", icon: "uso" },
        ]}
      />
    </PageLayout>
  );
}
