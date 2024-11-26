"use client";
import { CreateOrganization } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function CreateOrganizationPage() {
  const { user } = useClerk();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const hasOrganization = user.organizationMemberships.length > 0;
      if (hasOrganization) {
        router.push("/dashboard");
      } else {
        setLoading(false); // Allow rendering only if no redirect is needed
      }
    }
  }, [user, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <CreateOrganization path="/create-organization" />;
}
