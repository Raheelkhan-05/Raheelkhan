import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { GraduationCap, Briefcase, Rocket, Trophy, Calendar, MapPin } from 'lucide-react';

const TimelineSection = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const timelineData = [
    {
      year: "2022",
      title: "Joined Marwadi University",
      description: "Embarked on my journey in Computer Science & Engineering, diving deep into foundational technologies and system design principles.",
      icon: GraduationCap,
      color: "cyan",
      date: "August 2022",
      location: "Rajkot, Gujarat",
      tags: ["B.Tech CSE", "Academics", "Foundation"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      year: "2024",
      title: "MERN Stack Internship",
      subtitle: "BrainyBeam Technologies",
      description: "Built full-stack web applications using MongoDB, Express, React, and Node.js. Delivered scalable solutions and collaborated with cross-functional teams.",
      icon: Briefcase,
      color: "violet",
      date: "June - August 2024",
      location: "Remote",
      tags: ["MERN", "Full-Stack", "Production"],
      gradient: "from-violet-500 to-purple-500"
    },
    {
      year: "2025",
      title: "AI Projects & Leadership",
      description: "Led multiple AI/ML projects, from LLM-powered applications to computer vision systems. Mentored peers and organized technical workshops.",
      icon: Rocket,
      color: "pink",
      date: "January 2025",
      location: "Marwadi University",
      tags: ["AI/ML", "Leadership", "Innovation"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      year: "2026",
      title: "Ready for Industry",
      description: "Armed with hands-on experience in full-stack development and AI systems, ready to contribute to cutting-edge technology teams.",
      icon: Trophy,
      color: "emerald",
      date: "Graduating 2026",
      location: "Open to Opportunities",
      tags: ["Career", "Innovation", "Growth"],
      gradient: "from-emerald-500 to-teal-500",
      highlight: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section 
      id="timeline"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f] py-32 pt-10"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Radial Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Subtle Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100, 255, 218, 1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 255, 218, 1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full mb-4">
              <Calendar className="w-4 h-4 text-violet-400" />
              <span className="text-violet-300 text-sm font-medium tracking-wider">MY JOURNEY</span>
            </div>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-violet-100 to-pink-200 bg-clip-text text-transparent mb-4"
              style={{ fontFamily: '"Orbitron", "Space Grotesk", sans-serif' }}
            >
              Timeline
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From student to software engineer — a journey of continuous learning and innovation
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div ref={timelineRef} className="relative">
            {/* Center Line - Animated on Scroll */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent hidden lg:block">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-gradient-to-b from-cyan-400 via-violet-400 to-pink-400 shadow-[0_0_10px_rgba(100,255,218,0.5)]"
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-16 lg:space-y-24">
              {timelineData.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;

                return (
                  <TimelineItem
                    key={index}
                    item={item}
                    index={index}
                    isLeft={isLeft}
                    Icon={Icon}
                  />
                );
              })}
            </div>

            {/* End Marker */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="absolute bottom-0 left-[49.05%] -translate-x-1/2  w-6 h-6 hidden lg:block"
            >
              <div className="w-full h-full bg-gradient-to-br from-pink-500 to-violet-500 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.6)] animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-violet-400 rounded-full blur-md animate-pulse" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, index, isLeft, Icon }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -100 : 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.2
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.2 + 0.3
      }
    }
  };

  return (
    <div ref={itemRef} className="relative">
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left Side */}
        {isLeft ? (
          <>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex justify-end"
            >
              <TimelineCard item={item} Icon={Icon} />
            </motion.div>
            <div className="relative">
              <motion.div
                variants={dotVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[calc(50%+1rem)]"
              >
                <TimelineDot item={item} Icon={Icon} />
              </motion.div>
            </div>
          </>
        ) : (
          <>
            <div className="relative">
              <motion.div
                variants={dotVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[calc(50%+1rem)]"
              >
                <TimelineDot item={item} Icon={Icon} />
              </motion.div>
            </div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <TimelineCard item={item} Icon={Icon} />
            </motion.div>
          </>
        )}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex gap-6">
        <div className="flex flex-col items-center">
          <motion.div
            variants={dotVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <TimelineDot item={item} Icon={Icon} mobile />
          </motion.div>
          {index < 3 && (
            <div className="w-0.5 h-full bg-gradient-to-b from-cyan-500/50 to-transparent mt-2" />
          )}
        </div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex-1 pb-8"
        >
          <TimelineCard item={item} Icon={Icon} />
        </motion.div>
      </div>
    </div>
  );
};

const TimelineDot = ({ item, Icon, mobile }) => {
  // Map colors to Tailwind classes
  const colorMap = {
    cyan: {
      border: 'border-cyan-500',
      text: 'text-cyan-400',
      glow: 'shadow-[0_0_20px_rgba(34,211,238,0.5)]'
    },
    violet: {
      border: 'border-violet-500',
      text: 'text-violet-400',
      glow: 'shadow-[0_0_20px_rgba(139,92,246,0.5)]'
    },
    pink: {
      border: 'border-pink-500',
      text: 'text-pink-400',
      glow: 'shadow-[0_0_20px_rgba(236,72,153,0.5)]'
    },
    emerald: {
      border: 'border-emerald-500',
      text: 'text-emerald-400',
      glow: 'shadow-[0_0_20px_rgba(16,185,129,0.5)]'
    }
  };

  const colors = colorMap[item.color] || colorMap.pink;

  return (
    <div className="relative group">
      {/* Outer Glow Ring */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
      
      {/* Main Dot */}
      <div className={`relative ${mobile ? 'w-12 h-12' : 'w-16 h-16'} bg-[#0a0a0f] rounded-full border-2 ${colors.border} flex items-center justify-center ${colors.glow} group-hover:scale-110 transition-transform duration-300`}>
        <div className={`absolute inset-1 bg-gradient-to-br ${item.gradient} rounded-full opacity-20`} />
        <Icon className={`${mobile ? 'w-6 h-6' : 'w-8 h-8'} ${colors.text} relative z-10`} />
      </div>

      {/* Pulse Animation */}
      <div className={`absolute inset-0 rounded-full border-2 ${colors.border} opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-1000 pointer-events-none`} />
    </div>
  );
};

const TimelineCard = ({ item, Icon }) => {
  // Map colors to Tailwind classes
  const colorMap = {
    cyan: {
      border: 'border-cyan-500/20',
      hoverBorder: 'group-hover:border-cyan-500/40',
      yearBg: 'bg-cyan-500/10',
      yearBorder: 'border-cyan-500/30',
      yearText: 'text-cyan-300',
      subtitle: 'text-cyan-400',
      tagBg: 'bg-cyan-500/10',
      tagBorder: 'border-cyan-500/20',
      tagText: 'text-cyan-300'
    },
    violet: {
      border: 'border-violet-500/20',
      hoverBorder: 'group-hover:border-violet-500/40',
      yearBg: 'bg-violet-500/10',
      yearBorder: 'border-violet-500/30',
      yearText: 'text-violet-300',
      subtitle: 'text-violet-400',
      tagBg: 'bg-violet-500/10',
      tagBorder: 'border-violet-500/20',
      tagText: 'text-violet-300'
    },
    pink: {
      border: 'border-pink-500/20',
      hoverBorder: 'group-hover:border-pink-500/40',
      yearBg: 'bg-pink-500/10',
      yearBorder: 'border-pink-500/30',
      yearText: 'text-pink-300',
      subtitle: 'text-pink-400',
      tagBg: 'bg-pink-500/10',
      tagBorder: 'border-pink-500/20',
      tagText: 'text-pink-300'
    },
    emerald: {
      border: 'border-emerald-500/20',
      hoverBorder: 'group-hover:border-emerald-500/40',
      yearBg: 'bg-emerald-500/10',
      yearBorder: 'border-emerald-500/30',
      yearText: 'text-emerald-300',
      subtitle: 'text-emerald-400',
      tagBg: 'bg-emerald-500/10',
      tagBorder: 'border-emerald-500/20',
      tagText: 'text-emerald-300'
    }
  };

  const colors = colorMap[item.color] || colorMap.pink;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative max-w-md"
    >
      {/* Hover Glow Effect */}
      <div className={`absolute -inset-1 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
      
      {/* Card */}
      <div className={`relative bg-gradient-to-br from-[#0f0f17]/95 to-[#0f0f17]/80 backdrop-blur-xl border ${item.highlight ? 'border-emerald-500/40' : colors.border} ${colors.hoverBorder} rounded-2xl p-6 shadow-2xl overflow-hidden transition-colors duration-300`}>
        {/* Animated Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100, 255, 218, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 255, 218, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Highlight Badge */}
        {item.highlight && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-emerald-400 text-xs font-semibold animate-pulse">
            CURRENT
          </div>
        )}

        {/* Year Badge */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`px-4 py-1.5 ${colors.yearBg} border ${colors.yearBorder} rounded-full`}>
            <span className={`${colors.yearText} font-bold text-lg`} style={{ fontFamily: '"Orbitron", monospace' }}>
              {item.year}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 
          className="text-2xl font-bold text-white mb-2  transition-colors duration-300"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          {item.title}
        </h3>

        {/* Subtitle */}
        {item.subtitle && (
          <p className={`${colors.subtitle} font-semibold mb-3`}>
            {item.subtitle}
          </p>
        )}

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-4 text-sm">
          {item.description}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{item.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{item.location}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 ${colors.tagBg} border ${colors.tagBorder} rounded-md ${colors.tagText} text-xs font-medium`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Accent Line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      </div>
    </motion.div>
  );
};

export default TimelineSection;