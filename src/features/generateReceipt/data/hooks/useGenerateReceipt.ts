import { useQuery } from "@tanstack/react-query";
import { requestAPI } from "@/utils";
import { userProfileQuery } from "../graphql/queries/userProfile";
import { UserProfileQuery, ProfileFragmentFragment } from "@/gql/graphql";
export function useGenerateReceipt(userId: string) {
  const {
    data,
    isLoading: profileLoading,
    error,
  } = useQuery<UserProfileQuery, Error>({
    queryKey: ["userProfile", userId],
    queryFn: async () => {
      const response = await requestAPI<UserProfileQuery>(userProfileQuery, {
        userId,
      });
      return response;
    },
    enabled: !!userId,
  });
  return {
    profile: data?.profileByUserId as ProfileFragmentFragment,
    profileLoading,
    error,
  };
}
