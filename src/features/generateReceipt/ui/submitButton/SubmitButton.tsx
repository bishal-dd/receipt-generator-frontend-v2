import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useReceiptForm, ReceiptFormData } from "../../utils";

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
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Send</Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-2">
        <div className="space-y-2">
          <Button className="w-full" onClick={handleSubmit(onSendToWhatsApp)}>
            Send To WhatsApp
          </Button>
          <Button className="w-full" onClick={handleSubmit(onSendToEmail)}>
            Send To Email
          </Button>
          <Button className="w-full" onClick={handleSubmit(onDownload)}>
            View/Download/Print
          </Button>
          <Button className="w-full" onClick={handleSubmit(onDownload)}>
            Save
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
