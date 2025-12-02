import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import posthog from 'posthog-js';

// Refactored into a custom hook to use useRouter internally
export const useReceiptGenerationError = () => {
  const router = useRouter();

  const handleError = (err: any) => {
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
            onClick: () => router.push('/home/pricing'), // router is now in scope
          },
        }
      );
      return;
    }

    // Handle 'not enough stock' error message
    if (errorMessage.startsWith('not enough stock for product ID')) {
      toast.error(
        'Insufficient stock available. Please review the quantity for the products in your order.'
      );
      return;
    }

    // Generic toast
    toast.error('An error occurred while sending the receipt.');
  };

  return handleError;
};
