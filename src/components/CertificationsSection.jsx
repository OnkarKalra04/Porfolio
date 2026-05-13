import { motion } from 'framer-motion';
import { Award, Zap, HeartPulse, FileText, Layout, Plus, ExternalLink } from 'lucide-react';
import './AccoladesSection.css';

const training = [
  { 
    id: 'isro', 
    title: 'ISRO Training', 
    issuer: 'Indian Space Research Organisation', 
    desc: 'Comprehensive overview of satellite communications and orbital mechanics.',
    link: 'https://drive.google.com/file/d/1sVgbTb0orhf81bJ_3AC909uc57GES4m3/view'
  },
  { 
    id: 'aero-innov', 
    title: 'AISC Training', 
    issuer: 'Aero Innovation & Skill Centre', 
    desc: 'Advanced CAD modeling and aerodynamics simulation training.',
    link: 'https://drive.google.com/file/d/1wNZQ26TQ2HKbvMmLZy8UeAe-dwMPMIIF/view?usp=sharing'
  }
];

const certifications = [
  { id: 'c1', title: 'International Radiobiology Conference', issuer: 'INMAS, DRDO', icon: <FileText size={18} /> },
  { id: 'c2', title: 'Digitalisation in the Aerospace Industry', issuer: 'Technical University of Munich (Coursera)', icon: <Layout size={18} /> },
  { id: 'c3', title: 'Wind Energy Certification', issuer: 'Technical University of Denmark', icon: <Award size={18} /> },
  { id: 'c4', title: 'ANSYS Workbench Certification', issuer: 'Udemy', icon: <Plus size={18} /> },
  { id: 'c5', title: 'CSWA — Certified SolidWorks Associate', issuer: 'SolidWorks', icon: <Layout size={18} /> },
  { id: 'c6', title: 'Product Management 101', issuer: 'Product Strategy & Lifecycle', icon: <Plus size={18} /> },
  { id: 'c7', title: 'Rocket Masterclass', issuer: 'Star Space Technology & Aeronautical Rocketry', icon: <Zap size={18} /> }
];

export default function CertificationsSection() {
  return (
    <div className="accolades-wrapper">
      {/* Training Section */}
      <section id="training" className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Training</h2>
          <div className="title-underline"></div>
        </motion.div>
        
        <div className="training-grid">
          {training.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {item.link && item.link !== '#' ? (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="training-card-link"
                >
                  <div className="training-card glass-panel clickable">
                    <div className="training-content">
                      <h3>{item.title}</h3>
                      <span className="issuer">{item.issuer}</span>
                      <p>{item.desc}</p>
                    </div>
                    <div className="training-hover-reveal">
                      <ExternalLink size={32} color="var(--accent-primary)" />
                      <span>Certificate</span>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="training-card glass-panel">
                  <div className="training-content">
                    <h3>{item.title}</h3>
                    <span className="issuer">{item.issuer}</span>
                    <p>{item.desc}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="certifications" className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Certifications</h2>
          <div className="title-underline"></div>
        </motion.div>
        
        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="cert-card glass-panel"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <div className="cert-header">
                <div className="cert-icon-container">
                  {cert.icon}
                </div>
                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <span>{cert.issuer}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
