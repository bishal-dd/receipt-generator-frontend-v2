import { useSuspenseQuery } from '@tanstack/react-query';
import { requestAPI } from '@/utils';
import { receiptQuery } from '../graphql/queries/receipt';
import { ReceiptQuery, Receipt } from '@/gql/graphql';
import { useAuth } from '@clerk/nextjs';
export function useReceipt(id: string) {
  const { getToken } = useAuth();

  const {
    data,
    isLoading: receiptLoading,
    error,
  } = useSuspenseQuery<ReceiptQuery, Error>({
    queryKey: ['receipt', id],
    queryFn: async () => {
      const token = await getToken();

      const response = await requestAPI<ReceiptQuery>(receiptQuery, token, {
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
