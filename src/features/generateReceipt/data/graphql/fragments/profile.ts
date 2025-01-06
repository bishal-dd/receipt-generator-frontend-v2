import { graphql } from '@/gql';

graphql(`
  fragment ProfileFragment on Profile {
    id
    company_name
    logo_image
    phone_no
    email
    address
    city
    title
    signature_image
    currency
    tax
    phone_number_country_code
  }
`);
