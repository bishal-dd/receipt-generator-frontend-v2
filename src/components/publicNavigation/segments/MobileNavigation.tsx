"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navItems } from "./navItems";
import ActionLinks from "./ActionLinks";
import Link from "next/link";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-gray-900 text-white">
        <nav className="flex flex-col space-y-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-lg hover:text-blue-400"
            >
              {item.name}
            </Link>
          ))}
          <ActionLinks />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
