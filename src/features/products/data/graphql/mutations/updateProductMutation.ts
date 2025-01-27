import { graphql } from '@/gql';

export const updateProductMutation = graphql(`
  mutation UpdateProduct($input: UpdateProduct!) {
    updateProduct(input: $input) {
      ...ProductFragment
    }
  }
`);
