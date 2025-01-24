import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type Props = {
  receiptId: string;
  organizationId: string;
  onDownloadReceipt: (receiptId: string, organizationId: string) => void;
  setIsSendReceiptToEmailModalOpen: (isOpen: boolean) => void;
  setIsSendReceiptToWhatsAppModalOpen: (isOpen: boolean) => void;
  setSelectedReceiptIdToSendReceipt: (receiptId: string | null) => void;
  setSelectedEmail: (email: string | null) => void;
  setSelectedWhatsApp: (phoneNumber: string | null) => void;
  email: string | null;
  phoneNumber: string | null;
};

export function SubmitButton({
  receiptId,
  organizationId,
  email,
  phoneNumber,
  setSelectedEmail,
  onDownloadReceipt,
  setSelectedWhatsApp,
  setIsSendReceiptToEmailModalOpen,
  setSelectedReceiptIdToSendReceipt,
  setIsSendReceiptToWhatsAppModalOpen,
}: Props) {
  console.log(email);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Send</Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-2">
        <div className="space-y-2">
          <Button
            className="w-full"
            onClick={() => {
              setSelectedReceiptIdToSendReceipt(receiptId);
              setSelectedWhatsApp(phoneNumber);
              setIsSendReceiptToWhatsAppModalOpen(true);
            }}
          >
            Send To WhatsApp
          </Button>
          <Button
            className="w-full"
            onClick={() => {
              setSelectedReceiptIdToSendReceipt(receiptId);
              setSelectedEmail(email);
              setIsSendReceiptToEmailModalOpen(true);
            }}
          >
            Send To Email
          </Button>
          <Button
            onClick={() => onDownloadReceipt(receiptId, organizationId)}
            disabled={!organizationId}
            className="w-full"
          >
            View/Download/Print
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
