"use client";
import { CreateOrganization } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Loader } from "@/components/utils";

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
    return <Loader />;
  }

  return <CreateOrganization afterCreateOrganizationUrl="/dashboard" />;
}
