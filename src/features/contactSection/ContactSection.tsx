import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Music2,
} from 'lucide-react';
import Link from 'next/link';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@lightwebx.com',
    href: 'mailto:contact@lightwebx.com',
  },
  {
    icon: Phone,
    title: 'WhatsApp',
    content: 'Message',
    href: 'https://api.whatsapp.com/send?phone=17959259',
  },
  {
    icon: MapPin,
    title: 'Address',
    content: 'Thimphu, Bhutan',
    href: 'https://maps.app.goo.gl/NfsQRVcuRcMqQtV26',
  },
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/lightwebx' },
  { icon: Instagram, href: 'https://www.instagram.com/lightwebx' },
  { icon: Music2, href: 'https://www.tiktok.com/@lightwebx' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/light-webx' },
];

export default function ContactSection() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-neutral-300">
        Get in Touch
      </h1>
      <div className="max-w-3xl mx-auto ">
        <Card className=" bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
          <CardHeader>
            <CardTitle className="text-2xl text-neutral-300">
              Contact Information
            </CardTitle>
            <CardDescription className="text-neutral-300">
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
                  <div className="mb-4 p-3 rounded-full bg-white/10">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1 text-neutral-300">
                    {item.title}
                  </h3>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-white transition-colors text-neutral-300"
                  >
                    {item.content}
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8  bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
          <CardHeader>
            <CardTitle className="text-2xl text-neutral-300">
              Connect With Us
            </CardTitle>
            <CardDescription className="text-neutral-300">
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
                    <link.icon className="h-5 w-5 " />
                    <span className="sr-only">{link.icon.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
