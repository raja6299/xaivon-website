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

          <div className={`legal-content reveal ${contentVisible ? 'visible' : ''}`} ref={contentRef}>

            <section>
              <h2>1. What Are Cookies</h2>
              <p>
                Cookies are small text files placed on your device by websites you visit. They are widely
                used to make websites function correctly and to provide information to website owners about
                how visitors use their sites. This Cookie Policy explains what cookies and similar
                technologies XAIVON uses on xaivon.com, why we use them, and how you can manage your
                preferences.
              </p>
            </section>

            <section>
              <h2>2. How We Use Cookies</h2>
              <p>
                XAIVON uses cookies in the following categories:
              </p>
              <ul>
                <li>
                  <strong>Consent storage:</strong> When you interact with our cookie consent banner,
                  your preference (accepted or declined) is stored locally on your device so that we
                  remember your choice on subsequent visits and do not repeat the consent prompt
                  unnecessarily.
                </li>
                <li>
                  <strong>Analytics cookies (consent-gated):</strong> We use Google Analytics 4 to
                  understand how visitors use our website — for example, which pages are visited most
                  frequently and how users navigate between sections. Analytics cookies are only activated
                  after you have provided consent through our cookie consent banner. If you decline
                  analytics cookies, Google Analytics is not initialised and no analytics data about your
                  session is collected.
                </li>
              </ul>
              <p>
                We do not use advertising cookies, retargeting cookies, or social media tracking cookies
                on this website.
              </p>
            </section>

            <section>
              <h2>3. Google Analytics 4</h2>
              <p>
                Where you have consented to analytics, this site uses Google Analytics 4, a web analytics
                service provided by Google LLC. Google Analytics 4 may set cookies to track session and
                interaction data. This information is transmitted to and stored by Google on servers which
                may be located outside your country of residence. Google may use this data to evaluate
                your use of the website and to compile reports on website activity. You can learn more
                about Google&rsquo;s data practices and opt-out options at{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google&rsquo;s Privacy Policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2>4. Managing Your Cookie Preferences</h2>
              <p>
                You can update your cookie preferences at any time by using the cookie consent banner
                that appears when you visit xaivon.com. You can also control cookies at the browser
                level:
              </p>
              <ul>
                <li>
                  Most browsers allow you to view, delete, and block cookies through their settings.
                  Consult your browser&rsquo;s help documentation for instructions specific to your
                  browser.
                </li>
                <li>
                  Blocking all cookies may impair certain website functionality. Declining analytics
                  cookies does not affect your ability to use the XAIVON website.
                </li>
              </ul>
            </section>

            <section>
              <h2>5. Changes to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in the technologies
                we use or in applicable law. The &ldquo;Last Updated&rdquo; date at the top of this page
                indicates when the policy was most recently revised. We encourage you to review this page
                periodically.
              </p>
            </section>

            <section>
              <h2>6. Contact &amp; Further Information</h2>
              <p>
                For broader information about how XAIVON processes personal data, including data collected
                through this website, please see our <Link to="/privacy-policy">Privacy Policy</Link>.
              </p>
              <p>
                If you have any questions about our use of cookies, please contact us at{' '}
                <a href="mailto:raja@xaivon.com">raja@xaivon.com</a>.
              </p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
