import { Dispatch, SetStateAction, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { PhoneInput } from '@/components/utils';
import * as RPNInput from 'react-phone-number-input';
import { toast } from 'sonner';

type Props = {
  receiptId: string;
  organizationId: string;
  onSendToWhatsApp: (
    receiptId: string,
    organizationId: string,
    phoneNumber: string
  ) => void;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  phoneNumber: string | null;
  phoneNumberCountryCode: string;
};

export function SendToWhatsAppDialog({
  receiptId,
  organizationId,
  onSendToWhatsApp,
  isModalOpen,
  setIsModalOpen,
  phoneNumberCountryCode: initialPhoneNumberCountryCode,
  phoneNumber: initialphoneNumber,
}: Props) {
  const [phoneNumberCountryCode, setPhoneNumberCountryCode] = useState(
    initialPhoneNumberCountryCode
  );

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = (e.target as HTMLFormElement).elements.namedItem(
      'phonenumber'
    ) as HTMLInputElement;
    if (!phoneNumber.value) {
      toast.error('Please enter a phone number');
      return;
    }
    onSendToWhatsApp(receiptId, organizationId, phoneNumber.value);
    handleClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Send Receipt to WhatsApp</DialogTitle>
          <DialogDescription>
            Enter the phone number to which you want to send the receipt
          </DialogDescription>
        </DialogHeader>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Phone Number</label>
            <PhoneInput
              name="phonenumber"
              placeholder="Customer Number"
              defaultCountry={phoneNumberCountryCode as RPNInput.Country}
              onCountryChange={(country) => {
                if (country) {
                  setPhoneNumberCountryCode(country);
                }
              }}
              value={initialphoneNumber ?? ''}
            />
            <div className="flex justify-center">
              <Button type="submit" className="mt-4">
                Send
              </Button>
            </div>
          </form>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
