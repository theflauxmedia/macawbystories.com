import { useState } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { PageHead } from '@/components/seo/PageHead';
import { BookingModal } from '@/components/ui/booking-modal';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock } from 'lucide-react';

const Blog = () => {
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
    { id: 'all', label: 'All Posts' },
    { id: 'cocktails', label: 'Cocktails' },
    { id: 'events', label: 'Events' },
    { id: 'lifestyle', label: 'Lifestyle' },
    { id: 'food', label: 'Food' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: '5 Must-Try Cocktails at Macaw',
      excerpt: 'Discover our signature cocktails that perfectly capture the essence of tropical luxury and urban sophistication.',
      content: 'From our famous Macaw Sunset to the mysterious Forest Floor, each cocktail tells a story...',
      category: 'cocktails',
      author: 'Mixologist Team',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/food/10.webp',
      featured: true,
    },
    {
      id: 2,
      title: 'Behind the Design: The Story of Our Tropical Paradise',
      excerpt: 'Take a journey through the creative process behind our stunning rooftop designs that blend nature with luxury.',
      content: 'Our design philosophy centers around creating immersive experiences...',
      category: 'lifestyle',
      author: 'Design Team',
      date: '2024-01-12',
      readTime: '7 min read',
      image: '/lovable-uploads/6f51ee45-ebd9-4968-87bc-81a4529c0ac4.png',
    },
    {
      id: 3,
      title: 'How to Host the Perfect Corporate Event in Bangalore',
      excerpt: 'Planning a corporate event? Discover why Macaw Bangalore is the perfect venue for business celebrations.',
      content: 'Corporate events require the perfect blend of professionalism and entertainment...',
      category: 'events',
      author: 'Events Team',
      date: '2024-01-10',
      readTime: '6 min read',
      image: '/party/1.webp',
    },
    {
      id: 4,
      title: 'Spotlight on Our Signature Sushi Platters',
      excerpt: 'Explore the artistry behind our Japanese-inspired cuisine that perfectly complements our tropical ambiance.',
      content: 'Fresh, vibrant, and expertly crafted - our sushi selection...',
      category: 'food',
      author: 'Chef Team',
      date: '2024-01-08',
      readTime: '4 min read',
      image: '/food/1.webp',
    },
    {
      id: 5,
      title: 'Weekend Vibes: Best Times to Visit Macaw Chennai',
      excerpt: 'From sunset sessions to late-night DJ sets, discover the perfect time to experience our Chennai location.',
      content: 'Chennai offers unique coastal vibes that change throughout the day...',
      category: 'lifestyle',
      author: 'Macaw Team',
      date: '2024-01-05',
      readTime: '5 min read',
      image: '/lovable-uploads/72010d4f-e3e8-494a-9834-c311e846743e.png',
    },
    {
      id: 6,
      title: 'The Art of Rooftop Entertainment',
      excerpt: 'Learn about our approach to creating unforgettable entertainment experiences across both locations.',
      content: 'Entertainment at Macaw goes beyond just music...',
      category: 'events',
      author: 'Entertainment Team',
      date: '2024-01-03',
      readTime: '6 min read',
      image: '/party/2.webp',
    },
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || selectedCategory !== 'all');

  return (
    <div className="min-h-screen bg-background">
      <Navigation onBookTableClick={() => handleBookTableClick()} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-primary">
          <div className="container mx-auto text-center">
            <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-primary mb-6">
              Stories & Insights
            </h1>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Dive into the world of Macaw with our latest stories, cocktail secrets, 
              event highlights, and behind-the-scenes insights from both our locations.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {selectedCategory === 'all' && featuredPost && (
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="font-cinzel text-2xl font-bold text-primary mb-4">Featured Story</h2>
              </div>
              
              <Card className="overflow-hidden bg-card border-border shadow-luxury">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 text-sm text-foreground mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-cinzel text-2xl font-bold text-primary mb-4">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <Button className="bg-gradient-gold text-charcoal hover:shadow-luxury transition-smooth w-fit">
                      Read Full Story
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <Badge
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`cursor-pointer px-6 py-2 text-sm transition-smooth ${
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
          </div>
        </section>

        {/* Blog Grid */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="group overflow-hidden bg-card border-border hover:shadow-luxury transition-smooth">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="capitalize">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-foreground/70 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-cinzel text-xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-smooth">
                      {post.title}
                    </h3>
                    
                    <p className="text-foreground text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-foreground/60">By {post.author}</span>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        Read More →
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 px-4 bg-card">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="font-cinzel text-2xl font-bold text-primary mb-6">
              Stay in the Loop  
            </h2>
            <p className="text-lg text-foreground mb-8">
              Subscribe to our newsletter for the latest stories, event updates, and exclusive offers from both locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-gradient-gold text-charcoal hover:shadow-luxury transition-smooth px-6 py-3">
                Subscribe
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

export default Blog;