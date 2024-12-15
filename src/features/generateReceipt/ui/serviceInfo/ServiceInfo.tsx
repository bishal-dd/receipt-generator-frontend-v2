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
import { Plus, Minus, Currency } from "lucide-react";
import {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  useWatch,
} from "react-hook-form";
import { ReceiptFormData } from "../../utils";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CurrencyInput } from "@/components/utils";
type Props = {
  control: any; // Replace `any` with appropriate type
  fields: FieldArrayWithId<ReceiptFormData, "services", "id">[];
  append: UseFieldArrayAppend<ReceiptFormData, "services">;
  remove: UseFieldArrayRemove;
  currency: string;
  onSelectCurrency: (currency: string) => void;
};
export function ServiceInfo({
  fields,
  append,
  remove,
  control,
  currency,
  onSelectCurrency,
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
            <TableHead className="text-right">
              Total
              <CurrencyInput
                defaultCurrency={currency}
                onSelect={onSelectCurrency}
              />
            </TableHead>
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
                <FormField
                  control={control}
                  name={`services.${index}.description`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell className="text-right">
                <FormField
                  control={control}
                  name={`services.${index}.quantity`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="number"
                          className="w-20"
                          {...field}
                          value={field.value || ""}
                          onChange={(e) =>
                            field.onChange(
                              e.target.value === ""
                                ? ""
                                : Number(e.target.value)
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell className="text-right">
                <FormField
                  control={control}
                  name={`services.${index}.unitPrice`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="number"
                          className="w-20"
                          {...field}
                          value={field.value || ""}
                          onChange={(e) =>
                            field.onChange(
                              e.target.value === ""
                                ? ""
                                : Number(e.target.value)
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell className="text-right">
                {currency}{" "}
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
            <span>
              {currency} {subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Tax (8%):</span>
            <span>
              {currency} {tax.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between font-semibold text-lg mt-2">
            <span>Total:</span>
            <span>
              {currency} {total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
