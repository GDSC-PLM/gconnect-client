import LandingPageEmblaCarousel from "@/components/organisms/landing-page-carousel";
import LandingPageHeroSection from "@/components/organisms/landing-page-hero-section";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <LandingPageHeroSection />
      <LandingPageEmblaCarousel />
    </main>
  );
}
