import { useMutation } from '@tanstack/react-query';
import { SendReceiptPdfToEmail } from '@/gql/graphql';
import { sendReceiptPDFToEmailMutation } from '../graphql/mutations/sendReceiptPDFToEmailMutation';
import { useRequestAPI } from '@/utils';

export function useReceiptPDFToEmailMutation() {
  const requestAPI = useRequestAPI();

  const mutation = useMutation({
    mutationFn: async (input: SendReceiptPdfToEmail) => {
      return await requestAPI(sendReceiptPDFToEmailMutation, {
        input,
      });
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
