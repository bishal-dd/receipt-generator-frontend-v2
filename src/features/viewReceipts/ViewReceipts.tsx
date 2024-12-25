"use client";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSearchReceipts } from "./data/hooks";
import { ReceiptFragmentFragment } from "@/gql/graphql";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ViewReceipts() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = searchParams ? Number(searchParams.get("page")) || 1 : 1;
  console.log(currentPage);
  const { receipts, foundCount, totalCount } = useSearchReceipts(currentPage);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  useEffect(() => {
    if (!searchParams?.get("page")) {
      router.push(`?page=1`);
    }
  }, [searchParams, router]);

  return (
    <div className="flex flex-col items-center justify-center  lg:w-[80vw]">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Receipts</h1>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mb-4"></div>
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
              {receipts.map((receipt: ReceiptFragmentFragment) => (
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
        <Pagination>
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
                  <PaginationLink href={`?page=1`} isActive={currentPage === 1}>
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
    </div>
  );
}
