import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

export default function About() {
  const steps = [
    { title: 'Understand', desc: 'Start with the process, the people and the friction.' },
    { title: 'Design', desc: 'Agree on what the system can do, and what stays with the team.' },
    { title: 'Build', desc: 'Connect the right tools around the workflow.' },
    { title: 'Test', desc: 'Check ordinary tasks, exceptions and failure paths.' },
    { title: 'Deploy', desc: 'Introduce the system with clear ownership and instructions.' },
    { title: 'Improve', desc: 'Adjust the process as the business changes.' }
  ];

  const principles = [
    { title: 'The workflow comes first.', desc: 'We focus on the real process, not a fashionable stack.' },
    { title: 'People stay responsible.', desc: 'Sensitive or uncertain steps need the right review and escalation.' },
    { title: 'Use what already works.', desc: 'Good integrations should reduce disruption, not create it.' },
    { title: 'Say what is real.', desc: 'We distinguish demonstrations, current services and future plans.' },
    { title: 'Make the next change possible.', desc: 'The system should remain understandable and maintainable.' }
  ];

  return (
    <div className="about-page">
      <PageMeta />

      {/* Hero */}
      <section className="page-hero" style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <div className="eyebrow">ABOUT XAIVON</div>
          <h1 style={{ marginTop: '12px', fontSize: 'clamp(2.25rem, 3.2vw, 3rem)', lineHeight: 1.15, maxWidth: '820px' }}>
            We build systems around the way businesses actually work.
          </h1>
          <p style={{ marginTop: '18px', maxWidth: '72ch', color: 'var(--muted)', fontSize: 'clamp(16px, 1.25vw, 17.5px)', lineHeight: 1.65 }}>
            XAIVON helps businesses turn repetitive work, disconnected tools and manual handoffs into manageable workflows and connected operations.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="section" id="who" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="container two-col">
          <div>
            <div className="eyebrow">WHAT WE DO</div>
            <h2>Practical systems for everyday operations.</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--muted)' }}>
              XAIVON is an AI infrastructure and business automation brand. We design workflows, agents, integrations and supporting systems for everyday business operations. The goal is not to add another tool for the sake of it. It is to make the existing work easier to run.
            </p>
          </div>
        </div>
      </section>

      {/* Why we started */}
      <section className="section" id="why" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container two-col">
          <div>
            <div className="eyebrow">WHY WE STARTED</div>
            <h2>The gaps between software.</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--muted)' }}>
              Most businesses already have enough software. The harder problem is what happens between those tools: information gets copied, a follow-up is missed, a document needs checking, and the next step depends on someone remembering it. XAIVON exists to work on those gaps.
            </p>
          </div>
        </div>
      </section>

      {/* AI should do useful work */}
      <section className="section" id="philosophy">
        <div className="container two-col">
          <div>
            <div className="eyebrow">APPROACH TO AI</div>
            <h2>AI should do useful work.</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--muted)' }}>
              Not every task needs an AI agent. Sometimes clear rules and a dependable integration are better. When AI is useful, it should have a defined job, appropriate access and a clear way to ask a person for help.
            </p>
          </div>
        </div>
      </section>

      {/* From problem to working system */}
      <section className="section" id="how" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">HOW WE WORK</div>
              <h2>From problem to working system</h2>
            </div>
          </div>
          <div className="four-col" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
            {steps.map((st, i) => (
              <article className="surface card" key={i} style={{ padding: '24px' }}>
                <span className="eyebrow" style={{ color: 'var(--accent)' }}>0{i + 1}</span>
                <h3 style={{ fontSize: '17px', marginTop: '8px', marginBottom: '8px' }}>{st.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{st.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What guides our work */}
      <section className="section" id="principles">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">OUR PRINCIPLES</div>
              <h2>What guides our work</h2>
            </div>
          </div>
          <div className="four-col" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {principles.map((pr, i) => (
              <article className="surface card" key={i} style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '16px', marginBottom: '8px', color: 'var(--ink)' }}>{pr.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{pr.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section className="section" id="founder" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container two-col">
          <div>
            <div className="eyebrow">FOUNDER NOTE</div>
            <h2>A note from the founder</h2>
            <div style={{ marginTop: '24px' }}>
              <strong style={{ fontSize: '18px', color: 'var(--ink)' }}>Raja Babu</strong><br />
              <span style={{ fontSize: '14px', color: 'var(--muted)' }}>Founder, XAIVON</span>
            </div>
          </div>
          <div>
            <blockquote style={{ margin: 0, padding: 0, border: 'none' }}>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--ink)', fontStyle: 'normal' }}>
                &ldquo;I started XAIVON because I kept seeing the same problem in business operations: the tools were there, but too much work still happened between them by hand. The interesting part of automation isn&apos;t the label on the technology. It&apos;s whether a real task is completed reliably, someone can understand what happened, and the team gets time back for better work. That&apos;s the standard I want us to build around.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Current reality + future & operating entity */}
      <section className="section" id="future">
        <div className="container two-col">
          <div>
            <div className="eyebrow">BUSINESS INFORMATION</div>
            <h2>Current reality &amp; operating identity</h2>
          </div>
          <div>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--muted)' }}>
              Today, XAIVON focuses on implementing useful automations and connected business systems, with logistics among its active areas of development. Longer-term product ideas are shown separately as plans—not as services already operating at scale.
            </p>
            <div style={{ marginTop: '20px', padding: '18px', background: 'var(--bg-soft)', borderRadius: '10px', border: '1px solid var(--line)' }}>
              <strong style={{ fontSize: '14px', display: 'block', marginBottom: '6px' }}>Operating Identity</strong>
              <p style={{ fontSize: '13px', margin: 0, color: 'var(--muted)', lineHeight: 1.6 }}>
                XAIVON is a business brand operated under ADABHRA GROUP, a sole proprietorship registered as a micro enterprise under the Udyam system in India.
              </p>
            </div>
            <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
              <Link to="/#proof" className="btn btn-secondary">See Our Work</Link>
              <Link to="/contact" className="btn btn-primary">Book an Assessment ↗</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
