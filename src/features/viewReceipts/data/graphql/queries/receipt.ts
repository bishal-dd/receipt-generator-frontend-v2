import { graphql } from '@/gql';

export const receiptQuery = graphql(`
  query Receipt($id: ID!) {
    receipt(id: $id) {
      ...ReceiptFragment
      sub_total_amount
      tax_amount
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
