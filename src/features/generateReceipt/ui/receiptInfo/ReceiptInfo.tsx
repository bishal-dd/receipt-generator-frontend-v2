import { useWatch } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
import { startOfDay } from "date-fns";

type Props = {
  control: any;
};

export function ReceiptInfo({ control }: Props) {
  const paymentMethod = useWatch({
    control,
    name: "paymentMethod",
  });

  return (
    <div className="flex justify-between mb-6">
      {/* Left: Bill To Section */}
      <div className="p-5 space-y-5">
        <h2 className="font-semibold">Bill To:</h2>

        <FormField
          control={control}
          name="customerName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Customer Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="customerPhoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Customer Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="customerEmail"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Customer Email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="customerAddress"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Customer Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Right: Receipt Info Section */}
      <div className="space-y-6">
        {/* Receipt Number */}
        <div className="space-y-1">
          <FormField
            control={control}
            name="receiptNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Receipt Number</FormLabel>
                <FormControl>
                  <Input placeholder="Receipt Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Date */}
        <FormField
          control={control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <DatePicker
                selected={field.value || startOfDay(new Date())}
                onSelect={(date) => field.onChange(date)}
              />
              <FormDescription>
                Date is required and must be a valid date.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Payment Method */}
        <FormField
          control={control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Method</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Payment Method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Card">Card</SelectItem>
                      <SelectItem value="Cash">Cash</SelectItem>
                      <SelectItem value="BankTransfer">
                        Bank Transfer
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {paymentMethod === "BankTransfer" && (
          <FormField
            control={control}
            name="paymentNote"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Payment Note</FormLabel>
                <FormControl>
                  <Input placeholder="Enter payment note" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
      </div>
    </div>
  );
}