import { useMutation } from '@tanstack/react-query';
import { deleteProductMutation } from '../graphql/mutations/deleteProductMutation';
import { useRequestAPI } from '@/utils';

export function useDeleteProduct() {
  const requestAPI = useRequestAPI();
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      return await requestAPI(deleteProductMutation, { id });
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
