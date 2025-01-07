import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function Page() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Terms and Conditions for 2QuickPaper
        </h1>
        <Card className="bg-neutral-900 shadow-lg border-neutral-800">
          <CardContent className="p-6 space-y-6">
            <section className="space-y-4">
              <p className="text-sm text-neutral-400">
                Last updated: 07/01/2025
              </p>

              <p className="text-neutral-300">
                Please read these terms and conditions carefully before using
                Our Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Acknowledgment
              </h2>
              <p className="text-neutral-300">
                These are the Terms and Conditions governing the use of this
                Service and the agreement that operates between you and the
                Company. These Terms and Conditions set out the rights and
                obligations of all users regarding the use of the Service.
              </p>
              <p className="text-neutral-300">
                Your access to and use of the Service is conditioned on your
                acceptance of and compliance with these Terms and Conditions.
                These Terms and Conditions apply to all visitors, users, and
                others who access or use the Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                User Accounts
              </h2>
              <div className="space-y-3 text-neutral-300">
                <p>
                  When you create an account with us, you must provide us with
                  information that is accurate, complete, and current at all
                  times. Failure to do so constitutes a breach of the Terms,
                  which may result in the immediate termination of your account.
                </p>
                <p>
                  You are responsible for safeguarding the password that you use
                  to access the Service and for any activities or actions under
                  your password, whether your password is with Our Service or a
                  Third-Party Social Media Service.
                </p>
                <p>
                  You agree not to disclose your password to any third party.
                  You must notify us immediately upon becoming aware of any
                  breach of security or unauthorized use of your account.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Copyright Policy
              </h2>
              <div className="space-y-3 text-neutral-300">
                <p>
                  All content, features, and functionality of our services,
                  including but not limited to text, graphics, logos, and
                  software, are the exclusive property of 2Quickpaper and are
                  protected by international copyright, trademark, and other
                  intellectual property laws.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                DMCA Notice Procedure
              </h2>
              <p className="text-neutral-300">
                You may submit a notification pursuant to the Digital Millennium
                Copyright Act (DMCA) by providing our Copyright Agent with the
                following information:
              </p>
              <div className="pl-6">
                <ul className="list-disc space-y-2 text-neutral-300">
                  <li>
                    An electronic or physical signature of the authorized person
                  </li>
                  <li>
                    Description of the copyrighted work claimed to be infringed
                  </li>
                  <li>
                    Identification of the infringing material and location on
                    our service
                  </li>
                  <li>Your contact information</li>
                  <li>
                    A statement of good faith belief regarding unauthorized use
                  </li>
                  <li>A statement of accuracy under penalty of perjury</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Limitation of Liability
              </h2>
              <p className="text-neutral-300">
                Notwithstanding any damages that you might incur, the entire
                liability of the Company and any of its suppliers under any
                provision of these Terms and Your exclusive remedy for all of
                the foregoing shall be limited to the amount actually paid by
                you through the Service or 100 USD if you haven't purchased
                anything through the Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Governing Law
              </h2>
              <p className="text-neutral-300">
                The laws of Bhutan, excluding its conflicts of law rules, shall
                govern these Terms and your use of the Service. Your use of the
                Application may also be subject to other local, state, national,
                or international laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
              <p className="text-neutral-300">
                If you have any questions about these Terms and Conditions, you
                can contact us:
              </p>
              <div className="pl-6">
                <ul className="list-disc space-y-2 text-neutral-300">
                  <li>Website: https://www.2quickpaper.com</li>
                  <li>Email: contact@lightwebx.com</li>
                </ul>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
