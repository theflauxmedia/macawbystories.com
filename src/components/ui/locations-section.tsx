import { useEffect, useRef } from 'react';
import { Button } from './button';
import { MapPin, Clock, Phone } from 'lucide-react';
import bangaloreImage from '@/assets/bangalore-location.jpg';
import chennaiImage from '@/assets/chennai-location.jpg';

interface LocationsSectionProps {
  onBookTableClick?: (location: string) => void;
}

export const LocationsSection = ({ onBookTableClick }: LocationsSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.location-card');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const locations = [
    {
      id: 'bengaluru',
      name: 'Macaw by Stories – Bengaluru',
      city: 'Bengaluru',
      image: '/lovable-uploads/1da2dad0-5f5a-4a7c-a762-c371ea2063a8.png',
      address: '2224–2225, AECS Layout, Near Singasandra, Hosur Main Road, Bommanahalli, Bengaluru',
      description: 'Rooftop paradise in the tech capital with cocktails, live music, party vibes, and an energetic dance floor.',
      highlights: ['Rooftop Views', 'Live Music', 'Dance Floor', 'Party Vibe'],
      phone: '+91‑8068507673',
      hours: '12:00 PM – 1:00 AM',
    },
    {
      id: 'chennai',
      name: 'Macaw by Stories – Chennai',
      city: 'Chennai',
      image: '/lovable-uploads/5731ead5-b641-42d5-b802-0f7ce04739e5.png',
      address: '132, Max Kailash Building, Rajiv Gandhi Salai, Sholinganallur, Chennai – 600119',
      description: 'Coastal rooftop experience with DJ nights, signature cocktails, bar bites, and lively group vibes.',
      highlights: ['DJ Nights', 'Coastal Views', 'Bar Bites', 'Group Vibes'],
      phone: '+91‑8045883769',
      hours: '12:00 PM – 11:30 PM',
      instagram: '@macawchennai',
    },
  ];

  return (
    <section id="locations" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 lg:mb-8">
            Visit Us
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Experience tropical luxury at our signature locations across South India. 
            Each venue offers its own unique charm while maintaining our commitment to excellence.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {locations.map((location, index) => (
            <div
              key={location.id}
              className={`location-card opacity-0 group cursor-pointer transition-smooth hover:transform hover:scale-105 w-full ${
                index === 1 ? 'lg:translate-y-8' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant hover:shadow-luxury transition-smooth h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden flex-shrink-0">
                  <img
                    src={location.image}
                    alt={`${location.name} rooftop restaurant`}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-60" />
                  
                  {/* City Badge */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                    <div className="bg-primary text-charcoal px-3 sm:px-4 py-1 sm:py-2 rounded-full font-semibold text-sm">
                      {location.city}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col">
                  <h3 className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-3 sm:mb-4">
                    {location.name}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6 leading-relaxed flex-1">
                    {location.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {location.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="bg-secondary text-secondary-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-foreground leading-relaxed">{location.address}</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-foreground">{location.hours}</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-foreground">{location.phone}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                    <Button
                      onClick={() => onBookTableClick?.(location.id)}
                      className="bg-gradient-gold text-charcoal font-semibold hover:shadow-luxury transition-smooth flex-1 text-sm sm:text-base py-3 sm:py-4 rounded-xl"
                    >
                      Reserve Table
                    </Button>
                    <Button
                      variant="outline"
                      className="border-2 border-primary text-primary bg-primary/10 hover:bg-primary hover:text-charcoal transition-smooth flex-1 sm:flex-initial text-sm sm:text-base py-3 sm:py-4 rounded-xl"
                      onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(location.address)}`, '_blank')}
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <p className="text-base sm:text-lg lg:text-xl text-foreground mb-4 sm:mb-6 lg:mb-8 leading-relaxed px-2">
            Can't decide which location to visit? Why not experience both!
          </p>
          <Button
            onClick={() => onBookTableClick?.('any')}
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary bg-primary/10 hover:bg-primary hover:text-charcoal font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 transition-smooth text-base sm:text-lg lg:text-xl rounded-xl"
          >
            Book at Any Location
          </Button>
        </div>
      </div>
    </section>
  );
};