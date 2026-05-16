import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
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

export default function TrainingSection() {
  return (
    <div className="accolades-wrapper">
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
    </div>
  );
}
