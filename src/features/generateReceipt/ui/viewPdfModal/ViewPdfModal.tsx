import { Dispatch, SetStateAction } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Loader, PdfViewer } from '@/components/utils';

type Props = {
  fileUrl: string | null;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export function ViewPdfModal({ fileUrl, isModalOpen, setIsModalOpen }: Props) {
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="h-[700px] md:w-[700px]">
        <DialogHeader>
          <DialogTitle>Receipt</DialogTitle>
        </DialogHeader>
        <div>{fileUrl ? <PdfViewer fileUrl={fileUrl} /> : <Loader />}</div>
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
