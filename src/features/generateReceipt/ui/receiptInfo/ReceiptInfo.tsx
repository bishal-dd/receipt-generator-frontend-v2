"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useWatch } from "react-hook-form";

type Props = {
  register: any;
  control: any;
  errors: any;
};
export function ReceiptInfo({ register, errors, control }: Props) {
  const paymentMethod = useWatch({
    control,
    name: "paymentMethod",
  });
  return (
    <div className="flex justify-between mb-6">
      {/* Left: Bill To Section */}
      <div className="p-5 space-y-5">
        <h2 className="font-semibold">Bill To:</h2>
        <Input
          placeholder="Customer Name"
          name="customerName"
          {...register("customerName")}
        />
        {errors.customerName && (
          <p className="text-red-600">{errors.customerName.message}</p>
        )}
        <Input
          placeholder="Customer Number"
          name="customerNumber"
          {...register("customerPhoneNumber")}
        />
        {errors.customerPhoneNumber && (
          <p className="text-red-600">{errors.customerPhoneNumber.message}</p>
        )}
        <Input
          placeholder="Customer Email"
          type="email"
          name="customerEmail"
          {...register("customerEmail")}
        />
        {errors.customerEmail && (
          <p className="text-red-600">{errors.customerEmail.message}</p>
        )}
        <Input
          placeholder="Customer Address"
          name="customerAddress"
          {...register("customerAddress")}
        />
        {errors.customerAddress && (
          <p className="text-red-600">{errors.customerAddress.message}</p>
        )}
      </div>

      {/* Right: Receipt Info Section */}
      <div className="space-y-6">
        {/* Receipt Number */}
        <div className="space-y-1">
          <span className="font-semibold">Receipt Number:</span>
          <Input placeholder="Receipt Number" name="receiptNumber" />
        </div>

        {/* Date */}
        <div className="space-y-1">
          <label htmlFor="date" className="font-semibold">
            Date:
          </label>
          <div id="date">
            <DatePicker />
          </div>
        </div>

        {/* Payment Method */}
        <div className="space-y-1">
          <span className="font-semibold">Payment Method:</span>
          <Controller
            name="paymentMethod"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Payment Method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Card">Card</SelectItem>
                    <SelectItem value="Cash">Cash</SelectItem>
                    <SelectItem value="BankTransfer">Bank Transfer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.paymentMethod && (
            <p className="text-red-600">{errors.paymentMethod.message}</p>
          )}
        </div>

        {paymentMethod === "BankTransfer" && (
          <div className="space-y-1">
            <span className="font-semibold">Payment Note:</span>
            <Input
              placeholder="Enter payment note"
              name="paymentNote"
              {...register("paymentNote")}
            />
            {errors.paymentNote && (
              <p className="text-red-600">{errors.paymentNote.message}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
