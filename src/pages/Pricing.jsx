import PricingSection from '../components/PricingSection';
import AIAudit from '../components/AIAudit';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import './Pricing.css';

export default function Pricing() {
  const ref = useStaggerAnimation('.scroll-fade-in');

  return (
    <div className="pricing-page" ref={ref}>
      <section className="pricing-hero">
        <div className="container scroll-fade-in">
          <span className="badge">INVESTMENT</span>
          <h1 className="text-gradient">Pricing Built For Scale</h1>
          <p className="pricing-hero-desc">
            No hidden fees. No complicated retainers. Choose the infrastructure tier that matches your business size and operational goals.
          </p>
        </div>
      </section>

      <PricingSection />
      <AIAudit />
    </div>
  );
}
