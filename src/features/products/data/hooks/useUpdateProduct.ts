import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProductMutation } from '../graphql/mutations/updateProductMutation';
import { useRequestAPI } from '@/utils';
import {
  UpdateProduct,
  UpdateProductMutation,
  ProductFragmentFragment,
} from '@/gql/graphql';

export function useUpdateProduct(type: 'product' | 'service') {
  const queryClient = useQueryClient();
  const requestAPI = useRequestAPI();

  const mutation = useMutation<
    UpdateProductMutation,
    Error,
    UpdateProduct // Input type
  >({
    mutationFn: async (input: UpdateProduct) => {
      // Assuming updateProductMutation takes 'input' as a variable
      const response = await requestAPI<UpdateProductMutation>(
        updateProductMutation,
        { input }
      );
      return response;
    },
    onSuccess: () => {
      // *** CRITICAL FIX: Invalidate the specific query cache after successful update ***
      // We use the 'type' parameter passed to the hook for invalidation.
      queryClient.invalidateQueries({
        queryKey: ['userProducts', type],
      });
    },
  });

  const updateProduct = (input: UpdateProduct) => {
    mutation.mutate(input);
  };

  const updateProductAsync = async (input: UpdateProduct) => {
    const response = await mutation.mutateAsync(input);
    // Assuming the response returns the updated product itself for local store update
    return response.updateProduct as ProductFragmentFragment;
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
