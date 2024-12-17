import { useMutation } from "@tanstack/react-query";
import { SendReceiptPdfToWhatsApp } from "@/gql/graphql";
import { sendReceiptPDFToWhatsAppMutation } from "../graphql/mutations/sendReceiptPDFToWhatsAppMutation";
import { requestAPI } from "@/utils";

export function useReceiptPDFToWhatsAppMutation() {
  const mutation = useMutation({
    mutationFn: async (input: SendReceiptPdfToWhatsApp) => {
      try {
        return await requestAPI(sendReceiptPDFToWhatsAppMutation, { input });
      } catch (error) {
        console.error("API request failed:", error);
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
      console.log("Profile updated successfully:", response);
      return response;
    } catch (error) {
      console.error("Error updating profile:", error);
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
