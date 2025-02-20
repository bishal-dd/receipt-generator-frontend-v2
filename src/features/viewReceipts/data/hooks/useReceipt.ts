import { useSuspenseQuery } from '@tanstack/react-query';
import { useRequestAPI } from '@/utils';
import { receiptQuery } from '../graphql/queries/receipt';
import { ReceiptQuery, Receipt } from '@/gql/graphql';
export function useReceipt(id: string) {
  const requestAPI = useRequestAPI();
  const {
    data,
    isLoading: receiptLoading,
    error,
  } = useSuspenseQuery<ReceiptQuery, Error>({
    queryKey: ['receipt', id],
    queryFn: async () => {
      const response = await requestAPI<ReceiptQuery>(receiptQuery, {
        id,
      });
      return response;
    },
  });
  return {
    receipt: data.receipt as Receipt,
    receiptLoading,
    error,
  };
}
