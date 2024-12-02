"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGenerateReceipt, useProfileMutation } from "./data/hooks";
import { useOrganization } from "@clerk/nextjs";
import { Header } from "./ui/Header";
import { UpdateProfile } from "@/gql/graphql";
import { useQuery } from "@tanstack/react-query";
import { requestAPI } from "@/utils";
import { userProfileQuery } from "./data/graphql/queries/userProfile";
import { UserProfileQuery, ProfileFragmentFragment } from "@/gql/graphql";
import { useCallback, useMemo } from "react";

export default function GenerateReceipt() {
  const userId = "user_2aJJmO4RbjoifZhuqxFwiFs0WAd";

  const { organization, isLoaded: orgLoaded } = useOrganization({
    memberships: true,
  });
  const { updateProfile } = useProfileMutation();
  const { profile, profileLoading, error } = useGenerateReceipt(userId);

  console.log("herrrrrr");

  const organizationName = useMemo(
    () => organization?.name || "No Organization",
    [organization]
  );
  const organizationImageUrl = useMemo(
    () => organization?.imageUrl || "",
    [organization]
  );
  const orgHasImage = useMemo(() => organization?.hasImage, [organization]);

  const updateCompanyName = useCallback(
    (name: string) => {
      console.log(name);
      updateProfile({ id: profile.id, company_name: name });
    },
    [updateProfile]
  );

  // Memoize organization profile
  const organizationProfile = useMemo(
    () => ({
      name: organizationName,
      email: profile?.email || "",
      phone: profile?.phone_no || "",
      address: profile?.address || "",
      imageUrl: organizationImageUrl,
      hasImage: orgHasImage,
    }),
    [organizationName, profile, organizationImageUrl, orgHasImage]
  );

  // Keep receiptData outside of return to ensure hooks are always called
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

  // Render based on loading state AFTER all hooks have been called
  if (!orgLoaded || profileLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen lg:w-[80vw]">
      <Card className="w-full max-w-3xl mx-auto">
        <Header
          organization={organizationProfile}
          updateProfileValues={updateCompanyName}
        />
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
