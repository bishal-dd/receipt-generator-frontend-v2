import { useWatch } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { DatePicker, PhoneInput } from '@/components/utils';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { startOfDay } from 'date-fns';
import * as RPNInput from 'react-phone-number-input';
type Props = {
  control: any;
  updatePhoneNumberCountryCode: (countryCode: string) => void;
  setPhoneNumberCountryCodeState: (countryCode: string) => void;
  defaultPhoneNumberCountryCode: string;
};

export function ReceiptInfo({
  control,
  updatePhoneNumberCountryCode,
  setPhoneNumberCountryCodeState,
  defaultPhoneNumberCountryCode,
}: Props) {
  const paymentMethod = useWatch({
    control,
    name: 'paymentMethod',
  });

  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between mb-6">
      {/* Left: Bill To Section */}
      <div className="p-5 space-y-5">
        <h2 className="font-semibold">Bill To:</h2>

        <FormField
          control={control}
          name="customerName"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Customer Name" {...field} />
              </FormControl>
              <FormDescription>Customer Name is not Required</FormDescription>
              <FormMessage>{error?.message}</FormMessage>{' '}
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="customerPhoneNumber"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormControl>
                <PhoneInput
                  placeholder="Customer Number"
                  {...field}
                  defaultCountry={
                    defaultPhoneNumberCountryCode as RPNInput.Country
                  }
                  onCountryChange={(country) => {
                    if (country) {
                      updatePhoneNumberCountryCode(country);
                      setPhoneNumberCountryCodeState(country);
                      console.log('Selected country:', country);
                    }
                  }}
                />
              </FormControl>
              <FormDescription>
                Required if you want to send receipt to WhatsApp
              </FormDescription>
              <FormMessage>{error?.message}</FormMessage>{' '}
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="customerEmail"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Customer Email" type="email" {...field} />
              </FormControl>
              <FormDescription>
                Required if you want to send receipt to Email
              </FormDescription>
              <FormMessage>{error?.message}</FormMessage>{' '}
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="customerAddress"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Customer Address" {...field} />
              </FormControl>
              <FormDescription>Address is not required</FormDescription>
              <FormMessage>{error?.message}</FormMessage>{' '}
            </FormItem>
          )}
        />
      </div>

      {/* Right: Receipt Info Section */}
      <div className="p-5 space-y-5">
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
                <FormDescription>Unique Id for the receipt</FormDescription>
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
              <FormDescription>Date is required</FormDescription>
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
                      <SelectItem value="Bank Transfer">
                        Bank Transfer
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>Payment Method is required</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {paymentMethod === 'Bank Transfer' && (
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
