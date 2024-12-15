"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useGenerateReceipt, useUpdateProfile } from "./data/hooks";
import { useOrganization, useUser } from "@clerk/nextjs";
import { Header, ReceiptInfo, ServiceInfo, Footer } from "./ui";
import { useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ReceiptFormData, useReceiptForm } from "./utils";
import { Form } from "@/components/ui/form";
import { useCurrencyStore } from "@/store/currency";

export default function GenerateReceipt() {
  const { user, isLoaded: userLoaded } = useUser();

  const userId = user?.id;
  const { organization, isLoaded: orgLoaded } = useOrganization({
    memberships: true,
  });
  const { profile, profileLoading, error } = useGenerateReceipt(userId!);
  console.log(profile);
  const { currency, setCurrency } = useCurrencyStore();
  useEffect(() => {
    if (profile) {
      setCurrency(profile.currency);
    }
  }, []);
  console.log("herrrrrr");
  const {
    updateCompanyName,
    updateCompanyAddress,
    updateCompanyPhone,
    updateCompanyEmail,
    updateCompanySignature,
    updateCompanyTitle,
    updateCompanyCurrency,
  } = useUpdateProfile(profile.id);
  const { receiptForm, fields, append, remove } = useReceiptForm();
  const organizationName = useMemo(
    () => organization?.name || "No Organization",
    [organization]
  );
  const organizationImageUrl = useMemo(
    () => organization?.imageUrl || "",
    [organization]
  );
  const orgHasImage = useMemo(() => organization?.hasImage, [organization]);

  // Memoize organization profile
  const organizationProfile = useMemo(
    () => ({
      name: organizationName,
      email: profile?.email || "",
      phone: profile?.phone_no || "",
      address: profile?.address || "",
      title: profile?.title || "",
      imageUrl: organizationImageUrl,
      hasImage: orgHasImage,
    }),
    [organizationName, profile, organizationImageUrl, orgHasImage]
  );

  const onSubmit = (data: ReceiptFormData) => {
    console.log("Valid data submitted:", data);
    alert("Receipt successfully submitted!");
  };

  // Render based on loading state AFTER all hooks have been called
  if (!userLoaded || !orgLoaded || profileLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen lg:w-[80vw]">
      <Form {...receiptForm}>
        <form
          onSubmit={receiptForm.handleSubmit(onSubmit)}
          className="w-full max-w-3xl"
        >
          <Card className="w-full max-w-3xl mx-auto">
            <Header
              organization={organizationProfile}
              updateCompanyAddress={updateCompanyAddress}
              updateCompanyName={updateCompanyName}
              updateCompanyEmail={updateCompanyEmail}
              updateCompanyPhone={updateCompanyPhone}
            />
            <CardContent>
              <ReceiptInfo control={receiptForm.control} />
              <ServiceInfo
                control={receiptForm.control}
                fields={fields}
                append={append}
                remove={remove}
                currency={currency}
                onSelectCurrency={updateCompanyCurrency}
              />
            </CardContent>
            <CardFooter>
              <Footer
                updateSignature={updateCompanySignature}
                userId={userId!}
                title={organizationProfile.title}
                organizationId={organization?.id!}
                updateTitle={updateCompanyTitle}
                signature_image={profile.signature_image}
              />
            </CardFooter>
          </Card>
          <Button type="submit">Send</Button>
        </form>
      </Form>
    </div>
  );
}
