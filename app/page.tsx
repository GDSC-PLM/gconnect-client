import LandingPageEmblaCarousel from '@/components/molecules/landing-page-carousel';
import LandingPageHeroSection from '@/components/organisms/landing-page-hero-section';
import LandingPageStayMotivatedAndOnTrackSection from '@/components/organisms/landing-page-stay-motivated-and-on-track-section';
import LandingPageWhatGConnectDoesSection from '@/components/organisms/landing-page-what-g-connect-does-section';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <LandingPageHeroSection />
      <LandingPageWhatGConnectDoesSection />
      <LandingPageStayMotivatedAndOnTrackSection />
      <LandingPageEmblaCarousel />
    </main>
  );
}
