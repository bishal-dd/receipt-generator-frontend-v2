import { FileText } from "lucide-react";
import { ActionLinks, MobileNavigation, NavLinks } from "./segments";
import Link from "next/link";

export default function PublicNavigation() {
  return (
    <>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #ffffff, #ffffff 1px, transparent 1px, transparent 20px)",
          backgroundSize: "28px 28px",
        }}
      ></div>
      <nav className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>
        <div className="container relative mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-400" />
              <div className="text-2xl font-bold">
                <Link href="/">Digital Paperwork</Link>
              </div>
            </div>
            <div className="hidden md:block">
              <NavLinks />
            </div>
            <div className="hidden md:block">
              <ActionLinks />
            </div>
            <div className="md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      </nav>
    </>
  );
}
