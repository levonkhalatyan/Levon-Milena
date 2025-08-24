import { Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 soft-gradient" />
      
      {/* Floating hearts decoration */}
      <div className="absolute top-20 left-20 text-primary/20 float-gentle">
        <Heart className="w-8 h-8" fill="currentColor" />
      </div>
      <div className="absolute top-40 right-32 text-romantic/30 float-gentle" style={{ animationDelay: '1s' }}>
        <Heart className="w-6 h-6" fill="currentColor" />
      </div>
      <div className="absolute bottom-32 left-1/4 text-primary/25 float-gentle" style={{ animationDelay: '2s' }}>
        <Heart className="w-10 h-10" fill="currentColor" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="font-romantic text-8xl md:text-9xl text-primary mb-4 animate-fade-in">
            Levon <Heart className="inline w-16 h-16 heart-pulse mx-4" fill="currentColor" /> Milena
          </h1>
          <p className="font-elegant text-2xl md:text-3xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
            A Celebration of Love & Life
          </p>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="font-inter text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Welcome to our special corner of the internet, where we celebrate the beautiful moments 
            that make life extraordinary. This is our story, our love, and our journey together.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;