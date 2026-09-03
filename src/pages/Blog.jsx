import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import { BLOG_POSTS } from '../data/blogData';
import './Blog.css';

const posts = Object.entries(BLOG_POSTS).map(([id, data]) => ({ id, ...data }));

export default function Blog() {
  const ref = useStaggerAnimation('.scroll-fade-in');

  return (
    <div className="blog-page" ref={ref}>
      <PageMeta 
        title="Blog — AI Automation Insights"
        description="Latest insights, technical guides, and industry news on AI automation from XAIVON."
        url="https://xaivon.com/blog"
      />
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
              <span>•</span>
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
        <p style={{ color: 'var(--accent-platinum)', fontWeight: 600, marginTop: '2rem' }}>Newsletter coming soon.</p>
      </section>
    </div>
  );
}