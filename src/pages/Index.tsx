import { useState } from "react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
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
import { SEOContentBlock } from "@/components/SEOContentBlock";
import { RelatedLinks } from "@/components/RelatedLinks";
import { AppFooter } from "@/components/AppFooter";
import { SEOHead } from "@/components/SEOHead";

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
  const { t } = useTranslation();
  const faqItems = (t("faq.items", { returnObjects: true }) as { q: string; a: string }[]) || [];
  const homeFAQ = faqItems.map((f) => ({ question: f.q, answer: f.a }));
  const relatedItems = (t("related.items", { returnObjects: true }) as { title: string; desc: string; url: string; icon: string }[]) || [];

  const handleSearch = async (url: string) => {
    const kwaiPattern = /kwai\.com|kw\.ai|kwai/i;
    if (!kwaiPattern.test(url)) {
      toast.error(t("hero.toasts.invalid"));
      return;
    }
    setIsLoading(true);
    setResults([]);

    try {
      const { data, error } = await supabase.functions.invoke("kwai-download", {
        body: { url },
      });

      if (error) {
        toast.error(t("hero.toasts.error"));
        return;
      }

      if (data?.error) {
        toast.error(data.error);
        return;
      }

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
            title={t("meta.home.title") as string}
            description={t("meta.home.description") as string}
            canonical="/"
            breadcrumbs={[{ name: t("breadcrumb.home") as string, url: "/" }]}
            faq={homeFAQ}
            schemaType="home"
          />
          <HeroSection
            onSearch={handleSearch}
            isLoading={isLoading}
            resultsSlot={
              results.length > 0 ? (
                <section className="px-4 py-6 max-w-4xl mx-auto space-y-4 animate-fade-in">
                  <h2 className="text-xl font-bold text-foreground">{t("results.title")}</h2>
                  {results.map((r, i) => (
                    <VideoCard key={i} {...r} />
                  ))}
                </section>
              ) : undefined
            }
          />
          <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <FeatureCards />

          <HowItWorks />
          <SupportedFormats />
          <SEOContentBlock />
          <FAQ />
          <RelatedLinks
            title={t("related.title") as string}
            items={relatedItems.map((it) => ({ title: it.title, description: it.desc, url: it.url, icon: it.icon as never }))}
          />
        </main>

        <AppFooter />
      </div>
    </div>
  );
}