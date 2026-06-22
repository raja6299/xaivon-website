import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageMeta from '../components/PageMeta';
import ROICalculator from '../components/ROICalculator';
import './RoiCalculatorPage.css';

export default function RoiCalculatorPage() {
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', 'https://xaivon.com/roi-calculator');
    return () => {
      if (link && link.parentNode) link.parentNode.removeChild(link);
    };
  }, []);

  return (
    <div className="roi-page">
      <PageMeta
        title="AI Automation ROI Calculator — XAIVON"
        description="Calculate how much time and capital XAIVON's AI infrastructure can recover for your operations."
        url="https://xaivon.com/roi-calculator"
      />

      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="roi-page-hero" id="roi-page-hero">
        <div
          ref={heroRef}
          className={`roi-page-hero-inner reveal-scale ${heroVisible ? 'visible' : ''}`}
        >
          <span className="badge">
            <span className="badge-dot"></span>
            Free AI Assessment Tool
          </span>

          <h1 className="text-gradient">
            Discover Your True Automation Potential
          </h1>

          <p className="roi-page-hero-subtitle">
            Get a custom projection of the time, money, and capacity your business can unlock — powered by real operational data, not guesswork.
          </p>

          <div className="roi-page-hero-stats">
            <div className="roi-page-stat">
              <span className="roi-page-stat-value">70%</span>
              <span className="roi-page-stat-label">Average Cost Reduction</span>
            </div>
            <div className="roi-page-stat-divider"></div>
            <div className="roi-page-stat">
              <span className="roi-page-stat-value">24h</span>
              <span className="roi-page-stat-label">Custom Report Delivery</span>
            </div>
            <div className="roi-page-stat-divider"></div>
            <div className="roi-page-stat">
              <span className="roi-page-stat-value">500+</span>
              <span className="roi-page-stat-label">Hours Saved Per Year</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ROI Calculator Component (imported as-is) ────────────── */}
      <ROICalculator />
    </div>
  );
}
