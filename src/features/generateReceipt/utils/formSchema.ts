import { z } from 'zod';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { generateRandomNumbers } from '@/utils';
import { startOfDay } from 'date-fns';

// Receipt validation schema
export const receiptSchema = z.object({
  customerName: z.string().optional(),
  customerPhoneNumber: z
    .string()
    .optional()
    .refine(
      (val) => !val || isValidPhoneNumber(val), // Allow empty string or valid phone number
      { message: 'Invalid phone number' }
    ),
  customerEmail: z.string().optional(),
  customerAddress: z.string().optional(),
  receiptNumber: z.string().min(1, 'Receipt number is required.'),
  paymentMethod: z.string().min(1, 'Payment method is required.'),
  date: z.date(),
  paymentNote: z.string().optional(),
  services: z
    .array(
      z.object({
        id: z.string().optional(),
        description: z.string().min(1, 'Description is required.'),
        quantity: z.number().min(1, 'Quantity must be at least 1.'),
        unitPrice: z.number().min(0.01, 'Unit price must be greater than 0.'),
      })
    )
    .min(1, 'At least one service is required.'),
});

export const getDefaultFormValues = (): ReceiptFormData => ({
  receiptNumber: 'REC-' + generateRandomNumbers(6),
  customerName: '',
  customerPhoneNumber: '',
  customerEmail: '',
  customerAddress: '',
  paymentMethod: '',
  date: startOfDay(new Date()),
  paymentNote: '',
  services: [{ description: '', quantity: 1, unitPrice: 0, id: '' }],
});

// Infer the schema type for TypeScript
export type ReceiptFormData = z.infer<typeof receiptSchema>;
