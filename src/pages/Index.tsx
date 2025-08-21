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
        title="Macaw by Stories - Two Cities, One Iconic Nightlife Vibe | Rooftop Bar"
        description="Experience Chennai & Bengaluru's premier rooftop nightlife at Macaw by Stories. Live DJs, signature cocktails, skyline dining, and unforgettable experiences. Book now!"
        keywords="rooftop bar bangalore, nightlife chennai, rooftop restobar, live dj bangalore, cocktails chennai omr, rooftop dining bengaluru"
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