import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ChevronDown, ExternalLink } from 'lucide-react';
import './ResearchSection.css';

const researchPapers = [
  {
    id: 'uav-power',
    title: 'Analytical Approach for Optimal Power Consumption for an Unmanned Aerial System',
    journal: 'International Conference on Sustainable Aerospace Technologies',
    date: '2025',
    abstract: 'Conducted aerodynamic analysis using ANSYS and implemented control simulations in MATLAB Simulink to optimize power consumption profiles for autonomous systems.',
    link: 'https://drive.google.com/file/d/19NKp6NW-FMI3O77_NuZlvN-fBtvkfcnZ/view'
  },
  {
    id: 'naca-4412',
    title: 'Capstone Project: Aerodynamic Analysis of NACA 4412 Airfoil',
    journal: 'Aerospace Engineering Capstone',
    date: '2025',
    abstract: 'Performed CFD-based aerodynamic analysis in ANSYS Fluent to evaluate flow separation control and airfoil performance under various flight conditions.',
    link: 'https://drive.google.com/file/d/13wwonRS3WrUhgdqi5wJfnea0Ydrqkgu4/view'
  }
];

export default function ResearchSection() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    if (expandedId === id) setExpandedId(null);
    else setExpandedId(id);
  };

  return (
    <section id="research" className="research-section section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Research & Publications</h2>
        <div className="title-underline"></div>
      </motion.div>

      <div className="research-list">
        {researchPapers.map((paper, index) => (
          <motion.div 
            key={paper.id}
            className="research-card glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div 
              className="research-header"
              onClick={() => toggleExpand(paper.id)}
            >
              <div className="research-title-group">
                <div className="paper-icon">
                  <FileText size={24} />
                </div>
                <div>
                  <h3>{paper.title}</h3>
                  <span className="journal">{paper.journal} • {paper.date}</span>
                </div>
              </div>
              <motion.div
                animate={{ rotate: expandedId === paper.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="expand-icon"
              >
                <ChevronDown size={24} />
              </motion.div>
            </div>

            <AnimatePresence>
              {expandedId === paper.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="research-details"
                >
                  <div className="abstract">
                    <h4>Abstract</h4>
                    <p>{paper.abstract}</p>
                  </div>
                  <a 
                    href={paper.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-premium"
                  >
                    <FileText size={16} />
                    <span>Research Paper</span>
                    <ExternalLink size={12} className="external-icon" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
