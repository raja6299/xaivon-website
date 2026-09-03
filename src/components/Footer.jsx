import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">XAIVON</div>
            <p>AI automation systems built around real business operations.</p>
          </div>
          <div>
            <h3>Company</h3>
            <Link to="/about#who">About</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about#future">Roadmap</Link>
          </div>
          <div>
            <h3>Explore</h3>
            <Link to="/solutions">Solutions</Link>
            <Link to="/products">Products</Link>
            <Link to="/industries">Industries</Link>
          </div>
          <div>
            <h3>Legal</h3>
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© {year} XAIVON</div>
          <div>No fabricated evidence</div>
        </div>
      </div>
    </footer>
  );
}
