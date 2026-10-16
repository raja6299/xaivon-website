import LegalDocumentLayout from '../components/legal/LegalDocumentLayout';

export default function CookiePolicy() {
  const handleOpenCookieSettings = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  };

  const toc = [
    { id: 'covers', title: '1. What this policy covers' },
    { id: 'cookies', title: '2. What storage items are' },
    { id: 'how', title: '3. How we use storage' },
    { id: 'firstparty', title: '4. First-party preferences' },
    { id: 'analytics', title: '5. Optional measurement' },
    { id: 'control', title: '6. Managing your preferences' },
    { id: 'thirdparty', title: '7. Third-party embeds' },
    { id: 'contact', title: '8. Updates and contact' },
  ];

  return (
    <LegalDocumentLayout
      title="Cookie Policy"
      purpose="The site remembers a small number of preferences. Optional analytics, where enabled, help us understand how the website is used. You can review your choice at any time."
      lastUpdated="October 15, 2026"
      toc={toc}
      actionSlot={
        <button
          type="button"
          onClick={handleOpenCookieSettings}
          className="btn btn-secondary btn-sm"
        >
          Manage Cookie Settings ↗
        </button>
      }
    >
      <section id="covers" className="legal-doc-section">
        <h2>1. What this policy covers</h2>
        <p>
          This policy explains how xaivon.com uses browser storage technologies, including cookies and HTML5 local storage, to maintain interface settings and respect your privacy choices.
        </p>
      </section>

      <section id="cookies" className="legal-doc-section">
        <h2>2. What storage items are</h2>
        <p>
          Cookies are small text records stored by your browser when navigating websites. Local storage functions similarly by retaining key-value state locally on your device without transmitting data in standard HTTP request headers.
        </p>
      </section>

      <section id="how" className="legal-doc-section">
        <h2>3. How we use storage</h2>
        <p>
          XAIVON maintains a strictly conservative storage footprint. We use local storage solely for essential user experience preferences (such as light or dark theme) and to remember whether you have accepted or declined optional analytics cookies.
        </p>
      </section>

      <section id="firstparty" className="legal-doc-section">
        <h2>4. First-party essential preferences</h2>
        <p>
          These browser storage items are strictly functional for interface state and do not track browsing behavior across third-party websites:
        </p>
        <ul>
          <li><strong>xaivon-theme:</strong> Retains your chosen colour mode (&lsquo;light&rsquo; or &lsquo;dark&rsquo;) across page reloads.</li>
          <li><strong>xaivon_cookie_consent:</strong> Stores your cookie preference decision (&lsquo;granted&rsquo; or &lsquo;denied&rsquo;) so you are not prompted repeatedly.</li>
          <li><strong>xaivon-pricing-currency:</strong> Remembers your preferred pricing display currency (&lsquo;USD&rsquo; or &lsquo;INR&rsquo;).</li>
        </ul>
      </section>

      <section id="analytics" className="legal-doc-section">
        <h2>5. Optional measurement &amp; telemetry architecture</h2>
        <p>
          We maintain a strictly tiered and transparent approach to site telemetry and analytics:
        </p>
        <ul>
          <li>
            <strong>Google Analytics 4 (Measurement ID: <code>G-FKYVMSFM5B</code>):</strong> Third-party visitor analytics. Gated strictly behind affirmative consent. The Google Tag Manager script is not downloaded or executed in your browser unless you click &lsquo;Accept&rsquo;. If you choose &lsquo;Reject&rsquo;, the script is never injected, no <code>_ga</code> cookies are set, and no tracking requests occur. If you previously accepted and subsequently revoke consent, persistent cookies are deleted, an official <code>ga-disable</code> flag is set, and the page refreshes to clear in-memory script state.
          </li>
          <li>
            <strong>Vercel Web Analytics:</strong> First-party aggregate page-view measurement. Strictly opt-in; events are automatically discarded before dispatch if consent has not been granted.
          </li>
          <li>
            <strong>Vercel Speed Insights:</strong> First-party technical telemetry monitoring Core Web Vitals (such as load latency and layout stability). Operates anonymously without cookies or personal identifiers to preserve site performance and reliability.
          </li>
        </ul>
      </section>

      <section id="control" className="legal-doc-section">
        <h2>6. Managing your preferences</h2>
        <p>
          You can inspect, modify, or revoke your consent at any time by clicking the Cookie Settings button in the website footer or using the control below. Clearing browser cookies and storage will reset preferences to the initial default state.
        </p>
        <div style={{ marginTop: '12px' }}>
          <button
            type="button"
            onClick={handleOpenCookieSettings}
            className="btn btn-secondary btn-sm"
          >
            Open Cookie Settings Modal ↗
          </button>
        </div>
      </section>

      <section id="thirdparty" className="legal-doc-section">
        <h2>7. Third-party embeds &amp; scheduling</h2>
        <p>
          Our contact page incorporates an optional meeting scheduling interface powered by Calendly. Navigating to the contact page renders the embedded scheduling interface, which may set functional third-party cookies necessary for Calendly to manage session state and coordinate scheduling. You may also schedule discussions directly via email without loading or interacting with the embed.
        </p>
      </section>

      <section id="contact" className="legal-doc-section">
        <h2>8. Updates and contact</h2>
        <p>
          If you have questions regarding our cookie practices, please contact <a href="mailto:raja@xaivon.com">raja@xaivon.com</a>. Operator: ADABHRA GROUP, West Champaran, Bihar, India.
        </p>
      </section>
    </LegalDocumentLayout>
  );
}
