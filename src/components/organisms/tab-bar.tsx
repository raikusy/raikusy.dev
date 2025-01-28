"use client";

import { cn } from "@/lib/utils";
import { FileIcon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ReactIcon from "../icons/react-icon";

interface Tab {
  name: string;
  path: string;
  icon?: React.ReactNode;
}

const tabs: Tab[] = [
  {
    name: "home.tsx",
    path: "/",
    icon: <ReactIcon />,
  },
  {
    name: "about.tsx",
    path: "/about",
    icon: <ReactIcon />,
  },
  {
    name: "blog.tsx",
    path: "/blog",
    icon: <ReactIcon />,
  },
  {
    name: "projects.tsx",
    path: "/projects",
    icon: <ReactIcon />,
  },
  {
    name: "contact.tsx",
    path: "/contact",
    icon: <ReactIcon />,
  },
];

export function TabBar() {
  const pathname = usePathname();

  return (
    <div className="flex w-full items-center gap-2 p-2 text-sm md:text-base font-mono">
      {tabs.map((tab) => {
        const isActive = pathname === tab.path;
        return (
          <Link
            key={tab.path}
            href={tab.path}
            className={cn(
              "flex p-2 h-full min-w-44 items-center gap-2 justify-center rounded-md hover:bg-hover",
              isActive &&
                "bg-background text-foreground hover:bg-active-hover font-semibold"
            )}
          >
            {tab.icon}
            <span className="truncate">{tab.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
