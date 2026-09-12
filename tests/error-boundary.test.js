import test from 'node:test';
import assert from 'node:assert/strict';
import { ErrorBoundary } from '../src/components/ErrorBoundary.js';

test('error-boundary: getDerivedStateFromError sets hasError and generates errorId', () => {
  const error = new Error('Test component crash');
  const state = ErrorBoundary.getDerivedStateFromError(error);

  assert.strictEqual(state.hasError, true);
  assert.ok(state.errorId, 'Must generate a non-empty correlation errorId');
  assert.strictEqual(typeof state.errorId, 'string');
});

test('error-boundary: render returns fallback UI when hasError is true', () => {
  const instance = new ErrorBoundary({ children: 'Child Content' });
  instance.state = { hasError: true, errorId: 'test1234' };

  const rendered = instance.render();

  assert.ok(rendered, 'Fallback must not be null or undefined');
  assert.strictEqual(rendered.props.role, 'alert', 'Fallback UI must have role="alert" for accessibility');
});

test('error-boundary: supports custom fallback renderer function', () => {
  let customFallbackCalled = false;
  const customFallback = ({ errorId }) => {
    customFallbackCalled = true;
    return `Custom Error: ${errorId}`;
  };

  const instance = new ErrorBoundary({ fallback: customFallback });
  instance.state = { hasError: true, errorId: 'err-abc' };

  const rendered = instance.render();

  assert.strictEqual(customFallbackCalled, true);
  assert.strictEqual(rendered, 'Custom Error: err-abc');
});

test('error-boundary: renders children normally when hasError is false', () => {
  const children = 'Healthy Component Tree';
  const instance = new ErrorBoundary({ children });
  instance.state = { hasError: false, errorId: null };

  const rendered = instance.render();

  assert.strictEqual(rendered, children);
});
