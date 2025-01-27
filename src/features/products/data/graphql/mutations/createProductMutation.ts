import { graphql } from '@/gql';

export const createProductMutation = graphql(`
  mutation CreateProduct($input: CreateProduct!) {
    createProduct(input: $input) {
      ...ProductFragment
    }
  }
`);
