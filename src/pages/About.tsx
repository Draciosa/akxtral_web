import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12" />,
      title: "Our Mission",
      description: "To bridge the gap between innovation and practicality, helping enterprises harness the power of technology to drive efficiency, scalability, and success in the digital era."
    },
    {
      icon: <Users className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12" />,
      title: "Our Team",
      description: "A diverse group of highly skilled developers, designers, strategists, and security experts who are passionate about creating cutting-edge solutions that make a real difference."
    },
    {
      icon: <Award className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12" />,
      title: "Our Approach",
      description: "We take a collaborative approach, working closely with businesses to understand their unique challenges and deliver solutions that not only solve problems but unlock new opportunities."
    },
    {
      icon: <Globe className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12" />,
      title: "Our Vision",
      description: "To be the leading software development company that empowers businesses worldwide to thrive in the digital landscape through innovative, secure, and scalable technology solutions."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "6", label: "Team Members" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 sm:pt-36 py-8 sm:py-16 bg-gradient-to-r from-[#0575e6] to-[#00f260]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-8xl text-white text-center mb-8 sm:mb-16 tracking-wider"
            style={{ letterSpacing: '0' }}
          >
            ABOUT US
          </motion.h1>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0575e6] to-[#00f260]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 mb-12 sm:mb-20">
            {/* Left Content */}
            <div className="flex-1 w-full">
              <div className="space-y-4 sm:space-y-6 text-white text-base sm:text-lg leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  At <span className="text-white font-semibold">Akxtral</span>, we are a visionary software development company committed to delivering cutting-edge solutions that empower businesses in the digital era. Founded with the belief that technology should be a catalyst for growth, we have established ourselves as trusted partners for organizations seeking to transform their operations and achieve sustainable success.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Our journey began with a simple yet powerful vision: to bridge the gap between innovation and practicality. We understand that in today's fast-paced digital landscape, businesses need more than just functional software – they need solutions that are scalable, secure, future-proof, and aligned with their strategic objectives.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  What sets us apart is our holistic approach to software development. We don't just write code; we craft experiences, build relationships, and create lasting value. Every project we undertake is treated as a unique opportunity to push boundaries, challenge conventions, and deliver excellence that exceeds expectations.
                </motion.p>
              </div>
            </div>

            {/* Right Illustration */}
            <AnimatedSection delay={0.4} className="flex-1 w-full">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-green-500 to-green-600 rounded-lg overflow-hidden"
              >
                <div className="w-full h-full overflow-hidden">
                  <motion.img 
                    src="/hero.jpg" 
                    alt="About Akxtral"
                    initial={{ scale: 1, filter: "grayscale(100%)" }}
                    whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Stats Section */}
          <AnimatedSection delay={0.2} className="mb-12 sm:mb-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white font-medium text-sm sm:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Values Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.2} className="bg-gray-50 p-6 sm:p-8 rounded-lg">
                <div className="text-green-500 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-green-500 mb-4 ">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0575e6] to-[#00f260]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection delay={0.2}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12">Why Choose Akxtral?</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatedSection delay={0.3} className="text-center">
              <div className="bg-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Proven Expertise</h3>
              <p className="text-white text-sm sm:text-base">Years of experience delivering successful projects across various industries and technologies.</p>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="text-center">
              <div className="bg-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Collaborative Approach</h3>
              <p className="text-white text-sm sm:text-base">We work closely with our clients as partners, ensuring transparent communication throughout the project lifecycle.</p>
            </AnimatedSection>

            <AnimatedSection delay={0.5} className="text-center">
              <div className="bg-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Future-Ready Solutions</h3>
              <p className="text-white text-sm sm:text-base">We build scalable, secure, and maintainable solutions that grow with your business needs.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;