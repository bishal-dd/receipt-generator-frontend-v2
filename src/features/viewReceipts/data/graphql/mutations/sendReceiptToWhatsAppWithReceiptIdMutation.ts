import { graphql } from '@/gql';

export const sendReceiptToWhatsAppWithReceiptIdMutation = graphql(`
  mutation SendReceiptPDFToWhatsAppWithReceiptId(
    $receiptId: String!
    $orginazationId: String!
    $phoneNumber: String!
  ) {
    sendEncryptedReceiptPDFToWhatsAppWithReceiptID(
      receiptId: $receiptId
      orginazationId: $orginazationId
      phoneNumber: $phoneNumber
    )
  }
`);
