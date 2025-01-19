import { CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { UpdateInput } from '@/components/utils';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type Props = {
  organization: {
    name: string;
    imageUrl: string;
    hasImage: boolean | undefined;
    address: string;
    phone: string | number;
    email: string;
  };
  updateCompanyName: (name: string) => void;
  updateCompanyAddress: (address: string) => void;
  updateCompanyPhone: (phone: number) => void;
  updateCompanyEmail: (email: string) => void;
};
export function Header({
  organization,
  updateCompanyName,
  updateCompanyAddress,
  updateCompanyPhone,
  updateCompanyEmail,
}: Props) {
  return (
    <div className="flex justify-between mb-6">
      {organization.hasImage ? (
        <div className="flex items-center justify-center p-5">
          <Link href={'organization-profile'}>
            <Image
              src={organization.imageUrl}
              alt="Logo"
              width={100}
              height={100}
              className="rounded-md"
              priority={true}
            />
          </Link>
        </div>
      ) : null}
      <div
        className={`p-5 flex flex-col ${
          organization.hasImage ? 'w-auto' : 'w-full items-center'
        }`}
      >
        <CardHeader className={`${organization.hasImage ? '' : 'text-center'}`}>
          <CardTitle className="text-2xl font-bold text-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {' '}
                  <UpdateInput
                    value={organization.name}
                    name="company_name"
                    className="text-2xl font-bold text-center w-auto mx-auto"
                    placeholder="Company Name"
                    onChange={updateCompanyName}
                    type="text"
                    isDisabled={true}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <Link href={'organization-profile'}>Update Company Name</Link>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardTitle>
          <div className="text-sm text-gray-500 space-y-2">
            <p className="flex justify-center">
              <UpdateInput
                value={organization.address}
                name="address"
                className="w-full max-w-md text-center text-black"
                placeholder="Address(Eg: 165 Flanders Road, Westborough, USA)"
                onChange={updateCompanyAddress}
                type="text"
              />
            </p>
            <p className="flex justify-center gap-2">
              <UpdateInput
                value={organization.phone}
                name="phone"
                className="w-auto max-w-xs text-black"
                placeholder="Phone No"
                onChange={updateCompanyPhone}
                type="text"
              />
              |
              <UpdateInput
                value={organization.email}
                name="email"
                className="w-auto max-w-xs text-black"
                placeholder="Company Email"
                onChange={updateCompanyEmail}
                type="text"
              />
            </p>
          </div>
        </CardHeader>
      </div>
    </div>
  );
}
