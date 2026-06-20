import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageMeta from '../components/PageMeta';
import './LegalPage.css';

export default function PrivacyPolicy() {
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <>
      <PageMeta 
        title="Privacy Policy — XAIVON"
        description="Our privacy policy details how XAIVON collects, uses, and protects your data. Read our commitment to your privacy."
        url="https://xaivon.com/privacy-policy"
      />
      <div className="legal-page">
        <div className="container">
          <div className="legal-header">
            <h1>Privacy Policy</h1>
            <p className="legal-updated">Last Updated: June 15, 2026</p>
          </div>

          <div className={`legal-content reveal ${contentVisible ? 'visible' : ''}`} ref={contentRef}>
            <section>
              <h2>1. Introduction</h2>
              <p>Welcome to XAIVON ("Company", "we", "our", "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at xaivon.com, use our services, or engage with us in other related ways, including any sales, marketing, or events. Please read this Privacy Policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our Website or Services. By accessing or using this Website, you agree to this Privacy Policy.</p>
            </section>

            <section>
              <h2>2. Information We Collect</h2>
              <p>We collect several types of information from and about users of our Website and Services, including information:</p>
              <ul>
                <li><strong>Personal Data:</strong> By which you may be personally identified, such as name, postal address, e-mail address, telephone number, company name, and any other identifier by which you may be contacted online or offline ("personal information").</li>
                <li><strong>Automatically Collected Data:</strong> As you navigate through and interact with our Website, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including details of your visits to our Website (traffic data, location data, logs) and information about your computer and internet connection (IP address, operating system, and browser type).</li>
                <li><strong>Information from Third Parties:</strong> We may receive information about you from other sources, including publicly available databases, joint marketing partners, and social media platforms.</li>
              </ul>
            </section>

            <section>
              <h2>3. How We Use Your Information</h2>
              <p>We use information that we collect about you or that you provide to us, including any personal information, to:</p>
              <ul>
                <li>Present our Website and its contents to you.</li>
                <li>Provide you with information, products, or services that you request from us.</li>
                <li>Fulfill any other purpose for which you provide it.</li>
                <li>Provide you with notices about your account, including expiration and renewal notices.</li>
                <li>Carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.</li>
                <li>Notify you about changes to our Website or any products or services we offer or provide though it.</li>
                <li>Allow you to participate in interactive features on our Website.</li>
                <li>Improve our Website, products, services, marketing, and customer relationships.</li>
              </ul>
            </section>

            <section>
              <h2>4. Disclosure of Your Information</h2>
              <p>We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:</p>
              <ul>
                <li>To our subsidiaries and affiliates.</li>
                <li>To contractors, service providers, and other third parties we use to support our business and who are bound by contractual obligations to keep personal information confidential and use it only for the purposes for which we disclose it to them.</li>
                <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of XAIVON's assets.</li>
                <li>To fulfill the purpose for which you provide it.</li>
                <li>For any other purpose disclosed by us when you provide the information.</li>
                <li>With your consent.</li>
                <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
              </ul>
            </section>

            <section>
              <h2>5. Data Sovereignty and AI Training</h2>
              <p>We are deeply committed to data privacy and sovereignty. <strong>Your private operational data, logs, and business workflows are never used to train public AI models.</strong> We employ strict data sovereignty protocols ensuring that your data remains yours and is only used to provide the services you explicitly requested. We do not sell your personal data to third parties.</p>
            </section>

            <section>
              <h2>6. Data Security</h2>
              <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, you are responsible for keeping this password confidential.</p>
              <p>Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the Website.</p>
            </section>

            <section>
              <h2>7. Your Rights (GDPR & CCPA)</h2>
              <p>Depending on your location, you may have the following rights regarding your personal data:</p>
              <ul>
                <li><strong>Right to Access:</strong> You can request copies of your personal data.</li>
                <li><strong>Right to Rectification:</strong> You can request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                <li><strong>Right to Erasure:</strong> You can request that we erase your personal data, under certain conditions.</li>
                <li><strong>Right to Restrict Processing:</strong> You can request that we restrict the processing of your personal data, under certain conditions.</li>
                <li><strong>Right to Object to Processing:</strong> You can object to our processing of your personal data, under certain conditions.</li>
                <li><strong>Right to Data Portability:</strong> You can request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
              </ul>
            </section>

            <section>
              <h2>8. Cookies and Tracking Technologies</h2>
              <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice. We use third-party Service Providers to monitor and analyze the use of our Service, such as Google Analytics 4. These services collect and analyze usage data to help us understand user behavior and improve our platform.</p>
            </section>
            
            <section>
              <h2>9. Changes to Our Privacy Policy</h2>
              <p>It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our Website and this privacy policy to check for any changes.</p>
            </section>

            <section>
              <h2>10. Contact Information</h2>
              <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:raja@xaivon.com">raja@xaivon.com</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
