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
  receiptId: string;
  organizationId: string;
};

export function SubmitButton({
  onSendToWhatsApp,
  onSendToEmail,
  onDownload,
  receiptId,
  organizationId,
}: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Send</Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-2">
        <div className="space-y-2">
          <Button
            className="w-full"
            onClick={() => onSendToWhatsApp(receiptId, organizationId)}
          >
            Send To WhatsApp
          </Button>
          <Button
            className="w-full"
            onClick={() => onSendToEmail(receiptId, organizationId)}
          >
            Send To Email
          </Button>
          <Button
            className="w-full"
            onClick={() => onDownload(receiptId, organizationId)}
          >
            View/Download/Print
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
