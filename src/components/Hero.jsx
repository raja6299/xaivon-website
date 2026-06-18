import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* === Background Effects === */}

      {/* Removed particles, grids, and network dots for an ultra-clean look */}

      {/* === Content === */}
      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge-wrap hero-fade hero-fade-1">
          <span className="badge">
            <span className="badge-dot"></span>
            Enterprise AI Infrastructure
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-headline hero-fade hero-fade-2">
          Building The{' '}
          <span className="text-gradient-premium">AI Infrastructure</span>
          <br />
          Behind Modern Logistics.
        </h1>

        {/* Subheadline */}
        <p className="hero-subheadline hero-fade hero-fade-3">
          We design and deploy enterprise-grade AI systems that reduce operational costs, streamline workflows, and scale operations without increasing headcount.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta-row hero-fade hero-fade-4">
          <Link to="/contact" className="btn btn-primary btn-lg" id="hero-cta-book">
            Schedule a Strategy Call
          </Link>
          <Link to="/contact" className="btn btn-secondary btn-lg" id="hero-cta-demo">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Get a Free AI Infrastructure Assessment
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="hero-trust hero-fade hero-fade-5">
          <div className="hero-trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>Secure & Encrypted</span>
          </div>
          <div className="hero-trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>Strategy-First Approach</span>
          </div>
          <div className="hero-trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Response Within 12 Hours</span>
          </div>
          <div className="hero-trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>Built For Long-Term Growth</span>
          </div>
        </div>
      </div>
    </section>
  );
}
