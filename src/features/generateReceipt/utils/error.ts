import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import posthog from 'posthog-js';
export const receiptGenerationError = (
  err: any,
  router: ReturnType<typeof useRouter>
) => {
  posthog.captureException?.(err);

  const graphqlErrors = err.response?.errors;
  const errorMessage =
    graphqlErrors?.[0]?.message || err.message || 'Unknown error';

  // Handle trial limit exceeded
  if (errorMessage === 'trial limit exceeded') {
    toast.error(
      'Trial limit exceeded. Please visit the pricing page to upgrade.',
      {
        action: {
          label: 'Go to Pricing',
          onClick: () => router.push('/home/pricing'),
        },
      }
    );
    return;
  }

  // Generic toast
  toast.error('An error occurred while sending the receipt.');
};
