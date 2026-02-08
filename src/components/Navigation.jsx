import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Backdrop Overlay - Only visible when mobile menu is open */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-cyan-500/5' 
            : 'bg-[#0a0a0f]/80 backdrop-blur-md border-b border-cyan-500/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                    activeSection === item.id
                      ? 'text-cyan-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/20 rounded-lg -z-10"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <motion.a
              href="/resume.pdf" // REPLACE WITH YOUR RESUME LINK
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg font-semibold text-white text-sm hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] transition-shadow duration-300"
            >
              <FileText className="w-4 h-4" />
              Resume
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-300 ml-auto"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden overflow-hidden bg-[#0f0f17]/95 backdrop-blur-xl border-t border-cyan-500/10"
        >
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20,
                }}
                transition={{ delay: index * 0.05 }}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
                    : 'text-gray-400 hover:bg-cyan-500/5 hover:text-white'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.a
              href="/resume.pdf" // REPLACE WITH YOUR RESUME LINK
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20,
              }}
              transition={{ delay: navItems.length * 0.05 }}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg font-semibold text-white text-sm mt-2"
            >
              <FileText className="w-4 h-4" />
              Resume
            </motion.a>
          </div>
        </motion.div>
      </motion.nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navigation;