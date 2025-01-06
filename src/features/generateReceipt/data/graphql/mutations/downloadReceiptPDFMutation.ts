import { graphql } from '@/gql';

export const downloadReceiptPDFMutation = graphql(`
  mutation DownloadReceiptPDF($input: DownloadPDF!) {
    downloadReceiptPDF(input: $input)
  }
`);
