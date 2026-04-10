import { Download, Link, ClipboardPaste, X } from "lucide-react";
import { useState, ReactNode } from "react";
import { toast } from "sonner";
import kwaiHero1 from "@/assets/kwai-hero-1.png";
import kwaiHero2 from "@/assets/kwai-hero-2.png";

interface HeroSectionProps {
  onSearch: (url: string) => void;
  isLoading: boolean;
  resultsSlot?: ReactNode;
}

export function HeroSection({ onSearch, isLoading, resultsSlot }: HeroSectionProps) {
  const [url, setUrl] = useState("");

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      toast.success("Link colado com sucesso!");
    } catch {
      toast.error("Não foi possível acessar a área de transferência.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      toast.error("Cole um link do Kwai para continuar.");
      return;
    }
    onSearch(url.trim());
  };

  return (
    <section className="text-center py-10 px-4 animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight">
        Baixar Vídeos do Kwai{" "}
        <span className="gradient-kwai-text">Sem Marca d'Água</span>
      </h1>
      <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
        Baixe vídeos do Kwai em alta qualidade de forma rápida, simples e sem abrir telas extras de reprodução.
      </p>

      <form onSubmit={handleSubmit} className="max-w-[700px] mx-auto">
        <div className="relative flex items-center">
          <div className="absolute left-4 text-primary z-10">
            <Link className="h-5 w-5" />
          </div>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Cole o link do Kwai aqui..."
            className="w-full h-14 pl-12 pr-28 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground text-base focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all overflow-hidden text-ellipsis"
          />
          <div className="absolute right-2 flex items-center gap-1 bg-card pl-2">
            {url && (
              <button
                type="button"
                onClick={() => { setUrl(""); }}
                className="flex items-center gap-1 px-2 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
              >
                <X className="h-4 w-4" />
                <span className="hidden sm:inline">Limpar</span>
              </button>
            )}
            <button
              type="button"
              onClick={handlePaste}
              className="flex items-center gap-1 px-2 py-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
            >
              <ClipboardPaste className="h-4 w-4" />
              <span className="hidden sm:inline">Colar</span>
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="mt-4 h-14 px-12 gradient-kwai text-primary-foreground font-bold text-base rounded-xl shadow-kwai hover:shadow-kwai-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
        >
          {isLoading ? (
            <div className="h-5 w-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
          ) : (
            <Download className="h-5 w-5" />
          )}
          {isLoading ? "Processando..." : "Baixar Agora"}
        </button>

        <p className="mt-4 text-xs text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Certifique-se de não violar os direitos de terceiros com os vídeos que baixar do Kwai. Conteúdos protegidos por direitos autorais não podem ser baixados com esta ferramenta.{" "}
          <a href="/uso-responsavel" className="text-primary font-semibold hover:underline">Saiba mais</a>
        </p>
      </form>

      {/* Results slot - between disclaimer and images */}
      {resultsSlot}

      {/* Showcase images */}
      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 px-2">
        <div className="rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-kwai-lg hover:-translate-y-1 transition-all duration-300">
          <img src={kwaiHero1} alt="Baixar vídeos do Kwai sem marca d'água" className="w-full h-auto object-cover" loading="lazy" />
        </div>
        <div className="rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-kwai-lg hover:-translate-y-1 transition-all duration-300">
          <img src={kwaiHero2} alt="Plataforma Kwai - vídeos em alta qualidade" className="w-full h-auto object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
