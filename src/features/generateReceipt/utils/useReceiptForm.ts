import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { receiptSchema, ReceiptFormData } from '.';
import { generateRandomNumbers } from '@/utils';
import { startOfDay } from 'date-fns';

export function useReceiptForm() {
  const receiptForm = useForm<ReceiptFormData>({
    resolver: zodResolver(receiptSchema),
    defaultValues: {
      customerName: '',
      customerPhoneNumber: '',
      customerEmail: '',
      customerAddress: '',
      receiptNumber: 'REC-' + generateRandomNumbers(6),
      paymentMethod: '',
      date: startOfDay(new Date()),
      paymentNote: '',
      services: [{ description: '', quantity: 1, unitPrice: 0 }],
    },
  });
  const { control, handleSubmit, reset } = receiptForm;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'services',
  });

  return {
    receiptForm,
    fields,
    append,
    remove,
    handleSubmit,
    reset,
  };
}
