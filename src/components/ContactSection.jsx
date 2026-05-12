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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-gradient contact-title">Let's Build the Future</h2>
        <p className="contact-subtitle">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="contact-buttons">
          <motion.a 
            href="mailto:onkarkalra2k4@gmail.com" 
            className="btn-premium contact-btn"
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={18} />
            <span>Email Me</span>
            <ExternalLink size={12} className="external-icon" />
          </motion.a>

          <motion.a 
            href="https://www.linkedin.com/in/onkar-kalra/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-premium contact-btn"
            whileTap={{ scale: 0.98 }}
          >
            <FaLinkedin size={18} />
            <span>LinkedIn</span>
            <ExternalLink size={12} className="external-icon" />
          </motion.a>

          <motion.a 
            href="https://github.com/OnkarKalra04" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-premium contact-btn"
            whileTap={{ scale: 0.98 }}
          >
            <FaGithub size={18} />
            <span>GitHub</span>
            <ExternalLink size={12} className="external-icon" />
          </motion.a>

        </div>
      </motion.div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Onkar Kalra. Built with React & Framer Motion.</p>
      </footer>
    </section>
  );
}
