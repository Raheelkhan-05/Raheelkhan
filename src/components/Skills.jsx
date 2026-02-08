import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Server, Brain, Layout, Wrench, 
  Database, Code2, GitBranch, Zap,
  Cpu, Network, Box, Terminal
} from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredModule, setHoveredModule] = useState(null);

  const skillModules = [
    {
      id: 'backend',
      title: 'Backend',
      icon: Server,
      color: 'cyan',
      gradient: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'Node.js', level: 'expert' },
        { name: 'Express.js', level: 'expert' },
        { name: 'REST APIs', level: 'expert' },
        { name: 'Flask', level: 'advanced' },
        { name: 'Firebase', level: 'advanced' }
      ],
      connections: ['aiml', 'database']
    },
    {
      id: 'aiml',
      title: 'AI/ML',
      icon: Brain,
      color: 'violet',
      gradient: 'from-violet-500 to-purple-500',
      skills: [
        { name: 'LLMs (GPT, Claude)', level: 'expert' },
        { name: 'Vector Databases', level: 'advanced' },
        { name: 'HuggingFace', level: 'advanced' },
        { name: 'Transformers', level: 'advanced' },
        { name: 'ML Algorithms', level: 'intermediate' }
      ],
      connections: ['backend', 'frontend']
    },
    {
      id: 'frontend',
      title: 'Frontend',
      icon: Layout,
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'React.js', level: 'expert' },
        { name: 'JavaScript (ES6+)', level: 'expert' },
        { name: 'Tailwind CSS', level: 'expert' },
        { name: 'Framer Motion', level: 'advanced' },
        { name: 'Responsive Design', level: 'expert' }
      ],
      connections: ['backend', 'tools']
    },
    {
      id: 'database',
      title: 'Database',
      icon: Database,
      color: 'pink',
      gradient: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'MongoDB', level: 'expert' },
        { name: 'MySQL', level: 'advanced' },
        { name: 'Firebase Firestore', level: 'advanced' },
        { name: 'SQL', level: 'advanced' },
        { name: 'Database Design', level: 'advanced' }
      ],
      connections: ['backend', 'tools']
    },
    {
      id: 'tools',
      title: 'Tools & Practices',
      icon: Wrench,
      color: 'orange',
      gradient: 'from-orange-500 to-amber-500',
      skills: [
        { name: 'Git/GitHub', level: 'expert' },
        { name: 'Postman', level: 'expert' },
        { name: 'CI/CD', level: 'advanced' },
        { name: 'Agile', level: 'advanced' },
        { name: 'API Testing', level: 'expert' }
      ],
      connections: ['frontend', 'database']
    },
    {
      id: 'core',
      title: 'Core',
      icon: Cpu,
      color: 'yellow',
      gradient: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Java', level: 'expert' },
        { name: 'Python', level: 'expert' },
        { name: 'C++', level: 'advanced' },
        { name: 'Data Structures', level: 'expert' },
        { name: 'Algorithms', level: 'expert' },
        { name: 'OOP', level: 'expert' }
      ],
      connections: ['backend', 'aiml']
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

  const moduleVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section 
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f] py-20 pt-10"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        
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

        {/* Connection Lines SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(100, 255, 218, 0.3)" />
              <stop offset="100%" stopColor="rgba(167, 139, 250, 0.3)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
            <Network className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium tracking-wider">SYSTEM ARCHITECTURE</span>
          </div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-transparent mb-4"
            style={{ fontFamily: '"Orbitron", "Space Grotesk", sans-serif' }}
          >
            Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interconnected modules forming a complete tech ecosystem
          </p>
        </motion.div>

        {/* System Graph */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Connection Lines Background */}
          <div className="absolute inset-0 pointer-events-none">
            {skillModules.map((module) => 
              module.connections.map((connectionId, idx) => {
                const targetModule = skillModules.find(m => m.id === connectionId);
                if (!targetModule) return null;
                
                return (
                  <motion.div
                    key={`${module.id}-${connectionId}-${idx}`}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredModule === module.id || hoveredModule === connectionId ? 0.4 : 0.15 
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/40 to-cyan-500/40"
                    style={{
                      height: '2px',
                      top: '50%',
                      left: '50%',
                      transformOrigin: 'center'
                    }}
                  />
                );
              })
            )}
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillModules.map((module) => (
              <SkillModule
                key={module.id}
                module={module}
                isHovered={hoveredModule === module.id}
                onHover={() => setHoveredModule(module.id)}
                onLeave={() => setHoveredModule(null)}
                variants={moduleVariants}
              />
            ))}
          </div>
        </motion.div>

        {/* System Status Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-300 font-medium">All Systems Operational</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 font-medium">6 Modules Active</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full">
            <Zap className="w-4 h-4 text-violet-400" />
            <span className="text-violet-300 font-medium">Production Ready</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillModule = ({ module, isHovered, onHover, onLeave, variants }) => {
  const Icon = module.icon;

  return (
    <motion.div
      variants={variants}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative"
    >
      {/* Hover Glow */}
      <div 
        className={`absolute -inset-1 bg-gradient-to-br ${module.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500`}
      />
      
      {/* Module Card */}
      <div className="relative h-full bg-gradient-to-br from-[#0f0f17]/95 to-[#0f0f17]/80 backdrop-blur-xl border border-cyan-500/20 group-hover:border-cyan-500/50 rounded-2xl p-6 shadow-2xl transition-all duration-300 overflow-hidden">
        {/* Animated Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100, 255, 218, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 255, 218, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '15px 15px'
          }}
        />

        {/* Module Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${module.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 
              className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              {module.title}
            </h3>
            <div className="flex items-center gap-1 mt-1">
              <div className={`w-1.5 h-1.5 bg-${module.color}-400 rounded-full animate-pulse`} />
              <span className={`text-${module.color}-300 text-xs font-medium`}>
                {module.skills.length} Skills
              </span>
            </div>
          </div>
        </div>

        {/* Skills List */}
        <div className="space-y-2.5">
          {module.skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center justify-between group/skill"
            >
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-cyan-400/50 rounded-full group-hover/skill:bg-cyan-400 transition-colors duration-200" />
                <span className="text-gray-300 text-sm group-hover/skill:text-white transition-colors duration-200">
                  {skill.name}
                </span>
              </div>
              <div className={`
                px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider
                ${skill.level === 'expert' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : ''}
                ${skill.level === 'advanced' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : ''}
                ${skill.level === 'intermediate' ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30' : ''}
              `}>
                {skill.level}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection Indicators */}
        <div className="mt-6 pt-4 border-t border-cyan-500/10">
          <div className="flex items-center gap-2 flex-wrap">
            <GitBranch className="w-3 h-3 text-gray-500" />
            <span className="text-gray-500 text-xs">Connected to:</span>
            {module.connections.map((conn, idx) => (
              <span key={idx} className="text-cyan-400 text-xs font-medium">
                {conn}
                {idx < module.connections.length - 1 && <span className="text-gray-600 mx-1">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${module.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      </div>
    </motion.div>
  );
};

export default Skills;