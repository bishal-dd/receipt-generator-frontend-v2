import { graphql } from '@/gql';

export const deleteProductMutation = graphql(`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id)
  }
`);
