"use client";

import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { BashIcon } from "@/components/icons/bash-icon";

export function Header() {
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    setSearch("");
  };

  // useDebounce(() => {
  //   handleSearch();
  // }, 1000);

  return (
    <header className="flex min-h-12 items-center px-4 gap-8">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="flex items-center gap-2">
        <BashIcon className="h-7 w-7 text-foreground" />
        <span className="text-lg font-bold">raikusy.dev</span>
      </div>
      <div className="flex items-center justify-center px-4">
        <div className="flex h-9 w-96 items-center gap-2 rounded-md px-4 text-sm hover:bg-hover hover:text-card-foreground transition-all duration-300">
          <SearchIcon size={14} />
          <input
            type="text"
            placeholder="Search"
            value={search}
            className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}
