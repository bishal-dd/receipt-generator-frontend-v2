"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { navItems } from "./segments";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function PublicNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-background  sticky top-0 z-40 w-full border-b border-b-slate-200 dark:border-b-slate-700">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex-shrink-0 text-2xl font-bold text-primary"
            >
              2QuickPaper
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center ml-10 space-x-4">
              {navItems.map((link) => (
                <Link
                  key={link.link}
                  href={link.link}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    pathname === link.link
                      ? "text-black bg-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-accent"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/home/sign-in"
                className="px-4 py-2 text-sm font-medium text-black bg-primary rounded-md shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Sign In
              </Link>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  pathname === link.link
                    ? "text-white bg-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-accent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/home/sign-in"
              className="px-4 py-2 text-sm font-medium text-black bg-primary rounded-md shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
