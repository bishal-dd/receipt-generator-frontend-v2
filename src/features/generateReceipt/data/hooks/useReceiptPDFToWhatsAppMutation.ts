import { useMutation } from '@tanstack/react-query';
import { SendReceiptPdfToWhatsApp } from '@/gql/graphql';
import { sendReceiptPDFToWhatsAppMutation } from '../graphql/mutations/sendReceiptPDFToWhatsAppMutation';
import { requestAPI } from '@/utils';
import { useAuth } from '@clerk/nextjs';

export function useReceiptPDFToWhatsAppMutation() {
  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (input: SendReceiptPdfToWhatsApp) => {
      try {
        const token = await getToken();

        return await requestAPI(sendReceiptPDFToWhatsAppMutation, token, {
          input,
        });
      } catch (error) {
        console.error('API request failed:', error);
        throw error;
      }
    },
  });

  const sendReceiptPDFToWhatsApp = (input: SendReceiptPdfToWhatsApp) => {
    mutation.mutate(input);
  };

  const sendReceiptPDFToWhatsAppAsync = async (
    input: SendReceiptPdfToWhatsApp
  ) => {
    try {
      const response = await mutation.mutateAsync(input);
      console.log('Profile updated successfully:', response);
      return response;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
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
