import { z } from "zod";

// Receipt validation schema
export const receiptSchema = z.object({
  customerName: z.string().min(1, "Customer name is required."),
  customerPhoneNumber: z.string().optional(),
  customerEmail: z.string().optional(),
  customerAddress: z.string().optional(),
  receiptNumber: z.string().min(1, "Receipt number is required."),
  paymentMethod: z.string().min(1, "Payment method is required."),
  date: z.date(),
  paymentNote: z.string().optional(),
  services: z
    .array(
      z.object({
        description: z.string().min(1, "Description is required."),
        quantity: z.number().min(1, "Quantity must be at least 1."),
        unitPrice: z.number().min(0.01, "Unit price must be greater than 0."),
      })
    )
    .min(1, "At least one service is required."),
});

// Infer the schema type for TypeScript
export type ReceiptFormData = z.infer<typeof receiptSchema>;
