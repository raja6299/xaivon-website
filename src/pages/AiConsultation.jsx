import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './AiConsultation.css';

export default function AiConsultation() {
  const [heroRef, heroVisible] = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="consultation-page">
      <PageMeta 
        title="Assessment Received — XAIVON"
        description="Your request has been received. Our team will review the information and follow up."
        url="https://xaivon.com/ai-consultation"
      />
      <div className="container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div ref={heroRef} className={`text-center reveal-fade-up ${heroVisible ? 'visible' : ''}`}>
          <div className="success-icon-wrapper mb-4">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          
          <h1 className="text-gradient">Request Received</h1>
          
          <p className="consultation-subtitle">
            Our team will review your information and follow up shortly.
          </p>

          <div className="consultation-actions mt-4">
            <Link to="/" className="btn btn-primary">Return Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
