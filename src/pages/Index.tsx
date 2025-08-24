import FloatingTab from '@/components/FloatingTab';
import HeroSection from '@/components/HeroSection';
import CongratulationsSection from '@/components/CongratulationsSection';
import AboutUsSection from '@/components/AboutUsSection';
import LoveStorySection from '@/components/LoveStorySection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingTab />
      <HeroSection />
      <CongratulationsSection />
      <AboutUsSection />
      <LoveStorySection />
      
      {/* Footer */}
      <footer className="py-12 text-center border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-romantic text-2xl text-primary mb-2">
            Levon ♥ Milena
          </p>
          <p className="text-muted-foreground text-sm">
            Made with love and endless devotion
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
