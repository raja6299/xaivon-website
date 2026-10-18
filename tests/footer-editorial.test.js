import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const FOOTER_JSX_PATH = path.join(ROOT, 'src', 'components', 'Footer.jsx');
const FOOTER_CSS_PATH = path.join(ROOT, 'src', 'components', 'Footer.css');
const INDEX_CSS_PATH = path.join(ROOT, 'src', 'index.css');
const STICKY_CTA_PATH = path.join(ROOT, 'src', 'components', 'StickyCallToAction.jsx');

test('footer-editorial: Footer component imports and uses scoped Footer.css source of truth', () => {
  const footerJsx = fs.readFileSync(FOOTER_JSX_PATH, 'utf8');
  assert.match(footerJsx, /import\s+['"]\.\/Footer\.css['"]/, 'Footer.jsx must explicitly import ./Footer.css');

  const footerCss = fs.readFileSync(FOOTER_CSS_PATH, 'utf8');
  assert.match(footerCss, /\.site-footer/, 'Footer.css must define .site-footer styles');
  assert.match(footerCss, /\.site-footer__grid/, 'Footer.css must define .site-footer__grid');
  assert.match(footerCss, /\.site-footer__brand/, 'Footer.css must define .site-footer__brand');
  assert.match(footerCss, /\.site-footer__rail/, 'Footer.css must define .site-footer__rail');
  assert.match(footerCss, /@media\s*\(\s*max-width:\s*960px\s*\)/, 'Footer.css must contain responsive tablet layout rules');
  assert.match(footerCss, /@media\s*\(\s*max-width:\s*640px\s*\)/, 'Footer.css must contain responsive mobile layout rules');
  assert.match(footerCss, /@media\s*\(\s*prefers-reduced-motion:\s*reduce\s*\)/, 'Footer.css must honor reduced motion');
});

test('footer-editorial: index.css does not contain unstructured legacy footer selectors', () => {
  const indexCss = fs.readFileSync(INDEX_CSS_PATH, 'utf8');
  assert.doesNotMatch(indexCss, /\.footer-grid\s*\{/, 'index.css must not define .footer-grid');
  assert.doesNotMatch(indexCss, /\.footer-brand\s*\{/, 'index.css must not define .footer-brand');
  assert.doesNotMatch(indexCss, /\.footer-bottom\s*\{/, 'index.css must not define .footer-bottom');
  assert.doesNotMatch(indexCss, /\.footer\s+a:hover/, 'index.css must not define .footer a:hover');
});

test('footer-editorial: preserves semantic landmarks, print class compatibility, and role', () => {
  const footerJsx = fs.readFileSync(FOOTER_JSX_PATH, 'utf8');
  assert.match(footerJsx, /<footer[^>]*className=["'][^"']*footer\s+site-footer[^"']*["']/, 'Footer must maintain both "footer" (for print CSS) and "site-footer" classes');
  assert.match(footerJsx, /role=["']contentinfo["']/, 'Footer must declare role="contentinfo"');
  assert.match(footerJsx, /aria-label=["']Company links["']/, 'Footer must render semantic <nav> for Company links');
  assert.match(footerJsx, /aria-label=["']Explore links["']/, 'Footer must render semantic <nav> for Explore links');
  assert.match(footerJsx, /aria-label=["']Legal and support links["']/, 'Footer must render semantic <nav> for Legal & Help links');
});

test('footer-editorial: brand identity, tagline, entity statement, and copyright integrity', () => {
  const footerJsx = fs.readFileSync(FOOTER_JSX_PATH, 'utf8');
  assert.match(footerJsx, /to=["']\/["']/, 'Brand mark must link to homepage');
  assert.match(footerJsx, /aria-label=["']XAIVON home["']/, 'Brand link must provide accessible label');
  assert.match(footerJsx, /XAIVON<\/span>/, 'Brand name must be XAIVON');
  assert.match(footerJsx, /Business automation and connected systems\./, 'Factual tagline must be strictly preserved');
  assert.match(
    footerJsx,
    /XAIVON is a business brand operated by ADABHRA GROUP \(Sole Proprietorship\), India\./,
    'Operating entity statement must match verified business legal registration exactly'
  );
  assert.match(footerJsx, /©\s*\{year\}\s*XAIVON\.\s*All rights reserved\./, 'Dynamic copyright must be rendered');
});

test('footer-editorial: contact utilities (email, tel, copy button) and accessibility', () => {
  const footerJsx = fs.readFileSync(FOOTER_JSX_PATH, 'utf8');
  assert.match(footerJsx, /href=["']mailto:raja@xaivon\.com["']/, 'Must render direct mailto:raja@xaivon.com link');
  assert.match(footerJsx, /href=["']tel:\+919521190205["']/, 'Must render direct tel:+919521190205 link');
  assert.match(footerJsx, /\+91 95211 90205/, 'Must display phone number formatted clearly');
  assert.match(footerJsx, /handleCopyEmail/, 'Must have copy email handler');
  assert.match(footerJsx, /fallbackCopy/, 'Must have truthful fallback copy mechanism');
  assert.match(footerJsx, /aria-live=["']polite["']/, 'Must announce copy status to screen readers');
  assert.match(footerJsx, /clearTimeout\(copyTimeoutRef\.current\)/, 'Must clean up timeout on unmount');
});

test('footer-editorial: all 14 required navigation destinations and anchors are intact', () => {
  const footerJsx = fs.readFileSync(FOOTER_JSX_PATH, 'utf8');
  const requiredDestinations = [
    // Company
    '/about#who',
    '/about#how',
    '/pricing',
    '/contact',
    '/about#future',
    // Explore
    '/solutions',
    '/products',
    '/industries',
    '/roi-calculator',
    // Legal & Help
    '/privacy-policy',
    '/terms',
    '/cookie-policy',
    '/refund-policy',
    '/contact#support'
  ];

  for (const dest of requiredDestinations) {
    const regex = new RegExp(`to=["']${dest.replace('#', '#')}["']`);
    assert.match(footerJsx, regex, `Footer must contain link to ${dest}`);
  }
});

test('footer-editorial: Cookie Settings button dispatches open-cookie-settings event', () => {
  const footerJsx = fs.readFileSync(FOOTER_JSX_PATH, 'utf8');
  assert.match(footerJsx, /handleOpenCookieSettings/, 'Footer must handle opening cookie settings');
  assert.match(
    footerJsx,
    /window\.dispatchEvent\(new CustomEvent\(['"]open-cookie-settings['"]\)\)/,
    'Cookie Settings button must dispatch open-cookie-settings CustomEvent'
  );
  assert.match(footerJsx, /id=["']footer-cookie-settings-btn["']/, 'Button must have stable testable ID');
});

test('footer-editorial: StickyCallToAction suppresses floating CTA when footer is visible and removes it from focus and a11y tree', () => {
  const stickyCta = fs.readFileSync(STICKY_CTA_PATH, 'utf8');
  assert.match(stickyCta, /IntersectionObserver/, 'StickyCallToAction must coordinate using IntersectionObserver');
  assert.match(stickyCta, /footerInView/, 'StickyCallToAction must track footerInView state');
  assert.match(stickyCta, /visible\s*&&\s*!footerInView/, 'StickyCallToAction must hide when footer is in view');
  assert.match(stickyCta, /tabIndex=\{isActuallyVisible\s*\?\s*0\s*:\s*-1\}/, 'StickyCallToAction must set tabIndex -1 when hidden');
  assert.match(stickyCta, /aria-hidden=\{!isActuallyVisible\}/, 'StickyCallToAction must set aria-hidden true when hidden');

  const stickyCssPath = path.join(ROOT, 'src', 'components', 'StickyCallToAction.css');
  const stickyCss = fs.readFileSync(stickyCssPath, 'utf8');
  assert.match(stickyCss, /visibility:\s*hidden;/, 'StickyCallToAction.css must declare visibility: hidden by default');
  assert.match(stickyCss, /visibility:\s*visible;/, 'StickyCallToAction.css must declare visibility: visible when active');
  assert.match(stickyCss, /visibility\s+0\.3s/, 'StickyCallToAction.css must transition visibility');
});

test('footer-editorial: ScrollToTop supports reliable hash anchor navigation across lazy-loaded routes', () => {
  const scrollToTopPath = path.join(ROOT, 'src', 'hooks', 'ScrollToTop.jsx');
  const scrollToTopJsx = fs.readFileSync(scrollToTopPath, 'utf8');
  assert.match(scrollToTopJsx, /const\s*\{\s*pathname,\s*hash\s*\}\s*=\s*useLocation\(\)/, 'ScrollToTop must observe both pathname and hash');
  assert.match(scrollToTopJsx, /scrollIntoView/, 'ScrollToTop must invoke scrollIntoView for targeted hash');
  assert.match(scrollToTopJsx, /setInterval/, 'ScrollToTop must support polling retry for lazy-loaded route components');
  assert.match(scrollToTopJsx, /window\.scrollTo\(0,\s*0\)/, 'ScrollToTop must preserve window.scrollTo(0, 0) when no hash is present');
});

test('footer-editorial: founder social profiles are present with exact URLs, sequence, security attributes and accessibility', () => {
  const footerJsx = fs.readFileSync(FOOTER_JSX_PATH, 'utf8');

  // Verify section heading correctly identifies founder connection (not corporate)
  assert.match(footerJsx, /Connect with the Founder/, 'Footer must label module accurately as Connect with the Founder');
  assert.doesNotMatch(footerJsx, /Official XAIVON\s+(Social|Twitter|LinkedIn|GitHub)/i, 'Must not claim corporate official verification');

  // Verify exact destination URLs
  const xUrl = 'https://x.com/Raja_9693';
  const linkedinUrl = 'https://www.linkedin.com/in/raja9693/';
  const githubUrl = 'https://github.com/raja9693bth';

  assert.ok(footerJsx.includes(xUrl), `Must link to exact X profile: ${xUrl}`);
  assert.ok(footerJsx.includes(linkedinUrl), `Must link to exact LinkedIn profile: ${linkedinUrl}`);
  assert.ok(footerJsx.includes(githubUrl), `Must link to exact GitHub profile: ${githubUrl}`);

  // Verify sequence: X, LinkedIn, GitHub
  const posX = footerJsx.indexOf(xUrl);
  const posLinkedin = footerJsx.indexOf(linkedinUrl);
  const posGithub = footerJsx.indexOf(githubUrl);
  assert.ok(posX < posLinkedin && posLinkedin < posGithub, 'Social links must appear in exact sequence: X, LinkedIn, GitHub');

  // Verify security and accessibility attributes
  assert.match(footerJsx, /href=["']https:\/\/x\.com\/Raja_9693["'][^>]*target=["']_blank["'][^>]*rel=["']noopener noreferrer["']/, 'X link must have target="_blank" and rel="noopener noreferrer"');
  assert.match(footerJsx, /href=["']https:\/\/www\.linkedin\.com\/in\/raja9693\/["'][^>]*target=["']_blank["'][^>]*rel=["']noopener noreferrer["']/, 'LinkedIn link must have target="_blank" and rel="noopener noreferrer"');
  assert.match(footerJsx, /href=["']https:\/\/github\.com\/raja9693bth["'][^>]*target=["']_blank["'][^>]*rel=["']noopener noreferrer["']/, 'GitHub link must have target="_blank" and rel="noopener noreferrer"');

  // Verify descriptive aria-labels
  assert.match(footerJsx, /aria-label=["'][^"']*X[^"']*new tab["']/, 'X link must state destination and new tab');
  assert.match(footerJsx, /aria-label=["'][^"']*LinkedIn[^"']*new tab["']/, 'LinkedIn link must state destination and new tab');
  assert.match(footerJsx, /aria-label=["'][^"']*GitHub[^"']*new tab["']/, 'GitHub link must state destination and new tab');

  // Verify SVGs are decorative
  assert.match(footerJsx, /className=["']site-footer__social-icon["'][^>]*aria-hidden=["']true["']/, 'Social SVGs must have aria-hidden="true"');
});

test('footer-editorial: scoped CSS styles for founder social module are defined in Footer.css', () => {
  const footerCss = fs.readFileSync(FOOTER_CSS_PATH, 'utf8');
  assert.match(footerCss, /\.site-footer__social-module/, 'Footer.css must define .site-footer__social-module');
  assert.match(footerCss, /\.site-footer__social-heading/, 'Footer.css must define .site-footer__social-heading');
  assert.match(footerCss, /\.site-footer__social-links/, 'Footer.css must define .site-footer__social-links');
  assert.match(footerCss, /\.site-footer__social-link/, 'Footer.css must define .site-footer__social-link');
  assert.match(footerCss, /\.site-footer__social-link:hover/, 'Footer.css must define hover states for social links');
  assert.match(footerCss, /\.site-footer__social-link:focus-visible/, 'Footer.css must define focus-visible outline for social links');
});
