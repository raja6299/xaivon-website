import LegalDocumentLayout from '../components/legal/LegalDocumentLayout';

export default function Terms() {
  const toc = [
    { id: 'about', title: '1. About XAIVON' },
    { id: 'scope', title: '2. Scope of website terms' },
    { id: 'enquiries', title: '3. Enquiries and assessments' },
    { id: 'accuracy', title: '4. Website information' },
    { id: 'use', title: '5. Acceptable use' },
    { id: 'ip', title: '6. Intellectual property' },
    { id: 'confidentiality', title: '7. Confidentiality of submissions' },
    { id: 'thirdparty', title: '8. Third-party services' },
    { id: 'availability', title: '9. Website availability' },
    { id: 'liability', title: '10. Limitation of liability' },
    { id: 'clientterms', title: '11. Engagement terms' },
    { id: 'indemnity', title: '12. Indemnity' },
    { id: 'termination', title: '13. Suspension and termination' },
    { id: 'governing', title: '14. Governing law and dispute resolution' },
    { id: 'contact', title: '15. Contact and business enquiries' },
  ];

  return (
    <LegalDocumentLayout
      title="Terms of Service"
      purpose="These terms explain how the XAIVON website and enquiry features may be used. Paid project terms are agreed separately in writing."
      lastUpdated="October 15, 2026"
      toc={toc}
    >
      <section id="about" className="legal-doc-section">
        <h2>1. About XAIVON</h2>
        <p>
          XAIVON is a business brand operated by ADABHRA GROUP, a registered sole proprietorship in India, with Raja Babu as its proprietor. These terms govern public access to xaivon.com, informational resources, and related communication channels.
        </p>
      </section>

      <section id="scope" className="legal-doc-section">
        <h2>2. Scope of website terms</h2>
        <p>
          These terms govern website browsing, discovery forms, and general correspondence. They do not constitute a software-as-a-service subscription or a Master Services Agreement (MSA). Paid implementations, custom engineering, service levels, and deliverables are defined exclusively through separate, executed written proposals or Statements of Work (SOW).
        </p>
      </section>

      <section id="enquiries" className="legal-doc-section">
        <h2>3. Enquiries and assessments</h2>
        <p>
          Submitting a project enquiry or booking an exploratory strategy call does not bind either party to an engagement, nor does it guarantee acceptance of a project. Project fit, timeline, and commercial terms are confirmed only after detailed discovery and written agreement.
        </p>
      </section>

      <section id="accuracy" className="legal-doc-section">
        <h2>4. Website information</h2>
        <p>
          The content on this website—including capability descriptions, illustrative workflow diagrams, planning calculators, and pricing tiers—is provided for informational planning purposes. While we endeavor to keep all information current, website overviews do not constitute formal architectural specifications or binding technical warranties.
        </p>
      </section>

      <section id="use" className="legal-doc-section">
        <h2>5. Acceptable use</h2>
        <p>
          Visitors agree not to misuse this website, disrupt server operations, submit malicious payloads through contact forms, attempt unauthorized system penetration, or deploy scraping mechanisms that overburden our infrastructure.
        </p>
      </section>

      <section id="ip" className="legal-doc-section">
        <h2>6. Intellectual property</h2>
        <p>
          All brand assets, text copy, graphic arrangements, layout architectures, and proprietary software representations on xaivon.com are the intellectual property of ADABHRA GROUP or its licensors and are protected under applicable copyright and intellectual property laws.
        </p>
      </section>

      <section id="confidentiality" className="legal-doc-section">
        <h2>7. Confidentiality of submissions</h2>
        <p>
          General website form submissions are handled in accordance with our Privacy Policy. Do not send trade secrets, regulated technical schemas, proprietary source code, or confidential customer databases through initial public web forms before executing a formal Non-Disclosure Agreement (NDA).
        </p>
      </section>

      <section id="thirdparty" className="legal-doc-section">
        <h2>8. Third-party services</h2>
        <p>
          Our site incorporates integrations and links to external platforms, such as Calendly. XAIVON is not liable for third-party platform availability, API deprecations, or policy modifications enacted by independent service providers.
        </p>
      </section>

      <section id="availability" className="legal-doc-section">
        <h2>9. Website availability</h2>
        <p>
          We aim to maintain continuous site uptime but make no absolute warranty of uninterrupted access. Periodic maintenance, hosting updates, or network issues may result in temporary unavailability without prior notice.
        </p>
      </section>

      <section id="liability" className="legal-doc-section">
        <h2>10. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by applicable law, ADABHRA GROUP and its proprietor shall not be held liable for indirect, incidental, consequential, or punitive damages arising out of your access to or inability to use this informational website.
        </p>
      </section>

      <section id="clientterms" className="legal-doc-section">
        <h2>11. Engagement terms</h2>
        <p>
          Client relationships, automation workflows, system integrations, payment schedules, and IP transfer terms are governed exclusively by executed client contracts, which supersede any conflicting statements on this informational website.
        </p>
      </section>

      <section id="indemnity" className="legal-doc-section">
        <h2>12. Indemnity</h2>
        <p>
          You agree to defend, indemnify, and hold harmless ADABHRA GROUP, its proprietor, and associates against claims, losses, or expenses resulting from your violation of these website terms or improper usage of site features.
        </p>
      </section>

      <section id="termination" className="legal-doc-section">
        <h2>13. Suspension and termination</h2>
        <p>
          We reserve the right to restrict access, reject form submissions, or block IP addresses that exhibit malicious behavior, abuse rate limits, or engage in unauthorized exploitation of site infrastructure.
        </p>
      </section>

      <section id="governing" className="legal-doc-section">
        <h2>14. Governing law and dispute resolution</h2>
        <p>
          These terms of service and any disputes arising out of the use of this website shall be governed by and construed in accordance with the laws of India. Competent courts in Bihar, India shall have exclusive jurisdiction over legal matters arising under these website terms.
        </p>
      </section>

      <section id="contact" className="legal-doc-section">
        <h2>15. Contact and business enquiries</h2>
        <p>
          For questions regarding these terms, contact us at <a href="mailto:raja@xaivon.com">raja@xaivon.com</a>. Official registration correspondence may also be directed to <a href="mailto:raja969384bth@gmail.com">raja969384bth@gmail.com</a>. Registered location: West Champaran, Bihar, India.
        </p>
      </section>
    </LegalDocumentLayout>
  );
}
