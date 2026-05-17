import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Plane, Waves, ArrowRight, Download, Box, Layout, FileText, Activity, Mail } from 'lucide-react';
import './CinematicHeroSection.css';

// --- Rain Component ---
const Rain = () => {
  const [drops, setDrops] = useState([]);
  useEffect(() => {
    const generateDrops = () => Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${0.4 + Math.random() * 0.4}s`,
      animationDelay: `${Math.random() * 2}s`,
    }));
    setDrops(generateDrops());
  }, []);
  return (
    <div className="rain-container">
      {drops.map((drop) => (
        <div key={drop.id} className="rain-drop" style={{ left: drop.left, animationDuration: drop.animationDuration, animationDelay: drop.animationDelay }} />
      ))}
    </div>
  );
};

// --- Particles Component ---
const Particles = () => {
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const generateParticles = () => Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      animationDuration: `${3 + Math.random() * 4}s`,
      animationDelay: `${Math.random() * 2}s`,
    }));
    setParticles(generateParticles());
  }, []);
  return (
    <div className="particles-container">
      {particles.map((p) => (
        <div key={p.id} className="ambient-particle" style={{ left: p.left, top: p.top, width: p.size, height: p.size, animationDuration: p.animationDuration, animationDelay: p.animationDelay }} />
      ))}
    </div>
  );
};

export default function CinematicHeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    setMousePos({ x, y });
  };

  const scrollToWork = (e) => {
    e.preventDefault();
    document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const parallaxX = mousePos.x * 15;
  const parallaxY = mousePos.y * 15;

  return (
    <section id="home" className="hero-section" onMouseMove={handleMouseMove} ref={containerRef}>
      
      {/* Dynamic Background Image & Ambient Effects */}
      <motion.div 
        className="hero-bg-layer"
        animate={{ x: -parallaxX, y: -parallaxY }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <div className="hero-bg-image"></div>
        <Rain />
        <Particles />
        <div className="ambient-rgb-glow desk-glow"></div>
        <div className="ambient-rgb-glow window-glow"></div>
      </motion.div>

      <div className="hero-overlay-dark"></div>

      {/* Main Left Content */}
      <div className="hero-content">
        <motion.div className="hero-subtitle" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <span className="glow-dash"></span> ENGINEER. BUILDER. PROBLEM SOLVER.
        </motion.div>

        <motion.h1 className="hero-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          Hi, I'm <span className="text-gradient">Onkar Kalra</span>
        </motion.h1>

        <motion.div className="hero-tags" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <span className="tag"><Box size={14} /> Product Thinker</span><span className="dot">•</span>
          <span className="tag"><Sparkles size={14} /> AI Enthusiast</span><span className="dot">•</span>
          <span className="tag"><Plane size={14} /> Aerospace Engineer</span><span className="dot">•</span>
          <span className="tag"><Waves size={14} /> Swimmer</span>
        </motion.div>

        <motion.p className="hero-description" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
          I build AI-powered products and design user-centric experiences that solve real-world problems.<br/><br/>
          Transforming complex systems into simple, impactful solutions.
        </motion.p>

        <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
          <a href="#experience" onClick={scrollToWork} className="btn-primary">
            Explore My Work <ArrowRight size={16} />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            View Resume <Download size={16} />
          </a>
        </motion.div>

        <motion.div className="hero-socials" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}>
          <a href="https://linkedin.com/in/onkarkalra" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://github.com/OnkarKalra04" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="mailto:onkarkalra@example.com" className="social-icon">
            <Mail size={18} />
          </a>
        </motion.div>
      </div>

      {/* --- Invisible Interactive Hotspots (Mapped to Image Monitors) --- */}
      <motion.div 
        className="invisible-hotspots-layer"
        animate={{ x: parallaxX * 0.5, y: parallaxY * 0.5 }}
        transition={{ type: "spring", stiffness: 60, damping: 25 }}
      >
        
        {/* Hologram Aircraft (Top Right) */}
        <a 
          href="https://drive.google.com/file/d/1t47zM1KGKRwLa1q-UCY4j-NJGhL7i1Ed/view" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hotspot hologram-hotspot"
          aria-label="View CAD Project"
        >
          <div className="hotspot-glow"></div>
        </a>

        {/* Center Monitor (Research Paper) */}
        <a 
          href="https://drive.google.com/file/d/19NKp6NW-FMI3O77_NuZlvN-fBtvkfcnZ/view" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hotspot center-monitor-hotspot"
          aria-label="View Research Paper"
        >
           <div className="hotspot-glow"></div>
        </a>

        {/* Left Monitor (PathFinder) */}
        <a 
          href="https://path-finder-rho-five.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hotspot left-monitor-hotspot"
          aria-label="View PathFinder Prototype"
        >
           <div className="hotspot-glow"></div>
        </a>

        {/* Right Monitor (HAL ARDC) */}
        <a 
          href="https://drive.google.com/file/d/1JmgHD1UgUWXGb1H9ghEbKUqQ7UVcR4CF/view" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hotspot right-monitor-hotspot"
          aria-label="View HAL ARDC Report"
        >
           <div className="hotspot-glow"></div>
        </a>

      </motion.div>
    </section>
  );
}
