import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import CapabilitiesSection from "@/components/landing/CapabilitiesSection";
import ValueSection from "@/components/landing/ValueSection";
import AudienceSection from "@/components/landing/AudienceSection";
import EcosystemSection from "@/components/landing/EcosystemSection";
import TrustSection from "@/components/landing/TrustSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <CapabilitiesSection />
      <ValueSection />
      <AudienceSection />
      <EcosystemSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
