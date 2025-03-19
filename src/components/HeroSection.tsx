
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    console.error('Video failed to load');
    setVideoError(true);
  };

  const scrollToContent = () => {
    const featuredSection = document.getElementById('featured-dishes');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      {!videoError ? (
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={handleVideoError}
        >
          <source src="https://cdn.pixabay.com/vimeo/563974132/71603.mp4?width=1280&hash=ff77d25c2ef1b77b3bb2eeec7a1fd66e3f19f7bb" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="absolute inset-0 w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')" }}>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>

      {/* Content */}
      <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-3 py-1 rounded-full bg-gold-400/20 backdrop-blur-sm border border-gold-400/30"
          >
            <p className="text-xs md:text-sm font-medium uppercase tracking-wider text-gold-300">
              Experience the Extraordinary
            </p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-cream-50 text-shadow-lg mb-6"
          >
            FOOD <span className="text-gold-400">FEAST</span>
            <span className="block text-2xl md:text-3xl mt-2 font-light">A Paradise for Meat Lovers</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-cream-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90"
          >
            Indulge in a culinary journey featuring the finest premium quality non-vegetarian delicacies crafted by our master chefs.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/menu">
              <Button 
                size="lg"
                className="bg-burgundy-500 hover:bg-burgundy-400 text-cream-50 rounded-md px-6 py-6 text-base"
              >
                Explore Menu
              </Button>
            </Link>
            <Link to="/reservations">
              <Button 
                variant="outline" 
                size="lg"
                className="border-gold-400 text-gold-400 hover:bg-gold-400/10 rounded-md px-6 py-6 text-base"
              >
                Reserve a Table
              </Button>
            </Link>
            <Link to="/order">
              <Button 
                variant="ghost" 
                size="lg"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-cream-50 rounded-md px-6 py-6 text-base"
              >
                Order Online
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Down Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream-100 hover:text-gold-400 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
