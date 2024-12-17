"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  useGenerateReceipt,
  useUpdateProfile,
  useReceiptPDFToWhatsAppMutation,
  useReceiptPDFToEmailMutation,
} from "./data/hooks";
import { useOrganization, useUser } from "@clerk/nextjs";
import { Header, ReceiptInfo, ServiceInfo, Footer, SubmitButton } from "./ui";
import { useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ReceiptFormData, useReceiptForm } from "./utils";
import { Form } from "@/components/ui/form";
import { useCurrencyStore } from "@/store/currency";
import { useTaxStore } from "@/store/tax";
import { toast } from "sonner";
import { SendReceiptPdfToWhatsApp, SendReceiptPdfToEmail } from "@/gql/graphql";

export default function GenerateReceipt() {
  const { user, isLoaded: userLoaded } = useUser();

  const userId = user?.id;
  const { organization, isLoaded: orgLoaded } = useOrganization({
    memberships: true,
  });
  const { profile, profileLoading, error } = useGenerateReceipt(userId!);
  const { sendReceiptPDFToWhatsApp } = useReceiptPDFToWhatsAppMutation();
  const { sendReceiptPDFToEmail } = useReceiptPDFToEmailMutation();
  console.log(profile);
  const { currency, setCurrency } = useCurrencyStore();
  const { tax, setTax } = useTaxStore();
  useEffect(() => {
    if (profile) {
      setCurrency(profile.currency);
      setTax(profile.tax);
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
    updateCompanyTax,
  } = useUpdateProfile(profile.id);
  const { receiptForm, fields, append, remove, handleSubmit } =
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

  const onSendToWhatsApp = (data: ReceiptFormData) => {
    if (!data.customerPhoneNumber) {
      toast.error("Please enter customer phone number");
      return;
    }

    const Services = data.services.map((service) => {
      return {
        description: service.description,
        quantity: service.quantity,
        rate: service.unitPrice,
        amount: service.unitPrice * service.quantity,
      };
    });
    const input: SendReceiptPdfToWhatsApp = {
      receipt_name: "Test",
      recipient_name: data.customerName,
      recipient_phone: data.customerPhoneNumber,
      recipient_email: data.customerEmail,
      recipient_address: data.customerAddress,
      receipt_no: data.receiptNumber,
      payment_method: data.paymentMethod,
      payment_note: data.paymentNote,
      date: data.date,
      user_id: userId!,
      orginazation_id: organization?.id!,
      Services: Services,
    };
    sendReceiptPDFToWhatsApp(input);
    console.log("Valid data submitted:", data);
    alert("Receipt successfully submitted!");
  };

  const onSendToEmail = (data: ReceiptFormData) => {
    if (!data.customerEmail) {
      toast.error("Please enter customer Email");
      return;
    }
    const Services = data.services.map((service) => {
      return {
        description: service.description,
        quantity: service.quantity,
        rate: service.unitPrice,
        amount: service.unitPrice * service.quantity,
      };
    });
    const input: SendReceiptPdfToEmail = {
      receipt_name: "Test",
      recipient_name: data.customerName,
      recipient_phone: data.customerPhoneNumber,
      recipient_email: data.customerEmail,
      recipient_address: data.customerAddress,
      receipt_no: data.receiptNumber,
      payment_method: data.paymentMethod,
      payment_note: data.paymentNote,
      date: data.date,
      user_id: userId!,
      orginazation_id: organization?.id!,
      Services: Services,
    };
    sendReceiptPDFToEmail(input);
    console.log("Valid data submitted:", data);
    alert("Receipt successfully submitted!");
  };

  const onDownload = (data: ReceiptFormData) => {
    console.log("Valid data submitted:", data);
    alert("Receipt successfully downloaded!");
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
        <form className="w-full max-w-3xl">
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
                updateCompanyTax={updateCompanyTax}
                taxValue={tax}
                setTaxState={setTax}
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
            <CardFooter className="flex justify-center">
              <SubmitButton
                onSendToWhatsApp={onSendToWhatsApp}
                onSendToEmail={onSendToEmail}
                onDownload={onDownload}
                handleSubmit={handleSubmit}
              />
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
}
