import { Video } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface ContentTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function ContentTabs({ activeTab, onTabChange }: ContentTabsProps) {
  const { t } = useTranslation();
  const tabs = [{ id: "videos", label: t("tabs.videos") as string, icon: Video }];
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap px-4 py-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
            activeTab === tab.id
              ? "gradient-kwai text-primary-foreground shadow-kwai"
              : "bg-card text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground"
          )}
        >
          <tab.icon className="h-4 w-4" />
          {tab.label}
        </button>
      ))}
    </div>
  );
}
