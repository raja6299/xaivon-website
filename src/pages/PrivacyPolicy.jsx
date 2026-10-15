import LegalDocumentLayout from '../components/legal/LegalDocumentLayout';

export default function PrivacyPolicy() {
  const handleOpenCookieSettings = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  };

  const toc = [
    { id: 'who', title: '1. Who operates this website' },
    { id: 'data', title: '2. Information you choose to provide' },
    { id: 'technical', title: '3. Technical and usage information' },
    { id: 'purpose', title: '4. Why we use information' },
    { id: 'analytics', title: '5. Analytics and your choice' },
    { id: 'services', title: '6. Infrastructure & processors' },
    { id: 'sharing', title: '7. Sharing information' },
    { id: 'storage', title: '8. Storage and retention' },
    { id: 'safeguarding', title: '9. Safeguarding information' },
    { id: 'rights', title: '10. Your requests and choices' },
    { id: 'links', title: '11. Links and external services' },
    { id: 'children', title: '12. Children' },
    { id: 'international', title: '13. International processing' },
    { id: 'changes', title: '14. Changes to this policy' },
    { id: 'contact', title: '15. Contact for privacy requests' },
  ];

  return (
    <LegalDocumentLayout
      title="Privacy Policy"
      purpose="This policy explains what information XAIVON receives when you use our website, contact us or request an assessment, and how that information is handled."
      lastUpdated="October 15, 2026"
      toc={toc}
      actionSlot={
        <button
          type="button"
          onClick={handleOpenCookieSettings}
          className="btn btn-secondary btn-sm"
        >
          Open Cookie Settings ↗
        </button>
      }
    >
      <section id="who" className="legal-doc-section">
        <h2>1. Who operates this website</h2>
        <p>
          XAIVON is a commercial brand operated by ADABHRA GROUP, a sole proprietorship registered in India, with its proprietor Raja Babu. This policy covers personal information received through xaivon.com, direct contact forms, assessment requests, and optional site features. In this document, &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to the operator of XAIVON.
        </p>
      </section>

      <section id="data" className="legal-doc-section">
        <h2>2. Information you choose to provide</h2>
        <p>
          When you submit an enquiry or assessment request, we collect your name, business email address, company name, website URL, and the project notes you submit. If you choose to schedule a conversation via our third-party scheduling embed, booking details are collected to arrange that call. We ask that you do not transmit passwords, payment card data, authentication keys, or unrelated confidential records through our general web forms.
        </p>
      </section>

      <section id="technical" className="legal-doc-section">
        <h2>3. Technical and usage information</h2>
        <p>
          To maintain security, routing, and reliable delivery, our hosting and edge services automatically process request metadata, including IP addresses, browser agent strings, request paths, timestamps, and error traces. Our website also stores basic local preferences, specifically your colour theme choice and cookie consent status.
        </p>
      </section>

      <section id="purpose" className="legal-doc-section">
        <h2>4. Why we use information</h2>
        <p>
          Information submitted through our website is used strictly to evaluate your operational requirements, respond to enquiries, formulate project proposals, coordinate scheduled strategy calls, and protect the infrastructure from abuse. General web enquiries are never added to bulk marketing lists.
        </p>
      </section>

      <section id="analytics" className="legal-doc-section">
        <h2>5. Analytics and your choice</h2>
        <p>
          Optional measurement assists us in understanding page navigation and identifying technical barriers. Optional analytics (Google Analytics 4) are strictly opt-in: the measurement script is not loaded into your browser unless you click &lsquo;Accept&rsquo; on our cookie banner. If you choose &lsquo;Reject&rsquo;, no analytics scripts are executed and no tracking cookies are created. You have the right to modify your preferences at any time.
        </p>
        <div style={{ marginTop: '12px' }}>
          <button
            type="button"
            onClick={handleOpenCookieSettings}
            className="btn btn-secondary btn-sm"
          >
            Manage Cookie Preferences ↗
          </button>
        </div>
      </section>

      <section id="services" className="legal-doc-section">
        <h2>6. Infrastructure &amp; processors</h2>
        <p>
          We rely on reputable technical service providers to maintain website availability, deliver notifications, and enforce security policies:
        </p>
        <ul>
          <li><strong>Vercel:</strong> Static site hosting, serverless execution, and edge routing.</li>
          <li><strong>Resend:</strong> Secure transactional routing of enquiry submissions.</li>
          <li><strong>Upstash Redis:</strong> API abuse prevention and IP-based rate limiting.</li>
          <li><strong>Calendly:</strong> Optional meeting scheduling widget.</li>
          <li><strong>Google Analytics:</strong> Optional consent-gated usage analysis.</li>
        </ul>
      </section>

      <section id="sharing" className="legal-doc-section">
        <h2>7. Sharing information</h2>
        <p>
          We do not sell, rent, or publicly trade contact form information. Data is disclosed only to designated infrastructure providers performing operational tasks under our instruction, or where disclosure is mandatory under applicable legal process.
        </p>
      </section>

      <section id="storage" className="legal-doc-section">
        <h2>8. Storage and retention</h2>
        <p>
          Enquiry records and correspondence are retained only for as long as needed to fulfill the inquiry, maintain business correspondence, or comply with statutory accounting and tax regulations. You may enquire about specific record retention periods using our contact channels.
        </p>
      </section>

      <section id="safeguarding" className="legal-doc-section">
        <h2>9. Safeguarding information</h2>
        <p>
          We implement proportional technical safeguards, including HTTPS transport encryption, restricted administrative access, and isolated serverless processing. While these measures protect routine communications, no internet transmission is completely immune to risk.
        </p>
      </section>

      <section id="rights" className="legal-doc-section">
        <h2>10. Your requests and choices</h2>
        <p>
          Depending on your jurisdiction and applicable data protection legislation—including India&rsquo;s Digital Personal Data Protection Act, 2023 (DPDP Act) and the notified Digital Personal Data Protection Rules, 2025, operating under their phased commencement provisions—you may have specific statutory rights as a Data Principal. These include the right to access a summary of personal data processed, request correction or erasure of incomplete or inaccurate data, access grievance redressal, and designate a nominee. To exercise any of these rights, submit a written request with verifying context to <a href="mailto:raja@xaivon.com">raja@xaivon.com</a>.
        </p>
      </section>

      <section id="links" className="legal-doc-section">
        <h2>11. Links and external services</h2>
        <p>
          This website may feature links or embedded widgets operated by third parties, such as meeting schedulers. Their information practices are governed independently by their respective privacy notices.
        </p>
      </section>

      <section id="children" className="legal-doc-section">
        <h2>12. Children</h2>
        <p>
          Our web services and consulting solutions are designed exclusively for business operators, professionals, and enterprises. We do not knowingly solicit or collect data from minors.
        </p>
      </section>

      <section id="international" className="legal-doc-section">
        <h2>13. International processing</h2>
        <p>
          Certain cloud and communication providers may process or store data across international facilities in accordance with standard data transfer frameworks and privacy standards.
        </p>
      </section>

      <section id="changes" className="legal-doc-section">
        <h2>14. Changes to this policy</h2>
        <p>
          We review this privacy policy periodically to reflect operational refinements, platform enhancements, or evolving legal frameworks. The revision date at the top indicates the latest published version.
        </p>
      </section>

      <section id="contact" className="legal-doc-section">
        <h2>15. Contact for privacy requests</h2>
        <p>
          Direct privacy enquiries, data deletion requests, or compliance questions to <a href="mailto:raja@xaivon.com">raja@xaivon.com</a>. Formal legal correspondence may also be addressed to ADABHRA GROUP at <a href="mailto:raja969384bth@gmail.com">raja969384bth@gmail.com</a>. Registered location: West Champaran, Bihar, India.
        </p>
      </section>
    </LegalDocumentLayout>
  );
}
