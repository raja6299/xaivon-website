import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import PageMeta from '../components/PageMeta';
import { BLOG_POSTS } from '../data/blogData';
import './BlogPost.css';

export default function BlogPost() {
  const { id } = useParams();
  const post = BLOG_POSTS[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="blog-post-page">
      <PageMeta 
        title={post.title + " — XAIVON Blog"}
        description={post.excerpt}
        url={"https://xaivon.com/blog/" + id}
      />
      <div className="blog-post-container glass-panel">
        <Link to="/blog" className="back-link">? Back to Blog</Link>
        <article className="blog-post-content">
          <header className="blog-post-header">
            <span className="badge">{post.tag}</span>
            <h1>{post.title}</h1>
            <div className="blog-post-meta">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>
          <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </div>
  );
}
