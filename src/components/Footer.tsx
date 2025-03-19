
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Dumbbell
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-900 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-6">
              <Dumbbell size={28} className="text-orange-500 mr-2" />
              <span className="text-2xl font-bold text-white">ELITE <span className="text-orange-500">FITNESS</span></span>
            </div>
            <p className="mb-6">
              Elite Fitness is a premium gym providing state-of-the-art equipment, expert trainers, and a supportive community to help you achieve your fitness goals.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/equipment" className="hover:text-orange-500 transition-colors">Equipment</Link>
              </li>
              <li>
                <Link to="/classes" className="hover:text-orange-500 transition-colors">Classes</Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-orange-500 transition-colors">Membership</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-orange-500 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 text-orange-500" />
                <div>
                  <span className="block font-medium text-white">Monday - Friday</span>
                  <span>5:00 AM - 10:00 PM</span>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 text-orange-500" />
                <div>
                  <span className="block font-medium text-white">Saturday</span>
                  <span>6:00 AM - 8:00 PM</span>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 text-orange-500" />
                <div>
                  <span className="block font-medium text-white">Sunday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-orange-500" />
                <span>123 Fitness Street, Cityville, State 12345</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-orange-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-orange-500" />
                <span>info@elitefitness.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 py-8 text-center">
          <p>© {currentYear} Elite Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
