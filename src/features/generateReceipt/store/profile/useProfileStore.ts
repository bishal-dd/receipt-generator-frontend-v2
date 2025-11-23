import { create } from 'zustand';

interface ProfileState {
  taxPercent: number;
  setTaxPercent: (tax: number) => void;
  discountPercent: number;
  setDiscountPercent: (discount: number) => void;
  currency: string;
  setCurrency: (currency: string) => void;
  phoneNumberCountryCode: string;
  setPhoneNumberCountryCode: (phoneNumberCountryCode: string) => void;
}

export const useProfileStore = create<ProfileState>()((set) => ({
  taxPercent: 0,
  setTaxPercent: (tax: number) => set({ taxPercent: tax }),
  discountPercent: 0,
  setDiscountPercent: (discount: number) => set({ discountPercent: discount }),
  currency: 'USD',
  setCurrency: (currency: string) => set({ currency: currency }),
  phoneNumberCountryCode: 'US',
  setPhoneNumberCountryCode: (phoneNumberCountryCode: string) =>
    set({ phoneNumberCountryCode: phoneNumberCountryCode }),
}));
