import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function ActionLinks() {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Link href={"/dashboard"}>Dashboard</Link>
        <UserButton />
      </SignedIn>
    </>
  );
}
