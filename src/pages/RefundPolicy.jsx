import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import './LegalPage.css';

export default function RefundPolicy() {
  return (
    <>
      <PageMeta />
      <div className="legal-page">
        <div className="container" style={{ maxWidth: '840px', padding: '60px 20px' }}>
          <div className="legal-header" style={{ marginBottom: '40px' }}>
            <span className="eyebrow">LEGAL</span>
            <h1 style={{ fontSize: 'clamp(2rem, 3vw, 2.6rem)', margin: '8px 0 12px' }}>
              Refund &amp; Cancellation Policy
            </h1>
            <p className="legal-updated" style={{ color: 'var(--muted)', fontSize: '14px' }}>
              Last updated: October 14, 2026
            </p>
          </div>

          <div className="legal-content" style={{ display: 'flex', flexDirection: 'column', gap: '32px', lineHeight: 1.7, color: 'var(--ink)' }}>
            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>1. Purpose and scope</h2>
              <p>
                XAIVON provides scoped technology consulting, software implementation, automation and related professional services. This policy explains our general approach when a client asks to cancel work or requests a refund. It should be read alongside the applicable written proposal, statement of work, order or service agreement.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>2. Project-specific agreements</h2>
              <p>
                The agreed project documents should identify the work to be delivered, milestones, pricing, payment schedule, support arrangements and any cancellation conditions. Where the engagement documents specify a valid process for cancellation or refund, that process is applied to the relevant engagement, subject to applicable law.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>3. Requesting cancellation</h2>
              <p>
                To request cancellation, email <a href="mailto:raja@xaivon.com" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>raja@xaivon.com</a> and include your project reference, the name used in the agreement and the reason for the request. We will review the project&apos;s status and confirm the next contractual steps. Please do not include passwords or payment card information.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>4. Work already completed</h2>
              <p>
                A project may involve discovery, design, configuration, development, testing and third-party setup before final delivery. When a cancellation is requested, we assess the work completed, any deliverables already accepted, unavoidable commitments and the terms agreed for that project.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>5. Advance payments and project milestones</h2>
              <p>
                Whether an advance or milestone payment can be refunded depends on the written agreement, work performed and applicable legal requirements. An advance is not automatically non-refundable merely because it was paid in advance; equally, a cancellation does not automatically make completed agreed work free of charge.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>6. Subscription or maintenance services</h2>
              <p>
                If ongoing support or a recurring service is part of an agreement, the applicable plan will determine notice periods, renewal dates, cancellation dates and any permitted refund or credit. We do not advertise a general self-service subscription refund process unless such subscriptions are actually offered.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>7. Third-party charges</h2>
              <p>
                Cloud, model, telephony, messaging, software licences or other third-party charges may be billed separately or included within an agreed scope. If an external provider has already charged for a service, recoverability depends on that provider&apos;s terms and the agreement with the client. These costs should be explained in advance where material.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>8. Review of a refund request</h2>
              <p>
                We will acknowledge the request through the available contact channel, review the relevant agreement and project records and communicate a reasoned outcome. Any approved refund will use an appropriate payment method and timeframe consistent with the payment provider, agreement and applicable law. We do not promise a fixed number of days without an operationally confirmed process.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>9. Disputes and statutory rights</h2>
              <p>
                If you disagree with our review, reply to the written decision so that the issue can be reconsidered. This policy does not limit rights or remedies that applicable law does not permit us to exclude.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>10. Contact</h2>
              <p>
                Refund or cancellation enquiries: <a href="mailto:raja@xaivon.com" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>raja@xaivon.com</a>. Operating business: ADABHRA GROUP (Sole Proprietorship), India. For the underlying service contract, refer to the applicable signed proposal or statement of work.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
