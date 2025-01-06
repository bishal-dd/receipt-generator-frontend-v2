'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type Props = {
  isDisabled?: boolean;
  date: DateRange | undefined;
  setDate: (dateRange: DateRange | undefined) => void;
  setDateRange: (dateRange: [string, string]) => void;
  resetDateRange: () => void;
};
export function DateRangePicker({
  id,
  isDisabled,
  setDateRange,
  date,
  setDate,
  className,
  resetDateRange,
}: React.HTMLAttributes<HTMLDivElement> & Props) {
  const onApply = () => {
    if (date && date.from && date.to) {
      setDateRange([
        format(date.from, 'yyyy-MM-dd'),
        format(date.to, 'yyyy-MM-dd'),
      ]);
    }
  };

  const onClear = () => {
    resetDateRange();
  };
  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild disabled={isDisabled || false}>
          <Button
            id={id || ''}
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
          <div className="flex justify-center p-4">
            <div className="mr-2">
              <Button
                onClick={onApply}
                disabled={!date?.to || !date?.from ? true : false}
              >
                Apply
              </Button>
            </div>
            <div>
              <Button
                onClick={onClear}
                disabled={!date?.to || !date?.from ? true : false}
              >
                Clear
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
