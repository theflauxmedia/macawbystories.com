import { useState } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { PageHead } from '@/components/seo/PageHead';
import { BookingModal } from '@/components/ui/booking-modal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Wine, Utensils, Cookie, Leaf, ChefHat, Check } from 'lucide-react';

const Packages = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const handleBookTableClick = (location?: string) => {
    if (location) {
      setSelectedLocation(location);
    }
    setIsBookingModalOpen(true);
  };

  const packages = [
    {
      name: 'The Essential Story',
      price: '₹1099 + TAX',
      drinks: 'Soft Drinks',
      appetizers: '2 Veg & 2 Non-Veg Starters',
      mainCourse: '2 Veg & 2 Non-Veg Mains',
      desserts: '2 Desserts + 1 Ice Cream',
      isHighlight: false,
    },
    {
      name: 'The Essential Add-On Story',
      price: '₹1399 + TAX',
      drinks: 'Soft Drinks, Canned Juice, Mocktails',
      appetizers: '3 Veg & 3 Non-Veg Starters',
      mainCourse: '2 Veg & 2 Non-Veg Mains, Staples',
      desserts: '2 Desserts + 1 Ice Cream',
      isHighlight: false,
    },
    {
      name: 'The Concord Story',
      price: '₹1799 + TAX',
      drinks: 'Soft Drinks, Canned Juice, Mocktails, Crafted/Draught Beer',
      appetizers: '3 Veg & 3 Non-Veg Starters',
      mainCourse: '2 Veg & 2 Non-Veg Mains, Staples',
      desserts: '2 Desserts + 1 Ice Cream',
      isHighlight: true,
    },
    {
      name: 'The Bosom Buddy Story',
      price: '₹2499 + TAX',
      drinks: 'Soft Drinks, Canned Juice, Mocktails, Crafted/Draught Beer, Artisan Cocktails, Premium Liquors',
      appetizers: '3 Veg & 3 Non-Veg Starters',
      mainCourse: '2 Veg & 2 Non-Veg Mains, Staples',
      desserts: '2 Desserts + 1 Ice Cream',
      isHighlight: false,
    },
    {
      name: 'The Humming Story',
      price: '₹2799 + TAX',
      drinks: 'Soft Drinks, Canned Juice, Mocktails, Crafted/Draught Beer, Artisan Cocktails, Premium Liquors',
      appetizers: '3 Veg & 3 Non-Veg Starters',
      mainCourse: '3 Veg & 3 Non-Veg Mains, Staples',
      desserts: '2 Desserts + 1 Ice Cream',
      isHighlight: false,
    },
    {
      name: 'The Escape Story',
      price: '₹3199 + TAX',
      drinks: 'Soft Drinks, Canned Juice, Mocktails, Crafted/Draught Beer, Artisan Cocktails, Premium Liquors',
      appetizers: '4 Veg & 4 Non-Veg Starters',
      mainCourse: '3 Veg & 2 Non-Veg Mains, Staples',
      desserts: '2 Desserts + 1 Ice Cream',
      isHighlight: false,
    },
    {
      name: 'The Legendary Story',
      price: '₹5599 (All Inclusive)',
      drinks: 'Soft Drinks, Canned Juice, Mocktails, Crafted/Draught Beer, Premium Liquors, Artisan Cocktails',
      appetizers: '4 Veg & 4 Non-Veg Starters',
      mainCourse: '3 Veg & 3 Non-Veg Mains, Staples',
      desserts: '2 Desserts + 1 Ice Cream',
      isHighlight: true,
    },
  ];

  const vegetarianAppetizers = [
    'Pista Crusted Beetroot Falafel',
    'Chilli Cheese Bruschetta',
    'Jalapeno Corn Cigar Roll',
    'Chilli Cheese Wanton',
    'Mushroom Croquettes',
    'Thecha Paneer Tikka',
    'Paneer Ghee Roast',
    'Chimichurri Paneer Tikka',
    'Chatpatta Paneer Tikka',
    'Malai Paneer Tikka',
    'Chilli Plum Babycorn',
    'Grilled Corn Tikki',
    'Mushroom Pepper Fry',
    'Chilli Paneer',
    'Paneer Papdi Roll',
  ];

  const nonVegetarianAppetizers = [
    'Podi Dusted Chicken',
    'Coconut Roast Chicken',
    'Crumb Fried Tilapia',
    'Desi Tadka Lollypop',
    'Gowda Fried Chicken',
    'Pattaya Chicken',
    'Chimichurri Chicken Tikka',
    'Ajwaini Fish Tikka',
    '1990 Chilli Chicken',
    'Chicken Wings',
    'Chatpata Chicken Tikka',
    'Chicken Kali Mirch',
    'Crispy Tender Chicken',
    'Crumb Fried Chicken',
    'Floating Cheese Balls',
  ];

  const vegetarianMains = [
    'Veg Dum Biryani',
    'Margarita Pizza',
    'Greek Pizza',
    'St. Louis Pizza',
    'Pesto Mesto Pasta',
    'Penne Italiano Pasta',
    'Creamy Cheese Sauce Pasta',
    'Thai Curry (Green/Red) with Jasmine Rice',
    'Chettinad Paneer',
    'Rajasthani Saag Subzi',
    'Subzi Meloni',
    'Subzi Veg Kolhapuri',
    'Paneer Makhanwala',
    'Kashmiri Dum Aloo',
  ];

  const nonVegetarianMains = [
    'Chicken Dum Biryani',
    'Double Chicken Feast Pizza',
    'Caribbean Party Pizza',
    'Meaty Mighty Pizza',
    'Burnt Garlic Chicken Noodles',
    'Burnt Garlic Chicken Fried Rice',
    'Thai Chicken Noodles',
    'Thai Chicken Fried Rice',
    'Thai Chicken Curry (Green/Red) with Jasmine Rice',
    'Chicken Kolhapuri',
    'Chettinad Chicken',
    'Butter Chicken Curry',
    'Fish Curry',
    'Bombay Butter Chicken Gravy',
  ];

  const mocktails = [
    'White Horse',
    'Blooming Lemonade',
    'L.O.L',
    'Kiwi Deli',
    'Virgin Mojito',
    'Raw Mango Spritzer',
    'Hibiscus Strawberry Iced Tea',
  ];

  const desserts = [
    'Thandai Mousse Ice Cream',
    'Gooey Brownie',
    'Choco Macaa',
    'Gulab Jamun',
    'Shahi Tukda',
    'Vanilla Ice Cream',
  ];

  const termsAndConditions = [
    'Minimum Group Size: 25 PAX',
    'Price Per Pax is excluding taxes',
    'Management reserves right to refuse service to intoxicated guests',
    'Guests are prohibited from bringing outside alcohol',
    'The management is not responsible for any loss, damage or theft',
    '50% advance payment required (non-refundable)',
    'Choice of food & drinks subject to availability',
    'Duration: 150 mins (from 1st order)',
    'No drinks after 150 mins',
    'Menu choice must be shared 48 hrs in advance',
    'Orders outside package billed separately',
    'Package items cannot be parceled',
    'Last order: Food 10:30 PM, Drinks 10:45 PM',
    'No drinks after 11 PM',
    'Bills to be settled at the end',
    'Kid age: 12 years & below',
    'Energy drinks not included',
    'Extra ₹200/person on weekends',
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHead 
        title="Bengaluru Packages - Macaw by Stories" 
        description="Explore our event packages with appetizers, main courses, mocktails and desserts for your perfect celebration at our Bengaluru location."
      />
      <Navigation onBookTableClick={() => handleBookTableClick()} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 px-4 bg-gradient-primary">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-lg text-foreground">📍</span>
              <span className="text-lg text-foreground font-medium">Bengaluru</span>
            </div>
            <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-primary mb-4">
              Celebration Packages
            </h1>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Discover our curated packages and extensive menu options for your perfect celebration. 
              From intimate gatherings to grand celebrations, we have something for every story.
            </p>
          </div>
        </section>

        <section className="pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className={`bg-card border-border hover:shadow-luxury transition-smooth relative overflow-hidden my-4 sm:my-6 ${pkg.isHighlight ? 'ring-2 ring-primary' : ''}`}>
                  {pkg.isHighlight && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />
                  )}
                  <CardHeader className="text-center pb-4 px-4 sm:px-6">
                    <CardTitle className="font-cinzel text-lg sm:text-xl lg:text-2xl text-primary mb-2 sm:mb-3">
                      {pkg.name}
                    </CardTitle>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary font-cinzel">
                      {pkg.price}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 px-4 sm:px-6">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start">
                        <Wine className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm sm:text-base">Drinks</p>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{pkg.drinks}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Utensils className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm sm:text-base">Appetizers</p>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{pkg.appetizers}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ChefHat className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm sm:text-base">Main Course</p>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{pkg.mainCourse}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Cookie className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm sm:text-base">Desserts</p>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{pkg.desserts}</p>
                        </div>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleBookTableClick()}
                      className="w-full mt-6 bg-gradient-gold text-charcoal font-semibold hover:shadow-luxury transition-smooth text-sm sm:text-base py-3 sm:py-4 rounded-xl"
                    >
                      Book This Package
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Menu Section */}
        <section className="py-20 px-4 bg-card">
          <div className="container mx-auto">
            <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-3xl font-bold text-primary text-center mb-4 sm:mb-6">
              Packages Menu
            </h2>
            <p className="text-center text-foreground mb-12 sm:mb-16 lg:mb-20 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-2">
              Explore our extensive menu of appetizers, main courses, mocktails and desserts
            </p>
            <h3 className="font-cinzel text-2xl font-bold text-primary text-center mb-12">
              Appetizers
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vegetarian */}
              <Card className="bg-background border-border hover:shadow-luxury transition-smooth">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Leaf className="w-6 h-6 text-primary mr-2" />
                    <CardTitle className="font-cinzel text-2xl text-primary">
                      Vegetarian
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {vegetarianAppetizers.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Non-Vegetarian */}
              <Card className="bg-background border-border hover:shadow-luxury transition-smooth">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <ChefHat className="w-6 h-6 text-foreground mr-2" />
                    <CardTitle className="font-cinzel text-2xl text-foreground">
                      Non-Vegetarian
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {nonVegetarianAppetizers.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Course Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="font-cinzel text-2xl font-bold text-primary text-center mb-12">
              Main Course
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vegetarian */}
              <Card className="bg-card border-border hover:shadow-luxury transition-smooth">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Leaf className="w-6 h-6 text-primary mr-2" />
                    <CardTitle className="font-cinzel text-2xl text-primary">
                      Vegetarian
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {vegetarianMains.map((item, index) => (
                      <div key={index} className="flex items-center border-b border-border/30 pb-2">
                        <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Non-Vegetarian */}
              <Card className="bg-card border-border hover:shadow-luxury transition-smooth">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <ChefHat className="w-6 h-6 text-foreground mr-2" />
                    <CardTitle className="font-cinzel text-2xl text-foreground">
                      Non-Vegetarian
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {nonVegetarianMains.map((item, index) => (
                      <div key={index} className="flex items-center border-b border-border/30 pb-2">
                        <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mocktails & Desserts Section */}
        <section className="py-20 px-4 bg-card">
          <div className="container mx-auto">
            <h2 className="font-cinzel text-2xl font-bold text-primary text-center mb-12">
              Mocktails & Desserts
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mocktails */}
              <Card className="bg-background border-border hover:shadow-luxury transition-smooth">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Wine className="w-6 h-6 text-primary mr-2" />
                    <CardTitle className="font-cinzel text-2xl text-primary">
                      Mocktails
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {mocktails.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Desserts */}
              <Card className="bg-background border-border hover:shadow-luxury transition-smooth">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Cookie className="w-6 h-6 text-foreground mr-2" />
                    <CardTitle className="font-cinzel text-2xl text-foreground">
                      Desserts (Choose Any Two)
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {desserts.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact for Packages */}
        <section className="py-20 px-4 bg-gradient-primary">
          <div className="container mx-auto text-center">
            <h2 className="font-cinzel text-4xl font-bold text-primary mb-6">
              Ready to Plan Your Event?
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Contact our event specialists to customize your perfect package and create 
              an unforgettable experience for your guests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleBookTableClick()}
                className="bg-gradient-gold text-charcoal font-semibold px-8 py-4 hover:shadow-luxury transition-smooth"
              >
                Book Event Consultation
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-4 transition-smooth"
              >
                Get Custom Quote
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

export default Packages;


