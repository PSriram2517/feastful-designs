
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, CalendarDays, ShoppingBag } from 'lucide-react';

const CtaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section 
      ref={ref} 
      className="relative py-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" 
          alt="Restaurant background" 
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-900 to-charcoal-900 opacity-90"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-cream-50">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6"
          >
            Experience the <span className="text-gold-400">Culinary Excellence</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl mb-10 text-cream-200"
          >
            Reserve your table today or order online to experience our gourmet dishes in the comfort of your home.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/reservations">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-burgundy-500 hover:bg-burgundy-400 text-cream-50 rounded-md px-6 py-6 text-base flex items-center gap-2"
              >
                <CalendarDays size={18} />
                Reserve a Table
              </Button>
            </Link>
            
            <Link to="/order">
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto border-gold-400 text-gold-400 hover:bg-gold-400/10 rounded-md px-6 py-6 text-base flex items-center gap-2"
              >
                <ShoppingBag size={18} />
                Order Online
              </Button>
            </Link>
            
            <a href="tel:+15551234567">
              <Button 
                variant="ghost" 
                size="lg"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-cream-50 rounded-md px-6 py-6 text-base flex items-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
