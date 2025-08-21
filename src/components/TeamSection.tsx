import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "MUDASSIR ALI",
      role: "COO",
      image: "/mudassir.jpg"
    },
    {
      name: "INZAMAM SHAREEF", 
      role: "CTO",
      image: "/inzamam.jpeg"
    },
    {
      name: "ABDUL HAFEEZ",
      role: "CFO", 
      image: "/hafeez.png"
    },
    {
      name: "FARHAN SIDDIQUI",
      role: "CCO",
      image: "/farhan.jpg"
    },
    {
      name: "GHAIS RAHMAN", 
      role: "CBDO",
      image: "/ghais.jpg"
    },
    {
      name: "MUBARIZ FAROOQUI",
      role: "CIO", 
      image: "/mubariz.jpeg"
    }
  ];

  return (
    <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0575e6] to-[#00f260]">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-6xl lg:text-8xl text-white text-center mb-8 sm:mb-16 tracking-wider"
          style={{
            letterSpacing: '0'
          }}
        >
          MEET THE TEAM
        </motion.h1>
        
        {/* Team Members - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={index} delay={0.2 + (index * 0.2)} className="text-center">
              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 border-2 border-white rounded-full overflow-hidden mb-6 sm:mb-8 mx-auto">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-white italic text-base sm:text-lg">{member.role}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;