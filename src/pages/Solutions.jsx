import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

export default function Solutions() {
  const capabilities = [
    {
      id: 'workflow',
      title: 'Workflow Automation',
      desc: 'Turn repeatable tasks into a controlled process that moves information forward and makes exceptions visible.'
    },
    {
      id: 'lead',
      title: 'Lead & Email Automation',
      desc: 'Sort incoming enquiries, update records and keep follow-ups moving based on agreed business rules.'
    },
    {
      id: 'crm',
      title: 'CRM, Lead & Data Automation',
      desc: 'Connect customer, sales and operational information so teams do less copying between tools.'
    },
    {
      id: 'agents',
      title: 'AI Agents',
      desc: 'Add assistants to bounded tasks, with defined tool access, quality checks and clear escalation paths.'
    },
    {
      id: 'voice',
      title: 'Voice AI',
      desc: 'Explore call handling, routing and summaries when the required telephony, permissions and controls are available.'
    },
    {
      id: 'support',
      title: 'Chatbot & Customer Support',
      desc: 'Help people find answers, capture enquiries and reach a human when automation is not enough.'
    },
    {
      id: 'documents',
      title: 'Document & Business Process Automation',
      desc: 'Extract, check and route information from documents within a documented review process.'
    },
    {
      id: 'integrations',
      title: 'Custom Integrations',
      desc: 'Connect the software your team already uses, subject to available APIs, access and security requirements.'
    }
  ];

  return (
    <div className="solutions-page">
      <PageMeta />
      
      {/* Header */}
      <section className="page-hero" style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <div className="eyebrow">SOLUTIONS</div>
          <h1 style={{ marginTop: '12px', fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', lineHeight: 1.1 }}>
            Practical automation for the work behind your business.
          </h1>
          <p style={{ marginTop: '18px', maxWidth: '72ch', color: 'var(--muted)', fontSize: '18px', lineHeight: 1.6 }}>
            From a busy inbox to a disconnected CRM, we build workflows that bring routine steps, business rules and people into one manageable process.
          </p>
        </div>
      </section>

      {/* 3-Section Story */}
      <section className="section" style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="problem-grid">
            <article className="surface problem-card">
              <span className="eyebrow">STEP 1</span>
              <h3 style={{ marginTop: '8px' }}>Find the friction</h3>
              <p>We map where work gets repeated, delayed or lost between systems.</p>
            </article>
            <article className="surface problem-card">
              <span className="eyebrow">STEP 2</span>
              <h3 style={{ marginTop: '8px' }}>Choose the right solution</h3>
              <p>Sometimes that&apos;s a simple integration. Sometimes it needs document processing, an agent or a more involved workflow.</p>
            </article>
            <article className="surface problem-card">
              <span className="eyebrow">STEP 3</span>
              <h3 style={{ marginTop: '8px' }}>Make it dependable</h3>
              <p>Permissions, failure handling, approvals and support matter as much as the automation itself.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Capabilities Cards */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">CAPABILITY CATALOG</div>
              <h2>Core areas we scope and build.</h2>
            </div>
            <p>Every workflow is designed around real business rules, access limits, and escalation mechanisms.</p>
          </div>

          <div className="four-col" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))' }}>
            {capabilities.map((cap) => (
              <article className="surface card reveal in" key={cap.id} id={cap.id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>{cap.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {cap.desc}
                  </p>
                </div>
                <Link className="btn btn-secondary btn-sm" to="/contact" style={{ width: 'fit-content' }}>
                  Discuss this capability ↗
                </Link>
              </article>
            ))}
          </div>

          <div style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-soft)', borderRadius: '14px', border: '1px solid var(--line)', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6 }}>
              Every project starts with discovery. Capabilities shown here describe what XAIVON can scope and build; they are not a claim that every integration or industry template is already available.
            </p>
            <div style={{ marginTop: '16px' }}>
              <Link className="btn btn-primary" to="/contact">
                Discuss Your Workflow ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
