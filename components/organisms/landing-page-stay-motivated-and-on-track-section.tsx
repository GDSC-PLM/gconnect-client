import Image from 'next/image';

import { Container } from '../ui/container';

export default function LandingPageStayMotivatedAndOnTrackSection() {
  return (
    <section className='w-full text-neutral-600 m-6 mb-20 justify-center items-center'>
        <div className = "flex flex-col flex basis-[40%] justify-center items-center lg:flex-row">
            <div className = "sm:mb-6">
                <Container>
                    <div className='mb-6 flex basis-[40%] flex-col items-start justify-center md:p-0 lg:p-10'>
                    <p className='mb-4 w-full text-left text-lg font-bold lg:w-72'>
                        Stay motivated and on track
                    </p>
                    <p className='text-md text-left'>
                        Studying with a buddy can help you to stay motivated and on track. 
                        You'll be more likely to put in the time and effort needed to succeed 
                        if you have someone to study with.
                    </p>
                    </div>
                </Container>


                <Container>
                    <div className='mt-6 flex basis-[40%] flex-col items-start justify-center md:p-0 lg:p-10'>
                    <p className='mb-4 w-full text-left text-lg font-bold lg:w-72'>
                        Make new friends
                    </p>
                    <p className='text-md text-left'>
                        Studying with a buddy can help you to stay motivated and on track. 
                        You'll be more likely to put in the time and effort needed to succeed 
                        if you have someone to study with.
                    </p>
                    </div>
                </Container>
            </div>
            <div>
                <Image
                src='gconnect-stay-motivated-and-on-track.svg'
                alt='Stay Motivated Preview'
                width='0'
                height='0'
                sizes='100vw'
                className='h-auto w-[100%] rounded-b-lg shadow-md lg:w-[60%]'
                />
            </div>
        </div>
        <section className = 'absolute bottom-13 -z-50 hidden h-[100px] w-full bg-indigo-100 md:block' />
    </section>
    
  );
}
