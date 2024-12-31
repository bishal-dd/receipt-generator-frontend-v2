import { graphql } from "@/gql";

export const downloadReceiptPDFWithReceiptIdMutation = graphql(`
  mutation DownloadReceiptPDFWithReceiptId(
    $receiptId: String!
    $orginazationId: String!
  ) {
    downloadReceiptPDFWithReceiptId(
      receiptId: $receiptId
      orginazationId: $orginazationId
    )
  }
`);
