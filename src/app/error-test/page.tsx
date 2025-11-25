'use client';

import posthog from 'posthog-js';

export default function ErrorTestPage() {
  const throwError = () => {
    try {
      throw new Error('Test error from the Error Test Page!');
    } catch (err: any) {
      posthog.capture('$exception', {
        error: err.message,
        stack: err.stack,
        source: 'ErrorTestPage',
      });

      throw err; // keep normal crash behavior
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Error Test Page</h1>
      <p>Click the button below to trigger an error and send it to PostHog.</p>

      <button
        onClick={throwError}
        style={{
          padding: '12px 20px',
          fontSize: 16,
          background: 'red',
          color: 'white',
          borderRadius: 8,
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Trigger Error
      </button>
    </div>
  );
}
