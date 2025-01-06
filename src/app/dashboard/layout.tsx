import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { SideBar } from '@/components/sideBar/SideBar';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <SideBar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
