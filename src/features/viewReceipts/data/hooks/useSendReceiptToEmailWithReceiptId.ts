import { useMutation } from "@tanstack/react-query";
import { sendReceiptToEmailWithReceiptIdMutation } from "../graphql/mutations/sendReceiptToEmailWithReceiptIdMutation";
import { requestAPI } from "@/utils";
import { useAuth } from "@clerk/nextjs";

// Define the mutation variables type
type MutationVariables = {
  receiptId: string;
  orginazationId: string;
};

export function useSendReceiptToEmailWithReceiptId() {
  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (variables: MutationVariables) => {
      try {
        const token = await getToken();

        return await requestAPI(
          sendReceiptToEmailWithReceiptIdMutation,
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
    sendReceiptToEmailWithReceiptId,
    sendReceiptToEmailWithReceiptIdAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
