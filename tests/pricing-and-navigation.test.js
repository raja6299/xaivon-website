import test from 'node:test';
import assert from 'node:assert/strict';
import { XAIVON_DATA } from '../src/data/xaivonData.js';

test('navigation: exactly 6 primary nav items per v3 SoT', () => {
  const nav = XAIVON_DATA.navigation.primary;
  assert.strictEqual(nav.length, 6, 'Primary navigation has exactly 6 items');

  const names = nav.map(n => n.name);
  assert.deepStrictEqual(names, ['Home', 'Solutions', 'Products', 'Industries', 'About', 'Pricing']);

  assert.strictEqual(XAIVON_DATA.navigation.cta.name, 'Book an Assessment ↗');
  assert.strictEqual(XAIVON_DATA.navigation.cta.path, '/contact');
});

test('pricing: all 6 categories match locked v2/v3 starting prices', () => {
  const { services, categories } = XAIVON_DATA.pricing;

  assert.strictEqual(categories.length, 6, '6 pricing categories defined');

  const expectedPrices = {
    'Workflow & Automation': {
      Starter: { USD: '$749', INR: '₹29,000' },
      Plus: { USD: '$1,249', INR: '₹49,999' },
      Premium: { USD: '$3,499', INR: '₹1,49,000' }
    },
    'AI Agents': {
      Starter: { USD: '$2,499', INR: '₹99,000' },
      Plus: { USD: '$5,499', INR: '₹2,49,000' },
      Premium: { USD: '$12,000', INR: '₹5,99,000' }
    },
    'Voice AI': {
      Starter: { USD: '$2,999', INR: '₹1,25,000' },
      Plus: { USD: '$5,499', INR: '₹1,99,000' },
      Premium: { USD: '$15,000+', INR: '₹6,99,000' }
    },
    'Chatbot & Customer Support': {
      Starter: { USD: '$1,249', INR: '₹49,000' },
      Plus: { USD: '$2,499', INR: '₹99,000' },
      Premium: { USD: '$6,000', INR: '₹2,49,000' }
    },
    'CRM, Lead & Data Automation': {
      Starter: { USD: '$999', INR: '₹45,000' },
      Plus: { USD: '$2,499', INR: '₹1,09,000' },
      Premium: { USD: '$6,000', INR: '₹2,49,000' }
    },
    'Document & Business Process Automation': {
      Starter: { USD: '$1,499', INR: '₹59,000' },
      Plus: { USD: '$2,999', INR: '₹1,29,000' },
      Premium: { USD: '$7,000', INR: '₹2,99,000' }
    }
  };

  categories.forEach(cat => {
    const s = services.find(item => item.category === cat);
    assert.ok(s, `Category "${cat}" found in services`);

    const expected = expectedPrices[cat];
    s.tiers.forEach(tier => {
      const expTier = expected[tier.name];
      assert.ok(expTier, `Tier "${tier.name}" found in category "${cat}"`);
      assert.strictEqual(tier.price.USD, expTier.USD, `${cat} - ${tier.name} USD price matches`);
      assert.strictEqual(tier.price.INR, expTier.INR, `${cat} - ${tier.name} INR price matches`);
    });
  });
});

test('navigation: desktop mega-menu and mobile panel use theme-aware tokens for WCAG AA contrast', async () => {
  const fs = await import('node:fs');
  const path = await import('node:path');
  const navCss = fs.readFileSync(path.resolve('src/components/PremiumNav.css'), 'utf8');
  const indexCss = fs.readFileSync(path.resolve('src/index.css'), 'utf8');

  // Verify .mega-menu does not use hardcoded cream background
  assert.match(navCss, /\.mega-menu\s*\{[^}]*background:\s*var\(--dropdown-bg/s, 'Mega-menu must use var(--dropdown-bg)');
  assert.doesNotMatch(navCss, /\.mega-menu\s*\{[^}]*background:\s*rgba\(255,\s*253,\s*249/s, 'Mega-menu must not have hardcoded light background');

  // Verify .premium-mobile-panel does not use hardcoded cream background
  assert.match(navCss, /\.premium-mobile-panel\s*\{[^}]*background:\s*var\(--dropdown-bg/s, 'Mobile panel must use var(--dropdown-bg)');
  assert.doesNotMatch(navCss, /\.premium-mobile-panel\s*\{[^}]*background:\s*rgba\(255,\s*253,\s*249/s, 'Mobile panel must not have hardcoded light background');

  // Verify index.css defines --dropdown-bg in both light and dark themes
  assert.match(indexCss, /\[data-theme="light"\].*?--dropdown-bg:\s*rgba\(255,\s*252,\s*247/s, 'Light theme defines light dropdown background');
  assert.match(indexCss, /\[data-theme="dark"\].*?--dropdown-bg:\s*rgba\(34,\s*32,\s*28/s, 'Dark theme defines dark dropdown background');
});
