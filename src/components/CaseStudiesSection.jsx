import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FileText, Layout, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import './CaseStudiesSection.css';

const caseStudies = [
  {
    id: 'pathfinder',
    title: 'PathFinder — AI Career Platform',
    summary: 'AI career platform focusing on structured guidance and automated user journeys.',
    tags: ['AI Strategy', 'Product Systems'],
    points: [
      'Built 0→1 AI platform for automated career transition planning.',
      'Designed PRDs, onboarding flows, and recommendation systems.',
      'Conducted user research to define core product direction.'
    ],
    links: [
      { text: 'Platform', url: 'https://path-finder-rho-five.vercel.app/', icon: <Play size={14} /> },
      { text: 'PRD', url: 'https://drive.google.com/file/d/16hCVQoc8fUO69Dw3Dfb60rRiF8VLZFTU/view', icon: <FileText size={14} /> }
    ]
  },
  {
    id: 'zomato',
    title: 'Zomato Student Program',
    summary: 'Ecosystem designed for student onboarding, engagement, and operational scale.',
    tags: ['Growth', 'Operations'],
    points: [
      'Designed initiative to boost order frequency via targeted programs.',
      'Built admin verification systems for fraud detection at scale.',
      'Defined pilot rollout and financial analysis strategies.'
    ],
    links: [
      { text: 'Platform', url: 'https://crave-dash1.vercel.app/', icon: <Play size={14} /> },
      { text: 'PRD', url: 'https://drive.google.com/file/d/1Mw5XKVlRqADX6XoDGmykIPQCsVsAcxFC/view', icon: <FileText size={14} /> }
    ]
  },
  {
    id: 'deckwale',
    title: 'DeckWale AI Redesign',
    summary: 'Core UX redesign for an AI presentation builder to increase trust and control.',
    tags: ['AI Workflow', 'UX Design'],
    points: [
      'Redesigned AI pipeline for transparency and user agency.',
      'Developed Pre-Generation Planner for real-time outline editing.',
      'Implemented feedback loops to reduce user drop-off.'
    ],
    links: [
      { text: 'Report', url: 'https://drive.google.com/file/d/1jhyIXAVEduK8oQw23qmGNMe06Rwcg-mr/view?usp=sharing', icon: <FileText size={14} /> },
      { text: 'PRD', url: 'https://drive.google.com/file/d/1XqR8r7GNXifHt2XyFU0s2_8A37NTYkRu/view?usp=sharing', icon: <FileText size={14} /> }
    ]
  }
];

export default function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  const next = () => setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

  return (
    <section id="case-studies" className="case-studies-section section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-header"
      >
        <h2 className="section-title">Featured Case Studies</h2>
        <div className="title-underline"></div>
      </motion.div>

      <div className="carousel-container">
        <button className="nav-btn prev" onClick={prev} aria-label="Previous Project">
          <ChevronLeft size={24} />
        </button>
        
        <div className="carousel-track">
          <AnimatePresence mode="popLayout" initial={false}>
            {caseStudies.map((study, index) => {
              // Simple logic for 3-card carousel visibility
              // In a small array of 3, we can just render them all and use activeIndex to style
              const isCenter = index === activeIndex;
              const isLeft = (index === (activeIndex - 1 + caseStudies.length) % caseStudies.length);
              const isRight = (index === (activeIndex + 1) % caseStudies.length);
              
              let positionClass = '';
              if (isCenter) positionClass = 'center';
              else if (isLeft) positionClass = 'left';
              else if (isRight) positionClass = 'right';

              return (
                <motion.div 
                  key={study.id}
                  layout
                  className={`case-card glass-panel ${positionClass}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.6,
                    scale: isCenter ? 1.05 : 0.92,
                    zIndex: isCenter ? 10 : 1,
                    x: isCenter ? 0 : isLeft ? -20 : 20
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="case-card-content">
                    <h3 className="case-title">{study.title}</h3>
                    <p className="case-summary">{study.summary}</p>
                    
                    <ul className="case-points">
                      {study.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>

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
              );
            })}
          </AnimatePresence>
        </div>

        <button className="nav-btn next" onClick={next} aria-label="Next Project">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
