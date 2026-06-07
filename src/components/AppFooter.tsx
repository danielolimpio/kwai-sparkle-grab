import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCurrentLanguage, buildPath } from "@/hooks/use-current-language";
import logoInstagram from "@/assets/baixar-instagram.png";
import logoFacebook from "@/assets/baixar-facebook.png";
import logoYoutube from "@/assets/baixar-youtube.png";
import logoTiktok from "@/assets/baixar-tiktok.png";
import logoTwitter from "@/assets/baixar-twitter.jpg";

const externalLinks = [
  { label: "Baixar Instagram", url: "https://baixarvideosinstagram.com", logo: logoInstagram },
  { label: "Baixar Facebook", url: "https://baixarvideosfacebook.com", logo: logoFacebook },
  { label: "Baixar YouTube", url: "https://baixarvideoyoutube.com", logo: logoYoutube },
  { label: "Baixar TikTok", url: "https://baixarvideostiktok.com", logo: logoTiktok },
  { label: "Baixar Twitter", url: "https://baixarvideostwitter.com", logo: logoTwitter },
];

export function AppFooter() {
  const { t } = useTranslation();
  const { lang } = useCurrentLanguage();
  const L = (p: string) => buildPath(lang, p);
  return (
    <footer className="bg-card border-t border-border mt-8">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-4">
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
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-4">
          {externalLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <img src={link.logo} alt={link.label} className="w-5 h-5 rounded object-cover" loading="lazy" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mb-2">{t("footer.copyright")}</p>
        <p className="text-center text-xs text-muted-foreground max-w-xl mx-auto">{t("footer.disclaimer")}</p>
      </div>
    </footer>
  );
}
