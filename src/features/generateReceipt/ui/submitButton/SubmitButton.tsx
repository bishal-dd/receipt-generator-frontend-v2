import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function SubmitButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Send</Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-2">
        <div className="space-y-2">
          <Button variant="outline" className="w-full">
            Send To WhatsApp
          </Button>
          <Button variant="outline" className="w-full">
            Send To Email
          </Button>
          <Button variant="outline" className="w-full">
            Download
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
