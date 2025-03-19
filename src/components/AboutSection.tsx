
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section ref={ref} className="bg-charcoal-900 text-cream-100 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-burgundy-500/20 text-burgundy-300 text-xs font-medium uppercase tracking-wider mb-4">
              Our Story
            </span>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-cream-50">
              A Tradition of Excellence <span className="text-gold-400">Since 2005</span>
            </h2>
            
            <div className="space-y-4 text-cream-200">
              <p>
                FOOD FEAST was born from a passion for crafting extraordinary non-vegetarian culinary experiences. What began as a small family restaurant has evolved into one of the city's most celebrated dining destinations.
              </p>
              
              <p>
                Our philosophy is simple yet profound: source the finest quality meats, seafood, and ingredients, prepare them with expert technique, and serve with unparalleled hospitality. Every dish tells a story of tradition, innovation, and our unwavering commitment to excellence.
              </p>
              
              <p>
                Led by Executive Chef Michael Rodriguez, our culinary team combines classical training with contemporary creativity, resulting in dishes that honor their origins while surprising the palate with unexpected harmonies of flavor.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gold-400 text-gold-400 hover:bg-gold-400/10 rounded-md"
                >
                  Learn More About Us
                </Button>
              </Link>
              
              <Link to="/reservations">
                <Button 
                  size="lg"
                  className="bg-burgundy-500 hover:bg-burgundy-400 text-cream-50 rounded-md"
                >
                  Reserve a Table
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" 
                  alt="FOOD FEAST Restaurant Interior" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 p-4 glass-dark rounded-lg w-44 md:w-64">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className="w-4 h-4 text-gold-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-cream-100 font-medium">4.9/5</span>
                </div>
                <p className="text-sm text-cream-200 italic">"An unforgettable dining experience. The flavors, atmosphere, and service are simply outstanding."</p>
                <p className="text-xs text-gold-400 mt-3">— Gourmet Magazine</p>
              </div>
              
              <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 glass-dark p-4 rounded-lg rotate-6">
                <p className="text-xl md:text-2xl font-serif font-bold text-gold-400">15+ Years</p>
                <p className="text-sm text-cream-200">of culinary excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
