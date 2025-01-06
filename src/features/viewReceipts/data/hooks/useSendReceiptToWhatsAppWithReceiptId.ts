import { useMutation } from '@tanstack/react-query';
import { sendReceiptToWhatsAppWithReceiptIdMutation } from '../graphql/mutations/sendReceiptToWhatsAppWithReceiptIdMutation';
import { requestAPI } from '@/utils';
import { useAuth } from '@clerk/nextjs';

// Define the mutation variables type
type MutationVariables = {
  receiptId: string;
  orginazationId: string;
};

export function useSendReceiptToWhatsAppWithReceiptId() {
  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (variables: MutationVariables) => {
      try {
        const token = await getToken();

        return await requestAPI(
          sendReceiptToWhatsAppWithReceiptIdMutation,
          token,
          {
            receiptId: variables.receiptId,
            orginazationId: variables.orginazationId,
          }
        );
      } catch (error) {
        throw error;
      }
    },
  });

  const sendReceiptToWhatsAppWithReceiptId = (
    receiptId: string,
    orginazationId: string
  ) => {
    mutation.mutate({ receiptId, orginazationId });
  };

  const sendReceiptToWhatsAppWithReceiptIdAsync = async (
    receiptId: string,
    orginazationId: string
  ) => {
    try {
      const response = await mutation.mutateAsync({
        receiptId,
        orginazationId,
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  return {
    sendReceiptToWhatsAppWithReceiptId,
    sendReceiptToWhatsAppWithReceiptIdAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
