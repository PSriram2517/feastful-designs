
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const MenuPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Menu categories
  const categories = [
    { id: 'starters', name: 'Starters' },
    { id: 'main-course', name: 'Main Course' },
    { id: 'grills', name: 'Grills & Barbeque' },
    { id: 'specials', name: "Chef's Specials" },
    { id: 'beverages', name: 'Beverages & Desserts' }
  ];

  // Sample menu items
  const menuItems = [
    {
      id: 1,
      category: 'starters',
      name: 'Crispy Chicken Wings',
      description: 'Tender chicken wings fried to perfection and tossed in our signature spicy sauce',
      price: '$12.99',
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 2,
      category: 'starters',
      name: 'Mutton Seekh Kebab',
      description: 'Minced mutton mixed with aromatic spices and herbs, grilled on skewers',
      price: '$15.99',
      image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 3,
      category: 'main-course',
      name: 'Butter Chicken',
      description: 'Tender chicken cooked in a rich, creamy tomato sauce with butter and spices',
      price: '$18.99',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 4,
      category: 'main-course',
      name: 'Mutton Rogan Josh',
      description: 'Aromatic lamb curry cooked with Kashmiri spices and yogurt',
      price: '$22.99',
      image: 'https://images.unsplash.com/photo-1545247181-516773cae754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 5,
      category: 'grills',
      name: 'Mixed Grill Platter',
      description: 'Assortment of grilled chicken, lamb chops, and beef kebabs with sides',
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 6,
      category: 'specials',
      name: 'Lamb Shank Biryani',
      description: 'Slow-cooked lamb shank with aromatic basmati rice and saffron',
      price: '$26.99',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 7,
      category: 'beverages',
      name: 'Mango Lassi',
      description: 'Refreshing yogurt drink with sweet mango pulp and cardamom',
      price: '$5.99',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 8,
      category: 'beverages',
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
      price: '$8.99',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
  ];

  // Filter menu items by category
  const getItemsByCategory = (categoryId: string) => {
    return menuItems.filter(item => item.category === categoryId);
  };

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
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-cream-100 mb-4">Our Menu</h1>
            <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-cream-300 max-w-2xl mx-auto">
              Explore our carefully crafted menu featuring the finest selection of non-vegetarian delicacies.
              From succulent grilled meats to rich curries, each dish is prepared with premium ingredients and passion.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category navigation */}
      <div className="bg-burgundy-900 sticky top-16 z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center space-x-2 md:space-x-6 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <a 
                key={category.id}
                href={`#${category.id}`}
                className="text-sm md:text-base font-medium text-cream-100 whitespace-nowrap hover:text-gold-400 px-3 py-2 transition-colors"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu items by category */}
      <div className="bg-cream-50 py-16">
        <div className="container mx-auto px-4">
          {categories.map((category) => (
            <div key={category.id} id={category.id} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal-900 mb-2">{category.name}</h2>
                <div className="w-16 h-1 bg-gold-400 mb-8"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {getItemsByCategory(category.id).map((item) => (
                    <div 
                      key={item.id} 
                      className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow ${
                        item.featured ? 'border-2 border-gold-400' : ''
                      }`}
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="h-48 md:h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex justify-between items-start">
                            <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-2">
                              {item.name}
                              {item.featured && (
                                <span className="ml-2 text-xs font-sans bg-gold-100 text-gold-600 px-2 py-1 rounded-full">
                                  Chef's Choice
                                </span>
                              )}
                            </h3>
                            <span className="text-lg font-medium text-burgundy-500">{item.price}</span>
                          </div>
                          <p className="text-charcoal-600 mb-4">{item.description}</p>
                          <div className="flex space-x-3">
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="text-sm border-burgundy-500 text-burgundy-500 hover:bg-burgundy-500 hover:text-white"
                            >
                              Add to Order
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MenuPage;
