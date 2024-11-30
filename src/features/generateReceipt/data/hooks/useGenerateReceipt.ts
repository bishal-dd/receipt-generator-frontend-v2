import { useQuery } from "@tanstack/react-query";
import { requestAPI } from "@/utils";
import { userProfileQuery } from "../graphql/queries/userProfile";
import { UserProfileQuery, ProfileFragmentFragment } from "@/gql/graphql";
export function useGenerateReceipt(userId: string) {
  const getUserProfile = () => {
    const { data, isLoading, error } = useQuery<UserProfileQuery, Error>({
      queryKey: ["userProfile", userId],
      queryFn: async () => {
        const response = await requestAPI<UserProfileQuery>(userProfileQuery, {
          userId,
        });
        return response;
      },
      enabled: !!userId, // Only run query if userId exists
    });
    console.log(data);
    const profile = data?.profileByUserId as ProfileFragmentFragment;
    return {
      profile: profile,
      isLoading,
      error,
    };
  };
  return {
    getUserProfile,
  };
}
