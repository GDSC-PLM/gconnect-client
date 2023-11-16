import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';

export default function GetStartedSection() {
  return (
    <section className='grid sm:grid-cols-[4fr_5fr] h-[calc(100vh-72px)]'>
      <section className='relative h-full overflow-hidden hidden sm:block'>
        <Image
          src={'/get-started-page-images/image.jpg'}
          alt={''}
          width={1662}
          height={2235}
          className='absolute top-0 -z-10 h-full w-full object-cover'
        />
      </section>
      <section className='p-8 grid gap-12 content-center'>
        <Image
          src={'/gconnect-logo.svg'}
          alt={''}
          width={1662}
          height={2235}
          className='w-32'
        />
        <h1 className='font-bold text-2xl sm:text-4xl max-w-md'>
          Unlock a world of opportunities to meet people & learn! 📚
        </h1>
        <h2 className='font-bold text-lg sm:text-xl max-w-xs'>
          Sign Up with your university email to get started.
        </h2>
        <section className='grid'>
          <div className='grid'>
            <span className='text-sm sm:hidden font'>
              <span className='font-bold'>Sign up</span> using
            </span>
            <Button
              variant='purple'
              className='justify-self-start px-6 text-base'
              asChild
            >
              <Link href='?'>
                <Mail size={18} className='mr-2' />
                <span>
                  <span className='hidden sm:inline'>Sign up using</span>{' '}
                  University Email
                </span>
              </Link>
            </Button>
          </div>
          <span className='text-sm mt-4'>
            or{' '}
            <Link href='?' className='font-bold'>
              Login
            </Link>{' '}
            instead
          </span>
        </section>
      </section>
    </section>
  );
}
