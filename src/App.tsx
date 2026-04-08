import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { lazy, Suspense } from "react";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const TermosDeUso = lazy(() => import("./pages/TermosDeUso.tsx"));
const Privacidade = lazy(() => import("./pages/Privacidade.tsx"));
const DMCA = lazy(() => import("./pages/DMCA.tsx"));
const Contato = lazy(() => import("./pages/Contato.tsx"));
const Sobre = lazy(() => import("./pages/Sobre.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="h-8 w-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" /></div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/termos-de-uso" element={<TermosDeUso />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
