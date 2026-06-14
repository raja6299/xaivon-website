import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import './About.css';

export default function About() {
  const staggerRef = useStaggerAnimation('.scroll-fade-in');

  return (
    <div className="about-page" ref={staggerRef}>
      {/* Hero */}
      <section className="about-hero" id="about-hero">
        <div className="scroll-fade-in">
          <span className="badge">ABOUT XAIVON</span>
          <h1 className="text-gradient">Built to Transform Logistics Operations</h1>
          <p className="about-hero-desc">
            XAIVON was founded with one mission: make enterprise-grade AI accessible to logistics businesses of every size.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story" id="about-story">
        <div className="glass-card about-story-card scroll-fade-in">
          <h2>Our <span className="text-accent">Story</span></h2>
          <p>
            XAIVON was born from a simple observation: freight brokers were spending hours each day on repetitive, manual quoting work — reading emails, looking up rates, typing out responses. Meanwhile, the technology to automate all of this already existed, but it was locked behind enterprise contracts that only the largest 3PLs could afford.
          </p>
          <p>
            We set out to change that. By combining cutting-edge Agentic AI with deep logistics industry knowledge, we built QuoteFlow AI — a system that processes RFQs end-to-end in under 30 seconds. No templates. No copy-pasting. No missed opportunities at 2 AM.
          </p>
          <p>
            Today, XAIVON partners with freight brokerages of all sizes to eliminate operational bottlenecks, reduce response times from hours to seconds, and help brokers focus on what actually grows their business: building relationships and moving freight.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="about-founder" id="about-founder">
        <div className="about-founder-inner scroll-fade-in">
          <div className="founder-avatar" aria-label="Founder photo placeholder">
            R
          </div>
          <div className="founder-info">
            <h3>Raja</h3>
            <span className="founder-title">Founder &amp; CEO</span>
            <p className="founder-bio">
              Raja is an AI automation specialist who partners with logistics companies to streamline their operations using cutting-edge Agentic AI technology. His mission is to help freight brokers focus on relationships and growth while AI handles the repetitive work.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="about-mvv" id="about-mvv">
        <div className="about-mvv-header scroll-fade-in">
          <h2>What <span className="text-gradient-brand">Drives Us</span></h2>
        </div>
        <div className="about-mvv-grid">
          <div className="glass-card mvv-card scroll-fade-in delay-1">
            <span className="mvv-icon" role="img" aria-label="Mission">🎯</span>
            <h3>Our Mission</h3>
            <p>
              To eliminate repetitive manual work in logistics through intelligent AI automation, letting humans focus on what they do best — building relationships and growing business.
            </p>
          </div>
          <div className="glass-card mvv-card scroll-fade-in delay-2">
            <span className="mvv-icon" role="img" aria-label="Vision">🔭</span>
            <h3>Our Vision</h3>
            <p>
              A world where every freight broker has access to enterprise-grade AI, leveling the playing field between small brokerages and industry giants.
            </p>
          </div>
          <div className="glass-card mvv-card scroll-fade-in delay-3">
            <span className="mvv-icon" role="img" aria-label="Values">💎</span>
            <h3>Our Values</h3>
            <p>
              Transparency, Results-First, Long-Term Partnership. We measure our success by our clients' ROI, not our revenue.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
