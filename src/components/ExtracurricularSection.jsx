import { motion } from 'framer-motion';
import { Award, Zap, HeartPulse } from 'lucide-react';
import './AccoladesSection.css';

const extracurriculars = [
  { id: 'swim', title: 'National-level Swimmer', stats: '50+', suffix: ' Medals', icon: <Award size={32} /> },
  { id: 'ecell', title: 'Design Lead', stats: 'E-Cell', suffix: '', icon: <Zap size={32} /> },
  { id: 'health', title: 'Health-O-Tech Club', stats: 'Core', suffix: ' Member', icon: <HeartPulse size={32} /> }
];

export default function ExtracurricularSection() {
  return (
    <div className="accolades-wrapper">
      <section id="extracurricular" className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Extracurricular Activities</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="extra-grid">
          {extracurriculars.map((extra, i) => (
            <motion.div
              key={extra.id}
              className="extra-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
