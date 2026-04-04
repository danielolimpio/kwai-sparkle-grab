import { useState } from "react";
import { toast } from "sonner";
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

const mockResults = [
  { title: "Dança viral do momento! 🔥💃", author: "@mariasilvadanca", views: "2.5M", likes: "150K", duration: "0:45", type: "video" as const },
  { title: "Receita fácil de bolo de chocolate 🍫", author: "@chefluiz", views: "890K", likes: "67K", duration: "1:20", type: "video" as const },
  { title: "Tutorial maquiagem glow ✨", author: "@belezanatural", views: "1.2M", likes: "98K", duration: "0:30", type: "short" as const },
  { title: "Show ao vivo - Sertanejo", author: "@musicabrasil", views: "450K", likes: "32K", duration: "45:00", type: "live" as const },
];

export default function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [activeTab, setActiveTab] = useState("videos");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<typeof mockResults>([]);

  const handleSearch = (url: string) => {
    const kwaiPattern = /kwai\.com|kw\.ai|kwai/i;
    if (!kwaiPattern.test(url)) {
      toast.error("Link inválido. Verifique e tente novamente.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setResults(mockResults);
      setIsLoading(false);
      toast.success("Vídeo pronto para download!");
    }, 1500);
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
