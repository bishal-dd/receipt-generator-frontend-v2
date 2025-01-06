import { graphql } from '@/gql';

export const searchReceiptsQuery = graphql(`
  query SearchReceipts(
    $page: Int!
    $year: Int
    $date: String
    $dateRange: [String!]
  ) {
    searchReceipts(
      page: $page
      year: $year
      date: $date
      dateRange: $dateRange
    ) {
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
        is_receipt_send
      }
    }
  }
`);
