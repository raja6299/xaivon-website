import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);
  

  useEffect(() => {
    const words = ["Intelligent AI", "Agentic Automation", "Zero Errors", "24/7 Precision"];
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 40 : 80);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="hero" id="hero">
      {/* Animated background layers */}
      <div className="hero-mesh"></div>
      <div className="hero-grid"></div>
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>

      {/* Floating particles */}
      <div className="hero-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="hero-content">
        <span className="hero-badge">
          <span className="hero-badge-dot"></span>
          Logistics Intelligence Platform
        </span>
        <h1>
          Redefining Global Logistics<br />
          <span className="highlight">with {text}<span className="typing-cursor">|</span></span>
        </h1>
        <p className="hero-desc">
          Optimizing supply chains, mitigating risk, and enhancing operational efficiency with enterprise-grade artificial intelligence.
        </p>
        <div className="hero-buttons">
          <Link to="/contact" className="btn btn-primary" id="hero-cta-primary">Get Started →</Link>
          <Link to="/services" className="btn btn-secondary" id="hero-cta-secondary">Watch Demo</Link>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number text-gradient-brand">30s</div>
            <div className="hero-stat-label">Quote Processing</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number text-gradient-brand">90%</div>
            <div className="hero-stat-label">Time Saved</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number text-gradient-brand">24/7</div>
            <div className="hero-stat-label">AI Processing</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number text-gradient-brand">10x</div>
            <div className="hero-stat-label">Quote Capacity</div>
          </div>
        </div>

        <div className="hero-trust">
          <p>Trusted by logistics leaders</p>
          <div className="hero-trust-logos">
            <span>ACME Freight</span>
            <span>Pacific Logistics</span>
            <span>Atlas Transport</span>
            <span>NorthStar 3PL</span>
            <span>Summit Carriers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
