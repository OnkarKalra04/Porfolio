import { motion, useScroll, useSpring } from 'framer-motion';
import './App.css';

import CinematicHeroSection from './components/CinematicHeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import CadProjectsSection from './components/CadProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ResearchSection from './components/ResearchSection';
import TrainingSection from './components/TrainingSection';
import CertificationsSection from './components/CertificationsSection';
import ExtracurricularSection from './components/ExtracurricularSection';
import ContactSection from './components/ContactSection';
import BackgroundDecor from './components/BackgroundDecor';
import Navbar from './components/Navbar';

const NarrativeBridge = ({ text }) => (
  <motion.div 
    className="narrative-bridge"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className="bridge-line"></div>
    <span className="bridge-text">{text}</span>
    <div className="bridge-line"></div>
  </motion.div>
);

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app-container" id="home">
      <Navbar />
      <BackgroundDecor />
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX }}
      />

      <main>
        <CinematicHeroSection />
        
        <AboutSection />
        <SkillsSection />
        
        <NarrativeBridge text="Systems Thinking" />
        <ExperienceSection />
        
        <NarrativeBridge text="Product Thinking" />
        <CaseStudiesSection />
        
        <NarrativeBridge text="Aerospace Engineering" />
        <CadProjectsSection />
        
        <NarrativeBridge text="Research & AI" />
        <ResearchSection />
        
        <TrainingSection />
        <CertificationsSection />
        <ExtracurricularSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
