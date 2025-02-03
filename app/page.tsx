"use client";

import NavigationBar from "@/components/nav";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features";
import ConcernsGallery from "@/components/gallery";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="">
      <NavigationBar />
      <main className="">
        <HeroSection />
        <FeaturesSection />
        <ConcernsGallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
