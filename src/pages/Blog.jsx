import { Link } from 'react-router-dom';
import {  useState , useEffect } from 'react';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import './Blog.css';

const posts = [
  {
    id: 'ai-automation-enterprise-infrastructure',
    tag: 'AI AUTOMATION',
    title: 'How AI Automation is Rewiring Enterprise Infrastructure',
    date: 'July 15, 2026',
    readTime: '6 min read',
    excerpt: 'Explore how top-tier organizations are moving beyond simple chatbots to fully integrated, autonomous operational systems.',
  },
  {
    id: 'logistics-automation-tms-integration',
    tag: 'LOGISTICS AUTOMATION',
    title: 'Integrating AI with Legacy TMS Systems',
    date: 'July 10, 2026',
    readTime: '5 min read',
    excerpt: 'The logistics industry relies heavily on legacy software. Learn the technical approach to bridging AI agents with older TMS databases.',
  },
  {
    id: 'freight-operations-scaling-without-headcount',
    tag: 'FREIGHT TECHNOLOGY',
    title: 'Scaling Freight Operations Without Adding Headcount',
    date: 'July 5, 2026',
    readTime: '7 min read',
    excerpt: 'Discover the exact workflows that high-volume brokerages are automating to scale capacity without increasing operational overhead.',
  },
  {
    id: 'business-systems-ai-audits',
    tag: 'BUSINESS PROCESS AUTOMATION',
    title: 'Conducting an AI Audit on Your Business Systems',
    date: 'June 28, 2026',
    readTime: '8 min read',
    excerpt: 'A step-by-step guide to evaluating your existing software stack and identifying the highest ROI opportunities for automation.',
  },
  {
    id: 'crm-automation-lead-management',
    tag: 'CRM SYSTEMS',
    title: 'Automating Lead Routing and CRM Data Entry',
    date: 'June 20, 2026',
    readTime: '5 min read',
    excerpt: 'How outbound and inbound call centers are utilizing low-latency AI to update CRMs instantly, without human intervention.',
  }
];

export default function Blog() {

  useEffect(() => {
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', 'https://xaivon.com' + window.location.pathname);
    return () => {
      if (link && link.parentNode) link.parentNode.removeChild(link);
    };
  }, []);

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
