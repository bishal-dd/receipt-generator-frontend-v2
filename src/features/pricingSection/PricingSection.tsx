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

const features = [
  'Send unlimted receipts on WhatsApp',
  'Send unlimted receipts on Email',
  'Keep track of your receipts',
  'Have unlimited users',
  'Have access to future features like invoices and quotations',
];

export default function PricingSection() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-neutral-300">
        Choose the Right Plan
      </h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-200 gap-8">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`flex flex-col ${index === 1 ? "border-primary" : ""}`}
          >
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-xl font-normal">/month</span>
              </p>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={index === 1 ? "default" : "outline"}
              >
                {index === 2 ? "Contact Sales" : "Get Started"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div> */}

      <div className=" flex justify-center">
        <Card
          className={`flex flex-col  border-white lg:w-1/2 bg-black/[0.96] antialiased bg-grid-white/[0.02] `}
        >
          <CardHeader>
            <CardTitle className="text-2xl  text-neutral-300">
              Early Access
            </CardTitle>
            <CardDescription className=" text-base text-neutral-300">
              The first 100 people who sign up will get to use this site at
              $4.99 forever. Even when new features are added and the prices
              change. The first 100 users will get it at $4.99.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-4xl font-bold mb-6 text-neutral-300">
              $4.99
              <span className="text-xl font-normal">/month</span>
            </p>
            <ul className="space-y-2">
              {features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="flex items-center  text-neutral-300"
                >
                  <Check className="h-5 w-5 text-white mr-2 " />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={'outline'}>
              {'Get Started'}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
