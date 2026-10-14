import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import './LegalPage.css';

export default function PrivacyPolicy() {
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
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', margin: '8px 0 12px' }}>Privacy Policy</h1>
            <p className="legal-updated" style={{ color: 'var(--muted)', fontSize: '14px' }}>
              Last updated: October 14, 2026
            </p>
          </div>

          <div className="legal-content" style={{ display: 'flex', flexDirection: 'column', gap: '32px', lineHeight: 1.7, color: 'var(--ink)' }}>
            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>1. Who operates this website</h2>
              <p>
                XAIVON is a business brand operated by ADABHRA GROUP, a sole proprietorship in India. This policy explains how we handle personal information received through xaivon.com, when you contact us, request an assessment or use the site&apos;s optional features. In this policy, &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to the operator of XAIVON.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>2. Information you choose to provide</h2>
              <p>
                When you contact us or request an assessment, we may receive your name, email address, company name, the details of your enquiry and any other information you include in the message. If you arrange a meeting, the scheduling provider may collect the details required for that booking. Please do not send passwords, payment card details, authentication tokens or unrelated sensitive personal data through our enquiry forms.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>3. Technical and usage information</h2>
              <p>
                Like most websites, our hosting and security services may process technical information needed to receive requests and protect the service, such as IP addresses, browser information, request timing and error details. Our site may also remember basic preferences, such as your colour theme and cookie choice. Where optional analytics are enabled, they are described below and must follow the consent controls shown on the site.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>4. Why we use information</h2>
              <p>
                We use the information relevant to your enquiry to reply, understand project requirements, prepare a proposal, organise a requested meeting, support an existing working relationship and maintain the security and reliability of our website. We do not treat an ordinary enquiry as permission to send unrelated bulk marketing messages.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>5. Analytics and your choice</h2>
              <p>
                If optional analytics are enabled on this website, their purpose is to help us understand which pages are useful and where visitors encounter difficulties. You can accept or decline nonessential analytics through our cookie controls and change your choice later. The precise behaviour of any analytics technology depends on the consent settings that have been implemented and verified. Our Cookie Policy explains the controls in more detail.
              </p>
              <div style={{ marginTop: '14px' }}>
                <button
                  type="button"
                  onClick={handleOpenCookieSettings}
                  className="btn btn-secondary btn-sm"
                >
                  Open Cookie Settings ↗
                </button>
              </div>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>6. Services involved in operating the site</h2>
              <p>
                We use service providers for hosting, delivery of enquiry emails, site security and, where enabled, scheduling and analytics. Information may be processed by those providers to perform the services we request. Known infrastructure providers include Vercel (hosting and serverless functions), Resend (transactional email dispatch), Upstash (rate limiting), Calendly (optional strategy call scheduling), and Google Analytics (optional consent-gated analytics).
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>7. Sharing information</h2>
              <p>
                We do not publish your enquiry or sell information submitted through our contact forms. We may share information with service providers acting on our instructions, with people involved in responding to your request, or when disclosure is required by applicable law. A later client agreement may describe additional processing relevant to the project.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>8. Storage and retention</h2>
              <p>
                We keep information only for as long as it is reasonably needed for the purpose for which it was obtained, or where a valid legal, accounting, security or contractual obligation requires a longer period. Different records may have different retention periods. You can ask about retention of your enquiry using the contact information below.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>9. Safeguarding information</h2>
              <p>
                We take reasonable steps to protect the information we handle, including appropriate access controls and protection of service credentials. No website or internet transmission is completely free from risk. Do not send confidential credentials through this website.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>10. Your requests and choices</h2>
              <p>
                Depending on the law applicable to your information and the stage at which that law applies, you may be able to request details about our handling of your personal data, corrections, deletion or withdrawal of consent. Contact us with enough information to identify the request. We may need to verify your identity before acting and may have to retain information where law permits or requires it.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>11. Links and external services</h2>
              <p>
                Our site may link to third-party tools, including a meeting scheduler. Their websites and privacy practices are governed by their own terms and notices. Review those notices before providing information directly to them.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>12. Children</h2>
              <p>
                XAIVON&apos;s website and professional services are intended for business users and are not designed for children. If you believe a child has sent personal information to us, please contact us so we can review the request appropriately.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>13. International processing</h2>
              <p>
                Some technology providers may process information outside your country. Any cross-border handling must be assessed against the applicable requirements and the actual location of the providers in use.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>14. Changes to this policy</h2>
              <p>
                We may update this policy when our website, service providers or legal obligations change. The date at the top shows when the current version was published. Material changes should be reviewed before they take effect.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>15. Contact for privacy requests</h2>
              <p>
                For website privacy questions, corrections or deletion enquiries, please write to <a href="mailto:raja@xaivon.com" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>raja@xaivon.com</a>. For business registration correspondence, ADABHRA GROUP may also be contacted at <a href="mailto:raja969384bth@gmail.com" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>raja969384bth@gmail.com</a>. Our registered business location is West Champaran, Bihar, India.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
