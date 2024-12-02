import { useMutation } from "@tanstack/react-query";
import { UpdateProfile } from "@/gql/graphql";
import { updateProfileMutation } from "../graphql/mutations/updateProfileMutation";
import { requestAPI } from "@/utils";

export function useProfileMutation() {
  const mutation = useMutation({
    mutationFn: (input: UpdateProfile) => {
      return requestAPI(updateProfileMutation, {
        input,
      });
    },
  });

  const updateProfile = (input: UpdateProfile) => {
    console.log(input);
    mutation.mutate(input);
  };

  const updateProfileAsync = async (input: UpdateProfile) => {
    try {
      await mutation.mutateAsync(input);
      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return {
    updateProfile,
    updateProfileAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
}
