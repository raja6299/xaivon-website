import { Link } from 'react-router-dom';
import WorkflowPanel from './WorkflowPanel';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-background"></div>
      
      <div className="hero-content">
        {/* Left Column */}
        <div className="hero-copy-column">
          <div className="hero-overline hero-fade hero-fade-1">
            <span>START WITH THE WORKFLOW</span>
            <div className="overline-line"></div>
          </div>
          
          <h1 className="hero-headline hero-fade hero-fade-2">
            Building The<br/>
            AI Infrastructure<br/>
            Behind Modern Logistics.
          </h1>
          
          <p className="hero-subheadline hero-fade hero-fade-3">
            We design and deploy enterprise-grade AI systems that reduce operational costs, streamline workflows, and scale operations without increasing headcount.
          </p>
          
          <div className="hero-cta-row hero-fade hero-fade-4">
            <Link to="/contact" className="hero-btn hero-btn-primary">
              Book an Assessment <span className="btn-arrow">↗</span>
            </Link>
            <Link to="/solutions" className="hero-btn hero-btn-secondary">
              Explore solutions
            </Link>
          </div>
        </div>

        {/* Right Column: Workflow Animation Panel */}
        <div className="hero-visual-column hero-fade hero-fade-5">
          <WorkflowPanel />
        </div>
      </div>
    </section>
  );
}
