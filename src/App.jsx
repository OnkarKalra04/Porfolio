import { motion, useScroll, useSpring } from 'framer-motion';
import './App.css';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import CadProjectsSection from './components/CadProjectsSection';
import TechnicalProjectsSection from './components/TechnicalProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ResearchSection from './components/ResearchSection';
import CertificationsSection from './components/CertificationsSection';
import ExtracurricularSection from './components/ExtracurricularSection';
import ContactSection from './components/ContactSection';
import BackgroundDecor from './components/BackgroundDecor';
import Navbar from './components/Navbar';

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
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <CaseStudiesSection />
        <CadProjectsSection />
        <ResearchSection />
        <CertificationsSection />
        <SkillsSection />
        <ExtracurricularSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
