import { useMutation } from '@tanstack/react-query';
import { sendReceiptToWhatsAppWithReceiptIdMutation } from '../graphql/mutations/sendReceiptToWhatsAppWithReceiptIdMutation';
import { useRequestAPI } from '@/utils';

// Define the mutation variables type
type MutationVariables = {
  receiptId: string;
  orginazationId: string;
  phoneNumber: string;
};

export function useSendReceiptToWhatsAppWithReceiptId() {
  const requestAPI = useRequestAPI();
  const mutation = useMutation({
    mutationFn: async (variables: MutationVariables) => {
      return await requestAPI(sendReceiptToWhatsAppWithReceiptIdMutation, {
        receiptId: variables.receiptId,
        orginazationId: variables.orginazationId,
        phoneNumber: variables.phoneNumber,
      });
    },
  });

  const sendReceiptToWhatsAppWithReceiptId = (
    receiptId: string,
    orginazationId: string,
    phoneNumber: string
  ) => {
    mutation.mutate({ receiptId, orginazationId, phoneNumber });
  };

  const sendReceiptToWhatsAppWithReceiptIdAsync = async (
    receiptId: string,
    orginazationId: string,
    phoneNumber: string
  ) => {
    const response = await mutation.mutateAsync({
      receiptId,
      orginazationId,
      phoneNumber,
    });
    return response;
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
