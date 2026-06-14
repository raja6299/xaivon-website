import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import './Blog.css';

const posts = [
  {
    id: 'how-ai-is-transforming-freight-2026',
    tag: 'AI AUTOMATION',
    title: 'How AI is Transforming Freight Brokerage in 2026',
    date: 'June 10, 2026',
    readTime: '5 min read',
    excerpt: 'The logistics industry is undergoing a massive transformation. Here is how AI is reshaping quote processing, rate benchmarking, and operational efficiency for freight brokers.',
  },
  {
    id: '5-ways-to-speed-up-quote-processing',
    tag: 'EFFICIENCY',
    title: '5 Ways to Speed Up Your Quote Processing',
    date: 'June 5, 2026',
    readTime: '4 min read',
    excerpt: 'Freight brokers process dozens of quote requests daily. These five strategies can dramatically reduce your response time and increase win rates.',
  },
  {
    id: 'real-cost-of-manual-quote-processing',
    tag: 'ROI',
    title: 'The Real Cost of Manual Quote Processing',
    date: 'May 28, 2026',
    readTime: '6 min read',
    excerpt: 'Manual quoting costs more than you think. We break down the hidden costs of slow response times, human errors, and missed opportunities.',
  },
  {
    id: 'what-is-agentic-ai-logistics',
    tag: 'TECHNOLOGY',
    title: 'What is Agentic AI and Why Does It Matter for Logistics?',
    date: 'May 20, 2026',
    readTime: '7 min read',
    excerpt: 'Agentic AI goes beyond chatbots. Learn how autonomous AI agents are revolutionizing back-office operations in the freight industry.',
  },
];

export default function Blog() {
  const ref = useStaggerAnimation('.scroll-fade-in');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="blog-page" ref={ref}>
      {/* Hero */}
      <section className="blog-hero" id="blog-hero">
        <div className="scroll-fade-in">
          <span className="badge">INSIGHTS</span>
          <h1 className="text-gradient">AI & Logistics Automation Insights</h1>
          <p className="blog-hero-desc">
            Expert perspectives on transforming freight operations with artificial intelligence.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <div className="blog-grid">
        {posts.map((post, i) => (
          <article className={`glass-card blog-card scroll-fade-in delay-${(i % 2) + 1}`} key={i}>
            <span className="blog-card-tag">{post.tag}</span>
            <h3>{post.title}</h3>
            <div className="blog-card-meta">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <p className="blog-card-excerpt">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="blog-card-link">Read More →</Link>
          </article>
        ))}
      </div>

      {/* Newsletter */}
      <section className="blog-newsletter glass-card scroll-fade-in" id="newsletter">
        <h2>Get Weekly <span className="text-gradient-brand">AI Insights</span></h2>
        <p>Join logistics leaders who get our weekly breakdown of AI automation trends, tips, and case studies.</p>
        {subscribed ? (
          <p style={{ color: 'var(--accent-platinum)', fontWeight: 600 }}>✓ Thank you! You're subscribed.</p>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              id="newsletter-email"
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        )}
      </section>
    </div>
  );
}
