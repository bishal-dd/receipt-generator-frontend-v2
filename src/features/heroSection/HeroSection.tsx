import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Spotlight } from '@/components/ui/Spotlight';
import DemoVideo from './DemoVideo';
export default function HeroSection() {
  return (
    <>
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Improve Your Service with 2QuickPaper
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Enhance your service by instantly delivering payment receipts
            directly to your customers&apos; WhatsApp or email. This efficient
            solution simplifies your workflow, saves time, and provides a
            seamless experience for both you and your customers.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <Link href="/home/pricing">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <DemoVideo />
          </div>
        </div>
      </div>
    </>
  );
}
