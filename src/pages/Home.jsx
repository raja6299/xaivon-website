import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import Hero from '../components/Hero';
import { XAIVON_DATA } from '../data/xaivonData';

export default function Home() {
  const [productTab, setProductTab] = useState('automation');
  const productViews = {
    automation: { title: 'Workflow Control', description: 'Map out the repeatable work, connect the systems involved, define the rules, and keep human approval where judgment matters.', metrics: [['Workflow status','Ready'],['Steps automated','Example'],['Human review','Enabled']] },
    agents: { title: 'AI Agents', description: 'Bounded agents with explicit tools, business rules, and escalation paths — not a black-box prompt hoping for the best.', metrics: [['Agent status','Active'],['Tools connected','Example'],['Escalation','Configured']] },
    intelligence: { title: 'Operational Intelligence', description: 'See where workflows stall, where exceptions pile up, and where the next automation opportunity is.', metrics: [['Monitoring','Active'],['Bottlenecks','Surfaced'],['Next action','Queued']] }
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
        title="XAIVON — AI Automation for Business Operations"
        description="XAIVON builds AI-powered automation systems that handle repetitive work, connect disconnected tools, and keep humans in control of what matters."
        url="https://xaivon.com"
      />
      
      <Hero />

      <section className="proof-strip">
        <div className="container">
          <div className="proof-row">
            <div className="proof"><strong>Current focus</strong><span>Logistics and freight is the first market — not the permanent boundary.</span></div>
            <div className="proof"><strong>Built around work</strong><span>Every capability starts with an actual business process and its bottlenecks.</span></div>
            <div className="proof"><strong>Your numbers</strong><span>The ROI calculator uses only what you enter. No preset claims.</span></div>
            <div className="proof"><strong>No invented proof</strong><span>No fake client logos, testimonials, or outcome numbers.</span></div>
          </div>
        </div>
      </section>

      <section className="dark-section section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">The problem</div>
              <h2>Your team is the glue between every system.</h2>
            </div>
            <p>Someone copies data from an email into a CRM. Someone else follows up because a task slipped through. These handoffs add up fast — across any industry, any department.</p>
          </div>
          <div className="problem-grid">
            <article className="surface problem-card">
              <h3>Repetitive communication</h3>
              <p>Requests, status updates, and follow-ups eat time even when the steps are completely predictable.</p>
            </article>
            <article className="surface problem-card">
              <h3>Disconnected systems</h3>
              <p>The same information gets copied between your CRM, inbox, documents, and operations tools.</p>
            </article>
            <article className="surface problem-card">
              <h3>Stalled next steps</h3>
              <p>Work gets stuck when nobody owns the next action or an exception sits unnoticed.</p>
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
            <p>The core capabilities are reusable. Industry-specific workflows sit on top — so the same system can serve different operating environments.</p>
          </div>
          <div className="four-col">
            <article className="surface card cap-card reveal in">
              <div className="icon-box">↗</div>
              <h3>Workflow Automation</h3>
              <p>Turn repeatable processes into clear, measurable steps with defined rules and handoffs.</p>
              <Link className="text-link" to="/solutions#workflow">Learn more →</Link>
            </article>
            <article className="surface card cap-card reveal in">
              <div className="icon-box">@</div>
              <h3>Lead &amp; Email</h3>
              <p>Classify incoming requests, qualify leads, trigger follow-up, and keep communication consistent.</p>
              <Link className="text-link" to="/solutions#lead">Learn more →</Link>
            </article>
            <article className="surface card cap-card reveal in">
              <div className="icon-box">⌘</div>
              <h3>CRM Automation</h3>
              <p>Keep customer and pipeline data in sync without the copy-paste between systems.</p>
              <Link className="text-link" to="/solutions#crm">Learn more →</Link>
            </article>
            <article className="surface card cap-card reveal in">
              <div className="icon-box">◎</div>
              <h3>AI Agents</h3>
              <p>Bounded agents with defined tools, rules, and escalation paths — deployed where they create real use.</p>
              <Link className="text-link" to="/solutions#agents">Learn more →</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section tight" id="products">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Product layer</div>
              <h2>Use the working tools now. Productize what proves itself later.</h2>
            </div>
            <p>AI Chatbot, AI Agent, and Voice AI are current products. Industry-specific SaaS and a unified platform are on the roadmap — not yet live.</p>
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
              <Link className="btn btn-secondary" to="/products" style={{marginTop: '20px'}}>See all products ↗</Link>
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
                    <div className="ui-state"><span>●</span> illustrative</div>
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
            <p>Logistics is where XAIVON is delivering now. Other industries are planned as validated workflows accumulate.</p>
          </div>
          <div className="industry-grid">
            <Link className="industry-card current" to="/industries#logistics"><strong>Logistics</strong><span>Active</span><b className="current-label">Current</b></Link>
            <Link className="industry-card" to="/industries#real-estate"><strong>Real Estate</strong><span>Planned</span></Link>
            <Link className="industry-card" to="/industries#healthcare"><strong>Healthcare</strong><span>Planned</span></Link>
            <Link className="industry-card" to="/industries#finance"><strong>Finance</strong><span>Planned</span></Link>
            <Link className="industry-card" to="/industries#insurance"><strong>Insurance</strong><span>Planned</span></Link>
            <Link className="industry-card" to="/industries#more"><strong>More</strong><span>Planned</span></Link>
          </div>
        </div>
      </section>

      <section className="workflow-section section" id="how">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">How it works</div>
              <h2>Every automation follows the same four steps.</h2>
            </div>
            <p>Map the process, design the workflow, build the connections, then watch it run and improve.</p>
          </div>
          <div className="workflow-layout">
            <div className="step-list">
              <article className="flow-step active">
                <div className="n">01</div>
                <div><h3>Discover</h3><p>Map the process, the systems involved, and the handoffs that slow things down.</p></div>
              </article>
              <article className="flow-step">
                <div className="n">02</div>
                <div><h3>Design</h3><p>Turn the process into clear steps and decision points.</p></div>
              </article>
              <article className="flow-step">
                <div className="n">03</div>
                <div><h3>Build</h3><p>Connect the AI, tools, data sources, and business rules.</p></div>
              </article>
              <article className="flow-step">
                <div className="n">04</div>
                <div><h3>Monitor</h3><p>Track failures, exceptions, and improvement opportunities.</p></div>
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
              <div className="eyebrow">Proof</div>
              <h2>Show the work. Earn the trust.</h2>
            </div>
            <p>These slots are ready for real screenshots, recordings, and customer stories as engagements are completed.</p>
          </div>
          <div className="evidence-grid">
            <article className="surface evidence-card">
              <span className="tag">Placeholder</span>
              <h3>Workflow evidence</h3>
              <p>This will be replaced with a real automation screenshot or process walkthrough once the asset exists.</p>
              <div className="mock-screen">
                <div className="screen-toolbar"><i></i><i></i><i></i></div>
                <div className="screen-inner">
                  <div className="screen-title">Illustrative only</div>
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
                <p>A real screen recording will go here. No stock footage.</p>
                <div className="media-placeholder">
                  <button className="play-button" type="button" aria-label="Demo video placeholder">▶</button>
                </div>
              </article>
              <article className="surface evidence-card">
                <span className="tag">Case study slot</span>
                <h3>Verified outcome</h3>
                <p>Customer, problem, workflow, measured result, timeframe, and methodology — once available.</p>
                <div style={{marginTop: '18px'}}><span className="data-badge">No fabricated results</span></div>
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
              <h2>Estimate the savings from your own numbers.</h2>
            </div>
            <p>Every output below comes from what you type in. There are no preset results.</p>
          </div>
          <div className="calculator">
            <div className="calc-grid">
              <div>
                <div className="calc-inputs">
                  <div className="field">
                    <label>Employees involved <span className="data-badge">Your input</span></label>
                    <input name="employees" type="number" min="0" step="1" value={calcInputs.employees} onChange={handleCalcChange} />
                    <span className="hint">How many people do this work today?</span>
                  </div>
                  <div className="field">
                    <label>Manual hours / person / week</label>
                    <input name="hours" type="number" min="0" step="0.5" value={calcInputs.hours} onChange={handleCalcChange} />
                  </div>
                  <div className="field">
                    <label>Hourly cost (USD, loaded)</label>
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
                    <label>Implementation cost (USD)</label>
                    <input name="implementation" type="number" min="0" step="100" value={calcInputs.implementation} onChange={handleCalcChange} />
                    <span className="hint">Leave at 0 until you have a real quote.</span>
                  </div>
                  <div className="field full">
                    <label>Monthly automation cost (USD)</label>
                    <input name="recurring" type="number" min="0" step="50" value={calcInputs.recurring} onChange={handleCalcChange} />
                    <span className="hint">Use a real commercial quote, not a guess.</span>
                  </div>
                </div>
                <p className="calc-disclaimer" style={{marginTop:'20px'}}>How it works: annual labor cost = employees × hours × rate × weeks. Gross savings = labor cost × coverage %. Net benefit = gross savings minus implementation and recurring costs. ROI and payback show only when the numbers make sense.</p>
              </div>
              <div className="calc-result">
                <div>
                  <div className="calc-kicker">Based on your inputs</div>
                  <div className="calc-value">{currency.format(net)}</div>
                  <p className="note">Estimated net annual benefit. This is a planning model, not a verified XAIVON result.</p>
                </div>
                <div className="calc-meta">
                  <div className="meta-box"><span>Current annual labor cost</span><strong>{currency.format(current)}</strong></div>
                  <div className="meta-box"><span>Hours affected / year</span><strong>{number.format(affected)}</strong></div>
                  <div className="meta-box"><span>Gross estimated savings</span><strong>{currency.format(gross)}</strong></div>
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
          <h2>Start narrow. Build from real problems.</h2>
          <p className="roadmap-intro">XAIVON&apos;s roadmap: AI foundation → automation agency (logistics first) → industry SaaS → unified platform → enterprise ecosystem.</p>
          <div className="roadmap-grid">
            <article className="roadmap-card current">
              <b>Phase 1–2</b>
              <h3>Current execution</h3>
              <p>AI Chatbot, AI Agent, Voice AI, and the automation agency — with logistics as the first market.</p>
            </article>
            <article className="roadmap-card">
              <b>Phase 3–4</b>
              <h3>Industry products</h3>
              <p>Freight Broker SaaS and Freight Carrier SaaS, built from validated service workflows.</p>
            </article>
            <article className="roadmap-card">
              <b>Phase 5–6</b>
              <h3>Multi-industry + platform</h3>
              <p>Expand into other industries and unify the product layer into a single platform.</p>
            </article>
            <article className="roadmap-card">
              <b>Phase 7</b>
              <h3>Enterprise ecosystem</h3>
              <p>A connected platform of AI, automation, knowledge, APIs, analytics, and integrations.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container" style={{maxWidth: '940px'}}>
          <div className="section-head">
            <div>
              <div className="eyebrow">FAQ</div>
              <h2>Straight answers.</h2>
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
          <div className="eyebrow" style={{color: '#ffe3d6'}}>Start here</div>
          <h2>Find the work your team should stop doing by hand.</h2>
          <p>Walk us through a process. We will tell you what can be automated, what should stay manual, and what it would take.</p>
          <div className="hero-actions">
            <Link className="btn btn-light" to="/contact">Book an Assessment ↗</Link>
            <Link className="btn" style={{background: 'rgba(255,255,255,.1)', borderColor: 'rgba(255,255,255,.35)', color: '#fff'}} to="/solutions">Explore Solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
