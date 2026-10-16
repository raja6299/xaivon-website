import LegalDocumentLayout from '../components/legal/LegalDocumentLayout';

export default function RefundPolicy() {
  const toc = [
    { id: 'purpose', title: '1. Purpose and scope' },
    { id: 'consulting', title: '2. Consulting & discovery' },
    { id: 'custom', title: '3. Custom milestones' },
    { id: 'thirdparty', title: '4. Third-party expenses' },
    { id: 'cancellation', title: '5. Cancellation procedure' },
    { id: 'retainer', title: '6. Support & retainers' },
    { id: 'disputes', title: '7. Good-faith resolution' },
    { id: 'statutory', title: '8. Statutory rights' },
    { id: 'request', title: '9. Submitting a request' },
    { id: 'contact', title: '10. Entity contact details' },
  ];

  return (
    <LegalDocumentLayout
      title="Refund & Cancellation Policy"
      purpose="Cancellation and refund requests are reviewed against the agreed project scope, work completed, third-party commitments and applicable law."
      lastUpdated="October 15, 2026"
      toc={toc}
    >
      <section id="purpose" className="legal-doc-section">
        <h2>1. Purpose and scope</h2>
        <p>
          XAIVON provides tailored technology consulting, software integrations, and custom workflow automation for businesses. This policy governs how cancellation and refund requests are handled across our professional services. It operates alongside the formal Statement of Work (SOW) or services agreement executed for each engagement.
        </p>
      </section>

      <section id="consulting" className="legal-doc-section">
        <h2>2. Consulting &amp; discovery phases</h2>
        <p>
          Initial discovery assessments, architectural audits, and workflow mapping engagements involve dedicated engineering hours. Unless otherwise stipulated in the governing Statement of Work (SOW), fees for completed assessment sessions or delivered technical audit documentation are deemed fully earned and non-refundable.
        </p>
      </section>

      <section id="custom" className="legal-doc-section">
        <h2>3. Custom implementation milestones</h2>
        <p>
          Multi-phase engineering projects are structured around defined milestones set forth in the applicable Statement of Work. Upon formal client acceptance or milestone sign-off, the associated fee is deemed earned. Cancellation mid-milestone is governed by the termination provisions of the executed agreement, typically accounting for completed deliverables, committed resources, and work in progress.
        </p>
      </section>

      <section id="thirdparty" className="legal-doc-section">
        <h2>4. Third-party infrastructure and software costs</h2>
        <p>
          Expenses incurred on behalf of a client for third-party software licenses, API subscriptions (such as OpenAI, Anthropic, Twilio, or cloud hosting), specialized connectors, or compute resources are non-refundable once provisioned or committed.
        </p>
      </section>

      <section id="cancellation" className="legal-doc-section">
        <h2>5. Project cancellation procedure</h2>
        <p>
          Either party may terminate an active professional services agreement in accordance with the notice period specified in the executed project agreement. Upon effective termination, active engineering ceases, and an itemized reconciliation invoice is issued reflecting completed deliverables and work performed up to the effective termination date.
        </p>
      </section>

      <section id="retainer" className="legal-doc-section">
        <h2>6. Ongoing support &amp; retainers</h2>
        <p>
          Monthly workflow maintenance and optimization retainers are billed in advance for each billing cycle. A retainer may be cancelled prior to the renewal date of the next billing cycle. Retainer fees for the currently active cycle are non-refundable once the cycle has commenced.
        </p>
      </section>

      <section id="disputes" className="legal-doc-section">
        <h2>7. Good-faith resolution &amp; disputes</h2>
        <p>
          If a client identifies that a deliverable does not satisfy the agreed technical specifications in the applicable Statement of Work, the parties will adhere to the review and remediation procedure agreed in the contract, engaging in good-faith technical review before escalating formal dispute proceedings.
        </p>
      </section>

      <section id="statutory" className="legal-doc-section">
        <h2>8. Statutory rights</h2>
        <p>
          Nothing in this policy limits or excludes non-waivable statutory consumer protections or rights that may apply under governing jurisdiction laws.
        </p>
      </section>

      <section id="request" className="legal-doc-section">
        <h2>9. Submitting a request</h2>
        <p>
          To submit a formal cancellation notice or discuss milestone reconciliation, email <a href="mailto:raja@xaivon.com">raja@xaivon.com</a> with your project reference, organisation name, and details of the request. We endeavor to review and respond to formal correspondence within five business days.
        </p>
      </section>

      <section id="contact" className="legal-doc-section">
        <h2>10. Entity contact details</h2>
        <p>
          XAIVON is operated by ADABHRA GROUP (Sole Proprietorship), India. Commercial enquiries: <a href="mailto:raja@xaivon.com">raja@xaivon.com</a>. Registration correspondence: <a href="mailto:raja969384bth@gmail.com">raja969384bth@gmail.com</a>. Registered location: West Champaran, Bihar, India.
        </p>
      </section>
    </LegalDocumentLayout>
  );
}
