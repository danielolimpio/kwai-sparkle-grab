import { Route, Routes } from "react-router-dom";
import { LegacyPtRedirect } from "@/components/LanguageRedirect";
import { LangGuard } from "@/components/LangGuard";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermosDeUso from "./pages/TermosDeUso";
import Privacidade from "./pages/Privacidade";
import DMCA from "./pages/DMCA";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import Blog from "./pages/Blog";
import Downloads from "./pages/Downloads";
import UsoResponsavel from "./pages/UsoResponsavel";
import FAQPage from "./pages/FAQPage";
import BaixarTutorial from "./pages/BaixarTutorial";
import KwaiAPK from "./pages/KwaiAPK";
import BaixarVideosKwai from "./pages/BaixarVideosKwai";
import BaixarPlataforma from "./pages/BaixarPlataforma";
import { PLATFORMS } from "@/data/platforms";
import LandingKwai from "./pages/LandingKwai";
import { LANDINGS } from "@/data/landings";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />

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
      <Route path="/baixar-videos-kwai" element={<LegacyPtRedirect />} />
      {PLATFORMS.map((p) => (
        <Route key={p.slug} path={p.slug} element={<LegacyPtRedirect />} />
      ))}
      {LANDINGS.map((l) => (
        <Route key={l.slug} path={l.slug} element={<LegacyPtRedirect />} />
      ))}

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
      <Route path="/:lang/baixar-videos-kwai" element={<LangGuard><BaixarVideosKwai /></LangGuard>} />
      {PLATFORMS.map((p) => (
        <Route
          key={p.slug}
          path={`/:lang${p.slug}`}
          element={<LangGuard><BaixarPlataforma platform={p} /></LangGuard>}
        />
      ))}

      {LANDINGS.map((l) => (
        <Route
          key={l.slug}
          path={`/:lang${l.slug}`}
          element={<LangGuard><LandingKwai landing={l} /></LangGuard>}
        />
      ))}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
