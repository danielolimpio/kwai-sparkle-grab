import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Globe, Check } from "lucide-react";
import { LANG_META, SUPPORTED_LANGS, SupportedLang } from "@/i18n";
import { useCurrentLanguage } from "@/hooks/use-current-language";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { lang } = useCurrentLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const switchTo = (next: SupportedLang) => {
    try { localStorage.setItem("i18nextLng", next); } catch {}
    const parts = location.pathname.split("/").filter(Boolean);
    if (parts.length > 0 && (SUPPORTED_LANGS as readonly string[]).includes(parts[0])) {
      parts[0] = next;
    } else {
      parts.unshift(next);
    }
    navigate("/" + parts.join("/") + location.search + location.hash);
    setOpen(false);
  };

  const current = LANG_META[lang];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-3 h-10 rounded-xl hover:bg-muted transition-colors text-foreground"
        aria-label="Select language"
        aria-expanded={open}
      >
        <span className="text-base leading-none" aria-hidden>{current.flag}</span>
        <span className="hidden sm:inline text-sm font-medium">{current.name}</span>
        <Globe className="h-4 w-4 sm:hidden" />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50 animate-fade-in">
          {SUPPORTED_LANGS.map((code) => {
            const meta = LANG_META[code];
            const active = code === lang;
            return (
              <button
                key={code}
                onClick={() => switchTo(code)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 text-sm hover:bg-muted transition-colors text-left",
                  active && "bg-muted/60 font-semibold"
                )}
              >
                <span className="text-lg leading-none" aria-hidden>{meta.flag}</span>
                <span className="flex-1 text-foreground">{meta.name}</span>
                {active && <Check className="h-4 w-4 text-primary" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}