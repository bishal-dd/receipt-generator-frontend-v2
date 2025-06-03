'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ActionLinks, navItems } from './segments';
import Grid from '../ui/grid';

export default function PublicNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Grid color="white" size={50}>
      <div className="flex justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] p-4 relative">
        <nav className="bg-white/90 backdrop-blur-3xl sticky top-0 z-40 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 border-b border-b-slate-200 dark:border-b-slate-700 rounded-full px-4">
          <div className="container mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link
                href="/"
                className="flex-shrink-0 text-2xl font-bold text-primary"
              >
                BillsToTrack
              </Link>

              <div className="hidden md:flex items-center space-x-4">
                {navItems.map((link) => (
                  <Link
                    key={link.link}
                    href={link.link}
                    className={`px-3 py-2 text-lg font-bold rounded-md  ${
                      pathname === link.link
                        ? 'text-black outline outline-1 outline-black'
                        : 'text-black font-bold hover:text-primary hover:bg-accent'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <ActionLinks />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
        </nav>

        {/* Mobile Menu (Moves Outside of Nav) */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-20 rounded-lg p-4 md:hidden">
            {navItems.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                className={`block px-3 py-2 text-base font-medium rounded-md mb-2 ${
                  pathname === link.link
                    ? 'text-white bg-primary w-40'
                    : 'text-muted-foreground hover:text-primary hover:bg-accent '
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <ActionLinks />
          </div>
        )}
      </div>
    </Grid>
  );
}
