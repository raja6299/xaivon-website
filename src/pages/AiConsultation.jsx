import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import './AiConsultation.css';

export default function AiConsultation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ac-page">
      <PageMeta
        title="Assessment Received — XAIVON"
        description="Your request has been received. Our team will review the information and follow up."
        url="https://xaivon.com/ai-consultation"
      />

      <div className="ac-inner">

        {/* Success icon */}
        <div className="ac-icon" aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        {/* Eyebrow */}
        <div className="ac-eyebrow">ASSESSMENT RECEIVED</div>

        {/* Headline */}
        <h1 className="ac-headline">Your request is with the XAIVON team.</h1>

        {/* Supporting copy */}
        <p className="ac-body">
          We've received your information and will review it before following up.
        </p>

        {/* Next steps */}
        <ol className="ac-steps" aria-label="What happens next">
          <li className="ac-step">
            <span className="ac-step-num">01</span>
            <span className="ac-step-text">Request received</span>
          </li>
          <li className="ac-step">
            <span className="ac-step-num">02</span>
            <span className="ac-step-text">XAIVON reviews the information</span>
          </li>
          <li className="ac-step">
            <span className="ac-step-num">03</span>
            <span className="ac-step-text">We follow up with the next step</span>
          </li>
        </ol>

        {/* CTAs */}
        <div className="ac-actions">
          <a
            href="https://calendly.com/raja-xaivon/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            aria-label="Schedule a strategy call on Calendly"
          >
            Schedule a Strategy Call ↗
          </a>
          <Link to="/" className="btn btn-secondary">
            Return Home
          </Link>
        </div>

      </div>
    </div>
  );
}
