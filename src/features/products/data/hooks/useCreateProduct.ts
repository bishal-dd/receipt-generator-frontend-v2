import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProductMutation } from '../graphql/mutations/createProductMutation';
import { useRequestAPI } from '@/utils';
import { CreateProduct, ProductFragmentFragment } from '@/gql/graphql';

export function useCreateProduct() {
  const requestAPI = useRequestAPI();
  const queryClient = useQueryClient(); // <-- CRITICAL FIX: Get the client here

  const mutation = useMutation({
    mutationFn: async (input: CreateProduct) => {
      return await requestAPI(createProductMutation, { input });
    },
    onSuccess: (data, variables) => {
      // *** CRITICAL FIX: Invalidate the specific query cache after successful creation ***
      // This forces the useProducts hook to refetch the data, including the newly created item.
      queryClient.invalidateQueries({
        queryKey: ['userProducts', variables.type],
      });
    },
  });

  const createProduct = (input: CreateProduct) => {
    mutation.mutate(input);
  };

  const createProductAsync = async (input: CreateProduct) => {
    const response = await mutation.mutateAsync(input);
    return response.createProduct as ProductFragmentFragment;
  };

  return {
    createProduct,
    createProductAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
