import { graphql } from "@/gql";

export const receiptQuery = graphql(`
  query Receipt($id: ID!) {
    receipt(id: $id) {
      ...ReceiptFragment
    }
  }
`);
