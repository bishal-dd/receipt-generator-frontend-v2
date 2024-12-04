import { useProfileMutation } from "./useProfileMutation";
import { UpdateProfile } from "@/gql/graphql";

export function useUpdateProfile(profileId: string) {
  const { updateProfile } = useProfileMutation();

  const updateField = (field: keyof UpdateProfile, value: any) => {
    updateProfile({ id: profileId, [field]: value });
  };

  return {
    updateCompanyName: (name: string) => updateField("company_name", name),
    updateCompanyAddress: (address: string) => updateField("address", address),
    updateCompanyPhone: (phone: number) => updateField("phone_no", phone),
    updateCompanyEmail: (email: string) => updateField("email", email),
    updateCompanyTitle: (title: string) => updateField("title", title),
    updateCompanySignature: (key: string) =>
      updateField("signature_image", key),
  };
}
