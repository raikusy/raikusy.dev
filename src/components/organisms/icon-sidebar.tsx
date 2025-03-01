"use client";

import { cn } from "@/lib/utils";
import {
  FileIcon,
  FolderIcon,
  GitBranchIcon,
  GithubIcon,
  HomeIcon,
  LinkedinIcon,
  MailIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { DiscordIcon } from "../icons/discord-icon";

const icons = [
  {
    icon: HomeIcon,
    href: "/",
    label: "Home",
  },
  {
    icon: StarIcon,
    href: "https://github.com/raikusy/raikusy.dev",
    label: "Github",
  },
  {
    icon: GithubIcon,
    href: "https://github.com/raikusy",
    label: "Github",
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/raikusy/",
    label: "Linkedin",
  },
  {
    icon: DiscordIcon,
    href: "https://discordapp.com/users/307469953043398657",
    label: "Discord",
  },
  {
    icon: MailIcon,
    href: "mailto:ping@raikusy.dev",
    label: "Email",
  },
];

export function IconSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex h-full w-16 flex-col p-2 gap-2">
      {icons.map(({ icon: Icon, href, label }) => {
        const isActive = pathname === href;
        return (
          <Tooltip key={href}>
            <TooltipTrigger asChild>
              <Link
                href={href}
                target={href.includes("https") ? "_blank" : undefined}
                className={cn(
                  "flex w-full h-12 p-2 rounded-md items-center justify-center text-muted-foreground hover:text-foreground hover:bg-hover transition-all duration-150 ease-out",
                  isActive && "bg-active text-foreground"
                )}
              >
                <Icon size={24} className="size-6" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{label}</TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
