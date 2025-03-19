
import { motion } from 'framer-motion';
import { BadgeDollarSign, CheckCheck, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 49,
    period: 'monthly',
    features: [
      'Access to gym facilities (6AM-10PM)',
      'Standard gym equipment usage',
      'Locker room access',
      'Free fitness assessment',
      '1 Personal training session monthly'
    ],
    popular: false
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 79,
    period: 'monthly',
    features: [
      'Full 24/7 gym access',
      'All equipment & amenities',
      'Unlimited group classes',
      'Nutrition consultation',
      '2 Personal training sessions monthly',
      'Guest pass (1 per month)',
      'Exclusive app features'
    ],
    popular: true
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 129,
    period: 'monthly',
    features: [
      'All Premium plan features',
      '4 Personal training sessions monthly',
      'Customized workout program',
      'Monthly progress evaluations',
      'Priority booking for classes',
      'Guest passes (3 per month)',
      'Discounted merchandise',
      'VIP members-only events'
    ],
    popular: false
  }
];

const MembershipPlans = () => {
  return (
    <section className="py-20 bg-zinc-800">
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
              <BadgeDollarSign className="h-6 w-6 text-orange-500" />
              <span className="text-sm font-medium uppercase tracking-wider text-orange-500">Membership Options</span>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Choose Your Membership Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-gray-400"
          >
            We offer flexible membership options to fit your fitness goals and budget.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-400 ml-1">/{plan.period}</span>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCheck className="h-5 w-5 text-purple-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/membership">
                <Button className={`w-full ${plan.popular ? 'bg-orange-500 hover:bg-orange-400 text-white' : 'bg-purple-600 hover:bg-purple-500 text-white'}`}>
                  Choose Plan
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
