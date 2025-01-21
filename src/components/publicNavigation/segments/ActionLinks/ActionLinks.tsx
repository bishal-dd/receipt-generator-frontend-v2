import React from 'react';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { User, UserPlus } from 'lucide-react';
import SignedInLinks from './SignedInLinks';

export default function ActionLinks() {
  return (
    <>
      <SignedOut>
        <Button size="sm" asChild>
          <Link href="/home/sign-in">
            Sign In
            <User className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button size="sm" asChild>
          <Link href="/home/sign-up">
            Sign Up
            <UserPlus className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </SignedOut>
      <SignedIn>
        <SignedInLinks />
      </SignedIn>
    </>
  );
}
