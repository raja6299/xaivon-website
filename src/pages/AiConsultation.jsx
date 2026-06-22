import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageMeta from '../components/PageMeta';
import './AiConsultation.css';

export default function AiConsultation() {
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1 });
  const [stepsRef, stepsVisible] = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', 'https://xaivon.com/ai-consultation');
    return () => {
      if (link && link.parentNode) link.parentNode.removeChild(link);
    };
  }, []);

  return (
    <div className="ai-consultation-page">
      <PageMeta
        title="AI Consultation Received — XAIVON"
        description="Your consultation request has been received. Our AI systems are analyzing your needs."
        url="https://xaivon.com/ai-consultation"
      />

      {/* Hero Section */}
      <section className="consultation-hero" id="consultation-hero">
        <div
          ref={heroRef}
          className={`consultation-hero-inner reveal-scale ${heroVisible ? 'visible' : ''}`}
        >
          <div className="consultation-icon-wrapper">
            <div className="consultation-icon-pulse"></div>
            <svg className="consultation-icon" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>

          <span className="badge">
            <span className="badge-dot"></span>
            REQUEST RECEIVED
          </span>

          <h1 className="text-gradient">Your AI Consultation Request is Received.</h1>

          <p className="consultation-subtitle">
            Our AI agent is analyzing your needs. Expect a detailed response within 24 hours.
          </p>

          {/* Progress Timeline */}
          <div
            ref={stepsRef}
            className={`consultation-steps reveal-scale ${stepsVisible ? 'visible' : ''}`}
          >
            <div className="consultation-step completed">
              <div className="step-indicator">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="step-content">
                <span className="step-label">Step 1</span>
                <span className="step-title">Form Submitted</span>
              </div>
            </div>

            <div className="step-connector active"></div>

            <div className="consultation-step active">
              <div className="step-indicator processing">
                <div className="processing-spinner"></div>
              </div>
              <div className="step-content">
                <span className="step-label">Step 2</span>
                <span className="step-title">AI Analyzing</span>
              </div>
            </div>

            <div className="step-connector"></div>

            <div className="consultation-step pending">
              <div className="step-indicator">
                <span>3</span>
              </div>
              <div className="step-content">
                <span className="step-label">Step 3</span>
                <span className="step-title">Response Sent</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="consultation-actions">
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
            <Link to="/contact" className="btn btn-white">
              Schedule a Call Instead
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="consultation-trust" id="consultation-trust">
        <div className="consultation-trust-grid">
          <div className="glass-card consultation-trust-card">
            <span className="consultation-trust-icon" role="img" aria-label="Speed">⚡</span>
            <p>AI-Powered Analysis</p>
          </div>
          <div className="glass-card consultation-trust-card">
            <span className="consultation-trust-icon" role="img" aria-label="Clock">⏱️</span>
            <p>Response in &lt; 24 Hours</p>
          </div>
          <div className="glass-card consultation-trust-card">
            <span className="consultation-trust-icon" role="img" aria-label="Security">🔒</span>
            <p>Enterprise-Grade Security</p>
          </div>
          <div className="glass-card consultation-trust-card">
            <span className="consultation-trust-icon" role="img" aria-label="Custom">🎯</span>
            <p>Custom ROI Projection</p>
          </div>
        </div>
      </section>
    </div>
  );
}
