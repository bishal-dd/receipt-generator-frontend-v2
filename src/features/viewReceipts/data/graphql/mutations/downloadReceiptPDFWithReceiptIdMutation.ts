import { graphql } from '@/gql';

export const downloadReceiptPDFWithReceiptIdMutation = graphql(`
  mutation DownloadReceiptPDFWithReceiptId(
    $receiptId: String!
    $orginazationId: String!
  ) {
    downloadEncryptedReceiptPDFWithReceiptId(
      receiptId: $receiptId
      orginazationId: $orginazationId
    )
  }
`);
