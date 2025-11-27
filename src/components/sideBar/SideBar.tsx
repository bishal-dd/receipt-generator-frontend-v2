'use client';
import { Building, Receipt, List, ShoppingCart } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import CustomUserButton from './CustomUserButton';

// Menu items.
const items = [
  {
    title: 'Receipt',
    url: '/dashboard/generate-receipt',
    icon: Receipt,
  },
  {
    title: 'Sales List',
    url: '/dashboard/view-receipts',
    icon: List,
  },
  {
    title: 'Products / Services',
    url: '/dashboard/products',
    icon: ShoppingCart,
  },
  {
    title: 'Organization Profile',
    url: '/dashboard/organization-profile',
    icon: Building,
  },
];

export function SideBar() {
  const { openMobile, setOpenMobile } = useSidebar();

  const handleClickMobile = () => {
    if (openMobile) {
      setOpenMobile(false);
    }
  };
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>BillsToTrack</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild onClick={handleClickMobile}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-2">
        <CustomUserButton />
      </SidebarFooter>
    </Sidebar>
  );
}
