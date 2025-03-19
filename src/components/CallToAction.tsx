
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Flame, ChevronRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section 
      className="py-20 relative bg-cover bg-center bg-fixed overflow-hidden"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075&auto=format&fit=crop')"
      }}
    >
      <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="animated-gradient-border p-8 md:p-12"
          >
            <div className="bg-zinc-900/80 backdrop-blur-md p-8 rounded-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center mb-6"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white">
                  <Flame className="h-6 w-6" />
                </div>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
              >
                Start Your Fitness Journey Today
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                Join Elite Fitness now and get access to our state-of-the-art facilities, experienced trainers, and supportive community. Transform your body and your life!
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link to="/membership">
                  <Button 
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-400 text-white rounded-full px-8"
                  >
                    Join Now
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white/10 rounded-full px-8"
                  >
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
