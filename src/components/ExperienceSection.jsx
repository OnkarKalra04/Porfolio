import { motion } from 'framer-motion';
import { Briefcase, ExternalLink } from 'lucide-react';
import './ExperienceSection.css';

const experiences = [
  {
    id: 'synodic',
    company: 'Synodic Space Labs Private Limited',
    role: 'Research & Development Intern',
    duration: '2026',
    points: [
      'Contributed to rocket airframe and recovery system development for experimental flight missions.',
      'Collaborated with avionics and testing teams to validate flight system performance.',
      'Assisted in mission testing workflows targeting high-altitude experimental launches.'
    ]
  },
  {
    id: 'hal',
    company: 'Hindustan Aeronautics Limited (HAL)',
    role: 'Intern',
    duration: '2024',
    points: [
      'Analyzed aircraft control systems and aerodynamic behavior to study design trade-offs.',
      'Documented technical findings and operational insights through detailed research reports.',
      'Worked on system-level analysis and performance evaluation workflows.'
    ],
    link: 'https://drive.google.com/file/d/1JmgHD1UgUWXGb1H9ghEbKUqQ7UVcR4CF/view',
    linkText: 'Report'
  },
  {
    id: 'star',
    company: 'Star Space Technology & Aeronautical Rocketry',
    role: 'Satellite Design Intern',
    duration: '2023',
    points: [
      'Led a 6-member team to design a CubeSat prototype using CAD and rapid prototyping tools.',
      'Coordinated subsystem integration including telemetry, communication, and structural modules.',
      'Assisted in system testing and validation for satellite development workflows.'
    ],
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="timeline-icon">
              <Briefcase size={20} />
            </div>
            
            <div className="timeline-content glass-panel">
              <span className="duration">{exp.duration}</span>
              <h3 className="role-title">{exp.role}</h3>
              <h4 className="company-name">{exp.company}</h4>
              
              <ul className="exp-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {exp.link && (
                <a 
                  href={exp.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="exp-link"
                >
                  <span>{exp.linkText || 'Technical Report'}</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
