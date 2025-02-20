'use client';
import { format } from 'date-fns';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  useDownloadReceiptPDFWithReceiptId,
  useSearchReceipts,
  useSendReceiptToEmailWithReceiptId,
  useSendReceiptToWhatsAppWithReceiptId,
} from './data/hooks';
import { ReceiptFragmentFragment } from '@/gql/graphql';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { years } from './utils';
import { DatePicker, DateRangePicker } from '@/components/utils';
import { DateRange } from 'react-day-picker';
import { Button } from '@/components/ui/button';
import { Check, X, Filter } from 'lucide-react';
import { DetailDialog, SubmitButton } from './ui';
import { useOrganization, useUser } from '@clerk/nextjs';
import { ViewPdfModal } from '../generateReceipt/ui';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { toast } from 'sonner';
import { SendToEmailDialog } from './ui/sendToEmailDialog';
import { SendToWhatsAppDialog } from './ui/sendToWhatsAppDialog';
import { useGenerateReceipt } from '../generateReceipt/data/hooks';

export default function ViewReceipts() {
  const { user } = useUser();
  const userId = user?.id;

  const { profile } = useGenerateReceipt(userId!);
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = searchParams ? Number(searchParams.get('page')) || 1 : 1;
  const [date, selectDate] = useState<Date | null>(null);
  const [dateRange, setDateRange] = useState<[string, string]>();
  const [dateRangeUI, setDateRangeUI] = useState<DateRange | undefined>();
  const [year, setYear] = useState<string | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSendReceiptToWhatsAppModalOpen, setSendReceiptToWhatsAppModalOpen] =
    useState(false);
  const [isSendReceiptToEmailModalOpen, setIsSendReceiptToEmailModalOpen] =
    useState(false);
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);
  const [selectedReceiptId, setSelectedReceiptId] = useState<string | null>(
    null
  );
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);
  const [selectedWhatsApp, setSelectedWhatsApp] = useState<string | null>(null);
  const [selectedReceiptIdToSendReceipt, setSelectedReceiptIdToSendReceipt] =
    useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const { organization } = useOrganization({
    memberships: true,
  });
  const orgId = organization?.id || '';

  const { downloadReceiptPDFWithReceiptIdAsync } =
    useDownloadReceiptPDFWithReceiptId();
  const { sendReceiptToEmailWithReceiptId } =
    useSendReceiptToEmailWithReceiptId();
  const { sendReceiptToWhatsAppWithReceiptId } =
    useSendReceiptToWhatsAppWithReceiptId();
  const { receipts, foundCount } = useSearchReceipts(
    currentPage,
    Number(year),
    date ? format(date, 'yyyy-MM-dd') : null,
    dateRange
  );
  const itemsPerPage = 10;
  const totalPages = Math.ceil(foundCount / itemsPerPage);
  useEffect(() => {
    const filters = searchParams?.get('filters')?.split(',') || [];
    if (filters.length > 0) {
      filters.forEach((filter) => {
        const [type, ...values] = filter.split(':');
        if (type === 'year') {
          setYear(values[0]);
        } else if (type === 'date') {
          selectDate(new Date(values[0]));
        } else if (type === 'dateRange' && values.length === 2) {
          setDateRange([values[0], values[1]]);
          setDateRangeUI({
            from: new Date(values[0]),
            to: new Date(values[1]),
          });
        }
      });
    }
  }, [searchParams]); // Replace `currentFilters` with `searchParams`

  const updateUrlWithFilters = (newFilters: string[]) => {
    const params = new URLSearchParams();
    params.set('page', '1'); // Reset to first page when filters change
    if (newFilters.length > 0) {
      params.set('filters', newFilters.join(','));
    }
    router.push(`?${params.toString()}`);
  };

  // Handler functions for filters
  const onChangeYear = (value: string) => {
    setYear(value);
    updateUrlWithFilters([`year:${value}`]);
  };

  const onChangeDate = (date: Date | undefined) => {
    if (date) {
      selectDate(date);
      updateUrlWithFilters([`date:${format(date, 'yyyy-MM-dd')}`]);
    }
  };

  const onChangeDateRange = (dateRange: [string, string]) => {
    setDateRange(dateRange);
    updateUrlWithFilters([`dateRange:${dateRange[0]}:${dateRange[1]}`]);
  };
  const resetDateRange = () => {
    setDateRange(undefined);
    setDateRangeUI(undefined);
    router.push('?page=1');
  };
  const clearFilters = () => {
    router.push('?page=1'); // Reset URL without filters
    setYear(undefined);
    selectDate(null);
    setDateRange(undefined);
    setDateRangeUI(undefined);
  };

  const onSendToWhatsApp = (
    receiptId: string,
    organizationId: string,
    phoneNumber: string
  ) => {
    sendReceiptToWhatsAppWithReceiptId(receiptId, organizationId, phoneNumber);
    toast.success('Receipt Successfully Send!.', {
      description:
        " If it doesn't arrive in 30s send it agian from the sales list section",
    });
  };

  const onSendToEmail = (
    receiptId: string,
    organizationId: string,
    email: string
  ) => {
    sendReceiptToEmailWithReceiptId(receiptId, organizationId, email);
    toast.success('Receipt Successfully Send!.', {
      description:
        " If it doesn't arrive in 30s send it agian from the sales list section",
    });
  };

  const onDownloadReceipt = async (
    receiptId: string,
    organizationId: string
  ) => {
    setIsPDFModalOpen(true);
    const url = await downloadReceiptPDFWithReceiptIdAsync(
      receiptId,
      organizationId
    );
    setPdfUrl(url);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[100vw] md:w-[80vw] lg:w-[80vw] xl:w-[80vw]">
        <div className="container mx-auto p-4 w-full">
          <h1 className="text-2xl font-bold mb-4">Sales</h1>
          <div className="flex flex-col md:flex-row gap-5 mb-4">
            <Popover>
              <PopoverTrigger>
                <div className="flex">
                  <Filter />
                  Filters
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="dateRange" className="text-sm font-medium">
                      Date Range
                    </label>
                    <DateRangePicker
                      id="dateRange"
                      date={dateRangeUI}
                      setDate={setDateRangeUI}
                      isDisabled={date || year ? true : false}
                      setDateRange={onChangeDateRange}
                      resetDateRange={resetDateRange}
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="year" className="text-sm font-medium">
                      Year
                    </label>
                    <Select
                      onValueChange={onChangeYear}
                      disabled={dateRange || date ? true : false}
                    >
                      <SelectTrigger className="w-[280px]">
                        <SelectValue placeholder="Select a Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Years</SelectLabel>
                          {years.map((year) => (
                            <SelectItem key={year} value={String(year)}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="date" className="text-sm font-medium">
                      Date
                    </label>
                    <DatePicker
                      isDisabled={dateRange || year ? true : false}
                      selected={date}
                      onSelect={onChangeDate}
                    />
                  </div>

                  <div>
                    <Button onClick={clearFilters} className="mt-7">
                      Clear Filters
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <ScrollArea className="sm:w-96 lg:w-full whitespace-nowrap rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sl.No</TableHead>
                  <TableHead className="w-[150px]">Receipt No</TableHead>
                  <TableHead>Recipient Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Total Amount</TableHead>
                  <TableHead>Payment Method</TableHead>
                  <TableHead>Receipt Send</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {receipts.map((receipt: ReceiptFragmentFragment, index) => (
                  <TableRow key={receipt.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className="font-medium">
                      {receipt.receipt_no}
                    </TableCell>
                    <TableCell>{receipt.recipient_name}</TableCell>
                    <TableCell>{format(receipt.date, 'PPP')}</TableCell>
                    <TableCell>{receipt.total_amount?.toFixed(2)}</TableCell>
                    <TableCell>{receipt.payment_method}</TableCell>
                    <TableCell>
                      {receipt.is_receipt_send ? (
                        <Check color="green" />
                      ) : (
                        <X color="red" />
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-row gap-2">
                        <SubmitButton
                          receiptId={receipt.id}
                          organizationId={orgId}
                          onDownloadReceipt={onDownloadReceipt}
                          setIsSendReceiptToEmailModalOpen={
                            setIsSendReceiptToEmailModalOpen
                          }
                          setSelectedReceiptIdToSendReceipt={
                            setSelectedReceiptIdToSendReceipt
                          }
                          setSelectedEmail={setSelectedEmail}
                          email={receipt.recipient_email ?? null}
                          phoneNumber={receipt.recipient_phone ?? null}
                          setIsSendReceiptToWhatsAppModalOpen={
                            setSendReceiptToWhatsAppModalOpen
                          }
                          setSelectedWhatsApp={setSelectedWhatsApp}
                        />
                        <Button
                          onClick={() => {
                            setSelectedReceiptId(receipt.id);
                            setIsModalOpen(true);
                          }}
                        >
                          Details
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <Pagination className="mt-4">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={`?page=${currentPage > 1 ? currentPage - 1 : 1}`}
                  aria-disabled={currentPage === 1}
                />
              </PaginationItem>
              {currentPage > 3 && (
                <>
                  <PaginationItem>
                    <PaginationLink
                      href={`?page=1`}
                      isActive={currentPage === 1}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                </>
              )}
              {Array.from(
                { length: Math.min(totalPages, 5) },
                (_, i) => currentPage - 2 + i
              ).map(
                (page) =>
                  page > 0 &&
                  page <= totalPages && (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href={`?page=${page}`}
                        isActive={currentPage === page}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
              )}
              {currentPage < totalPages - 2 && (
                <>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href={`?page=${totalPages}`}
                      isActive={currentPage === totalPages}
                    >
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}
              <PaginationItem>
                <PaginationNext
                  href={`?page=${
                    currentPage < totalPages ? currentPage + 1 : totalPages
                  }`}
                  aria-disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        Showing {receipts.length} of {foundCount}
        {selectedReceiptId && (
          <DetailDialog
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            receiptId={selectedReceiptId}
          />
        )}
        <ViewPdfModal
          fileUrl={pdfUrl}
          isModalOpen={isPDFModalOpen}
          setIsModalOpen={setIsPDFModalOpen}
        />
        {selectedReceiptIdToSendReceipt && (
          <SendToEmailDialog
            receiptId={selectedReceiptIdToSendReceipt}
            organizationId={orgId}
            isModalOpen={isSendReceiptToEmailModalOpen}
            setIsModalOpen={setIsSendReceiptToEmailModalOpen}
            onSendToEmail={onSendToEmail}
            email={selectedEmail}
          />
        )}
        {selectedReceiptIdToSendReceipt && (
          <SendToWhatsAppDialog
            receiptId={selectedReceiptIdToSendReceipt}
            organizationId={orgId}
            isModalOpen={isSendReceiptToWhatsAppModalOpen}
            setIsModalOpen={setSendReceiptToWhatsAppModalOpen}
            phoneNumber={selectedWhatsApp}
            onSendToWhatsApp={onSendToWhatsApp}
            phoneNumberCountryCode={profile.phone_number_country_code}
          />
        )}
      </div>
    </>
  );
}
