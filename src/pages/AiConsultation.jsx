import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import './AiConsultation.css';

export default function AiConsultation() {
  const location = useLocation();
  const isSubmission = location.state?.submitted === true;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ac-page">
      <PageMeta
        title={isSubmission ? "Assessment Received — XAIVON" : "AI Infrastructure Consultation — XAIVON"}
        description={isSubmission ? "Thank you for submitting your assessment request." : "Book a direct consultation with XAIVON to review business automation opportunities."}
        noindex={true}
      />

      <div className="ac-inner">
        {isSubmission ? (
          <>
            <div className="ac-icon" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <div className="ac-eyebrow">ASSESSMENT RECEIVED</div>
            <h1 className="ac-headline">Your request is with the XAIVON team.</h1>
            <p className="ac-body">
              We've received your details and will review your workflow challenges before following up.
            </p>
          </>
        ) : (
          <>
            <div className="ac-icon" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="ac-eyebrow">CONSULTATION &amp; INTAKE</div>
            <h1 className="ac-headline">Explore Automation for Your Operations.</h1>
            <p className="ac-body">
              Schedule a strategy discussion or submit an enquiry to review your current processes with our engineering team.
            </p>
          </>
        )}

        {/* Next steps */}
        <ol className="ac-steps" aria-label="What happens next">
          <li className="ac-step">
            <span className="ac-step-num">01</span>
            <span className="ac-step-text">{isSubmission ? "Request logged" : "Initial consultation"}</span>
          </li>
          <li className="ac-step">
            <span className="ac-step-num">02</span>
            <span className="ac-step-text">Workflow review &amp; scoping</span>
          </li>
          <li className="ac-step">
            <span className="ac-step-num">03</span>
            <span className="ac-step-text">Next steps &amp; proposal</span>
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
