import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profile_photo from '../assets/profile-photo.png';
import { Rocket, Zap, Github, Linkedin, Twitter, Mail } from "lucide-react";



const HeroSection = () => {
  const roles = [
    'Software Engineer',
    'AI Systems Builder',
    'MERN Stack Developer'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseAfterComplete = 2000;
    const pauseAfterDelete = 500;

    if (!isDeleting && charIndex < currentRole.length) {
      // Typing forward
      const timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === currentRole.length) {
      // Pause before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterComplete);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      // Deleting backward
      const timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      // Move to next role after deletion
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
      }, pauseAfterDelete);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, isDeleting, currentRoleIndex, roles]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(100, 255, 218, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 255, 218, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridPulse 4s ease-in-out infinite'
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 pt-5 md:pt-5 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-300 text-sm font-medium tracking-wider">AVAILABLE FOR OPPORTUNITIES</span>
          </motion.div>

          {/* Main Heading */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6"
              style={{ fontFamily: '"Space Grotesk", "Poppins", sans-serif' }}
            >
              <span className="text-gray-400">Hi, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-transparent">
                Raheelkhan Lohani
              </span>
            </motion.h1>

            {/* Typewriter Role */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="h-20 flex items-center"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-cyan-400" style={{ fontFamily: '"JetBrains Mono", "Courier New", monospace' }}>
                {displayedText}
                <span className="inline-block w-1 h-8 md:h-10 bg-cyan-400 ml-1 animate-blink" />
              </h2>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Building intelligent systems that bridge human intuition and machine precision. 
            Crafting scalable architectures with a systems-thinking approach.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(100,255,218,0.5)]">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="px-8 py-4 border-2 border-cyan-500/30 rounded-lg font-semibold text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300">
              Get In Touch
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex gap-4 pt-4"
          >
            {[
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Twitter, label: "Twitter", href: "#" },
              { icon: Mail, label: "Email", href: "#" },
            ].map(({ icon: Icon, label, href }, i) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group w-12 h-12 flex items-center justify-center border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(100,255,218,0.35)]"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Icon className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300" />
              </a>
            ))}
          </motion.div>

        </motion.div>

        {/* Right - Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="relative p-4"
        >
          {/* Outer Glow Frame */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-violet-500/30 to-pink-500/30 rounded-2xl blur-3xl animate-pulse" />
          
          {/* Image Container with Border */}
          <div className="relative bg-gradient-to-br from-cyan-500/20 to-violet-500/20 p-1 rounded-2xl">
            <div className="relative overflow-hidden rounded-xl bg-[#0f0f17]">
              {/* Placeholder - Replace with your actual image */}
              <img 
                src={profile_photo} 
                alt="Raheelkhan Lohani - Software Engineer"
                className="w-full h-auto max-h-[640px] object-cover"
              />
              
              {/* Overlay Grid Effect */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(100, 255, 218, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(100, 255, 218, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              />
            </div>
          </div>

          {/* Floating Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 bg-[#0f0f17]/90 backdrop-blur-xl border border-cyan-500/30 rounded-xl ms-2 md:ms-0 p-4 shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="group w-12 h-12 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <Rocket className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>

              <div>
                <p className="text-xs text-gray-500 font-medium">CURRENTLY BUILDING</p>
                <p className="text-sm text-white font-semibold">AI-Powered Systems</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute -top-6 -right-6 bg-[#0f0f17]/90 backdrop-blur-xl border border-violet-500/30 rounded-xl p-4 me-2 md:me-0 shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="group w-12 h-12 bg-gradient-to-br from-violet-500 to-pink-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Zap className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>


              <div>
                <p className="text-xs text-gray-500 font-medium">EXPERTISE</p>
                <p className="text-sm text-white font-semibold">Full-Stack + AI</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        @keyframes gridPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;