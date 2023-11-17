import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';
import { Container } from '../ui/container';

export default function GetStartedSection() {
  return (
    <section className='flex flex-col md:flex-row h-screen items-center'>
      <Image
        src='/get-started-page-images/image.jpg'
        alt='Get Started Banner'
        width='0'
        height='0'
        sizes='100vw'
        className='h-40 w-full md:h-screen md:w-[45%] rounded-t-lg lg:w-[45%] object-cover brightness-[40%]'
      />

      <Container className='py-20'>
        <Image
          src={'/gconnect-logo.svg'}
          alt='G-Connect Logo'
          width='0'
          height='0'
          sizes='100vw'
          className='h-auto w-[20%] mb-10 lg:w-[20%] object-cover'
        />

        <h1 className='font-semibold text-2xl sm:text-4xl max-w-md mb-4'>
          Unlock a world of opportunities to meet people & learn!
        </h1>

        <h2 className='text-lg sm:text-xl max-w-xs text-zinc-400 mb-4'>
          Sign Up with your university email to get started.
        </h2>

        <Button
          variant='purple'
          className='mb-4 w-fit break-all flex flex-wrap justify-center h-fit'
        >
          <Mail size={18} className='mr-2 hidden md:block' />
          Sign Up using University Email
        </Button>

        <p className='text-zinc-400'>
          or{' '}
          <Link className='font-semibold text-zinc-900' href='#'>
            Login
          </Link>{' '}
          instead
        </p>
      </Container>
    </section>
  );
}
