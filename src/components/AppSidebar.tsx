import { Video, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [{ icon: Video, label: "Vídeos", id: "videos" }];

interface AppSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function AppSidebar({ activeTab, onTabChange, isOpen, onClose }: AppSidebarProps) {
  return (
    <>
      {isOpen && <div className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden" onClick={onClose} />}

      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-[280px] border-r border-border bg-card flex flex-col transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center gap-3 px-6 py-6 border-b border-border">
          <div className="gradient-kwai rounded-xl p-2.5 shadow-kwai">
            <Play className="h-5 w-5 text-primary-foreground fill-current" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">KwaiSave</h1>
            <p className="text-xs text-muted-foreground">Baixar Vídeos</p>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  onClose();
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                  isActive
                    ? "gradient-kwai text-primary-foreground shadow-kwai"
                    : "text-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="px-6 py-4 border-t border-border">
          <p className="text-xs text-muted-foreground">KwaiSave v1.0</p>
          <p className="text-xs text-muted-foreground">© 2024 baixarvideoskwai.com</p>
        </div>
      </aside>
    </>
  );
}
