import { graphql } from "@/gql";

export const searchReceiptsQuery = graphql(`
  query SearchReceipts($page: Int!) {
    searchReceipts(page: $page) {
      totalCount
      foundCount
      receipts {
        id
        receipt_name
        recipient_name
        recipient_phone
        recipient_email
        recipient_address
        receipt_no
        user_id
        date
        total_amount
        payment_method
      }
    }
  }
`);
