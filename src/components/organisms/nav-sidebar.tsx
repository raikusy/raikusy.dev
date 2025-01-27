"use client";

import {
  ChevronDown,
  ChevronRight,
  ContactIcon,
  FileIcon,
  HomeIcon,
  UserIcon,
  FolderIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import { PAGES } from "@/config/pages.config";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ReactIcon from "../icons/react-icon";
import { ESLintIcon } from "../icons/eslint-icon";
import { NpmIcon } from "../icons/npm-icon";

interface FileItem {
  name: string;
  type: "file" | "folder" | "link";
  icon?: React.ReactNode;
  children?: FileItem[];
  path: string;
}

const files: FileItem[] = [
  {
    name: ".vscode",
    type: "folder",
    path: "/.vscode",
    children: [],
  },
  {
    name: "public",
    type: "folder",
    path: "/public",
    children: [],
  },
  {
    name: "src",
    type: "folder",
    path: "/src",
    children: [
      {
        name: "pages",
        type: "folder",
        path: "/src/pages",
        children: [
          {
            name: "home.tsx",
            type: "link",
            icon: <ReactIcon />,
            path: "/",
          },
          {
            name: "about.tsx",
            type: "link",
            icon: <ReactIcon />,
            path: "/about",
          },
          {
            name: "blog.tsx",
            type: "link",
            icon: <ReactIcon />,
            path: "/blog",
          },
          {
            name: "projects.tsx",
            type: "link",
            icon: <ReactIcon />,
            path: "/projects",
          },
          {
            name: "contact.tsx",
            type: "link",
            icon: <ReactIcon />,
            path: "/contact",
          },
        ],
      },
      {
        name: "components",
        type: "folder",
        path: "/src/components",
        children: [],
      },
    ],
  },
  {
    name: ".env.local",
    type: "file",
    path: "/.env.local",
  },
  {
    name: ".eslintrc.json",
    type: "file",
    path: "/.eslintrc.json",
    icon: <ESLintIcon />,
  },
  {
    name: "package.json",
    type: "file",
    path: "/package.json",
    icon: <NpmIcon />,
  },
];

interface FileTreeItemProps {
  item: FileItem;
  level?: number;
}

function FileTreeItem({ item, level = 0 }: FileTreeItemProps) {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren =
    item.type === "folder" && item.children && item.children.length > 0;

  return (
    <div>
      <LinkItem item={item} level={level} isOpen={isOpen} setIsOpen={setIsOpen}>
        {item.type === "folder" ? (
          <>
            {hasChildren ? (
              <span className="flex h-4 w-4 items-center justify-center">
                {isOpen ? (
                  <ChevronDown size={14} />
                ) : (
                  <ChevronRight size={14} />
                )}
              </span>
            ) : (
              <span className="w-4" />
            )}
            <FolderIcon size={16} />
          </>
        ) : (
          <>
            <span className="w-4" />
            {item.icon ?? <FileIcon size={16} />}
          </>
        )}
        <span className="truncate">{item.name}</span>
      </LinkItem>
      {isOpen && item.children && (
        <div>
          {item.children.map((child) => (
            <FileTreeItem key={child.path} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

function LinkItem({
  item,
  level,
  children,
  isOpen,
  setIsOpen,
}: {
  item: FileItem;
  level: number;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const isActive = usePathname() === item.path;
  const hasChildren =
    item.type === "folder" && item.children && item.children.length > 0;

  if (item.type === "link") {
    return (
      <Link
        className={cn(
          "flex cursor-pointer items-center gap-1 py-1 rounded-md hover:bg-hover",
          isActive && "bg-background text-foreground hover:bg-active-hover",
          level > 0 && "ml-4"
        )}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
        style={{ marginLeft: `${level * 0.75}rem` }}
        href={item.path}
      >
        {children}
      </Link>
    );
  }
  return (
    <div
      className={cn(
        "flex cursor-pointer items-center gap-1 py-1 rounded-md hover:bg-hover",
        isActive && "bg-background text-foreground hover:bg-active-hover",
        level > 0 && "ml-4"
      )}
      onClick={() => hasChildren && setIsOpen(!isOpen)}
      style={{ marginLeft: `${level * 0.75}rem` }}
    >
      {children}
    </div>
  );
}

export function NavSidebar() {
  return (
    <div className="flex h-full w-60 flex-col rounded-md overflow-hidden mr-2 bg-card text-card-foreground">
      <div className="flex items-center justify-between px-4 py-2 text-sm">
        <span className="font-medium">EXPLORER</span>
      </div>
      <div className="flex-1 px-2">
        {files.map((file) => (
          <FileTreeItem key={file.path} item={file} />
        ))}
      </div>
    </div>
  );
}
