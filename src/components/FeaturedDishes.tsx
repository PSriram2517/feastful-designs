
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

const featuredDishes: Dish[] = [
  {
    id: 1,
    name: "Grilled Lamb Chops",
    description: "Succulent lamb chops marinated with rosemary and garlic, served with mint sauce.",
    price: "$28.99",
    image: "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?q=80&w=2070&auto=format&fit=crop",
    tags: ["Chef's Special", "Spicy"]
  },
  {
    id: 2,
    name: "Butter Chicken",
    description: "Tender chicken in a rich tomato and butter sauce with aromatic spices.",
    price: "$22.99",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae9ac?q=80&w=2070&auto=format&fit=crop",
    tags: ["Popular", "Spicy"]
  },
  {
    id: 3,
    name: "Grilled Salmon Steak",
    description: "Fresh Atlantic salmon fillet, grilled to perfection with lemon butter sauce.",
    price: "$26.99",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop",
    tags: ["Seafood", "Healthy"]
  },
  {
    id: 4,
    name: "Premium Beef Steak",
    description: "28-day aged prime ribeye steak cooked to your liking with truffle butter.",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=2058&auto=format&fit=crop",
    tags: ["Premium", "Chef's Special"]
  }
];

const FeaturedDishes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="featured-dishes" ref={ref} className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full bg-burgundy-100 text-burgundy-800 text-xs font-medium uppercase tracking-wider mb-4"
          >
            Gourmet Selection
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title text-center after:left-1/2 after:-translate-x-1/2"
          >
            Chef's Specials
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            Indulge in our signature dishes crafted with premium ingredients and perfected through years of culinary expertise.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="dish-card"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="dish-card-img" 
                  loading="lazy"
                />
                <div className="dish-overlay">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {dish.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          tag === "Chef's Special" 
                            ? "bg-gold-400/80 text-charcoal-900" 
                            : tag === "Popular"
                            ? "bg-burgundy-500/80 text-cream-100" 
                            : "bg-white/20 text-cream-100"
                        }`}
                      >
                        {tag === "Chef's Special" && <Star className="inline-block mr-1" size={12} />}
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-cream-50">{dish.name}</h3>
                  <p className="text-sm text-cream-200 mt-1 mb-3 line-clamp-2">{dish.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gold-400">{dish.price}</span>
                    <Link to="/menu" className="text-sm text-cream-100 hover:text-gold-400 transition-colors flex items-center gap-1">
                      View Details <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/menu">
            <Button 
              variant="outline" 
              size="lg"
              className="border-burgundy-500 text-burgundy-500 hover:bg-burgundy-500 hover:text-cream-50 rounded-md"
            >
              Explore Full Menu
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
