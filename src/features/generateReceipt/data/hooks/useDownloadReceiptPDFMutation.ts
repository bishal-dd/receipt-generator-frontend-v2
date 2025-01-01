import { useMutation } from "@tanstack/react-query";
import { DownloadPdf } from "@/gql/graphql";
import { downloadReceiptPDFMutation } from "../graphql/mutations/downloadReceiptPDFMutation";
import { requestAPI } from "@/utils";
import { useAuth } from "@clerk/nextjs";

export function useDownloadReceiptPDFMutation() {
  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (input: DownloadPdf) => {
      try {
        const token = await getToken();

        const res = await requestAPI(downloadReceiptPDFMutation, token, {
          input,
        });
        return res;
      } catch (error) {
        throw error;
      }
    },
  });

  const downloadReceiptPDF = (input: DownloadPdf) => {
    const response = mutation.mutate(input);
    return response;
  };

  const downloadReceiptPDFAsync = async (input: DownloadPdf) => {
    try {
      const response = await mutation.mutateAsync(input);
      console.log("Profile updated successfully:", response);
      return response.downloadReceiptPDF;
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  };

  return {
    downloadReceiptPDF,
    downloadReceiptPDFAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
