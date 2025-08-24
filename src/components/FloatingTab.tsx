import { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import celebrationImage from '/lovable-uploads/328c8d41-e18e-4f13-ba41-03fcd9e53d1a.png';

const FloatingTab = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  return (
    <>
      {/* Floating Tab */}
      <div className="fixed top-6 left-6 z-50">
        <div className={`romantic-gradient rounded-2xl romantic-shadow romantic-transition ${
          isExpanded ? 'w-80 h-auto' : 'w-64 h-16'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-2">
              <span className="font-romantic text-2xl text-white font-bold">Levon</span>
              <Heart className="w-5 h-5 text-white heart-pulse" fill="currentColor" />
              <span className="font-romantic text-2xl text-white font-bold">Milena</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white hover:bg-white/20 rounded-full w-8 h-8 p-0"
            >
              {isExpanded ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>

          {/* Expandable Content */}
          {isExpanded && (
            <div className="px-4 pb-4 space-y-3">
              <div className="relative">
                <Button
                  variant="ghost"
                  className="w-full text-left justify-start text-white/90 hover:bg-white/20 rounded-xl font-medium"
                  onMouseEnter={() => setShowCongratulations(true)}
                  onMouseLeave={() => setShowCongratulations(false)}
                  onClick={() => scrollToSection('congratulations')}
                >
                  🎉 Congratulations
                </Button>
                
                {/* Hover Reveal for Congratulations */}
                <div className={`absolute left-full top-0 ml-4 hover-reveal ${
                  showCongratulations ? 'active' : ''
                }`}>
                  <div className="bg-white rounded-2xl elegant-shadow p-6 w-80">
                    <div className="flex flex-col items-center space-y-4">
                      <img 
                        src={celebrationImage} 
                        alt="Milena Celebration" 
                        className="w-32 h-32 object-cover rounded-full romantic-shadow"
                      />
                      <div className="text-center">
                        <p className="font-elegant text-foreground leading-relaxed">
                          Շնորհավորում եմ աշխարի ամենագեղեցիկ ու ամենալավ ընկերուհու ծննդյան տարեդարձ
                        </p>
                        <p className="font-romantic text-2xl text-primary mt-3 font-bold">
                          I love You
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                variant="ghost"
                className="w-full text-left justify-start text-white/90 hover:bg-white/20 rounded-xl font-medium"
                onClick={() => scrollToSection('about')}
              >
                💕 About Us
              </Button>

              <Button
                variant="ghost"
                className="w-full text-left justify-start text-white/90 hover:bg-white/20 rounded-xl font-medium"
                onClick={() => scrollToSection('love-story')}
              >
                📖 Our Love Story
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Background overlay when expanded */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
};

export default FloatingTab;