import { graphql } from "@/gql";

export const userReceiptsQuery = graphql(`
  query GetUserReceipts {
    receipts {
      edges {
        node {
          ...ReceiptFragment
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`);
