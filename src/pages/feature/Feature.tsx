import { PublicNavigation } from "@/components/publicNavigation";
import FeatureSection from "@/features/featureSection/FeatureSection";

export default function Feature() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <PublicNavigation />
      <FeatureSection />
    </div>
  );
}
