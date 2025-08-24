import { Users, MapPin, Calendar, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutUsSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-romantic-soft/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-romantic mr-3" />
            <h2 className="font-romantic text-6xl text-romantic">About Us</h2>
            <Users className="w-8 h-8 text-romantic ml-3" />
          </div>
          <p className="font-elegant text-xl text-muted-foreground">
            Two hearts, one beautiful journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Levon's Card */}
          <Card className="p-8 romantic-shadow hover:scale-105 romantic-transition border-primary/20">
            <div className="text-center">
              <div className="w-24 h-24 romantic-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-romantic text-4xl text-white font-bold">L</span>
              </div>
              <h3 className="font-elegant text-3xl text-foreground mb-4">Levon</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A dreamer with a heart full of love, always ready to make every moment special. 
                Believes in the magic of small gestures and the power of endless affection.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Heart className="w-4 h-4 text-primary" fill="currentColor" />
                  <span>Romantic at heart</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Armenia</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Milena's Card */}
          <Card className="p-8 romantic-shadow hover:scale-105 romantic-transition border-romantic/20">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-romantic to-romantic-deep rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-romantic text-4xl text-white font-bold">M</span>
              </div>
              <h3 className="font-elegant text-3xl text-foreground mb-4">Milena</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A beautiful soul with an infectious smile and the kindest heart. Brings joy and 
                light to every room she enters, making the world a more beautiful place.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Heart className="w-4 h-4 text-romantic" fill="currentColor" />
                  <span>Beautiful inside & out</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-romantic" />
                  <span>Armenia</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Together Card */}
        <Card className="p-8 romantic-shadow border-primary/20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 romantic-gradient rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white heart-pulse" fill="currentColor" />
              </div>
            </div>
            <h3 className="font-elegant text-3xl text-foreground mb-6">Together</h3>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              When two hearts become one, magic happens. Our story is one of laughter, dreams, 
              adventures, and endless love. Every day is a new chapter in our beautiful journey, 
              filled with moments that make us grateful for finding each other.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Creating memories since forever</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-romantic" fill="currentColor" />
                <span>Love grows stronger every day</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutUsSection;