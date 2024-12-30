import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  onSendToWhatsApp: (receiptId: string, organizationId: string) => void;
  onSendToEmail: (receiptId: string, organizationId: string) => void;
  onDownload: (receiptId: string, organizationId: string) => void;
  onSave: (receiptId: string, organizationId: string) => void;
};
export function SubmitButton({
  onSendToWhatsApp,
  onSendToEmail,
  onDownload,
}: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Send</Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-2">
        <div className="space-y-2">
          <Button className="w-full" onClick={() => onSendToWhatsApp}>
            Send To WhatsApp
          </Button>
          <Button className="w-full" onClick={() => onSendToEmail}>
            Send To Email
          </Button>
          <Button className="w-full" onClick={() => onDownload}>
            View/Download/Print
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
