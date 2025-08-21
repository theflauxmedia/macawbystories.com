import { useEffect, useRef } from 'react';
import { Button } from './button';
import { ExternalLink } from 'lucide-react';

export const MenuPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.menu-item');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const menuCategories = [
    {
      title: 'Signature Cocktails',
      description: 'Handcrafted libations inspired by tropical adventures',
      items: [
        { name: 'Macaw\'s Paradise', description: 'Rum, passion fruit, coconut, lime', price: '₹850' },
        { name: 'Golden Feather', description: 'Whiskey, mango, cardamom, honey', price: '₹750' },
        { name: 'Tropical Storm', description: 'Gin, elderflower, pineapple, mint', price: '₹700' },
      ]
    },
    {
      title: 'Small Bites',
      description: 'Exquisite appetizers to begin your culinary journey',
      items: [
        { name: 'Truffle Arancini', description: 'Crispy risotto balls with black truffle', price: '₹650' },
        { name: 'Tandoori Prawns', description: 'Spiced prawns with mint chutney', price: '₹950' },
        { name: 'Duck Bao', description: 'Steamed buns with glazed duck', price: '₹750' },
      ]
    },
    {
      title: 'Signature Mains',
      description: 'Our chef\'s masterpieces that tell a story',
      items: [
        { name: 'Macaw\'s Catch', description: 'Pan-seared fish with tropical salsa', price: '₹1,650' },
        { name: 'Forest Floor Lamb', description: 'Herb-crusted lamb with wild mushrooms', price: '₹1,850' },
        { name: 'Rainforest Risotto', description: 'Exotic vegetables with coconut cream', price: '₹1,250' },
      ]
    }
  ];

  return (
    <section id="menu" ref={sectionRef} className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-primary mb-6">
            Culinary Adventures
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Every dish tells a story, every flavor transports you to a different world. 
            Discover our carefully curated menu of multicuisine delights.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category, index) => (
            <div key={category.title} className={`menu-item opacity-0`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-center mb-8">
                <h3 className="font-cinzel text-3xl font-bold text-primary mb-3">
                  {category.title}
                </h3>
                <p className="text-foreground italic">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-background rounded-2xl p-6 shadow-elegant hover:shadow-luxury transition-smooth hover:transform hover:scale-105"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-lg text-primary">
                        {item.name}
                      </h4>
                      <span className="text-primary font-bold">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-3xl p-8 shadow-luxury">
            <h3 className="font-cinzel text-2xl font-bold text-primary mb-4">
              Explore Our Complete Menu
            </h3>
            <p className="text-foreground mb-6">
              Discover our full range of multicuisine delights, seasonal specials, 
              and extensive beverage collection.
            </p>
            <Button
              size="lg"
              className="bg-gradient-gold text-charcoal font-semibold hover:shadow-luxury transition-smooth"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View Full Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};