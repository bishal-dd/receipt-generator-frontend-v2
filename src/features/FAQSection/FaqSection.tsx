import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import React from 'react';

const FaqSection = () => {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="secondary">FAQ</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently asked questions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to know about Bills To Track.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does Bills To Track work?</AccordionTrigger>
              <AccordionContent>
                When a transaction is completed, with just a few clicks, we
                automatically generate a digital receipt and send it to your
                customer via email and/or WhatsApp instantly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is there a setup fee?</AccordionTrigger>
              <AccordionContent>
                No, there are no setup fees. You can start with our 14-day free
                trial and begin sending digital receipts immediately. We also
                provide free onboarding support to help you get started.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can I customize the receipt templates?
              </AccordionTrigger>
              <AccordionContent>
                Yes! All plans include customizable templates. You can add your
                logo, company name, and any other information you need and your
                seal and signature if needed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What happens if a customer doesn&apos;t have WhatsApp?
              </AccordionTrigger>
              <AccordionContent>
                If WhatsApp delivery fails, the receipt is automatically sent
                via email as a backup. You can also configure your preferred
                delivery method priority in your dashboard settings.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
