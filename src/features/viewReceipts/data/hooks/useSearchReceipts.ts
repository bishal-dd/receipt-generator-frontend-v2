import { useSuspenseQuery } from "@tanstack/react-query";
import { requestAPI } from "@/utils";
import { searchReceiptsQuery } from "../graphql/queries/searchReceipts";
import { SearchReceiptsQuery, ReceiptFragmentFragment } from "@/gql/graphql";
import { useAuth } from "@clerk/nextjs";
export function useSearchReceipts(
  page: number,
  year?: number | undefined,
  date?: string | null,
  dateRange?: [string, string] | undefined
) {
  const { getToken } = useAuth();

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
      const token = await getToken();
      const response = await requestAPI<SearchReceiptsQuery>(
        searchReceiptsQuery,
        token,
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
