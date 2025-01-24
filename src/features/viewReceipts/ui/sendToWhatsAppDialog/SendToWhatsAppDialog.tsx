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

  const [phoneNumber, setPhoneNumber] = useState<string | null>(
    initialphoneNumber ?? null
  );

  const handleClose = () => {
    setPhoneNumber(null);
    setIsModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;
    onSendToWhatsApp(receiptId, organizationId, phoneNumber);
    handleClose();
  };

  const handlePhoneNumberChange = (value: RPNInput.Value) => {
    setPhoneNumber(value);
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
              placeholder="Customer Number"
              defaultCountry={phoneNumberCountryCode as RPNInput.Country}
              onCountryChange={(country) => {
                if (country) {
                  setPhoneNumberCountryCode(country);
                }
              }}
              value={phoneNumber ?? undefined}
              onChange={handlePhoneNumberChange}
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
