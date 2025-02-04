import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Grid from '@/components/ui/grid';
import {
  Smartphone,
  HandCoins,
  FolderKanban,
  Timer,
  ShieldOff,
  Lock,
} from 'lucide-react';

const features = [
  {
    title: 'Cost-Effective',
    description:
      'Eliminate the need for printers, ink, and paper, reducing operational expenses.',
    icon: HandCoins,
  },
  {
    title: 'Effortless Organization',
    description:
      'Digitally store and access receipts anytime, eliminating the risk of lost paperwork.',
    icon: FolderKanban,
  },
  {
    title: 'Time-Saving',
    description:
      'Automate receipt management and reduce manual paperwork, allowing you to focus on business growth.',
    icon: Timer,
  },
  {
    title: 'Error Reduction',
    description:
      'Minimize human errors with automated receipt generation and tracking.',
    icon: ShieldOff,
  },
  {
    title: 'Enhanced Security',
    description:
      'Ensure your receipts are securely stored and protected from unauthorized access.',
    icon: Lock,
  },
  {
    title: 'Mobile Accessibility',
    description:
      'Manage and send receipts on the go, anytime, from any device.',
    icon: Smartphone,
  },
];

export default function FeatureSection() {
  return (
    <Grid color="white" size={50}>
      <div className=" mx-auto px-4 py-16 min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <h1 className="text-4xl font-bold text-center mb-12 text-neutral-300">
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
    </Grid>
  );
}
