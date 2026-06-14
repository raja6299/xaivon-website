import { useEffect } from 'react';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import ROICalculator from '../components/ROICalculator';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <ROICalculator />
      <Pricing />
      <Testimonials />
      <CTABanner />
    </>
  );
}
