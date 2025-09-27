import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ValuesSection from "@/components/ValuesSection";
import VideoSection from "@/components/VideoSection";
import MusicSection from "@/components/MusicSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import DonateSection from "@/components/DonateSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#171718] text-[#F0F0F0]">
      <Header />
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <DonateSection />
      <VideoSection />
      <MusicSection />
      <GetInvolvedSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}