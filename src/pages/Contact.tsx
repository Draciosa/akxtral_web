import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+1',
    number: '',
    email: '',
    query: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const countryCodes = [
    { code: '+1', country: 'US/CA' },
    { code: '+44', country: 'UK' },
    { code: '+91', country: 'IN' },
    { code: '+92', country: 'PK' },
    { code: '+86', country: 'CN' },
    { code: '+81', country: 'JP' },
    { code: '+49', country: 'DE' },
    { code: '+33', country: 'FR' },
    { code: '+39', country: 'IT' },
    { code: '+34', country: 'ES' },
    { code: '+61', country: 'AU' },
    { code: '+55', country: 'BR' },
    { code: '+7', country: 'RU' },
    { code: '+82', country: 'KR' },
    { code: '+65', country: 'SG' },
    { code: '+971', country: 'AE' },
    { code: '+966', country: 'SA' },
    { code: '+60', country: 'MY' },
    { code: '+62', country: 'ID' },
    { code: '+66', country: 'TH' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Prepare data for Google Sheets
      const submissionData = {
        name: formData.name,
        phone: formData.number ? `${formData.countryCode}${formData.number}` : '',
        email: formData.email,
        query: formData.query,
        timestamp: new Date().toISOString()
      };

      // Here you would typically send to your backend API that handles Google Sheets integration
      // For now, we'll simulate the submission
      await fetch("https://script.google.com/macros/s/AKfycby1R30Yww0-SLxjqqXQCGPQXP81RJUbA88fN4Y4fb85uqXopb293PlXi1s_Sb2yRoJa/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      
      setSubmitStatus('success');
      setFormData({
        name: '',
        countryCode: '+1',
        number: '',
        email: '',
        query: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Email Us",
      details: "info@akxtral.com",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: <MapPin className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Visit Us",
      details: "Global Remote Team",
      description: "We work with clients worldwide from our distributed offices"
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
            CONTACT US
          </motion.h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0575e6] to-[#00f260]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Contact Form */}
            <div className="flex-1">
              <AnimatedSection delay={0.2}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 pb-2 inline-block">
                  Get In Touch
                </h2>
                <p className="text-white text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                  Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <label htmlFor="number" className="block text-sm font-medium text-white mb-2">
                      Phone Number (Optional)
                    </label>
                    <div className="flex gap-2">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className="px-2 sm:px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gradient-to-r from-[#0575e6] to-[#00f260] text-white text-sm sm:text-base"
                      >
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code} className="bg-white text-black">
                            {country.code} ({country.country})
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleInputChange}
                        className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Query Field */}
                  <div>
                    <label htmlFor="query" className="block text-sm font-medium text-white mb-2">
                      Query *
                    </label>
                    <textarea
                      id="query"
                      name="query"
                      required
                      rows={4}
                      value={formData.query}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-vertical text-sm sm:text-base"
                      placeholder="Tell us about your project or ask us anything..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 text-sm sm:text-base ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-green-500 hover:bg-green-600 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-green-600 bg-green-50 p-3 sm:p-4 rounded-lg text-sm sm:text-base"
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span>Message sent successfully! We'll get back to you soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-600 bg-red-50 p-3 sm:p-4 rounded-lg text-sm sm:text-base"
                    >
                      <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span>Failed to send message. Please try again or contact us directly.</span>
                    </motion.div>
                  )}
                </form>
              </AnimatedSection>
            </div>

            {/* Contact Information */}
            <div className="flex-1">
              <AnimatedSection delay={0.3}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 pb-2 inline-block">
                  Contact Information
                </h2>
              </AnimatedSection>

              <div className="space-y-6 sm:space-y-8">
                {contactInfo.map((info, index) => (
                  <AnimatedSection key={index} delay={0.4 + index * 0.1}>
                    <motion.div
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50 rounded-lg"
                    >
                      <div className="text-green-500 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-green-500 mb-2">{info.title}</h3>
                        <p className="text-green-500 font-semibold mb-2 text-sm sm:text-base">{info.details}</p>
                        <p className="text-gray-600 text-sm sm:text-base">{info.description}</p>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Additional Info */}
              <AnimatedSection delay={0.8}>
                <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-green-500 mb-4">Why Choose Akxtral?</h3>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      24/7 Support & Maintenance
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      Agile Development Process
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      Transparent Communication
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      Competitive Pricing
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;