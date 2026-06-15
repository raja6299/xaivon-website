import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './LegalPage.css';

export default function Terms() {
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.05 });

  useEffect(() => {
    document.title = 'Terms & Conditions | XAIVON';
  }, []);

  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header">
          <h1>Terms & Conditions</h1>
          <p className="legal-updated">Last Updated: June 15, 2026</p>
        </div>

        <div className={`legal-content reveal ${contentVisible ? 'visible' : ''}`} ref={contentRef}>
          <section>
            <h2>1. Agreement to Terms</h2>
            <p>These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and XAIVON ("Company", "we", "us", or "our"), concerning your access to and use of the xaivon.com website as well as any other media form, media channel, mobile website, or mobile application related, linked, or otherwise connected thereto.</p>
          </section>

          <section>
            <h2>2. Intellectual Property Rights</h2>
            <p>Unless otherwise indicated, the Site and our services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>
          </section>

          <section>
            <h2>3. User Representations</h2>
            <p>By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms and Conditions; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means without our consent; (4) you will not use the Site for any illegal or unauthorized purpose.</p>
          </section>

          <section>
            <h2>4. Disclaimer</h2>
            <p>The site and our services are provided on an as-is and as-available basis. You agree that your use of the site and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the site and your use thereof.</p>
          </section>

          <section>
            <h2>5. Contact Us</h2>
            <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:raja@xaivon.com">raja@xaivon.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
