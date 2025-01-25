import { useSuspenseQuery } from '@tanstack/react-query';
import { useRequestAPI } from '@/utils';
import { receiptEmailAndPhoneNoQuery } from '../graphql/queries/receiptEmailAndPhoneNo';
import { ReceiptQuery, Receipt } from '@/gql/graphql';
export function useReceiptEmailAndPhoneNo(id: string) {
  const requestAPI = useRequestAPI();
  const {
    data,
    isLoading: receiptEmailAndPhoneNoLoading,
    error,
  } = useSuspenseQuery<ReceiptQuery, Error>({
    queryKey: ['receiptEmailAndPhoneNo', id],
    queryFn: async () => {
      const response = await requestAPI<ReceiptQuery>(
        receiptEmailAndPhoneNoQuery,
        {
          id,
        }
      );
      return response;
    },
  });
  return {
    receiptEmailAndPhoneNo: data.receipt as Receipt,
    receiptEmailAndPhoneNoLoading,
    error,
  };
}
