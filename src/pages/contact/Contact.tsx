import { PublicNavigation } from "@/components/publicNavigation";
import { ContactSection } from "@/features/contactSection";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <PublicNavigation />
      <ContactSection />
    </div>
  );
}
