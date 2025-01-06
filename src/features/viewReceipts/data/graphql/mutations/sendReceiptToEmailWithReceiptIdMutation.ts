import { graphql } from '@/gql';

export const sendReceiptToEmailWithReceiptIdMutation = graphql(`
  mutation SendReceiptPDFToEmailWithReceiptId(
    $receiptId: String!
    $orginazationId: String!
  ) {
    sendReceiptPDFToEmailWithReceiptId(
      receiptId: $receiptId
      orginazationId: $orginazationId
    )
  }
`);
