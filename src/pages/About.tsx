
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Team members
  const team = [
    {
      name: 'Chef Michael Rodriguez',
      position: 'Executive Chef',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'With over 20 years of culinary experience across three continents, Chef Michael brings his passion for meat preparation and global flavors to every dish at Food Feast.'
    },
    {
      name: 'Emma Thompson',
      position: 'Restaurant Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Emma ensures that every guest at Food Feast receives impeccable service. Her background in luxury hospitality has shaped our guest experience philosophy.'
    },
    {
      name: 'David Chen',
      position: 'Head Sommelier',
      image: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: "David's expertise in wine pairing elevates the dining experience at Food Feast, with carefully selected wines that perfectly complement our meat-focused menu."
    },
    {
      name: 'Sophia Patel',
      position: 'Pastry Chef',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Sophia creates our decadent desserts that provide the perfect finale to any meal, balancing rich flavors with artistic presentation.'
    }
  ];

  return (
    <div className="min-h-screen">
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
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-cream-100 mb-4">Our Story</h1>
            <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-cream-300 max-w-2xl mx-auto">
              Discover the passion and expertise behind Food Feast, where culinary artistry meets premium ingredients.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our story section */}
      <div className="bg-cream-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">The Food Feast Journey</h2>
              <div className="w-16 h-1 bg-gold-400 mb-8"></div>
              <p className="text-charcoal-700 mb-6">
                Founded in 2010, Food Feast began as a small family-owned restaurant with a vision to serve the finest quality non-vegetarian cuisine. Our founder, James Anderson, a third-generation chef, believed in creating dishes that honored traditional recipes while incorporating modern culinary techniques.
              </p>
              <p className="text-charcoal-700 mb-6">
                Over the years, we've grown from a modest establishment to one of the city's premier dining destinations, but our commitment to quality and authenticity has never wavered. Each dish on our menu tells a story – of heritage, of passion, and of our relentless pursuit of culinary excellence.
              </p>
              <p className="text-charcoal-700">
                Today, Food Feast stands as a testament to our dedication to the craft of cooking and our love for creating memorable dining experiences. Our kitchen sources only the finest ingredients, our chefs are masters of their craft, and our service team is committed to making every visit special.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Food Feast Restaurant" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our philosophy section */}
      <div className="bg-burgundy-900 py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-serif font-bold text-cream-100 mb-6">Our Culinary Philosophy</h2>
            <div className="w-16 h-1 bg-gold-400 mx-auto mb-8"></div>
            <p className="text-cream-300 mb-6">
              At Food Feast, we believe that the finest meats deserve the finest preparation. Our culinary philosophy is built on three pillars:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-burgundy-800 p-6 rounded-lg">
                <div className="w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-burgundy-900 text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold text-cream-100 mb-3">Quality Ingredients</h3>
                <p className="text-cream-300">We source only premium cuts of meat and the freshest accompaniments.</p>
              </div>
              
              <div className="bg-burgundy-800 p-6 rounded-lg">
                <div className="w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-burgundy-900 text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold text-cream-100 mb-3">Masterful Technique</h3>
                <p className="text-cream-300">Our chefs are trained in both traditional and innovative cooking methods.</p>
              </div>
              
              <div className="bg-burgundy-800 p-6 rounded-lg">
                <div className="w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-burgundy-900 text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold text-cream-100 mb-3">Respect for Tradition</h3>
                <p className="text-cream-300">We honor culinary heritage while embracing contemporary innovation.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Team section */}
      <div className="bg-cream-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">Meet Our Team</h2>
            <div className="w-16 h-1 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-charcoal-700 max-w-2xl mx-auto">
              The heart and soul of Food Feast is our dedicated team of culinary professionals.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-1">{member.name}</h3>
                  <p className="text-gold-600 font-medium mb-4">{member.position}</p>
                  <p className="text-charcoal-700">{member.bio}</p>
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

export default AboutPage;
