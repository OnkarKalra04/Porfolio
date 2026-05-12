import { motion } from 'framer-motion';
import { 
  Target, BarChart3, Bot, Layout,
  Layers, Search, Cpu, PenTool
} from 'lucide-react';
import './SkillsSection.css';

const skillCategories = [
  {
    title: 'Product Management',
    icon: <Target size={24} />,
    skills: ['Product Strategy', 'PRD Writing', 'Product Thinking', 'Roadmapping', 'Feature Prioritization', 'MVP Definition'],
    gradient: 'linear-gradient(135deg, #3b82f6, #6366f1)'
  },
  {
    title: 'Analytics & Research',
    icon: <BarChart3 size={24} />,
    skills: ['Market Research', 'User Research', 'Product Experimentation', 'Problem Definition', 'SQL'],
    gradient: 'linear-gradient(135deg, #8b5cf6, #d946ef)'
  },
  {
    title: 'AI & Modern Product Tooling',
    icon: <Bot size={24} />,
    skills: ['AI-assisted Product Development', 'ChatGPT | Claude', 'Lovable | Antigravity', 'Prompt Engineering', 'AI Prototyping'],
    gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)'
  },
  {
    title: 'Other',
    icon: <Layout size={24} />,
    skills: ['Fusion 360 | CAD Designing', 'SolidWorks | Ansys', '3D Modeling', 'Figma'],
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="title-underline"></div>
      </motion.div>

      <motion.div 
        className="skills-grid-row"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className="skill-category-card glass-panel"
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 40px -20px rgba(0,0,0,0.1)"
            }}
          >
            <div className="category-header">
              <div className="category-icon" style={{ background: category.gradient }}>
                {category.icon}
              </div>
              <h3 className="category-title">{category.title}</h3>
            </div>
            
            <div className="skills-list">
              {category.skills.map((skill, sIndex) => (
                <div key={sIndex} className="skill-item">
                  <span className="skill-bullet" style={{ background: category.gradient }}></span>
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
