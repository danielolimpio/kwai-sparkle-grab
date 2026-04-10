import { Menu, Moon, Sun } from "lucide-react";
import logoKwai from "@/assets/logo-kwai.png";
import { useTheme } from "@/hooks/use-theme";

interface AppHeaderProps {
  onMenuToggle: () => void;
}

export function AppHeader({ onMenuToggle }: AppHeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 h-[60px] bg-card border-b border-border flex items-center justify-between px-4 lg:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
          aria-label="Abrir menu"
        >
          <Menu className="h-5 w-5 text-foreground" />
        </button>
        <div className="flex items-center gap-2 lg:hidden">
          <img src={logoKwai} alt="KwaiSave" className="h-8 w-8 rounded-lg" />
          <span className="font-bold text-foreground">KwaiSave</span>
        </div>
      </div>

      <button
        onClick={toggleTheme}
        className="p-2 rounded-xl hover:bg-muted transition-colors"
        aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-foreground" />
        ) : (
          <Moon className="h-5 w-5 text-foreground" />
        )}
      </button>
    </header>
  );
}
