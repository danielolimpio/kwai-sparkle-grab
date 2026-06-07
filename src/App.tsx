import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { ScrollToTop } from "@/components/ScrollToTop";
import { usePwaInstall } from "@/hooks/use-pwa-install";
import { LanguageRedirect, LegacyPtRedirect } from "@/components/LanguageRedirect";
import { LangGuard } from "@/components/LangGuard";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const TermosDeUso = lazy(() => import("./pages/TermosDeUso.tsx"));
const Privacidade = lazy(() => import("./pages/Privacidade.tsx"));
const DMCA = lazy(() => import("./pages/DMCA.tsx"));
const Contato = lazy(() => import("./pages/Contato.tsx"));
const Sobre = lazy(() => import("./pages/Sobre.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const Downloads = lazy(() => import("./pages/Downloads.tsx"));
const UsoResponsavel = lazy(() => import("./pages/UsoResponsavel.tsx"));
const FAQPage = lazy(() => import("./pages/FAQPage.tsx"));
const BaixarTutorial = lazy(() => import("./pages/BaixarTutorial.tsx"));
const KwaiAPK = lazy(() => import("./pages/KwaiAPK.tsx"));

const queryClient = new QueryClient();

const App = () => {
  usePwaInstall();
  return (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="h-8 w-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" /></div>}>
          <Routes>
            {/* Root → detect browser language and redirect */}
            <Route path="/" element={<LanguageRedirect />} />

            {/* Legacy PT URLs → 301-style redirect to /pt/... (preserves ranking) */}
            <Route path="/termos-de-uso" element={<LegacyPtRedirect />} />
            <Route path="/privacidade" element={<LegacyPtRedirect />} />
            <Route path="/dmca" element={<LegacyPtRedirect />} />
            <Route path="/contato" element={<LegacyPtRedirect />} />
            <Route path="/sobre" element={<LegacyPtRedirect />} />
            <Route path="/blog" element={<LegacyPtRedirect />} />
            <Route path="/downloads" element={<LegacyPtRedirect />} />
            <Route path="/uso-responsavel" element={<LegacyPtRedirect />} />
            <Route path="/faq" element={<LegacyPtRedirect />} />
            <Route path="/baixar-tutorial" element={<LegacyPtRedirect />} />
            <Route path="/kwai-apk" element={<LegacyPtRedirect />} />

            {/* Language-prefixed routes */}
            <Route path="/:lang" element={<LangGuard><Index /></LangGuard>} />
            <Route path="/:lang/termos-de-uso" element={<LangGuard><TermosDeUso /></LangGuard>} />
            <Route path="/:lang/privacidade" element={<LangGuard><Privacidade /></LangGuard>} />
            <Route path="/:lang/dmca" element={<LangGuard><DMCA /></LangGuard>} />
            <Route path="/:lang/contato" element={<LangGuard><Contato /></LangGuard>} />
            <Route path="/:lang/sobre" element={<LangGuard><Sobre /></LangGuard>} />
            <Route path="/:lang/blog" element={<LangGuard><Blog /></LangGuard>} />
            <Route path="/:lang/downloads" element={<LangGuard><Downloads /></LangGuard>} />
            <Route path="/:lang/uso-responsavel" element={<LangGuard><UsoResponsavel /></LangGuard>} />
            <Route path="/:lang/faq" element={<LangGuard><FAQPage /></LangGuard>} />
            <Route path="/:lang/baixar-tutorial" element={<LangGuard><BaixarTutorial /></LangGuard>} />
            <Route path="/:lang/kwai-apk" element={<LangGuard><KwaiAPK /></LangGuard>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);
};

export default App;
