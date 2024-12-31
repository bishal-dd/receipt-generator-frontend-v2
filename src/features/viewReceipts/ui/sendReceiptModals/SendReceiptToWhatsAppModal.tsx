import { Dispatch, SetStateAction, Suspense } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PhoneInput } from "@/components/utils";

type Props = {
  receiptId: string;
  orginazationId: string;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export function SendReceiptToWhatsAppModal({
  receiptId,
  orginazationId,
  isModalOpen,
  setIsModalOpen,
}: Props) {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Receipt Details</DialogTitle>
          <DialogDescription>
            Detailed information about the receipt
          </DialogDescription>
        </DialogHeader>
        <form>
          <PhoneInput
            placeholder="Customer Number"
            defaultCountry={"US"}
            onSubmit={() => {
              console.log("Submitted");
            }}
            onCountryChange={(country) => {
              console.log(country);
            }}
          />
          <Button type="submit"> Send</Button>
        </form>

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
