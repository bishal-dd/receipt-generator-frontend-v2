import { OrganizationProfile } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen lg:w-[80vw]">
      <OrganizationProfile />
    </div>
  );
}
