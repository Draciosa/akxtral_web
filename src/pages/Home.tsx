import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection';
import HeroSection from '../components/HeroSection';
import TeamSection from '../components/TeamSection';
import AboutUsSection from '../components/AboutUsSection';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Separator Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, delay: 0.2 }}
        className="w-full h-px bg-green-500 origin-center"
      />

      {/* About Us Section */}
      <AboutUsSection />

      {/* Separator Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, delay: 0.2 }}
        className="w-full h-px bg-green-500 origin-center"
      />

      {/* Services Section */}
      <ServicesSection />

      {/* Separator Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, delay: 0.2 }}
        className="w-full h-px bg-green-500 origin-center"
      />

      {/* Team Section */}
      <TeamSection />
    </>
  );
};

export default Home;