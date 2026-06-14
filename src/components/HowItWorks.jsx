import { Link } from 'react-router-dom';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import './HowItWorks.css';

const steps = [
  { num: '01', title: 'Email Intake', desc: 'Our AI reads incoming RFQ emails and extracts origin, destination, weight, commodity, and dates automatically.' },
  { num: '02', title: 'AI Processing', desc: 'Benchmarks against historical rates, DAT load boards, and market conditions to find the optimal price.' },
  { num: '03', title: 'Quote Delivered', desc: 'Generates a professional quote and sends it back — logged in your TMS with full audit trail.' },
];

export default function HowItWorks() {
  const ref = useStaggerAnimation();
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="section-header">
        <span className="badge">How It Works</span>
        <h2>From Email to Quote in 30 Seconds</h2>
        <p>Three simple steps. Fully autonomous. Zero manual intervention required.</p>
      </div>
      <div className="steps-grid" ref={ref}>
        {steps.map((s, i) => (
          <Link to="/services" className={`glass-card step-card scroll-fade-in delay-${i + 1}`} key={i}>
            <div className="step-number">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="card-cta">Explore capabilities →</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
