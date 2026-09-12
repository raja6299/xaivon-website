import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageMeta from '../components/PageMeta';
import './LegalPage.css';

export default function RefundPolicy() {
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <>
      <PageMeta />
      <div className="legal-page">
        <div className="container">
          <div className="legal-header">
            <h1>Refund &amp; Cancellation Policy</h1>
            <p className="legal-updated">Last Updated: September 2026</p>
          </div>

          <div className={`legal-content reveal ${contentVisible ? 'in' : ''}`} ref={contentRef}>

            <section>
              <h2>1. Scope</h2>
              <p>This Refund & Cancellation Policy outlines the general approach XAIVON (Business name: XAIVON) takes regarding cancellations and refunds for our AI, automation, and digital service engagements.</p>
            </section>

            <section>
              <h2>2. Engagement-Specific Terms</h2>
              <p>Refund and cancellation rights may vary by service, subscription, proposal, order form, statement of work, Master Services Agreement, or other applicable written terms. Where engagement-specific terms exist, those terms govern the applicable commercial relationship.</p>
            </section>

            <section>
              <h2>3. Cancellation Requests</h2>
              <p>Clients wishing to cancel an ongoing service or engagement should submit a request directly to us. We will process cancellation requests in accordance with the specific terms of the active agreement.</p>
            </section>

            <section>
              <h2>4. Refund Review</h2>
              <p>All refund requests are reviewed on a case-by-case basis. Because our engagements involve professional time and technical configuration, any appropriate refund or credit will be determined based on the stage of the project, the work already performed, and the applicable service terms.</p>
            </section>

            <section>
              <h2>5. Subscriptions and Recurring Services</h2>
              <p>Customers should submit cancellation requests before the next billing cycle whenever possible. Cancellation does not by itself create a right to reimbursement of charges already incurred, except where required by applicable law or the applicable agreement.</p>
            </section>

            <section>
              <h2>6. Digital and Professional Services</h2>
              <p>Our offerings consist of professional technical consulting, software implementation, and digital automation services. Due to the immediate delivery of expertise and proprietary system access, refunds for completed professional services are generally not provided unless explicitly stated in the governing agreement.</p>
            </section>

            <section>
              <h2>7. Non-Physical Nature of Current Offerings</h2>
              <p>XAIVON's current website offerings are digital, professional, and technical services. XAIVON does not currently ship physical goods through this website. Therefore, policies related to physical product returns do not apply.</p>
            </section>

            <section>
              <h2>8. Applicable Law</h2>
              <p>Nothing in this policy limits any statutory rights you may have under the law applicable to your jurisdiction. Where statutory rights mandate specific cancellation or refund remedies, those rights are fully respected.</p>
            </section>

            <section>
              <h2>9. Contact</h2>
              <p>To submit a cancellation or refund request, or if you have any questions regarding this policy, please contact us at:</p>
              <p>XAIVON (Business name: XAIVON)<br /><a href="mailto:raja@xaivon.com">raja@xaivon.com</a><br /><a href="tel:+19175340270">+1 (917) 534-0270</a></p>
              <p>For more details, you can also review our <Link to="/terms">Terms of Service</Link> or <Link to="/privacy-policy">Privacy Policy</Link>.</p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
