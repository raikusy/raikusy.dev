"use client";

import { IconSidebar } from "@/components/organisms/icon-sidebar";
import { NavSidebar } from "@/components/organisms/nav-sidebar";
import { TabBar } from "@/components/organisms/tab-bar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "../organisms/header";
import { LineNumbers } from "../organisms/line-numbers";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <div className="flex h-screen flex-col">
        {/* Header */}
        <Header />

        {/* Main */}
        <div className="flex flex-1 overflow-hidden">
          <IconSidebar />
          <NavSidebar />

          {/* Content */}
          <div className="flex flex-1 flex-col bg-card rounded-md">
            <TabBar />
            <main className="flex flex-1 overflow-hidden font-mono text-lg min-w-full main-content">
              <LineNumbers />
              <section className="flex-1 p-4 overflow-auto">{children}</section>
            </main>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
