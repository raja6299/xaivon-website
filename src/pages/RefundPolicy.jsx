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

          <div className={`legal-content reveal ${contentVisible ? 'visible' : ''}`} ref={contentRef}>

            <section>
              <h2>1. Scope</h2>
              <p>
                This Refund &amp; Cancellation Policy applies to paid engagements, subscriptions, assessments,
                implementation projects, and other services provided by XAIVON (&ldquo;Company&rdquo;,
                &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) to clients and customers
                (&ldquo;you&rdquo;). XAIVON provides AI infrastructure, business automation systems, AI agents,
                voice AI, chatbot and support systems, CRM and data automation, document and process automation,
                consulting, and related digital and technical services. These are professional and technical
                service engagements, not physical merchandise transactions.
              </p>
              <p>
                Where a project-specific proposal, order form, Master Services Agreement (MSA), subscription
                agreement, Statement of Work (SOW), or other service-specific terms have been executed between
                you and XAIVON, those documents govern refund and cancellation rights for that engagement and
                take precedence over the general guidance in this policy.
              </p>
            </section>

            <section>
              <h2>2. General Approach</h2>
              <p>
                XAIVON is committed to delivering high-quality AI infrastructure and automation services.
                We review refund and cancellation requests fairly, on a case-by-case basis, in accordance
                with the applicable agreement and service terms governing your specific engagement and in
                accordance with applicable law.
              </p>
              <p>
                Because our services involve professional time, technical implementation, custom configuration,
                and access to proprietary systems, the nature and extent of any refund or credit that may be
                appropriate will depend on the stage, scope, and type of the engagement at the time a request
                is received.
              </p>
            </section>

            <section>
              <h2>3. How to Submit a Request</h2>
              <p>
                To initiate a refund or cancellation request, please contact XAIVON at{' '}
                <a href="mailto:raja@xaivon.com">raja@xaivon.com</a> with the following information:
              </p>
              <ul>
                <li>Your full name and the business or organisation name associated with the engagement.</li>
                <li>
                  A description of the service or subscription for which you are requesting a refund or
                  cancellation.
                </li>
                <li>
                  The relevant invoice number, order reference, or transaction identifier, if available.
                </li>
                <li>
                  The approximate date of the original purchase or agreement, and the date of the most
                  recent payment, if applicable.
                </li>
                <li>A clear description of the reason for your request.</li>
              </ul>
              <p>
                Providing complete information helps us locate your record accurately and review your request
                without unnecessary delay.
              </p>
            </section>

            <section>
              <h2>4. Review Process</h2>
              <p>
                Upon receiving your request, XAIVON will acknowledge receipt and review the request against
                the terms of the applicable agreement and applicable law. We will communicate our decision
                to you at the email address associated with your account or engagement. The timeline for
                review will depend on the complexity of the engagement and the information provided.
              </p>
              <p>
                If your request relates to an active subscription or recurring billing arrangement, please
                ensure you submit your cancellation request before the next billing cycle to avoid
                additional charges. Cancellation of a subscription does not automatically entitle you to
                a refund of amounts already charged, except where required by applicable law or the
                specific terms of your subscription agreement.
              </p>
            </section>

            <section>
              <h2>5. Service Delivery Context</h2>
              <p>
                XAIVON&rsquo;s services and digital deliverables are generally provided electronically or
                through scheduled technical implementation, onboarding, and support processes. Because
                significant professional effort and proprietary system access may be expended at or near
                the commencement of an engagement, refund eligibility for work already performed or
                delivered will be evaluated in light of the actual stage of completion and the applicable
                agreement terms.
              </p>
              <p>
                XAIVON does not sell or ship physical merchandise through this website. Requests relating
                to physical goods are not applicable to our current service offerings.
              </p>
            </section>

            <section>
              <h2>6. Applicable Law</h2>
              <p>
                Nothing in this policy limits any statutory rights you may have under the law applicable
                to your jurisdiction. Where statutory rights provide for specific remedies or procedures,
                those rights are not excluded or restricted by this policy.
              </p>
            </section>

            <section>
              <h2>7. Contact &amp; Clarification</h2>
              <p>
                If you have any questions about this policy or wish to discuss your specific situation
                before submitting a formal request, please reach out to us at{' '}
                <a href="mailto:raja@xaivon.com">raja@xaivon.com</a>.
              </p>
              <p>
                You may also visit our <Link to="/contact">Contact page</Link> to submit an enquiry through
                our standard contact form.
              </p>
              <p>
                For information about how we handle your personal data, please see our{' '}
                <Link to="/privacy-policy">Privacy Policy</Link>.
              </p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
