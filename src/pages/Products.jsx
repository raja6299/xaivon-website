import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { XAIVON_DATA } from '../data/xaivonData';

export default function Products() {
  const productsMenu = XAIVON_DATA.navigation.primary.find(n => n.name === 'Products').dropdown.groups;

  return (
    <div className="products-page">
      <PageMeta 
        title="Products & Roadmap - XAIVON"
        description="Explore XAIVON's current AI products and our future roadmap for industry SaaS platforms."
        url="https://xaivon.com/products"
      />
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Product Layer</div>
          <h1>Current Foundation & Future SaaS</h1>
          <p>AI Chatbot, AI Agent, and Voice AI are part of the current product foundation. Industry SaaS and a unified platform remain roadmap concepts.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {productsMenu.map((group, idx) => (
            <div key={idx} style={{ marginBottom: '60px' }}>
              <div className="section-head" style={{ marginBottom: '30px' }}>
                <h2>{group.label}</h2>
              </div>
              <div className="three-col">
                {group.links.map((prod, i) => (
                  <article className="surface card reveal in" key={i} id={prod.path.split('#')[1]}>
                    <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{prod.name}</h3>
                    <p className="text-muted" style={{ fontSize: '14px', marginBottom: '20px' }}>
                      {group.label === 'Roadmap' 
                        ? 'Planned productization derived from validated workflows.' 
                        : 'Deployable AI infrastructure for your operations.'}
                    </p>
                    <Link className="btn btn-secondary btn-sm" to="/contact">
                      {group.label === 'Roadmap' ? 'Discuss roadmap' : 'Explore product'} ↗
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
