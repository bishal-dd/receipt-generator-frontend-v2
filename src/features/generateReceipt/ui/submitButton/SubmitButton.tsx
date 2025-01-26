'use client';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ReceiptFormData } from '../../utils';
import { useState } from 'react';

type Props = {
  onSendToWhatsApp: (data: ReceiptFormData) => void;
  onSendToEmail: (data: ReceiptFormData) => void;
  onDownload: (data: ReceiptFormData) => void;
  handleSubmit: (
    onValid: (data: ReceiptFormData) => void
  ) => (e?: React.BaseSyntheticEvent) => void;
};
export function SubmitButton({
  onSendToWhatsApp,
  onSendToEmail,
  onDownload,
  handleSubmit,
}: Props) {
  const [openPopover, setOpenPopover] = useState(false);

  const handleButtonClick = (action: (data: ReceiptFormData) => void) => {
    handleSubmit(action)();
    setOpenPopover(false);
  };

  return (
    <Popover open={openPopover} onOpenChange={setOpenPopover}>
      <PopoverTrigger asChild>
        <Button>Send Receipt</Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-2">
        <div className="space-y-2">
          <Button
            className="w-full"
            onClick={() => handleButtonClick(onSendToWhatsApp)}
          >
            Send To WhatsApp
          </Button>
          <Button
            className="w-full"
            onClick={() => handleButtonClick(onSendToEmail)}
          >
            Send To Email
          </Button>
          <Button
            className="w-full"
            onClick={() => handleButtonClick(onDownload)}
          >
            View/Download/Print
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
