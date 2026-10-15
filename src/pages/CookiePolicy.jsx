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
          These items are strictly necessary for core interface operation and do not track your browsing behavior across other websites:
        </p>
        <ul>
          <li><strong>xaivon-theme:</strong> Remembers your chosen colour theme (&lsquo;light&rsquo; or &lsquo;dark&rsquo;) across page reloads.</li>
          <li><strong>xaivon_cookie_consent:</strong> Stores your cookie consent decision (&lsquo;granted&rsquo; or &lsquo;denied&rsquo;) so you are not prompted on every page load.</li>
        </ul>
      </section>

      <section id="analytics" className="legal-doc-section">
        <h2>5. Optional measurement &amp; analytics</h2>
        <p>
          Optional measurement (Google Analytics 4, Measurement ID <code>G-FKYVMSFM5B</code>) is strictly opt-in. The analytics script is not downloaded or executed by your browser until you explicitly click &lsquo;Accept&rsquo; on our cookie banner. If you choose &lsquo;Reject&rsquo;, the script is never injected, no tracking cookies are set, and no analytics network traffic is generated.
        </p>
      </section>

      <section id="control" className="legal-doc-section">
        <h2>6. Managing your preferences</h2>
        <p>
          You can inspect, modify, or revoke your consent at any time by clicking the Cookie Settings control found in our footer and below. You may also clear stored preferences directly via your browser settings.
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
        <h2>7. Third-party embeds</h2>
        <p>
          Our contact page provides an optional meeting scheduling widget powered by Calendly. When interacting directly with the embedded widget, Calendly may set its own functional cookies necessary to coordinate scheduling.
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
