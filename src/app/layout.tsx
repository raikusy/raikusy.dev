import { ClientLayout } from "@/components/layouts/client-layout";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          dmSans.className,
          "bg-background text-foreground antialiased flex flex-1 h-screen overflow-y-hidden"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
