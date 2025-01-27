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
import { useUser } from '@clerk/nextjs';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useState } from 'react';
import { AddProductDialog } from './ui/addProduct';
import { Loader } from '@/components/utils';
import { useCreateProduct } from './data/hooks/useCreateProduct';

export default function Products() {
  const { user } = useUser();
  const userId = user?.id;
  const [isAddProductModalOpen, setIsAddProductModalOpen] =
    useState<boolean>(false);
  const { createProductAsync } = useCreateProduct();

  const handleAddProduct = async (
    userId: string,
    name: string,
    unit_price: number
  ) => {
    await createProductAsync({
      user_id: userId,
      name,
      unit_price,
    });
  };
  if (!userId) {
    return <Loader />;
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[100vw] md:w-[80vw] lg:w-[80vw] xl:w-[80vw]">
        <div className="container mx-auto p-4 w-full">
          <h1 className="text-2xl font-bold mb-4">Products / Services</h1>
          <div className="flex flex-col md:flex-row gap-5 mb-4">
            <Button onClick={() => setIsAddProductModalOpen(true)}>
              Add Product
            </Button>
          </div>
          <ScrollArea className="sm:w-96 lg:w-full whitespace-nowrap rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sl.No</TableHead>
                  <TableHead className="w-[150px]">Name</TableHead>
                  <TableHead>Unit Price</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell className="font-medium">test</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
      <AddProductDialog
        userId={userId}
        isModalOpen={isAddProductModalOpen}
        setIsModalOpen={setIsAddProductModalOpen}
        handleAddProduct={handleAddProduct}
      />
    </>
  );
}
