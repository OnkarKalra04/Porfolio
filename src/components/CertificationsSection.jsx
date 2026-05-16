import { motion } from 'framer-motion';
import { Award, Zap, HeartPulse, FileText, Layout, Plus, ExternalLink } from 'lucide-react';
import './AccoladesSection.css';

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
