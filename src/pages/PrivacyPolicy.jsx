import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './LegalPage.css';

export default function PrivacyPolicy() {
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.05 });

  useEffect(() => {
    document.title = 'Privacy Policy | XAIVON';
  }, []);

  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header">
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last Updated: June 15, 2026</p>
        </div>

        <div className={`legal-content reveal ${contentVisible ? 'visible' : ''}`} ref={contentRef}>
          <section>
            <h2>1. Introduction</h2>
            <p>Welcome to XAIVON ("Company", "we", "our", "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website (xaivon.com) or use our services.</p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use.</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, company name.</li>
              <li><strong>Usage Data:</strong> Information on how you interact with our website, including IP address, browser type, and pages visited.</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect or receive:</p>
            <ul>
              <li>To provide and maintain our Service.</li>
              <li>To notify you about changes to our Service.</li>
              <li>To provide customer support and respond to inquiries.</li>
              <li>To gather analysis or valuable information so that we can improve our Service.</li>
              <li>To monitor the usage of our Service.</li>
              <li>To detect, prevent, and address technical issues.</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Sovereignty and AI Training</h2>
            <p>We are deeply committed to data privacy. <strong>Your private operational data, logs, and business workflows are never used to train public AI models.</strong> We employ strict data sovereignty protocols ensuring that your data remains yours and is only used to provide the services you explicitly requested.</p>
          </section>

          <section>
            <h2>5. Analytics and Tracking</h2>
            <p>We use third-party Service Providers to monitor and analyze the use of our Service, such as Google Analytics 4 and Microsoft Clarity. These services collect and analyze usage data to help us understand user behavior and improve our platform.</p>
          </section>

          <section>
            <h2>6. Contact Us</h2>
            <p>If you have questions or comments about this notice, you may email us at <a href="mailto:raja@xaivon.com">raja@xaivon.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
