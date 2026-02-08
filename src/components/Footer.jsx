import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-cyan-500/10 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-cyan-500/5 via-violet-500/5 to-transparent rounded-full blur-[100px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100, 255, 218, 1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 255, 218, 1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Main Content */}
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Copyright Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-2 text-gray-400 text-sm"
          >
            <span>© {currentYear}</span>
            <span className="text-gray-600">•</span>
            <span className="flex items-center gap-2">
              Designed and Built with
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-flex"
              >
                <Heart className="w-4 h-4 text-pink-500" />
              </motion.span>
              precision & passion
            </span>
          

          {/* Name/Credit */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 text-sm"
          >
            by{' '}
            <span 
              className="font-semibold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Raheelkhan Lohani
            </span>
          </motion.span>
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-xs"
          >
            All rights reserved
          </motion.div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </footer>
  );
};

export default Footer;