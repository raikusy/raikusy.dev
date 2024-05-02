"use client";

import {
  ChevronDown,
  ChevronRight,
  ContactIcon,
  FileIcon,
  HomeIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

import { PAGES } from "@/config/pages.config";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavSidebar = () => {
  const path = usePathname();
  return (
    <nav className="bg-gray-100 dark:bg-gray-900 w-64 border-r border-gray-200 dark:border-gray-800 overflow-y-auto sm:pl-14">
      <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
          EXPLORER
        </span>
      </div>
      <div className="mb-2 px-2 py-2 border-b border-gray-200 dark:border-gray-800 flex items-center">
        <ChevronDown className="size-5" />
        <span className="text-xs font-medium text-gray-700 dark:text-gray-300 ml-2">
          RAIKUSY.DEV
        </span>
      </div>
      <div className="ml-3 dark:border-gray-700">
        <Link
          className={cn(
            `flex items-center space-x-2 px-2 py-2 text-sm font-medium hover:underline ${
              path === PAGES.HOME
                ? "text-primary"
                : "hover:text-primary text-muted-foreground"
            }`
          )}
          href={PAGES.HOME}
        >
          <FileIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <span>Home.tsx</span>
        </Link>
        <Link
          className={cn(
            `flex items-center space-x-2 px-2 py-2 text-sm font-medium hover:underline ${
              path === PAGES.BLOG
                ? "text-primary"
                : "hover:text-primary text-muted-foreground"
            }`
          )}
          href={PAGES.BLOG}
        >
          <FileIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <span>Blog.tsx</span>
        </Link>
        <Link
          className={cn(
            `flex items-center space-x-2 px-2 py-2 text-sm font-medium hover:underline ${
              path === PAGES.ABOUT
                ? "text-primary"
                : "hover:text-primary text-muted-foreground"
            }`
          )}
          href={PAGES.ABOUT}
        >
          <FileIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <span>About.tsx</span>
        </Link>
        <Link
          className={cn(
            `flex items-center space-x-2 px-2 py-2 text-sm font-medium hover:underline ${
              path === PAGES.CONTACT
                ? "text-primary"
                : "hover:text-primary text-muted-foreground"
            }`
          )}
          href={PAGES.CONTACT}
        >
          <FileIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <span>Contact.tsx</span>
        </Link>
      </div>
      {path === PAGES.BLOG && (
        <>
          <div className="my-2 px-2 py-2 border-b border-gray-200 dark:border-gray-800 flex items-center">
            <ChevronDown className="size-5" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 ml-2">
              CATEGORIES
            </span>
          </div>
          <div className="px-4 dark:border-gray-700">
            <Link
              href="#"
              className="group flex items-center justify-between px-2 py-2 text-sm font-medium hover:underline hover:text-primary text-muted-foreground"
            >
              <span>React.js (7)</span>
              <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </Link>
            <Link
              href="#"
              className="group flex items-center justify-between px-2 py-2 text-sm font-medium hover:underline hover:text-primary text-muted-foreground"
            >
              <span>Next.js (4)</span>
              <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </Link>
            <Link
              href="#"
              className="group flex items-center justify-between px-2 py-2 text-sm font-medium hover:underline hover:text-primary text-muted-foreground"
            >
              <span>Typescript (2)</span>
              <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </Link>
            <Link
              href="#"
              className="group flex items-center justify-between px-2 py-2 text-sm font-medium hover:underline hover:text-primary text-muted-foreground"
            >
              <span>Nest.js (5)</span>
              <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </Link>
            <Link
              href="#"
              className="group flex items-center justify-between px-2 py-2 text-sm font-medium hover:underline hover:text-primary text-muted-foreground"
            >
              <span>Docker (2)</span>
              <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </Link>
            <Link
              href="#"
              className="group flex items-center justify-between px-2 py-2 text-sm font-medium hover:underline hover:text-primary text-muted-foreground"
            >
              <span>DevOps (1)</span>
              <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </Link>
            <Link
              href="#"
              className="group flex items-center justify-between px-2 py-2 text-sm font-medium hover:underline hover:text-primary text-muted-foreground"
            >
              <span>Terraform (2)</span>
              <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavSidebar;
