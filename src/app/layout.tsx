import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ClientLayout } from "@/components/layouts/client-layout";
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
          "bg-background text-foreground antialiased"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
