import { graphql } from '@/gql';

export const updateProfileMutation = graphql(`
  mutation UpdateProfile($input: UpdateProfile!) {
    updateProfile(input: $input) {
      ...ProfileFragment
    }
  }
`);
