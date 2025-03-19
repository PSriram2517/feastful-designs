
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Dumbbell } from 'lucide-react';

const EquipmentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />
      
      {/* Header */}
      <div className="pt-24 pb-12 md:pt-32 md:pb-20 bg-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="flex items-center justify-center space-x-2">
              <Dumbbell className="h-6 w-6 text-orange-500" />
              <span className="text-sm font-medium uppercase tracking-wider text-orange-500">Our Equipment</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Premium Fitness Equipment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-300"
          >
            Discover our state-of-the-art fitness equipment designed to elevate your workout experience and help you achieve your fitness goals.
          </motion.p>
        </div>
      </div>
      
      {/* Content */}
      <div className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Equipment Categories</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our gym features top-of-the-line equipment from leading brands, carefully selected to provide you with the best workout experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cardio Equipment",
                description: "State-of-the-art treadmills, ellipticals, stair climbers, and stationary bikes to get your heart pumping.",
                image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1887&auto=format&fit=crop"
              },
              {
                title: "Strength Training",
                description: "Free weights, weight machines, and functional training equipment to build strength and muscle.",
                image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2071&auto=format&fit=crop"
              },
              {
                title: "Functional Training",
                description: "TRX systems, kettlebells, medicine balls, and battle ropes for versatile functional workouts.",
                image: "https://images.unsplash.com/photo-1598289431512-b91c5f0d290a?q=80&w=1974&auto=format&fit=crop"
              },
              {
                title: "Group Exercise",
                description: "Specialized equipment for group classes, including spin bikes, step platforms, and more.",
                image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Recovery Zone",
                description: "Foam rollers, stretching areas, and recovery tools to help you cool down and recover.",
                image: "https://images.unsplash.com/photo-1616279967983-ec413476e824?q=80&w=2026&auto=format&fit=crop"
              },
              {
                title: "Personal Training",
                description: "Specialized equipment available for personal training sessions with our expert trainers.",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="equipment-card"
              >
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="equipment-card-img h-64 w-full object-cover"
                />
                <div className="equipment-overlay">
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-300">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EquipmentPage;
