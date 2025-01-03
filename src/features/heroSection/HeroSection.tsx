import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, SquarePlay } from "lucide-react";
export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-black bg-gradient-to-b from-background to-accent">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
          Improve Your Service with 2QuickPaper
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Enhance your service by instantly delivering payment receipts directly
          to your customers' WhatsApp or email. This efficient solution
          simplifies your workflow, saves time, and provides a seamless
          experience for both you and your customers.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" asChild>
            <Link href="/home/pricing">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#">
              <SquarePlay className="ml-2 h-4 w-4" />
              Watch Demo
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
