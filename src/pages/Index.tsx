import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { AppSidebar } from "@/components/AppSidebar";
import { AppHeader } from "@/components/AppHeader";
import { HeroSection } from "@/components/HeroSection";
import { ContentTabs } from "@/components/ContentTabs";
import { FeatureCards } from "@/components/FeatureCards";
import { VideoCard } from "@/components/VideoCard";
import { HowItWorks } from "@/components/HowItWorks";
import { SupportedFormats } from "@/components/SupportedFormats";
import { FAQ } from "@/components/FAQ";
import { AppFooter } from "@/components/AppFooter";
import { SEOHead } from "@/components/SEOHead";

const homeFAQ = [
  { question: "É grátis para baixar vídeos do Kwai?", answer: "Sim! O KwaiSave é 100% grátis e sem limites. Baixe quantos vídeos quiser, sem cadastro e sem pagamento." },
  { question: "Preciso fazer login no Kwai para baixar?", answer: "Não! Basta copiar o link do vídeo público do Kwai e colar aqui. Não pedimos login nem dados pessoais." },
  { question: "Os vídeos baixam sem a logo do Kwai?", answer: "Sim! Nosso sistema remove a marca d'água automaticamente, entregando o vídeo limpo e em alta qualidade." },
  { question: "Funciona no celular?", answer: "Sim! O KwaiSave funciona em qualquer dispositivo com navegador: celular, tablet e computador." },
  { question: "Qual a qualidade dos downloads?", answer: "Oferecemos download na melhor qualidade disponível do vídeo original, incluindo HD e Full HD." },
  { question: "É seguro usar o KwaiSave?", answer: "Totalmente! Não armazenamos seus dados, não pedimos login e o site é protegido por HTTPS." },
];

export interface VideoResult {
  title: string;
  author: string;
  thumbnail: string;
  likes: string;
  comments: string;
  downloadUrl: string;
  type: "video";
}

export default function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [activeTab, setActiveTab] = useState("videos");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<VideoResult[]>([]);

  const handleSearch = async (url: string) => {
    const kwaiPattern = /kwai\.com|kw\.ai|kwai/i;
    if (!kwaiPattern.test(url)) {
      toast.error("Link inválido. Verifique e tente novamente.");
      return;
    }
    setIsLoading(true);
    setResults([]);

    try {
      const { data, error } = await supabase.functions.invoke("kwai-download", {
        body: { url },
      });

      if (error) {
        toast.error("Erro ao processar vídeo. Tente outro link.");
        return;
      }

      if (data?.error) {
        toast.error(data.error);
        return;
      }

      if (data?.success && data?.data) {
        setResults([data.data]);
        toast.success("Vídeo pronto para download!");
      } else {
        toast.error("Não foi possível encontrar o vídeo.");
      }
    } catch {
      toast.error("Erro de conexão. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-background">
      <AppSidebar
        activeTab={activeNav}
        onTabChange={setActiveNav}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 lg:ml-[280px] flex flex-col min-h-screen">
        <AppHeader onMenuToggle={() => setSidebarOpen((o) => !o)} />

        <main className="flex-1">
          <SEOHead
            title="Baixar Vídeos do Kwai Sem Marca d'Água"
            description="Baixe vídeos do Kwai sem marca d'água em alta qualidade. Ferramenta 100% grátis, rápida e ilimitada. Funciona no celular e computador."
            canonical="/"
            breadcrumbs={[{ name: "Início", url: "/" }]}
            faq={homeFAQ}
          />
          <HeroSection onSearch={handleSearch} isLoading={isLoading} />
          <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <FeatureCards />

          {results.length > 0 && (
            <section className="px-4 py-6 max-w-4xl mx-auto space-y-4 animate-fade-in">
              <h2 className="text-xl font-bold text-foreground">Resultados</h2>
              {results.map((r, i) => (
                <VideoCard key={i} {...r} />
              ))}
            </section>
          )}

          <HowItWorks />
          <SupportedFormats />
          <FAQ />
        </main>

        <AppFooter />
      </div>
    </div>
  );
}
