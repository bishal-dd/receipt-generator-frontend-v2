"use client";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function ContactSection() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <main className="container relative mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                rows={4}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-blue-400 mr-2" />
              <span>support@digitalpapework.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-blue-400 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-blue-400 mr-2" />
              <span>123 Paperwork Lane, Digital City, DC 12345</span>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
    </main>
  );
}
