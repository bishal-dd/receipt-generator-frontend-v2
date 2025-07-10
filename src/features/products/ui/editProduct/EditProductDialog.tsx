import { Dispatch, SetStateAction, useEffect, useState } from 'react';
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
import { ProductFragmentFragment } from '@/gql/graphql';

type Props = {
  userId: string;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  product: ProductFragmentFragment | null;
  handleEditProduct: (product: ProductFragmentFragment) => Promise<void>;
};

export function EditProductDialog({
  userId,
  isModalOpen,
  setIsModalOpen,
  product,
  handleEditProduct,
}: Props) {
  const [name, setName] = useState('');
  const [unitPrice, setUnitPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setUnitPrice(product.unit_price);
      setQuantity(product.quantity ?? 0);
    }
  }, [product]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !unitPrice) {
      toast.error('Please enter a product name and unit price');
      return;
    }

    await handleEditProduct({
      ...product!,
      name,
      unit_price: unitPrice,
      quantity,
    });
    toast.success('Product updated successfully');
    setIsModalOpen(false);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>Update the product details</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <div>
              <label htmlFor="productName">Name</label>
              <Input
                required
                id="productName"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="productUnitPrice">Unit Price</label>
              <Input
                type="number"
                id="productUnitPrice"
                required
                value={unitPrice}
                onChange={(e) => setUnitPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="productQuantity">Quantity</label>
              <Input
                type="number"
                id="productQuantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
