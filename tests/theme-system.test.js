import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

test('theme-system: css tokens defined for light and dark modes', () => {
  const css = fs.readFileSync(path.join(ROOT, 'src', 'index.css'), 'utf-8');

  // Verify light theme token values
  assert.ok(css.includes('--bg: #F5F1E9'), 'Light background token is #F5F1E9');
  assert.ok(css.includes('--surface: #FFFCF7'), 'Light surface token is #FFFCF7');
  assert.ok(css.includes('--accent: #D95D32'), 'Light accent token is #D95D32');
  assert.ok(css.includes('--hero-copper: #B94E2D'), 'Hero copper token is #B94E2D');

  // Verify dark theme token values
  assert.ok(css.includes('[data-theme="dark"]'), 'Dark theme selector is defined');
  assert.ok(css.includes('--bg: #171613'), 'Dark background token is #171613');
  assert.ok(css.includes('--surface: #22201C'), 'Dark surface token is #22201C');
  assert.ok(css.includes('--ink: #F0E9DF'), 'Dark ink token is #F0E9DF');
  assert.ok(css.includes('--accent: #E77649'), 'Dark accent token is #E77649');
});

test('theme-system: early boot script present in index.html to prevent theme flash', () => {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf-8');
  assert.ok(html.includes("localStorage.getItem('xaivon-theme')"), 'index.html checks saved theme');
  assert.ok(html.includes("document.documentElement.setAttribute('data-theme'"), 'index.html sets root theme attribute');
});
