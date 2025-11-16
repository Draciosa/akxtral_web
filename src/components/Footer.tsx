import React from 'react';
import { InstagramLogo, LinkedinLogo, Envelope } from 'phosphor-react';
import { FaXTwitter } from "react-icons/fa6"; // Font Awesome 6

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold text-green-500 mb-4">Akxtral</h3>
            <p className="text-gray-300 leading-relaxed">
              A visionary software development company committed to delivering cutting-edge solutions that empower businesses in the digital era.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-green-500 mb-4">Contact Us</h4>
            <div className="flex items-center mb-3">
              <Envelope className="w-5 h-5 text-green-500 mr-3" />
              <a 
                href="mailto:info@akxtral.com" 
                className="text-gray-300 hover:text-green-500 transition-colors duration-200"
              >
                info@akxtral.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-green-500">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/Akxtral" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-500 transition-colors duration-200"
              >
                <FaXTwitter size={32} />
              </a>
              <a 
                href="https://www.instagram.com/akxtral/p/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-500 transition-colors duration-200"
              >
                <InstagramLogo size={36} />
              </a>
              <a 
                href="https://www.linkedin.com/company/akxtral/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-500 transition-colors duration-200"
              >
                <LinkedinLogo size={36} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Akxtral. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;