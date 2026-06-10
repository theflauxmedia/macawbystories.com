import { useState } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { PageHead } from '@/components/seo/PageHead';
import { pageSeo } from '@/components/seo/pageSeo';
import { buildBreadcrumbSchema, buildWebPageSchema } from '@/components/seo/structuredData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, Newspaper, BookOpen, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Media = () => {
  const seo = pageSeo.media;
  const [activeTab, setActiveTab] = useState('press-releases');

  const pressReleases = [
    {
      id: 1,
      title: "Macaw offers a vibrant dining experience in Chennai's OMR",
      source: "The Hindu",
      date: "August 14, 2024",
      excerpt: "The Bengaluru-based Macaw by Stories comes to Chennai to offer a refreshing nightlife experience with inventive dishes like a sambar risotto, and refreshing junglebird cocktails.",
      url: "https://www.thehindu.com/food/dining/macaw-offers-a-vibrant-dining-experience-in-chennais-omr/article68505488.ece",
      image: "/lovable-uploads/72010d4f-e3e8-494a-9834-c311e846743e.webp", // Chennai location image
      category: "Restaurant Launch",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Macaw by Stories, a craft brewery and kitchen, opens in Bengaluru",
      source: "Economic Times Hospitality",
      date: "June 12, 2023",
      excerpt: "Located on Hosur road in Bengaluru, Macaw by Stories aims to revolutionise the city's nightlife landscape with its unique blend of electrifying music, cutting-edge design, and unparalleled entertainment offerings.",
      url: "https://hospitality.economictimes.indiatimes.com/news/restaurants/macaw-by-stories-a-craft-brewery-and-kitchen-opens-in-bengaluru/100934135",
      image: "/lovable-uploads/1da2dad0-5f5a-4a7c-a762-c371ea2063a8.webp", // Bengaluru location image
      category: "Restaurant Launch",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "Macaw by Stories - Hosur Road's Newest Nightlife Destination",
      source: "Little Black Book",
      date: "June 2023",
      excerpt: "Discover the newest addition to Bengaluru's nightlife scene with Macaw by Stories, featuring craft beers, innovative cocktails, and an immersive dining experience.",
      url: "https://lbb.in/bangalore/macaw-by-stories-hosur/",
      image: "/lovable-uploads/aeb86edc-b26e-4db4-a52f-ce91f9aa64d1.webp", // Macaw logo
      imageFit: 'contain' as const,
      category: "Feature",
      readTime: "4 min read"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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
      slug: '5-must-try-cocktails-at-macaw',
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
      slug: 'behind-the-design-the-story-of-our-tropical-paradise',
      excerpt: 'Take a journey through the creative process behind our stunning rooftop designs that blend nature with luxury.',
      content: 'Our design philosophy centers around creating immersive experiences...',
      category: 'lifestyle',
      author: 'Design Team',
      date: '2024-01-12',
      readTime: '7 min read',
      image: '/lovable-uploads/6f51ee45-ebd9-4968-87bc-81a4529c0ac4.webp',
    },
    {
      id: 3,
      title: 'How to Host the Perfect Corporate Event in Bangalore',
      slug: 'how-to-host-the-perfect-corporate-event-in-bangalore',
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
      slug: 'spotlight-on-our-signature-sushi-platters',
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
      slug: 'weekend-vibes-best-times-to-visit-macaw-chennai',
      excerpt: 'From sunset sessions to late-night DJ sets, discover the perfect time to experience our Chennai location.',
      content: 'Chennai offers unique coastal vibes that change throughout the day...',
      category: 'lifestyle',
      author: 'Macaw Team',
      date: '2024-01-05',
      readTime: '5 min read',
      image: '/lovable-uploads/72010d4f-e3e8-494a-9834-c311e846743e.webp',
    },
    {
      id: 6,
      title: 'The Art of Rooftop Entertainment',
      slug: 'the-art-of-rooftop-entertainment',
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

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
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
            { name: 'Media', path: '/media' },
          ]),
        ]}
      />
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 px-4 bg-gradient-primary">
          <div className="container mx-auto text-center">
            <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-primary mb-4">
              Media & Press
            </h1>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Stay updated with the latest news, press releases, and insights from Macaw by Stories. 
              Discover our journey, achievements, and the stories behind our success.
            </p>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="press-releases" className="flex items-center space-x-2">
                    <Newspaper className="w-4 h-4" />
                    <span>Press Releases</span>
                  </TabsTrigger>
                  <TabsTrigger value="blogs" className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Blog</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Press Releases Tab */}
              <TabsContent value="press-releases" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-primary mb-4">
                    Press Releases
                  </h2>
                  <p className="text-foreground max-w-2xl mx-auto">
                    Latest news and announcements about Macaw by Stories from leading publications and media outlets.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pressReleases.map((release) => (
                    <Card key={release.id} className="bg-card border-border hover:shadow-luxury transition-smooth overflow-hidden group">
                      <div className="relative overflow-hidden flex items-center justify-center bg-background">
                        <img
                          src={release.image}
                          alt={release.title}
                          className={`w-full h-48 ${release.imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'} group-hover:scale-105 transition-smooth duration-500`}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-charcoal px-3 py-1 rounded-full text-xs font-semibold">
                            {release.category}
                          </span>
                        </div>
                      </div>
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {release.date}
                          </span>
                          <span>{release.readTime}</span>
                        </div>
                        <CardTitle className="font-cinzel text-lg text-primary line-clamp-2 group-hover:text-primary/80 transition-smooth">
                          {release.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground font-medium">
                          {release.source}
                        </p>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                          {release.excerpt}
                        </p>
                        <Button
                          onClick={() => handleExternalLink(release.url)}
                          variant="outline"
                          size="sm"
                          className="w-full border-primary text-primary hover:bg-primary/10 transition-smooth"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Read Full Article
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Blogs Tab */}
              <TabsContent value="blogs" className="space-y-8">
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
                            
                            <Link
                              to={`/media/blog/${featuredPost.slug}`}
                              className="bg-gradient-gold text-charcoal hover:shadow-luxury transition-smooth w-fit px-4 py-2 rounded-md inline-block"
                            >
                              Read Full Story
                            </Link>
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

                {/* Blog Detail Section removed in favor of dedicated pages */}
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
                              <Link 
                                to={`/media/blog/${post.slug}`}
                                className="text-primary hover:text-primary/80 text-sm"
                              >
                                Read More →
                              </Link>
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
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-gradient-primary">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="font-cinzel text-3xl font-bold text-primary mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-foreground mb-8">
              For media inquiries, press releases, or collaboration opportunities, 
              please reach out to our communications team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-gold text-charcoal font-semibold px-8 py-4 hover:shadow-luxury transition-smooth"
              >
                Media Contact
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-4 transition-smooth"
              >
                Press Kit
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Media;
