import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageMeta from '../components/PageMeta';
import ROICalculator from '../components/ROICalculator';
import './RoiCalculatorPage.css';

export default function RoiCalculatorPage() {
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div className="roi-page">
      <PageMeta />

      <section className="roi-page-hero" id="roi-page-hero">
        <div
          ref={heroRef}
          className={`roi-page-hero-inner reveal-scale ${heroVisible ? 'visible' : ''}`}
        >
          <span className="badge">
            <span className="badge-dot"></span>
            Estimation Tool
          </span>

          <h1 style={{ fontSize: 'clamp(2.25rem, 3.2vw, 3rem)', lineHeight: 1.15, marginTop: '12px' }}>
            Estimate the time tied up in repetitive work.
          </h1>

          <p className="roi-page-hero-subtitle">
            Adjust the assumptions to explore a planning estimate. Actual results depend on the workflow, data and implementation.
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
