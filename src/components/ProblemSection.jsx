import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import './ProblemSection.css';

const problems = [
  { icon: '⏱️', title: 'Manual Quoting', desc: '30+ minutes per quote request. Your team processes 50–100 emails daily — that\'s 25–50 hours of manual work every single day.' },
  { icon: '📉', title: 'Lost Revenue', desc: 'Slow responses mean lost loads. By the time you quote, your competitor has already booked the freight.' },
  { icon: '🔄', title: 'Scaling Bottleneck', desc: 'Hiring more brokers is expensive. Your margins shrink while your workload grows exponentially.' },
];

export default function ProblemSection() {
  const ref = useStaggerAnimation();
  return (
    <section className="problem-section section-alt" id="problem">
      <div className="section-header">
        <span className="badge">The Problem</span>
        <h2>Your Team Is Drowning in Manual Quote Requests</h2>
        <p>Every day, freight brokers waste hours on repetitive tasks that AI can handle in seconds.</p>
      </div>
      <div className="problem-cards" ref={ref}>
        {problems.map((p, i) => (
          <div className={`glass-card problem-card scroll-fade-in delay-${i + 1}`} key={i}>
            <div className="icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
