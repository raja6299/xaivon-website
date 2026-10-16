import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import Hero from '../components/Hero';
import { XAIVON_DATA } from '../data/xaivonData';

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);

  // Section 04: Steps definition
  const steps = [
    { num: '01', title: 'Understand', desc: 'Walk through the task, the people involved and what currently goes wrong.', phase: 'DISCOVERY' },
    { num: '02', title: 'Design', desc: 'Agree on rules, permissions, handoffs and the result that matters.', phase: 'ARCHITECTURE' },
    { num: '03', title: 'Build', desc: 'Connect the approved systems and test normal cases as well as exceptions.', phase: 'INTEGRATION' },
    { num: '04', title: 'Improve', desc: 'Review the result, fix friction and adjust the workflow as work changes.', phase: 'OPTIMIZATION' }
  ];

  // Section 08: ROI Planner with neutral initial state
  const [hasCalculated, setHasCalculated] = useState(false);
  const [calcInputs, setCalcInputs] = useState({
    employees: '',
    hours: '',
    rate: '',
    coverage: 50,
    weeks: 52,
    implementation: 0,
    recurring: 0
  });

  const handleCalcChange = (e) => {
    const { name, value } = e.target;
    setCalcInputs(prev => ({ ...prev, [name]: value === '' ? '' : Math.max(0, Number(value) || 0) }));
    setHasCalculated(true);
  };

  const handleLoadExample = () => {
    setCalcInputs({
      employees: 5,
      hours: 15,
      rate: 35,
      coverage: 50,
      weeks: 52,
      implementation: 1200,
      recurring: 100
    });
    setHasCalculated(true);
  };

  const employeesNum = Number(calcInputs.employees) || 0;
  const hoursNum = Number(calcInputs.hours) || 0;
  const rateNum = Number(calcInputs.rate) || 0;
  const weeksNum = Math.max(1, Number(calcInputs.weeks) || 52);
  const coverageFrac = Math.min(100, Number(calcInputs.coverage) || 0) / 100;
  const implNum = Number(calcInputs.implementation) || 0;
  const recurNum = Number(calcInputs.recurring) || 0;

  const current = employeesNum * hoursNum * rateNum * weeksNum;
  const affected = employeesNum * hoursNum * weeksNum * coverageFrac;
  const gross = current * coverageFrac;
  const annualRecurring = recurNum * 12;
  const net = gross - annualRecurring - implNum;
  const investment = implNum + annualRecurring;
  const roi = investment > 0 ? (net / investment) * 100 : null;
  const monthlyBenefit = (gross - annualRecurring) / 12;
  const payback = (implNum > 0 && monthlyBenefit > 0) ? implNum / monthlyBenefit : null;

  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  const number = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <PageMeta />
      
      {/* Section 01: Top hero panel */}
      <Hero />

      {/* Section 02: The Real Bottleneck */}
      <section className="dark-section section" id="problem">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">THE REAL BOTTLENECK</div>
              <h2>Good teams lose time between disconnected tools.</h2>
            </div>
            <p>A request arrives by email. Someone copies it into a spreadsheet. Someone else updates a CRM. Then everyone waits for the next step. We look at the handoffs and make the process easier to run.</p>
          </div>
          <div className="problem-grid">
            <article className="surface problem-card">
              <h3>Repetitive updates</h3>
              <p>The same information is typed, copied or confirmed more than once.</p>
            </article>
            <article className="surface problem-card">
              <h3>Missed follow-ups</h3>
              <p>Important next steps depend on someone remembering to act.</p>
            </article>
            <article className="surface problem-card">
              <h3>No clear view</h3>
              <p>Work moves across inboxes, documents and tools without one reliable status.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 03: What We Build */}
      <section className="section" id="capabilities">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">WHAT WE BUILD</div>
              <h2>Useful systems, not more software to manage.</h2>
            </div>
            <p>We start with one business problem, then design the right mix of automation, integrations and human oversight.</p>
          </div>
          <div className="four-col">
            <article className="surface card cap-card reveal in">
              <div className="icon-box">↗</div>
              <h3>Workflow Automation</h3>
              <p>Move information through repeatable steps with clear rules, checks and exception handling.</p>
              <Link className="text-link" to="/solutions#workflow">Learn more →</Link>
            </article>
            <article className="surface card cap-card reveal in">
              <div className="icon-box">@</div>
              <h3>Lead &amp; Email Operations</h3>
              <p>Route enquiries, keep follow-ups organised and reduce repetitive inbox work.</p>
              <Link className="text-link" to="/solutions#lead">Learn more →</Link>
            </article>
            <article className="surface card cap-card reveal in">
              <div className="icon-box">⌘</div>
              <h3>CRM &amp; Data Connections</h3>
              <p>Keep records consistent when teams work across multiple business tools.</p>
              <Link className="text-link" to="/solutions#crm">Learn more →</Link>
            </article>
            <article className="surface card cap-card reveal in">
              <div className="icon-box">◎</div>
              <h3>AI Agents &amp; Assistance</h3>
              <p>Use bounded agents where they add value, with appropriate approvals and a way to hand work back.</p>
              <Link className="text-link" to="/solutions#agents">Learn more →</Link>
            </article>
          </div>
          <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', fontSize: '13px', color: 'var(--muted)' }}>
            <span>Explore also:</span>
            <Link to="/solutions#voice" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Voice Systems</Link> ·
            <Link to="/solutions#support" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Customer Support</Link> ·
            <Link to="/solutions#documents" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Document Workflows</Link> ·
            <Link to="/solutions#integrations" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Custom Integrations</Link>
          </div>
        </div>
      </section>

      {/* Section 04: Working method demonstration */}
      <section className="workflow-section section" id="how">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">HOW THE WORK GETS DONE</div>
              <h2>A process you can follow, from first request to final action.</h2>
            </div>
            <p>Every engagement begins with how the work happens today. The system is designed around that reality—not around a collection of tools.</p>
          </div>
          <div className="workflow-layout">
            <div className="step-list" role="tablist" aria-label="Process steps">
              {steps.map((st, i) => (
                <article
                  key={i}
                  className={`flow-step ${activeStep === i ? 'active' : ''}`}
                  onClick={() => setActiveStep(i)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveStep(i); } }}
                  tabIndex={0}
                  role="tab"
                  aria-selected={activeStep === i}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="n">{st.num}</div>
                  <div>
                    <h3>{st.title}</h3>
                    <p>{st.desc}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="flow-canvas">
              <div className="flow-caption">
                <span>Phase: {steps[activeStep].phase}</span>
                <span>step {steps[activeStep].num} active</span>
              </div>
              <div className="flow-stack">
                <article className={`flow-card ${activeStep === 0 ? 'highlight' : ''}`}>
                  <small>Step 01</small>
                  <strong>Understand process</strong>
                </article>
                <article className={`flow-card ${activeStep === 1 ? 'highlight' : ''}`}>
                  <small>Step 02</small>
                  <strong>Rules &amp; handoffs</strong>
                </article>
                <article className={`flow-card ${activeStep === 2 ? 'highlight' : ''}`}>
                  <small>Step 03</small>
                  <strong>Connect systems</strong>
                </article>
                <article className={`flow-card ${activeStep === 3 ? 'highlight' : ''}`}>
                  <small>Step 04</small>
                  <strong>Review &amp; improve</strong>
                </article>
              </div>
              <div className="flow-travel" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05: Current offering vs planned products */}
      <section className="section tight" id="offering">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">A PRACTICAL START</div>
              <h2>Start with the workflow you need today.</h2>
            </div>
            <p>XAIVON works on tailored implementations. As patterns prove useful across businesses, some may become reusable products. Until then, each system is scoped around the work it needs to perform.</p>
          </div>
          <div className="two-col" style={{ gap: '24px' }}>
            <article className="surface card" style={{ padding: '32px' }}>
              <span className="tag" style={{ background: 'var(--accent-soft)', color: 'var(--accent)', fontWeight: 700, padding: '4px 10px', borderRadius: '6px' }}>Available for consultation</span>
              <h3 style={{ marginTop: '16px', fontSize: '20px' }}>Tailored Implementations</h3>
              <p style={{ marginTop: '10px', color: 'var(--muted)', lineHeight: 1.6 }}>Workflow design, integrations, business automation and scoped agent implementations. Availability is confirmed during discovery.</p>
              <div style={{ marginTop: '24px' }}>
                <Link className="btn btn-primary" to="/contact">Discuss Your Workflow ↗</Link>
              </div>
            </article>

            <article className="surface card" style={{ padding: '32px' }}>
              <span className="tag" style={{ background: 'var(--bg-soft)', color: 'var(--muted)', fontWeight: 700, padding: '4px 10px', borderRadius: '6px' }}>Future product direction</span>
              <h3 style={{ marginTop: '16px', fontSize: '20px' }}>Platform &amp; Modules Roadmap</h3>
              <p style={{ marginTop: '10px', color: 'var(--muted)', lineHeight: 1.6 }}>Repeatable software modules and industry solutions are part of the roadmap. Roadmap items are not presented as currently available subscriptions.</p>
              <div style={{ marginTop: '24px' }}>
                <Link className="btn btn-secondary" to="/products">Explore Roadmap →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Section 06: Industries */}
      <section className="section" id="industries">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">WHERE IT APPLIES</div>
              <h2>One approach. Different operating realities.</h2>
            </div>
            <p>The principles are reusable. The actual workflow, rules and integrations are designed for each business.</p>
          </div>
          <div className="industry-grid">
            <Link className="industry-card current" to="/industries#logistics">
              <strong>Logistics &amp; Freight</strong>
              <span>Current focus</span>
              <b className="current-label">Current</b>
            </Link>
            <Link className="industry-card" to="/industries#real-estate">
              <strong>Real Estate</strong>
              <span>Possible applications</span>
            </Link>
            <Link className="industry-card" to="/industries#services">
              <strong>Customer Operations</strong>
              <span>Possible applications</span>
            </Link>
            <Link className="industry-card" to="/industries#services">
              <strong>Professional Services</strong>
              <span>Possible applications</span>
            </Link>
            <Link className="industry-card" to="/industries#more">
              <strong>Other Industries</strong>
              <span>Discuss a workflow</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 07: Work & Evidence */}
      <section className="section" id="proof">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">SHOW THE WORK</div>
              <h2>See how a connected workflow could work.</h2>
            </div>
            <p>This is an illustrative process—not a recording of a client system. A real implementation would be designed around your tools and approvals.</p>
          </div>
          <div className="evidence-grid">
            <article className="surface evidence-card">
              <span className="tag">Demonstration</span>
              <h3>Illustrative workflow</h3>
              <p>Textual walkthrough of an automated intake, validation, and CRM sync flow.</p>
              <div className="mock-screen">
                <div className="screen-toolbar"><i></i><i></i><i></i></div>
                <div className="screen-inner">
                  <div className="screen-title">Sample Automation State</div>
                  <div className="screen-flow">
                    <div className="screen-node">Inbound Email</div><div className="screen-arrow">→</div>
                    <div className="screen-node">Data Extract</div><div className="screen-arrow">→</div>
                    <div className="screen-node">Business Rules</div><div className="screen-arrow">→</div>
                    <div className="screen-node">CRM Record</div>
                  </div>
                </div>
              </div>
            </article>
            <div className="two-col" style={{ gap: '16px' }}>
              <article className="surface evidence-card">
                <span className="tag">Demonstration</span>
                <h3>System Walkthrough</h3>
                <p>Demonstrations are clearly labelled and explain system rules, exception handling, and human handoffs.</p>
                <div style={{ marginTop: '20px', padding: '16px', background: 'var(--bg-soft)', borderRadius: '10px', fontSize: '13px', color: 'var(--muted)' }}>
                  Demonstrations show system logic. Real customer project assets are published only with client approval.
                </div>
              </article>
              <article className="surface evidence-card">
                <span className="tag">Evidence standard</span>
                <h3>Truthful Documentation</h3>
                <p>We do not fabricate client logos, synthetic testimonials, or arbitrary outcome percentages.</p>
                <div style={{ marginTop: '20px' }}>
                  <span className="data-badge">Editorial Standard</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Section 08: Business impact / ROI estimator */}
      <section className="section" id="roi">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">PLAN WITH YOUR OWN NUMBERS</div>
              <h2>Estimate the time you might get back.</h2>
            </div>
            <p>Enter your team&apos;s workload and assumptions. The result is an illustration for planning—not a measured saving or a promised return.</p>
          </div>
          <div className="calculator">
            <div className="calc-grid">
              <div>
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', color: 'var(--muted)' }}>Enter your team metrics:</span>
                  <button
                    type="button"
                    onClick={handleLoadExample}
                    style={{
                      background: 'var(--bg-soft)',
                      border: '1px solid var(--line)',
                      borderRadius: '6px',
                      padding: '4px 10px',
                      fontSize: '12px',
                      cursor: 'pointer',
                      color: 'var(--ink)'
                    }}
                  >
                    Load an example
                  </button>
                </div>
                <div className="calc-inputs">
                  <div className="field">
                    <label>Team members involved</label>
                    <input
                      name="employees"
                      type="number"
                      min="0"
                      step="1"
                      placeholder="e.g. 5"
                      value={calcInputs.employees}
                      onChange={handleCalcChange}
                    />
                    <span className="hint">People performing this manual task</span>
                  </div>
                  <div className="field">
                    <label>Manual hours / person / week</label>
                    <input
                      name="hours"
                      type="number"
                      min="0"
                      step="0.5"
                      placeholder="e.g. 15"
                      value={calcInputs.hours}
                      onChange={handleCalcChange}
                    />
                  </div>
                  <div className="field">
                    <label>Hourly cost (loaded, USD)</label>
                    <input
                      name="rate"
                      type="number"
                      min="0"
                      step="1"
                      placeholder="e.g. 35"
                      value={calcInputs.rate}
                      onChange={handleCalcChange}
                    />
                  </div>
                  <div className="field">
                    <label>Estimated automation coverage (%)</label>
                    <input
                      name="coverage"
                      type="number"
                      min="0"
                      max="100"
                      step="5"
                      value={calcInputs.coverage}
                      onChange={handleCalcChange}
                    />
                  </div>
                  <div className="field">
                    <label>Working weeks / year</label>
                    <input
                      name="weeks"
                      type="number"
                      min="1"
                      max="53"
                      step="1"
                      value={calcInputs.weeks}
                      onChange={handleCalcChange}
                    />
                  </div>
                  <div className="field">
                    <label>Implementation cost (USD)</label>
                    <input
                      name="implementation"
                      type="number"
                      min="0"
                      step="100"
                      value={calcInputs.implementation}
                      onChange={handleCalcChange}
                    />
                  </div>
                  <div className="field full">
                    <label>Monthly ongoing cost (USD)</label>
                    <input
                      name="recurring"
                      type="number"
                      min="0"
                      step="50"
                      value={calcInputs.recurring}
                      onChange={handleCalcChange}
                    />
                  </div>
                </div>
                <p className="calc-disclaimer" style={{ marginTop: '20px' }}>
                  How it works: annual labor cost = employees × hours × rate × weeks. Gross estimate = labor cost × coverage %. Net benefit = gross minus implementation and ongoing costs. This model is for estimation only.
                </p>
              </div>
              <div className="calc-result">
                <div>
                  <div className="calc-kicker">Planning estimate (Net Benefit Model)</div>
                  {hasCalculated && current > 0 ? (
                    <>
                      <div className="calc-value">{currency.format(net)}</div>
                      <p className="note">Estimated net annual benefit after deducting implementation and ongoing costs. Not a measured saving or promised return.</p>
                    </>
                  ) : (
                    <>
                      <div className="calc-value" style={{ fontSize: '24px', opacity: 0.85, padding: '16px 0' }}>Add your numbers to see an estimate</div>
                      <p className="note">Enter your workload and costs on the left to calculate an illustrative projection.</p>
                    </>
                  )}
                </div>
                <div className="calc-meta">
                  <div className="meta-box"><span>Current annual labor cost</span><strong>{hasCalculated && current > 0 ? currency.format(current) : '—'}</strong></div>
                  <div className="meta-box"><span>Hours affected / year</span><strong>{hasCalculated && affected > 0 ? number.format(affected) : '—'}</strong></div>
                  <div className="meta-box"><span>Gross estimated benefit</span><strong>{hasCalculated && gross > 0 ? currency.format(gross) : '—'}</strong></div>
                  <div className="meta-box"><span>ROI estimate</span><strong>{hasCalculated && roi !== null ? `${number.format(roi)}%` : '—'}</strong></div>
                  <div className="meta-box"><span>Payback estimate</span><strong>{hasCalculated && payback !== null && Number.isFinite(payback) ? `${payback.toFixed(1)} mo` : '—'}</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 09: FAQ */}
      <section className="section" id="faq">
        <div className="container" style={{ maxWidth: '940px' }}>
          <div className="section-head">
            <div>
              <div className="eyebrow">FAQ</div>
              <h2>Straight answers.</h2>
            </div>
          </div>
          <div className="faq-list">
            {XAIVON_DATA.faq.map((f, i) => (
              <details
                className="faq reveal in"
                open={openFaq === i}
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenFaq(openFaq === i ? null : i);
                }}
              >
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Closing CTA */}
      <section className="cta">
        <div className="container" id="contact">
          <div className="eyebrow" style={{ color: '#ffe3d6' }}>START WITH THE PROBLEM</div>
          <h2>Tell us where the work slows down.</h2>
          <p>Show us the part of your operation that takes too much manual effort. We&apos;ll review whether automation makes sense and what a sensible first step could be.</p>
          <div className="hero-actions">
            <Link className="btn btn-light" to="/contact">Book an Assessment ↗</Link>
            <Link className="btn" style={{ background: 'rgba(255,255,255,.1)', borderColor: 'rgba(255,255,255,.35)', color: '#fff' }} to="/solutions">Explore Solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
