import { Link } from 'react-router-dom';
import WorkflowPanel from './WorkflowPanel';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-background"></div>
      <div className="hero-grid-layer" aria-hidden="true"></div>
      <div className="hero-contour-layer" aria-hidden="true">
        <svg viewBox="0 0 1600 900" preserveAspectRatio="none" fill="none">
          <path d="M0 350 Q400 280 800 350 T1600 320" stroke="rgba(255,255,255,0.03)" strokeWidth="1.5" fill="none"/>
          <path d="M0 450 Q400 380 800 450 T1600 420" stroke="rgba(255,255,255,0.025)" strokeWidth="1" fill="none"/>
          <path d="M0 550 Q400 500 800 550 T1600 530" stroke="rgba(255,255,255,0.02)" strokeWidth="1" fill="none"/>
          <path d="M0 650 Q400 600 800 650 T1600 640" stroke="rgba(255,255,255,0.025)" strokeWidth="1" fill="none"/>
          <path d="M0 250 Q300 200 700 260 T1400 230" stroke="rgba(255,255,255,0.02)" strokeWidth="1" fill="none"/>
          <path d="M0 750 Q500 710 900 760 T1600 740" stroke="rgba(255,255,255,0.02)" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      <div className="hero-content">
        {/* Left Column */}
        <div className="hero-copy-column">
          <div className="hero-overline hero-fade hero-fade-1">
            <span>START WITH THE WORKFLOW</span>
            <div className="overline-line"></div>
          </div>

          <h1 className="hero-headline hero-fade hero-fade-2">
            We automate the<br/>
            operational work your<br/>
            team shouldn&apos;t do twice.
          </h1>

          <p className="hero-subheadline hero-fade hero-fade-3">
            XAIVON connects your systems, applies business rules, and handles the repetitive handoffs — so your team works on decisions, not data entry.
          </p>

          <div className="hero-cta-row hero-fade hero-fade-4">
            <Link to="/contact" className="hero-btn hero-btn-primary">
              Book an Assessment <span className="btn-arrow">↗</span>
            </Link>
            <Link to="/solutions" className="hero-btn hero-btn-secondary">
              See how it works
            </Link>
          </div>
        </div>

        {/* Right Column: Workflow Animation Panel */}
        <div className="hero-visual-column hero-fade hero-fade-5">
          <WorkflowPanel />
        </div>
      </div>
    </section>
  );
}
