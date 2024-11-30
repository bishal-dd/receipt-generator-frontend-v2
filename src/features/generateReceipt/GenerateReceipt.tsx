"use client";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGenerateReceipt } from "./data/hooks";
import { useOrganization } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Header } from "./ui/Header";
export default function GenerateReceipt() {
  const { organization, isLoaded } = useOrganization({ memberships: true });

  // Loading state
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // Default values
  console.log(organization);
  const organizationName = organization?.name || "No Organization";
  const organizationImageUrl = organization?.imageUrl || "";
  const orgHasImage = organization?.hasImage;
  console.log(organizationImageUrl);
  const { getUserProfile } = useGenerateReceipt(
    "user_2aJJmO4RbjoifZhuqxFwiFs0WAd"
  );

  const { profile } = getUserProfile();
  console.log(profile);

  const organizationProfile = {
    name: organizationName || "",
    email: profile?.email || "",
    phone: profile?.phone_no || "",
    address: profile?.address || "",
    imageUrl: organizationImageUrl,
    hasImage: orgHasImage,
  };
  const receiptData = {
    companyName: organizationName,
    companyAddress: "123 Business St, City, State 12345",
    companyPhone: "(555) 123-4567",
    companyEmail: "info@acmecorp.com",
    customerName: "John Doe",
    customerAddress: "456 Customer Ave, Town, State 67890",
    receiptNumber: "REC-2023-001",
    receiptDate: "2023-05-20",
    paymentMethod: "Credit Card",
    items: [
      { description: "Product A", quantity: 2, unitPrice: 19.99, total: 39.98 },
      { description: "Service B", quantity: 1, unitPrice: 50.0, total: 50.0 },
      { description: "Item C", quantity: 3, unitPrice: 9.99, total: 29.97 },
    ],
    subtotal: 119.95,
    taxRate: 0.08,
    taxAmount: 9.6,
    total: 129.55,
    notes:
      "Thank you for your business! Please keep this receipt for your records.",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  lg:w-[80vw]">
      <Card className="w-full max-w-3xl mx-auto">
        <Header organization={organizationProfile} />

        <CardContent>
          <div className="flex justify-between mb-6">
            <div>
              <h2 className="font-semibold">Bill To:</h2>
              <p>{receiptData.customerName}</p>
              <p>{receiptData.customerAddress}</p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Receipt Number:</span>{" "}
                {receiptData.receiptNumber}
              </p>
              <p>
                <span className="font-semibold">Date:</span>{" "}
                {receiptData.receiptDate}
              </p>
              <p>
                <span className="font-semibold">Payment Method:</span>{" "}
                {receiptData.paymentMethod}
              </p>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead className="text-right">Unit Price</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {receiptData.items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.description}</TableCell>
                  <TableCell className="text-right">{item.quantity}</TableCell>
                  <TableCell className="text-right">
                    ${item.unitPrice.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    ${item.total.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-6 flex justify-end">
            <div className="w-1/2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${receiptData.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax ({(receiptData.taxRate * 100).toFixed(2)}%):</span>
                <span>${receiptData.taxAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-2">
                <span>Total:</span>
                <span>${receiptData.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </CardContent>
        {receiptData.notes && (
          <CardFooter>
            <div className="w-full">
              <h3 className="font-semibold mb-2">Notes:</h3>
              <p className="text-sm text-gray-600">{receiptData.notes}</p>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
