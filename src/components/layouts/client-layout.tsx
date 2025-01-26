"use client";

import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { IconSidebar } from "@/components/organisms/icon-sidebar";
import { NavSidebar } from "@/components/organisms/nav-sidebar";
import { TabBar } from "@/components/organisms/tab-bar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "../organisms/header";

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
            <main className="flex-1 overflow-auto">{children}</main>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
