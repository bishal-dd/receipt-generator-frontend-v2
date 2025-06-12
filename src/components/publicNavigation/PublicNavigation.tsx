'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import clsx from 'clsx';
import { useAuth } from '@clerk/nextjs';
import SignedInLinks from './segments/ActionLinks/SignedInLinks';

export default function PublicNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();
  return (
    <>
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b fixed top-0 left-0 right-0 z-50 bg-white">
        <Link href="/" className="flex items-center justify-center">
          <Zap className="h-8 w-8 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">
            Bills To Track
          </span>
        </Link>

        {/* Hamburger Button (Mobile) */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
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
          <Link
            href="/home/validate"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            Validate
          </Link>
          {isSignedIn ? (
            <SignedInLinks />
          ) : (
            <>
              {' '}
              <Button variant="outline" size="sm" asChild>
                <Link href="/home/sign-in">Sign In</Link>
              </Button>
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700"
                asChild
              >
                <Link href="/home/sign-up">Get Started</Link>
              </Button>
            </>
          )}
        </nav>
      </header>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={clsx(
          'lg:hidden fixed top-16 left-0 right-0 z-40 px-4 py-4 bg-white transition-transform duration-300 ease-in-out shadow-md',
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <nav className="flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
          <Link
            href="/home#features"
            className="text-sm font-medium hover:text-green-600 transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/home#pricing"
            className="text-sm font-medium hover:text-green-600 transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/home/validate"
            className="text-sm font-medium hover:text-green-600 transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Validate
          </Link>
          <Link
            href="/home#faq"
            className="text-sm font-medium hover:text-green-600 transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </Link>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="w-full text-sm py-2"
          >
            <Link
              href="/home/sign-in"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Link>
          </Button>
          <Button
            size="sm"
            className="w-full text-sm bg-green-600 hover:bg-green-700 py-2"
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

      {/* Overlay (Optional for UX) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
