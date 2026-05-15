import { useState } from "react";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageLayout({ children, breadcrumbs }: { children: React.ReactNode; breadcrumbs?: Crumb[] }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex w-full bg-background">
      <AppSidebar
        activeTab=""
        onTabChange={() => {}}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 lg:ml-[280px] flex flex-col min-h-screen">
        <AppHeader onMenuToggle={() => setSidebarOpen((o) => !o)} />
        <main className="flex-1">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          {children}
        </main>
        <AppFooter />
      </div>
    </div>
  );
}
