import { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { SUPPORTED_LANGS } from "@/i18n";
import NotFound from "@/pages/NotFound";

export function LangGuard({ children }: { children: ReactNode }) {
  const { lang } = useParams();
  const ok = lang && (SUPPORTED_LANGS as readonly string[]).includes(lang.toLowerCase());
  if (!ok) return <NotFound />;
  return <>{children}</>;
}