import { graphql } from '@/gql';

export const receiptEmailAndPhoneNoQuery = graphql(`
  query ReceiptEmailAndPhoneNo($id: ID!) {
    receipt(id: $id) {
      recipient_phone
      recipient_email
    }
  }
`);
