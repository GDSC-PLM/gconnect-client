import Image from 'next/image';

import { Container } from '../ui/container';

export default function LandingPageStayMotivatedAndOnTrackSection() {
  return (
    <section className='relative w-full text-neutral-600 m-6 mb-20'>
      <div>
        <div>
          <Image
            src='gconnect-stay-motivated-and-on-track.svg'
            alt='Stay Motivated Preview'
            width='0'
            height='0'
            sizes='100vw'
            className='h-80 w-[100%] object-cover block md:hidden'
          />

          <Container className='py-12 flex'>
            <div className='basis-full md:basis-[40%]'>
              <p className='mb-4 w-full text-left text-lg font-bold lg:w-72'>
                Stay motivated and on track
              </p>
              <p className='text-left'>
                Studying with a buddy can help you to stay motivated and on
                track. You&apos;ll be more likely to put in the time and effort
                needed to succeed if you have someone to study with.
              </p>
            </div>
          </Container>

          <div className='bg-indigo-100'>
            <Container className='py-12 pb-28 flex'>
              <div className='basis-full md:basis-[40%]'>
                <p className='mb-4 w-full text-left text-lg font-bold lg:w-72'>
                  Make new friends
                </p>
                <p className='text-left'>
                  Studying with a buddy can help you to stay motivated and on
                  track. You&apos;ll be more likely to put in the time and
                  effort needed to succeed if you have someone to study with.
                </p>
              </div>
            </Container>
          </div>
        </div>
      </div>

      <Container className='absolute top-0 bottom-0 left-0 right-0 hidden md:block'>
        <div className='flex justify-end items-center h-full'>
          <Image
            src='gconnect-stay-motivated-and-on-track.svg'
            alt='Stay Motivated Preview'
            width='0'
            height='0'
            sizes='100vw'
            className='h-auto w-[50%]'
          />
        </div>
      </Container>
    </section>
  );
}
