import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "support@yoursaas.com",
    href: "mailto:support@yoursaas.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "123 SaaS Street, Tech City, TC 12345",
    href: "https://maps.google.com/?q=123+SaaS+Street,+Tech+City,+TC+12345",
  },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/yoursaas" },
  { icon: Twitter, href: "https://twitter.com/yoursaas" },
  { icon: Facebook, href: "https://www.facebook.com/yoursaas" },
];

export default function ContactSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Contact Information</CardTitle>
            <CardDescription>
              Reach out to us through any of the following methods:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-4 p-3 rounded-full bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.content}
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Connect With Us</CardTitle>
            <CardDescription>
              Follow us on social media for the latest updates and news.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link, index) => (
                <Button key={index} variant="outline" size="icon" asChild>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon className="h-5 w-5" />
                    <span className="sr-only">{link.icon.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Need More Information?
          </h2>
          <p className="text-muted-foreground mb-6">
            If you have any questions or need additional information, our
            support team is always here to help.
          </p>
          <Button asChild>
            <Link href="mailto:support@yoursaas.com">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
