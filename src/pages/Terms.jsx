import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageMeta from '../components/PageMeta';
import './LegalPage.css';

export default function Terms() {
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <>
      <PageMeta />
      <div className="legal-page">
        <div className="container">
          <div className="legal-header">
            <h1>Terms of Service</h1>
            <p className="legal-updated">Last Updated: September 2026</p>
          </div>

          <div className={`legal-content reveal ${contentVisible ? 'in' : ''}`} ref={contentRef}>
            <section>
              <h2>1. About These Terms</h2>
              <p>These Terms of Service govern your access to and use of the xaivon.com website and any information, content, or materials provided herein. By accessing or using our website, you agree to comply with these terms. If you do not agree with these terms, please do not use our website.</p>
            </section>

            <section>
              <h2>2. Using the Website</h2>
              <p>You may use our website only for lawful purposes and in accordance with these terms. You agree not to use the website in any way that violates any applicable law, to engage in unauthorized data scraping or extraction, to interfere with the proper working of the site, or to attempt to gain unauthorized access to any part of the site or its related systems.</p>
            </section>

            <section>
              <h2>3. XAIVON Services</h2>
              <p>XAIVON provides business automation, AI systems, integrations, consulting, and related digital and technical services. The information provided on this website is for general informational purposes and does not constitute a binding offer to provide services under any specific terms.</p>
            </section>

            <section>
              <h2>4. Assessments and Proposals</h2>
              <p>Any assessments, audits, proposals, or estimates provided through the website or subsequent communications are preliminary and subject to mutually agreed final terms. They do not constitute a final binding commitment until a formal agreement is executed.</p>
            </section>

            <section>
              <h2>5. Client Responsibilities</h2>
              <p>If you engage with XAIVON for services, you are responsible for providing accurate information, timely feedback, and any necessary access to your systems or data required to deliver the services, as will be detailed in the specific engagement agreement.</p>
            </section>

            <section>
              <h2>6. Intellectual Property</h2>
              <p>The website and its original content, features, and functionality are owned by XAIVON and are protected by applicable intellectual property or proprietary rights laws. You may not reproduce, distribute, modify, or create derivative works of any material from our website without our prior written consent.</p>
            </section>

            <section>
              <h2>7. Third-Party Services and Integrations</h2>
              <p>Our website or services may reference or interact with third-party platforms, APIs, or tools. We do not control these third-party services and are not responsible for their content, privacy policies, or practices. Your use of third-party services is subject to their respective terms.</p>
            </section>

            <section>
              <h2>8. Confidentiality and Information</h2>
              <p>We respect the confidentiality of the business information you share with us during assessments or service delivery. The specific confidentiality obligations governing an engagement will be set out in a Mutual Non-Disclosure Agreement or the applicable engagement-specific agreement.</p>
            </section>

            <section>
              <h2>9. Fees, Billing, Cancellation and Refunds</h2>
              <p>The specific scope, deliverables, pricing, timelines, assumptions, and commercial commitments for a client engagement are determined by the applicable proposal, order form, statement of work, Master Services Agreement (MSA), subscription terms, or other written agreement.</p>
              <p>Where such an agreement conflicts with general website terms, the engagement-specific agreement governs to the extent stated in that agreement. For general information regarding cancellations and refunds, please review our <Link to="/refund-policy">Refund & Cancellation Policy</Link>.</p>
            </section>

            <section>
              <h2>10. Disclaimers</h2>
              <p>The website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. XAIVON does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
            </section>

            <section>
              <h2>11. Limitation of Liability</h2>
              <p>To the fullest extent provided by law, in no event will XAIVON, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind arising out of or in connection with your use, or inability to use, the website or any content on the website.</p>
            </section>

            <section>
              <h2>12. Suspension or Termination</h2>
              <p>We reserve the right to suspend or terminate your access to the website at our sole discretion, without notice, for any reason, including but not limited to a violation of these Terms of Service.</p>
            </section>

            <section>
              <h2>13. Changes to These Terms</h2>
              <p>We may revise and update these Terms of Service from time to time in our sole discretion. All changes are effective immediately when we post them. Your continued use of the website following the posting of revised Terms of Service means that you accept and agree to the changes.</p>
            </section>

            <section>
              <h2>14. Contact</h2>
              <p>If you have any questions or concerns regarding these Terms of Service, please contact us at:</p>
              <p><a href="mailto:raja@xaivon.com">raja@xaivon.com</a></p>
              <p>For more information about how we handle your data, please see our <Link to="/privacy-policy">Privacy Policy</Link>.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
