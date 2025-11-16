import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const AboutUsSection = () => {
  return (
    <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0575e6] to-[#00f260] ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 w-full">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 pb-2 inline-block"
            >
              Who We Are
            </motion.h2>
            
            <div className="space-y-4 sm:space-y-6 text-white text-base sm:text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                At <span className="text-white font-semibold">Akxtral</span>, we are a visionary software development company committed to delivering cutting-edge solutions that empower businesses in the digital era. Our mission is to bridge the gap between innovation and practicality, helping enterprises harness the power of technology to drive efficiency, scalability, and success.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                With a team of highly skilled developers, designers, and strategists, we specialize in crafting robust software solutions tailored to meet the unique needs of our clients. Whether it's custom software development, blockchain integration, AI-driven applications, or enterprise solutions, we ensure that every product we create is future-proof and aligned with the latest industry trends.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                At <span className="text-white font-semibold">Akxtral</span>, we believe in pushing boundaries and redefining what's possible. We take a collaborative approach, working closely with businesses to understand their challenges and deliver solutions that not only solve problems but also unlock new opportunities.
              </motion.p>
            </div>
          </div>

          {/* Right Illustration */}
          <AnimatedSection delay={0.4} className="flex-1 w-full">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-red-500 to-red-600 rounded-lg overflow-hidden"
            >
              <div className="w-full h-full overflow-hidden">
                <motion.img 
                  src="/hero.jpg" 
                  alt="Creative Technology Illustration"
                  initial={{ scale: 1, filter: "grayscale(100%)" }}
                  whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;