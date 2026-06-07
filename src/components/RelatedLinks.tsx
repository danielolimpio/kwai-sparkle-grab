import { Link } from "react-router-dom";
import { ArrowRight, Download, BookOpen, HelpCircle, Smartphone, Shield, FileText, Newspaper } from "lucide-react";
import { useCurrentLanguage, buildPath } from "@/hooks/use-current-language";

const ICONS = {
  download: Download,
  tutorial: BookOpen,
  faq: HelpCircle,
  apk: Smartphone,
  uso: Shield,
  blog: Newspaper,
  doc: FileText,
} as const;

export interface RelatedLink {
  title: string;
  description: string;
  url: string;
  icon: keyof typeof ICONS;
}

export function RelatedLinks({ items, title = "Conteúdos relacionados" }: { items: RelatedLink[]; title?: string }) {
  const { lang } = useCurrentLanguage();
  return (
    <section className="max-w-4xl mx-auto px-4 py-8" aria-label={title}>
      <h2 className="text-xl md:text-2xl font-extrabold text-foreground mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => {
          const Icon = ICONS[item.icon];
          const target = item.url.startsWith("http") ? item.url : buildPath(lang, item.url);
          return (
            <Link
              key={item.url}
              to={target}
              className="group flex items-start gap-3 p-4 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-kwai transition-all"
            >
              <div className="gradient-kwai p-2 rounded-lg shrink-0">
                <Icon className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.description}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-2" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
