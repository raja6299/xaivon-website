import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './CTABanner.css';

export default function CTABanner() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="cta-banner" id="cta-banner" ref={ref}>
      {/* Background gradient orbs */}
      <div className="cta-orb cta-orb-1" aria-hidden="true"></div>
      <div className="cta-orb cta-orb-2" aria-hidden="true"></div>
      <div className="cta-orb cta-orb-3" aria-hidden="true"></div>

      {/* Floating particles */}
      <div className="cta-particles" aria-hidden="true">
        <span className="cta-particle"></span>
        <span className="cta-particle"></span>
        <span className="cta-particle"></span>
        <span className="cta-particle"></span>
        <span className="cta-particle"></span>
        <span className="cta-particle"></span>
      </div>

      <div className={`cta-banner-content reveal-scale ${isVisible ? 'visible' : ''}`}>
        <h2>
          Ready To <span className="text-gradient-cyan">Scale With AI</span>?
        </h2>
        <p>
          Join forward-thinking businesses that are automating operations and growing faster with XAIVON.
        </p>
        <div className="cta-banner-buttons">
          <Link
            to="/contact"
            className="btn btn-primary btn-lg"
            id="cta-banner-strategy"
          >
            Book Strategy Call
          </Link>
          <Link
            to="/contact"
            className="btn btn-secondary btn-lg"
            id="cta-banner-contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
