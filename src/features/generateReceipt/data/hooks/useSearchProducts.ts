import { useQueryClient } from '@tanstack/react-query';
import { useRequestAPI } from '@/utils';
import { searchProductsQuery } from '../graphql/queries/searchProducts';
import { SearchProductsQuery } from '@/gql/graphql';

export function useSearchProducts() {
  const requestAPI = useRequestAPI();
  const queryClient = useQueryClient();

  const searchProducts = async (query: string = '') => {
    try {
      const response = await queryClient.fetchQuery({
        queryKey: ['searchProducts', query],
        queryFn: async () => {
          return await requestAPI<SearchProductsQuery>(searchProductsQuery, {
            query,
          });
        },
      });

      return response;
    } catch (error) {
      console.error('Error fetching products:', error);
      return { searchProducts: [] };
    }
  };

  return { searchProducts };
}
