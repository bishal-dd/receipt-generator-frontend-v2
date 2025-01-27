import { useMutation } from '@tanstack/react-query';
import { updateProductMutation } from '../graphql/mutations/updateProductMutation';
import { useRequestAPI } from '@/utils';
import { UpdateProduct } from '@/gql/graphql';

export function useUpdateProduct() {
  const requestAPI = useRequestAPI();
  const mutation = useMutation({
    mutationFn: async (input: UpdateProduct) => {
      return await requestAPI(updateProductMutation, { input });
    },
  });

  const updateProduct = (input: UpdateProduct) => {
    mutation.mutate(input);
  };

  const updateProductAsync = async (input: UpdateProduct) => {
    const response = await mutation.mutateAsync(input);
    return response;
  };

  return {
    updateProduct,
    updateProductAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
