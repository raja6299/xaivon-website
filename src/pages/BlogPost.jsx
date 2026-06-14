import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import './BlogPost.css';

const blogContent = {
  'how-ai-is-transforming-freight-2026': {
    tag: 'AI AUTOMATION',
    title: 'How AI is Transforming Freight Brokerage in 2026',
    date: 'June 10, 2026',
    readTime: '5 min read',
    content: (
      <>
        <p>The freight brokerage industry is shifting from manual workflows to intelligent automation. In 2026, AI is no longer a luxury—it's a requirement to stay competitive.</p>
        <h3>1. Instant Quote Generation</h3>
        <p>Previously, brokers spent 30+ minutes reading emails, checking load boards (like DAT), and calculating margins. Today, Agentic AI reads the incoming RFQ email, extracts the load details, checks market rates, and drafts a reply in <strong>under 30 seconds</strong>.</p>
        <h3>2. Margin Optimization</h3>
        <p>AI doesn't just guess the price. It analyzes historical data, weather patterns, and real-time lane capacity to suggest a rate that maximizes profit while remaining competitive enough to win the load.</p>
        <h3>3. 24/7 Operations</h3>
        <p>Freight doesn't sleep, but your brokers need to. AI agents monitor inboxes on weekends and nights, ensuring no quote request goes unanswered and no business is lost to a competitor who replied faster.</p>
        <p><strong>Conclusion:</strong> AI won't replace human relationships in freight, but it will handle the repetitive data entry. Brokers who adopt AI will process 10x more volume with the same headcount.</p>
      </>
    )
  },
  '5-ways-to-speed-up-quote-processing': {
    tag: 'EFFICIENCY',
    title: '5 Ways to Speed Up Your Quote Processing',
    date: 'June 5, 2026',
    readTime: '4 min read',
    content: (
      <>
        <p>In logistics, the first to respond often wins the freight. If you're taking more than 15 minutes to reply to an RFQ, you're losing money. Here are 5 ways to fix that.</p>
        <h3>1. Automate Email Parsing</h3>
        <p>Stop copy-pasting origins and destinations from emails into your TMS. Use AI to automatically extract this data and populate your quote fields instantly.</p>
        <h3>2. Build a Centralized Rate Database</h3>
        <p>Don't rely on sticky notes or Excel sheets. Ensure your team has immediate access to historical lane data within one unified system.</p>
        <h3>3. Use Pre-Built Templates</h3>
        <p>Standardize your email replies. Don't type out a custom message for every quote. Use dynamic templates that automatically insert the rate and lane details.</p>
        <h3>4. Eliminate Double Data Entry</h3>
        <p>If your team has to enter the same load info into an email, the CRM, and the TMS, you have a broken workflow. Integrate your tools so data flows automatically.</p>
        <h3>5. Adopt QuoteFlow AI</h3>
        <p>The ultimate speed hack is removing the human from the data-entry loop completely. Tools like XAIVON's QuoteFlow AI can process the entire quote cycle autonomously.</p>
      </>
    )
  },
  'real-cost-of-manual-quote-processing': {
    tag: 'ROI',
    title: 'The Real Cost of Manual Quote Processing',
    date: 'May 28, 2026',
    readTime: '6 min read',
    content: (
      <>
        <p>Most brokerages only calculate the hourly rate of their brokers when thinking about the cost of manual work. However, the true cost is much higher.</p>
        <h3>The Hidden Costs</h3>
        <ul>
          <li><strong>Missed Opportunities:</strong> If you receive 100 quote requests a day but your team can only process 50, you are throwing away 50 potential deals.</li>
          <li><strong>Human Error:</strong> A typo in a quote (e.g., $1,200 instead of $2,100) can completely wipe out the profit margin for a whole week of work.</li>
          <li><strong>Broker Burnout:</strong> Highly skilled brokers hate data entry. Making them act as human calculators leads to high turnover and expensive hiring costs.</li>
        </ul>
        <h3>The ROI of Automation</h3>
        <p>By automating quote processing, a brokerage spending $100,000 a year on manual quoting tasks can reduce that cost by 90%. More importantly, the ability to quote 100% of incoming RFQs leads to a direct increase in top-line revenue.</p>
      </>
    )
  },
  'what-is-agentic-ai-logistics': {
    tag: 'TECHNOLOGY',
    title: 'What is Agentic AI and Why Does It Matter for Logistics?',
    date: 'May 20, 2026',
    readTime: '7 min read',
    content: (
      <>
        <p>You've heard of ChatGPT, which is a conversational AI. It answers questions when you prompt it. <strong>Agentic AI</strong> is different. It doesn't just talk—it acts.</p>
        <h3>How Agentic AI Works</h3>
        <p>An AI Agent is given a goal (e.g., "Reply to this customer with a profitable freight quote"). The Agent then autonomously breaks down the steps:</p>
        <ol>
          <li>Read the email and understand the request.</li>
          <li>Log into the TMS via API to check historical rates.</li>
          <li>Check a live load board for current capacity.</li>
          <li>Calculate the optimal margin.</li>
          <li>Draft and send the reply email.</li>
        </ol>
        <h3>Why Logistics Needs It</h3>
        <p>Logistics is full of multi-step, rules-based tasks that require connecting multiple software systems (Email, TMS, Load Boards). Agentic AI acts as the "glue" that connects these systems autonomously, completely removing the need for manual data entry and screen-switching.</p>
      </>
    )
  }
};

export default function BlogPost() {
  const { id } = useParams();
  const post = blogContent[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="blog-post-page not-found">
        <div className="blog-post-container">
          <h1>Post Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn btn-primary" style={{ marginTop: '2rem' }}>← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <div className="blog-post-container glass-card">
        <Link to="/blog" className="blog-back-link">← Back to Insights</Link>
        
        <div className="blog-post-header">
          <span className="blog-card-tag">{post.tag}</span>
          <h1>{post.title}</h1>
          <div className="blog-card-meta">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="blog-post-content">
          {post.content}
        </div>

        <div className="blog-post-footer">
          <div className="blog-cta glass-card">
            <h3>Ready to automate your quotes?</h3>
            <p>See how QuoteFlow AI can process your freight quotes in under 30 seconds.</p>
            <Link to="/contact" className="btn btn-primary">Book a Discovery Call</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
