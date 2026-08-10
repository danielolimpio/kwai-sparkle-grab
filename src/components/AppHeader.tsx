import { Link, useLocation } from "react-router-dom";
import { Menu, Moon, Sun } from "lucide-react";
import logoKwai from "@/assets/logo-kwai.png";
import { useTheme } from "@/hooks/use-theme";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useCurrentLanguage, buildPath } from "@/hooks/use-current-language";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface AppHeaderProps {
  onMenuToggle: () => void;
}

const headerNav = [
  { key: "videos", path: "/" },
  { key: "about", path: "/sobre" },
  { key: "tutorial", path: "/baixar-tutorial" },
  { key: "blog", path: "/blog" },
  { key: "contact", path: "/contato" },
] as const;

export function AppHeader({ onMenuToggle }: AppHeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const { lang } = useCurrentLanguage();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-30 min-h-[60px] bg-card border-b border-border flex flex-wrap items-center gap-x-4 px-4 lg:px-6">
      <div className="flex items-center gap-3 shrink-0 h-[60px]">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
          aria-label={t("header.menu")}
        >
          <Menu className="h-5 w-5 text-foreground" />
        </button>
        <div className="flex items-center gap-2 lg:hidden">
          <img src={logoKwai} alt="KwaiSave" className="h-8 w-8 rounded-lg" />
          <span className="font-bold text-foreground">KwaiSave</span>
        </div>
      </div>

      <nav
        aria-label={t("header.navigation") as string}
        className="order-3 basis-full lg:order-none lg:basis-auto flex-1 min-w-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex items-center justify-center lg:justify-start gap-1 min-w-max pb-3 lg:pb-0">
          {headerNav.map((item) => {
            const to = buildPath(lang, item.path);
            const isActive = location.pathname === to;
            return (
              <Link
                key={item.key}
                to={to}
                className={cn(
                  "px-3 py-2 rounded-xl text-sm lg:text-base font-semibold whitespace-nowrap transition-colors",
                  isActive
                    ? "btn-premium text-primary-foreground"
                    : "text-foreground hover:bg-muted hover:text-primary"
                )}
              >
                {t(`nav.${item.key}`)}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="flex items-center gap-1 ml-auto shrink-0 h-[60px]">
        <LanguageSwitcher />
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl hover:bg-muted transition-colors"
          aria-label={theme === "dark" ? t("header.light") : t("header.dark")}
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-foreground" />
          ) : (
            <Moon className="h-5 w-5 text-foreground" />
          )}
        </button>
      </div>
    </header>
  );
}

