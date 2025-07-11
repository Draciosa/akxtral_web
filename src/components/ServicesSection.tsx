import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      number: "01",
      title: "WEB APPLICATION DEVELOPMENT",
      description: "At Akxtral, we are your one-stop destination for all your web app development needs. From concept to deployment, our expert team delivers high-performance, scalable, and user-friendly web applications tailored to your business goals. Whether you need a custom-built solution, seamless integrations, or an intuitive user experience, we ensure every aspect of your project is handled with precision and innovation. With cutting-edge technologies and a customer-centric approach, we turn your ideas into powerful digital solutions that drive success. Let us bring your vision to life with industry-leading web app development services."
    },
    {
      number: "02", 
      title: "MOBILE APPLICATION DEVELOPMENT",
      description: "At Akxtral, we provide end-to-end mobile app development solutions tailored to your unique business needs. Whether you're looking to build a cutting-edge iOS, Android, or cross-platform application, our expert developers ensure a seamless, high-performance, and user-friendly experience. From concept and design to development and deployment, we handle every stage of the process with innovation and precision. With a focus on scalability, security, and top-tier functionality, we bring your mobile app vision to life, helping you stay ahead in today's competitive digital landscape. Let us turn your ideas into powerful mobile solutions."
    },
    {
      number: "03",
      title: "BLOCKCHAIN SERVICES", 
      description: "At Akxtral, we are your go-to experts for all your blockchain needs, whether it's development, consulting, or strategic guidance. Our team specializes in building secure, scalable, and innovative blockchain solutions, from smart contracts and decentralized applications (dApps) to tokenization and enterprise blockchain integration. Whether you're a startup exploring blockchain for the first time or an established business looking to enhance your existing infrastructure, we provide end-to-end support tailored to your goals. With cutting-edge technology and deep industry expertise, we help you navigate the complexities of blockchain and unlock its full potential. Let's bring your blockchain vision to reality."
    },
    {
      number: "04",
      title: "CYBERSECURITY SERVICES", 
      description: "At Akxtral, we are your go-to experts for all your cybersecurity needs, specializing in Vulnerability Assessment and Penetration Testing (VAPT) for web applications, mobile apps, and network infrastructure. Our team delivers secure, thorough, and scalable assessments to identify and mitigate real-world threats before they impact your business. Whether you're a startup building your first app or an enterprise securing critical infrastructure, we offer tailored, end-to-end security solutions. With deep technical expertise and industry best practices, we help you stay protected, compliant, and confident. Let's secure your digital assets together"
    }
  ];

  return (
    <section className="py-8 sm:py-16 bg-gradient-to-r from-[#0575e6] to-[#00f260]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Index Header */}
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
          OUR SERVICES
        </motion.h1>

        {/* Services List - Responsive Layout */}
        <div className="space-y-12 sm:space-y-20">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <AnimatedSection key={index} delay={index * 0.2} className="relative">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-6 lg:gap-8`}>
                  {/* Service Number */}
                  <div className="flex-shrink-0 w-full lg:w-auto text-center lg:text-left">
                    <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-none">
                      {service.number}
                    </span>
                  </div>

                  {/* Service Content */}
                  <div className={`flex-1 pt-2 lg:pt-4 ${isEven ? 'text-left' : 'lg:text-right'}`}>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6 tracking-wide">
                      {service.title}
                    </h3>
                    <p className={`text-white text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl ${isEven ? 'ml-0' : 'lg:ml-auto'}`}>
                      <span className="text-whtie font-semibold">At Akxtral</span>
                      {service.description.substring(service.description.indexOf(','))}
                    </p>
                  </div>
                </div>

                {/* Separator Line */}
                {index < services.length - 1 && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.4 }}
                    className="w-full h-px bg-white origin-center mt-12 sm:mt-20"
                  />
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;