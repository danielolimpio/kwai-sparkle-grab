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
