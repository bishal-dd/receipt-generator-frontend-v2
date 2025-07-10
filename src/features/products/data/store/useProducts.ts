import { ProductFragmentFragment } from '@/gql/graphql';
import { create } from 'zustand';

interface ProductsState {
  products: ProductFragmentFragment[];
  setProducts: (products: ProductFragmentFragment[]) => void;
  addProduct: (product: ProductFragmentFragment) => void;
  deleteProduct: (productId: string) => void;
  editProduct: (product: ProductFragmentFragment) => void;
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
  editProduct: (product) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === product.id ? product : p
      ) as ProductFragmentFragment[],
    })),
}));
