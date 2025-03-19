
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=2072&auto=format&fit=crop",
    caption: "Sizzling BBQ Platter"
  },
  {
    url: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
    caption: "Ribeye Steak"
  },
  {
    url: "https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?q=80&w=2070&auto=format&fit=crop",
    caption: "Luxury Interior"
  },
  {
    url: "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?q=80&w=2070&auto=format&fit=crop",
    caption: "Seafood Delight"
  },
  {
    url: "https://images.unsplash.com/photo-1655130740072-5d12a4422888?q=80&w=2029&auto=format&fit=crop",
    caption: "Private Dining"
  },
  {
    url: "https://images.unsplash.com/photo-1600891964599-f61f2a967dd0?q=80&w=2070&auto=format&fit=crop",
    caption: "Chef's Special Preparation"
  }
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  return (
    <section ref={ref} className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full bg-burgundy-100 text-burgundy-800 text-xs font-medium uppercase tracking-wider mb-4"
          >
            Visual Journey
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title text-center after:left-1/2 after:-translate-x-1/2"
          >
            A Feast for the Eyes
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            Explore our gallery showcasing our exquisite dishes, elegant ambiance, and memorable moments.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.caption} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <p className="text-cream-50 font-medium">{image.caption}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-10"
        >
          <Link to="/gallery">
            <Button 
              variant="default" 
              size="lg"
              className="bg-burgundy-500 hover:bg-burgundy-400 text-cream-50 rounded-md"
            >
              View Full Gallery <ChevronRight className="ml-1" size={16} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
