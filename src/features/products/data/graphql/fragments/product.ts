import { graphql } from '@/gql';

graphql(`
  fragment ProductFragment on Product {
    id
    name
    unit_price
  }
`);
