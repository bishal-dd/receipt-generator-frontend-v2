'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import useCurrency from '@/hooks/useCurrency';

export default function PricingSection() {
  const { symbol, rate, code } = useCurrency();

  const starterPrice = (2.99 * rate).toFixed(0);
  const growthPrice = (4.99 * rate).toFixed(0);
  const enterprisePrice = (10.99 * rate).toFixed(0);

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="secondary">Pricing</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that fits your business size. All plans include
              email and WhatsApp delivery.
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
                {symbol}
                {starterPrice}
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
              {code === 'BTN' ? (
                <Button className="w-full" variant="outline" asChild>
                  <Link
                    href="https://api.whatsapp.com/send?phone=97517959259&text=Hi+Light+WebX%2C+I'm+interested+in+the+Starter+Plan.+Please+help+me+get+started."
                    target="_blank"
                  >
                    Start Free Trial
                  </Link>
                </Button>
              ) : (
                <Button className="w-full" variant="outline" asChild>
                  <Link
                    href="https://2quickpaper.lemonsqueezy.com/buy/3a59d41f-b7c4-4079-80f9-d437bf4fe853"
                    target="_blank"
                  >
                    Start Free Trial
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>

          <Card className="border-green-200 relative">
            <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-600">
              Most Popular
            </Badge>
            <CardHeader>
              <CardTitle>Growth</CardTitle>
              <CardDescription>
                Great for businesses that need a balance between affordability
                and volume.
              </CardDescription>
              <div className="text-4xl font-bold">
                {symbol}
                {growthPrice}
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
              {code === 'BTN' ? (
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  variant="outline"
                  asChild
                >
                  <Link
                    href="https://api.whatsapp.com/send?phone=97517959259&text=Hi+Light+WebX%2C+I'm+interested+in+the+Growth+Plan.+Please+help+me+get+started."
                    target="_blank"
                  >
                    Start Free Trial
                  </Link>
                </Button>
              ) : (
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  variant="outline"
                  asChild
                >
                  <Link
                    href="https://2quickpaper.lemonsqueezy.com/buy/9bd0b65a-b293-434c-95fd-0ab31eb8f126"
                    target="_blank"
                  >
                    Start Free Trial
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>
                For businesses that need higher limits and advanced features.
              </CardDescription>
              <div className="text-4xl font-bold">
                {symbol}
                {enterprisePrice}
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
              {code === 'BTN' ? (
                <Button className="w-full" variant="outline" asChild>
                  <Link
                    href="https://api.whatsapp.com/send?phone=97517959259&text=Hi+Light+WebX%2C+I'm+interested+in+the+enterprise+Plan.+Please+help+me+get+started."
                    target="_blank"
                  >
                    Start Free Trial
                  </Link>
                </Button>
              ) : (
                <Button className="w-full" variant="outline" asChild>
                  <Link
                    href="https://2quickpaper.lemonsqueezy.com/buy/9f1f3e6a-4649-4478-9cdd-9d4680e707c9"
                    target="_blank"
                  >
                    Start Free Trial
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
