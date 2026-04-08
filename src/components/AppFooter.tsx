import { Link } from "react-router-dom";

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
        </div>
        <p className="text-center text-xs text-muted-foreground mb-2">
          © 2024 Baixar Vídeos Kwai. Não somos afiliados ao Kwai.
        </p>
        <p className="text-center text-xs text-muted-foreground max-w-xl mx-auto">
          Este site não é afiliado, endossado ou patrocinado pelo Kwai ou Kuaishou Technology. Respeite os direitos autorais.
        </p>
      </div>
    </footer>
  );
}
