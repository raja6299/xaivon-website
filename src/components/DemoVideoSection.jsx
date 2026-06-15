import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './DemoVideoSection.css';

export default function DemoVideoSection() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [videoRef, videoVisible] = useScrollReveal({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="section demo-section" id="demo-video">
      <div className="container">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="badge badge-primary">
            <span className="badge-dot" />
            Watch XAIVON In Action
          </span>
          <h2>
            See How We <span className="text-gradient-cyan">Automate Operations</span>
          </h2>
          <p>
            Take a guided tour of our custom AI infrastructure in action, demonstrating real-world workflow automation and rapid deployment.
          </p>
        </div>

        {/* Video Placeholder */}
        <div
          ref={videoRef}
          className={`demo-video-wrapper reveal-scale ${videoVisible ? 'visible' : ''}`}
        >
          <div className="demo-video-container glass-card">
            {/* The actual iframe or video tag will go here once the video is ready */}
            <div className="demo-video-placeholder">
              <div className="demo-play-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="demo-placeholder-text">Demo Video Coming Soon</p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className={`demo-cta-wrapper reveal ${ctaVisible ? 'visible' : ''}`}
        >
          <Link to="/contact" className="btn btn-primary btn-lg" id="demo-schedule-btn">
            Schedule a Demo
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4.167 10H15.833M15.833 10L10.833 5M15.833 10L10.833 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link to="/contact" className="btn btn-secondary btn-lg" id="demo-case-studies-btn">
            Read Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
