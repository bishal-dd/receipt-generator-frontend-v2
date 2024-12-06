import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { receiptSchema, ReceiptFormData } from ".";

export function useReceiptForm() {
  const receiptForm = useForm<ReceiptFormData>({
    resolver: zodResolver(receiptSchema),
    defaultValues: {
      customerName: "",
      customerPhoneNumber: "",
      customerEmail: "",
      customerAddress: "",
      paymentMethod: "",
      date: new Date(),
      paymentNote: "",
      services: [{ description: "", quantity: 1, unitPrice: 0 }],
    },
  });
  const { control } = receiptForm;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "services",
  });

  return {
    receiptForm,
    fields,
    append,
    remove,
  };
}
