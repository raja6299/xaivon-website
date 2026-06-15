import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './CTABanner.css';

export default function CTABanner() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="cta-banner" id="cta-banner" ref={ref}>
      {/* Removed orbs and particles for an enterprise look */}

      <div className={`cta-banner-content reveal-scale ${isVisible ? 'visible' : ''}`}>
        <h2>
          Ready To <span className="text-gradient-premium">Scale Systematically</span>?
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
            Schedule a Strategy Call
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
