import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { XAIVON_DATA } from '../data/xaivonData';

export default function Solutions() {
  const capabilities = XAIVON_DATA.navigation.primary.find(n => n.name === 'Solutions').dropdown.groups[0].links;

  return (
    <div className="solutions-page">
      <PageMeta 
        title="Solutions - XAIVON AI Capabilities"
        description="Explore XAIVON's AI workflow automation, lead generation, CRM automation, and AI agents."
        url="https://xaivon.com/solutions"
      />
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Capabilities</div>
          <h1>AI Workflow Automation</h1>
          <p>Convert repeatable processes into explicit, measurable workflow steps.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="four-col">
            {capabilities.map((cap, i) => (
              <article className="surface card reveal in" key={i} id={cap.path.split('#')[1]}>
                <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{cap.name}</h3>
                <p className="text-muted" style={{ fontSize: '14px', marginBottom: '20px' }}>
                  We design {cap.name.toLowerCase()} systems that fit directly into your operational environment.
                </p>
                <Link className="btn btn-secondary btn-sm" to="/contact">Discuss {cap.name} ↗</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
