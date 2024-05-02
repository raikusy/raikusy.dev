import type { Metadata } from "next";
import { DM_Sans, Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import IconSidebar from "@/components/organisms/icon-sidebar";
import NavSidebar from "@/components/organisms/nav-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm_sans",
});

export const metadata: Metadata = {
  title: "MD Rakibul Hasan",
  description: "Full-stack Software Developer @raikusy",
  keywords: [
    "full-stack",
    "software",
    "developer",
    "raikusy",
    "nextjs",
    "tailwindcss",
    "reactjs",
    "nodejs",
    "typescript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          dmSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className="flex min-h-screen h-screen w-full">
              <IconSidebar />
              <NavSidebar />
              <main className="flex-1 bg-gray-100 p-8 dark:bg-gray-800">
                {children}
              </main>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
