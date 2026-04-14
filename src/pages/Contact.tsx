import { useState } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { BookingModal } from '@/components/ui/booking-modal';
import { PageHead } from '@/components/seo/PageHead';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Navigation as NavigationIcon } from 'lucide-react';

const Contact = () => {
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
      city: 'Bangalore',
      name: 'Macaw Bangalore',
      address: 'Hosur Service Road, Singasandra, Bangalore - 560068',
      phone: '91‑8068507673',
      hours: {
        weekdays: '12:00 PM - 11:30 PM',
        weekends: '12:00 PM - 12:00 AM',
      },
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9665!2d77.6169!3d12.9116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzQxLjgiTiA3N8KwMzcnMDAuOCJF!5e0!3m2!1sen!2sin!4v1234567890",
    },
    {
      city: 'Chennai',
      name: 'Macaw Chennai',
      address: 'OMR Road, Thoraipakkam, Chennai - 600097',
      phone: '+91‑8045883769',
      hours: {
        weekdays: '12:00 PM - 11:30 PM',
        weekends: '12:00 PM - 12:00 AM',
      },
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9665!2d80.2369!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA4MMKwMTQnMTIuOCJF!5e0!3m2!1sen!2sin!4v1234567890",
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const base = 'https://wa.me/';
    const number = formData.location === 'bangalore' ? '918068507673' : '918045883769';
    const text = encodeURIComponent(
      `Hello Macaw ${formData.location === 'bangalore' ? 'Bangalore' : 'Chennai'}!\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Subject: ${formData.subject}\n` +
      `Message: ${formData.message}`
    );
    window.open(`${base}${number}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Contact & Reservations | Macaw by Stories Bangalore (AECS Layout) & Chennai"
        description="Book a table at Macaw by Stories—rooftop dining, cocktails, live music and nightlife in Bangalore (AECS Layout, near Whitefield) and Chennai. Contact us for reservations, private dining, celebrations, and corporate events."
        keywords="book table restaurant bangalore, macaw by stories bangalore, macaw aecs layout, macaw restaurant bangalore, rooftop bar bangalore, fine dining near whitefield bangalore, private dining bangalore, corporate party venue bangalore, date night restaurant bangalore, restaurants near me, fine dining near me"
        canonicalUrl="https://macawbystories.com/contact"
      />
      <Navigation onBookTableClick={() => handleBookTableClick()} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-primary">
          <div className="container mx-auto text-center">
            <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-primary mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Get in touch with us for reservations, events, or any questions. 
              We’re here to help you book the perfect experience—date nights, birthday celebrations, private dining, and corporate dinners.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="font-cinzel text-2xl font-bold text-primary mb-8">
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-foreground">Bangalore: 91‑8068507673</p>
                      <p className="text-foreground">Chennai: +91‑8045883769</p>
                    </div>
                  </div>
                  {/* Emails removed */}
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                      <p className="text-foreground">Mon-Thu: 12:00 PM - 11:30 PM</p>
                      <p className="text-foreground">Fri-Sun: 12:00 PM - 12:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="font-cinzel text-2xl text-primary">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-foreground">
                    Fill out the form below and we'll get back to you shortly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select Location</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="chennai">Chennai</option>
                      </select>
                    </div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-gold text-charcoal font-semibold hover:shadow-luxury transition-smooth"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-20 px-4 bg-card">
          <div className="container mx-auto">
            <h2 className="font-cinzel text-2xl font-bold text-primary text-center mb-12">
              Our Locations
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {locations.map((location, index) => (
                <Card key={index} className="bg-background border-border overflow-hidden">
                  <CardHeader>
                    <CardTitle className="font-cinzel text-2xl text-primary flex items-center">
                      <MapPin className="w-6 h-6 mr-2" />
                      {location.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <NavigationIcon className="w-5 h-5 text-primary mt-1" />
                        <p className="text-foreground">{location.address}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <p className="text-foreground">{location.phone}</p>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="text-foreground">Mon-Thu: {location.hours.weekdays}</p>
                          <p className="text-foreground">Fri-Sun: {location.hours.weekends}</p>
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleBookTableClick(location.city.toLowerCase())}
                      className="w-full bg-gradient-gold text-charcoal font-semibold hover:shadow-luxury transition-smooth"
                    >
                      Book a Table
                    </Button>
                  </CardContent>
                </Card>
              ))}
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

export default Contact;