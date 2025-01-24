import { graphql } from '@/gql';

export const sendReceiptToEmailWithReceiptIdMutation = graphql(`
  mutation SendReceiptPDFToEmailWithReceiptId(
    $receiptId: String!
    $orginazationId: String!
    $email: String!
  ) {
    sendReceiptPDFToEmailWithReceiptId(
      receiptId: $receiptId
      orginazationId: $orginazationId
      email: $email
    )
  }
`);
