import { useMutation } from "@tanstack/react-query";
import { sendReceiptToWhatsAppWithReceiptIdMutation } from "../graphql/mutations/sendReceiptToWhatsAppWithReceiptIdMutation";
import { requestAPI } from "@/utils";

// Define the mutation variables type
type MutationVariables = {
  receiptId: string;
  orginazationId: string;
};

export function useSendReceiptToWhatsAppWithReceiptId() {
  const mutation = useMutation({
    mutationFn: async (variables: MutationVariables) => {
      try {
        return await requestAPI(sendReceiptToWhatsAppWithReceiptIdMutation, {
          receiptId: variables.receiptId,
          orginazationId: variables.orginazationId,
        });
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
