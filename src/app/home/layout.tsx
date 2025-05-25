import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';
import Link from 'next/link';
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="px-4 lg:px-6 h-16 flex items-center border-b fixed top-0 left-0 right-0 z-50 ">
        <Link href="/" className="flex items-center justify-center">
          <Zap className="h-8 w-8 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">
            2quick paper
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 mt-4">
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
            <Link href={'/home/sign-in'}>Sign In</Link>
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            <Link href={'/home/sign-up'}>Get Started</Link>
          </Button>
        </nav>
      </header>
      {children}
    </div>
  );
}
