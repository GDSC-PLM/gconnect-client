import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';
import { Container } from '../ui/container';

export default function LandingPageNavbar() {
  return (
    <nav className='gap-2 py-4 shadow-lg'>
      <Container className='flex w-full items-center justify-between'>
        <Link href='/'>
          <div className='flex items-center gap-2'>
            <Image
              src='gconnect-logo.svg'
              alt='GConnect Logo'
              width={50}
              height={50}
            />
            <h1 className='text-lg font-bold leading-10 text-orange-400'>
              G-Connect!
            </h1>
          </div>
        </Link>
        <div className='hidden md:flex md:items-center md:gap-3'>
          <Button variant='purple'>Sign Up</Button>
          <Button variant='outline' className='rounded-md shadow'>
            Log in
          </Button>
        </div>
        <div className='md:hidden'>
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent className='flex flex-col items-center justify-between gap-10'>
              <div className='flex flex-col items-center text-center'>
                <Image
                  src='gconnect-logo.svg'
                  alt='GConnect Logo'
                  className='my-8'
                  width={100}
                  height={100}
                />
                <SheetTitle>G-Connect Menu</SheetTitle>
                <SheetDescription className='w-40'>
                  Find and connect with study buddies.
                </SheetDescription>
              </div>
              <div className='flex w-full items-center gap-2'>
                <Button className='w-full' variant='purple'>
                  Sign Up
                </Button>
                <Button className='w-full' variant='outline'>
                  Log in
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </nav>
  );
}
