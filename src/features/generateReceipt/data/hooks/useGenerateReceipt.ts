import { useSuspenseQuery } from '@tanstack/react-query';
import { useRequestAPI } from '@/utils';
import { userProfileQuery } from '../graphql/queries/userProfile';
import { UserProfileQuery, ProfileFragmentFragment } from '@/gql/graphql';
export function useGenerateReceipt(userId: string) {
  const requestAPI = useRequestAPI();

  const {
    data,
    isLoading: profileLoading,
    error,
  } = useSuspenseQuery<UserProfileQuery, Error>({
    queryKey: ['userProfile', userId],
    queryFn: async () => {
      const response = await requestAPI<UserProfileQuery>(userProfileQuery, {
        userId,
      });
      return response;
    },
  });
  return {
    profile: data?.profileByUserId as ProfileFragmentFragment,
    profileLoading,
    error,
  };
}
