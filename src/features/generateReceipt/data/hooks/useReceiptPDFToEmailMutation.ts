import { useMutation } from '@tanstack/react-query';
import { SendReceiptPdfToEmail } from '@/gql/graphql';
import { sendReceiptPDFToEmailMutation } from '../graphql/mutations/sendReceiptPDFToEmailMutation';
import { useRequestAPI } from '@/utils';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function useReceiptPDFToEmailMutation() {
  const requestAPI = useRequestAPI();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (input: SendReceiptPdfToEmail) => {
      return await requestAPI(sendReceiptPDFToEmailMutation, {
        input,
      });
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

  const sendReceiptPDFToEmail = (input: SendReceiptPdfToEmail) => {
    mutation.mutate(input);
  };

  const sendReceiptPDFToEmailAsync = async (input: SendReceiptPdfToEmail) => {
    const response = await mutation.mutateAsync(input);
    return response;
  };

  return {
    sendReceiptPDFToEmail,
    sendReceiptPDFToEmailAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
