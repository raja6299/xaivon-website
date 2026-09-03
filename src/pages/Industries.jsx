import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { XAIVON_DATA } from '../data/xaivonData';

export default function Industries() {
  const industries = XAIVON_DATA.navigation.primary.find(n => n.name === 'Industries').dropdown.groups[0].links;

  return (
    <div className="industries-page">
      <PageMeta 
        title="Industries - XAIVON"
        description="XAIVON builds automation for Logistics, Real Estate, Healthcare, Finance, and more."
        url="https://xaivon.com/industries"
      />
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Applications</div>
          <h1>One automation foundation. Different business environments.</h1>
          <p>Logistics is the current focus in XAIVON's execution plan. Other sectors are part of the planned expansion path as validated workflows accumulate.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="three-col">
            {industries.map((ind, i) => (
              <article className="surface card reveal in" key={i} id={ind.path.split('#')[1]} style={{ display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{ind.name}</h3>
                <p className="text-muted" style={{ fontSize: '14px', marginBottom: '20px', flex: 1 }}>
                  {ind.name === 'Logistics' 
                    ? 'Current active focus area. Automating quotes, emails, and tracking updates.' 
                    : 'Future application area based on proven automation principles.'}
                </p>
                <Link className="btn btn-secondary btn-sm" to="/contact" style={{ alignSelf: 'flex-start' }}>Discuss Use Cases ↗</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
