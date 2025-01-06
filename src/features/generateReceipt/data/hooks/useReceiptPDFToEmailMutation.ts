import { useMutation } from '@tanstack/react-query';
import { SendReceiptPdfToEmail } from '@/gql/graphql';
import { sendReceiptPDFToEmailMutation } from '../graphql/mutations/sendReceiptPDFToEmailMutation';
import { requestAPI } from '@/utils';
import { useAuth } from '@clerk/nextjs';

export function useReceiptPDFToEmailMutation() {
  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (input: SendReceiptPdfToEmail) => {
      try {
        const token = await getToken();

        return await requestAPI(sendReceiptPDFToEmailMutation, token, {
          input,
        });
      } catch (error) {
        console.error('API request failed:', error);
        throw error;
      }
    },
  });

  const sendReceiptPDFToEmail = (input: SendReceiptPdfToEmail) => {
    mutation.mutate(input);
  };

  const sendReceiptPDFToEmailAsync = async (input: SendReceiptPdfToEmail) => {
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
    sendReceiptPDFToEmail,
    sendReceiptPDFToEmailAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
