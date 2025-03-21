
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Dumbbell, Flame, Award } from 'lucide-react';

const HeroSection = () => {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    console.error('Video failed to load');
    setVideoError(true);
  };

  const scrollToContent = () => {
    const featuredSection = document.getElementById('equipment-showcase');
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
          <source src="https://cdn.pixabay.com/vimeo/190432916/8587.mp4?width=1280&hash=926e40f9e87e42ec9e7e2af62fdcd40386d1ad49" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="absolute inset-0 w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')" }}>
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
            className="inline-block mb-4 px-3 py-1 rounded-full bg-purple-600/20 backdrop-blur-sm border border-purple-600/30"
          >
            <p className="text-xs md:text-sm font-medium uppercase tracking-wider text-purple-300">
              Transform Your Lifestyle
            </p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-shadow-lg mb-6"
          >
            ELITE <span className="text-orange-500">FITNESS</span>
            <span className="block text-2xl md:text-3xl mt-2 font-light">Transform Your Body, Transform Your Life</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90"
          >
            Join the ultimate fitness experience with state-of-the-art equipment, expert trainers, and a supportive community to help you achieve your goals.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/membership">
              <Button 
                size="lg"
                className="bg-purple-600 hover:bg-purple-500 text-white rounded-md px-6 py-6 text-base"
              >
                <Flame className="mr-2 h-5 w-5" />
                Join Now
              </Button>
            </Link>
            <Link to="/equipment">
              <Button 
                variant="outline" 
                size="lg"
                className="border-orange-500 text-orange-500 hover:bg-orange-500/10 rounded-md px-6 py-6 text-base"
              >
                <Dumbbell className="mr-2 h-5 w-5" />
                Explore Equipment
              </Button>
            </Link>
            <Link to="/classes">
              <Button 
                variant="ghost" 
                size="lg"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-md px-6 py-6 text-base"
              >
                <Award className="mr-2 h-5 w-5" />
                View Classes
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-orange-500 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
