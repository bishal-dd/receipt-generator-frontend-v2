import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClerkProvider>
        <ClerkLoading>
          <div>Clerk is loading...</div>
        </ClerkLoading>
        <ClerkLoaded>{children}</ClerkLoaded>
      </ClerkProvider>
    </>
  );
}
