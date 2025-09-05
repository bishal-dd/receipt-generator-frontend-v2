import { useMutation } from '@tanstack/react-query';
import { downloadReceiptPDFWithReceiptIdMutation } from '../graphql/mutations/downloadReceiptPDFWithReceiptIdMutation';
import { useRequestAPI } from '@/utils';

// Define the mutation variables type
type MutationVariables = {
  receiptId: string;
  orginazationId: string;
};

export function useDownloadReceiptPDFWithReceiptId() {
  const requestAPI = useRequestAPI();
  const mutation = useMutation({
    mutationFn: async (variables: MutationVariables) => {
      const res = await requestAPI(downloadReceiptPDFWithReceiptIdMutation, {
        receiptId: variables.receiptId,
        orginazationId: variables.orginazationId,
      });
      return res;
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
    const response = await mutation.mutateAsync({
      receiptId,
      orginazationId,
    });
    console.log(response);
    return response.downloadEncryptedReceiptPDFWithReceiptId;
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
