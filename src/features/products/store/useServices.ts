import { ProductFragmentFragment } from '@/gql/graphql';
import { create } from 'zustand';

interface ServicesState {
  services: ProductFragmentFragment[];

  setServices: (services: ProductFragmentFragment[]) => void;

  addService: (service: ProductFragmentFragment) => void;

  deleteService: (id: string) => void;

  editService: (service: ProductFragmentFragment) => void;
}

export const useServicesStore = create<ServicesState>()((set) => ({
  services: [],

  setServices: (services) => set({ services }),

  addService: (service) =>
    set((state) => ({ services: [...state.services, service] })),

  deleteService: (id) =>
    set((state) => ({
      services: state.services.filter((s) => s.id !== id),
    })),

  editService: (service) =>
    set((state) => ({
      services: state.services.map((s) => (s.id === service.id ? service : s)),
    })),
}));
