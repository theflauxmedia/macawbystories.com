import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-3 mb-6">
              <img 
                src="/lovable-uploads/aeb86edc-b26e-4db4-a52f-ce91f9aa64d1.png" 
                alt="Macaw by Stories Logo" 
                className="w-12 h-12 sm:w-14 sm:h-14"
              />
              <div className="text-gold font-cinzel font-bold text-lg sm:text-xl">
                Macaw by Stories
              </div>
            </div>
            <p className="text-cream/80 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Where vibrant stories unfold and tropical luxury meets urban sophistication. 
              Experience the extraordinary at our rooftop destinations.
            </p>
            <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
              <a 
                href="#" 
                className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-gold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="/#story" className="text-cream/80 hover:text-gold transition-smooth text-sm sm:text-base">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/#menu" className="text-cream/80 hover:text-gold transition-smooth text-sm sm:text-base">
                  Menu
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-cream/80 hover:text-gold transition-smooth text-sm sm:text-base">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/packages" className="text-cream/80 hover:text-gold transition-smooth text-sm sm:text-base">
                  Packages
                </a>
              </li>
              <li>
                <a href="/contact" className="text-cream/80 hover:text-gold transition-smooth text-sm sm:text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Bangalore Location */}
          <div className="text-center sm:text-left">
            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-gold mb-4 sm:mb-6 flex items-center justify-center sm:justify-start">
              <MapPin className="w-5 h-5 mr-2" />
              Bangalore
            </h3>
            <div className="space-y-3 sm:space-y-4 text-cream/80">
              <p className="text-xs sm:text-sm leading-relaxed">
                2, No 17/17, Deepa Plaza, 24th Main, 1st Phase, JP Nagar<br />
                Bengaluru, Bengaluru Urban, Karnataka<br />
                560078
              </p>
              <p className="text-xs sm:text-sm leading-relaxed">
                GSTIN: 29AAIFO2564M1ZO
              </p>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+918068507673" className="text-xs sm:text-sm hover:text-gold transition-smooth">
                  91‑8068507673
                </a>
              </div>
              
              <div className="flex items-start justify-center sm:justify-start space-x-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div className="text-xs sm:text-sm">
                  <p>Daily: 12:00 PM - 1:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chennai Location */}
          <div className="text-center sm:text-left">
            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-gold mb-4 sm:mb-6 flex items-center justify-center sm:justify-start">
              <MapPin className="w-5 h-5 mr-2" />
              Chennai
            </h3>
            <div className="space-y-3 sm:space-y-4 text-cream/80">
              <p className="text-xs sm:text-sm leading-relaxed">
                Ground Floor, Kailash OMR<br />
                Rajiv Gandhi Salai, Old Mahabalipuram Road, Sholinganallur<br />
                Chennai, Tamil Nadu, 600119
              </p>
              <p className="text-xs sm:text-sm leading-relaxed">
                GSTIN: 33AAVFT5910F1Z0
              </p>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+918045883769" className="text-xs sm:text-sm hover:text-gold transition-smooth">
                  +91‑8045883769
                </a>
              </div>
              
              <div className="flex items-start justify-center sm:justify-start space-x-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div className="text-xs sm:text-sm">
                  <p>Daily: 12:00 PM - 11:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gold/20 mt-12 sm:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-cream/60 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Macaw by Stories. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-cream/60 hover:text-gold transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-smooth">
                Careers
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Credits: TheFlauxMedia */}
      <div className="bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <a
            href="https://theflauxmedia.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white"
          >
            <img
              src="/oth/theflauxmedia.png"
              alt="TheFlauxMedia logo"
              className="h-5 w-auto brightness-0 invert"
            />
             <span className="font-bold text-xs sm:text-sm"> Website Designed and Developed by TheFlauxMedia</span>
          </a>
        </div>
      </div>
    </footer>
  );
};