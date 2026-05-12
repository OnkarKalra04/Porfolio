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
        <motion.div 
          className="about-text glass-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p>
            I’m <strong>Onkar Kalra</strong>, an Aerospace Engineering graduate transitioning into <strong>Product Management</strong> with a strong interest in AI-driven systems, user-focused problem solving, and product strategy. My background in aerospace has helped me develop a structured approach to analyzing complex systems, understanding technical workflows, and building scalable solutions.
          </p>
          <p>
            Through internships at organizations such as <strong>HAL (ARDC)</strong> and <strong>STAR</strong>, I worked on areas including control systems, CFD analysis, structural design, and cross-functional engineering collaboration — experiences that strengthened my systems thinking and execution mindset.
          </p>
          <p>
            Over time, my focus evolved from building engineering systems to <strong>designing product experiences</strong> and solving real user problems. I’ve worked on product case studies, AI product redesigns, PRDs, growth strategy projects, and user-centric platforms across domains including AI, career guidance, and marketplace ecosystems.
          </p>
          <p className="highlight-text">
            With 160+ certifications, national-level achievements in swimming, and leadership experience, I’m driven by building products that combine structured thinking, usability, and real-world impact.
          </p>
        </motion.div>

        <motion.div 
          className="about-image-area"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="about-image-container glass-panel">
            <div className="image-placeholder">
              <span>Photo coming soon</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
