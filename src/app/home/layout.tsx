import { PublicNavigation } from "@/components/publicNavigation";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <PublicNavigation />

      {children}
    </div>
  );
}
