import { useSuspenseQuery } from '@tanstack/react-query';
import { useRequestAPI } from '@/utils';
import { productsQuery } from '../graphql/queries/products';
import { ProductsQuery, ProductFragmentFragment } from '@/gql/graphql';
export function useProducts() {
  const requestAPI = useRequestAPI();
  const { data, isLoading, error } = useSuspenseQuery<ProductsQuery, Error>({
    queryKey: ['userProducts'],
    queryFn: async () => {
      const response = await requestAPI<ProductsQuery>(productsQuery);
      return response;
    },
  });
  return {
    products: data?.products as ProductFragmentFragment[],
    isLoading,
    error,
  };
}
