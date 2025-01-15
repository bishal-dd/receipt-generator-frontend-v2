import { useMutation } from '@tanstack/react-query';
import { SendReceiptPdfToWhatsApp } from '@/gql/graphql';
import { sendReceiptPDFToWhatsAppMutation } from '../graphql/mutations/sendReceiptPDFToWhatsAppMutation';
import { useRequestAPI } from '@/utils';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export function useReceiptPDFToWhatsAppMutation() {
  const requestAPI = useRequestAPI();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: async (input: SendReceiptPdfToWhatsApp) => {
      const res = await requestAPI(sendReceiptPDFToWhatsAppMutation, {
        input,
      });
      return res;
    },
    onError: (error: any) => {
      // Handle specific error for trial limit exceeded
      const graphqlErrors = error.response?.errors;
      if (graphqlErrors && graphqlErrors.length > 0) {
        const errorMessage = graphqlErrors[0]?.message;

        // Handle specific error for trial limit exceeded
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
      }

      // Generic error handling for other cases
      toast.error('An error occurred while sending the receipt.');
    },
  });

  const sendReceiptPDFToWhatsApp = (input: SendReceiptPdfToWhatsApp) => {
    mutation.mutate(input);
  };

  const sendReceiptPDFToWhatsAppAsync = async (
    input: SendReceiptPdfToWhatsApp
  ) => {
    const response = await mutation.mutateAsync(input);
    return response;
  };

  return {
    sendReceiptPDFToWhatsApp,
    sendReceiptPDFToWhatsAppAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
