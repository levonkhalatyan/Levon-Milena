import { Gift, Sparkles, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const CongratulationsSection = () => {
  return (
    <section id="congratulations" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-primary mr-3" />
            <h2 className="font-romantic text-6xl text-primary">Congratulations</h2>
            <Sparkles className="w-8 h-8 text-primary ml-3" />
          </div>
          <p className="font-elegant text-xl text-muted-foreground">
            Celebrating life's most precious moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 romantic-shadow border-primary/20">
              <div className="flex items-start space-x-4">
                <Gift className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-elegant text-2xl text-foreground mb-3">Special Birthday Wishes</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Today we celebrate someone truly extraordinary - a person who brings light, joy, 
                    and endless love into this world. Every moment with you is a gift, and every day 
                    is brighter because you're in it.
                  </p>
                  <div className="bg-romantic-soft p-4 rounded-xl">
                    <p className="font-elegant text-foreground text-center leading-relaxed">
                      Շնորհավորում եմ աշխարի ամենագեղեցիկ ու ամենալավ ընկերուհու ծննդյան տարեդարձ
                    </p>
                    <p className="font-romantic text-3xl text-primary text-center mt-3 font-bold">
                      I love You
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 romantic-shadow border-primary/20">
              <div className="flex items-start space-x-4">
                <Heart className="w-8 h-8 text-romantic flex-shrink-0 mt-1 heart-pulse" fill="currentColor" />
                <div>
                  <h3 className="font-elegant text-2xl text-foreground mb-3">From the Heart</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your smile lights up every room, your laughter fills our hearts with joy, 
                    and your love makes everything beautiful. Here's to celebrating you today 
                    and always - the most amazing person I know.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 romantic-gradient rounded-3xl opacity-20 blur-xl" />
              <Card className="relative romantic-shadow border-primary/30 overflow-hidden">
                <img 
                  src="/lovable-uploads/328c8d41-e18e-4f13-ba41-03fcd9e53d1a.png" 
                  alt="Milena Birthday Celebration" 
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CongratulationsSection;