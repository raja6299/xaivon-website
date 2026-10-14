import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import './LegalPage.css';

export default function Terms() {
  return (
    <>
      <PageMeta />
      <div className="legal-page">
        <div className="container" style={{ maxWidth: '840px', padding: '60px 20px' }}>
          <div className="legal-header" style={{ marginBottom: '40px' }}>
            <span className="eyebrow">LEGAL</span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', margin: '8px 0 6px' }}>Terms of Service</h1>
            <p style={{ fontSize: '16px', color: 'var(--muted)', margin: '0 0 12px' }}>
              Terms for use of this website and general enquiries
            </p>
            <p className="legal-updated" style={{ color: 'var(--muted)', fontSize: '14px' }}>
              Last updated: October 14, 2026
            </p>
          </div>

          <div className="legal-content" style={{ display: 'flex', flexDirection: 'column', gap: '32px', lineHeight: 1.7, color: 'var(--ink)' }}>
            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>1. About XAIVON</h2>
              <p>
                This website is presented under the XAIVON brand, operated by ADABHRA GROUP, a sole proprietorship in India. These terms cover access to our public website, its information and enquiry features. They do not replace a signed agreement for a paid client project.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>2. Use of the website</h2>
              <p>
                You may browse the site, read its content and contact us for legitimate business purposes. You must not attempt to disrupt the site, access systems without permission, submit malicious material, misrepresent your identity or use the forms to send spam.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>3. Information about services</h2>
              <p>
                The site describes areas in which XAIVON can discuss, design or deliver technology work. A description of a capability is not a promise that every integration, timeline or result is available for every customer. Project availability and scope are established through review and written agreement.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>4. Assessments and proposals</h2>
              <p>
                Submitting an enquiry does not create a client relationship, confirm a booking or oblige either party to enter into a project. Any estimate, assessment or proposal is based on the information available at the time and may change as the requirements become clearer.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>5. Prices and payment arrangements</h2>
              <p>
                Published prices are starting points unless explicitly stated otherwise. Final fees, currency, milestones, deliverables, taxes where applicable, separate provider usage charges and payment arrangements are recorded in the relevant proposal, order form, statement of work or signed agreement. A public price list is not an automatic checkout or contractual offer.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>6. Project agreements and changes</h2>
              <p>
                Where we agree to provide services, the applicable written engagement document will define scope, responsibilities, acceptance criteria, timelines, support terms and a process for changes. If a client requests work outside the agreed scope, any additional work and fees should be agreed before it begins.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>7. Client responsibilities</h2>
              <p>
                Project work may depend on accurate requirements, access permissions, access to third-party tools, timely feedback and approved business decisions. Customers remain responsible for the accuracy and lawful use of data and materials they provide, subject to the obligations agreed between the parties.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>8. Ownership and intellectual property</h2>
              <p>
                The branding and original content of this public site belong to their respective lawful owners. Ownership, licences, third-party components and permitted use of deliverables created for a client are determined by the applicable engagement agreement. Nothing on this page transfers ownership of client deliverables by itself.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>9. Third-party products</h2>
              <p>
                A solution may depend on products and services operated by others. Their availability, licensing, permitted use, pricing and service changes are governed by their providers&apos; terms. We explain material dependencies during project scoping wherever reasonably possible.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>10. Confidential information</h2>
              <p>
                Please avoid sending trade secrets or sensitive information through an initial website enquiry. For an actual engagement, confidentiality, data access and appropriate safeguards can be addressed through a written agreement or NDA when required.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>11. Website information and limitations</h2>
              <p>
                We aim to keep website information useful and accurate, but published material may become outdated or contain errors. We do not promise uninterrupted website access or a particular business result from the examples shown here. These general website terms do not remove rights that cannot lawfully be excluded.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>12. Cancellations and refunds</h2>
              <p>
                Cancellations and refunds for paid services are handled according to the relevant written agreement and our <Link to="/refund-policy" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Refund &amp; Cancellation Policy</Link>, subject to rights provided by applicable law.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>13. Applicable law and disagreements</h2>
              <p>
                Where a contract has been signed, its governing law and dispute-resolution terms apply as stated in that contract, subject to mandatory law. Questions about use of this public website may be sent to the contact address below so we can review them.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>14. Updates to these terms</h2>
              <p>
                We may revise these website terms as the site and our business change. The update date identifies the version displayed here. Changes to a signed client agreement require the method of amendment specified in that agreement.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>15. Contact</h2>
              <p>
                Questions about these terms may be sent to <a href="mailto:raja@xaivon.com" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>raja@xaivon.com</a>. XAIVON is operated by ADABHRA GROUP (Sole Proprietorship), India. Business registration correspondence: <a href="mailto:raja969384bth@gmail.com" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>raja969384bth@gmail.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
