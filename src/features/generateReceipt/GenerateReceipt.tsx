'use client';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  useGenerateReceipt,
  useUpdateProfile,
  useReceiptPDFToWhatsAppMutation,
  useReceiptPDFToEmailMutation,
  useDownloadReceiptPDFMutation,
  useSaveReceipt,
} from './data/hooks';
import { useOrganization, useUser } from '@clerk/nextjs';
import {
  Header,
  ReceiptInfo,
  ServiceInfo,
  Footer,
  SubmitButton,
  ViewPdfModal,
} from './ui';
import { useEffect, useMemo, useState } from 'react';
import { ReceiptFormData, useReceiptForm, getDefaultFormValues } from './utils';
import { Form } from '@/components/ui/form';
import {
  useCurrencyStore,
  useTaxStore,
  usePhoneNumberCountryCodeStore,
} from '@/store';
import { toast } from 'sonner';
import {
  SendReceiptPdfToWhatsApp,
  SendReceiptPdfToEmail,
  DownloadPdf,
} from '@/gql/graphql';
import { Loader } from '@/components/utils';
import { formatISO } from 'date-fns';
import { Button } from '@/components/ui/button';

export default function GenerateReceipt() {
  const { user, isLoaded: userLoaded } = useUser();
  const userId = user?.id;
  const { organization, isLoaded: orgLoaded } = useOrganization({
    memberships: true,
  });

  const orgId = organization?.id || '';

  const { profile, profileLoading, error } = useGenerateReceipt(userId!);
  const { sendReceiptPDFToWhatsApp } = useReceiptPDFToWhatsAppMutation();
  const { sendReceiptPDFToEmail } = useReceiptPDFToEmailMutation();
  const { downloadReceiptPDFAsync } = useDownloadReceiptPDFMutation();
  const { saveReceiptAsync, error: saveReceiptError } = useSaveReceipt();
  const { currency, setCurrency } = useCurrencyStore();
  const { tax, setTax } = useTaxStore();
  const { phoneNumberCountryCode, setPhoneNumberCountryCode } =
    usePhoneNumberCountryCodeStore();
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (profile) {
      setPhoneNumberCountryCode(profile.phone_number_country_code);
      setCurrency(profile.currency);
      setTax(profile.tax);
    }
  }, [setPhoneNumberCountryCode, setCurrency, setTax, profile]);
  const {
    updateCompanyName,
    updateCompanyAddress,
    updateCompanyPhone,
    updateCompanyEmail,
    updateCompanySignature,
    updateCompanyTitle,
    updateCompanyCurrency,
    updateCompanyTax,
    updatePhoneNumberCountryCode,
  } = useUpdateProfile(profile.id);
  const { receiptForm, fields, append, remove, handleSubmit, reset, setValue } =
    useReceiptForm();
  const organizationName = useMemo(
    () => organization?.name || 'No Organization',
    [organization]
  );
  const organizationImageUrl = useMemo(
    () => organization?.imageUrl || '',
    [organization]
  );
  const orgHasImage = useMemo(() => organization?.hasImage, [organization]);
  // Memoize organization profile
  const organizationProfile = useMemo(
    () => ({
      name: organizationName,
      email: profile?.email || '',
      phone: profile?.phone_no || '',
      address: profile?.address || '',
      title: profile?.title || '',
      imageUrl: organizationImageUrl,
      hasImage: orgHasImage,
    }),
    [organizationName, profile, organizationImageUrl, orgHasImage]
  );

  const onSendToWhatsApp = (data: ReceiptFormData) => {
    if (!data.customerPhoneNumber) {
      toast.error('Please enter customer phone number');
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
    const formattedDate = formatISO(new Date(data.date));
    const input: SendReceiptPdfToWhatsApp = {
      receipt_name: 'Test',
      recipient_name: data.customerName,
      recipient_phone: data.customerPhoneNumber,
      recipient_email: data.customerEmail,
      recipient_address: data.customerAddress,
      receipt_no: data.receiptNumber,
      payment_method: data.paymentMethod,
      payment_note: data.paymentNote,
      is_receipt_send: false,
      date: formattedDate,
      user_id: userId!,
      orginazation_id: orgId,
      Services: Services,
    };
    sendReceiptPDFToWhatsApp(input);
    toast.success('Sending Receipt in progress!.', {
      description: " If it doesn't arrive in 30s check the  Sales List",
    });
    reset(getDefaultFormValues());
  };

  const onSendToEmail = (data: ReceiptFormData) => {
    if (!data.customerEmail) {
      toast.error('Please enter customer Email');
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
    const formattedDate = formatISO(new Date(data.date));

    const input: SendReceiptPdfToEmail = {
      receipt_name: 'Test',
      recipient_name: data.customerName,
      recipient_phone: data.customerPhoneNumber,
      recipient_email: data.customerEmail,
      recipient_address: data.customerAddress,
      receipt_no: data.receiptNumber,
      payment_method: data.paymentMethod,
      payment_note: data.paymentNote,
      date: formattedDate,
      is_receipt_send: false,
      user_id: userId!,
      orginazation_id: orgId,
      Services: Services,
    };
    sendReceiptPDFToEmail(input);
    toast.success('Sending Receipt in progress!.', {
      description: " If it doesn't arrive in 30s check the  Sales List",
    });
    reset(getDefaultFormValues());
  };

  const onDownload = async (data: ReceiptFormData) => {
    setIsModalOpen(true);

    const Services = data.services.map((service) => {
      return {
        description: service.description,
        quantity: service.quantity,
        rate: service.unitPrice,
        amount: service.unitPrice * service.quantity,
      };
    });
    const formattedDate = formatISO(new Date(data.date));

    const input: DownloadPdf = {
      receipt_name: 'Test',
      recipient_name: data.customerName,
      recipient_phone: data.customerPhoneNumber,
      recipient_email: data.customerEmail,
      recipient_address: data.customerAddress,
      receipt_no: data.receiptNumber,
      payment_method: data.paymentMethod,
      payment_note: data.paymentNote,
      date: formattedDate,
      is_receipt_send: false,
      user_id: userId!,
      orginazation_id: orgId,
      Services: Services,
    };
    const pdfUrl = await downloadReceiptPDFAsync(input);
    setPdfUrl(pdfUrl);
    reset(getDefaultFormValues());
  };

  const onSave = async (data: ReceiptFormData) => {
    const Services = data.services.map((service) => {
      return {
        description: service.description,
        quantity: service.quantity,
        rate: service.unitPrice,
        amount: service.unitPrice * service.quantity,
      };
    });
    const formattedDate = formatISO(new Date(data.date));

    const input: DownloadPdf = {
      receipt_name: 'Test',
      recipient_name: data.customerName,
      recipient_phone: data.customerPhoneNumber,
      recipient_email: data.customerEmail,
      recipient_address: data.customerAddress,
      receipt_no: data.receiptNumber,
      payment_method: data.paymentMethod,
      payment_note: data.paymentNote,
      date: formattedDate,
      is_receipt_send: false,
      user_id: userId!,
      orginazation_id: orgId,
      Services: Services,
    };
    await saveReceiptAsync(input);
    if (saveReceiptError) {
      toast.error('Receipt Was Not Saved!.', {
        description: 'You can check in try again',
      });
    }
    toast.success('Receipt Was Saved!.', {
      description: 'You can check in the Sales List',
    });
    reset(getDefaultFormValues());
  };

  const handleButtonClick = (action: (data: ReceiptFormData) => void) => {
    handleSubmit(action)();
  };

  // Render based on loading state AFTER all hooks have been called
  if (!userLoaded || !orgLoaded || profileLoading) {
    return <Loader />;
  }

  if (error) {
    throw new Error(error.message);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-[100vw] md:w-[80vw] lg:w-[80vw] xl:w-[80vw]">
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
              <ReceiptInfo
                control={receiptForm.control}
                updatePhoneNumberCountryCode={updatePhoneNumberCountryCode}
                defaultPhoneNumberCountryCode={phoneNumberCountryCode}
                setPhoneNumberCountryCodeState={setPhoneNumberCountryCode}
              />
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
                setValue={setValue}
              />
            </CardContent>
            <CardFooter>
              <Footer
                updateSignature={updateCompanySignature}
                userId={userId!}
                title={organizationProfile.title}
                organizationId={orgId}
                updateTitle={updateCompanyTitle}
                signature_image={profile.signature_image}
              />
            </CardFooter>
            <CardFooter className="flex justify-center gap-4">
              <SubmitButton
                onSendToWhatsApp={onSendToWhatsApp}
                onSendToEmail={onSendToEmail}
                onDownload={onDownload}
                handleSubmit={handleSubmit}
              />
              <Button type="button" onClick={() => handleButtonClick(onSave)}>
                Save Sale
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
      <ViewPdfModal
        fileUrl={pdfUrl}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </div>
  );
}
