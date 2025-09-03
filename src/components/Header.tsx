import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-700">
            Kusam Rajesh
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-700 ${
                  activeSection === item.id 
                    ? 'text-blue-700' 
                    : isScrolled 
                      ? 'text-gray-700' 
                      : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Resume Download Button */}
          <div className="hidden md:block">
            <a
              href="/resume.pdf"  // <-- put your resume file inside the "public" folder
              download="Kusam_Rajesh_Resume.pdf"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m6 5a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <nav className="flex flex-col py-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-700 ${
                    activeSection === item.id ? 'text-blue-700 bg-blue-50' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4">
                <a
                  href="/resume.pdf" // <-- same resume file for mobile
                  download="Kusam_Rajesh_Resume.pdf"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m6 5a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Download Resume</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
