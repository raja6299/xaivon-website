import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

export default function Products() {
  const foundationProducts = [
    {
      id: 'chatbot',
      title: 'Chat and Support Systems',
      desc: 'Knowledge-based support and enquiry workflows, designed for the specific business and channels involved.',
      status: 'Implementation capability'
    },
    {
      id: 'agent',
      title: 'Operational Agents',
      desc: 'Scoped task assistance with clear permissions, actions and human review.',
      status: 'Implementation capability'
    },
    {
      id: 'voice',
      title: 'Voice Operations',
      desc: 'Call-handling workflows designed around telephony requirements, consent, escalation and business rules.',
      status: 'Implementation capability / configuration-dependent'
    }
  ];

  const roadmapProducts = [
    {
      id: 'logistics-saas',
      title: 'Logistics Workflow Modules',
      desc: 'Reusable components for broker, carrier and dispatch operations, informed by validated delivery work.',
      status: 'Planned / Roadmap'
    },
    {
      id: 'industry-saas',
      title: 'Industry-Specific Automation Suites',
      desc: 'Potential modules for other business environments, subject to customer demand and validation.',
      status: 'Planned / Roadmap'
    },
    {
      id: 'roadmap',
      title: 'Connected Operations Layer',
      desc: 'A longer-term direction for shared integrations, workflow control and visibility.',
      status: 'Planned / Roadmap'
    }
  ];

  return (
    <div className="products-page">
      <PageMeta />

      {/* Hero */}
      <section className="page-hero" style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <div className="eyebrow">PRODUCTS &amp; ROADMAP</div>
          <h1 style={{ marginTop: '12px', fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', lineHeight: 1.1 }}>
            From one useful workflow to reusable business software.
          </h1>
          <p style={{ marginTop: '18px', maxWidth: '72ch', color: 'var(--muted)', fontSize: '18px', lineHeight: 1.6 }}>
            Our current work focuses on tailored implementations. Over time, well-tested components may become products that businesses can use more broadly.
          </p>
          <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link className="btn btn-primary" to="/contact">Talk About a Current Need ↗</Link>
            <Link className="btn btn-secondary" to="/solutions">See Solutions</Link>
          </div>
        </div>
      </section>

      {/* Current Foundation */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">CURRENT FOUNDATION</div>
              <h2>Implementation Capabilities</h2>
            </div>
            <p>Components we scope and deploy directly within customer environments. These are tailored systems, not self-serve subscriptions.</p>
          </div>

          <div className="three-col">
            {foundationProducts.map((prod) => (
              <article className="surface card reveal in" key={prod.id} id={prod.id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span className="tag" style={{ background: 'var(--accent-soft)', color: 'var(--accent)', fontWeight: 700, padding: '4px 10px', borderRadius: '6px' }}>
                    {prod.status}
                  </span>
                  <h3 style={{ fontSize: '18px', marginTop: '14px', marginBottom: '10px' }}>{prod.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {prod.desc}
                  </p>
                </div>
                <Link className="btn btn-secondary btn-sm" to="/contact" style={{ width: 'fit-content' }}>
                  Discuss requirement ↗
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Planned Roadmap */}
      <section className="section" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">FUTURE DIRECTION</div>
              <h2>Planned Roadmap Modules</h2>
            </div>
            <p>Repeatable software modules informed by validated client implementations. Roadmap items are not presented as currently available subscriptions.</p>
          </div>

          <div className="three-col">
            {roadmapProducts.map((prod) => (
              <article className="surface card reveal in" key={prod.id} id={prod.id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span className="tag" style={{ background: 'var(--bg)', color: 'var(--muted)', fontWeight: 700, padding: '4px 10px', borderRadius: '6px' }}>
                    {prod.status}
                  </span>
                  <h3 style={{ fontSize: '18px', marginTop: '14px', marginBottom: '10px' }}>{prod.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {prod.desc}
                  </p>
                </div>
                <Link className="btn btn-secondary btn-sm" to="/contact" style={{ width: 'fit-content' }}>
                  Discuss future direction ↗
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
