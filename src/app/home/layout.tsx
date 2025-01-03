import { Footer } from "@/components/footer";
import { PublicNavigation } from "@/components/publicNavigation";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PublicNavigation />

      {children}
      <Footer />
    </div>
  );
}
