import { useMutation } from '@tanstack/react-query';
import { DownloadPdf } from '@/gql/graphql';
import { downloadReceiptPDFMutation } from '../graphql/mutations/downloadReceiptPDFMutation';
import { useRequestAPI } from '@/utils';
import { useReceiptGenerationError } from '../../utils';

export function useDownloadReceiptPDFMutation() {
  const requestAPI = useRequestAPI();
  const handleReceiptError = useReceiptGenerationError();

  const mutation = useMutation({
    mutationFn: async (input: DownloadPdf) => {
      const res = await requestAPI(downloadReceiptPDFMutation, {
        input,
      });
      return res;
    },
    onError: (error: any) => handleReceiptError(error),
  });

  const downloadReceiptPDF = (input: DownloadPdf) => {
    const response = mutation.mutate(input);
    return response;
  };

  const downloadReceiptPDFAsync = async (input: DownloadPdf) => {
    const response = await mutation.mutateAsync(input);
    return response.downloadReceiptPDF;
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
