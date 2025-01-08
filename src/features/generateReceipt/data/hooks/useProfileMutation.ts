import { useMutation } from '@tanstack/react-query';
import { UpdateProfile } from '@/gql/graphql';
import { updateProfileMutation } from '../graphql/mutations/updateProfileMutation';
import { useRequestAPI } from '@/utils';

export function useProfileMutation() {
  const requestAPI = useRequestAPI();

  const mutation = useMutation({
    mutationFn: async (input: UpdateProfile) => {
      return await requestAPI(updateProfileMutation, { input });
    },
  });

  const updateProfile = (input: UpdateProfile) => {
    mutation.mutate(input);
  };

  const updateProfileAsync = async (input: UpdateProfile) => {
    const response = await mutation.mutateAsync(input);
    return response;
  };

  return {
    updateProfile,
    updateProfileAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
