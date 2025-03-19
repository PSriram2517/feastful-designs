
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Facebook, Instagram, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Online Order', path: '/order' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-charcoal-900/90 backdrop-blur-md py-2 shadow-md' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/"
          className="relative z-50 flex items-center"
        >
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-serif font-bold text-cream-100 transition-colors">
              FOOD <span className="text-gold-400">FEAST</span>
            </span>
            <span className="text-xs uppercase tracking-widest text-cream-300 opacity-80">Premium Dining Experience</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'nav-link text-sm text-cream-100',
                location.pathname === link.path && 'text-gold-400 after:w-full'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream-200 hover:text-gold-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream-200 hover:text-gold-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream-200 hover:text-gold-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
          
          <a href="tel:+15551234567">
            <Button 
              variant="outline" 
              size="sm"
              className="bg-burgundy-500 text-cream-100 border-burgundy-400 hover:bg-burgundy-400 hover:text-cream-50 flex items-center gap-2"
            >
              <Phone size={14} />
              <span>Call Now</span>
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 lg:hidden text-cream-100 hover:text-gold-400 transition-colors"
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div 
          className={cn(
            'fixed inset-0 flex flex-col bg-charcoal-900/98 backdrop-blur-md z-40 transition-all duration-300 ease-in-out lg:hidden',
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
        >
          <div className="h-20"></div> {/* Spacer for the logo */}
          <div className="flex flex-col px-6 py-8 space-y-8 overflow-y-auto">
            <nav className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'text-lg font-medium text-cream-100 hover:text-gold-400 transition-colors',
                    location.pathname === link.path && 'text-gold-400'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pt-6 border-t border-cream-100/10">
              <div className="flex items-center justify-center space-x-6 mb-6">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cream-200 hover:text-gold-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cream-200 hover:text-gold-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cream-200 hover:text-gold-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
              </div>
              
              <a href="tel:+15551234567" className="block">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full bg-burgundy-500 text-cream-100 border-burgundy-400 hover:bg-burgundy-400 hover:text-cream-50 flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  <span>Call Now: (555) 123-4567</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
