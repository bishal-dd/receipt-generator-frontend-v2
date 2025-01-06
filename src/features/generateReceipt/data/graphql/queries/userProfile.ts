import { graphql } from '@/gql';

export const userProfileQuery = graphql(`
  query UserProfile($userId: String!) {
    profileByUserId(userId: $userId) {
      ...ProfileFragment
    }
  }
`);
