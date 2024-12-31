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
import { useReceipt } from "../data/hooks";
import { Loader2 } from "lucide-react";
import { formatDate } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {
  receiptId: string;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

function ReceiptDetails({ receiptId }: { receiptId: string }) {
  const { receipt } = useReceipt(receiptId);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold">Receipt No</h4>
          <p>#{receipt.receipt_no}</p>
        </div>
        <div>
          <h4 className="font-semibold">Recipient Name</h4>
          <p>{receipt.recipient_name}</p>
        </div>
        <div>
          <h4 className="font-semibold">Recipient Phone</h4>
          <p>{receipt.recipient_phone || "-"}</p>
        </div>
        <div>
          <h4 className="font-semibold">Recipient Email</h4>
          <p>{receipt.recipient_email || "-"}</p>
        </div>
        <div>
          <h4 className="font-semibold">Recipient Address</h4>
          <p>{receipt.recipient_address || "-"}</p>
        </div>
        <div>
          <h4 className="font-semibold">Date</h4>
          <p>{formatDate(receipt.date, "PPP") || "-"}</p>
        </div>
        <div>
          <h4 className="font-semibold">Payment Method</h4>
          <p>{receipt.payment_method}</p>
        </div>
        <div>
          <h4 className="font-semibold">Payment Note</h4>
          <p>{receipt.payment_note || "-"}</p>
        </div>
        <div>
          <h4 className="font-semibold">Sub Total</h4>
          <p>{receipt.sub_total_amount?.toFixed(2) || "-"}</p>
        </div>
        <div>
          <h4 className="font-semibold">Tax Amount</h4>
          <p>{receipt.tax_amount?.toFixed(2) || "-"}</p>
        </div>
        <div>
          <h4 className="font-semibold">Total Amount</h4>
          <p>{receipt.total_amount?.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold mb-4">Services</h4>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">No.</TableHead>
              <TableHead className="w-64">Description</TableHead>
              <TableHead className="w-24 text-right">Quantity</TableHead>
              <TableHead className="w-24 text-right">Unit Price</TableHead>
              <TableHead className="w-32 text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {receipt.Services?.map((service, index) => (
              <TableRow key={service?.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{service?.description}</TableCell>
                <TableCell className="text-right">
                  {service?.quantity}
                </TableCell>
                <TableCell className="text-right">
                  {service?.rate?.toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  {(service?.quantity! * (service?.rate || 0)).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export function DetailDialog({
  receiptId,
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

        <Suspense
          fallback={
            <div className="flex items-center justify-center h-32">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          }
        >
          <ReceiptDetails receiptId={receiptId} />
        </Suspense>

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
