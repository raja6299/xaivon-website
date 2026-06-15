import { useScrollReveal } from '../hooks/useScrollReveal';
import './HowItWorks.css';

const steps = [
  {
    num: 1,
    title: 'Discovery',
    desc: 'We analyze your current operations, identify bottlenecks, and map out your critical workflows.',
  },
  {
    num: 2,
    title: 'Strategy',
    desc: 'We design a comprehensive AI automation roadmap tailored to your specific infrastructure and industry requirements.',
  },
  {
    num: 3,
    title: 'Build',
    desc: 'We develop, integrate, and deploy resilient AI systems across your existing operational stack.',
  },
  {
    num: 4,
    title: 'Automate',
    desc: 'Your automated systems go live, systematically eliminating manual data entry and repetitive workflows.',
  },
  {
    num: 5,
    title: 'Optimize',
    desc: 'We continuously monitor data flows and system performance to maximize operational efficiency.',
  },
  {
    num: 6,
    title: 'Scale',
    desc: 'Expand your AI infrastructure across new departments as your organization\'s capacity grows.',
  },
];

function TimelineStep({ step, index }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });
  const isEven = index % 2 === 0;
  const revealClass = isEven ? 'reveal-left' : 'reveal-right';
  const delayClass = `delay-${(index % 8) + 1}`;

  return (
    <div
      ref={ref}
      className={`hiw-timeline-item ${isEven ? 'hiw-item-left' : 'hiw-item-right'}`}
    >
      {/* Step number circle on the timeline */}
      <div className={`hiw-step-circle ${isVisible ? 'hiw-circle-visible' : ''}`}>
        <span className="hiw-step-num">{step.num}</span>
      </div>

      {/* Connecting dot */}
      <div className={`hiw-connector-dot ${isVisible ? 'hiw-dot-visible' : ''}`} />

      {/* Card */}
      <div className={`glass-card hiw-step-card ${revealClass} ${delayClass} ${isVisible ? 'visible' : ''}`}>
        <div className="hiw-card-inner">
          <span className="hiw-card-number">0{step.num}</span>
          <h3 className="hiw-card-title">{step.title}</h3>
          <p className="hiw-card-desc">{step.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [lineRef, lineVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="section hiw-section" id="how-it-works">
      <div className="container">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="badge">
            <span className="badge-dot" />
            Our Process
          </span>
          <h2>How We Build Your AI Infrastructure</h2>
          <p>
            A systematic methodology for integrating AI into enterprise operations.
          </p>
        </div>

        {/* Timeline */}
        <div className="hiw-timeline" ref={lineRef}>
          {/* Central vertical line */}
          <div
            className={`hiw-timeline-line ${lineVisible ? 'hiw-line-draw' : ''}`}
            aria-hidden="true"
          />

          {/* Steps */}
          {steps.map((step, index) => (
            <TimelineStep key={step.num} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
