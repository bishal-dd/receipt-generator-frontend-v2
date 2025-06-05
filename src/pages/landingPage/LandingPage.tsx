import BenefitsSection from '@/features/benefitsSection/BenefitsSection';
import CtaSection from '@/features/CTASection/CtaSection';
import FaqSection from '@/features/FAQSection/FaqSection';
import FeatureSection from '@/features/featureSection/FeatureSection';
import { HeroSection } from '@/features/heroSection';
import PricingSection from '@/features/pricingSection/PricingSection';

export default function LandingPage() {
  return (
    <>
      {' '}
      <HeroSection />
      <FeatureSection />
      <BenefitsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
