
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const GalleryPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryCategories = [
    { id: 'all', name: 'All' },
    { id: 'food', name: 'Food' },
    { id: 'interior', name: 'Restaurant' },
    { id: 'events', name: 'Events' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=2072&auto=format&fit=crop",
      caption: "Sizzling BBQ Platter",
      category: 'food'
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
      caption: "Ribeye Steak",
      category: 'food'
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?q=80&w=2070&auto=format&fit=crop",
      caption: "Luxury Interior",
      category: 'interior'
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?q=80&w=2070&auto=format&fit=crop",
      caption: "Seafood Delight",
      category: 'food'
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1655130740072-5d12a4422888?q=80&w=2029&auto=format&fit=crop",
      caption: "Private Dining",
      category: 'interior'
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1600891964599-f61f2a967dd0?q=80&w=2070&auto=format&fit=crop",
      caption: "Chef's Special Preparation",
      category: 'food'
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1515669097368-22e68427d265?q=80&w=2070&auto=format&fit=crop",
      caption: "Wine Selection",
      category: 'interior'
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=2071&auto=format&fit=crop",
      caption: "Outdoor Patio",
      category: 'interior'
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop",
      caption: "Grilled Perfection",
      category: 'food'
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
      caption: "Private Event Celebration",
      category: 'events'
    },
    {
      id: 11, 
      url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop",
      caption: "Corporate Function",
      category: 'events'
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1519690889869-e705e59f72e1?q=80&w=2070&auto=format&fit=crop",
      caption: "Celebration Dinner",
      category: 'events'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      
      {/* Hero section */}
      <div className="bg-charcoal-900 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-cream-100 mb-4">Our Gallery</h1>
            <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-cream-300 max-w-2xl mx-auto">
              Explore the visual feast of our culinary masterpieces, elegant spaces, and memorable moments.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Gallery section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category.id 
                    ? 'bg-burgundy-500 text-cream-50' 
                    : 'bg-cream-200 text-charcoal-800 hover:bg-cream-300'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredImages.map((image) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={image.id}
                className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-full">
                  <img 
                    src={image.url} 
                    alt={image.caption} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-cream-50 font-medium">{image.caption}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Gallery Carousel */}
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal-900 mb-8 text-center">
              Featured Highlights
            </h2>
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {galleryImages.slice(0, 6).map((image) => (
                  <CarouselItem key={image.id} className="sm:basis-1/2 md:basis-1/3">
                    <div className="p-2">
                      <div className="overflow-hidden rounded-lg shadow-lg">
                        <img 
                          src={image.url} 
                          alt={image.caption} 
                          className="w-full aspect-square object-cover"
                        />
                        <div className="p-3 bg-cream-100">
                          <h4 className="font-medium text-charcoal-800">{image.caption}</h4>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-4 md:-left-12 bg-burgundy-500 text-cream-50 hover:bg-burgundy-400" />
              <CarouselNext className="absolute -right-4 md:-right-12 bg-burgundy-500 text-cream-50 hover:bg-burgundy-400" />
            </Carousel>
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Lightbox */}
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-charcoal-900/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.url} 
              alt={selectedImage.caption} 
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal-900/90 to-transparent">
              <h3 className="text-xl text-cream-50 font-medium">{selectedImage.caption}</h3>
            </div>
            <button 
              className="absolute top-4 right-4 text-cream-50 bg-charcoal-900/50 rounded-full p-2 hover:bg-charcoal-900"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default GalleryPage;
