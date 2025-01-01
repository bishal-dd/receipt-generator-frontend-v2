import { useSuspenseQuery } from "@tanstack/react-query";
import { requestAPI } from "@/utils";
import { userProfileQuery } from "../graphql/queries/userProfile";
import { UserProfileQuery, ProfileFragmentFragment } from "@/gql/graphql";
import { useAuth } from "@clerk/nextjs";
export function useGenerateReceipt(userId: string) {
  const { getToken } = useAuth();

  const {
    data,
    isLoading: profileLoading,
    error,
  } = useSuspenseQuery<UserProfileQuery, Error>({
    queryKey: ["userProfile", userId],
    queryFn: async () => {
      const token = await getToken();

      const response = await requestAPI<UserProfileQuery>(
        userProfileQuery,
        token,
        {
          userId,
        }
      );
      return response;
    },
  });
  return {
    profile: data?.profileByUserId as ProfileFragmentFragment,
    profileLoading,
    error,
  };
}
