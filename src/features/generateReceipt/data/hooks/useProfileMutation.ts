import { useMutation } from '@tanstack/react-query';
import { UpdateProfile } from '@/gql/graphql';
import { updateProfileMutation } from '../graphql/mutations/updateProfileMutation';
import { requestAPI } from '@/utils';
import { useAuth } from '@clerk/nextjs';

export function useProfileMutation() {
  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (input: UpdateProfile) => {
      try {
        const token = await getToken();

        return await requestAPI(updateProfileMutation, token, { input });
      } catch (error) {
        console.error('API request failed:', error);
        throw error;
      }
    },
  });

  const updateProfile = (input: UpdateProfile) => {
    mutation.mutate(input);
  };

  const updateProfileAsync = async (input: UpdateProfile) => {
    try {
      const response = await mutation.mutateAsync(input);
      console.log('Profile updated successfully:', response);
      return response;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
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
