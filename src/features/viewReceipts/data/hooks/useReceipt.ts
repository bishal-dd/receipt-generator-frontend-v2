import { useSuspenseQuery } from "@tanstack/react-query";
import { requestAPI } from "@/utils";
import { receiptQuery } from "../graphql/queries/receipt";
import { ReceiptQuery } from "@/gql/graphql";
export function useReceipt(id: string) {
  const {
    data,
    isLoading: receiptLoading,
    error,
  } = useSuspenseQuery<ReceiptQuery, Error>({
    queryKey: ["receipt", id],
    queryFn: async () => {
      const response = await requestAPI<ReceiptQuery>(receiptQuery, {
        id,
      });
      return response;
    },
  });
  return {
    receipt: data.receipt,
    receiptLoading,
    error,
  };
}
