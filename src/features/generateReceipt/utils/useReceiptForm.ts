import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { receiptSchema, ReceiptFormData } from ".";

export function useReceiptForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ReceiptFormData>({
    resolver: zodResolver(receiptSchema),
    defaultValues: {
      customerName: "",
      customerPhoneNumber: "",
      customerEmail: "",
      customerAddress: "",
      paymentMethod: "",
      paymentNote: "",
      services: [{ description: "", quantity: 1, unitPrice: 0 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "services",
  });

  return {
    register,
    control,
    handleSubmit,
    errors,
    fields,
    append,
    remove,
  };
}
