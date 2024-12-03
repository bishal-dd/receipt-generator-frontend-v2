"use client";
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

export function ReceiptInfo() {
  return (
    <div className="flex justify-between mb-6">
      <div className="p-5 space-y-5">
        {" "}
        {/* Applies 5 units of vertical space between children */}
        <h2 className="font-semibold">Bill To:</h2>
        <Input placeholder="Customer Name" name="customerName" />
        <Input placeholder="Customer Number" name="customerNumber" />
        <Input placeholder="Customer Email" name="customerEmail" />
      </div>
      <div>
        <p>
          <span className="font-semibold">Receipt Number:</span>{" "}
          <Input placeholder="Receipt Number" name="receiptNumber" />
        </p>
        <p>
          <span className="font-semibold">Date:</span>
          <br /> <DatePicker />
        </p>
        <p>
          <span className="font-semibold">Payment Method:</span>{" "}
          <Select>
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
        </p>
      </div>
    </div>
  );
}
