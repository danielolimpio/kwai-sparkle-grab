import { Video, Info, BookOpen, Mail, Download, HelpCircle, Smartphone, BookMarked } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";
import logoKwai from "@/assets/logo-kwai.png";
import logoInstagram from "@/assets/baixar-instagram.png";
import logoFacebook from "@/assets/baixar-facebook.png";
import logoYoutube from "@/assets/baixar-youtube.png";
import logoTiktok from "@/assets/baixar-tiktok.png";
import logoTwitter from "@/assets/baixar-twitter.jpg";

const navItems = [
  { icon: Video, label: "Vídeos", path: "/" },
  { icon: BookMarked, label: "Tutorial", path: "/baixar-tutorial" },
  { icon: Smartphone, label: "Kwai APK", path: "/kwai-apk" },
  { icon: Download, label: "Downloads", path: "/downloads" },
  { icon: Info, label: "Sobre", path: "/sobre" },
  { icon: BookOpen, label: "Blog", path: "/blog" },
  { icon: Mail, label: "Contato", path: "/contato" },
  { icon: HelpCircle, label: "FAQ", path: "/faq" },
];

const externalLinks = [
  { label: "Baixar Instagram", url: "https://baixarvideosinstagram.com", logo: logoInstagram },
  { label: "Baixar Facebook", url: "https://baixarvideosfacebook.com", logo: logoFacebook },
  { label: "Baixar YouTube", url: "https://baixarvideoyoutube.com", logo: logoYoutube },
  { label: "Baixar TikTok", url: "https://baixarvideostiktok.com", logo: logoTiktok },
  { label: "Baixar Twitter", url: "https://baixarvideostwitter.com", logo: logoTwitter },
];

interface AppSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function AppSidebar({ isOpen, onClose }: AppSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden" onClick={onClose} />}

      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-[280px] border-r border-border bg-card flex flex-col overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div
          className="flex items-center gap-3 px-6 py-6 border-b border-border cursor-pointer shrink-0"
          onClick={() => { navigate("/"); onClose(); }}
        >
          <img src={logoKwai} alt="KwaiSave" className="h-10 w-10 rounded-xl shadow-kwai" />
          <div>
            <h1 className="text-lg font-bold text-foreground">KwaiSave</h1>
            <p className="text-xs text-muted-foreground">Baixar Vídeos</p>
          </div>
        </div>

        <nav className="px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
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

          <div className="pt-4 mt-4 border-t border-border">
            <p className="px-4 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Outros Baixadores</p>
            {externalLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200"
              >
                <img src={link.logo} alt={link.label} className="h-6 w-6 rounded-md object-cover" />
                <span className="truncate">{link.label}</span>
              </a>
            ))}
          </div>
        </nav>

        <div className="px-6 py-4 border-t border-border mt-auto">
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
              width={220}
              height={220}
              loading="lazy"
              decoding="async"
              className="w-32 h-auto object-contain -mb-6"
            />
            <img
              src="/bate-papo-chat.gif"
              alt="Balões de bate papo animados"
              width={96}
              height={96}
              loading="lazy"
              decoding="async"
              className="w-14 h-14 object-contain -mt-2"
            />
          </a>
          <div className="border-t border-border mb-3" />
          <p className="text-xs text-muted-foreground">KwaiSave v1.0</p>
          <p className="text-xs text-muted-foreground">© 2026 baixarvideoskwai.com</p>
        </div>
      </aside>
    </>
  );
}