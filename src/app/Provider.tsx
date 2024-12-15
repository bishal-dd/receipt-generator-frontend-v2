"use client";

import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <>
      <ClerkProvider>
        <ClerkLoading>
          <div>Clerk is loading...</div>
        </ClerkLoading>
        <ClerkLoaded>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ClerkLoaded>
      </ClerkProvider>
    </>
  );
}
