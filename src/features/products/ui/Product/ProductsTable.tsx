'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useUser } from '@clerk/nextjs';
import { useState } from 'react';
import { AddProductDialog } from './AddProductDialog';
import { EditProductDialog } from './EditProductDialog';
import { Loader } from '@/components/utils';
import { Pencil, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

import {
  useCreateProduct,
  useDeleteProduct,
  useUpdateProduct,
  useProducts,
} from '../../data/hooks';

import { useProductsStore } from '../../store';
import { ProductFragmentFragment } from '@/gql/graphql';

export function ProductsTable() {
  const { user } = useUser();
  const userId = user?.id;

  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] =
    useState<ProductFragmentFragment | null>(null);

  const { createProductAsync } = useCreateProduct();
  const { updateProductAsync } = useUpdateProduct('product');
  const { deleteProduct } = useDeleteProduct('product');

  const { products, isLoading } = useProducts('product');
  const {
    products: productStore,
    addProduct,
    editProduct,
    deleteProduct: removeProduct,
  } = useProductsStore();
  const productsToDisplay = products.length > 0 ? products : productStore;

  const handleAddProduct = async (
    userId: string,
    name: string,
    unit_price: number,
    quantity: number
  ) => {
    const product = await createProductAsync({
      user_id: userId,
      name,
      unit_price,
      type: 'product',
      quantity,
    });
    addProduct(product as ProductFragmentFragment);
  };

  const handleEditProduct = async (updatedProduct: ProductFragmentFragment) => {
    try {
      const response = await updateProductAsync({
        id: updatedProduct.id,
        name: updatedProduct.name,
        unit_price: updatedProduct.unit_price,
        quantity: updatedProduct.quantity,
      });
      editProduct(response);
    } catch {
      toast.error('Failed to update product');
    }
  };

  const handleDeleteProduct = (id: string) => {
    deleteProduct(id);
    removeProduct(id);
  };

  if (isLoading || !userId) return <Loader />;

  return (
    <>
      <div className="container mx-auto p-4 w-full">
        <h1 className="text-xl font-bold mb-4">Products</h1>

        <Button onClick={() => setIsAddProductModalOpen(true)}>
          Add Product
        </Button>

        <ScrollArea className="mt-4 rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sl.No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Unit Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productsToDisplay.map((product, index) => (
                <TableRow key={product.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.unit_price}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setProductToEdit(product);
                        setIsEditProductModalOpen(true);
                      }}
                    >
                      <Pencil className="text-green-500" />
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <Trash2 className="text-red-700" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <AddProductDialog
        userId={userId}
        isModalOpen={isAddProductModalOpen}
        setIsModalOpen={setIsAddProductModalOpen}
        handleAddProduct={handleAddProduct}
      />

      <EditProductDialog
        isModalOpen={isEditProductModalOpen}
        setIsModalOpen={setIsEditProductModalOpen}
        product={productToEdit}
        handleEditProduct={handleEditProduct}
      />
    </>
  );
}
