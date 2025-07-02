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
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';

type Props = {
  userId: string;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  handleAddProduct: (
    userId: string,
    name: string,
    unit_price: number,
    quantity: number
  ) => Promise<void>;
};

export function AddProductDialog({
  userId,
  isModalOpen,
  setIsModalOpen,
  handleAddProduct,
}: Props) {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const productName = (e.target as HTMLFormElement).elements.namedItem(
      'productName'
    ) as HTMLInputElement;
    const productUnitPrice = (e.target as HTMLFormElement).elements.namedItem(
      'productUnitPrice'
    ) as HTMLInputElement;
    const productQuantity = (e.target as HTMLFormElement).elements.namedItem(
      'productQuantity'
    ) as HTMLInputElement;

    if (!productName.value || !productUnitPrice.value) {
      toast.error('Please enter a product name and unit price');
      return;
    }
    await handleAddProduct(
      userId,
      productName.value,
      Number(productUnitPrice.value),
      Number(productQuantity.value)
    );
    toast.success('Product added successfully');
    handleClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>Enter the product details</DialogDescription>
        </DialogHeader>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4 p-4">
              <div>
                <label htmlFor="productName">Name</label>
                <Input required name="productName" id="productName" />
              </div>
              <div>
                <label htmlFor="productUnitPrice">Unit Price</label>
                <Input
                  type="number"
                  name="productUnitPrice"
                  id="productUnitPrice"
                  required
                />
              </div>
              <div>
                <label htmlFor="productQuantity">Quantity</label>
                <Input
                  type="number"
                  name="productQuantity"
                  id="productQuantity"
                />
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <Button type="submit">Add Product</Button>
            </div>
          </form>
        </div>
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
