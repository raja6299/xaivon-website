import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import Hero from '../components/Hero';
import { XAIVON_DATA } from '../data/xaivonData';

export default function Home() {
  const [productTab, setProductTab] = useState('automation');
  const productViews = {
    automation: { title: 'Workflow Control', description: 'Design the repeatable work, connect the systems, define rules, and keep human approval where judgment matters.', metrics: [['Workflows mapped','18'],['Automation coverage','72%'],['Human checkpoints','4']] },
    agents: { title: 'AI Agents', description: 'Use bounded agents with explicit tools, business rules and escalation paths rather than relying on a black-box prompt.', metrics: [['Tools connected','7'],['Tasks resolved','96%'],['Human checkpoints','4']] },
    intelligence: { title: 'Operational Intelligence', description: 'Surface workflow bottlenecks, failure points and measurable opportunities for the next automation cycle.', metrics: [['Signals tracked','42'],['Manual work reduced','31%'],['Time recovered','8.4h']] }
  };
  const activeProduct = productViews[productTab];

  const [calcInputs, setCalcInputs] = useState({
    employees: 5,
    hours: 16,
    rate: 35,
    coverage: 55,
    weeks: 52,
    implementation: 0,
    recurring: 0
  });

  const handleCalcChange = (e) => {
    const { name, value } = e.target;
    setCalcInputs(prev => ({ ...prev, [name]: Math.max(0, Number(value) || 0) }));
  };

  const current = calcInputs.employees * calcInputs.hours * calcInputs.rate * Math.max(1, calcInputs.weeks);
  const coverageFrac = Math.min(100, calcInputs.coverage) / 100;
  const affected = calcInputs.employees * calcInputs.hours * Math.max(1, calcInputs.weeks) * coverageFrac;
  const gross = current * coverageFrac;
  const annualRecurring = calcInputs.recurring * 12;
  const net = gross - annualRecurring - calcInputs.implementation;
  const investment = calcInputs.implementation + annualRecurring;
  const roi = investment > 0 ? (net / investment) * 100 : null;
  const monthlyBenefit = (gross - annualRecurring) / 12;
  const payback = (calcInputs.implementation > 0 && monthlyBenefit > 0) ? calcInputs.implementation / monthlyBenefit : null;

  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  const number = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <PageMeta 
        title="XAIVON - AI Infrastructure & Business Automation"
        description="XAIVON builds AI-powered automation, intelligent software and enterprise AI systems around real business workflows."
        url="https://xaivon.com"
      />
      
      <Hero />

      <section className="proof-strip">
        <div className="container">
          <div className="proof-row">
            <div className="proof"><strong>Current focus</strong><span>Logistics & freight is the first market, not the permanent boundary.</span></div>
            <div className="proof"><strong>Built around work</strong><span>Capabilities start with business processes, systems and bottlenecks.</span></div>
            <div className="proof"><strong>Transparent models</strong><span>Calculator outputs are explicitly based on the visitor's inputs.</span></div>
            <div className="proof"><strong>Evidence first</strong><span>No fabricated client logos, testimonials or outcomes.</span></div>
          </div>
        </div>
      </section>

      <section className="dark-section section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">The problem</div>
              <h2>Your team should not be the integration layer between every system.</h2>
            </div>
            <p>Repeated email work, manual data entry, slow follow-up and handoffs create friction in almost every operating environment. XAIVON applies the same automation discipline across departments and industries.</p>
          </div>
          <div className="problem-grid">
            <article className="surface problem-card">
              <h3>Repetitive communication</h3>
              <p>Requests, updates and follow-ups consume people even when the steps are predictable.</p>
            </article>
            <article className="surface problem-card">
              <h3>Disconnected systems</h3>
              <p>The same data is copied between CRM, inboxes, documents and operational tools.</p>
            </article>
            <article className="surface problem-card">
              <h3>Slow next actions</h3>
              <p>Work gets stuck when no one owns the next step or an exception is surfaced clearly.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">What XAIVON automates</div>
              <h2>Organized around business functions, not a single industry.</h2>
            </div>
            <p>The capability layer stays reusable. Industry-specific workflows sit on top of it?"so the same core system can serve different operating environments.</p>
          </div>
          <div className="four-col">
            <article className="surface card cap-card reveal in">
              <div className="icon-box">↗</div>
              <h3>Workflow Automation</h3>
              <p>Convert repeatable processes into explicit, measurable workflow steps.</p>
              <Link className="text-link" to="/solutions#workflow">Explore capability →</Link>
            </article>
            <article className="surface card cap-card reveal in">
              <div className="icon-box">@</div>
              <h3>Lead & Email</h3>
              <p>Classify requests, qualify leads, trigger follow-up and keep communication consistent.</p>
              <Link className="text-link" to="/solutions#lead">Explore capability →</Link>
            </article>
            <article className="surface card cap-card reveal in">
              <div className="icon-box">⌘</div>
              <h3>CRM Automation</h3>
              <p>Synchronize customer and pipeline information without repetitive copy-paste work.</p>
              <Link className="text-link" to="/solutions#crm">Explore capability →</Link>
            </article>
            <article className="surface card cap-card reveal in">
              <div className="icon-box">◎</div>
              <h3>AI Agents</h3>
              <p>Use bounded agents with tools, business rules and escalation paths where they add leverage.</p>
              <Link className="text-link" to="/solutions#agents">Explore capability →</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section tight" id="products">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Product layer</div>
              <h2>Use the same foundation now; productize what proves itself later.</h2>
            </div>
            <p>AI Chatbot, AI Agent and Voice AI are part of the current product foundation. Industry SaaS and a unified platform remain roadmap concepts.</p>
          </div>
          <div className="product-system surface reveal in">
            <div className="product-copy">
              <span className="tag">Current foundation</span>
              <h3>{activeProduct.title}</h3>
              <p>{activeProduct.description}</p>
              <div className="product-tabs" role="tablist" aria-label="Product demonstration">
                <button className="product-tab" aria-selected={productTab === 'automation'} onClick={() => setProductTab('automation')}>Automation</button>
                <button className="product-tab" aria-selected={productTab === 'agents'} onClick={() => setProductTab('agents')}>AI Agents</button>
                <button className="product-tab" aria-selected={productTab === 'intelligence'} onClick={() => setProductTab('intelligence')}>Intelligence</button>
              </div>
              <Link className="btn btn-secondary" to="/products" style={{marginTop: '20px'}}>Explore products ↗</Link>
            </div>
            <div className="product-ui">
              <div className="ui-top">
                <span>XAIVON / PRODUCT VIEW</span>
                <span className="ui-dots"><i></i><i></i><i></i></span>
              </div>
              <div className="ui-grid">
                {activeProduct.metrics.map(([label, val], i) => (
                  <div className={`ui-card ${i === 2 ? 'full' : ''}`} key={i}>
                    <small>{label}</small>
                    <strong>{val}</strong>
                    {i === 1 ? (
                      <div className="ui-bar"><span style={{width: val.replace('%','')+'%'}}></span></div>
                    ) : (
                      <div className="ui-state"><span>●</span> demo state</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="industries">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Industry applications</div>
              <h2>One automation foundation. Different business environments.</h2>
            </div>
            <p>Logistics is the current focus in XAIVON's execution plan. Other sectors are part of the planned expansion path as validated workflows accumulate.</p>
          </div>
          <div className="industry-grid">
            <Link className="industry-card current" to="/industries#logistics"><strong>Logistics</strong><span>Current focus</span><b className="current-label">Current</b></Link>
            <Link className="industry-card" to="/industries#real-estate"><strong>Real Estate</strong><span>Future</span></Link>
            <Link className="industry-card" to="/industries#healthcare"><strong>Healthcare</strong><span>Future</span></Link>
            <Link className="industry-card" to="/industries#finance"><strong>Finance</strong><span>Future</span></Link>
            <Link className="industry-card" to="/industries#insurance"><strong>Insurance</strong><span>Future</span></Link>
            <Link className="industry-card" to="/industries#more"><strong>More</strong><span>Future</span></Link>
          </div>
        </div>
      </section>

      <section className="workflow-section section" id="how">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">How the system works</div>
              <h2>Designed like a system, not a slideshow.</h2>
            </div>
            <p>The interface uses motion and structure to explain the workflow itself. That is the visual language we carry into production.</p>
          </div>
          <div className="workflow-layout">
            <div className="step-list">
              <article className="flow-step active">
                <div className="n">01</div>
                <div><h3>Discover</h3><p>Map a process, the systems involved and the handoffs that create drag.</p></div>
              </article>
              <article className="flow-step">
                <div className="n">02</div>
                <div><h3>Design</h3><p>Convert the process into measurable steps and decision points.</p></div>
              </article>
              <article className="flow-step">
                <div className="n">03</div>
                <div><h3>Build</h3><p>Connect models, tools, data and business rules into the workflow.</p></div>
              </article>
              <article className="flow-step">
                <div className="n">04</div>
                <div><h3>Monitor</h3><p>Track failures, exceptions, adoption and improvement opportunities.</p></div>
              </article>
            </div>
            <div className="flow-canvas">
              <div className="flow-caption"><span>Example workflow</span><span>human-controlled</span></div>
              <div className="flow-stack">
                <article className="flow-card"><small>Input</small><strong>New request</strong></article>
                <article className="flow-card highlight"><small>AI</small><strong>Extract + classify</strong></article>
                <article className="flow-card"><small>Rules</small><strong>Validate + route</strong></article>
                <article className="flow-card"><small>Action</small><strong>Sync + notify</strong></article>
              </div>
              <div className="flow-travel" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="proof">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Proof system</div>
              <h2>Show the work. Earn the trust.</h2>
            </div>
            <p>As real engagements accumulate, these slots should be replaced with verified screenshots, screen recordings, customer stories and measurable outcomes.</p>
          </div>
          <div className="evidence-grid">
            <article className="surface evidence-card">
              <span className="tag">Production asset slot</span>
              <h3>Workflow evidence</h3>
              <p>Replace this designed placeholder with a real automation screenshot, dashboard view or process walkthrough once the underlying asset exists.</p>
              <div className="mock-screen">
                <div className="screen-toolbar"><i></i><i></i><i></i></div>
                <div className="screen-inner">
                  <div className="screen-title">Demo / illustrative only</div>
                  <div className="screen-flow">
                    <div className="screen-node">Email</div><div className="screen-arrow">→</div>
                    <div className="screen-node">AI extract</div><div className="screen-arrow">→</div>
                    <div className="screen-node">Rules</div><div className="screen-arrow">→</div>
                    <div className="screen-node">CRM</div>
                  </div>
                </div>
              </div>
            </article>
            <div className="two-col" style={{gap: '16px'}}>
              <article className="surface evidence-card">
                <span className="tag">Video slot</span>
                <h3>60-second walkthrough</h3>
                <p>Use a real screen recording here. Avoid stock footage.</p>
                <div className="media-placeholder">
                  <button className="play-button" type="button" aria-label="Demo video placeholder">▶</button>
                </div>
              </article>
              <article className="surface evidence-card">
                <span className="tag">Case study slot</span>
                <h3>Verified outcome</h3>
                <p>Once available: customer, problem, workflow, measured outcome, timeframe and methodology.</p>
                <div style={{marginTop: '18px'}}><span className="data-badge">No fabricated result</span></div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="roi">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">ROI planner</div>
              <h2>Model the opportunity from your own inputs.</h2>
            </div>
            <p>No preset "real-world ROI". Every output below is derived from the values the visitor enters and is labelled as an estimate.</p>
          </div>
          <div className="calculator">
            <div className="calc-grid">
              <div>
                <div className="calc-inputs">
                  <div className="field">
                    <label>Employees involved <span className="data-badge">Example input</span></label>
                    <input name="employees" type="number" min="0" step="1" value={calcInputs.employees} onChange={handleCalcChange} />
                    <span className="hint">Replace with your actual team size.</span>
                  </div>
                  <div className="field">
                    <label>Manual hours / person / week</label>
                    <input name="hours" type="number" min="0" step="0.5" value={calcInputs.hours} onChange={handleCalcChange} />
                  </div>
                  <div className="field">
                    <label>Loaded hourly cost (USD)</label>
                    <input name="rate" type="number" min="0" step="0.01" value={calcInputs.rate} onChange={handleCalcChange} />
                  </div>
                  <div className="field">
                    <label>Estimated automation coverage (%)</label>
                    <input name="coverage" type="number" min="0" max="100" step="1" value={calcInputs.coverage} onChange={handleCalcChange} />
                  </div>
                  <div className="field">
                    <label>Working weeks / year</label>
                    <input name="weeks" type="number" min="1" max="53" step="1" value={calcInputs.weeks} onChange={handleCalcChange} />
                  </div>
                  <div className="field">
                    <label>Initial implementation cost (USD)</label>
                    <input name="implementation" type="number" min="0" step="100" value={calcInputs.implementation} onChange={handleCalcChange} />
                    <span className="hint">Leave 0 until a real proposal exists.</span>
                  </div>
                  <div className="field full">
                    <label>Ongoing monthly automation cost (USD)</label>
                    <input name="recurring" type="number" min="0" step="50" value={calcInputs.recurring} onChange={handleCalcChange} />
                    <span className="hint">Use an approved commercial quote; not a placeholder recommendation.</span>
                  </div>
                </div>
                <p className="calc-disclaimer" style={{marginTop:'20px'}}>Calculation logic: current annual labor cost = employees × hours × hourly cost × weeks. Gross estimated annual savings = current labor cost × coverage. Net annual benefit = gross savings − implementation − 12 × monthly recurring cost. ROI and payback are shown only when their denominators are valid.</p>
              </div>
              <div className="calc-result">
                <div>
                  <div className="calc-kicker">Based on your inputs</div>
                  <div className="calc-value">{currency.format(net)}</div>
                  <p className="note">Estimated net annual benefit. This is an illustrative model, not a verified XAIVON result.</p>
                </div>
                <div className="calc-meta">
                  <div className="meta-box"><span>Current annual labor cost</span><strong>{currency.format(current)}</strong></div>
                  <div className="meta-box"><span>Potentially affected hours / year</span><strong>{number.format(affected)}</strong></div>
                  <div className="meta-box"><span>Gross estimated annual savings</span><strong>{currency.format(gross)}</strong></div>
                  <div className="meta-box"><span>ROI</span><strong>{roi === null ? '—' : `${number.format(roi)}%`}</strong></div>
                  <div className="meta-box"><span>Payback period</span><strong>{payback === null || !Number.isFinite(payback) ? '—' : `${payback.toFixed(1)} mo`}</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="roadmap">
        <div className="container" id="future">
          <div className="eyebrow">Future direction</div>
          <h2>Start narrow. Build the platform from real problems.</h2>
          <p className="roadmap-intro">XAIVON's documented roadmap moves from AI foundation → AI Automation Agency (Logistics) → industry SaaS → unified AI platform → Enterprise AI Ecosystem.</p>
          <div className="roadmap-grid">
            <article className="roadmap-card current">
              <b>Phase 1?"2</b>
              <h3>Current execution</h3>
              <p>AI Chatbot, AI Agent, Voice AI and the AI Automation Agency, with logistics as the first market.</p>
            </article>
            <article className="roadmap-card">
              <b>Phase 3?"4</b>
              <h3>Industry products</h3>
              <p>Freight Broker SaaS and Freight Carrier SaaS derived from validated workflows.</p>
            </article>
            <article className="roadmap-card">
              <b>Phase 5?"6</b>
              <h3>Multi-industry + platform</h3>
              <p>Expand into other industry SaaS products and unify the product layer.</p>
            </article>
            <article className="roadmap-card">
              <b>Phase 7</b>
              <h3>Enterprise AI Ecosystem</h3>
              <p>A connected platform of AI, automation, knowledge, APIs, analytics and integrations.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container" style={{maxWidth: '940px'}}>
          <div className="section-head">
            <div>
              <div className="eyebrow">FAQ</div>
              <h2>Clear answers. No invented certainty.</h2>
            </div>
          </div>
          <div className="faq-list">
            {XAIVON_DATA.faq.map((f, i) => (
              <details className="faq reveal in" open={openFaq === i} key={i} onClick={(e) => { e.preventDefault(); setOpenFaq(openFaq === i ? null : i); }}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container" id="contact">
          <div className="eyebrow" style={{color: '#ffe3d6'}}>Start with the workflow</div>
          <h2>Find the work your team should stop doing manually.</h2>
          <p>In production this CTA connects to the real lead API, CRM, calendar and analytics events.</p>
          <div className="hero-actions">
            <Link className="btn btn-light" to="/contact">Book an Assessment ↗</Link>
            <Link className="btn" style={{background: 'rgba(255,255,255,.1)', borderColor: 'rgba(255,255,255,.35)', color: '#fff'}} to="/solutions">Explore Solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
