import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function Page() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Return & Refund Policy
        </h1>
        <Card className="bg-neutral-900 shadow-lg border-neutral-800">
          <CardContent className="p-6 space-y-6">
            <section className="space-y-4">
              <p className="text-sm text-neutral-400">
                Last updated: 07/01/2025
              </p>

              <p className="text-neutral-300">
                Thank you for shopping at BillsToTrack. The following terms are
                applicable for any products that you have purchased from us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Eligibility for Refunds
              </h2>
              <p className="text-neutral-300">
                We offer refunds under the following circumstances:
              </p>
              <div className="pl-6">
                <ul className="list-disc space-y-2 text-neutral-300">
                  <li>
                    If the service is not delivered as promised due to an error
                    on our end.
                  </li>
                  <li>
                    If a technical issue caused by our platform prevents you
                    from accessing the features you paid for, and the issue
                    cannot be resolved within a reasonable timeframe.
                  </li>
                  <li>
                    If you cancel your subscription within the refund period
                    outlined below.
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Refund Period
              </h2>
              <p className="text-neutral-300">
                Refund requests must be made within 30 days of the payment date.
                Requests made after this period will not be eligible for a
                refund.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Non-Refundable Cases
              </h2>
              <p className="text-neutral-300">
                Refunds will not be granted under the following conditions:
              </p>
              <div className="pl-6">
                <ul className="list-disc space-y-2 text-neutral-300">
                  <li>
                    If you change your mind after purchasing a subscription or
                    service.
                  </li>
                  <li>
                    If you fail to use the service during the subscription
                    period.
                  </li>
                  <li>
                    If the issue is caused by third-party software or tools not
                    affiliated with our platform.
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Refund Process
              </h2>
              <p className="text-neutral-300">
                To request a refund, please follow these steps:
              </p>
              <div className="pl-6">
                <ul className="list-disc space-y-2 text-neutral-300">
                  <li>Contact our support team at contact@lightwebx.com</li>
                  <li>
                    Provide your payment receipt, order ID, and a detailed
                    explanation of the issue
                  </li>
                  <li>
                    Our team will review your request and respond within 3-5
                    business days
                  </li>
                  <li>
                    If your request is approved, the refund will be processed to
                    your original payment method within 7-10 business days
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
              <p className="text-neutral-300">
                If you have any questions about this Refund Policy or require
                assistance, please reach out to us:
              </p>
              <p className="text-neutral-300">Email: contact@lightwebx.com</p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
