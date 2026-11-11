import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Showcase } from "@/components/Showcase";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { DownloadCta } from "@/components/DownloadCta";
import { Stats } from "@/components/Stats";
import { Team } from "@/components/Team";
import { TrustLegal } from "@/components/TrustLegal";
import { MobileCta } from "@/components/MobileCta";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Footer } from "@/components/Footer";
import { Community } from "@/components/Community"
import { Statement } from "@/components/Statement";
import { Spotlight } from "@/components/Spotlight";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <Statement />
        <Features />
        <Spotlight />
        <HowItWorks />
        <Showcase />
        <Testimonials />
        <Pricing />
        <TrustLegal />
        <Team />
        <Faq />
        <Community />
        <DownloadCta />
      </main>
      <Footer />
    <MobileCta />
    </>
  );
}
