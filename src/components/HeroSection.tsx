import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="pt-20 sm:pt-24 pb-8 sm:pb-16 bg-gradient-to-r from-[#0575e6] to-[#00f260]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[15rem]  font-normal text-green-500 text-center mb-0 tracking-wider leading-none select-none"
          style={{
            fontSize: 'clamp(3rem, 15vw, 15rem)',
            color: 'white',
            letterSpacing: '0'
          }}
        >
          Akxtral
        </motion.h1>
      </div>
    </section>
  );
};

export default HeroSection;