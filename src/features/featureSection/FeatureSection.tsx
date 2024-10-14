import { Button } from "@/components/ui/button";
import { features } from "./data";

export default function FeatureSection() {
  return (
    <main className="container relative mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to streamline your paperwork?
        </h2>
        <Button size="lg" className="text-lg">
          Get Started Now
        </Button>
      </div>
    </main>
  );
}
