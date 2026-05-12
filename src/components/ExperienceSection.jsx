import { motion } from 'framer-motion';
import { Briefcase, ExternalLink } from 'lucide-react';
import './ExperienceSection.css';

const experiences = [
  {
    id: 'synodic',
    company: 'Synodic Space Labs Private Limited',
    role: 'Systems Engineer Intern',
    duration: '2026',
    description: 'Assisted in structural design and integration of satellite subsystems. Conducted feasibility studies for orbital mechanics.'
  },
  {
    id: 'hal',
    company: 'Aircraft Research and Design Centre (ARDC), Hindustan Aeronautics Limited (HAL)',
    role: 'Aerospace Engineering Intern',
    duration: '2024',
    description: 'Worked on control law development and CFD analysis for advanced flight systems. Collaborated with senior engineers to optimize aerodynamic performance.',
    link: 'https://drive.google.com/file/d/1JmgHD1UgUWXGb1H9ghEbKUqQ7UVcR4CF/view',
    linkText: 'Report'
  },
  {
    id: 'star',
    company: 'Star Space Technology & Aeronautical Rocketry',
    role: 'Research Intern',
    duration: '2023',
    description: 'Participated in the design and testing of a conceptual UAV framework. Focused on weight reduction and payload optimization.',
    link: 'https://drive.google.com/file/d/1kbfOfPHDncZEQi6tA32AWuHvK8tzRs5Q/view',
    linkText: 'Report'
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience-section section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Work Experience</h2>
        <div className="title-underline"></div>
      </motion.div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id}
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-icon">
              <Briefcase size={20} />
            </div>
            
            {exp.link ? (
              <a 
                href={exp.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="timeline-content-link"
              >
                <div className="timeline-content glass-panel clickable">
                  <span className="duration">{exp.duration}</span>
                  <h3>{exp.role}</h3>
                  <h4 className="company text-gradient">{exp.company}</h4>
                  <p>{exp.description}</p>
                  <div className="link-hint">{exp.linkText || 'Report'} <ExternalLink size={14} /></div>
                </div>
              </a>
            ) : (
              <div className="timeline-content glass-panel">
                <span className="duration">{exp.duration}</span>
                <h3>{exp.role}</h3>
                <h4 className="company text-gradient">{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
