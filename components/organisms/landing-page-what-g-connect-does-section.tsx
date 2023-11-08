import Image from 'next/image';

import { Container } from '../ui/container';

export default function LandingPageWhatGConnectDoesSection() {
  return (
    <section className='w-full text-neutral-600'>
      <div className='bg-indigo-100'>
        <Container>
          <div className='mb-10 flex flex-col items-center justify-center text-center'>
            <h2 className='pt-10 text-2xl font-semibold md:pt-20 md:text-4xl'>
              What <span className='text-orange-400'>G-Connect</span> Does?
            </h2>
            <p className='text-md text-zinc-400 lg:text-lg'>
              Find and connect with study buddies.
            </p>
          </div>
          <div className='flex flex-col-reverse items-center justify-center lg:flex-row '>
            <Image
              src='gconnect-home-preview.svg'
              alt='Home Preview'
              width='0'
              height='0'
              sizes='100vw'
              className='h-auto w-[100%] rounded-t-lg lg:w-[50%]'
            />
            <div className='mb-6 flex basis-[40%] flex-col items-start justify-center md:p-0 lg:p-10'>
              <p className='mb-4 w-full text-left text-lg font-bold lg:w-72'>
                Find a study buddy who is compatible with you
              </p>
              <p className='text-md text-left'>
                G-Connect matches you with other students based on your courses,
                interests, and availability. This means that you&apos;re more
                likely to find a study buddy who is a good fit for you.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className='mb-10'>
        <Container>
          <div className='flex flex-col items-center justify-center lg:flex-row '>
            <Image
              src='gconnect-messages-preview.svg'
              alt='Messages Preview'
              width='0'
              height='0'
              sizes='100vw'
              className='h-auto w-[100%] rounded-b-lg shadow-md lg:w-[50%]'
            />

            <div className='mt-6 flex basis-[40%] flex-col items-start justify-center md:p-0 lg:p-10'>
              <p className='mb-4 w-full text-left text-lg font-bold lg:w-72'>
                Get help with your coursework
              </p>
              <p className='text-md text-left'>
                If you&apos;re struggling with a particular course, your study
                buddy can help you to understand the material and practice
                answering questions.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
