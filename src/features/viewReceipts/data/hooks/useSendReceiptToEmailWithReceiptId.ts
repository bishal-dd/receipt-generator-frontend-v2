import { useMutation } from '@tanstack/react-query';
import { sendReceiptToEmailWithReceiptIdMutation } from '../graphql/mutations/sendReceiptToEmailWithReceiptIdMutation';
import { useRequestAPI } from '@/utils';

// Define the mutation variables type
type MutationVariables = {
  receiptId: string;
  orginazationId: string;
};

export function useSendReceiptToEmailWithReceiptId() {
  const requestAPI = useRequestAPI();
  const mutation = useMutation({
    mutationFn: async (variables: MutationVariables) => {
      return await requestAPI(sendReceiptToEmailWithReceiptIdMutation, {
        receiptId: variables.receiptId,
        orginazationId: variables.orginazationId,
      });
    },
  });

  const sendReceiptToEmailWithReceiptId = (
    receiptId: string,
    orginazationId: string
  ) => {
    mutation.mutate({ receiptId, orginazationId });
  };

  const sendReceiptToEmailWithReceiptIdAsync = async (
    receiptId: string,
    orginazationId: string
  ) => {
    const response = await mutation.mutateAsync({
      receiptId,
      orginazationId,
    });
    return response;
  };

  return {
    sendReceiptToEmailWithReceiptId,
    sendReceiptToEmailWithReceiptIdAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
