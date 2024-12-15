"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import cc from "currency-codes";
import { useCurrencyStore } from "@/store/currency";

type Props = {
  defaultCurrency: string;
  onSelect: (value: string) => void;
};
const currencies = cc.codes().map((code) => ({
  code,
  label: `${code} - ${cc.code(code)?.currency || "Unknown"}`,
}));
export function CurrencyInput({ defaultCurrency, onSelect }: Props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultCurrency);
  const { currency, setCurrency } = useCurrencyStore();
  const onSelectCurrency = (value: string) => {
    setCurrency(value);
    onSelect(value);
    setOpen(false);
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[80px] justify-between"
        >
          {currency
            ? currencies.find((currencys) => currencys.code === currency)?.code
            : "USD"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search currency..." />
          <CommandList>
            <CommandEmpty>No currency found.</CommandEmpty>
            <CommandGroup>
              {currencies.map((currencys) => (
                <CommandItem
                  key={currencys.code}
                  value={currencys.code}
                  onSelect={(currentValue) => {
                    onSelectCurrency(currentValue);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      currency === currencys.code ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {currencys.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
