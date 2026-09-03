import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageMeta from '../components/PageMeta';
import ROICalculator from '../components/ROICalculator';
import './RoiCalculatorPage.css';

export default function RoiCalculatorPage() {
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div className="roi-page">
      <PageMeta
        title="AI Automation ROI Calculator — XAIVON"
        description="Estimate the potential time and cost savings of replacing manual workflows with XAIVON autonomous AI infrastructure."
        url="https://xaivon.com/roi-calculator"
      />

      <section className="roi-page-hero" id="roi-page-hero">
        <div
          ref={heroRef}
          className={`roi-page-hero-inner reveal-scale ${heroVisible ? 'visible' : ''}`}
        >
          <span className="badge">
            <span className="badge-dot"></span>
            Estimation Tool
          </span>

          <h1 className="text-gradient">
            Discover Your True Automation Potential
          </h1>

          <p className="roi-page-hero-subtitle">
            Estimate the opportunity from the inputs you provide.
          </p>

          <div className="roi-page-hero-stats">
            <div className="roi-page-stat">
              <span className="roi-page-stat-value">Illustrative</span>
              <span className="roi-page-stat-label">Potential Savings</span>
            </div>
            <div className="roi-page-stat-divider"></div>
            <div className="roi-page-stat">
              <span className="roi-page-stat-value">Instant</span>
              <span className="roi-page-stat-label">Custom Estimation</span>
            </div>
            <div className="roi-page-stat-divider"></div>
            <div className="roi-page-stat">
              <span className="roi-page-stat-value">Adjustable</span>
              <span className="roi-page-stat-label">Automation Variables</span>
            </div>
          </div>
        </div>
      </section>

      <ROICalculator />
    </div>
  );
}
