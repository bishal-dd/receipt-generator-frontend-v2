import { graphql } from '@/gql';

export const sendReceiptPDFToWhatsAppMutation = graphql(`
  mutation SendReceiptPDFToWhatsApp($input: SendReceiptPDFToWhatsApp!) {
    sendReceiptPDFToWhatsApp(input: $input)
  }
`);
