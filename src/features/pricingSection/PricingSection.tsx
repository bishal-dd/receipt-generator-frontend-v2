import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { pricingTiers } from './data';

export default function PricingSection() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-neutral-300">
        Choose the Right Plan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8 ">
        {pricingTiers.map((plan, index) => (
          <Card
            key={index}
            className={`flex flex-col  bg-black/[0.96] antialiased bg-grid-white/[0.02] transition-all duration-300 hover:shadow-lg hover:shadow-white`}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-neutral-300">
                {plan.name}
              </CardTitle>
              <CardDescription className="text-neutral-300">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow text-neutral-300">
              <p className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-xl font-normal text-neutral-300">
                  /month
                </span>
              </p>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 text-white" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={'outline'} asChild>
                <Link href={'#'}>Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
