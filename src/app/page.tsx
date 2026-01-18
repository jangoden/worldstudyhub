import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Features } from "@/components/sections/Features";
import { TrendingCourses } from "@/components/sections/TrendingCourses";
import { LatestUpdates } from "@/components/sections/LatestUpdates";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-display">
      <Navbar />
      <main className="flex-grow w-full">
        <Hero />
        <TrustedBy />
        <Features />
        <TrendingCourses />
        <LatestUpdates />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
