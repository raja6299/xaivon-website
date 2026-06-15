import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMouseParallax } from '../hooks/useMouseParallax';
import './Hero.css';

export default function Hero() {
  const parallax = useMouseParallax(0.02);

  return (
    <section className="hero" id="hero">
      {/* === Background Effects === */}

      {/* Gradient orbs — parallax-linked */}
      <div
        className="hero-orb hero-orb-1"
        style={{ transform: `translate(${parallax.x * 1.2}px, ${parallax.y * 1.2}px)` }}
      />
      <div
        className="hero-orb hero-orb-2"
        style={{ transform: `translate(${parallax.x * -0.8}px, ${parallax.y * -0.8}px)` }}
      />
      <div
        className="hero-orb hero-orb-3"
        style={{ transform: `translate(${parallax.x * 0.6}px, ${parallax.y * 0.6}px)` }}
      />

      {/* Grid overlay */}
      <div className="hero-grid" />

      {/* Network dots */}
      <div className="hero-network" />

      {/* Floating particles */}
      <div className="hero-particles">
        <span className="hero-particle" />
        <span className="hero-particle" />
        <span className="hero-particle" />
        <span className="hero-particle" />
        <span className="hero-particle" />
        <span className="hero-particle" />
        <span className="hero-particle" />
        <span className="hero-particle" />
      </div>

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
          <span className="text-gradient-cyan">AI Infrastructure</span>
          <br />
          Behind Modern Logistics.
        </h1>

        {/* Subheadline */}
        <p className="hero-subheadline hero-fade hero-fade-3">
          We design and deploy enterprise-grade AI systems that reduce operational costs, eliminate manual data entry, and scale freight operations without increasing headcount.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta-row hero-fade hero-fade-4">
          <Link to="/contact" className="btn btn-primary btn-lg" id="hero-cta-book">
            Book Strategy Call
          </Link>
          <Link to="/services" className="btn btn-secondary btn-lg" id="hero-cta-demo">
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
            Explore Services
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="hero-trust hero-fade hero-fade-5">
          <div className="hero-trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>Enterprise-Grade Security</span>
          </div>
          <div className="hero-trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Rapid Deployment</span>
          </div>
          <div className="hero-trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>Custom AI Solutions</span>
          </div>
          <div className="hero-trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>Dedicated Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
