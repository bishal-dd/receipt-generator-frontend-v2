import { useMutation } from '@tanstack/react-query';
import { createProductMutation } from '../graphql/mutations/createProductMutation';
import { useRequestAPI } from '@/utils';
import { CreateProduct, ProductFragmentFragment } from '@/gql/graphql';

export function useCreateProduct() {
  const requestAPI = useRequestAPI();
  const mutation = useMutation({
    mutationFn: async (input: CreateProduct) => {
      return await requestAPI(createProductMutation, { input });
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
