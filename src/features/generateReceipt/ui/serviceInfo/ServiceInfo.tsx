"use client";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  useWatch,
} from "react-hook-form";
import { ReceiptFormData } from "../../utils";
import { Button } from "@/components/ui/button";

type Props = {
  register: any;
  control: any; // Replace `any` with appropriate type
  fields: FieldArrayWithId<ReceiptFormData, "services", "id">[];
  append: UseFieldArrayAppend<ReceiptFormData, "services">;
  remove: UseFieldArrayRemove;
  errors: FieldErrors<ReceiptFormData>;
};
export function ServiceInfo({
  fields,
  append,
  remove,
  errors,
  register,
  control,
}: Props) {
  const services = useWatch({
    control,
    name: "services",
  });

  // Calculate total based on watched services
  const subtotal = services
    ? services.reduce(
        (total: number, field: { quantity: any; unitPrice: any }) =>
          total + (field.quantity || 0) * (field.unitPrice || 0),
        0
      )
    : 0;

  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  const total = subtotal * (1 + taxRate);
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Actions</TableHead>
            <TableHead>Description </TableHead>
            <TableHead className="text-right">Quantity</TableHead>
            <TableHead className="text-right">Unit Price</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fields.map((field, index) => (
            <TableRow key={field.id}>
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-green-700 hover:bg-black/10 hover:text-green-700"
                  onClick={(e) => {
                    e.preventDefault();
                    append({ description: "", quantity: 1, unitPrice: 0 });
                  }}
                >
                  <Plus className="h-4 w-4" />
                </Button>
                {fields.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-red-700 hover:bg-black/10 hover:text-red-700"
                    onClick={(e) => {
                      e.preventDefault();
                      remove(index);
                    }}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                )}
              </TableCell>
              <TableCell>
                <Input
                  placeholder="Description"
                  {...register(`services.${index}.description`)}
                />
                {errors.services?.[index]?.description && (
                  <p className="text-red-600">
                    {errors.services[index].description?.message}
                  </p>
                )}
              </TableCell>
              <TableCell className="text-right">
                <Input
                  type="number"
                  className="w-20"
                  {...register(`services.${index}.quantity`, {
                    valueAsNumber: true,
                  })}
                />
                {errors.services?.[index]?.quantity && (
                  <p className="text-red-600">
                    {errors.services[index].quantity?.message}
                  </p>
                )}
              </TableCell>
              <TableCell className="text-right">
                <Input
                  type="number"
                  {...register(`services.${index}.unitPrice`, {
                    valueAsNumber: true,
                  })}
                  className="w-50"
                />
                {errors.services?.[index]?.unitPrice && (
                  <p className="text-red-600">
                    {errors.services[index].unitPrice?.message}
                  </p>
                )}
              </TableCell>
              <TableCell className="text-right">
                {" "}
                $
                {(
                  (services?.[index]?.quantity || 0) *
                  (services?.[index]?.unitPrice || 0)
                ).toFixed(2)}{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-6 flex justify-end">
        <div className="w-1/2">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (8%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mt-2">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </>
  );
}
