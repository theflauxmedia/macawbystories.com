import { useState } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { PageHead } from '@/components/seo/PageHead';
import { pageSeo } from '@/components/seo/pageSeo';
import { buildBreadcrumbSchema, buildWebPageSchema } from '@/components/seo/structuredData';
import { BookingModal } from '@/components/ui/booking-modal';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Sparkles, Music } from 'lucide-react';

const AboutUs = () => {
  const seo = pageSeo.about;
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('');

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
        structuredData={[
          buildWebPageSchema({ name: seo.title, description: seo.description, path: seo.path }),
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about-us' },
          ]),
        ]}
      />
      <Navigation onBookTableClick={() => handleBookTableClick()} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-primary">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-primary mb-6">
              About Macaw by Stories
            </h1>
            <p className="text-xl text-foreground leading-relaxed">
              More than a bar—it's a sky-high ritual. With rooftops in Chennai and Bengaluru, 
              we deliver unmatched vibes, bold flavors, and curated experiences that bring people together under the stars.
            </p>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-cinzel text-2xl font-bold text-primary mb-8">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-foreground leading-relaxed">
                  <p>
                    Macaw by Stories was born from a vision to create extraordinary rooftop experiences 
                    that blend tropical luxury with urban sophistication. Named after the vibrant macaw, 
                    our venues embody the spirit of these magnificent birds—colorful, social, and unforgettable.
                  </p>
                  <p>
                    Each location tells its own story while maintaining our commitment to exceptional 
                    hospitality, innovative cocktails, and immersive ambiance. We believe in creating 
                    moments that become memories, experiences that become stories.
                  </p>
                  <p>
                    From our carefully curated music to our signature cocktails, every element is 
                    designed to transport you to a world where tropical paradise meets cosmopolitan elegance.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center bg-card">
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <div className="text-foreground">Cities</div>
                </Card>
                <Card className="p-6 text-center bg-card">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-foreground">Signature Cocktails</div>
                </Card>
                <Card className="p-6 text-center bg-card">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-foreground">Events Monthly</div>
                </Card>
                <Card className="p-6 text-center bg-card">
                  <div className="text-3xl font-bold text-primary mb-2">5★</div>
                  <div className="text-foreground">Customer Rating</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Delight Philosophy */}
        <section className="py-20 px-4 bg-card">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-cinzel text-2xl font-bold text-primary mb-8">
              Designed to Delight
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-12">
              Our delight philosophy centers around creating moments of pure joy and wonder. 
              We believe in crafting experiences that surprise, inspire, and bring genuine 
              smiles to our guests' faces through unexpected touches and heartfelt hospitality.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-charcoal" />
                </div>
                <h3 className="font-cinzel text-xl font-bold text-primary mb-3">Tropical Vibes</h3>
                <p className="text-foreground">Lush greenery and vibrant colors create an escape from urban life</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-charcoal" />
                </div>
                <h3 className="font-cinzel text-xl font-bold text-primary mb-3">Luxury Details</h3>
                <p className="text-foreground">Premium materials and elegant finishes elevate every moment</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-charcoal" />
                </div>
                <h3 className="font-cinzel text-xl font-bold text-primary mb-3">Sonic Experience</h3>
                <p className="text-foreground">Carefully curated soundscapes enhance the atmospheric journey</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="font-cinzel text-2xl font-bold text-primary mb-6">
              Ready to Experience Our Story?
            </h2>
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              Join us at either of our locations and become part of the Macaw by Stories narrative. 
              Every visit is a new chapter in your own story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleBookTableClick('chennai')}
                className="bg-gradient-gold text-charcoal font-semibold px-8 py-4 hover:shadow-luxury transition-smooth"
              >
                Visit Chennai
              </Button>
              <Button
                onClick={() => handleBookTableClick('bengaluru')}
                className="bg-gradient-gold text-charcoal font-semibold px-8 py-4 hover:shadow-luxury transition-smooth"
              >
                Visit Bengaluru
              </Button>
            </div>
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

export default AboutUs;