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
import { pageSeo } from '@/components/seo/pageSeo';
import { buildWebPageSchema } from '@/components/seo/structuredData';

const Index = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const seo = pageSeo.home;

  const handleBookTableClick = (location?: string) => {
    if (location) {
      setSelectedLocation(location);
    }
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        path={seo.path}
        ogImage={seo.ogImage}
        structuredData={buildWebPageSchema({
          name: seo.title,
          description: seo.description,
          path: seo.path,
        })}
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