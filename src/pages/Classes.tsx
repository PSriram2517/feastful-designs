
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, Users, Award } from 'lucide-react';

const classes = [
  {
    id: 1,
    name: "HIIT Burn",
    description: "High-intensity interval training designed to maximize calorie burn and improve cardiovascular fitness.",
    duration: "45 min",
    level: "Intermediate",
    trainer: "Alex Morgan",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop",
    schedule: ["Monday 6:00 AM", "Wednesday 6:00 AM", "Friday 6:00 AM"]
  },
  {
    id: 2,
    name: "Power Yoga",
    description: "A dynamic, fitness-based approach to vinyasa-style yoga that builds strength, flexibility and balance.",
    duration: "60 min",
    level: "All Levels",
    trainer: "Samantha Reed",
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2070&auto=format&fit=crop",
    schedule: ["Tuesday 7:30 AM", "Thursday 7:30 AM", "Saturday 8:00 AM"]
  },
  {
    id: 3,
    name: "Strength & Conditioning",
    description: "Focus on building strength, endurance, and power through compound movements and progressive overload.",
    duration: "50 min",
    level: "Intermediate to Advanced",
    trainer: "Mike Johnson",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop",
    schedule: ["Monday 5:30 PM", "Wednesday 5:30 PM", "Friday 5:30 PM"]
  },
  {
    id: 4,
    name: "Spin Cycle",
    description: "High-energy indoor cycling class set to motivating music with varying speeds and resistance levels.",
    duration: "45 min",
    level: "All Levels",
    trainer: "Lisa Chen",
    image: "https://images.unsplash.com/photo-1561214078-f3247647fc5e?q=80&w=2026&auto=format&fit=crop",
    schedule: ["Tuesday 6:00 PM", "Thursday 6:00 PM", "Sunday 10:00 AM"]
  },
  {
    id: 5,
    name: "Core Crusher",
    description: "Targeted core and abdominal workout focusing on building strength, stability, and definition.",
    duration: "30 min",
    level: "All Levels",
    trainer: "David Cooper",
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=2070&auto=format&fit=crop",
    schedule: ["Monday 12:00 PM", "Wednesday 12:00 PM", "Friday 12:00 PM"]
  },
  {
    id: 6,
    name: "Boxing Fundamentals",
    description: "Learn boxing techniques while getting a full-body workout that improves coordination and burns calories.",
    duration: "60 min",
    level: "Beginner to Intermediate",
    trainer: "James Rodriguez",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop",
    schedule: ["Tuesday 7:00 PM", "Thursday 7:00 PM", "Saturday 11:00 AM"]
  }
];

const ClassesPage = () => {
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
              <Calendar className="h-6 w-6 text-orange-500" />
              <span className="text-sm font-medium uppercase tracking-wider text-orange-500">Fitness Classes</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Group Fitness Classes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-300"
          >
            Join our energetic fitness classes led by expert instructors designed to motivate, challenge, and inspire you to reach your fitness goals.
          </motion.p>
        </div>
      </div>
      
      {/* Classes Grid */}
      <div className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((fitnessClass, index) => (
              <motion.div
                key={fitnessClass.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800 rounded-xl overflow-hidden shadow-xl"
              >
                <div className="relative h-48">
                  <img 
                    src={fitnessClass.image} 
                    alt={fitnessClass.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white">{fitnessClass.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{fitnessClass.description}</p>
                  
                  <div className="flex flex-wrap gap-y-3">
                    <div className="flex items-center w-1/2">
                      <Clock className="text-purple-500 mr-2 h-4 w-4" />
                      <span className="text-sm text-gray-400">{fitnessClass.duration}</span>
                    </div>
                    <div className="flex items-center w-1/2">
                      <Users className="text-purple-500 mr-2 h-4 w-4" />
                      <span className="text-sm text-gray-400">{fitnessClass.level}</span>
                    </div>
                    <div className="flex items-center w-full">
                      <Award className="text-purple-500 mr-2 h-4 w-4" />
                      <span className="text-sm text-gray-400">Trainer: {fitnessClass.trainer}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-zinc-700">
                    <h4 className="font-medium text-white mb-2">Schedule:</h4>
                    <ul className="space-y-1">
                      {fitnessClass.schedule.map((time, idx) => (
                        <li key={idx} className="text-sm text-gray-400">{time}</li>
                      ))}
                    </ul>
                  </div>
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

export default ClassesPage;
