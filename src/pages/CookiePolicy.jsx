import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './LegalPage.css';

export default function CookiePolicy() {
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.05 });

  useEffect(() => {
    document.title = 'Cookie Policy | XAIVON';
  }, []);

  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header">
          <h1>Cookie Policy</h1>
          <p className="legal-updated">Last Updated: June 15, 2026</p>
        </div>

        <div className={`legal-content reveal ${contentVisible ? 'visible' : ''}`} ref={contentRef}>
          <section>
            <h2>1. What Are Cookies</h2>
            <p>As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies.</p>
          </section>

          <section>
            <h2>2. How We Use Cookies</h2>
            <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
          </section>

          <section>
            <h2>3. Disabling Cookies</h2>
            <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.</p>
          </section>

          <section>
            <h2>4. The Cookies We Set</h2>
            <ul>
              <li><strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</li>
              <li><strong>Form related cookies:</strong> When you submit data to through a form such as those found on contact pages or comment forms, cookies may be set to remember your user details for future correspondence.</li>
            </ul>
          </section>

          <section>
            <h2>5. Third Party Cookies</h2>
            <p>In some special cases, we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>
            <ul>
              <li>This site uses Google Analytics and Microsoft Clarity which are some of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
