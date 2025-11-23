import { graphql } from '@/gql';

graphql(`
  fragment ReceiptFragment on Receipt {
    id
    receipt_name
    recipient_name
    recipient_phone
    recipient_email
    recipient_address
    receipt_no
    user_id
    date
    payment_method
    payment_note
    total_amount
    discount_amount
    sub_total_amount
    tax_amount
    is_receipt_send
  }
`);
