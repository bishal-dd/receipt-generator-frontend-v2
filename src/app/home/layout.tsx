'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Zap, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b fixed top-0 left-0 right-0 z-50 bg-white">
        <Link href="/" className="flex items-center justify-center">
          <Zap className="h-8 w-8 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">
            2quick paper
          </span>
        </Link>

        {/* Hamburger Button (Mobile) */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex ml-auto gap-4 sm:gap-6 items-center">
          <Link
            href="/home#features"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            Features
          </Link>
          <Link
            href="/home#pricing"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/home#faq"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            FAQ
          </Link>
          <Button variant="outline" size="sm" asChild>
            <Link href="/home/sign-in">Sign In</Link>
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
            <Link href="/home/sign-up">Get Started</Link>
          </Button>
        </nav>
      </header>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-16 px-4 py-4 bg-white shadow-md fixed top-16 left-0 right-0 z-40">
          <nav className="flex flex-col gap-4">
            <Link
              href="/home#features"
              className="text-sm font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/home#pricing"
              className="text-sm font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/home#faq"
              className="text-sm font-medium hover:text-green-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Button variant="outline" size="sm" asChild>
              <Link
                href="/home/sign-in"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            </Button>
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700"
              asChild
            >
              <Link
                href="/home/sign-up"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      )}

      <main className="pt-16">{children}</main>
    </div>
  );
}
