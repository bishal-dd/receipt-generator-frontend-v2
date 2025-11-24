import { graphql } from '@/gql';

export const receiptQuery = graphql(`
  query Receipt($id: ID!) {
    encryptedReceipt(id: $id) {
      ...ReceiptFragment
      Services {
        id
        description
        rate
        quantity
        amount
      }
    }
  }
`);
