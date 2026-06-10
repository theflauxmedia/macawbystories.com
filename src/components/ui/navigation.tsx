import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  onBookTableClick?: () => void;
}

export const Navigation = ({ onBookTableClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/', type: 'route' },
    { label: 'About Us', href: '/about-us', type: 'route' },
    { label: 'Locations', href: '/locations', type: 'route' },
    { label: 'Gallery', href: '/gallery', type: 'route' },
    { label: 'Packages', href: '/packages', type: 'dropdown', options: [
      { label: 'Bengaluru', href: '/packages' },
      { label: 'Chennai', href: '/chennai-packages' }
    ]},
    { label: 'Media', href: '/media', type: 'route' },
    { label: 'Contact', href: '/contact', type: 'route' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-lg shadow-elegant border-b border-border' 
        : 'lg:bg-transparent bg-background/95 backdrop-blur-lg shadow-elegant border-b border-border lg:border-none lg:shadow-none'
    }`}>
      <div className="container mx-auto px-2 sm:px-4 lg:px-8 max-w-full">
        <div className="flex items-center justify-between h-16 sm:h-20 w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center min-w-0 flex-shrink-0">
            <img 
              src="/lovable-uploads/aeb86edc-b26e-4db4-a52f-ce91f9aa64d1.png" 
              alt="Macaw by Stories Logo" 
              width={64}
              height={64}
              decoding="async"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navItems.map((item) => (
              item.type === 'route' ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium text-sm lg:text-base whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ) : item.type === 'dropdown' ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <button className="text-foreground hover:text-primary transition-smooth font-medium text-sm lg:text-base whitespace-nowrap flex items-center">
                      {item.label}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="min-w-[180px]">
                    {item.options?.map((option) => (
                      <DropdownMenuItem key={option.label} asChild>
                        <Link to={option.href} className="w-full">
                          {option.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium text-sm lg:text-base whitespace-nowrap"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          {/* Book Table Button */}
          <div className="hidden lg:block flex-shrink-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  className="bg-gradient-gold text-charcoal font-semibold hover:shadow-luxury transition-smooth text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3"
                >
                  Book Table
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[220px]">
                <DropdownMenuItem asChild>
                  <a href="https://webbook.wegsoft.com/Q8W7E6R5T4Y3U2I1O0" target="_blank" rel="noopener noreferrer" className="w-full">
                    Reserve Chennai
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://webbook.wegsoft.com/H7G6F5E4D3C2B1A0Z9Y8" target="_blank" rel="noopener noreferrer" className="w-full">
                    Reserve Bengaluru
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-luxury max-w-full overflow-hidden z-50">
            <div className="flex flex-col space-y-1 p-4 sm:p-6 max-w-full bg-background/20 backdrop-blur-sm">
              {navItems.map((item) => (
                item.type === 'route' ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-foreground hover:text-primary hover:bg-primary/10 transition-smooth font-medium text-lg py-3 px-4 rounded-lg block truncate backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : item.type === 'dropdown' ? (
                  <div key={item.label} className="space-y-1">
                    <div className="text-foreground font-medium text-lg py-3 px-4 text-primary">
                      {item.label}
                    </div>
                    {item.options?.map((option) => (
                      <Link
                        key={option.label}
                        to={option.href}
                        className="text-foreground hover:text-primary hover:bg-primary/10 transition-smooth font-medium text-base py-2 px-8 rounded-lg block truncate backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {option.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-foreground hover:text-primary hover:bg-primary/10 transition-smooth font-medium text-lg py-3 px-4 rounded-lg block truncate backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
              <div className="grid grid-cols-1 gap-2 mt-4">
                <a
                  href="https://webbook.wegsoft.com/Q8W7E6R5T4Y3U2I1O0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-gold text-center text-charcoal font-semibold hover:shadow-luxury transition-smooth w-full text-lg py-4 rounded-lg backdrop-blur-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Reserve Chennai
                </a>
                <a
                  href="https://webbook.wegsoft.com/H7G6F5E4D3C2B1A0Z9Y8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-gold text-center text-charcoal font-semibold hover:shadow-luxury transition-smooth w-full text-lg py-4 rounded-lg backdrop-blur-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Reserve Bengaluru
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};