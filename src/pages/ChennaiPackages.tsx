import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { PageHead } from '@/components/seo/PageHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Clock, MapPin, Sparkles } from 'lucide-react';

const ChennaiPackages = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:+918045883769';
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHead 
        title="Chennai Packages - Coming Soon - Macaw by Stories" 
        description="Exciting packages coming soon to Macaw by Stories Chennai. Stay tuned for our curated celebration packages."
      />
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 sm:py-32 px-4 bg-gradient-primary">
          <div className="container mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-16 h-16 text-primary" />
            </div>
            <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-primary mb-6">
              Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto mb-8">
              Exciting celebration packages are being crafted for our Chennai location. 
              Get ready for an extraordinary dining experience that tells your story.
            </p>
            <div className="flex items-center justify-center space-x-4 text-foreground">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">Chennai</span>
            </div>
          </div>
        </section>

        {/* Coming Soon Content */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-cinzel text-3xl font-bold text-primary mb-4">
                    What's Coming?
                  </h2>
                  <p className="text-foreground text-lg leading-relaxed">
                    We're working tirelessly to bring you the same exceptional dining experience 
                    that has made Macaw by Stories a beloved destination. Our Chennai location 
                    will feature curated packages perfect for every celebration.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Curated Celebration Packages</h3>
                      <p className="text-muted-foreground">From intimate gatherings to grand celebrations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Signature Dining Experience</h3>
                      <p className="text-muted-foreground">Unique flavors and exceptional service</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Event Planning Support</h3>
                      <p className="text-muted-foreground">Professional assistance for your special occasions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Contact Card */}
              <Card className="bg-card border-border hover:shadow-luxury transition-smooth">
                <CardHeader className="text-center">
                  <CardTitle className="font-cinzel text-2xl text-primary">
                    Get in Touch
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Want to be the first to know when our packages are ready?
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">Opening Soon</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      We're putting the finishing touches on our Chennai location
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button
                      onClick={handleCallClick}
                      className="w-full bg-gradient-gold text-charcoal font-semibold hover:shadow-luxury transition-smooth py-4 text-lg"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Chennai Location
                    </Button>
                    
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">
                        For immediate assistance and updates
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="text-center">
                      <h4 className="font-semibold text-foreground mb-2">Location</h4>
                      <p className="text-sm text-muted-foreground">
                        Chennai, Tamil Nadu<br />
                        <span className="text-primary">Opening Soon</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stay Updated Section */}
        <section className="py-20 px-4 bg-card">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="font-cinzel text-3xl font-bold text-primary mb-6">
              Stay Updated
            </h2>
            <p className="text-foreground text-lg mb-8">
              Follow us on social media to be the first to know when our Chennai packages 
              are ready and to get exclusive early access offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-4 transition-smooth"
              >
                Follow on Instagram
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-4 transition-smooth"
              >
                Follow on Facebook
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ChennaiPackages;
