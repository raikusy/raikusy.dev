"use client";

import { IconSidebar } from "@/components/organisms/icon-sidebar";
import { NavSidebar } from "@/components/organisms/nav-sidebar";
import { TabBar } from "@/components/organisms/tab-bar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "../organisms/header";
import { LineNumbers } from "../organisms/line-numbers";

export function ClientLayout({
  children,
  stars,
}: {
  children: React.ReactNode;
  stars: number;
}) {
  return (
    <TooltipProvider>
      <div className="flex min-h-screen flex-col flex-1">
        {/* Header */}
        <Header stars={stars} />

        {/* Main */}
        <div className="flex flex-1 h-full w-full">
          <IconSidebar />
          <NavSidebar />

          {/* Content */}
          <div className="flex flex-1 flex-col bg-card rounded-md">
            <TabBar />
            <main className="flex flex-1 overflow-hidden font-mono text-xs md:text-base w-full h-full">
              <LineNumbers />
              <section
                className="flex-1 p-4 overflow-auto w-full h-full 
              [&::-webkit-scrollbar]:w-1
              [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-track]:bg-background
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-active"
              >
                {children}
              </section>
            </main>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
