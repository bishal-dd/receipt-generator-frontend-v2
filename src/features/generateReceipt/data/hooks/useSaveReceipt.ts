import { useMutation } from '@tanstack/react-query';
import { DownloadPdf } from '@/gql/graphql';
import { saveReceiptMutation } from '../graphql/mutations/saveReceiptMutation';
import { requestAPI } from '@/utils';
import { useAuth } from '@clerk/nextjs';

export function useSaveReceipt() {
  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (input: DownloadPdf) => {
      const token = await getToken();

      const res = await requestAPI(saveReceiptMutation, token, { input });
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
