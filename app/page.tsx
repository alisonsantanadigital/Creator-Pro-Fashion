import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AudienceSection from '@/components/AudienceSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import CreatorShowcaseClient from '@/components/CreatorShowcaseClient';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#070708]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AudienceSection />
        <AboutSection />
        <PortfolioSection />
        <CreatorShowcaseClient />
      </main>
      <Footer />
    </div>
  );
}
