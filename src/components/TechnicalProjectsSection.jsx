import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './TechnicalProjectsSection.css';

const techProjects = [
  {
    id: 'disease',
    title: 'Symptom-Based Disease Prediction System',
    description: 'An intelligent system that predicts potential diseases based on user symptoms and allocates the most suitable doctor nearby.',
    tech: ['Python', 'Machine Learning', 'React', 'Node.js'],
    link: 'https://drive.google.com/file/d/1g9FaBOD_cQRGxym2wudNwsbCUVxay3Pg/view',
    linkLabel: 'Report',
    github: '#'
  },
  {
    id: 'weather',
    title: 'Weather App',
    description: 'Real-time weather application providing accurate forecasts, interactive maps, and severe weather alerts.',
    tech: ['JavaScript', 'API Integration', 'CSS3', 'HTML5'],
    link: 'https://weather-api-blond-sigma.vercel.app/',
    linkLabel: 'Prototype',
    github: '#'
  }
];

export default function TechnicalProjectsSection() {
  return (
    <section id="technical-projects" className="tech-projects-section section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Technical Projects</h2>
        <div className="title-underline"></div>
      </motion.div>

      <div className="tech-grid">
        {techProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="tech-card glass-panel"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="tech-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="tech-stack">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="tech-links">
              {project.github !== '#' && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-premium">
                  <FaGithub size={16} />
                  <span>Code</span>
                  <ExternalLink size={12} className="external-icon" />
                </a>
              )}
              {project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-premium">
                  <ExternalLink size={16} />
                  <span>{project.linkLabel || 'Live Preview'}</span>
                  <ExternalLink size={12} className="external-icon" />
                </a>
              )}
            </div>
            
            {/* Floating gradient orb in background */}
            <div className="floating-gradient"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
