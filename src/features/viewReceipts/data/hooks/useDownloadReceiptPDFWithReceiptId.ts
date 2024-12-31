import { useMutation } from "@tanstack/react-query";
import { downloadReceiptPDFWithReceiptIdMutation } from "../graphql/mutations/downloadReceiptPDFWithReceiptIdMutation";
import { requestAPI } from "@/utils";

// Define the mutation variables type
type MutationVariables = {
  receiptId: string;
  orginazationId: string;
};

export function useDownloadReceiptPDFWithReceiptId() {
  const mutation = useMutation({
    mutationFn: async (variables: MutationVariables) => {
      try {
        return await requestAPI(downloadReceiptPDFWithReceiptIdMutation, {
          receiptId: variables.receiptId,
          orginazationId: variables.orginazationId,
        });
      } catch (error) {
        throw error;
      }
    },
  });

  const downloadReceiptPDFWithReceiptId = (
    receiptId: string,
    orginazationId: string
  ) => {
    const res = mutation.mutate({ receiptId, orginazationId });
    return res;
  };

  const downloadReceiptPDFWithReceiptIdAsync = async (
    receiptId: string,
    orginazationId: string
  ) => {
    try {
      const response = await mutation.mutateAsync({
        receiptId,
        orginazationId,
      });
      return response.downloadReceiptPDFWithReceiptId;
    } catch (error) {
      throw error;
    }
  };

  return {
    downloadReceiptPDFWithReceiptId,
    downloadReceiptPDFWithReceiptIdAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}