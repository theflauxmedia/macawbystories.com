import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onBookTableClick?: () => void;
}

export const HeroSection = ({ onBookTableClick }: HeroSectionProps) => {
  const backgroundVideoRef = useRef<HTMLVideoElement | null>(null);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isNarrow = window.matchMedia('(max-width: 768px)').matches;
    const saveData = 'connection' in navigator && (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;

    if (!prefersReducedMotion && !isNarrow && !saveData) {
      setLoadVideo(true);
    }
  }, []);

  useEffect(() => {
    if (!loadVideo || !backgroundVideoRef.current) return;
    backgroundVideoRef.current.playbackRate = 1.05;
  }, [loadVideo]);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden w-full max-w-full">
      {/* Poster / fallback — always shown instantly */}
      <img
        src="/herosec/hero-poster.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        fetchPriority="high"
        decoding="async"
      />

      {loadVideo && (
        <video
          ref={backgroundVideoRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/herosec/hero-poster.webp"
          aria-hidden="true"
        >
          <source src="/herosec/herovd.webm" type="video/webm" />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 text-center px-2 sm:px-4 lg:px-8 max-w-full w-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="animate-reveal" style={{ animationDelay: '0.1s' }}>
            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 lg:mb-8 leading-tight tracking-tight">
              <span className="block">Macaw: Two Cities,</span>
              <span className="block bg-gradient-gold bg-clip-text text-transparent">
                One Iconic Nightlife Vibe
              </span>
            </h1>
          </div>

          <div className="animate-reveal" style={{ animationDelay: '0.25s' }}>
            <p className="text-base sm:text-lg md:text-lg lg:text-xl text-cream/95 mb-8 sm:mb-10 lg:mb-12 font-light leading-relaxed max-w-4xl mx-auto px-2 sm:px-4">
              Chennai & Bengaluru rooftops serving signature sips, live music energy,
              <br className="hidden sm:block" />
              and elevated dining—your next rooftop bar night out.
            </p>
          </div>

          <div className="animate-reveal px-2 sm:px-4" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col space-y-4 sm:space-y-5 md:space-y-0 md:space-x-5 lg:space-x-6 md:flex-row md:justify-center md:flex-wrap lg:flex-nowrap max-w-5xl mx-auto">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-gold text-charcoal font-semibold text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 hover:shadow-luxury transition-premium hover:-translate-y-0.5 min-w-0 rounded-xl"
              >
                <Link to="/locations#chennai">Explore Chennai</Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-gold text-charcoal font-semibold text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 hover:shadow-luxury transition-premium hover:-translate-y-0.5 min-w-0 rounded-xl"
              >
                <Link to="/locations#bengaluru">Explore Bengaluru</Link>
              </Button>

              <Button
                onClick={onBookTableClick}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-primary/80 text-primary bg-primary/10 hover:bg-primary hover:text-charcoal font-semibold text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 transition-premium min-w-0 rounded-xl backdrop-blur-sm"
              >
                Reserve Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-scroll-hint">
        <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 text-primary/80" />
      </div>
    </section>
  );
};
