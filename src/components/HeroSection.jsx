import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import './HeroSection.css';

const roles = [
  "Aerospace Engineer",
  "Product & AI Enthusiast",
  "Swimmer"
];

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setMousePosition({ x, y });
  };

  return (
    <section 
      className="hero-section" 
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Glow */}
      <motion.div 
        className="background-glow glow-1"
        animate={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <motion.div 
        className="background-glow glow-2"
        animate={{
          x: mousePosition.x * -2,
          y: mousePosition.y * -2,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      <div className="hero-content">
        <motion.p 
          className="greeting"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Product Engineer
        </motion.p>
        
        <motion.h1 
          className="name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Onkar Kalra
        </motion.h1>

        <div className="roles-container">
          <motion.div
            key={currentRoleIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="role-text"
          >
            {roles[currentRoleIndex]}
          </motion.div>
        </div>

        <motion.button
          className="btn-premium hero-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span>Explore Projects</span>
          <ArrowDown size={14} />
        </motion.button>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={24} color="var(--text-secondary)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
