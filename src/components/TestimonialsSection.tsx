
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "The Grilled Lamb Chops were absolutely divine! The meat was so tender it practically melted in my mouth. FOOD FEAST has truly mastered the art of non-vegetarian cuisine.",
    name: "Emily Rodriguez",
    title: "Food Critic",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 2,
    text: "I've dined at restaurants all over the world, and FOOD FEAST stands among the best. Their attention to detail, from the meat selection to the perfect cooking technique, is unparalleled.",
    name: "Michael Chen",
    title: "Executive Chef",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "The seafood platter was fresh and perfectly prepared. Each visit to FOOD FEAST is a new culinary adventure that keeps us coming back. Worth every penny!",
    name: "Sophia Williams",
    title: "Regular Customer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop"
  }
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section 
      ref={ref} 
      className="py-24 md:py-32 bg-gradient-to-b from-burgundy-500/5 to-burgundy-500/10"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full bg-burgundy-100 text-burgundy-800 text-xs font-medium uppercase tracking-wider mb-4"
          >
            Guest Experiences
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title text-center after:left-1/2 after:-translate-x-1/2"
          >
            What Our Guests Say
          </motion.h2>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white/50 backdrop-blur-sm rounded-xl p-8 shadow-lg"
                  >
                    <div className="flex justify-center mb-6">
                      <Quote className="text-gold-400" size={40} />
                    </div>
                    
                    <blockquote className="text-lg md:text-xl text-center italic text-charcoal-800 mb-8">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold-400 mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-burgundy-600">{testimonial.name}</p>
                        <p className="text-sm text-charcoal-500">{testimonial.title}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center mt-8 gap-2"
          >
            <button 
              onClick={prevTestimonial} 
              className="w-10 h-10 rounded-full flex items-center justify-center border border-burgundy-300 text-burgundy-500 hover:bg-burgundy-500 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === activeIndex ? 'bg-burgundy-500' : 'bg-burgundy-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            
            <button 
              onClick={nextTestimonial} 
              className="w-10 h-10 rounded-full flex items-center justify-center border border-burgundy-300 text-burgundy-500 hover:bg-burgundy-500 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
