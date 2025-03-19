
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

// Menu item interface
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
}

// Cart item interface
interface CartItem extends MenuItem {
  quantity: number;
}

const OrderPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  
  // Menu categories
  const categories = [
    { id: "starters", name: "Starters" },
    { id: "mains", name: "Main Courses" },
    { id: "steaks", name: "Steaks & Grills" },
    { id: "seafood", name: "Seafood" },
    { id: "sides", name: "Sides" },
    { id: "desserts", name: "Desserts" },
    { id: "drinks", name: "Drinks" }
  ];
  
  // Menu items
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Garlic Butter Shrimp",
      description: "Succulent shrimp sautéed in garlic butter sauce, served with crusty bread.",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop",
      category: "starters",
      popular: true
    },
    {
      id: 2,
      name: "Calamari Fritti",
      description: "Crispy fried calamari served with lemon aioli and marinara sauce.",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1599187151666-9a2668d64f69?q=80&w=2071&auto=format&fit=crop",
      category: "starters"
    },
    {
      id: 3,
      name: "Ribeye Steak",
      description: "Prime 12oz ribeye steak, char-grilled to perfection, served with roasted potatoes.",
      price: 32.99,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
      category: "steaks",
      popular: true
    },
    {
      id: 4,
      name: "Filet Mignon",
      description: "8oz center-cut filet, grilled to your preference, with red wine reduction.",
      price: 36.99,
      image: "https://images.unsplash.com/photo-1558030137-a56c1b004fa3?q=80&w=2069&auto=format&fit=crop",
      category: "steaks"
    },
    {
      id: 5,
      name: "Grilled Salmon",
      description: "Atlantic salmon fillet, grilled with lemon-dill sauce, served with seasonal vegetables.",
      price: 26.99,
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop",
      category: "seafood",
      popular: true
    },
    {
      id: 6,
      name: "Lobster Tail",
      description: "Broiled lobster tail served with drawn butter and asparagus.",
      price: 42.99,
      image: "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?q=80&w=2070&auto=format&fit=crop",
      category: "seafood"
    },
    {
      id: 7,
      name: "Braised Short Ribs",
      description: "Slow-cooked short ribs with red wine reduction, served with mashed potatoes.",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1611565877165-0a098273cfdc?q=80&w=2070&auto=format&fit=crop",
      category: "mains"
    },
    {
      id: 8,
      name: "Truffle Mac & Cheese",
      description: "Creamy mac & cheese with black truffle and crispy panko topping.",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?q=80&w=2070&auto=format&fit=crop",
      category: "sides"
    },
    {
      id: 9,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center, served with vanilla ice cream.",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2089&auto=format&fit=crop",
      category: "desserts",
      popular: true
    },
    {
      id: 10,
      name: "Signature Red Wine",
      description: "Glass of our house-selected Cabernet Sauvignon.",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
      category: "drinks"
    }
  ];
  
  // Popular items
  const popularItems = menuItems.filter(item => item.popular);
  
  // Cart state
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // Add to cart function
  const addToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingItemIndex > -1) {
        // Item already in cart, increase quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        // Add new item to cart
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your order.`,
      duration: 2000,
    });
  };
  
  // Update cart item quantity
  const updateQuantity = (id: number, change: number) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  };
  
  // Remove from cart
  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };
  
  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // Delivery fee
  const deliveryFee = 4.99;
  
  // Tax calculation (assuming 8.5%)
  const tax = subtotal * 0.085;
  
  // Total
  const total = subtotal + deliveryFee + tax;
  
  // Group menu items by category
  const menuByCategory = categories.map(category => ({
    ...category,
    items: menuItems.filter(item => item.category === category.id)
  }));

  // Checkout function
  const handleCheckout = () => {
    toast({
      title: "Order Placed Successfully!",
      description: "Your order has been received and will be delivered soon.",
      duration: 5000,
    });
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-cream-50">
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
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-cream-100 mb-4">Online Ordering</h1>
            <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-cream-300 max-w-2xl mx-auto">
              Enjoy our delicious cuisine in the comfort of your home. Place your order for delivery or pickup.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Order type selection */}
      <div className="bg-burgundy-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex rounded-lg overflow-hidden">
              <button className="px-6 py-3 bg-burgundy-700 text-cream-50 font-medium focus:outline-none hover:bg-burgundy-600 transition-colors">
                Delivery
              </button>
              <button className="px-6 py-3 bg-burgundy-800 text-cream-300 font-medium focus:outline-none hover:bg-burgundy-700 transition-colors">
                Pickup
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Menu section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal-900">Our Menu</h2>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 bg-burgundy-500 hover:bg-burgundy-400 text-cream-50 border-burgundy-400">
                  <ShoppingBag size={18} />
                  <span>Your Order</span>
                  {cart.length > 0 && (
                    <span className="ml-2 bg-gold-500 text-charcoal-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
                      {cart.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Your Order</SheetTitle>
                  <SheetDescription>
                    Review your items before checkout
                  </SheetDescription>
                </SheetHeader>
                
                <div className="mt-6 flex-1 overflow-y-auto">
                  {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-40 text-center">
                      <ShoppingBag className="h-12 w-12 text-muted-foreground mb-2" />
                      <p className="text-muted-foreground">Your cart is empty</p>
                      <p className="text-sm text-muted-foreground mt-1">Add some delicious items to get started</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <div key={item.id} className="flex gap-4">
                          <div className="h-16 w-16 rounded overflow-hidden flex-shrink-0">
                            <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground">{item.name}</h4>
                            <div className="flex items-center mt-1">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="h-6 w-6 flex items-center justify-center rounded-full border border-input"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="mx-2 min-w-8 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="h-6 w-6 flex items-center justify-center rounded-full border border-input"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-muted-foreground hover:text-destructive mt-1"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {cart.length > 0 && (
                  <>
                    <Separator className="my-6" />
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Delivery Fee</span>
                        <span>${deliveryFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-medium text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <SheetFooter className="mt-6">
                      <Button 
                        onClick={handleCheckout}
                        className="w-full bg-burgundy-500 hover:bg-burgundy-400 text-cream-50"
                      >
                        Proceed to Checkout
                      </Button>
                    </SheetFooter>
                  </>
                )}
              </SheetContent>
            </Sheet>
          </div>
          
          <Tabs defaultValue="popular">
            <TabsList className="w-full max-w-lg mx-auto bg-cream-100 mb-8 overflow-x-auto flex-wrap justify-start rounded-md p-1">
              <TabsTrigger value="popular">Popular</TabsTrigger>
              {categories.map(category => (
                <TabsTrigger key={category.id} value={category.id}>{category.name}</TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="popular" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularItems.map(item => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      <div className="absolute top-2 right-2 bg-gold-500 text-charcoal-900 px-2 py-1 rounded-full text-xs font-medium">
                        Popular
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-medium text-charcoal-900">{item.name}</h3>
                        <span className="font-bold text-burgundy-500">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="text-charcoal-600 text-sm mb-4">{item.description}</p>
                      <Button 
                        onClick={() => addToCart(item)}
                        className="w-full bg-burgundy-500 hover:bg-burgundy-400 text-cream-50"
                      >
                        Add to Order
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            {categories.map(category => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menuItems
                    .filter(item => item.category === category.id)
                    .map(item => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="relative h-48">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          {item.popular && (
                            <div className="absolute top-2 right-2 bg-gold-500 text-charcoal-900 px-2 py-1 rounded-full text-xs font-medium">
                              Popular
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-medium text-charcoal-900">{item.name}</h3>
                            <span className="font-bold text-burgundy-500">${item.price.toFixed(2)}</span>
                          </div>
                          <p className="text-charcoal-600 text-sm mb-4">{item.description}</p>
                          <Button 
                            onClick={() => addToCart(item)}
                            className="w-full bg-burgundy-500 hover:bg-burgundy-400 text-cream-50"
                          >
                            Add to Order
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          {/* Delivery Info */}
          <div className="mt-16 bg-cream-100 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-6">Delivery Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-burgundy-100 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-burgundy-700" />
                </div>
                <div>
                  <h3 className="font-medium text-charcoal-900 mb-1">Delivery Times</h3>
                  <p className="text-charcoal-700 text-sm">Monday - Friday: 11:30 AM - 9:30 PM<br />Weekends: 11:30 AM - 10:30 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-burgundy-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-burgundy-700" />
                </div>
                <div>
                  <h3 className="font-medium text-charcoal-900 mb-1">Free Delivery</h3>
                  <p className="text-charcoal-700 text-sm">Free delivery on orders over $50 within a 5-mile radius.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-burgundy-100 p-2 rounded-full">
                  <ShoppingBag className="h-5 w-5 text-burgundy-700" />
                </div>
                <div>
                  <h3 className="font-medium text-charcoal-900 mb-1">Order Minimum</h3>
                  <p className="text-charcoal-700 text-sm">$20 minimum order for delivery. No minimum for pickup orders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderPage;
