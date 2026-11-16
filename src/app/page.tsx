import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { StatsSection } from '@/components/StatsSection';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { HowItWorks } from '@/components/HowItWorks';
import { PrivacyBanner } from '@/components/PrivacyBanner';
import { ThemeShowcase } from '@/components/ThemeShowcase';
import { MoreFeatures } from '@/components/MoreFeatures';
import { DownloadCTA } from '@/components/DownloadCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <FeaturesGrid />
        <HowItWorks />
        <PrivacyBanner />
        <ThemeShowcase />
        <MoreFeatures />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
