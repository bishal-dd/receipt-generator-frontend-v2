import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Mail,
  MessageCircle,
  Shield,
  Zap,
  Leaf,
  BarChart3,
} from 'lucide-react';

// const features = [
//   {
//     title: 'Cost-Effective',
//     description:
//       'Eliminate the need for printers, ink, and paper, reducing operational expenses.',
//     icon: HandCoins,
//   },
//   {
//     title: 'Effortless Organization',
//     description:
//       'Digitally store and access receipts anytime, eliminating the risk of lost paperwork.',
//     icon: FolderKanban,
//   },
//   {
//     title: 'Time-Saving',
//     description:
//       'Automate receipt management and reduce manual paperwork, allowing you to focus on business growth.',
//     icon: Timer,
//   },
//   {
//     title: 'Error Reduction',
//     description:
//       'Minimize human errors with automated receipt generation and tracking.',
//     icon: ShieldOff,
//   },
//   {
//     title: 'Enhanced Security',
//     description:
//       'Ensure your receipts are securely stored and protected from unauthorized access.',
//     icon: Lock,
//   },
//   {
//     title: 'Mobile Accessibility',
//     description:
//       'Manage and send receipts on the go, anytime, from any device.',
//     icon: Smartphone,
//   },
// ];

export default function FeatureSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="secondary">Features</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Everything you need for digital receipts
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Powerful features designed to streamline your receipt process and
              enhance customer experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card>
            <CardHeader>
              <Mail className="h-10 w-10 text-blue-600" />
              <CardTitle>Email Delivery</CardTitle>
              <CardDescription>
                Send professional receipts directly to customer email addresses
                with customizable templates.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <MessageCircle className="h-10 w-10 text-green-600" />
              <CardTitle>WhatsApp Integration</CardTitle>
              <CardDescription>
                Reach customers instantly on WhatsApp with receipt notifications
                and easy access.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 text-yellow-600" />
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>
                Generate and send receipts in under 2 seconds. No more waiting
                or printing delays.
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
                Reduce paper waste and carbon footprint while saving on printing
                costs.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
