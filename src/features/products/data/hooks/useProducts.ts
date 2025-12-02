import { useQuery } from '@tanstack/react-query'; // Switched to useQuery for compatibility with manual isLoading check
import { useRequestAPI } from '@/utils';
import { productsQuery } from '../graphql/queries/products';
import { ProductsQuery, ProductFragmentFragment } from '@/gql/graphql';

/**
 * Custom hook to fetch products or services, safely isolating data based on type.
 * @param type 'product' or 'service'
 */
export function useProducts(type: 'product' | 'service') {
  const requestAPI = useRequestAPI();

  // *** CRITICAL FIX: Include 'type' in the queryKey. ***
  // This tells TanStack Query to cache and fetch 'userProducts' and 'userServices' separately.
  const { data, isLoading, error } = useQuery<ProductsQuery, Error>({
    queryKey: ['userProducts', type],

    // Ensure the query is enabled only if the type is valid
    enabled: type === 'product' || type === 'service',

    queryFn: async () => {
      const response = await requestAPI<ProductsQuery>(productsQuery, {
        productType: type,
      });
      return response;
    },
  });

  return {
    products: (data?.products || []) as ProductFragmentFragment[],
    isLoading,
    error,
  };
}
