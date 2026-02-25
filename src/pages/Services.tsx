import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Globe, Smartphone, Shield, Blocks, Code, Database, Cloud, Lock, Brain } from 'lucide-react';

const Services = () => {
  const services = [
    {
      number: "01",
      title: "WEB APPLICATION DEVELOPMENT",
      icon: <Globe className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16" />,
      description: "At Akxtral, we are your one-stop destination for all your web app development needs. From concept to deployment, our expert team delivers high-performance, scalable, and user-friendly web applications tailored to your business goals.",
      features: [
        "Custom Web Application Development",
        "Progressive Web Apps (PWA)",
        "E-commerce Solutions",
        "Content Management Systems",
        "API Development & Integration",
        "Database Design & Optimization",
        "Cloud Deployment & Hosting",
        "Performance Optimization"
      ],
      technologies: ["React", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker"]
    },
    {
      number: "02", 
      title: "MOBILE APPLICATION DEVELOPMENT",
      icon: <Smartphone className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16" />,
      description: "At Akxtral, we provide end-to-end mobile app development solutions tailored to your unique business needs. Whether you're looking to build a cutting-edge iOS, Android, or cross-platform application, our expert developers ensure a seamless experience.",
      features: [
        "Native iOS Development",
        "Native Android Development", 
        "Cross-Platform Development",
        "UI/UX Design",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "App Maintenance & Support"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux", "GraphQL"]
    },
    {
      number: "03",
      title: "BLOCKCHAIN SERVICES",
      icon: <Blocks className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16" />,
      description: "At Akxtral, we are your go-to experts for all your blockchain needs, whether it's development, consulting, or strategic guidance. Our team specializes in building secure, scalable, and innovative blockchain solutions.",
      features: [
        "Smart Contract Development",
        "Decentralized Applications (dApps)",
        "Tokenization Solutions",
        "NFT Marketplace Development",
        "DeFi Protocol Development",
        "Blockchain Consulting",
        "Cryptocurrency Wallets",
        "Blockchain Integration"
      ],
      technologies: ["Solidity", "Web3.js", "Ethereum", "Polygon", "Hardhat", "IPFS", "MetaMask"]
    },
    {
      number: "04",
      title: "CYBERSECURITY SERVICES",
      icon: <Shield className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16" />,
      description: "At Akxtral, we are your go-to experts for all your cybersecurity needs, specializing in Vulnerability Assessment and Penetration Testing (VAPT) for web applications, mobile apps, and network infrastructure.",
      features: [
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Code Review",
        "Network Security Audits",
        "Compliance Assessment",
        "Security Training",
        "Incident Response",
        "Security Architecture Review"
      ],
      technologies: ["OWASP", "Burp Suite", "Nmap", "Metasploit", "Wireshark", "Kali Linux", "SIEM"]
    },
    {
      number: "05",
      title: "DIGITAL TRANSFORMATION",
      icon: <Brain className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16" />,
      description: "At Akxtral, we empower businesses with intelligent automation and advanced AI solutions that drive efficiency, reduce operational costs, and unlock data-driven decision-making. From custom AI systems to enterprise-grade automation, we design scalable and secure solutions tailored to your strategic objectives.",
      features: [
        "CRM & ERP Integration",
        "Computer Vision Systems",
        "End-to-End Automation Systems",
        "Voice Agent Assistants",
        "Intelligent Data Syncing",
        "Chatbot Development",
        "Cloud Migration & Process Analytics",
        "AI Consulting & Strategy"
      ],
      technologies: ["n8n", "Pinecone", "UiPath", "Twilio", "VAPI", "Weaviate", "Kubeflow"]
    }
  ];

  const additionalServices = [
    {
      icon: <Code className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your business requirements and workflows."
    },
    {
      icon: <Database className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12" />,
      title: "Database Solutions",
      description: "Database design, optimization, migration, and management services for optimal performance."
    },
    {
      icon: <Cloud className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12" />,
      title: "Cloud Services",
      description: "Cloud migration, deployment, and management services across AWS, Azure, and Google Cloud."
    },
    {
      icon: <Lock className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12" />,
      title: "DevSecOps",
      description: "Integration of security practices into your development and operations workflows."
    }
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
            OUR SERVICES
          </motion.h1>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-8 sm:py-16 bg-gradient-to-r from-[#0575e6] to-[#00f260]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-20">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <AnimatedSection key={index} delay={index * 0.2} className="relative">
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-8 lg:gap-12`}>
                    {/* Service Number & Icon */}
                    <div className="flex-shrink-0 text-center w-full lg:w-auto">
                      <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-none block mb-4">
                        {service.number}
                      </span>
                      <div className="text-white flex justify-center">
                        {service.icon}
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className={`flex-1 ${isEven ? 'text-left' : 'lg:text-right'}`}>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6 tracking-wide">
                        {service.title}
                      </h3>
                      <p className={`text-white text-sm sm:text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 max-w-4xl ${isEven ? 'ml-0' : 'lg:ml-auto'}`}>
                        {service.description}
                      </p>

                      {/* Features Grid */}
                      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 lg:mb-8 max-w-4xl ${isEven ? 'ml-0' : 'lg:ml-auto'}`}>
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className={`flex items-center ${isEven ? 'justify-start' : 'lg:justify-end'}`}>
                            <div className={`w-2 h-2 bg-white rounded-full ${isEven ? 'mr-3' : 'lg:ml-3 lg:order-2 mr-3 lg:mr-0'}`}></div>
                            <span className="text-white text-sm sm:text-base">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className={`max-w-4xl ${isEven ? 'ml-0' : 'lg:ml-auto'}`}>
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Technologies We Use</h4>
                        <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'lg:justify-end'}`}>
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-white text-green-500 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
      {/* Additional Services Section */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0575e6] to-[#00f260]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection delay={0.2}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12">Additional Services</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {additionalServices.map((service, index) => (
              <AnimatedSection key={index} delay={0.3 + index * 0.1} className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white p-6 sm:p-8 rounded-lg h-full"
                >
                  <div className="text-green-500 mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-green-500 mb-3">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{service.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0575e6] to-[#00f260]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection delay={0.2}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12">Our Development Process</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline" },
              { step: "03", title: "Development", description: "Building your solution with best practices" },
              { step: "04", title: "Testing", description: "Rigorous testing and quality assurance" },
              { step: "05", title: "Deployment", description: "Launch and ongoing support" }
            ].map((phase, index) => (
              <AnimatedSection key={index} delay={0.3 + index * 0.1} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-4">{phase.step}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-white text-sm sm:text-base">{phase.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;