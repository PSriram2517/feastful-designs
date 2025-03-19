
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BadgeDollarSign, CheckCheck, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MembershipPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 49,
      period: 'monthly',
      features: [
        { included: true, text: 'Access to gym facilities (6AM-10PM)' },
        { included: true, text: 'Standard gym equipment usage' },
        { included: true, text: 'Locker room access' },
        { included: true, text: 'Free fitness assessment' },
        { included: true, text: '1 Personal training session monthly' },
        { included: false, text: 'Group fitness classes' },
        { included: false, text: 'Nutrition consultation' },
        { included: false, text: 'Guest passes' },
        { included: false, text: '24/7 gym access' }
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 79,
      period: 'monthly',
      features: [
        { included: true, text: 'Full 24/7 gym access' },
        { included: true, text: 'All equipment & amenities' },
        { included: true, text: 'Unlimited group classes' },
        { included: true, text: 'Nutrition consultation' },
        { included: true, text: '2 Personal training sessions monthly' },
        { included: true, text: 'Guest pass (1 per month)' },
        { included: true, text: 'Exclusive app features' },
        { included: false, text: 'Monthly progress evaluations' },
        { included: false, text: 'VIP members-only events' }
      ],
      popular: true
    },
    {
      id: 'elite',
      name: 'Elite',
      price: 129,
      period: 'monthly',
      features: [
        { included: true, text: 'All Premium plan features' },
        { included: true, text: '4 Personal training sessions monthly' },
        { included: true, text: 'Customized workout program' },
        { included: true, text: 'Monthly progress evaluations' },
        { included: true, text: 'Priority booking for classes' },
        { included: true, text: 'Guest passes (3 per month)' },
        { included: true, text: 'Discounted merchandise' },
        { included: true, text: 'VIP members-only events' },
        { included: true, text: 'Premium app features' }
      ],
      popular: false
    }
  ];

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
              <BadgeDollarSign className="h-6 w-6 text-orange-500" />
              <span className="text-sm font-medium uppercase tracking-wider text-orange-500">Membership Plans</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Choose Your Membership
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-300"
          >
            We offer flexible membership options to suit your fitness goals and lifestyle. Select the plan that works best for you and start your fitness journey today.
          </motion.p>
        </div>
      </div>
      
      {/* Pricing Table */}
      <div className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
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
                      {feature.included ? (
                        <CheckCheck className="h-5 w-5 text-purple-500 mr-2 shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-500 mr-2 shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full ${plan.popular ? 'bg-orange-500 hover:bg-orange-400 text-white' : 'bg-purple-600 hover:bg-purple-500 text-white'}`}>
                  Select Plan
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-16 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our membership plans and policies.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Can I freeze my membership?",
                answer: "Yes, you can freeze your membership for up to 60 days per year for medical reasons or if you're traveling. A small admin fee may apply."
              },
              {
                question: "Is there a sign-up fee?",
                answer: "We occasionally waive the sign-up fee during promotions. Contact us or check our current offers for details."
              },
              {
                question: "How do I cancel my membership?",
                answer: "You can cancel your membership with 30 days' notice. Simply visit the front desk or contact our customer service team."
              },
              {
                question: "Can I upgrade or downgrade my plan?",
                answer: "Yes, you can change your membership plan at any time. The new rate will be applied to your next billing cycle."
              },
              {
                question: "Are there family membership options?",
                answer: "Yes, we offer family plans with discounted rates. Please inquire at the front desk for details and current pricing."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MembershipPage;
