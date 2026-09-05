import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

export default function About() {
  return (
    <div className="about-page">
      <PageMeta 
        title="About XAIVON - AI Infrastructure & Business Automation"
        description="We build AI systems around the way businesses actually work."
        url="https://xaivon.com/about"
      />

      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">ABOUT XAIVON</div>
          <h1 style={{ maxWidth: '800px' }}>We build AI systems around the way businesses actually work.</h1>
          <p>XAIVON helps businesses turn repetitive work, disconnected systems and manual processes into reliable workflows, AI agents and connected business systems.</p>
        </div>
      </section>

      <section className="section" id="who">
        <div className="container two-col">
          <div>
            <div className="eyebrow">What we do</div>
            <h2>AI infrastructure and business automation.</h2>
          </div>
          <div>
            <p className="text-muted" style={{ fontSize: '16px' }}>XAIVON is an AI infrastructure and business automation company. We build the systems behind the work — workflows, agents, integrations and supporting infrastructure that help teams handle repetitive operational work with less manual effort.</p>
          </div>
        </div>
      </section>

      <section className="section bg-soft" id="why">
        <div className="container two-col">
          <div>
            <div className="eyebrow">Why we started</div>
            <h2>Too many systems, too much repetitive work.</h2>
          </div>
          <div>
            <p className="text-muted" style={{ fontSize: '16px' }}>Most businesses do not have a lack of software. They have too many systems, too much repetitive work, and too many steps that still depend on someone moving information from one place to another.</p>
            <p className="text-muted" style={{ fontSize: '16px', marginTop: '16px' }}>XAIVON exists to solve that gap.</p>
            <p className="text-muted" style={{ fontSize: '16px', marginTop: '16px' }}>We look at the way a business actually operates, find where work gets repeated or stuck, and build a system around it.</p>
          </div>
        </div>
      </section>

      <section className="section" id="how-we-think">
        <div className="container two-col">
          <div>
            <div className="eyebrow">How we think about AI</div>
            <h2>AI should do useful work.</h2>
          </div>
          <div>
            <p className="text-muted" style={{ fontSize: '16px' }}>We do not believe every business problem needs an AI agent.</p>
            <p className="text-muted" style={{ fontSize: '16px', marginTop: '16px' }}>Sometimes a simple workflow is enough. Sometimes the right answer is a CRM integration, document processing system, voice agent or a larger automated process.</p>
            <p className="text-muted" style={{ fontSize: '16px', marginTop: '16px' }}>We choose the simplest system that reliably solves the problem.</p>
          </div>
        </div>
      </section>

      <section className="section bg-soft" id="how">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">How we work</div>
              <h2>From problem to working system</h2>
            </div>
          </div>
          <div className="four-col">
            <article className="surface card">
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Understand</h3>
              <p className="text-muted" style={{ fontSize: '13px' }}>Map the process, the systems involved and the handoffs that create drag.</p>
            </article>
            <article className="surface card">
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Design</h3>
              <p className="text-muted" style={{ fontSize: '13px' }}>Convert the process into measurable steps and decision points.</p>
            </article>
            <article className="surface card">
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Build</h3>
              <p className="text-muted" style={{ fontSize: '13px' }}>Connect models, tools, data and business rules into the workflow.</p>
            </article>
            <article className="surface card">
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Test</h3>
              <p className="text-muted" style={{ fontSize: '13px' }}>Verify edge cases, error handling and system stability.</p>
            </article>
            <article className="surface card">
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Deploy</h3>
              <p className="text-muted" style={{ fontSize: '13px' }}>Push to production with monitoring and fallback paths.</p>
            </article>
            <article className="surface card">
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Improve</h3>
              <p className="text-muted" style={{ fontSize: '13px' }}>Track exceptions and optimize based on real-world usage.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="principles">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">What makes the approach different</div>
              <h2>Built on operational principles.</h2>
            </div>
          </div>
          <div className="four-col">
            <article className="surface card">
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Build around the real workflow</h3>
              <p className="text-muted" style={{ fontSize: '13px' }}>Start from the work, not from a favorite AI tool.</p>
            </article>
            <article className="surface card">
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Keep humans in control</h3>
              <p className="text-muted" style={{ fontSize: '13px' }}>Automation should know when to act and when to hand work back.</p>
            </article>
            <article className="surface card">
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Use what already works</h3>
              <p className="text-muted" style={{ fontSize: '13px' }}>Integrate with the client's existing systems where possible.</p>
            </article>
            <article className="surface card">
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Be clear about what is real</h3>
              <p className="text-muted" style={{ fontSize: '13px' }}>No fabricated outcomes, fake customer logos or invented case studies.</p>
            </article>
            <article className="surface card">
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Build for the next stage</h3>
              <p className="text-muted" style={{ fontSize: '13px' }}>The system should be maintainable and expandable as the business grows.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section bg-soft" id="founder">
        <div className="container two-col">
          <div>
            <div className="eyebrow">Founder</div>
            <h2>Built by the people responsible for the work.</h2>
            <div style={{ marginTop: '24px' }}>
              <strong>Raja</strong><br/>
              <span className="text-muted">Founder & CEO, XAIVON</span>
            </div>
          </div>
          <div>
            <p className="text-muted" style={{ fontSize: '16px' }}>I started XAIVON with a simple view: businesses should not have to keep adding people just to keep up with repetitive work.</p>
            <p className="text-muted" style={{ fontSize: '16px', marginTop: '16px' }}>As I worked through automation and AI systems, the more important problem became clear: the hard part is not adding another AI tool. It is understanding the workflow, connecting the systems, and making the whole thing reliable.</p>
            <p className="text-muted" style={{ fontSize: '16px', marginTop: '16px' }}>That is what I want XAIVON to build.</p>
            <p className="text-muted" style={{ fontSize: '16px', marginTop: '16px' }}>Practical AI systems that fit the business, work with the tools already in place, and become more useful as the company grows.</p>
          </div>
        </div>
      </section>

      <section className="section" id="future">
        <div className="container two-col">
          <div>
            <div className="eyebrow">Current focus + future</div>
            <h2>Built for today. Designed to grow.</h2>
          </div>
          <div>
            <p className="text-muted" style={{ fontSize: '16px' }}>XAIVON serves businesses across industries. Logistics & Freight is one of the current areas where XAIVON is actively developing and validating automation workflows.</p>
            <p className="text-muted" style={{ fontSize: '16px', marginTop: '16px' }}>Future industry-specific SaaS platforms and a unified enterprise AI ecosystem are planned productizations that will be derived from these validated real-world workflows.</p>
            <div style={{ marginTop: '24px' }}>
              <Link to="/#proof" className="btn btn-secondary">See the systems we build</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" style={{ margin: '0 10px 52px', borderRadius: '30px' }}>
        <div className="container">
          <div className="eyebrow" style={{color: '#ffe3d6'}}>Ready to start?</div>
          <h2>Find the work your team should stop doing manually.</h2>
          <div className="hero-actions">
            <Link className="btn btn-light" to="/contact">Book an AI Assessment ↗</Link>
            <Link className="btn" style={{background: 'rgba(255,255,255,.1)', borderColor: 'rgba(255,255,255,.35)', color: '#fff'}} to="/solutions">Explore Solutions</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
