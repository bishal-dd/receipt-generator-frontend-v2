import { create } from "zustand";

interface TaxState {
  tax: number;
  setTax: (tax: number) => void;
}

export const useTaxStore = create<TaxState>()((set) => ({
  tax: 0,
  setTax: (tax: number) => set({ tax: tax }),
}));
