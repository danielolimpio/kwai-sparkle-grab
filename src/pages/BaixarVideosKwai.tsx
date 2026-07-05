import { useState } from "react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import { AppSidebar } from "@/components/AppSidebar";
import { AppHeader } from "@/components/AppHeader";
import { HeroSection } from "@/components/HeroSection";
import { VideoCard } from "@/components/VideoCard";
import { AppFooter } from "@/components/AppFooter";
import { SEOHead } from "@/components/SEOHead";
import type { VideoResult } from "@/pages/Index";

export default function BaixarVideosKwai() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<VideoResult[]>([]);
  const { t } = useTranslation();

  const handleSearch = async (url: string) => {
    const kwaiPattern = /kwai\.com|kw\.ai|kwai/i;
    if (!kwaiPattern.test(url)) {
      toast.error(t("hero.toasts.invalid"));
      return;
    }
    setIsLoading(true);
    setResults([]);
    try {
      const { data, error } = await supabase.functions.invoke("kwai-download", { body: { url } });
      if (error) { toast.error(t("hero.toasts.error")); return; }
      if (data?.error) { toast.error(data.error); return; }
      if (data?.success && data?.data) {
        setResults([data.data]);
        toast.success(t("hero.toasts.ready"));
      } else {
        toast.error(t("hero.toasts.notFound"));
      }
    } catch {
      toast.error(t("hero.toasts.connection"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-background">
      <AppSidebar activeTab="baixarKwai" onTabChange={() => {}} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 lg:ml-[280px] flex flex-col min-h-screen">
        <AppHeader onMenuToggle={() => setSidebarOpen((o) => !o)} />
        <main className="flex-1">
          <SEOHead
            title={t("meta.baixarKwai.title") as string}
            description={t("meta.baixarKwai.description") as string}
            canonical="/baixar-videos-kwai"
            breadcrumbs={[
              { name: t("breadcrumb.home") as string, url: "/" },
              { name: t("nav.baixarKwai") as string, url: "/baixar-videos-kwai" },
            ]}
            schemaType="page"
          />
          <HeroSection
            onSearch={handleSearch}
            isLoading={isLoading}
            resultsSlot={
              results.length > 0 ? (
                <section className="px-4 py-6 max-w-4xl mx-auto space-y-4 animate-fade-in">
                  <h2 className="text-xl font-bold text-foreground">{t("results.title")}</h2>
                  {results.map((r, i) => (<VideoCard key={i} {...r} />))}
                </section>
              ) : undefined
            }
          />
        </main>
        <AppFooter />
      </div>
    </div>
  );
}