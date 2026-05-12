import { motion } from 'framer-motion';
import { Award, Zap, HeartPulse, ExternalLink, Plus } from 'lucide-react';
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
    link: 'https://weather-api-blond-sigma.vercel.app/'
  }
];

const certifications = [
  { id: 'c1', title: 'Advanced CFD Analysis', issuer: 'Coursera' },
  { id: 'c2', title: 'Python for Data Science', issuer: 'IBM' },
  { id: 'c3', title: 'Machine Learning Basics', issuer: 'Stanford' },
  { id: 'c4', title: 'Project Management Pro', issuer: 'Google' },
  { id: 'c5', title: 'Aircraft Design Principles', issuer: 'NPTEL' },
  { id: 'c6', title: '+ 155 More', issuer: 'Various Institutions', isMore: true }
];

const extracurriculars = [
  { id: 'swim', title: 'National-level Swimmer', stats: '50+', suffix: ' Medals', icon: <Award size={32} /> },
  { id: 'ecell', title: 'Design Lead', stats: 'E-Cell', suffix: '', icon: <Zap size={32} /> },
  { id: 'health', title: 'Health-O-Tech Club', stats: 'Core', suffix: ' Member', icon: <HeartPulse size={32} /> }
];

export default function AccoladesSection() {
  return (
    <div className="accolades-wrapper">
      {/* Training Section */}
      <section id="training" className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Training</h2>
          <div className="title-underline"></div>
        </motion.div>
        
        <div className="training-grid">
          {training.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="training-card-link"
              >
                <div className="training-card glass-panel">
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Certifications</h2>
          <div className="title-underline"></div>
        </motion.div>
        
        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              className={`cert-card ${cert.isMore ? 'cert-more' : 'glass-panel'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, borderColor: 'var(--accent-secondary)' }}
            >
              {cert.isMore ? (
                <div className="more-content">
                  <Plus size={24} />
                  <h3>{cert.title}</h3>
                </div>
              ) : (
                <>
                  <h3>{cert.title}</h3>
                  <span>{cert.issuer}</span>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Extracurriculars Section */}
      <section id="extracurricular" className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Extracurricular Activities</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="extra-grid">
          {extracurriculars.map((extra, i) => (
            <motion.div
              key={extra.id}
              className="extra-card glass-panel"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, delay: i * 0.2 }}
            >
              <div className="extra-icon">{extra.icon}</div>
              <div className="extra-stats text-gradient">
                {extra.stats}
                <span className="stats-suffix">{extra.suffix}</span>
              </div>
              <h3 className="extra-title">{extra.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
