"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useGenerateReceipt, useUpdateProfile } from "./data/hooks";
import { useOrganization, useUser } from "@clerk/nextjs";
import { Header, ReceiptInfo, ServiceInfo } from "./ui";
import { useMemo } from "react";
import { FileUpload, UpdateInput } from "@/components/utils";

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

  // Render based on loading state AFTER all hooks have been called
  if (!userLoaded || !orgLoaded || profileLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen lg:w-[80vw]">
      <Card className="w-full max-w-3xl mx-auto">
        <Header
          organization={organizationProfile}
          updateCompanyAddress={updateCompanyAddress}
          updateCompanyName={updateCompanyName}
          updateCompanyEmail={updateCompanyEmail}
          updateCompanyPhone={updateCompanyPhone}
        />
        <CardContent>
          <ReceiptInfo />
          <ServiceInfo />
        </CardContent>
        <CardFooter>
          <div className="flex flex-col justify-items-start">
            <FileUpload
              width={200}
              height={150}
              defaultPreview={
                !profile.signature_image || profile.signature_image === ""
                  ? null
                  : profile.signature_image
              }
              uploadText="Seal or Signature"
              userId={userId!}
              orginizationId={organization?.id!}
              onUpload={updateCompanySignature}
            />
            <div className="mt-4 w-full max-w-md">
              <UpdateInput
                value={organizationProfile.title}
                name="title"
                placeholder="Title"
                onChange={updateCompanyTitle}
                type="text"
                className="w-full text-center"
              />
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
