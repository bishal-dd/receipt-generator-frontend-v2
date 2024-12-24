import { useSuspenseQuery } from "@tanstack/react-query";
import { requestAPI } from "@/utils";
import { userReceiptsQuery } from "../graphql/queries/userReceipts";
import { GetUserReceiptsQuery, ReceiptFragmentFragment } from "@/gql/graphql";
export function useReceipts() {
  const {
    data,
    isLoading: receiptLoading,
    error,
  } = useSuspenseQuery<GetUserReceiptsQuery, Error>({
    queryKey: ["userReceipts"],
    queryFn: async () => {
      const response = await requestAPI<GetUserReceiptsQuery>(
        userReceiptsQuery
      );
      return response;
    },
  });
  return {
    receipts: data?.receipts.edges.map(
      (edge) => edge.node
    ) as ReceiptFragmentFragment[],
    receiptLoading,
    hasNextPage: data?.receipts.pageInfo.hasNextPage,
    hasPreviousPage: data?.receipts.pageInfo.hasPreviousPage,
    error,
  };
}
