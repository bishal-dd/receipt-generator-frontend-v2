import { useMutation } from '@tanstack/react-query';
import { DownloadPdf } from '@/gql/graphql';
import { saveReceiptMutation } from '../graphql/mutations/saveReceiptMutation';
import { useRequestAPI } from '@/utils';

export function useSaveReceipt() {
  const requestAPI = useRequestAPI();

  const mutation = useMutation({
    mutationFn: async (input: DownloadPdf) => {
      const res = await requestAPI(saveReceiptMutation, { input });
      return res;
    },
  });

  const saveReceipt = (input: DownloadPdf) => {
    const response = mutation.mutate(input);
    return response;
  };

  const saveReceiptAsync = async (input: DownloadPdf) => {
    const response = await mutation.mutateAsync(input);
    return response.saveReceipt;
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
