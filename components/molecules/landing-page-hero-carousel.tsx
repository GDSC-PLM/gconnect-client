'use client';

import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { Button } from '../ui/button';

const autoplayOptions = {
  delay: 4000,
  rootNode: (emblaRoot: any) => emblaRoot.parentElement,
};

const images = [
  { src: '/landing-page-hero-carousel-images/image-1.png' },
  { src: '/landing-page-hero-carousel-images/image-2.png' },
  { src: '/landing-page-hero-carousel-images/image-3.png' },
];

export default function LadingPageHeroCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <section className='grid justify-center gap-4'>
      <div
        className='max-w-full overflow-hidden md:max-w-[450px]'
        ref={emblaRef}
      >
        <div className='flex'>
          {images.map((img, index) => (
            <Image
              key={index}
              src={img.src}
              alt={''}
              width={536}
              height={552}
            />
          ))}
        </div>
      </div>

      <div className='flex justify-center gap-1'>
        {images.map((img, index) => (
          <Button
            key={index}
            size='icon'
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              `h-6 w-6 rounded-full bg-white shadow outline outline-1 outline-zinc-200 hover:bg-indigo-400/25`,
              selectedIndex == index &&
                'bg-indigo-400 shadow-indigo-600 hover:bg-indigo-400',
            )}
          />
        ))}
      </div>
    </section>
  );
}
