import { Background } from "@/components/background";
import { Footer } from "@/components/footer";
import { PublicNavigation } from "@/components/publicNavigation";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <PublicNavigation />

      {children}
      <Footer />
    </div>
  );
}
