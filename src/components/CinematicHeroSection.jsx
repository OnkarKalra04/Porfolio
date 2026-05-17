import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Plane, Waves, ArrowRight, Download, Linkedin, Github, Mail, Box } from 'lucide-react';
import './CinematicHeroSection.css';

export default function CinematicHeroSection() {
  const scrollToWork = (e) => {
    e.preventDefault();
    const element = document.querySelector('#experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Image Container */}
      <div className="hero-bg">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <motion.div 
          className="hero-subtitle"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="glow-dash"></span>
          ENGINEER. BUILDER. PROBLEM SOLVER.
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span className="text-gradient">Onkar Kalra</span>
        </motion.h1>

        <motion.div 
          className="hero-tags"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="tag"><Box size={14} /> Product Thinker</span>
          <span className="dot">•</span>
          <span className="tag"><Sparkles size={14} /> AI Enthusiast</span>
          <span className="dot">•</span>
          <span className="tag"><Plane size={14} /> Aerospace Engineer</span>
          <span className="dot">•</span>
          <span className="tag"><Waves size={14} /> Swimmer</span>
        </motion.div>

        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I build AI-powered products and design user-centric experiences
          that solve real-world problems.<br/><br/>
          Transforming complex systems into simple, impactful solutions.
        </motion.p>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#experience" onClick={scrollToWork} className="btn-primary">
            Explore My Work <ArrowRight size={16} />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            View Resume <Download size={16} />
          </a>
        </motion.div>

        <motion.div 
          className="hero-socials"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="https://linkedin.com/in/onkarkalra" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/OnkarKalra04" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github size={18} />
          </a>
          <a href="mailto:onkarkalra@example.com" className="social-icon">
            <Mail size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
