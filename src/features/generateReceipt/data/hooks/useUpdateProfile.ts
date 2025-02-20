import { useProfileMutation } from './useProfileMutation';
import { UpdateProfile } from '@/gql/graphql';

export function useUpdateProfile(profileId: string) {
  const { updateProfile } = useProfileMutation();

  const updateField = (field: keyof UpdateProfile, value: unknown) => {
    updateProfile({ id: profileId, [field]: value });
  };

  return {
    updateCompanyName: (name: string) => updateField('company_name', name),
    updateCompanyAddress: (address: string) => updateField('address', address),
    updateCompanyPhone: (phone: number) => updateField('phone_no', phone),
    updateCompanyEmail: (email: string) => updateField('email', email),
    updateCompanyTitle: (title: string) => updateField('title', title),
    updateCompanyTax: (taxValue: number) => updateField('tax', taxValue),
    updateCompanyCurrency: (currency: string) =>
      updateField('currency', currency),
    updateCompanySignature: (key: string) =>
      updateField('signature_image', key),
    updatePhoneNumberCountryCode: (countryCode: string) =>
      updateField('phone_number_country_code', countryCode),
  };
}
