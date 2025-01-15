import { useMutation } from '@tanstack/react-query';
import { DownloadPdf } from '@/gql/graphql';
import { downloadReceiptPDFMutation } from '../graphql/mutations/downloadReceiptPDFMutation';
import { useRequestAPI } from '@/utils';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export function useDownloadReceiptPDFMutation() {
  const requestAPI = useRequestAPI();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (input: DownloadPdf) => {
      const res = await requestAPI(downloadReceiptPDFMutation, {
        input,
      });
      console.log(res.downloadReceiptPDF);

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

  const downloadReceiptPDF = (input: DownloadPdf) => {
    const response = mutation.mutate(input);
    return response;
  };

  const downloadReceiptPDFAsync = async (input: DownloadPdf) => {
    const response = await mutation.mutateAsync(input);
    return response.downloadReceiptPDF;
  };

  return {
    downloadReceiptPDF,
    downloadReceiptPDFAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
