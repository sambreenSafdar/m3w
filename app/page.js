import Footer from '@/components/footer';
import ContactSection from '@/sections/contact-us';
import GamesSection from '@/sections/games';
import HeroSection from '@/sections/hero';
import HowItWorksSection from '@/sections/how-it-works';
import PartnerSection from '@/sections/partner';
import PricingSection from '@/sections/pricing';
import PromoSection from '@/sections/promo';

export default function Home() {
  return (
    <>
      <HeroSection id="hero" />
      <HowItWorksSection id="how-it-works" />
      <PartnerSection id="partners" />
      <PromoSection id="promo" />
      <GamesSection />
      <PricingSection id="pricing" />
      <ContactSection id="contact" />
      <Footer />
    </>
  );
}
