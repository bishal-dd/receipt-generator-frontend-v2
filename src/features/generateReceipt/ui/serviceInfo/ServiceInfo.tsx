'use client';

import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useCallback, useMemo } from 'react';
import { Plus, Minus } from 'lucide-react';
import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  useWatch,
} from 'react-hook-form';
import { ReceiptFormData } from '../../utils';
import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { CurrencyInput } from './CurrencyInput';
import { UpdateInput } from '@/components/utils';
import { ProductSearch } from './ProductSearch';

type Props = {
  control: any; // Replace `any` with appropriate type
  fields: FieldArrayWithId<ReceiptFormData, 'services', 'id'>[];
  appendAction: UseFieldArrayAppend<ReceiptFormData, 'services'>;
  removeAction: UseFieldArrayRemove;
  currency: string;
  onSelectCurrencyAction: (currency: string) => void;
  updateCompanyTaxAction: (taxValue: number) => void;
  setDiscountPercentageAction: (discountPercentage: number) => void;
  updateDiscountPercentageAction: (discountPercentage: number) => void;
  taxValue: number;
  discountPercent: number;
  setTaxStateAction: (tax: number) => void;
  setValue: any;
};

export function ServiceInfo({
  fields,
  appendAction,
  removeAction,
  control,
  currency,
  onSelectCurrencyAction,
  updateCompanyTaxAction,
  updateDiscountPercentageAction,
  setDiscountPercentageAction,
  taxValue,
  discountPercent,
  setTaxStateAction,
  setValue,
}: Props) {
  const services = useWatch({
    control,
    name: 'services',
  });

  // Calculate total based on watched services
  const subtotal = useMemo(() => {
    return services
      ? services.reduce(
          (total: number, field: { quantity: any; unitPrice: any }) =>
            total + (field.quantity || 0) * (field.unitPrice || 0),
          0
        )
      : 0;
  }, [services]);

  // Convert % to rate
  const discountRate = useMemo(() => discountPercent / 100, [discountPercent]);

  // Discount amount
  const discount = useMemo(
    () => subtotal * discountRate,
    [subtotal, discountRate]
  );

  // Subtotal after discount
  const discountedSubtotal = useMemo(
    () => subtotal - discount,
    [subtotal, discount]
  );

  // Tax calculation (based on discounted subtotal)
  const taxRate = useMemo(() => taxValue / 100, [taxValue]);
  const tax = useMemo(
    () => discountedSubtotal * taxRate,
    [discountedSubtotal, taxRate]
  );

  // Final total
  const total = useMemo(
    () => discountedSubtotal + tax,
    [discountedSubtotal, tax]
  );

  const handleAppend = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      appendAction({ description: '', quantity: 1, unitPrice: 0, id: '' });
    },
    [appendAction]
  );

  const handleRemove = useCallback(
    (index: number) => (e: React.MouseEvent) => {
      e.preventDefault();
      removeAction(index);
    },
    [removeAction]
  );
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-32 px-4 py-2">Actions</TableHead>
            <TableHead className="w-64 px-4 py-2">Description </TableHead>
            <TableHead className="w-24 text-right px-4 py-2">
              Quantity
            </TableHead>
            <TableHead className="w-24 text-right px-4 py-2">
              Unit Price
            </TableHead>
            <TableHead className="w-32 text-right px-4 py-2">
              Total
              <CurrencyInput
                defaultCurrency={currency}
                onSelect={onSelectCurrencyAction}
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fields.map((field, index) => (
            <TableRow key={field.id} className="h-24">
              <TableCell className="w-32 px-4 py-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-green-700 hover:bg-black/10 hover:text-green-700"
                  onClick={handleAppend}
                >
                  <Plus className="h-4 w-4" />
                </Button>
                {fields.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-red-700 hover:bg-black/10 hover:text-red-700"
                    onClick={handleRemove(index)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                )}
              </TableCell>
              <TableCell className="w-64 px-4 py-2">
                <ProductSearch
                  index={index}
                  control={control}
                  setValue={setValue}
                />
              </TableCell>
              <TableCell className="w-24 text-right px-4 py-2">
                <FormField
                  control={control}
                  name={`services.${index}.quantity`}
                  render={({ field }) => (
                    <FormItem className="max-h-10">
                      <FormControl>
                        <Input
                          type="number"
                          className="w-20"
                          {...field}
                          value={field.value || ''}
                          onChange={(e) =>
                            field.onChange(
                              e.target.value === ''
                                ? ''
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
              <TableCell className="w-24 text-right px-4 py-2">
                <FormField
                  control={control}
                  name={`services.${index}.unitPrice`}
                  render={({ field }) => (
                    <FormItem className="max-h-10">
                      <FormControl>
                        <Input
                          type="number"
                          className="w-20"
                          {...field}
                          value={field.value || ''}
                          onChange={(e) =>
                            field.onChange(
                              e.target.value === ''
                                ? ''
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
              <TableCell className="w-32 text-right px-4 py-2">
                {(
                  (services?.[index]?.quantity || 0) *
                  (services?.[index]?.unitPrice || 0)
                ).toFixed(2)}{' '}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-6 flex justify-start md:justify-end lg:justify-end gap-4 xl:justify-end">
        <div className="w-auto">
          <div className="flex justify-between mt-2 items-center">
            <span className="flex items-center gap-2">
              <span>Subtotal:</span>
              <span>{subtotal.toFixed(2)}</span>
              <span>{currency}</span>
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <span>Discount</span>
              <span>(</span>
              <span>
                <UpdateInput
                  value={discountPercent === 0 ? '' : discountPercent}
                  name="discount"
                  className="text-center w-12 h-8 md:w-12"
                  placeholder="Discount"
                  onChange={(value: string | number) => {
                    if (value === '') {
                      value = 0;
                    }
                    setDiscountPercentageAction(Number(value));
                    updateDiscountPercentageAction(Number(value));
                  }}
                  type="text"
                />
              </span>
              <span> %):</span>
              <span>{discount.toFixed(2)}</span>
              <span>{currency}</span>
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <span>GST</span>
              <span>(</span>
              <span>
                <UpdateInput
                  value={taxValue === 0 ? '' : taxValue}
                  name="tax"
                  className="text-center w-12 h-8 md:w-12"
                  placeholder="Tax"
                  onChange={(value: string | number) => {
                    if (value === '') {
                      value = 0;
                    }
                    setTaxStateAction(Number(value));
                    updateCompanyTaxAction(Number(value));
                  }}
                  type="text"
                />
              </span>
              <span> %):</span>
              <span>{tax.toFixed(2)}</span>
              <span>{currency}</span>
            </span>
          </div>

          <div className="flex justify-between font-semibold mt-2 items-center">
            <span className="flex items-center gap-2">
              <span>Total:</span>
              <span>{total.toFixed(2)}</span>
              <span>{currency}</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
