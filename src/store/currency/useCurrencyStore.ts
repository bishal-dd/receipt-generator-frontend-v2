import { create } from "zustand";

interface CurrencyState {
  currency: string;
  setCurrency: (currency: string) => void;
}

export const useCurrencyStore = create<CurrencyState>()((set) => ({
  currency: "USD",
  setCurrency: (currency: string) => set({ currency: currency }),
}));
