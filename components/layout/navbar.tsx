import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function LandingPageNavbar() {
  return (
    <nav className="w-full flex gap-2 justify-between items-center px-10 md:px-36 py-4 shadow-lg">
      <Link href="/">
        <div className="flex gap-2 items-center">
          <Image
            src="gconnect-logo.svg"
            alt="GConnect Logo"
            width={50}
            height={50}
          />
          <h1 className="text-orange-400 font-bold text-lg leading-10">G-Connect!</h1>
        </div>
      </Link>

      <div className="hidden md:flex md:gap-3 md:items-center">
        <Link href="/home" className="px-5">Home</Link>
        <Button className="bg-indigo-500 hover:bg-indigo-300 px-8 py-4 rounded-md shadow text-white">Sign Up</Button>
        <Button variant="outline" className="px-5 py-4 rounded-md shadow">Log in</Button>
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="px-4 py-4 flex gap-2">
              <Link href="/home" className="text-center text-sm">Home</Link>
              <Button className="bg-indigo-500 hover:bg-indigo-300 px-4 py-4 rounded-md shadow text-white">Sign Up</Button>
              <Button variant="outline" className="px-5 py-4 rounded-md shadow">Log in</Button>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
