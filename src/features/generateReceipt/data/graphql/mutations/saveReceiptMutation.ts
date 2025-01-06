import { graphql } from '@/gql';

export const saveReceiptMutation = graphql(`
  mutation SaveReceipt($input: DownloadPDF!) {
    saveReceipt(input: $input)
  }
`);
