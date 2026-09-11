import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageMeta from '../components/PageMeta';
import './LegalPage.css';

export default function CookiePolicy() {
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <>
      <PageMeta />
      <div className="legal-page">
        <div className="container">
          <div className="legal-header">
            <h1>Cookie Policy</h1>
            <p className="legal-updated">Last Updated: September 2026</p>
          </div>

          <div className={`legal-content reveal ${contentVisible ? 'in' : ''}`} ref={contentRef}>

            <section>
              <h2>1. What Cookies Are</h2>
              <p>Cookies are small text files placed on your device by websites you visit. They are widely used to ensure websites function correctly and to provide information to website owners about how visitors interact with the site.</p>
            </section>

            <section>
              <h2>2. What XAIVON Uses</h2>
              <p>Our website uses essential local storage to remember your cookie consent preferences, ensuring we do not repeatedly prompt you. We also use analytics cookies, which are strictly consent-gated. We do not use advertising pixels, retargeting systems, social tracking, or marketing cookies.</p>
            </section>

            <section>
              <h2>3. Consent Preferences</h2>
              <p>When you visit xaivon.com, we store your consent preference (accepted or declined) locally on your device. This allows us to respect your choice on subsequent visits. Essential website functionality is not affected by your consent decision.</p>
            </section>

            <section>
              <h2>4. Google Analytics 4</h2>
              <p>We use Google Analytics 4 to understand how users engage with our website. Analytics cookies are only deployed after you have provided explicit consent. If you decline, no analytics tracking is initialized and no data is collected by Google Analytics during your visit.</p>
            </section>

            <section>
              <h2>5. Managing Preferences</h2>
              <p>You can update or withdraw your consent at any time. To modify your choices regarding our consent-gated analytics, please interact with our <a href="#settings" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-cookie-settings')); }}>Cookie Settings</a>.</p>
            </section>

            <section>
              <h2>6. Browser Controls</h2>
              <p>In addition to our on-site controls, you can manage cookies at the browser level. Most web browsers allow you to view, block, or delete cookies through their settings. Please note that blocking all cookies, including essential ones, may affect the ability of websites to save your preferences.</p>
            </section>

            <section>
              <h2>7. Changes</h2>
              <p>We may update this Cookie Policy occasionally to reflect changes in our technical practices or legal requirements. The "Last Updated" date at the top of the policy indicates when revisions were made.</p>
            </section>

            <section>
              <h2>8. Contact</h2>
              <p>If you have any questions regarding our use of cookies, please contact us at:</p>
              <p><a href="mailto:raja@xaivon.com">raja@xaivon.com</a></p>
              <p>For more information on how we handle personal data, please read our <Link to="/privacy-policy">Privacy Policy</Link>.</p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
