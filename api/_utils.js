/**
 * XAIVON — Shared Serverless API Utilities
 *
 * Stateless helper functions shared across Vercel serverless functions in /api.
 * Note: Leading underscore in filename ensures Vercel treats this as a private
 * module rather than an exposed serverless route.
 */

/**
 * Escapes special HTML characters to prevent XSS in email templates.
 *
 * @param {string} str - Raw input string
 * @returns {string} Escaped string safe for HTML interpolation
 */
export function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return str.replace(/[&<>"']/g, function(m) { return map[m]; });
}
