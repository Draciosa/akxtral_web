import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Application",
      description: "A comprehensive e-commerce solution built with React and Node.js, featuring real-time inventory management, secure payment processing, and advanced analytics dashboard. The platform handles thousands of transactions daily and provides seamless user experience across all devices.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      features: [
        "Real-time inventory management",
        "Secure payment processing",
        "Advanced analytics dashboard",
        "Multi-vendor support",
        "Mobile-responsive design"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "Web Application",
      description: "A comprehensive healthcare management platform that streamlines patient records, appointment scheduling, and medical billing. Built with modern security standards and HIPAA compliance, serving over 10,000 patients across multiple clinics.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Python", "PostgreSQL", "Docker", "AWS"],
      features: [
        "Patient record management",
        "Appointment scheduling",
        "Medical billing integration",
        "HIPAA compliant security",
        "Multi-clinic support"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Cryptocurrency Trading App",
      category: "Mobile Application",
      description: "A sophisticated mobile trading application for cryptocurrency enthusiasts, featuring real-time market data, advanced charting tools, and secure wallet integration. The app supports multiple exchanges and provides AI-powered trading insights.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Node.js", "WebSocket", "Redis", "Blockchain"],
      features: [
        "Real-time market data",
        "Advanced charting tools",
        "Secure wallet integration",
        "Multi-exchange support",
        "AI-powered insights"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "DeFi Lending Platform",
      category: "Blockchain",
      description: "A decentralized finance platform enabling users to lend and borrow cryptocurrencies without intermediaries. Built on Ethereum with smart contracts ensuring transparent and secure transactions, handling over $10M in total value locked.",
      image: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Solidity", "Web3.js", "Ethereum", "IPFS", "React"],
      features: [
        "Decentralized lending/borrowing",
        "Smart contract automation",
        "Yield farming opportunities",
        "Governance token system",
        "Cross-chain compatibility"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Cybersecurity Dashboard",
      category: "Security",
      description: "An enterprise-grade cybersecurity monitoring dashboard that provides real-time threat detection, vulnerability assessment, and incident response management. The system monitors network traffic and identifies potential security breaches instantly.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "Docker"],
      features: [
        "Real-time threat detection",
        "Vulnerability assessment",
        "Incident response management",
        "Network traffic monitoring",
        "Automated security reports"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "AI-Powered Analytics Platform",
      category: "Digital Transformation",
      description: "An intelligent analytics platform that uses machine learning to provide business insights and predictive analytics. The system processes large datasets and generates actionable recommendations for business growth and optimization.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
      features: [
        "Machine learning insights",
        "Predictive analytics",
        "Real-time data processing",
        "Custom dashboard creation",
        "API integration support"
      ],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

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
            OUR PROJECTS
          </motion.h1>
        </div>
      </section>

      {/* Main Project Showcase */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0575e6] to-[#00f260]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Project Image */}
            <div className="flex-1 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-2xl"
                  >
                    <img 
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevProject}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-green-500 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={nextProject}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-green-500 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Project Details */}
            <div className="flex-1 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white text-green-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium inline-block mb-4">
                    {projects[currentProject].category}
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                    {projects[currentProject].title}
                  </h2>
                  
                  <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                    {projects[currentProject].description}
                  </p>

                  {/* Features */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Key Features:</h3>
                    <ul className="space-y-2">
                      {projects[currentProject].features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-white text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentProject].technologies.map((tech, index) => (
                        <span key={index} className="bg-white text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Project Navigation Dots */}
          <div className="flex justify-center mt-8 sm:mt-12 gap-2 sm:gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                  index === currentProject 
                    ? 'bg-black scale-125' 
                    : 'bg-white hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid Overview */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0575e6] to-[#00f260]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection delay={0.2}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12">All Projects</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={0.1 * index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer border-2 transition-all duration-200 ${
                    index === currentProject ? 'border-green-500' : 'border-transparent hover:border-green-200'
                  }`}
                  onClick={() => goToProject(index)}
                >
                  <div className="h-32 sm:h-40 lg:h-48 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs font-medium inline-block mb-2 sm:mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-green-500 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm line-clamp-3">{project.description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;