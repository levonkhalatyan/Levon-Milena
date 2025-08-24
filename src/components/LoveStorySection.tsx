import { BookOpen, Star, Heart, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';

const LoveStorySection = () => {
  const storyMilestones = [
    {
      icon: Star,
      title: "The Beginning",
      description: "Two souls destined to meet, finding each other in this vast world. Sometimes the most beautiful stories start with the simplest moments.",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "First Sparks",
      description: "The moment when friendship bloomed into something deeper. When every conversation lasted hours and every goodbye felt too soon.",
      color: "text-romantic"
    },
    {
      icon: Sparkles,
      title: "Growing Together",
      description: "Learning, laughing, and building dreams side by side. Discovering that love isn't just a feeling, but a choice we make every day.",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      title: "Our Story Continues",
      description: "Every day writes a new page in our love story. With each sunrise, we choose each other again, creating a tale of endless devotion.",
      color: "text-romantic"
    }
  ];

  return (
    <section id="love-story" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="w-8 h-8 text-primary mr-3" />
            <h2 className="font-romantic text-6xl text-primary">Our Love Story</h2>
            <BookOpen className="w-8 h-8 text-primary ml-3" />
          </div>
          <p className="font-elegant text-xl text-muted-foreground">
            A tale written in the stars, lived in the heart
          </p>
        </div>

        <div className="relative">
          {/* Story timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-romantic to-primary-soft rounded-full hidden md:block" />

          <div className="space-y-12">
            {storyMilestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'} mb-6 md:mb-0`}>
                    <Card className="p-8 romantic-shadow hover:scale-105 romantic-transition border-primary/20 h-full">
                      <div className={`flex items-start space-x-4 ${isEven ? '' : 'md:flex-row-reverse md:space-x-reverse md:text-right'}`}>
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                          milestone.color === 'text-primary' ? 'romantic-gradient' : 'bg-gradient-to-br from-romantic to-romantic-deep'
                        }`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-elegant text-2xl text-foreground mb-4">{milestone.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block relative z-10">
                    <div className={`w-6 h-6 rounded-full border-4 border-white ${
                      milestone.color === 'text-primary' ? 'bg-primary' : 'bg-romantic'
                    } romantic-shadow`} />
                  </div>
                  
                  <div className="w-full md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Love quote */}
        <div className="mt-20 text-center">
          <Card className="p-12 romantic-shadow border-primary/20 max-w-4xl mx-auto soft-gradient">
            <div className="relative">
              <Heart className="w-12 h-12 text-primary/30 mx-auto mb-6 heart-pulse" fill="currentColor" />
              <blockquote className="font-elegant text-2xl md:text-3xl text-foreground leading-relaxed mb-6">
                "In your eyes, I found my home. In your heart, I found my love. 
                In your soul, I found my mate. Forever and always, it's you and me."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <span className="font-romantic text-xl text-primary">Levon</span>
                <Heart className="w-5 h-5 text-romantic heart-pulse" fill="currentColor" />
                <span className="font-romantic text-xl text-romantic">Milena</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoveStorySection;