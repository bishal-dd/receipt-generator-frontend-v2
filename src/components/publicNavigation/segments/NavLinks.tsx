import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navItems } from "./navItems";
import Link from "next/link";

export default function NavLinks() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.name}>
              <Link
                className="relative px-3 py-2 text-lg font-large font-bold  hover:text-blue-400 transition-colors duration-300"
                href={item.link}
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-blue-400 transition-transform duration-300 ease-out hover:scale-x-100"></span>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
