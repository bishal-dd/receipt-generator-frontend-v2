import { ProductFragmentFragment } from '@/gql/graphql';
import { create } from 'zustand';

interface ProductsState {
  products: {
    id: string;
    name: string;
    unit_price: number;
    user_id: string;
  }[];
  setProducts: (products: ProductFragmentFragment[]) => void;
  addProduct: (product: ProductFragmentFragment) => void;
  deleteProduct: (productId: string) => void;
}

export const useProductsStore = create<ProductsState>()((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  deleteProduct: (productId) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    })),
}));
