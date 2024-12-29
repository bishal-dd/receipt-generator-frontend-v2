import { Copy } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PdfViewer } from "@/components/utils";
import { useReceipt } from "../hooks";

type Props = {
  receiptId: string;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export function DetailDialog({
  receiptId,
  isModalOpen,
  setIsModalOpen,
}: Props) {
  const { receipt } = useReceipt(receiptId);
  console.log(receipt);
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Details</DialogTitle>
        </DialogHeader>
        <div>jhjkhkjhk</div>
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
