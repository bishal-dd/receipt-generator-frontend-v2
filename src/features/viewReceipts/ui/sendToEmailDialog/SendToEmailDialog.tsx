import { Dispatch, SetStateAction } from 'react';
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
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

type Props = {
  receiptId: string;
  organizationId: string;
  onSendToEmail: (
    receiptId: string,
    organizationId: string,
    email: string
  ) => void;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  email: string | null;
};

export function SendToEmailDialog({
  receiptId,
  organizationId,
  onSendToEmail,
  isModalOpen,
  setIsModalOpen,
  email: initialEmail,
}: Props) {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).elements.namedItem(
      'email'
    ) as HTMLInputElement;
    if (!email.value) {
      toast.error('Please enter a email');
      return;
    }
    onSendToEmail(receiptId, organizationId, email.value);
    handleClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Send Receipt to Email</DialogTitle>
          <DialogDescription>
            Enter the email address to which you want to send the receipt
          </DialogDescription>
        </DialogHeader>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              required
              name="email"
              defaultValue={initialEmail ?? ''}
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
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
