import { useState } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { PageHead } from '@/components/seo/PageHead';
import { BookingModal } from '@/components/ui/booking-modal';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Gallery = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleBookTableClick = (location?: string) => {
    if (location) {
      setSelectedLocation(location);
    }
    setIsBookingModalOpen(true);
  };

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'ambience', label: 'Ambience' },
    { id: 'food', label: 'Food & Drinks' },
    { id: 'events', label: 'Events' },
  ];

  const galleryItems = [
    // Chennai Images
    {
      id: 1,
      category: 'ambience',
      title: 'Chennai Bar Seating Area',
      description: 'Main bar area with circular seating and MACAW by STORIES 2.0 signage',
      image: '/lovable-uploads/a573046e-435f-4564-b939-2993c75300e5.png',
    },
    {
      id: 2,
      category: 'ambience',
      title: 'Chennai Outdoor Terrace',
      description: 'Terrace seating area with modern furniture and plants',
      image: '/lovable-uploads/676b9ea1-e18b-470f-b96e-31b593dd4551.png',
    },
    {
      id: 3,
      category: 'ambience',
      title: 'Chennai Indoor Dining',
      description: 'Indoor dining area featuring macaw artwork on walls',
      image: '/lovable-uploads/a1d93a52-771b-419f-9107-995c2a7d4a26.png',
    },
    {
      id: 4,
      category: 'ambience',
      title: 'Chennai Rooftop Terrace',
      description: 'Rooftop area with MACAW 2.0 signage and outdoor seating',
      image: '/lovable-uploads/9cf9f6fb-e16d-46f9-b2d3-654b8c26e73e.png',
    },
    {
      id: 5,
      category: 'ambience',
      title: 'Chennai City View',
      description: 'Outdoor seating area with city skyline view',
      image: '/lovable-uploads/53404d9a-c127-4f4b-aa70-57548acb28ae.png',
    },
    {
      id: 6,
      category: 'ambience',
      title: 'Chennai Corridor Art',
      description: 'Corridor with From BENGALURU to CHENNAI wall art',
      image: '/lovable-uploads/92e42da7-b0db-44a1-af24-67ab12e92853.png',
    },
    {
      id: 7,
      category: 'ambience',
      title: 'Chennai Colorful Interior',
      description: 'Main dining area with colorful chairs and industrial ceiling',
      image: '/lovable-uploads/56ee91c5-80bb-4f36-b4b6-ea8c3e6af75e.png',
    },
    {
      id: 8,
      category: 'ambience',
      title: 'Chennai Bar Counter',
      description: 'Bar counter with colorful stools and MACAW signage',
      image: '/lovable-uploads/15122e82-24d6-4029-938e-4347087523f5.png',
    },
    {
      id: 9,
      category: 'ambience',
      title: 'Chennai Entrance',
      description: 'Main entrance with MACAW 2.0 and CRAFTING COCKTAIL signage',
      image: '/lovable-uploads/72010d4f-e3e8-494a-9834-c311e846743e.png',
    },
    {
      id: 10,
      category: 'ambience',
      title: 'Chennai Circular Booths',
      description: 'Signature circular orange booth seating with industrial design',
      image: '/lovable-uploads/5731ead5-b641-42d5-b802-0f7ce04739e5.png',
    },
    {
      id: 11,
      category: 'ambience',
      title: 'Chennai Evening Atmosphere',
      description: 'Evening interior with circular booths and ambient lighting',
      image: '/lovable-uploads/7fa8460c-8c7a-4d70-9468-ad68dc210130.png',
    },
    {
      id: 12,
      category: 'ambience',
      title: 'Chennai Night Dining',
      description: 'Night time interior with MACAW branding visible',
      image: '/lovable-uploads/bdc134bb-edc6-4eb2-8383-1cba21f80b4f.png',
    },
    // Bangalore Images
    {
      id: 13,
      category: 'ambience',
      title: 'Bangalore Atrium Dining',
      description: 'Stunning glass atrium with tropical garden atmosphere',
      image: '/lovable-uploads/1da2dad0-5f5a-4a7c-a762-c371ea2063a8.png',
    },
    {
      id: 14,
      category: 'ambience',
      title: 'Bangalore Crafting Bar',
      description: 'Multi-level bar area with CRAFTING COCKTAIL & STORIES signage',
      image: '/lovable-uploads/55a7b609-54e9-44f4-89c8-a9a0457e6441.png',
    },
    {
      id: 15,
      category: 'ambience',
      title: 'Bangalore Central Dining',
      description: 'Central dining area with colorful seating and glass ceiling',
      image: '/lovable-uploads/6f51ee45-ebd9-4968-87bc-81a4529c0ac4.png',
    },
    {
      id: 16,
      category: 'ambience',
      title: 'Bangalore Tropical Space',
      description: 'Tropical dining space with abundant plants and natural light',
      image: '/lovable-uploads/719de173-88e6-4746-a136-0eb6ce9e87dc.png',
    },
    {
      id: 17,
      category: 'events',
      title: 'Party Moment 1',
      description: 'Celebration at Macaw',
      image: '/party/1.webp',
    },
    {
      id: 18,
      category: 'ambience',
      title: 'Bangalore Garden Dining',
      description: 'Lush garden-style dining area with tropical plants',
      image: '/lovable-uploads/b2cb2ff8-8527-406c-bb46-4818da4f6507.png',
    },
    // Food & Mocktails (from public/food)
    {
      id: 19,
      category: 'food',
      title: 'Signature Sushi Platter',
      description: 'Artfully plated sushi selection with fresh ingredients',
      image: '/food/1.webp',
    },
    {
      id: 20,
      category: 'food',
      title: 'Tropical Mocktail',
      description: 'Refreshing fruit-forward mocktail with a citrus twist',
      image: '/food/2.webp',
    },
    {
      id: 21,
      category: 'food',
      title: 'Gourmet Appetizers',
      description: 'Crisp, savory bites perfect for sharing',
      image: '/food/3.webp',
    },
    {
      id: 22,
      category: 'food',
      title: 'Chef’s Special',
      description: 'Seasonal creation highlighting bold flavors',
      image: '/food/4.webp',
    },
    {
      id: 23,
      category: 'food',
      title: 'Macaw Dessert',
      description: 'Decadent sweet treat to end the night',
      image: '/food/5.webp',
    },
    {
      id: 24,
      category: 'food',
      title: 'Signature Cocktail',
      description: 'House favorite cocktail with premium spirits',
      image: '/food/6.webp',
    },
    {
      id: 25,
      category: 'food',
      title: 'Plated Entrée',
      description: 'Beautifully plated main course with fresh produce',
      image: '/food/7.webp',
    },
    {
      id: 26,
      category: 'food',
      title: 'Mocktail Medley',
      description: 'Vibrant non-alcoholic creations for every palate',
      image: '/food/8.webp',
    },
    {
      id: 27,
      category: 'food',
      title: 'Bar Bites',
      description: 'Comforting bites that pair perfectly with drinks',
      image: '/food/9.webp',
    },
    {
      id: 28,
      category: 'food',
      title: 'Craft Cocktail',
      description: 'Expertly crafted cocktail with layered flavors',
      image: '/food/10.webp',
    },
    {
      id: 29,
      category: 'food',
      title: 'Dessert Duo',
      description: 'Sweet pairing to share or savor solo',
      image: '/food/11.webp',
    },
    // Events (from public/party)
    {
      id: 30,
      category: 'events',
      title: 'Party Moment 2',
      description: 'Celebration at Macaw',
      image: '/party/2.webp',
    },
    {
      id: 31,
      category: 'events',
      title: 'Party Moment 3',
      description: 'Celebration at Macaw',
      image: '/party/3.webp',
    },
    {
      id: 32,
      category: 'events',
      title: 'Party Moment 4',
      description: 'Celebration at Macaw',
      image: '/party/4.webp',
    },
    {
      id: 33,
      category: 'events',
      title: 'Party Moment 5',
      description: 'Celebration at Macaw',
      image: '/party/5.webp',
    },
    {
      id: 34,
      category: 'events',
      title: 'Party Moment 6',
      description: 'Celebration at Macaw',
      image: '/party/6.webp',
    },
    {
      id: 35,
      category: 'events',
      title: 'Party Moment 7',
      description: 'Celebration at Macaw',
      image: '/party/7.webp',
    },
    {
      id: 36,
      category: 'events',
      title: 'Party Moment 8',
      description: 'Celebration at Macaw',
      image: '/party/8.webp',
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onBookTableClick={() => handleBookTableClick()} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-primary">
          <div className="container mx-auto text-center">
            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6 lg:mb-8">
              Gallery
            </h1>
            <p className="text-base sm:text-lg lg:text-lg text-foreground max-w-4xl mx-auto leading-relaxed px-2">
              Step into our world of tropical luxury. Explore the vibrant atmosphere, 
              exquisite cuisine, and unforgettable moments that define Macaw by Stories.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20">
              {categories.map((category) => (
                <Badge
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`cursor-pointer px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base transition-smooth ${
                    selectedCategory === category.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-primary/10'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label}
                </Badge>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {filteredItems.map((item) => (
                <Card key={item.id} className="group overflow-hidden bg-card border-border hover:shadow-luxury transition-smooth">
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {item.category === 'ambience' && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                          <h3 className="font-cinzel text-base sm:text-lg lg:text-lg font-bold text-white mb-1 sm:mb-2">
                            {item.title}
                          </h3>
                          <p className="text-white/90 text-xs sm:text-sm lg:text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="container mx-auto text-center">
            <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-3xl font-bold text-primary mb-4 sm:mb-6 lg:mb-8">
              Ready to Create Your Own Story?
            </h2>
            <p className="text-base sm:text-lg lg:text-lg text-foreground mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
              Experience the magic firsthand. Book your table and become part of our gallery.
            </p>
            <button
              onClick={() => handleBookTableClick()}
              className="bg-gradient-gold text-charcoal font-semibold px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-lg rounded-xl hover:shadow-luxury transition-smooth"
            >
              Book Your Experience
            </button>
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

export default Gallery;