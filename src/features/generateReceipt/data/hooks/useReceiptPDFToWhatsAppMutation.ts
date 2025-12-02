import { useMutation } from '@tanstack/react-query';
import { SendReceiptPdfToWhatsApp } from '@/gql/graphql';
import { sendReceiptPDFToWhatsAppMutation } from '../graphql/mutations/sendReceiptPDFToWhatsAppMutation';
import { useRequestAPI } from '@/utils';
import { useReceiptGenerationError } from '../../utils';

export function useReceiptPDFToWhatsAppMutation() {
  const requestAPI = useRequestAPI();
  const handleReceiptError = useReceiptGenerationError();

  const mutation = useMutation({
    mutationFn: async (input: SendReceiptPdfToWhatsApp) => {
      const res = await requestAPI(sendReceiptPDFToWhatsAppMutation, {
        input,
      });
      return res;
    },
    onError: (error: any) => handleReceiptError(error),
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
