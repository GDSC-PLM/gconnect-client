import Link from 'next/link';

import LandingPageHeroCarousel from '../molecules/landing-page-hero-carousel';
import { Button } from '../ui/button';
import { Container } from '../ui/container';

export default function LandingPageHeroSection() {
  return (
    <section className='relative mb-10 grid w-full justify-center text-neutral-600 md:mb-0'>
      <Container>
        <section className='mt-8 grid w-full max-w-screen-xl items-start gap-8 md:grid-cols-2 md:gap-10'>
          <section className='mt-0 grid gap-10 sm:gap-8 md:mt-10'>
            <div className='flex flex-col gap-4'>
              <h1 className='grid text-center text-4xl font-bold md:text-left'>
                Welcome to
                <span className='whitespace-nowrap text-orange-400'>
                  G-Connect!
                </span>
              </h1>
              <p className='text-md w-full text-center md:text-left'>
                We&apos;re here to help you find someone to study with, whether
                you&apos;re looking for someone to help you with a specific
                course or just someone to motivate you to stay on track.
              </p>
            </div>
            <Button
              variant='purple'
              className='justify-center md:justify-self-start'
              asChild
            >
              <Link href='/get-started'>Get Started</Link>
            </Button>
          </section>
          <LandingPageHeroCarousel />
        </section>
      </Container>
      <section className='absolute bottom-0 -z-50 hidden h-[100px] w-full bg-indigo-100 md:block' />
    </section>
  );
}
