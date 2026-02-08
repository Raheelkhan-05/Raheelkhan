import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  X, ExternalLink, Github, Rocket, Zap, Target, 
  TrendingUp, ChevronRight, Sparkles
} from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Mentivio",
      tagline: "AI-powered personal learning system that adapts content using LLMs and vector search",
      category: "Full Stack + AI",
      problem: "Traditional online learning platforms offer one-size-fits-all content without adapting to individual learning patterns, pace, or knowledge gaps",
      impact: "Enhanced learning experience with AI-driven personalization, adaptive content recommendations, and interactive study tools including quizzes and flashcards",
      description: "Augmented multi-agent AI tutoring platform with quizzes, flashcards, and Socratic learning. Refined personalized learning through adaptive recommendations and progress tracking dashboards.",
      techStack: [
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      ],
      features: [
        "Multi-agent AI tutoring with conversational interface powered by LLMs",
        "Adaptive quiz generation based on learning gaps and user performance",
        "Flashcard system with intelligent review scheduling",
        "Real-time progress tracking and analytics dashboards",
        "File upload support for personalized content integration",
        "Vector search for semantic content retrieval"
      ],
      github: "https://github.com/raheelkhan",
      demo: "https://mentivio.vercel.app",
      gradient: "from-cyan-500 via-violet-500 to-pink-500",
      accentColor: "cyan"
    },
    {
      id: 2,
      name: "TedTalks Recommendation System",
      tagline: "DistilBERT-based semantic recommender for personalized TED Talk discovery",
      category: "Full Stack + ML",
      problem: "Finding relevant educational content among thousands of TED Talks is time-consuming, with basic keyword search missing semantic connections between topics",
      impact: "Improved recommendation relevance by 25% compared to TF-IDF baseline through semantic understanding, helping users discover content aligned with their interests across 4600+ TED Talks",
      description: "Built MERN stack app with Flask backend, Firebase authentication, tested with 4600+ TED Talks. Improved recommendation relevance by 25% compared to TF-IDF baseline.",
      techStack: [
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      ],
      features: [
        "Transformer-based semantic understanding using DistilBERT",
        "Real-time personalized recommendations based on viewing history",
        "User preference learning and continuous adaptation",
        "Firebase authentication and secure data storage",
        "Interactive search with semantic filtering",
        "Content library of 4600+ TED Talks with metadata"
      ],
      github: "https://github.com/raheelkhan",
      demo: "https://tedtalks-recommender.vercel.app",
      gradient: "from-violet-500 via-purple-500 to-pink-500",
      accentColor: "violet"
    },
    {
      id: 3,
      name: "Hybrid Resume Screener",
      tagline: "AI-powered ATS converting resumes into structured JSON with intelligent scoring",
      category: "Full Stack + AI",
      problem: "Traditional applicant tracking systems rely heavily on exact keyword matching, potentially missing qualified candidates who describe their skills differently",
      impact: "Improved resume parsing accuracy by 30% over traditional keyword-based systems through hybrid scoring combining semantic similarity, keyword analysis, and experience alignment",
      description: "Engineered hybrid scoring using semantic similarity, keywords, and experience alignment. Improved resume parsing accuracy by 30% over traditional keyword-based systems.",
      techStack: [
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      ],
      features: [
        "Intelligent resume parsing to structured JSON format",
        "Hybrid scoring algorithm: semantic similarity + keyword matching + experience weighting",
        "Explainable AI with detailed match breakdown and scoring rationale",
        "Batch processing capabilities for high-volume screening",
        "Interactive candidate ranking dashboard with filtering",
        "Azure OpenAI GPT-4o integration for natural language understanding"
      ],
      github: "https://github.com/raheelkhan",
      demo: "https://resume-screener.vercel.app",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      accentColor: "emerald"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f] py-20 pt-10"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
            <Rocket className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium tracking-wider">FEATURED WORK</span>
          </div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-transparent mb-4"
            style={{ fontFamily: '"Orbitron", "Space Grotesk", sans-serif' }}
          >
            Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Production-grade AI systems that solve real problems at scale
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)}
              variants={cardVariants}
            />
          ))}
        </motion.div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectCard = ({ project, onClick, variants }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      {/* Hover Glow */}
      <div className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
      
      {/* Card */}
      <div className="relative h-full bg-gradient-to-br from-[#0f0f17]/95 to-[#0f0f17]/80 backdrop-blur-xl border border-cyan-500/20 group-hover:border-cyan-500/40 rounded-2xl p-6 shadow-2xl transition-all duration-300 overflow-hidden">
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

        {/* Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-300 text-xs font-semibold">{project.category}</span>
          </div>
        </div>

        {/* Project Name */}
        <h3 
          className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          {project.name}
        </h3>

        {/* Tagline */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.tagline}
        </p>

        {/* Problem Statement */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-violet-400" />
            <span className="text-violet-300 text-xs font-semibold uppercase">Problem</span>
          </div>
          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
            {project.problem}
          </p>
        </div>

        {/* Impact */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-xs font-semibold uppercase">Impact</span>
          </div>
          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
            {project.impact}
          </p>
        </div>

        {/* Tech Stack Logos */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <div
              key={idx}
              className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 rounded-lg group-hover:scale-110 transition-transform duration-200"
              title={tech.name}
            >
              <img 
                src={tech.logo} 
                alt={tech.name}
                className="w-5 h-5 object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
          ))}
          {project.techStack.length > 4 && (
            <div className="w-8 h-8 flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-400 text-xs font-bold">
              +{project.techStack.length - 4}
            </div>
          )}
        </div>

        {/* View More Button */}
        <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-3 transition-all duration-300">
          <span>View Details</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>

        {/* Bottom Accent Line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black"
      style={{ overflow: 'hidden' }}
    >
      <div 
        className="absolute inset-0 overflow-y-auto"
        onClick={onClose}
        onWheel={(e) => e.stopPropagation()}
      >
        <div className="min-h-full flex items-center justify-center p-4 py-8">
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-gradient-to-br from-[#0f0f17] to-[#0a0a0f] border border-cyan-500/30 rounded-2xl shadow-2xl"
            >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 rounded-full text-red-400 hover:text-red-300 transition-all duration-200"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${project.gradient} rounded-2xl flex-shrink-0`}>
              <img 
                src={project.techStack[0].logo} 
                alt={project.name}
                className="w-10 h-10 object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  {project.name}
                </h3>
                <div className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded-full">
                  <span className="text-cyan-300 text-xs font-semibold">{project.category}</span>
                </div>
              </div>
              <p className="text-gray-400 text-lg">{project.tagline}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem & Impact */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-violet-400" />
                <h4 className="text-violet-300 font-semibold">Problem Statement</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <h4 className="text-emerald-300 font-semibold">Impact Delivered</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Key Features
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 rounded-lg hover:scale-105 transition-transform duration-200"
                >
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="w-5 h-5 object-contain"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                  <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-transparent hover:bg-cyan-500/10 border-2 border-cyan-500/30 hover:border-cyan-500 rounded-lg text-cyan-300 font-semibold transition-all duration-200"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 rounded-lg text-white font-semibold transition-all duration-200 hover:shadow-[0_0_30px_rgba(100,255,218,0.5)]"
            >
              <ExternalLink className="w-5 h-5" />
              View Live Demo
            </a>
          </div>
        </div>

        {/* Gradient Border Glow */}
        {/* <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl -z-10 rounded-2xl pointer-events-none`} /> */}
      </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;