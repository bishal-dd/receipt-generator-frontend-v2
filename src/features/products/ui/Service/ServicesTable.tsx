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
import { AddServiceDialog } from './AddServiceDialog';
import { EditServiceDialog } from './EditServiceDialog';
import { Loader } from '@/components/utils';
import { Pencil, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

import {
  useCreateProduct,
  useDeleteProduct,
  useUpdateProduct,
  useProducts,
} from '../../data/hooks';

import { useServicesStore } from '../../store';
import { ProductFragmentFragment } from '@/gql/graphql';

export function ServicesTable() {
  const { user } = useUser();
  const userId = user?.id;

  const [isAddServiceModalOpen, setIsAddServiceModalOpen] = useState(false);
  const [isEditServiceModalOpen, setIsEditServiceModalOpen] = useState(false);
  const [serviceToEdit, setServiceToEdit] =
    useState<ProductFragmentFragment | null>(null);

  const { createProductAsync } = useCreateProduct();
  const { updateProductAsync } = useUpdateProduct('service');
  const { deleteProduct } = useDeleteProduct('service');

  const { products, isLoading } = useProducts('service');
  const {
    services: serviceStore,
    addService,
    editService,
    deleteService: removeService,
  } = useServicesStore();

  const productsToDisplay = products.length > 0 ? products : serviceStore;

  const handleAddService = async (
    userId: string,
    name: string,
    unit_price: number
  ) => {
    const service = await createProductAsync({
      user_id: userId,
      name,
      unit_price,
      type: 'service',
      quantity: 0,
    });
    addService(service as ProductFragmentFragment);
  };

  const handleEditService = async (updatedService: ProductFragmentFragment) => {
    try {
      const response = await updateProductAsync({
        id: updatedService.id,
        name: updatedService.name,
        unit_price: updatedService.unit_price,
        quantity: 0,
      });
      editService(response);
    } catch {
      toast.error('Failed to update service');
    }
  };

  const handleDeleteService = (id: string) => {
    deleteProduct(id);
    removeService(id);
  };

  if (isLoading || !userId) return <Loader />;

  return (
    <>
      <div className="container mx-auto p-4 w-full">
        <h1 className="text-xl font-bold mb-4">Services</h1>

        <Button onClick={() => setIsAddServiceModalOpen(true)}>
          Add Service
        </Button>

        <ScrollArea className="mt-4 rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sl.No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Unit Price</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productsToDisplay.map((service, index) => (
                <TableRow key={service.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{service.name}</TableCell>
                  <TableCell>{service.unit_price}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setServiceToEdit(service);
                        setIsEditServiceModalOpen(true);
                      }}
                    >
                      <Pencil className="text-green-500" />
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => handleDeleteService(service.id)}
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

      <AddServiceDialog
        userId={userId}
        isModalOpen={isAddServiceModalOpen}
        setIsModalOpen={setIsAddServiceModalOpen}
        handleAddProduct={(uid, name, unit_price) =>
          handleAddService(uid, name, unit_price)
        }
      />

      <EditServiceDialog
        isModalOpen={isEditServiceModalOpen}
        setIsModalOpen={setIsEditServiceModalOpen}
        product={serviceToEdit}
        handleEditProduct={handleEditService}
      />
    </>
  );
}
