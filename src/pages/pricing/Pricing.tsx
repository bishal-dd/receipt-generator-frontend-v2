import { PublicNavigation } from "@/components/publicNavigation";
import PricingSection from "@/features/pricingSection/PricingSection";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <PublicNavigation />
      <PricingSection />
    </div>
  );
}
