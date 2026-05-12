import { motion } from 'framer-motion';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section id="about" className="about-section section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="about-header"
      >
        <h2 className="section-title">About Me</h2>
        <div className="title-underline"></div>
      </motion.div>

      <div className="about-content">
        <div className="about-text-container">
          <motion.div 
            className="about-block"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="block-title"><span className="accent-line"></span>The Transition</h3>
            <p>
              I’m <strong>Onkar Kalra</strong>, an Aerospace Engineering graduate transitioning into <strong>Product Management</strong>. My background helps me develop a structured approach to analyzing complex systems and building scalable technical solutions.
            </p>
          </motion.div>

          <motion.div 
            className="about-block"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="block-title"><span className="accent-line"></span>The Experience</h3>
            <p>
              Through internships at <strong>HAL (ARDC)</strong> and <strong>STAR</strong>, I worked on control systems, CFD analysis, and structural design — experiences that sharpened my <strong>systems thinking</strong> and execution mindset.
            </p>
          </motion.div>

          <motion.div 
            className="about-block"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="block-title"><span className="accent-line"></span>The Vision</h3>
            <p>
              I’ve evolved from building engineering systems to <strong>designing product experiences</strong>. With 160+ certifications and a national-level swimming background, I combine discipline with a drive to solve real-world user problems.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="about-image-area"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="about-image-wrapper"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="about-image-container circular-frame">
              <img src="/assets/onkar.jpg" alt="Onkar Kalra" className="about-profile-img" />
              <div className="frame-glow"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
