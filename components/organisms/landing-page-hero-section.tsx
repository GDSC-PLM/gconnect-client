import Link from "next/link";
import { Button } from "../ui/button";
import LandingPageHeroCarousel from "../molecules/landing-page-hero-carousel";
export default function LandingPageHeroSection() {
  return (
    <section className="mt-16 grid max-w-screen-xl items-center gap-8 p-4 sm:p-8 md:grid-cols-2 md:gap-20">
      <section className="grid gap-4 sm:gap-8">
        <h1 className="grid font-bold">
          <span className="text-xl sm:text-2xl">Welcome to </span>
          <span className="whitespace-nowrap text-3xl text-orange-400 md:text-5xl">
            G-Connect! 🔗
          </span>
        </h1>
        <p className="max-w-md sm:text-lg">
          We're here to help you find someone to study with, whether you're
          looking for someone to help you with a specific course or just someone
          to motivate you to stay on track.
        </p>
        <Button variant="purple" className="justify-self-start" asChild>
          <Link href="?">Get Started</Link>
        </Button>
      </section>
      <LandingPageHeroCarousel />
    </section>
  );
}
