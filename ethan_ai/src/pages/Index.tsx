import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import QuickHighlights from '@/components/QuickHighlights';
import DemoVideo from '@/components/DemoVideo';
import FeatureDeepDive from '@/components/FeatureDeepDive';
import StorySection from '@/components/StorySection';
import FAQPreview from '@/components/FAQPreview';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <QuickHighlights />
      <DemoVideo />
      <FeatureDeepDive />
      <StorySection />
      <FAQPreview />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;