import { PublicNavigation } from "@/components/publicNavigation";
import { HeroSection } from "@/features/heroSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <PublicNavigation />
      <HeroSection />
    </div>
  );
}
