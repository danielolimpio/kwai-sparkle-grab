import { Home, Info, BookOpen, Mail, Download, HelpCircle, Smartphone, BookMarked } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCurrentLanguage } from "@/hooks/use-current-language";
import { buildPath } from "@/hooks/use-current-language";
import logoKwai from "@/assets/logo-kwai.png";
import { PLATFORMS } from "@/data/platforms";

const navConfig = [
  { icon: Home, key: "videos", path: "/" },
  { icon: Download, key: "baixarKwai", path: "/baixar-videos-kwai" },
  { icon: BookMarked, key: "tutorial", path: "/baixar-tutorial" },
  { icon: Smartphone, key: "kwaiApk", path: "/kwai-apk" },
  { icon: Download, key: "downloads", path: "/downloads" },
  { icon: Info, key: "about", path: "/sobre" },
  { icon: BookOpen, key: "blog", path: "/blog" },
  { icon: Mail, key: "contact", path: "/contato" },
  { icon: HelpCircle, key: "faq", path: "/faq" },
] as const;

interface AppSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function AppSidebar({ isOpen, onClose }: AppSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const { lang } = useCurrentLanguage();
  const navItems = navConfig.map((n) => ({ ...n, label: t(`nav.${n.key}`), to: buildPath(lang, n.path) }));

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden" onClick={onClose} />}

      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-[300px] border-r hairline bg-card section-cinematic flex flex-col overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div
          className="flex items-center gap-3 px-6 py-7 border-b hairline cursor-pointer shrink-0"
          onClick={() => { navigate(buildPath(lang, "/")); onClose(); }}
        >
          <img src={logoKwai} alt="KwaiSave" className="h-12 w-12 rounded-2xl shadow-kwai" />
          <div>
            <span className="block font-display text-xl font-extrabold text-foreground">KwaiSave</span>
            <p className="text-sm text-muted-foreground">{t("sidebar.tagline")}</p>
          </div>
        </div>

        <nav className="px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <button
                key={item.to}
                onClick={() => {
                  navigate(item.to);
                  onClose();
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-base font-semibold transition-all duration-200",
                  isActive
                    ? "btn-premium text-primary-foreground"
                    : "text-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className="h-6 w-6" />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-4 mt-4">
            <hr className="divider-premium mb-4" />
            <p className="px-4 pb-2 text-sm font-bold text-muted-foreground uppercase tracking-wider">{t("sidebar.others")}</p>
            {PLATFORMS.map((p) => {
              const Icon = p.icon;
              const to = buildPath(lang, p.slug);
              const isActive = location.pathname === to;
              return (
                <button
                  key={p.slug}
                  onClick={() => {
                    navigate(to);
                    onClose();
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-semibold transition-all duration-200",
                    isActive
                      ? "btn-premium text-primary-foreground"
                      : "text-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <span
                    className="h-8 w-8 rounded-xl flex items-center justify-center text-white shrink-0 shadow-premium"
                    style={{ backgroundColor: p.color }}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="truncate">{p.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        <div className="px-6 py-4 border-t hairline mt-auto">
          <a
            href="https://batepapogratis.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bate Papo Grátis"
            className="mb-4 flex flex-col items-center gap-0 p-2 rounded-xl transition-transform duration-300 hover:-translate-y-0.5"
          >
            <img
              src="/bate-papo-logo.png"
              alt="Bate Papo - Chat grátis online"
            width={440}
            height={440}
            loading="eager"
              decoding="async"
              className="w-32 h-auto object-contain -mb-6"
            />
            <img
              src="/bate-papo-chat.gif"
              alt="Balões de bate papo animados"
            width={160}
            height={160}
            loading="eager"
              decoding="async"
              className="w-14 h-14 object-contain -mt-2"
            />
          </a>
          <hr className="divider-premium mb-3" />
          <p className="text-sm text-muted-foreground">KwaiSave {t("sidebar.version")}</p>
          <p className="text-sm text-muted-foreground">{t("sidebar.copyright")}</p>
        </div>
      </aside>
    </>
  );
}