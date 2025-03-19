
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Info } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const equipmentItems = [
  {
    id: 1,
    name: 'Premium Treadmills',
    purpose: 'Cardio & Endurance Training',
    description: 'State-of-the-art treadmills with advanced features for tracking and optimizing your cardio workout.',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 2,
    name: 'Olympic Weight Sets',
    purpose: 'Strength & Power Training',
    description: 'Professional-grade Olympic bars and weight plates for serious strength training enthusiasts.',
    image: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=2127&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Smith Machines',
    purpose: 'Compound Movements & Safety',
    description: 'Versatile Smith machines allowing for a wide range of exercises with added safety features.',
    image: 'https://images.unsplash.com/photo-1591291920120-c6a12926e999?q=80&w=1951&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Cable Stations',
    purpose: 'Isolation & Functional Training',
    description: 'Multi-functional cable machines designed for isolating specific muscle groups and functional movements.',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Indoor Cycling Bikes',
    purpose: 'High-Intensity Cardio',
    description: 'Professional-grade indoor cycling bikes for intense cardio sessions and group cycling classes.',
    image: 'https://images.unsplash.com/photo-1570829460005-c840387bb1ca?q=80&w=1932&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Free Weights Area',
    purpose: 'Versatile Strength Training',
    description: 'Comprehensive selection of dumbbells, kettlebells, and free weights for unlimited exercise possibilities.',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2071&auto=format&fit=crop'
  }
];

const EquipmentShowcase = () => {
  const [activeItem, setActiveItem] = useState(equipmentItems[0]);

  return (
    <section id="equipment-showcase" className="py-20 bg-zinc-900">
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
              <Dumbbell className="h-6 w-6 text-orange-500" />
              <span className="text-sm font-medium uppercase tracking-wider text-orange-500">Premium Equipment</span>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            State-of-the-Art Equipment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-gray-400"
          >
            Our gym features premium, professional-grade equipment to provide you with the best workout experience possible.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {equipmentItems.map((item) => (
                <CarouselItem key={item.id}>
                  <div className="equipment-card h-[500px] mx-2">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="equipment-card-img h-full w-full object-cover"
                    />
                    <div className="equipment-overlay">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                      <div className="bg-purple-600 inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3">
                        {item.purpose}
                      </div>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <Link to="/equipment">
                        <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/10">
                          <Info className="h-4 w-4 mr-2" />
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static translate-y-0 mr-4" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default EquipmentShowcase;
