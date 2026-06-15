import { useEffect } from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ServicesSection from '../components/ServicesSection';
import LogisticsSection from '../components/LogisticsSection';
import WhyXaivon from '../components/WhyXaivon';
import HowItWorks from '../components/HowItWorks';
import FounderSection from '../components/FounderSection';
import AIAudit from '../components/AIAudit';
import FAQ from '../components/FAQ';
import CTABanner from '../components/CTABanner';

export default function Home() {
  useEffect(() => {
    document.title = 'XAIVON — AI-Powered Business Infrastructure Company';
  }, []);

  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <LogisticsSection />
      <WhyXaivon />
      <HowItWorks />
      <FounderSection />
      <AIAudit />
      <FAQ />
      <CTABanner />
    </>
  );
}
