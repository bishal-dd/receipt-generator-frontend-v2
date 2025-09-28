import { graphql } from '@/gql';

export const verifyReceiptFileMutation = graphql(`
  mutation VerifyReceiptFile($file: Upload!) {
    verifyReceiptFile(file: $file)
  }
`);
