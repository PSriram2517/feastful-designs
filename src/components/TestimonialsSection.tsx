
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Member since 2021',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    quote: 'Joining Elite Fitness has completely transformed my life. I've lost 30 pounds and gained so much confidence. The trainers are supportive and the facilities are top-notch!',
    rating: 5,
    beforeImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1609899464726-527cd0356f01?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Member since 2022',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    quote: 'The atmosphere at Elite Fitness is unlike any gym I've been to. Everyone is focused, the equipment is always clean and available, and the 24/7 access fits perfectly with my busy schedule.',
    rating: 5,
    beforeImage: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Jennifer Lee',
    role: 'Member since 2020',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop',
    quote: 'As someone who was intimidated by gyms, Elite Fitness made me feel welcome from day one. The trainers create personalized programs that have helped me build strength I never thought possible.',
    rating: 4,
    beforeImage: 'https://images.unsplash.com/photo-1506825569323-8360e1b2e1b7?q=80&w=1935&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=2070&auto=format&fit=crop'
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);
  
  const currentTestimonial = testimonials[currentIndex];
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    setShowBeforeAfter(false);
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    setShowBeforeAfter(false);
  };
  
  return (
    <section className="py-20 bg-zinc-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="flex items-center justify-center space-x-2">
              <MessageCircle className="h-6 w-6 text-orange-500" />
              <span className="text-sm font-medium uppercase tracking-wider text-orange-500">Member Stories</span>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-gray-400"
          >
            See how Elite Fitness has transformed the lives of our members.
          </motion.p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="testimonial-card relative"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="relative">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto border-2 border-purple-500"
                  />
                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < currentTestimonial.rating ? 'text-orange-500 fill-orange-500' : 'text-gray-500'}`}
                      />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mt-3">{currentTestimonial.name}</h3>
                  <p className="text-gray-400 text-center text-sm">{currentTestimonial.role}</p>
                </div>
                
                <div className="flex justify-center mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                    onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                  >
                    {showBeforeAfter ? 'Hide' : 'Show'} Transformation
                  </Button>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="mb-6">
                  <blockquote className="text-xl text-gray-200 italic">
                    "{currentTestimonial.quote}"
                  </blockquote>
                </div>
                
                {showBeforeAfter && (
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="relative">
                      <div className="absolute top-0 left-0 bg-purple-600 text-white text-xs font-bold px-2 py-1">
                        BEFORE
                      </div>
                      <img
                        src={currentTestimonial.beforeImage}
                        alt="Before transformation"
                        className="w-full h-48 object-cover rounded-md"
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute top-0 left-0 bg-orange-500 text-white text-xs font-bold px-2 py-1">
                        AFTER
                      </div>
                      <img
                        src={currentTestimonial.afterImage}
                        alt="After transformation"
                        className="w-full h-48 object-cover rounded-md"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-gray-600 text-gray-400 hover:text-white"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-gray-600 text-gray-400 hover:text-white"
                onClick={handleNext}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
