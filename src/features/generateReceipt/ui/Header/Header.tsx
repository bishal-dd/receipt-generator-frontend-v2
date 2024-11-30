"use client";
import { Input } from "@/components/ui/input";

import { CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image";

type Props = {
  organization: {
    name: string;
    imageUrl: string;
    hasImage: boolean | undefined;
    address: string;
    phone: string | number;
    email: string;
  };
};
export function Header({ organization }: Props) {
  return (
    <div className="flex justify-between mb-6">
      {organization.hasImage ? (
        <div className="flex items-center justify-center p-5">
          <Image
            src={organization.imageUrl}
            alt="Logo"
            width={100}
            height={100}
            className="rounded-md"
          />
        </div>
      ) : null}
      <div
        className={`p-5 flex flex-col ${
          organization.hasImage ? "w-auto" : "w-full items-center"
        }`}
      >
        <CardHeader className={`${organization.hasImage ? "" : "text-center"}`}>
          <CardTitle className="text-2xl font-bold">
            <Input
              defaultValue={organization.name}
              placeholder="Company Name"
              className="text-2xl font-bold text-center w-auto mx-auto"
            />
          </CardTitle>
          <div className="text-sm text-gray-500 space-y-2">
            <p className="flex justify-center">
              <Input
                defaultValue={organization.address}
                placeholder="Company Address"
                className="w-full max-w-md text-center"
              />
            </p>
            <p className="flex justify-center gap-2">
              <Input
                defaultValue={organization.phone}
                placeholder="Company Phone"
                className="w-auto max-w-xs"
              />{" "}
              |
              <Input
                defaultValue={organization.email}
                placeholder="Company Email"
                className="w-auto max-w-xs"
              />
            </p>
          </div>
        </CardHeader>
      </div>
    </div>
  );
}
