import { graphql } from '@/gql';

export const searchProductsQuery = graphql(`
  query SearchProducts($query: String) {
    searchProducts(query: $query) {
      name
      user_id
      unit_price
      id
    }
  }
`);
