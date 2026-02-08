import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Terminal, Award, Code2, Trophy, 
  Zap, CheckCircle2, ChevronRight
} from 'lucide-react';

const Achievements = () => {
  const sectionRef = useRef(null);
  const terminalRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isTerminalInView = useInView(terminalRef, { once: true, margin: "-50px" });
  
  const [typedLines, setTypedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Achievement data with terminal commands
  const achievements = [
    {
      id: 1,
      command: 'query semester_performance --term=5',
      output: 'SGPA: 10.0/10.0 (Semester 5)',
      icon: Award,
      color: 'cyan',
      description: 'Secured Perfect 10.0 SGPA in Semester 5 (B.Tech Computer Engineering)'
    },
    {
      id: 2,
      command: 'check degree_completion --status',
      output: 'CGPA: 9.63/10.0 (B.Tech)',
      icon: Trophy,
      color: 'emerald',
      description: 'Graduated in B.Tech in Computer Engineering with 9.63 CGPA'
    },
    {
      id: 3,
      command: 'fetch leetcode_badges --year=2024',
      output: 'LeetCode 2024 Badge: 300+ day streak',
      icon: Code2,
      color: 'violet',
      description: 'Earned LeetCode 2024 Badge for solving daily coding challenges 300+ consecutive days'
    },
    {
      id: 4,
      command: 'list certifications --filter=ml',
      output: 'Infosys Springboard: ML using Python',
      icon: Zap,
      color: 'orange',
      description: 'Explore Machine Learning using Python – Infosys Springboard (Issued Mar 2025)'
    },
    {
      id: 5,
      command: 'list certifications --filter=database',
      output: 'Oracle Academy: SQL Programming',
      icon: Award,
      color: 'cyan',
      description: 'Database Programming with SQL – Oracle Academy (Issued Oct 2023)'
    }
  ];

  // Typing animation effect
  useEffect(() => {
    if (!isTerminalInView || isTypingComplete) return;

    if (currentLineIndex < achievements.length) {
      const achievement = achievements[currentLineIndex];
      const fullCommand = `> ${achievement.command}`;
      
      if (currentText.length < fullCommand.length) {
        const timeout = setTimeout(() => {
          setCurrentText(fullCommand.slice(0, currentText.length + 1));
        }, 50); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        // Command typed, show output after delay
        const timeout = setTimeout(() => {
          setTypedLines([...typedLines, {
            command: fullCommand,
            output: achievement.output,
            color: achievement.color,
            icon: achievement.icon
          }]);
          setCurrentText('');
          setCurrentLineIndex(currentLineIndex + 1);
        }, 300);
        return () => clearTimeout(timeout);
      }
    } else {
      setIsTypingComplete(true);
    }
  }, [currentText, currentLineIndex, isTerminalInView, typedLines, achievements, isTypingComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section 
      id="achievements"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f] py-20 pt-10"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium tracking-wider">SYSTEM ACHIEVEMENTS</span>
          </div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-emerald-100 to-cyan-200 bg-clip-text text-transparent mb-4"
            style={{ fontFamily: '"Orbitron", "Space Grotesk", sans-serif' }}
          >
            Achievements
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Milestones and certifications earned through consistent execution
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Terminal Window */}
          <motion.div
            ref={terminalRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500 via-cyan-500 to-violet-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            
            {/* Terminal */}
            <div className="relative bg-gradient-to-br from-[#0f0f17]/95 to-[#0a0a0f]/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0a0f]/50 border-b border-emerald-500/20">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                </div>
                <div className="flex items-center gap-2 ml-3">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300 text-sm font-mono">achievements.sh</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm space-y-4 min-h-[500px]">
                {/* Initial prompt */}
                <div className="flex items-center gap-2 text-gray-500">
                  <ChevronRight className="w-4 h-4" />
                  <span>Fetching achievement records...</span>
                </div>
                <div className="text-emerald-400 mb-4">
                  <span className="animate-pulse">▊</span> System ready
                </div>

                {/* Typed lines */}
                {typedLines.map((line, idx) => {
                  const Icon = line.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2"
                    >
                      {/* Command */}
                      <div className="flex items-center gap-2 text-cyan-400">
                        <ChevronRight className="w-4 h-4 flex-shrink-0" />
                        <span>{line.command}</span>
                      </div>
                      {/* Output */}
                      <div className={`flex items-center gap-3 pl-6 text-${line.color}-300`}>
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <span className="font-semibold">{line.output}</span>
                        <CheckCircle2 className={`w-4 h-4 text-${line.color}-400 ml-auto`} />
                      </div>
                    </motion.div>
                  );
                })}

                {/* Current typing line */}
                {!isTypingComplete && currentText && (
                  <div className="flex items-center gap-2 text-cyan-400">
                    <ChevronRight className="w-4 h-4" />
                    <span>{currentText}</span>
                    <span className="animate-pulse">▊</span>
                  </div>
                )}

                {/* Completion message */}
                {isTypingComplete && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 pt-4 border-t border-emerald-500/20"
                  >
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Query complete. {achievements.length} records found.</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Achievement Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isTypingComplete ? "visible" : "hidden"}
            className="space-y-4"
          >
            {achievements.map((achievement, idx) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                variants={cardVariants}
                index={idx}
              />
            ))}
          </motion.div>
        </div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 font-medium">5 Achievements Unlocked</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 font-medium">Continuous Learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AchievementCard = ({ achievement, variants, index }) => {
  const Icon = achievement.icon;
  const colorClasses = {
    cyan: {
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      text: 'text-cyan-300',
      icon: 'text-cyan-400',
      gradient: 'from-cyan-500 to-blue-500'
    },
    emerald: {
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      text: 'text-emerald-300',
      icon: 'text-emerald-400',
      gradient: 'from-emerald-500 to-teal-500'
    },
    violet: {
      bg: 'bg-violet-500/10',
      border: 'border-violet-500/30',
      text: 'text-violet-300',
      icon: 'text-violet-400',
      gradient: 'from-violet-500 to-purple-500'
    },
    orange: {
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/30',
      text: 'text-orange-300',
      icon: 'text-orange-400',
      gradient: 'from-orange-500 to-amber-500'
    }
  };

  const colors = colorClasses[achievement.color];

  return (
    <motion.div
      variants={variants}
      className="group relative"
    >
      {/* Hover Glow */}
      <div className={`absolute -inset-1 bg-gradient-to-br ${colors.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
      
      {/* Card */}
      <div className={`relative bg-gradient-to-br from-[#0f0f17]/95 to-[#0f0f17]/80 backdrop-blur-xl border ${colors.border} group-hover:border-opacity-60 rounded-xl p-5 transition-all duration-300`}>
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${colors.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
            <Icon className="w-6 h-6 text-white" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h4 
                className={`text-lg font-bold ${colors.text} group-hover:text-white transition-colors duration-300`}
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                {achievement.output}
              </h4>
              <CheckCircle2 className={`w-5 h-5 ${colors.icon} flex-shrink-0`} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {achievement.description}
            </p>
            
            {/* Command hint */}
            <div className="mt-3 flex items-center gap-2 text-xs font-mono text-gray-600">
              <ChevronRight className="w-3 h-3" />
              <span>{achievement.command}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;