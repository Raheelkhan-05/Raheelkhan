import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Code2, Cpu, Network, Sparkles, Terminal } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const philosophyLines = [
    "I don't just write code.",
    "I design how systems think, scale, and fail gracefully.",
    "From MERN stacks to LLM-powered pipelines,",
    "I enjoy bridging software engineering",
    "with applied machine learning."
  ];

  const principles = [
    {
      icon: Brain,
      title: "Systems Thinking",
      description: "Understanding the whole picture, not just isolated components"
    },
    {
      icon: Code2,
      title: "Clean Architecture",
      description: "Building maintainable, scalable solutions that stand the test of time"
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Leveraging machine learning to create intelligent, adaptive systems"
    },
    {
      icon: Network,
      title: "Full-Stack Mastery",
      description: "From database design to user interfaces, end-to-end ownership"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f] py-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(100, 255, 218, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 255, 218, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        
        {/* Floating Orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-l-2 border-t-2 border-cyan-500/20 rounded-tl-lg" />
      <div className="absolute bottom-20 right-10 w-20 h-20 border-r-2 border-b-2 border-violet-500/20 rounded-br-lg" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Label */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-medium tracking-wider">PHILOSOPHY</span>
            </div>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-transparent"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              About Me
            </h2>
          </motion.div>

          {/* Main Philosophy Card - Glassmorphism */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            {/* Glow Effect on Hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-[#0f0f17]/90 to-[#0f0f17]/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl">
              {/* Decorative Grid Overlay */}
              <div 
                className="absolute inset-0 opacity-5 rounded-2xl pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(100, 255, 218, 0.5) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(100, 255, 218, 0.5) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px'
                }}
              />

              {/* Terminal-style Header */}
              <div className="flex items-center gap-2 mb-8">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-mono text-sm">~/about/philosophy.md</span>
                <div className="flex gap-1.5 ml-auto">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
              </div>

              {/* Philosophy Text */}
              <div className="relative space-y-4">
                {philosophyLines.map((line, index) => (
                  <motion.p
                    key={index}
                    custom={index}
                    variants={lineVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className={`${
                      index === 0 
                        ? 'text-2xl md:text-3xl lg:text-4xl font-bold text-white' 
                        : 'text-xl md:text-2xl lg:text-3xl font-medium text-gray-300'
                    } leading-relaxed`}
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    {line}
                  </motion.p>
                ))}

                {/* Decorative Quote Mark */}
                <div className="absolute -left-4 top-0 text-8xl text-cyan-500/10 font-serif leading-none select-none">
                  "
                </div>
              </div>

              {/* Signature */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-8 pt-8 border-t border-cyan-500/10"
              >
                <p className="text-cyan-400 font-mono text-sm">
                  — Raheelkhan Lohani
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Core Principles Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  {/* Card Glow on Hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:to-violet-500/20 rounded-xl blur transition-all duration-300" />
                  
                  {/* Card */}
                  <div className="relative bg-[#0f0f17]/80 backdrop-blur-xl border border-cyan-500/10 group-hover:border-cyan-500/30 rounded-xl p-6 transition-all duration-300">
                    {/* Icon */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                          {principle.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Line Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Tech Stack Showcase */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="bg-[#0f0f17]/50 backdrop-blur-xl border border-cyan-500/10 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-5 h-5 text-violet-400" />
                <h3 className="text-xl font-semibold text-white" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                  Tech Arsenal
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {[
                  'React', 'Node.js', 'MongoDB', 'Express',
                  'TensorFlow', 'PyTorch', 'LangChain', 'OpenAI',
                  'Docker', 'AWS', 'Git', 'Python'
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.8 + (index * 0.05), duration: 0.3 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 hover:border-cyan-500/40 rounded-lg text-cyan-300 text-sm font-medium cursor-default transition-all duration-200 hover:shadow-[0_0_15px_rgba(100,255,218,0.2)]"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;