import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">John Smith</h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating innovative solutions 
              and exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:john@example.com" 
                className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>john.smith@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} John Smith. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center space-x-1">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>using React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;