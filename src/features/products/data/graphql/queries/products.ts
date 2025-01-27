import { graphql } from '@/gql';

export const productsQuery = graphql(`
  query Products {
    products {
      ...ProductFragment
    }
  }
`);
