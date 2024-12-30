import { useMutation } from "@tanstack/react-query";
import { DownloadPdf } from "@/gql/graphql";
import { saveReceiptMutation } from "../graphql/mutations/saveReceiptMutation";
import { requestAPI } from "@/utils";

export function useSaveReceipt() {
  const mutation = useMutation({
    mutationFn: async (input: DownloadPdf) => {
      try {
        const res = await requestAPI(saveReceiptMutation, { input });
        return res;
      } catch (error) {
        throw error;
      }
    },
  });

  const saveReceipt = (input: DownloadPdf) => {
    const response = mutation.mutate(input);
    return response;
  };

  const saveReceiptAsync = async (input: DownloadPdf) => {
    try {
      const response = await mutation.mutateAsync(input);
      return response.saveReceipt;
    } catch (error) {
      throw error;
    }
  };

  return {
    saveReceipt,
    saveReceiptAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
