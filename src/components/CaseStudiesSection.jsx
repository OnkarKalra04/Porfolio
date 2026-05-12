import { motion } from 'framer-motion';
import { ExternalLink, FileText, Layout, Play } from 'lucide-react';
import './CaseStudiesSection.css';

const caseStudies = [
  {
    id: 'pathfinder',
    title: 'PathFinder — AI Career Platform',
    summary: 'AI-powered career and decision-making platform focused on structured user journeys and guidance systems.',
    tags: ['AI Strategy', 'Product Systems', 'UX Research'],
    links: [
      { text: 'User Platform', url: 'https://path-finder-rho-five.vercel.app/', icon: <Play size={16} /> },
      { text: 'PRD', url: 'https://drive.google.com/file/d/16hCVQoc8fUO69Dw3Dfb60rRiF8VLZFTU/view', icon: <FileText size={16} /> }
    ]
  },
  {
    id: 'zomato',
    title: 'Zomato Student Program',
    summary: 'Student-focused platform and admin ecosystem designed for onboarding, engagement, and operational workflows.',
    tags: ['Growth Strategy', 'Market Research', 'Operations'],
    links: [
      { text: 'User Platform', url: 'https://crave-dash1.vercel.app/', icon: <Play size={16} /> },
      { text: 'Admin Console', url: 'https://student-launchpad-two.vercel.app/', icon: <Layout size={16} /> },
      { text: 'PRD', url: 'https://drive.google.com/file/d/1Mw5XKVlRqADX6XoDGmykIPQCsVsAcxFC/view', icon: <FileText size={16} /> }
    ]
  },
  {
    id: 'deckwale',
    title: 'DeckWale AI Redesign',
    summary: 'Redesigning the core user experience for an AI-powered presentation builder to increase user trust and granular control.',
    tags: ['AI Workflow', 'UX Design', 'Trust Systems'],
    links: [
      { text: 'Analysis Report', url: 'https://drive.google.com/file/d/1jhyIXAVEduK8oQw23qmGNMe06Rwcg-mr/view?usp=sharing', icon: <FileText size={16} /> },
      { text: 'PRD', url: 'https://drive.google.com/file/d/1XqR8r7GNXifHt2XyFU0s2_8A37NTYkRu/view?usp=sharing', icon: <FileText size={16} /> }
    ]
  }
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="case-studies-section section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Featured Case Studies</h2>
        <div className="title-underline"></div>
      </motion.div>

      <div className="case-grid">
        {caseStudies.map((study, index) => (
          <motion.div 
            key={study.id}
            className="case-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="case-card-content">
              <h3 className="case-title">{study.title}</h3>
              <p className="case-summary">{study.summary}</p>
              <div className="tags">
                {study.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="case-card-actions">
              {study.links.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-premium"
                >
                  {link.icon}
                  <span>{link.text}</span>
                  <ExternalLink size={12} className="external-icon" />
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
