import { Dispatch, SetStateAction, useState } from 'react';
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
  console.log(initialEmail, 'initialEmail');
  const [email, setEmail] = useState<string | null>(initialEmail ?? null);

  const handleClose = () => {
    setIsModalOpen(false);
    setEmail(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onSendToEmail(receiptId, organizationId, email);
    handleClose();
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
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
              value={email ?? undefined}
              onChange={handleEmailChange}
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
