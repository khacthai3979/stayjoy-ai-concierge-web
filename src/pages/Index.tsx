import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import ConversionSection from "@/components/ConversionSection";
import GenAISection from "@/components/GenAISection";
import PostStaySection from "@/components/PostStaySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <ConversionSection />
      <GenAISection />
      <PostStaySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
