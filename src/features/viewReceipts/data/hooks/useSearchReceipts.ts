import { useSuspenseQuery } from "@tanstack/react-query";
import { requestAPI } from "@/utils";
import { searchReceiptsQuery } from "../graphql/queries/searchReceipts";
import { SearchReceiptsQuery, ReceiptFragmentFragment } from "@/gql/graphql";
export function useSearchReceipts(page: number) {
  const {
    data,
    isLoading: receiptLoading,
    error,
  } = useSuspenseQuery<SearchReceiptsQuery, Error>({
    queryKey: ["searchReceipts", page],
    queryFn: async () => {
      const response = await requestAPI<SearchReceiptsQuery>(
        searchReceiptsQuery,
        { page }
      );
      return response;
    },
  });
  return {
    receipts: data.searchReceipts.receipts as ReceiptFragmentFragment[],
    receiptLoading,
    totalCount: data.searchReceipts.totalCount,
    foundCount: data.searchReceipts.foundCount,
    error,
  };
}
