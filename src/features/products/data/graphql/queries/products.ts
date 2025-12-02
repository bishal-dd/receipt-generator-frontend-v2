import { graphql } from '@/gql';

export const productsQuery = graphql(`
  query Products($productType: String!) {
    products(productType: $productType) {
      ...ProductFragment
    }
  }
`);
