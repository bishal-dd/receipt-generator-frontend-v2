import { graphql } from '@/gql';

export const sendReceiptToWhatsAppWithReceiptIdMutation = graphql(`
  mutation SendReceiptPDFToWhatsAppWithReceiptId(
    $receiptId: String!
    $orginazationId: String!
    $phoneNumber: String!
  ) {
    sendReceiptPDFToWhatsAppWithReceiptId(
      receiptId: $receiptId
      orginazationId: $orginazationId
      phoneNumber: $phoneNumber
    )
  }
`);
