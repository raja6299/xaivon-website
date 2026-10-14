import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

export default function Industries() {
  const industries = [
    {
      id: 'logistics',
      title: 'Logistics & Freight',
      tag: 'Current focus',
      desc: "Enquiries, follow-ups, rate information, dispatch handoffs and customer updates can create repetitive administrative work. XAIVON is developing and validating workflows for logistics operations; the details depend on each operator's systems."
    },
    {
      id: 'real-estate',
      title: 'Real Estate',
      tag: 'Potential applications',
      desc: 'Lead capture, reminders, appointment coordination and CRM updates are areas worth assessing when the business process and consent requirements are clear.'
    },
    {
      id: 'services',
      title: 'Professional & Customer Services',
      tag: 'Potential applications',
      desc: 'Routine requests, status updates, support questions and internal handoffs may benefit from controlled automation.'
    },
    {
      id: 'commerce',
      title: 'Commerce & Operations',
      tag: 'Potential applications',
      desc: 'Order enquiries, task routing, internal notifications and document handoffs can be reviewed against current tools and staff processes.'
    },
    {
      id: 'more',
      title: 'Other Business Environments',
      tag: 'Discuss a workflow',
      desc: 'If your team spends time moving information between systems, we can review the process without assuming a ready-made industry product exists.'
    }
  ];

  return (
    <div className="industries-page">
      <PageMeta />
      
      {/* Hero */}
      <section className="page-hero" style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <div className="eyebrow">INDUSTRIES</div>
          <h1 style={{ marginTop: '12px', fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', lineHeight: 1.1 }}>
            The work changes. The need for clear systems doesn&apos;t.
          </h1>
          <p style={{ marginTop: '18px', maxWidth: '72ch', color: 'var(--muted)', fontSize: '18px', lineHeight: 1.6 }}>
            Businesses run on different rules, teams and tools. We adapt the workflow to those details instead of promising that one ready-made agent works everywhere.
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">SECTORS &amp; APPLICATIONS</div>
              <h2>Operating Realities</h2>
            </div>
            <p>Every workflow is adapted to your existing tools and team responsibilities.</p>
          </div>

          <div className="three-col" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
            {industries.map((ind) => (
              <article className="surface card reveal in" key={ind.id} id={ind.id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span className="tag" style={{
                    background: ind.tag === 'Current focus' ? 'var(--accent-soft)' : 'var(--bg-soft)',
                    color: ind.tag === 'Current focus' ? 'var(--accent)' : 'var(--muted)',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '6px'
                  }}>
                    {ind.tag}
                  </span>
                  <h3 style={{ fontSize: '18px', marginTop: '14px', marginBottom: '10px' }}>{ind.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {ind.desc}
                  </p>
                </div>
                <Link className="btn btn-secondary btn-sm" to="/contact" style={{ width: 'fit-content' }}>
                  Tell Us About Your Process ↗
                </Link>
              </article>
            ))}
          </div>

          {/* Regulated Industries Caveat Section */}
          <div id="healthcare" style={{ marginTop: '40px' }}>
            <div id="finance" style={{ padding: '24px', background: 'var(--bg-soft)', borderRadius: '14px', border: '1px solid var(--line)' }}>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '15px' }}>Healthcare, Finance &amp; Regulated Sectors</h4>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6 }}>
                Regulated data, sector approvals, security and legal obligations require separate assessment. XAIVON does not claim healthcare/finance regulatory certification by default. Any work in sensitive sectors begins with a comprehensive compliance and risk review.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '36px', textAlign: 'center' }}>
            <Link className="btn btn-primary" to="/contact">
              Tell Us About Your Process ↗
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
