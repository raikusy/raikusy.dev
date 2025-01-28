"use client";

import { BashIcon } from "@/components/icons/bash-icon";
import { SearchIcon, StarIcon, X } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useFormState } from "react-dom";

export function Header({ stars }: { stars: number }) {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const router = useRouter();

  const handleSearch = (prevState: any, formData: FormData) => {
    const search = formData.get("search");
    setSearch(search?.toString() || "");
    if (search) {
      router.push(`/blog?q=${search}`);
    } else {
      router.push(`/blog`);
    }
  };

  const [state, formAction] = useFormState(handleSearch, undefined);

  // useDebounce(() => {
  //   handleSearch();
  // }, 1000);

  const handleClearSearch = () => {
    setSearch("");
    router.push(`/blog`);
  };

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
        <form
          action={formAction}
          className="flex h-9 w-96 items-center gap-2 rounded-md px-4 text-sm hover:bg-hover hover:text-card-foreground transition-all duration-300"
        >
          <SearchIcon size={14} />
          <input
            type="text"
            name="search"
            placeholder="Search (press enter to search)"
            value={search}
            className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <X
              className="hover:cursor-pointer"
              size={14}
              onClick={handleClearSearch}
            />
          )}
        </form>
      </div>
      <Link
        href="https://github.com/raikusy/raikusy.dev"
        className="flex text-sm md:text-base items-center gap-2 ml-auto hover:bg-hover rounded-md p-2"
      >
        {stars ?? 0}
        <StarIcon size={18} />
        <span>Stars!</span>
      </Link>
    </header>
  );
}
