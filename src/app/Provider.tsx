"use client";

import { Loader } from "@/components/utils";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
  });
}

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <>
      <ClerkProvider>
        <ClerkLoading>
          <Loader />
        </ClerkLoading>
        <ClerkLoaded>
          <PostHogProvider client={posthog}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </PostHogProvider>
        </ClerkLoaded>
      </ClerkProvider>
    </>
  );
}
