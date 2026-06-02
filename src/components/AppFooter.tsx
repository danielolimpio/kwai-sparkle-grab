import { Link } from "react-router-dom";
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
  return (
    <footer className="bg-card border-t border-border mt-8">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-4">
          <Link to="/termos-de-uso" className="hover:text-primary transition-colors">Termos de Uso</Link>
          <Link to="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
          <Link to="/dmca" className="hover:text-primary transition-colors">DMCA</Link>
          <Link to="/contato" className="hover:text-primary transition-colors">Contato</Link>
          <Link to="/sobre" className="hover:text-primary transition-colors">Sobre</Link>
          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <Link to="/downloads" className="hover:text-primary transition-colors">Downloads</Link>
          <Link to="/uso-responsavel" className="hover:text-primary transition-colors">Uso Responsável</Link>
          <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          <Link to="/baixar-tutorial" className="hover:text-primary transition-colors">Tutorial</Link>
          <Link to="/kwai-apk" className="hover:text-primary transition-colors">Kwai APK</Link>
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
        <div className="border-t border-border my-6" />
        <div className="flex justify-center mb-6">
          <a
            href="https://batepapogratis.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bate Papo Grátis"
            className="group relative flex flex-col items-center gap-2 p-4 rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            />
            <img
              src="/bate-papo-logo.png"
              alt="Bate Papo - Chat grátis online"
              width={160}
              height={160}
              loading="lazy"
              decoding="async"
              className="relative z-10 w-32 h-auto object-contain"
            />
            <img
              src="/bate-papo-chat.gif"
              alt="Balões de bate papo animados"
              width={80}
              height={80}
              loading="lazy"
              decoding="async"
              className="relative z-10 w-16 h-16 object-contain"
            />
          </a>
        </div>
        <div className="border-t border-border mb-4" />
        <p className="text-center text-xs text-muted-foreground mb-2">
          © 2026 Baixar Vídeos Kwai. Não somos afiliados ao Kwai.
        </p>
        <p className="text-center text-xs text-muted-foreground max-w-xl mx-auto">
          Este site não é afiliado, endossado ou patrocinado pelo Kwai ou Kuaishou Technology. Respeite os direitos autorais.
        </p>
      </div>
    </footer>
  );
}
