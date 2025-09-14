import HeaderNavigation from "@/components/sections/header-navigation";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import CtaSection from "@/components/sections/cta-section";
import ContactSection from "@/components/sections/contact-section";
import FooterSection from "@/components/sections/footer-section";
import SkillsSection from "@/components/sections/skills-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeaderNavigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <CtaSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}