import { ClientLayout } from "@/components/layouts/client-layout";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { serverEnv } from "@/env/server";
import { Suspense } from "react";

const dmSans = DM_Sans({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const repo = await fetch(`https://api.github.com/repos/raikusy/raikusy.dev`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${serverEnv.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  const data = await repo.json();
  const stars = data?.stargazers_count ?? 0;
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          dmSans.className,
          jetBrainsMono.className,
          "bg-background text-foreground antialiased flex flex-1 h-screen overflow-y-hidden"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <ClientLayout stars={stars}>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
