import { useEffect } from 'react';
import PageMeta from '../components/PageMeta';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ServicesSection from '../components/ServicesSection';
import LogisticsSection from '../components/LogisticsSection';
import IndustriesSection from '../components/IndustriesSection';
import WhyXaivon from '../components/WhyXaivon';
import HowItWorks from '../components/HowItWorks';
import PricingSection from '../components/PricingSection';
import ROICalculator from '../components/ROICalculator';
import CaseStudiesSection from '../components/CaseStudiesSection';
import DemoVideoSection from '../components/DemoVideoSection';
import FounderSection from '../components/FounderSection';
import AIAudit from '../components/AIAudit';
import FAQ from '../components/FAQ';
import CTABanner from '../components/CTABanner';
import LeadMagnet from '../components/LeadMagnet';
import SchemaMarkup from '../components/SchemaMarkup';

export default function Home() {

  return (
    <>
      <PageMeta 
        title="XAIVON — AI-Powered Business Infrastructure"
        description="Enterprise AI automation, logistics solutions, chatbots & agents."
        url="https://xaivon.com"
      />
      <Hero />
      <TrustBar />
      <ServicesSection />
      <LogisticsSection />
      <IndustriesSection />
      <WhyXaivon />
      <HowItWorks />
      <PricingSection />
      <ROICalculator />
      <CaseStudiesSection />
      <DemoVideoSection />
      <FounderSection />
      <LeadMagnet />
      <AIAudit />
      <FAQ />
      <SchemaMarkup type="Organization" />
      <CTABanner />
    </>
  );
}
