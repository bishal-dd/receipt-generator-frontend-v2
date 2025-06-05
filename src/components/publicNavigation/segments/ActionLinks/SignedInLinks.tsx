import React from 'react';
import { UserButton, useOrganizationList } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Plus } from 'lucide-react';

export default function SignedInLinks() {
  const { userMemberships, isLoaded } = useOrganizationList({
    userMemberships: {
      memberships: {
        pageSize: 5,
        keepPreviousData: true,
      },
    },
  });
  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <div className="flex items-center gap-2">
        {userMemberships.count === 0 ? (
          <Button size="sm" asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/home/create-organization">
              Create Organization
              <Plus className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <>
            <Button
              size="sm"
              asChild
              className="bg-green-600 hover:bg-green-700"
            >
              <Link href="/dashboard/generate-receipt">
                Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <UserButton />
          </>
        )}
      </div>
    </>
  );
}
