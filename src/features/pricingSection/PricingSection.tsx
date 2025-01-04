import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Pro",
    price: "$79",
    description: "Ideal for growing businesses",
    features: [
      "Up to 20 team members",
      "50GB storage",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
    ],
  },
];

export default function PricingSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
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
        <Card className={`flex flex-col  border-primary w-[25%] `}>
          <CardHeader>
            <CardTitle className="text-2xl">Early Access</CardTitle>
            <CardDescription>
              The first 100 people who sign up will get to use this site at
              $4.99 forever. Even when new features are added and the prices
              change. The first 100 users will get it at $4.99.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-4xl font-bold mb-6">
              $4.99
              <span className="text-xl font-normal">/month</span>
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Send unlimted receipts on WhatsApp</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Send unlimted receipts on Email</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Keep track of your receipts</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Have unlimited users</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>
                  Have access to future features like invoices and quotations
                </span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={"outline"}>
              {"Get Started"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
