import { useState, useEffect } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { BookingModal } from '@/components/ui/booking-modal';
import { PageHead } from '@/components/seo/PageHead';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';
import bangaloreImage from '@/assets/bangalore-location.jpg';
import chennaiImage from '@/assets/chennai-location.jpg';

const Locations = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const handleBookTableClick = (location?: string) => {
    if (location) {
      setSelectedLocation(location);
    }
    setIsBookingModalOpen(true);
  };

  const locations = [
    {
      id: 'bengaluru',
      name: 'Macaw by Stories – Bengaluru',
      city: 'Bengaluru',
      image: '/lovable-uploads/1da2dad0-5f5a-4a7c-a762-c371ea2063a8.png',
      address: '2224–2225, AECS Layout, Near Singasandra, Hosur Main Road, Bommanahalli, Bengaluru',
      phone: '+91‑8068507673',
      hours: '12:00 PM – 1:00 AM',
      highlights: ['Rooftop', 'Cocktails', 'Live Music', 'Party Vibe', 'Dance Floor'],
      description: 'Located in the heart of Bengaluru\'s tech corridor, our rooftop offers stunning city views, energetic music, and an atmosphere perfect for both corporate gatherings and weekend celebrations.',
      mapUrl: 'https://maps.google.com/?q=2224–2225,+AECS+Layout,+Near+Singasandra,+Hosur+Main+Road,+Bommanahalli,+Bengaluru',
      reservationUrl: 'https://webbook.wegsoft.com/H7G6F5E4D3C2B1A0Z9Y8',
    },
    {
      id: 'chennai',
      name: 'Macaw by Stories – Chennai',
      city: 'Chennai',
      image: '/lovable-uploads/72010d4f-e3e8-494a-9834-c311e846743e.png',
      address: '132, Max Kailash Building, Rajiv Gandhi Salai, Sholinganallur, Chennai – 600119',
      phone: '+91‑8045883769',
      hours: '12:00 PM – 11:30 PM',
      highlights: ['Rooftop', 'DJ Nights', 'Cocktails', 'Bar Bites', 'Lively Group Vibe'],
      description: 'Experience Chennai\'s coastal charm from our rooftop venue. Perfect for sunset sessions, DJ nights, and creating memorable moments with friends and colleagues.',
      instagram: '@macawchennai',
      mapUrl: 'https://maps.google.com/?q=132,+Max+Kailash+Building,+Rajiv+Gandhi+Salai,+Sholinganallur,+Chennai+600119',
      reservationUrl: 'https://webbook.wegsoft.com/Q8W7E6R5T4Y3U2I1O0',
    },
  ];

  // Handle direct navigation to specific location
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Macaw by Stories Locations",
    "description": "Find Macaw by Stories rooftop restaurants in Chennai and Bengaluru. Two cities, one iconic nightlife experience.",
    "url": "https://macawbystories.com/locations"
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHead 
        title="Locations - Macaw by Stories | Rooftop Bars in Chennai & Bengaluru"
        description="Find Macaw by Stories rooftop restaurants in Chennai and Bengaluru. Two cities, one iconic nightlife experience. Get directions and book your table."
        keywords="macaw by stories locations, rooftop bar chennai, rooftop bar bengaluru, omr restaurants, hosur road bars, singasandra restaurants"
        canonicalUrl="https://macawbystories.com/locations"
        structuredData={structuredData}
      />
      
      <Navigation onBookTableClick={() => handleBookTableClick()} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-primary">
          <div className="container mx-auto text-center">
            <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Locations
            </h1>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Two cities, one incredible experience. Choose your destination for an unforgettable rooftop journey.
            </p>
          </div>
        </section>


        {/* Location Details */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="space-y-20">
              {locations.map((location, index) => (
                <div
                  key={location.id}
                  id={location.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-3xl shadow-luxury">
                      <img
                        src={location.image}
                        alt={`${location.name} rooftop view`}
                        className="w-full h-96 object-cover hover:scale-105 transition-smooth duration-700"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="bg-primary text-charcoal px-4 py-2 rounded-full font-semibold">
                          {location.city}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <Card className="p-8 bg-card border-border hover:shadow-luxury transition-smooth">
                      <h3 className="font-cinzel text-3xl font-bold text-primary mb-6">
                        {location.name}
                      </h3>
                      
                      <p className="text-lg text-foreground mb-8 leading-relaxed">
                        {location.description}
                      </p>

                      {/* Contact Details */}
                      <div className="space-y-4 mb-8">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span className="text-foreground">{location.address}</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                          <a 
                            href={`tel:${location.phone}`}
                            className="text-foreground hover:text-primary transition-smooth"
                          >
                            {location.phone}
                          </a>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{location.hours}</span>
                        </div>
                        
                        {location.instagram && (
                          <div className="flex items-center space-x-3">
                            <Instagram className="w-5 h-5 text-primary flex-shrink-0" />
                            <a 
                              href={`https://instagram.com/${location.instagram.replace('@', '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground hover:text-primary transition-smooth"
                            >
                              {location.instagram}
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Highlights */}
                      <div className="mb-8">
                        <h4 className="font-semibold text-primary mb-3">Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {location.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          onClick={() => window.open(location.reservationUrl, '_blank')}
                          className="bg-gradient-gold text-charcoal font-semibold hover:shadow-luxury transition-smooth flex-1"
                        >
                          Reserve {location.city}
                        </Button>
                        <Button
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-charcoal transition-smooth"
                          onClick={() => window.open(location.mapUrl, '_blank')}
                        >
                          Get Directions
                        </Button>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-card">
          <div className="container mx-auto text-center">
            <h2 className="font-cinzel text-2xl font-bold text-primary mb-6">
              Can't Decide Which Location?
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Both locations offer unique experiences while maintaining our signature Macaw by Stories quality. 
              Why not experience both!
            </p>
            <Button
              onClick={() => handleBookTableClick()}
              size="lg"
              className="bg-gradient-gold text-charcoal font-semibold px-8 py-4 hover:shadow-luxury transition-smooth"
            >
              Book at Any Location
            </Button>
          </div>
        </section>
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

export default Locations;