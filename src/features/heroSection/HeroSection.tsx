import { HeroVideoDialogDemo } from './HeroVideo';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Mail, MessageCircle } from 'lucide-react';
export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                🌱 Go Paperless Today
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Send Digital Receipts in{' '}
                <span className="text-green-600">Seconds</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Transform your business with instant digital receipts delivered
                via email and WhatsApp. Save money, save trees, and delight your
                customers.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/home/sign-up">Start Free Trial</Link>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 flex-wrap">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Video Content */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl">
              <HeroVideoDialogDemo />
              {/* Email Sent Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg border">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">Email Sent</span>
                </div>
              </div>
              {/* WhatsApp Delivered Badge */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg border">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">
                    WhatsApp Delivered
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
