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
    <nav className="grid items-start px-2 text-sm font-medium pl-14">
      <div className="dark:text-gray-500 font-bold px-2">
        <h3>WELCOME</h3>
      </div>
      <div className="flex gap-2 dark:text-gray-500 font-bold border-t dark:border-gray-700 mt-2 py-2">
        <ChevronDown />
        <h3>RAIKUSY.DEV</h3>
      </div>
      <div className="p-4 space-y-2 dark:border-gray-700">
        <Link
          className={cn(
            `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
              path === PAGES.HOME
                ? "bg-muted text-primary"
                : "text-muted-foreground"
            }`
          )}
          href={PAGES.HOME}
        >
          <HomeIcon className="h-5 w-5" />
          <span>Home.tsx</span>
        </Link>
        <Link
          className={cn(
            `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
              path === PAGES.BLOG
                ? "bg-muted text-primary"
                : "text-muted-foreground"
            }`
          )}
          href={PAGES.BLOG}
        >
          <FileIcon className="h-5 w-5" />
          <span>Blog.tsx</span>
        </Link>
        <Link
          className={cn(
            `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
              path === PAGES.ABOUT
                ? "bg-muted text-primary"
                : "text-muted-foreground"
            }`
          )}
          href={PAGES.ABOUT}
        >
          <UserIcon className="h-5 w-5" />
          <span>About.tsx</span>
        </Link>
        <Link
          className={cn(
            `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
              path === PAGES.CONTACT
                ? "bg-muted text-primary"
                : "text-muted-foreground"
            }`
          )}
          href={PAGES.CONTACT}
        >
          <ContactIcon className="h-5 w-5" />
          <span>Contact.tsx</span>
        </Link>
      </div>
      {path === PAGES.BLOG && (
        <>
          <div className="flex gap-2 dark:text-gray-500 font-bold border-t dark:border-gray-700 mt-4 py-2">
            <ChevronDown />
            <h3>CATEGORIES</h3>
          </div>
          <div className="px-4 space-y-2 dark:border-gray-700">
            <Link
              href="#"
              className="group flex items-center gap-2 hover:underline"
            >
              <ChevronDown className="transition-all rotate-0 group-hover:-rotate-90" />
              <span>React.js (7)</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 hover:underline"
            >
              <ChevronDown className="transition-all rotate-0 group-hover:-rotate-90" />
              <span>Next.js (4)</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 hover:underline"
            >
              <ChevronDown className="transition-all rotate-0 group-hover:-rotate-90" />
              <span>Typescript (2)</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 hover:underline"
            >
              <ChevronDown className="transition-all rotate-0 group-hover:-rotate-90" />
              <span>Nest.js (5)</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 hover:underline"
            >
              <ChevronDown className="transition-all rotate-0 group-hover:-rotate-90" />
              <span>Docker (2)</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 hover:underline"
            >
              <ChevronDown className="transition-all rotate-0 group-hover:-rotate-90" />
              <span>DevOps (1)</span>
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 hover:underline"
            >
              <ChevronDown className="transition-all rotate-0 group-hover:-rotate-90" />
              <span>Terraform (2)</span>
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavSidebar;
