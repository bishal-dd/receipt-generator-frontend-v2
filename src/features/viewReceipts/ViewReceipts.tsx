"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useReceipts } from "./data/hooks";
import { GetUserReceiptsQuery, ReceiptFragmentFragment } from "@/gql/graphql";

interface Receipt {
  id: string;
  receipt_name: string;
  recipient_name: string;
  recipient_phone?: string;
  recipient_email?: string;
  recipient_address?: string;
  receipt_no: string;
  user_id: string;
  date: Date;
  total_amount?: number;
  sub_total_amount?: number;
  tax_amount?: number;
  payment_method: string;
  payment_note?: string;
}

const dummyReceipts: Receipt[] = [
  {
    id: "1",
    receipt_name: "Office Supplies",
    recipient_name: "John Doe",
    recipient_phone: "123-456-7890",
    recipient_email: "john@example.com",
    recipient_address: "123 Main St, City, Country",
    receipt_no: "REC001",
    user_id: "USER1",
    date: new Date("2023-05-15"),
    total_amount: 150.0,
    sub_total_amount: 130.43,
    tax_amount: 19.57,
    payment_method: "Credit Card",
    payment_note: "Monthly office supplies",
  },
  {
    id: "2",
    receipt_name: "Client Lunch",
    recipient_name: "Jane Smith",
    receipt_no: "REC002",
    user_id: "USER1",
    date: new Date("2023-06-20"),
    total_amount: 85.5,
    payment_method: "Cash",
  },
  // Add more dummy data as needed
];

export default function ViewReceipts() {
  const { receipts: receipts2 } = useReceipts();
  console.log(receipts2);
  const [receipts, setReceipts] = useState<Receipt[]>(dummyReceipts);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedMonth, setSelectedMonth] = useState<string | undefined>(
    undefined
  );
  const [selectedYear, setSelectedYear] = useState<string | undefined>(
    undefined
  );

  const filterReceipts = () => {
    return receipts.filter((receipt) => {
      if (selectedDate && !isSameDay(receipt.date, selectedDate)) {
        return false;
      }
      if (
        selectedMonth &&
        receipt.date.getMonth() !== parseInt(selectedMonth) - 1
      ) {
        return false;
      }
      if (
        selectedYear &&
        receipt.date.getFullYear() !== parseInt(selectedYear)
      ) {
        return false;
      }
      return true;
    });
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const filteredReceipts = filterReceipts();

  return (
    <div className="flex flex-col items-center justify-center  lg:w-[80vw]">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Receipts</h1>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mb-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full sm:w-[200px] justify-start text-left font-normal",
                  !selectedDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {selectedDate ? (
                  format(selectedDate, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Select value={selectedMonth} onValueChange={setSelectedMonth}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                <SelectItem key={month} value={month.toString()}>
                  {format(new Date(2023, month - 1, 1), "MMMM")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {Array.from(
                { length: 5 },
                (_, i) => new Date().getFullYear() - i
              ).map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            onClick={() => {
              setSelectedDate(undefined);
              setSelectedMonth(undefined);
              setSelectedYear(undefined);
            }}
            className="w-full sm:w-auto"
          >
            Clear Filters
          </Button>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Receipt No</TableHead>
                <TableHead>Recipient Name</TableHead>
                <TableHead>Receipt No</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Payment Method</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {receipts2.map((receipt: ReceiptFragmentFragment) => (
                <TableRow key={receipt.id}>
                  <TableCell className="font-medium">
                    {receipt.receipt_no}
                  </TableCell>
                  <TableCell>{receipt.recipient_name}</TableCell>
                  <TableCell>{receipt.recipient_phone}</TableCell>
                  <TableCell>{format(receipt.date, "PPP")}</TableCell>
                  <TableCell>{receipt.total_amount?.toFixed(2)}</TableCell>
                  <TableCell>{receipt.payment_method}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
