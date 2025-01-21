import { OrganizationProfile } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-[100vw] md:w-[80vw] lg:w-[80vw] xl:w-[80vw]">
      <OrganizationProfile />
    </div>
  );
}
