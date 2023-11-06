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

export default function Navbar() {
  return (
    <nav className="w-full flex gap-2 justify-between items-center px-10 py-4 shadow-lg">
      <Link href="/">
        <div className="flex gap-2 items-center">
          <Image
            src="gconnect-logo.svg"
            alt="GConnect Logo"
            width={50}
            height={50}
          />
          <h1>GConnect</h1>
        </div>
      </Link>

      <div className="hidden md:flex md:gap-2 md:items-center">
        <Link href="/home">Home</Link>
        <Button variant="outline">Log In</Button>
        <Button>Sign Up</Button>
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}