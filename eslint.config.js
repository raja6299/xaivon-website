import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  // Browser / React files
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      // Enable useful rules
      'no-undef': 'error',
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
      'react-hooks/set-state-in-effect': 'error',
    },
  },
  // Node / server-side files (API routes, scripts)
  {
    files: ['api/**/*.js', 'scripts/**/*.js'],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'no-undef': 'off', // globals.node provides process
    },
  },
  // Page files where we allow unused imports/vars
  {
    files: ['src/pages/**/*.jsx'],
    rules: {
      'no-unused-vars': 'off',
    },
  },
  // Disable set-state-in-effect rule for specific components
  {
    files: ['src/components/Navbar.jsx', 'src/hooks/useCountUp.js'],
    rules: {
      'react-hooks/set-state-in-effect': 'off',
    },
  },
  // Allow process globals in src/lib files
  {
    files: ['src/lib/**/*.js'],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'no-undef': 'off',
    },
  },
]);
