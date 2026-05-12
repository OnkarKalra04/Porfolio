import { motion } from 'framer-motion';
import { Mail, FileText, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section section-container">
      <div className="contact-glow-bg"></div>
      
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-gradient contact-title">Let's Build the Future</h2>
        <p className="contact-subtitle">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="contact-buttons">
          <motion.a 
            href="mailto:contact@onkarkalra.com" 
            className="btn-premium contact-btn"
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={18} />
            <span>Email Me</span>
            <ExternalLink size={12} className="external-icon" />
          </motion.a>

          <motion.a 
            href="#" 
            className="btn-premium contact-btn"
            whileTap={{ scale: 0.95 }}
          >
            <FileText size={18} />
            <span>Resume</span>
            <ExternalLink size={12} className="external-icon" />
          </motion.a>
        </div>

        <div className="social-links">
          <motion.a 
            href="#" 
            className="social-icon"
            whileHover={{ y: -5, color: 'var(--accent-primary)' }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a 
            href="#" 
            className="social-icon"
            whileHover={{ y: -5, color: 'var(--text-primary)' }}
          >
            <FaGithub size={24} />
          </motion.a>
        </div>
      </motion.div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Onkar Kalra. Built with React & Framer Motion.</p>
      </footer>
    </section>
  );
}
