import React, { useEffect, useState } from "react";
import Section from "./Section";
import { motion, useScroll, useTransform } from "framer-motion";

const FloatingParticle = ({ size, color, top, left, delay }) => {
  return (
    <motion.div 
      className={`absolute rounded-full z-0`}
      style={{ 
        width: size, 
        height: size, 
        backgroundColor: color,
        top: `${top}%`,
        left: `${left}%`,
        filter: "blur(2px)"
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: [0.2, 0.6, 0.2], 
        y: [0, -20, 0],
        x: [0, 10, 0]
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  );
};

const ParticleField = () => {
  const particles = [
    { size: 8, color: "rgba(147, 51, 234, 0.3)", top: 10, left: 10, delay: 0 },
    { size: 12, color: "rgba(59, 130, 246, 0.3)", top: 20, left: 80, delay: 1 },
    { size: 10, color: "rgba(16, 185, 129, 0.3)", top: 30, left: 30, delay: 2 },
    { size: 14, color: "rgba(239, 68, 68, 0.3)", top: 70, left: 70, delay: 3 },
    { size: 7, color: "rgba(245, 158, 11, 0.3)", top: 80, left: 20, delay: 0.5 },
    { size: 18, color: "rgba(147, 51, 234, 0.2)", top: 90, left: 60, delay: 1.5 },
    { size: 16, color: "rgba(59, 130, 246, 0.2)", top: 40, left: 90, delay: 2.5 },
    { size: 20, color: "rgba(16, 185, 129, 0.15)", top: 50, left: 5, delay: 3.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <FloatingParticle key={index} {...particle} />
      ))}
    </div>
  );
};

const GlowingOrb = ({ color, size, top, left, delay }) => {
  return (
    <motion.div
      className="absolute rounded-full z-0"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, rgba(0,0,0,0) 70%)`,
        top: `${top}%`,
        left: `${left}%`,
      }}
      animate={{
        opacity: [0.4, 0.8, 0.4],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  );
};

const FeatureContext = () => {
  const { scrollYProgress } = useScroll();
  const [isMounted, setIsMounted] = useState(false);
  
  // Parallax effects
  const headerY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const cardsScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Add custom cursor effect
    const handleMouseMove = (e) => {
      if (isMounted) {
        const cursor = document.querySelector('.custom-cursor');
        if (cursor) {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMounted]);

  // Card hover animation variants
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: (index) => ({
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.2 * index,
        ease: [0.22, 1, 0.36, 1]
      }
    }),
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };

  const featureData = [
    {
      title: "Multilingual & Inclusive Learning",
      description: "Support for multiple languages, including regional Indian dialects, making content accessible to diverse populations worldwide.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      gradient: "from-purple-600/90 via-indigo-600/90 to-violet-600/90",
      glowColor: "rgba(147, 51, 234, 0.5)",
      shadowColor: "rgba(147, 51, 234, 0.3)"
    },
    {
      title: "Personalized Pedagogy Model",
      description: "Our AI system adapts to each learner's unique needs, learning style, and pace, creating truly individualized education.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      gradient: "from-blue-600/90 via-sky-600/90 to-cyan-600/90",
      glowColor: "rgba(37, 99, 235, 0.5)",
      shadowColor: "rgba(37, 99, 235, 0.3)"
    },
    {
      title: "Dynamic Curriculum Tailoring",
      description: "Course materials are continuously adapted by AI, generating custom quizzes and interactive elements based on your progress.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
      gradient: "from-emerald-600/90 via-green-600/90 to-teal-600/90",
      glowColor: "rgba(5, 150, 105, 0.5)",
      shadowColor: "rgba(5, 150, 105, 0.3)"
    },
    {
      title: "Teacher + AI Symbiosis",
      description: "Combining human expertise with AI to deliver personalized tutoring that transcends geographical and socioeconomic barriers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
      gradient: "from-amber-600/90 via-orange-600/90 to-yellow-600/90",
      glowColor: "rgba(245, 158, 11, 0.5)",
      shadowColor: "rgba(245, 158, 11, 0.3)"
    }
  ];

  return (
    <Section className="py-24 relative overflow-hidden">
      {/* Custom cursor */}
      <div className="custom-cursor fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference bg-white transform -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-60"></div>
      <ParticleField />
      
      <GlowingOrb color="rgba(139, 92, 246, 0.3)" size={300} top={20} left={-5} delay={1} />
      <GlowingOrb color="rgba(6, 182, 212, 0.3)" size={400} top={70} left={80} delay={2} />
      <GlowingOrb color="rgba(16, 185, 129, 0.2)" size={350} top={60} left={10} delay={0} />
      
      <div className="container relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-24"
          style={{ y: headerY }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-extrabold mb-5"
          >
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 pb-2">
              Bringing Your Learning to
            </span>
            <br />
            <span className="relative inline-block text-white">
              Life
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg text-blue-100/80 max-w-2xl mx-auto font-light"
          >
            Breaking barriers through AI-powered personalized learning experiences
          </motion.p>
        </motion.div>
        
        {/* Feature cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          style={{ opacity: cardsOpacity, scale: cardsScale }}
        >
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
              className={`relative rounded-2xl p-0.5 bg-gradient-to-r ${feature.gradient} group`}
              style={{
                boxShadow: `0 0 25px -5px ${feature.shadowColor}`,
              }}
            >
              <div className="relative bg-black/80 backdrop-blur-sm rounded-[0.9rem] p-6 h-full z-10">
                <div className="absolute inset-0 rounded-[0.9rem] bg-gradient-to-r from-black/50 to-black/60 backdrop-blur-sm z-0"></div>
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-4">
                    <div className={`p-2 rounded-xl bg-gradient-to-br ${feature.gradient}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon.props.children.props.d} />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-blue-50/90 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Animated corner accent */}
                <motion.div 
                  className="absolute bottom-3 right-3 w-16 h-16 pointer-events-none" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <svg width="64" height="64" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path 
                      d="M20 70L70 70L70 20" 
                      stroke={`url(#paint${index})`} 
                      strokeWidth="2" 
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id={`paint${index}`} x1="20" y1="70" x2="70" y2="20" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFFFFF" stopOpacity="0.1"/>
                        <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.7"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom callout section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-3xl blur-xl transform -rotate-1 scale-105"></div>
          <div className="relative bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-8 md:p-12 rounded-3xl border border-white/10 overflow-hidden">
            {/* Accent lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                  Enabling Millions
                </span> <br className="md:hidden" />
                <span className="text-white">to Receive Personal Instruction</span>
              </h2>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-sm md:text-base text-blue-100/80 text-center leading-relaxed">
                  Our technology bridges educational gaps across diverse communities, making quality education accessible to all, regardless of geographic or socioeconomic constraints.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  { value: "30+", label: "Languages Supported" },
                  { value: "10M+", label: "Learning Pathways" },
                  { value: "95%", label: "Knowledge Retention" },
                  { value: "24/7", label: "Personalized Support" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-blue-200/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default FeatureContext; 