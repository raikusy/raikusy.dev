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
    name: "contact.tsx",
    path: "/contact",
    icon: <ReactIcon />,
  },
];

export function TabBar() {
  const pathname = usePathname();

  return (
    <div className="flex h-12 items-center">
      <div className="flex h-full items-center justify-center gap-2 p-2">
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;
          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={cn(
                "flex h-full min-w-[140px] items-center gap-2 justify-center rounded-md m-2",
                isActive && "bg-background text-foreground"
              )}
            >
              {tab.icon}
              <span className="truncate">{tab.name}</span>
              <X
                size={16}
                className="ml-auto hidden text-[#969696] hover:text-[#e1e1e1] group-hover:block"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
