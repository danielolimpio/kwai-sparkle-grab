export function AppFooter() {
  return (
    <footer className="bg-card border-t border-border mt-8">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-4">
          <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
          <a href="#" className="hover:text-primary transition-colors">DMCA</a>
          <a href="#" className="hover:text-primary transition-colors">Contato</a>
          <a href="#" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#" className="hover:text-primary transition-colors">Blog</a>
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
