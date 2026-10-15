import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import './LegalPage.css';

export default function CookiePolicy() {
  const handleOpenCookieSettings = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  };

  return (
    <>
      <PageMeta />
      <div className="legal-page">
        <div className="container" style={{ maxWidth: '840px', padding: '60px 20px' }}>
          <div className="legal-header" style={{ marginBottom: '40px' }}>
            <span className="eyebrow">LEGAL</span>
            <h1 style={{ fontSize: 'clamp(2rem, 3vw, 2.6rem)', margin: '8px 0 12px' }}>Cookie Policy</h1>
            <p className="legal-updated" style={{ color: 'var(--muted)', fontSize: '14px' }}>
              Last updated: October 14, 2026
            </p>
          </div>

          <div className="legal-content" style={{ display: 'flex', flexDirection: 'column', gap: '32px', lineHeight: 1.7, color: 'var(--ink)' }}>
            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>1. What this policy covers</h2>
              <p>
                Cookies and similar browser storage can help a website remember choices or understand how it is used. This page explains the browser storage and optional analytics used by xaivon.com, as verified in our live implementation.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>2. Preferences needed to run the website</h2>
              <p>
                The website may store a small preference to remember the colour theme you selected and whether you accepted or declined optional analytics. These functional preferences do not require a marketing profile.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>3. Optional website analytics</h2>
              <p>
                If analytics tools are enabled, we use them to review overall website usage and improve navigation and content. Where consent is required, optional analytics should remain disabled until you choose to allow them. A rejected choice must be respected until you change it.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>4. Third-party tools</h2>
              <p>
                If you choose to use an embedded scheduling or chat service, that provider may set cookies or process information under its own notice. We identify providers that are actually in use and provide relevant links where possible.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>5. Your choice</h2>
              <p>
                You can accept or reject optional analytics without losing access to the website. You can reopen Cookie Settings at any time to change or withdraw your preference. You may also delete browser cookies and site data through your browser settings.
              </p>
              <div style={{ marginTop: '16px' }}>
                <button
                  type="button"
                  onClick={handleOpenCookieSettings}
                  className="btn btn-primary btn-sm"
                >
                  Manage Cookie Settings ↗
                </button>
              </div>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>6. How long settings last</h2>
              <p>
                We save your preference in browser storage so the same question is not repeated on every visit. If the storage is cleared, the website may ask again.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>7. Changes</h2>
              <p>
                We update this page when our use of cookies or analytics changes. The date at the top reflects the reviewed version.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>8. Contact</h2>
              <p>
                For questions about cookies or website privacy, contact <a href="mailto:raja@xaivon.com" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>raja@xaivon.com</a>. Also see our <Link to="/privacy-policy" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Privacy Policy</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
