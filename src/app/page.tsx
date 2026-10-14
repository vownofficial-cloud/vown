import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { VenturesSection } from "@/components/sections/VenturesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: What We Do */}
        <ServicesSection />

        {/* Section 3: Our Approach */}
        <ApproachSection />

        {/* Section 4: Ventures and Future Projects */}
        <VenturesSection />

        {/* Section 5: About VOwn */}
        <AboutSection />

        {/* Section 6: Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* Brand Footer */}
      <Footer />
    </div>
  );
}
