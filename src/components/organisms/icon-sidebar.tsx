"use client";

import { cn } from "@/lib/utils";
import {
  FileIcon,
  FolderIcon,
  GitBranchIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const icons = [
  {
    icon: FileIcon,
    href: "/",
    label: "Files",
  },
  {
    icon: SearchIcon,
    href: "/search",
    label: "Search",
  },
  {
    icon: GitBranchIcon,
    href: "/git",
    label: "Source Control",
  },
  {
    icon: SettingsIcon,
    href: "/settings",
    label: "Settings",
  },
];

export function IconSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-16 flex-col p-2 gap-2">
      {icons.map(({ icon: Icon, href, label }) => {
        const isActive = pathname === href;
        return (
          <Tooltip key={href}>
            <TooltipTrigger asChild>
              <Link
                href={href}
                className={cn(
                  "flex w-full h-12 p-2 rounded-md items-center justify-center text-muted-foreground hover:text-foreground hover:bg-hover transition-all duration-150 ease-out",
                  isActive && "bg-active text-foreground"
                )}
              >
                <Icon size={24} />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{label}</TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
