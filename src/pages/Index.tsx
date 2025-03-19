
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EquipmentShowcase from '@/components/EquipmentShowcase';
import MembershipPlans from '@/components/MembershipPlans';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-zinc-900"
    >
      <Navbar />
      <HeroSection />
      <EquipmentShowcase />
      <MembershipPlans />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </motion.div>
  );
};

export default Index;
