'use client';
import { PublicNavigation } from '@/components/publicNavigation';
import { Footer } from '@/components/footer';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicNavigation />
      <main className="pt-16 flex-1 border">{children}</main>
      <Footer />
    </div>
  );
}
