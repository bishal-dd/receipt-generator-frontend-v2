import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProductMutation } from '../graphql/mutations/deleteProductMutation';
import { useRequestAPI } from '@/utils';

export function useDeleteProduct(type: 'product' | 'service') {
  const queryClient = useQueryClient();
  const requestAPI = useRequestAPI();

  const mutation = useMutation<
    any, // Assuming response type (often just a confirmation object)
    Error,
    string // Input is the ID string
  >({
    mutationFn: async (id: string) => {
      return await requestAPI(deleteProductMutation, { id });
    },
    onSuccess: () => {
      // *** CRITICAL FIX: Invalidate the specific query cache after successful deletion ***
      // We use the 'type' parameter passed to the hook for invalidation.
      queryClient.invalidateQueries({
        queryKey: ['userProducts', type],
      });
    },
  });

  const deleteProduct = (id: string) => {
    mutation.mutate(id);
  };

  const deleteProductAsync = async (id: string) => {
    const response = await mutation.mutateAsync(id);
    return response;
  };

  return {
    deleteProduct,
    deleteProductAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
