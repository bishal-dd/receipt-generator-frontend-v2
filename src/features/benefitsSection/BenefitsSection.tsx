import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function BenefitsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            src="/images/sales.webp"
            width="800"
            height="800"
            alt="Benefits Illustration"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Why businesses love Bills To Track
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                Join businesses already saving time and money with digital
                receipts.
              </p>
            </div>
            <ul className="grid gap-4">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>
                  <strong>Save 80% on printing costs</strong> - No more paper,
                  ink, or <br />
                  printer maintenance
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>
                  <strong>Instant delivery</strong> - Customers receive receipts
                  immediately
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>
                  <strong>Better customer experience</strong> - No lost
                  receipts, easy returns
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>
                  <strong>Environmental impact</strong> - Save trees and reduce
                  waste
                </span>
              </li>
              {/* <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>
                      <strong>Easy integration</strong> - Works with any POS
                      system or e-commerce platform
                    </span>
                  </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
