import { useMutation } from "@tanstack/react-query";
import { SendReceiptPdfToEmail } from "@/gql/graphql";
import { sendReceiptPDFToEmailMutation } from "../graphql/mutations/sendReceiptPDFToEmailMutation";
import { requestAPI } from "@/utils";

export function useReceiptPDFToEmailMutation() {
  const mutation = useMutation({
    mutationFn: async (input: SendReceiptPdfToEmail) => {
      try {
        return await requestAPI(sendReceiptPDFToEmailMutation, { input });
      } catch (error) {
        console.error("API request failed:", error);
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
      console.log("Profile updated successfully:", response);
      return response;
    } catch (error) {
      console.error("Error updating profile:", error);
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
