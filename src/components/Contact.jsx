import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Github, Linkedin, Mail, 
  ArrowUpRight, Send, MessageSquare
} from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // REPLACE WITH YOUR ACTUAL LINKS
  const contactLinks = [
    {
      id: 'github',
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/yourusername',  // Replace with your GitHub
      username: '@yourusername',
      color: 'cyan',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/yourprofile',  // Replace with your LinkedIn
      username: '/in/yourprofile',
      color: 'violet',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      id: 'linkedin',
      name: 'Email',
      icon: Mail,
      url: 'mailto:your.email@.com',  // Replace with your email
      username: 'raheelkhan.work@gmail.com',
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f] py-10 pt-10"
    >
      {/* Slow Pulsing Glow Background */}
      <div className="absolute inset-0">
        {/* Large central glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-emerald-500/10 rounded-full blur-[150px]"
          style={{
            animation: 'pulse-slow 8s ease-in-out infinite'
          }}
        />
        
        {/* Secondary glows */}
        <div 
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]"
          style={{
            animation: 'pulse-slow 10s ease-in-out infinite',
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px]"
          style={{
            animation: 'pulse-slow 12s ease-in-out infinite',
            animationDelay: '4s'
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100, 255, 218, 1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 255, 218, 1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* CSS for slow pulse animation */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
      `}</style>

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-8">
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium tracking-wider">GET IN TOUCH</span>
          </div>

          {/* Main Heading */}
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-transparent mb-6"
            style={{ fontFamily: '"Orbitron", "Space Grotesk", sans-serif' }}
          >
            Let's build something
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              meaningful
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you have a project in mind, want to collaborate, or just want to connect—I'm always open to new opportunities and conversations.
          </p>

          {/* Contact Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            {contactLinks.map((link) => (
              <ContactLink
                key={link.id}
                link={link}
                variants={linkVariants}
              />
            ))}
          </motion.div>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full"
          >
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
            </div>
            <span className="text-emerald-300 text-sm font-medium">
              Available for new opportunities
            </span>
          </motion.div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-600 text-sm">
            <Send className="w-4 h-4" />
            <span>Response time: Usually within 24 hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactLink = ({ link, variants }) => {
  const Icon = link.icon;

  return (
    <motion.a
      href={link.url}
      target={link.id === 'email' ? '_self' : '_blank'}
      rel={link.id === 'email' ? '' : 'noopener noreferrer'}
      variants={variants}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group relative"
    >
      {/* Hover Glow */}
      <div className={`absolute -inset-2 bg-gradient-to-br ${link.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500`} />
      
      {/* Link Card */}
      <div className={`relative bg-gradient-to-br from-[#0f0f17]/95 to-[#0f0f17]/80 backdrop-blur-xl border border-${link.color}-500/30 group-hover:border-${link.color}-500/60 rounded-2xl px-8 py-6 transition-all duration-300 min-w-[335px]`}>
        {/* Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none rounded-2xl"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100, 255, 218, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 255, 218, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '15px 15px'
          }}
        />

        <div className="relative flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${link.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-6 h-6 text-white" />
            </div>

            {/* Text */}
            <div className="text-left">
              <div 
                className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                {link.name}
              </div>
              <div className={`text-xs text-${link.color}-400 font-mono`}>
                {link.username}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <ArrowUpRight className={`w-5 h-5 text-${link.color}-400 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 translate-x-1 group-hover:translate-x-0 transition-all duration-300`} />
        </div>

        {/* Bottom Accent Line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`} />
      </div>
    </motion.a>
  );
};

export default Contact;