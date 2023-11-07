"use client";
import { Button } from "../ui/button";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const autoplayOptions = {
  delay: 4000,
  rootNode: (emblaRoot: any) => emblaRoot.parentElement,
};

export default function LadingPageHeroCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  const images = [
    { src: "/landing-page-hero-carousel-images/image-1.png" },
    { src: "/landing-page-hero-carousel-images/image-2.png" },
    { src: "/landing-page-hero-carousel-images/image-3.png" },
  ];
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <section className="grid justify-center gap-4">
      <div className="w-full max-w-[450px] overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img.src}
              alt={""}
              width={536}
              height={552}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-1 bg-indigo-100">
        {images.map((img, index) => (
          <Button
            key={index}
            size="icon"
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              `h-6 w-6 rounded-full bg-white shadow hover:bg-indigo-400/25`,
              selectedIndex == index && "bg-indigo-400 hover:bg-indigo-400",
            )}
          ></Button>
        ))}
      </div>
    </section>
  );
}
