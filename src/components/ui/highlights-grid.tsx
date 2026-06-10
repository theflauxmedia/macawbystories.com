import { Music, Utensils, Calendar, Building } from 'lucide-react';

export const HighlightsGrid = () => {
  const highlights = [
    {
      icon: Music,
      title: 'Live DJs',
      description: 'Experience electrifying beats with our resident and guest DJs',
    },
    {
      icon: Utensils,
      title: 'Bespoke Cocktails & Beer',
      description: 'Handcrafted signature drinks and premium beer selection',
    },
    {
      icon: Calendar,
      title: 'Themed Nights',
      description: 'Weekly themed events and special celebrations',
    },
    {
      icon: Building,
      title: 'Skyline Dining',
      description: 'Panoramic rooftop views while you dine and unwind',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-primary mb-4 sm:mb-6 lg:mb-8">
            Why Choose Macaw
          </h2>
          <p className="text-sm sm:text-base lg:text-base text-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Discover what makes our rooftop experience truly exceptional
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div
                key={highlight.title}
                className="group text-center p-4 sm:p-6 lg:p-8 xl:p-10 rounded-xl lg:rounded-2xl xl:rounded-3xl hover:bg-background/60 transition-premium"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 xl:mb-8 group-hover:scale-105 transition-premium">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-charcoal" />
                </div>
                <h3 className="font-cinzel text-sm sm:text-base lg:text-base xl:text-lg font-bold text-primary mb-2 sm:mb-3 lg:mb-4 xl:mb-6 leading-tight">
                  {highlight.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-sm xl:text-sm text-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};