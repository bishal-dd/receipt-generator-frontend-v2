import { graphql } from "@/gql";

export const sendReceiptPDFToEmailMutation = graphql(`
  mutation SendReceiptPDFToEmail($input: SendReceiptPDFToEmail!) {
    sendReceiptPDFToEmail(input: $input)
  }
`);
