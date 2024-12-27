import { useSuspenseQuery } from "@tanstack/react-query";
import { requestAPI } from "@/utils";
import { searchReceiptsQuery } from "../graphql/queries/searchReceipts";
import { SearchReceiptsQuery, ReceiptFragmentFragment } from "@/gql/graphql";
export function useSearchReceipts(
  page: number,
  year?: number | undefined,
  date?: string | null,
  dateRange?: [string, string] | undefined
) {
  const variables: Record<string, any> = { page };

  if (year) variables.year = year;
  if (date) variables.date = date;
  if (dateRange) variables.dateRange = dateRange;
  const {
    data,
    isLoading: receiptLoading,
    error,
  } = useSuspenseQuery<SearchReceiptsQuery, Error>({
    queryKey: ["searchReceipts", page, year, date, dateRange],
    queryFn: async () => {
      const response = await requestAPI<SearchReceiptsQuery>(
        searchReceiptsQuery,
        variables
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
