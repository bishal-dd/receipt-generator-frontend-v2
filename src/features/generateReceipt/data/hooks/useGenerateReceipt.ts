import { useQuery } from "@tanstack/react-query";
import { requestAPI } from "@/utils";
import { userProfileQuery } from "../graphql/queries/userProfile";
import { UserProfileQuery } from "@/gql/graphql";
export function useGenerateReceipt(userId: string) {
  const getUserProfile = () => {
    const { data, isLoading, error } = useQuery({
      queryKey: ["userProfile", userId],
      queryFn: async () => {
        return await requestAPI(userProfileQuery, { userId });
      },
      enabled: !!userId,
    });

    return {
      profile: data?.profileByUserId,
      isLoading,
      error,
    };
  };
  return {
    getUserProfile,
  };
}
