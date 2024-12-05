"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useGenerateReceipt, useUpdateProfile } from "./data/hooks";
import { useOrganization, useUser } from "@clerk/nextjs";
import { Header, ReceiptInfo, ServiceInfo, Footer } from "./ui";
import { FormEvent, useMemo } from "react";
import { FileUpload, UpdateInput } from "@/components/utils";
import { Button } from "@/components/ui/button";
import { receiptSchema, ReceiptFormData, useReceiptForm } from "./utils";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function GenerateReceipt() {
  const { user, isLoaded: userLoaded } = useUser();
  const userId = user?.id;
  const { organization, isLoaded: orgLoaded } = useOrganization({
    memberships: true,
  });
  const { profile, profileLoading, error } = useGenerateReceipt(userId!);
  console.log(profile);
  console.log("herrrrrr");
  const {
    updateCompanyName,
    updateCompanyAddress,
    updateCompanyPhone,
    updateCompanyEmail,
    updateCompanySignature,
    updateCompanyTitle,
  } = useUpdateProfile(profile.id);
  const { register, control, handleSubmit, errors, fields, append, remove } =
    useReceiptForm();
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
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl">
        <Card className="w-full max-w-3xl mx-auto">
          <Header
            organization={organizationProfile}
            updateCompanyAddress={updateCompanyAddress}
            updateCompanyName={updateCompanyName}
            updateCompanyEmail={updateCompanyEmail}
            updateCompanyPhone={updateCompanyPhone}
          />
          <CardContent>
            <ReceiptInfo
              register={register}
              errors={errors}
              control={control}
            />
            <ServiceInfo
              register={register}
              control={control}
              fields={fields}
              append={append}
              remove={remove}
              errors={errors}
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
    </div>
  );
}
