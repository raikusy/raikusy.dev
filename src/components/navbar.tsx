import Link from "next/link";
import React from "react";
import { ModeToggle } from "./dark-mode-toggle";

const Navbar = () => {
  return (
    <nav className="shadow-md rounded-xl w-auto">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-between h-16">
          <div className="w-full flex space-x-4 items-center justify-center">
            <Link href="/">
              <div className="flex items-center text-black text-md font-medium">
                Home
              </div>
            </Link>
            <Link href="/blog">
              <div className="flex items-center text-gray-600 text-md font-medium hover:text-black">
                Blog
              </div>
            </Link>
            <Link href="/about">
              <div className="flex items-center text-gray-600 text-md font-medium hover:text-black">
                About Me
              </div>
            </Link>
            <Link href="/contact">
              <div className="flex items-center text-gray-600 text-md font-medium hover:text-black">
                Contact
              </div>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
