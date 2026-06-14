import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './CTABanner.css';

export default function CTABanner() {
  const ref = useScrollAnimation();
  return (
    <section className="cta-banner" id="cta-banner" ref={ref}>
      <div className="scroll-fade-in">
        <h2>Ready to 10x Your Operations?</h2>
        <p>Join leading freight brokers who are already automating their quote processing with XAIVON.</p>
        <Link to="/contact" className="btn btn-primary" id="cta-bottom">Book Your Free Discovery Call →</Link>
      </div>
    </section>
  );
}
