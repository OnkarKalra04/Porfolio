import { motion } from 'framer-motion';
import { Box, ExternalLink, FileText } from 'lucide-react';
import './CadProjectsSection.css';

const cadProjects = [
  {
    id: 'boeing',
    title: 'Boeing 737 CAD Model',
    description: 'Detailed 3D model of the Boeing 737 focusing on aerodynamic surfacing and structural integrity.',
    type: 'Commercial Aircraft',
    link: 'https://drive.google.com/file/d/1t47zM1KGKRwLa1q-UCY4j-NJGhL7i1Ed/view'
  },
  {
    id: 'missile',
    title: 'Missile Design – Dracarys',
    description: 'Advanced missile concept design emphasizing high-speed aerodynamics and payload capacity.',
    type: 'Defense Concept',
    link: 'https://drive.google.com/file/d/1HGAGMZgEEL0aiVNpdMLregm5Pevcy2Gd/view'
  },
  {
    id: 'uav',
    title: 'UAV Design',
    description: 'Unmanned Aerial Vehicle engineered for extended flight duration and surveillance capabilities.',
    type: 'Autonomous Systems',
    link: 'https://drive.google.com/file/d/1oyzexLefng3kbZB6u0-wPoQgbLiMZ82y/view'
  }
];

export default function CadProjectsSection() {
  return (
    <section id="cad-projects" className="cad-projects-section section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-header-center"
      >
        <h2 className="section-title">Aerospace CAD Projects</h2>
        <div className="title-underline center"></div>
      </motion.div>

      <div className="cad-grid">
        {cadProjects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="cad-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="cad-model-container">
              <div className="placeholder-model">
                <motion.div
                  animate={{ 
                    rotateY: [0, 360],
                  }}
                  transition={{ 
                    duration: 25, repeat: Infinity, ease: "linear"
                  }}
                  className="wireframe-box"
                >
                  <Box size={64} strokeWidth={1} color="rgba(0,0,0,0.05)" />
                </motion.div>
                <div className="spotlight"></div>
              </div>
            </div>
            
            <div className="cad-info glass-panel">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-premium"
              >
                <FileText size={16} />
                <span>Report</span>
                <ExternalLink size={12} className="external-icon" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
