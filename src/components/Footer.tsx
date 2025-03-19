
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter,
  ChevronRight 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-charcoal-900 text-cream-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-cream-100">
                  FOOD <span className="text-gold-400">FEAST</span>
                </span>
                <span className="text-xs uppercase tracking-widest text-cream-300 opacity-80">Premium Dining Experience</span>
              </div>
            </Link>
            
            <p className="text-cream-300 mb-6">
              Experience the pinnacle of non-vegetarian cuisine in an elegant ambiance with exceptional service.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream-400 hover:text-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream-400 hover:text-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream-400 hover:text-gold-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-cream-50">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Menu', 'About Us', 'Gallery', 'Reservations', 'Online Order', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item === 'Home' ? '' : item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-cream-300 hover:text-gold-400 transition-colors flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2 text-gold-400" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-cream-50">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-gold-400 flex-shrink-0 mt-1" />
                <p className="text-cream-300">
                  123 Gourmet Avenue<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-gold-400 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-cream-300 hover:text-gold-400 transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-gold-400 flex-shrink-0" />
                <a href="mailto:info@foodfeast.com" className="text-cream-300 hover:text-gold-400 transition-colors">
                  info@foodfeast.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-cream-50">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock size={18} className="mr-3 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-cream-300">Monday - Friday</p>
                  <p className="text-cream-100">12:00 PM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-3 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-cream-300">Saturday - Sunday</p>
                  <p className="text-cream-100">12:00 PM - 11:00 PM</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-6 p-4 rounded-lg bg-burgundy-500/20 border border-burgundy-500/30">
              <p className="text-cream-100 text-sm">
                <span className="font-semibold">Holiday Hours:</span> May vary during holidays and special occasions. Please call to confirm.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-cream-900">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} FOOD FEAST. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-cream-400 hover:text-gold-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-cream-400 hover:text-gold-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-cream-400 hover:text-gold-400 text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
