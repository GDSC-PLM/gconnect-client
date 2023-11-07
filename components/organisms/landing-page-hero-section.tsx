import Link from "next/link";
import { Button } from "../ui/button";
import LandingPageHeroCarousel from "../molecules/landing-page-hero-carousel";
export default function LandingPageHeroSection() {
  return (
    <section className="relative mt-8 grid w-full items-start gap-8 md:grid-cols-2 md:gap-10">
      <section className="mt-0 grid gap-4 p-10 sm:gap-8 md:mt-10">
        <h1 className="grid font-bold">
          <span className="text-xl sm:text-2xl">Welcome to </span>
          <span className="whitespace-nowrap text-3xl text-orange-400 md:text-5xl">
            G-Connect! 🔗
          </span>
        </h1>
        <p className="text-md max-w-md">
          We&apos;re here to help you find someone to study with, whether
          you&apos;re looking for someone to help you with a specific course or
          just someone to motivate you to stay on track.
        </p>
        <Button variant="purple" className="justify-self-start" asChild>
          <Link href="?">Get Started</Link>
        </Button>
      </section>
      <LandingPageHeroCarousel />

      <section className="absolute bottom-0 -z-50 hidden h-[150px] w-full bg-indigo-100 md:block" />
    </section>
  );
}
