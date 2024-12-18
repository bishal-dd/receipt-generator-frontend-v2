import { create } from "zustand";

interface PhoneNumberCountryCodeState {
  phoneNumberCountryCode: string;
  setPhoneNumberCountryCode: (phoneNumberCountryCode: string) => void;
}

export const usePhoneNumberCountryCodeStore =
  create<PhoneNumberCountryCodeState>()((set) => ({
    phoneNumberCountryCode: "US",
    setPhoneNumberCountryCode: (phoneNumberCountryCode: string) =>
      set({ phoneNumberCountryCode: phoneNumberCountryCode }),
  }));
