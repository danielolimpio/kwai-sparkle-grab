import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCurrentLanguage, buildPath } from "@/hooks/use-current-language";
import { PLATFORMS } from "@/data/platforms";

export function AppFooter() {
  const { t } = useTranslation();
  const { lang } = useCurrentLanguage();
  const L = (p: string) => buildPath(lang, p);
  return (
    <footer className="section-cinematic bg-card border-t hairline mt-12">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-base text-muted-foreground mb-6">
          <Link to={L("/termos-de-uso")} className="hover:text-primary transition-colors">{t("footer.links.terms")}</Link>
          <Link to={L("/privacidade")} className="hover:text-primary transition-colors">{t("footer.links.privacy")}</Link>
          <Link to={L("/dmca")} className="hover:text-primary transition-colors">{t("footer.links.dmca")}</Link>
          <Link to={L("/contato")} className="hover:text-primary transition-colors">{t("footer.links.contact")}</Link>
          <Link to={L("/sobre")} className="hover:text-primary transition-colors">{t("footer.links.about")}</Link>
          <Link to={L("/blog")} className="hover:text-primary transition-colors">{t("footer.links.blog")}</Link>
          <Link to={L("/downloads")} className="hover:text-primary transition-colors">{t("footer.links.downloads")}</Link>
          <Link to={L("/uso-responsavel")} className="hover:text-primary transition-colors">{t("footer.links.responsible")}</Link>
          <Link to={L("/faq")} className="hover:text-primary transition-colors">{t("footer.links.faq")}</Link>
          <Link to={L("/baixar-tutorial")} className="hover:text-primary transition-colors">{t("footer.links.tutorial")}</Link>
          <Link to={L("/kwai-apk")} className="hover:text-primary transition-colors">{t("footer.links.kwaiApk")}</Link>
        </div>
        <hr className="divider-premium mb-6" />
        <div className="flex flex-wrap justify-center gap-3 text-base text-muted-foreground mb-6">
          {PLATFORMS.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.slug}
                to={L(p.slug)}
                className="card-premium flex items-center gap-2.5 px-4 py-2.5 font-medium hover:text-primary"
              >
                <span
                  className="h-8 w-8 rounded-xl flex items-center justify-center text-white shrink-0 shadow-premium"
                  style={{ backgroundColor: p.color }}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span>{p.label}</span>
              </Link>
            );
          })}
        </div>
        <hr className="divider-premium mb-6" />
        <p className="text-center text-sm text-muted-foreground mb-2">{t("footer.copyright")}</p>
        <p className="text-center text-sm text-muted-foreground max-w-xl mx-auto">{t("footer.disclaimer")}</p>
      </div>
    </footer>
  );
}
