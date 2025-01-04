import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Smartphone,
  HandCoins,
  FolderKanban,
  Timer,
  ShieldOff,
  Lock,
} from "lucide-react";

const features = [
  {
    title: "Saves Money",
    description: "You don't have to buy printers or paper",
    icon: HandCoins,
  },
  {
    title: "Easy management",
    description: "You don't have to be afraid of loosing the paper",
    icon: FolderKanban,
  },
  {
    title: "Saves Time",
    description: "You don't have to waste time managing your paperwork",
    icon: Timer,
  },
  {
    title: "Less Errors",
    description: "You don't have to worry about errors.",
    icon: ShieldOff,
  },
  {
    title: "Secure",
    description: "You don't have to worry about security.",
    icon: Lock,
  },
  {
    title: "Mobile Accessibility",
    description: "Access your work from anywhere.",
    icon: Smartphone,
  },
];

export default function FeatureSection() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen  ">
      <h1 className="text-4xl font-bold text-center mb-12">
        Powerful Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="transition-all duration-300 hover:shadow-lg hover:shadow-white bg-black/[0.96] antialiased bg-grid-white/[0.02]"
          >
            <CardHeader>
              <feature.icon className="h-10 w-10 text-white mb-4" />
              <CardTitle className=" text-base text-neutral-300">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className=" text-base text-neutral-300">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
