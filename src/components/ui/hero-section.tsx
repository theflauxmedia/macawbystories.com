import { useRef } from 'react';
import { Button } from './button';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onBookTableClick?: () => void;
}

export const HeroSection = ({ onBookTableClick }: HeroSectionProps) => {
  const backgroundVideoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <section id="home" className="relative min-h-[110vh] flex items-center justify-center overflow-hidden w-full max-w-full">
      {/* Background Video */}
      <video
        ref={backgroundVideoRef}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        onLoadedMetadata={() => {
          if (backgroundVideoRef.current) {
            backgroundVideoRef.current.playbackRate = 1.15;
          }
        }}
      >
        <source src="/herosec/herovd.webm" type="video/webm" />
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      {/* Subtle Black Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-2 sm:px-4 lg:px-8 max-w-full w-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto w-full">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6 lg:mb-8 leading-tight">
            <span className="block">Macaw: Two Cities,</span>
            <span className="block bg-gradient-gold bg-clip-text text-transparent">
              One Iconic Nightlife Vibe
            </span>
          </h1>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-base sm:text-lg md:text-lg lg:text-xl text-cream mb-8 sm:mb-10 lg:mb-12 font-light leading-relaxed max-w-4xl mx-auto px-2 sm:px-4">
            Chennai & Bengaluru rooftops serving signature sips, live energy,
            <br className="hidden sm:block" />
            and elevated experiences.
          </p>
        </div>
        
        <div className="animate-fade-in-up px-2 sm:px-4" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col space-y-6 sm:space-y-7 md:space-y-0 md:space-x-6 lg:space-x-8 md:flex-row md:justify-center md:flex-wrap lg:flex-nowrap max-w-5xl mx-auto">
          <Button 
            onClick={() => window.location.href = '/locations#chennai'}
            size="lg"
            className="w-full sm:w-auto bg-gradient-gold text-charcoal font-semibold text-sm sm:text-base lg:text-base px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 hover:shadow-luxury transition-smooth transform hover:scale-105 min-w-0 rounded-xl"
          >
            Explore Chennai
          </Button>
          
          <Button 
            onClick={() => window.location.href = '/locations#bengaluru'}
            size="lg"
            className="w-full sm:w-auto bg-gradient-gold text-charcoal font-semibold text-sm sm:text-base lg:text-base px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 hover:shadow-luxury transition-smooth transform hover:scale-105 min-w-0 rounded-xl"
          >
            Explore Bengaluru
          </Button>
          
          <Button 
            onClick={onBookTableClick}
            variant="outline"
            size="lg" 
            className="w-full sm:w-auto border-2 border-primary text-primary bg-primary/10 hover:bg-primary hover:text-charcoal font-semibold text-sm sm:text-base lg:text-base px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 transition-smooth min-w-0 rounded-xl"
          >
            Reserve Now
          </Button>
          </div>
        </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary" />
      </div>
    </section>
  );
};