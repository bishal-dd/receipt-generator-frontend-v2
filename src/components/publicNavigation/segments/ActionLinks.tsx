import React from 'react';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// import { ArrowRight, User, UserPlus } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function ActionLinks() {
  return (
    <>
      <SignedOut>
        {/* <Button size="sm" asChild>
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
        </Button> */}
        <Button size="sm" asChild>
          <Link href="/home/early-access">
            Early Access
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </SignedOut>
      <SignedIn>
        <Button size="sm" asChild>
          <Link href="/dashboard/generate-receipt">
            Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <UserButton />
      </SignedIn>
    </>
  );
}
