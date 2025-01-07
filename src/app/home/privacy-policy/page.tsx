import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function Page() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Privacy Policy for 2QuickPaper
        </h1>
        <Card className="bg-neutral-900 shadow-lg border-neutral-800">
          <CardContent className="p-6 space-y-6">
            <section className="space-y-4">
              <p className="text-sm text-neutral-400">
                Last updated: 07/01/2025
              </p>

              <p className="text-neutral-300">
                At 2QuickPaper, one of our main priorities is the privacy of our
                visitors. This Privacy Policy document contains types of
                information that is collected and recorded by 2QuickPaper and
                how we use it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Contact Information
              </h2>
              <p className="text-neutral-300">
                If you have additional questions or require more information
                about our Privacy Policy, do not hesitate to contact us at
                contact@lightwebx.com.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Scope</h2>
              <p className="text-neutral-300">
                This Privacy Policy applies only to our online activities and is
                valid for visitors to our website with regards to the
                information that they shared and/or collected on
                https://www.2quickpaper.com. This policy is not applicable to
                any information collected offline or via channels other than
                this website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Information We Collect
              </h2>
              <p className="text-neutral-300">
                The personal information that you are asked to provide, and the
                reasons why you are asked to provide it, will be made clear to
                you at the point we ask you to provide your personal
                information.
              </p>
              <div className="pl-6">
                <ul className="list-disc space-y-2 text-neutral-300">
                  <li>
                    Contact information (name, email address, phone number)
                  </li>
                  <li>Company information (company name, address)</li>
                  <li>Message contents and attachments when you contact us</li>
                  <li>Account registration details</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                How We Use Your Information
              </h2>
              <div className="pl-6">
                <ul className="list-disc space-y-2 text-neutral-300">
                  <li>Provide, operate, and maintain our website</li>
                  <li>Improve, personalize, and expand our website</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>
                    Develop new products, services, features, and functionality
                  </li>
                  <li>Communicate with you for customer service and updates</li>
                  <li>Send you emails</li>
                  <li>Find and prevent fraud</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Log Files</h2>
              <p className="text-neutral-300">
                2QuickPaper follows a standard procedure of using log files.
                These files log visitors when they visit websites. The
                information collected includes IP addresses, browser type, ISP,
                timestamps, referring/exit pages, and click counts.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Your Rights</h2>
              <div className="pl-6">
                <ul className="list-disc space-y-2 text-neutral-300">
                  <li>The right to access your personal data</li>
                  <li>The right to rectification of inaccurate data</li>
                  <li>The right to erasure of your data</li>
                  <li>The right to restrict processing</li>
                  <li>The right to object to processing</li>
                  <li>The right to data portability</li>
                </ul>
              </div>
              <p className="text-neutral-300">
                If you make a request, we have one month to respond to you.
                Please contact us to exercise any of these rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Children's Information
              </h2>
              <p className="text-neutral-300">
                2QuickPaper does not knowingly collect any Personal Identifiable
                Information from children under the age of 13. If you think that
                your child provided this kind of information on our website,
                please contact us immediately.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
