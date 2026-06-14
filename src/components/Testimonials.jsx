import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import './Testimonials.css';

const testimonials = [
  { quote: 'XAIVON cut our quote processing time by 90%. We went from 20 quotes a day to over 100 with the same team.', name: 'Michael Chen', title: 'Operations Director, Pacific Freight Solutions', initials: 'MC' },
  { quote: 'The ROI was immediate. Within the first week, we recovered the setup cost through faster quote turnaround.', name: 'Sarah Williams', title: 'VP Operations, Atlas Logistics Group', initials: 'SW' },
  { quote: 'Finally, an AI solution built specifically for freight brokers. It understands our language, our workflows, and our margins.', name: 'James Rodriguez', title: 'CEO, NorthStar 3PL', initials: 'JR' },
];

export default function Testimonials() {
  const ref = useStaggerAnimation();
  return (
    <section className="testimonials section-alt" id="testimonials">
      <div className="section-header">
        <span className="badge">Testimonials</span>
        <h2>What Our Clients Say</h2>
        <p>Real results from freight brokers who transformed their operations with XAIVON.</p>
      </div>
      <div className="testimonials-grid" ref={ref}>
        {testimonials.map((t, i) => (
          <div className={`glass-card testimonial-card scroll-fade-in delay-${i + 1}`} key={i}>
            <div className="quote-mark">"</div>
            <div className="stars">★★★★★</div>
            <p className="quote-text">"{t.quote}"</p>
            <div className="author">
              <div className="author-avatar">{t.initials}</div>
              <div className="author-info">
                <h4>{t.name}</h4>
                <span>{t.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
