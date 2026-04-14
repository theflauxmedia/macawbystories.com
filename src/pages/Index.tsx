import { useState, useEffect } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/ui/hero-section';
import { HighlightsGrid } from '@/components/ui/highlights-grid';
import { EventsPreview } from '@/components/ui/events-preview';
import { GalleryPreview } from '@/components/ui/gallery-preview';
import { LocationsSection } from '@/components/ui/locations-section';
import { BookingModal } from '@/components/ui/booking-modal';
import { Footer } from '@/components/ui/footer';
import { PageHead } from '@/components/seo/PageHead';

const Index = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const handleBookTableClick = (location?: string) => {
    if (location) {
      setSelectedLocation(location);
    }
    setIsBookingModalOpen(true);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Macaw by Stories - Home",
    "description": "Experience Chennai & Bengaluru's premier rooftop nightlife at Macaw by Stories. Live DJs, signature cocktails, skyline dining.",
    "url": "https://macawbystories.com",
    "mainEntity": {
      "@type": "Restaurant",
      "name": "Macaw by Stories",
      "description": "Premier rooftop nightlife experience in Chennai and Bengaluru"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHead 
        title="Macaw by Stories Bangalore & Chennai | Rooftop Bar, Fine Dining & Nightlife"
        description="Macaw by Stories brings iconic rooftop dining and nightlife to Bengaluru and Chennai—signature cocktails, live music, DJ nights, and elevated dining. Explore locations and book a table."
        keywords="macaw by stories bangalore, rooftop bar bangalore, rooftop dining bangalore, rooftop restaurant bangalore, fine dining restaurant bangalore, luxury restaurant bangalore, cocktail bar bangalore, nightlife bangalore, live music restaurant bangalore, date night restaurant bangalore, best bars in bangalore"
        canonicalUrl="https://macawbystories.com"
        structuredData={structuredData}
      />
      
      <Navigation onBookTableClick={() => handleBookTableClick()} />
      
      <main>
        <HeroSection onBookTableClick={() => handleBookTableClick()} />
        <HighlightsGrid />
        {/* <EventsPreview /> */}
        <LocationsSection onBookTableClick={handleBookTableClick} />
        <GalleryPreview />
      </main>

      <Footer />

      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => {
          setIsBookingModalOpen(false);
          setSelectedLocation('');
        }}
        selectedLocation={selectedLocation}
      />
    </div>
  );
};

export default Index;