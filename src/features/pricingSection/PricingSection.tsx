import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { pricingTiers } from "./data";

export default function PricingSection() {
  return (
    <main className="container relative mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingTiers.map((tier, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <h2 className="text-2xl font-semibold mb-2">{tier.name}</h2>
            <div className="text-3xl font-bold mb-1">{tier.price}</div>
            <div className="text-sm text-gray-400 mb-4">{tier.period}</div>
            <p className="text-gray-300 mb-6">{tier.description}</p>
            <ul className="space-y-2 mb-6 flex-grow">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full" variant={"default"}>
              {index === 2 ? "Contact Sales" : "Choose Plan"}
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
}
