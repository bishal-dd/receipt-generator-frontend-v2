import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const CtaSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Ready to go paperless?
            </h2>
            <p className="max-w-[600px] text-green-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of businesses saving money and delighting customers
              with instant digital receipts.
            </p>
          </div>
          <div className="space-x-4">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-green-600 hover:bg-white hover:text-green-600"
            >
              <Link href="/home/contact">Contact Sales</Link>
            </Button>
          </div>
          {/* <div className="flex items-center gap-6 text-green-100 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>10,000+ businesses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>50+ countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>24/7 support</span>
                </div>
              </div> */}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
