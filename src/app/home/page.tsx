'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  CheckCircle,
  Mail,
  MessageCircle,
  Zap,
  Shield,
  BarChart3,
  Leaf,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { HeroVideoDialogDemo } from '@/features/heroSection/HeroVideo';

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      {/* <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center">
          <Zap className="h-8 w-8 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">
            2quick paper
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 mt-4">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            FAQ
          </Link>
          <Button variant="outline" size="sm" asChild>
            <Link href={'/home/sign-in'}>Sign In</Link>
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            <Link href={'/home/sign-up'}>Get Started</Link>
          </Button>
        </nav>
      </header> */}

      <main className="flex-1 border">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 to-blue-50  ">
          <div className="container mx-auto px-4 md:px-6  ">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
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
                    Transform your business with instant digital receipts
                    delivered via email and WhatsApp. Save money, save trees,
                    and delight your customers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <Link href="/home/sign-up">Start Free Trial</Link>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
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
              <div className="flex items-center justify-center">
                <div className="relative">
                  <HeroVideoDialogDemo />
                  <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg border">
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-medium">Email Sent</span>
                    </div>
                  </div>
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

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary">Features</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything you need for digital receipts
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Powerful features designed to streamline your receipt process
                  and enhance customer experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Mail className="h-10 w-10 text-blue-600" />
                  <CardTitle>Email Delivery</CardTitle>
                  <CardDescription>
                    Send professional receipts directly to customer email
                    addresses with customizable templates.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <MessageCircle className="h-10 w-10 text-green-600" />
                  <CardTitle>WhatsApp Integration</CardTitle>
                  <CardDescription>
                    Reach customers instantly on WhatsApp with receipt
                    notifications and easy access.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-yellow-600" />
                  <CardTitle>Lightning Fast</CardTitle>
                  <CardDescription>
                    Generate and send receipts in under 2 seconds. No more
                    waiting or printing delays.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-purple-600" />
                  <CardTitle>Secure & Compliant</CardTitle>
                  <CardDescription>
                    Protect your data with automatic backups
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-red-600" />
                  <CardTitle>Analytics Dashboard</CardTitle>
                  <CardDescription>
                    Track receipt delivery rates and business insights.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Leaf className="h-10 w-10 text-green-600" />
                  <CardTitle>Eco-Friendly</CardTitle>
                  <CardDescription>
                    Reduce paper waste and carbon footprint while saving on
                    printing costs.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width="600"
                height="400"
                alt="Benefits Illustration"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Why businesses love 2quick paper
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
                      <strong>Save 80% on printing costs</strong> - No more
                      paper, ink, or <br />
                      printer maintenance
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>
                      <strong>Instant delivery</strong> - Customers receive
                      receipts immediately
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
                      <strong>Environmental impact</strong> - Save trees and
                      reduce waste
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

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary">Pricing</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simple, transparent pricing
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that fits your business size. All plans
                  include email and WhatsApp delivery.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-3 md:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>
                    Best for freelancers and small businesses with limited
                    transactions.{' '}
                  </CardDescription>
                  <div className="text-4xl font-bold">
                    $2.99
                    <span className="text-lg font-normal text-gray-500">
                      /month
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Up to 300 receipts per month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>WhatsApp & email receipts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Unlimited sales list</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Basic email support</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline" asChild>
                    <Link
                      href="https://2quickpaper.lemonsqueezy.com/buy/3a59d41f-b7c4-4079-80f9-d437bf4fe853"
                      target="_blank"
                    >
                      Start Free Trial
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-green-200 relative">
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-600">
                  Most Popular
                </Badge>
                <CardHeader>
                  <CardTitle>Growth</CardTitle>
                  <CardDescription>
                    Great for businesses that need a balance between
                    affordability and volume.
                  </CardDescription>
                  <div className="text-4xl font-bold">
                    $4.99
                    <span className="text-lg font-normal text-gray-500">
                      /month
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Up to 2,500 receipts/month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>WhatsApp & email receipts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Unlimited sales list</span>
                    </li>

                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Priority email support</span>
                    </li>
                  </ul>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    asChild
                  >
                    <Link
                      href="https://2quickpaper.lemonsqueezy.com/buy/9bd0b65a-b293-434c-95fd-0ab31eb8f126"
                      target="_blank"
                    >
                      Start Free Trial
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>
                    For businesses that need higher limits and advanced
                    features.
                  </CardDescription>
                  <div className="text-4xl font-bold">
                    $10.99
                    <span className="text-lg font-normal text-gray-500">
                      /month
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Unlimited receipts per month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Unlimited sales list</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>WhatsApp & email receipts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>First to get access to new features</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline" asChild>
                    <Link
                      href="https://2quickpaper.lemonsqueezy.com/buy/9f1f3e6a-4649-4478-9cdd-9d4680e707c9"
                      target="_blank"
                    >
                      Start Free Trial
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary">Testimonials</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Loved by businesses worldwide
                </h2>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-3 md:gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "2quick paper has revolutionized our checkout process.
                    Customers love getting instant receipts on WhatsApp!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-gray-500">Cafe Owner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "We've saved over $2000 annually on printing costs. The
                    environmental impact is a bonus our customers appreciate."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="font-semibold">Mike Chen</p>
                      <p className="text-sm text-gray-500">Restaurant Chain</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "The integration was seamless and the support team is
                    fantastic. Our return process is now so much smoother."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="font-semibold">Emma Davis</p>
                      <p className="text-sm text-gray-500">Retail Store</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary">FAQ</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Frequently asked questions
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to know about 2quick paper.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    How does 2quick paper work?
                  </AccordionTrigger>
                  <AccordionContent>
                    When a transaction is completed, with just a few clicks, we
                    automatically generate a digital receipt and send it to your
                    customer via email and/or WhatsApp instantly.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is there a setup fee?</AccordionTrigger>
                  <AccordionContent>
                    No, there are no setup fees. You can start with our 14-day
                    free trial and begin sending digital receipts immediately.
                    We also provide free onboarding support to help you get
                    started.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Can I customize the receipt templates?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! All plans include customizable templates. You can add
                    your logo, company name, and any other information you need
                    and your seal and signature if needed.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    What happens if a customer doesn&apos;t have WhatsApp?
                  </AccordionTrigger>
                  <AccordionContent>
                    If WhatsApp delivery fails, the receipt is automatically
                    sent via email as a backup. You can also configure your
                    preferred delivery method priority in your dashboard
                    settings.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Ready to go paperless?
                </h2>
                <p className="max-w-[600px] text-green-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of businesses saving money and delighting
                  customers with instant digital receipts.
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
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 2quick paper. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Contact
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Help Center
          </Link>
        </nav>
      </footer>
    </div>
  );
}
