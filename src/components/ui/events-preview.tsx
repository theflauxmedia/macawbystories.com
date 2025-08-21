import { useState, useEffect } from 'react';
import { Button } from './button';
import { Card } from './card';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EventsPreview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const upcomingEvents = [
    {
      id: 1,
      title: 'Saturday Night Fever',
      location: 'Bengaluru',
      date: '2024-01-20',
      time: '8:00 PM',
      description: 'Dance the night away with DJ sets and signature cocktails',
      image: '/lovable-uploads/922fb99c-5be6-40a5-92c6-79e56d2f406a.png',
      category: 'Party Night',
    },
    {
      id: 2,
      title: 'Sunset Sessions',
      location: 'Chennai',
      date: '2024-01-21',
      time: '6:00 PM',
      description: 'Acoustic music with stunning sunset views',
      image: '/lovable-uploads/9cf9f6fb-e16d-46f9-b2d3-654b8c26e73e.png',
      category: 'Live Music',
    },
    {
      id: 3,
      title: 'Corporate Mixer',
      location: 'Bengaluru',
      date: '2024-01-25',
      time: '7:00 PM',
      description: 'Network with professionals over premium drinks',
      image: '/lovable-uploads/1da2dad0-5f5a-4a7c-a762-c371ea2063a8.png',
      category: 'Corporate',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % upcomingEvents.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 lg:mb-8">
            Upcoming Events
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Join us for unforgettable experiences at both our locations
          </p>
        </div>

        {/* Events Carousel */}
        <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-luxury mb-8 sm:mb-12 lg:mb-16">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {upcomingEvents.map((event) => (
              <div key={event.id} className="w-full flex-shrink-0">
                <Card className="relative h-80 sm:h-96 lg:h-[500px] overflow-hidden bg-card border-0">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 text-white">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <span className="bg-primary text-charcoal px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-semibold">
                        {event.category}
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base">
                        {event.location}
                      </span>
                    </div>
                    
                    <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">
                      {event.title}
                    </h3>
                    
                    <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8 text-white/90 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm sm:text-base text-white/80 mb-6 sm:mb-8">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    
                    <Button className="bg-gradient-gold text-charcoal hover:shadow-luxury transition-smooth text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl">
                      Get Tickets
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
            {upcomingEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-smooth ${
                  index === currentSlide 
                    ? 'bg-primary' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Packages CTA */}
        <div className="text-center">
          <Link to="/packages">
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary bg-primary/10 hover:bg-primary hover:text-charcoal font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 transition-smooth text-base sm:text-lg lg:text-xl rounded-xl"
            >
              View Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};