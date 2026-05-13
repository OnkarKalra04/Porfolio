import { motion } from 'framer-motion';
import { Sparkles, Milestone, Rocket, Cpu, Waves, Activity, Zap, Compass, Globe } from 'lucide-react';

export default function BackgroundDecor() {
  return (
    <div className="bg-decor">
      <motion.div 
        className="bg-blob blob-1"
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="bg-blob blob-2"
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="bg-blob blob-3"
        animate={{
          x: [0, 20, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* --- Aerospace Inspired --- */}
      <motion.div className="space-decor rocket-1" animate={{ y: [0, -40, 0], x: [0, 10, 0], rotate: [0, 2, 0] }} transition={{ duration: 15, repeat: Infinity }}>
        <Rocket size={48} strokeWidth={0.5} />
      </motion.div>
      <motion.div className="space-decor satellite-1" animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }}>
        <Globe size={32} strokeWidth={0.5} />
      </motion.div>
      <div className="space-decor trajectory-line"></div>

      {/* --- Tech / AI Inspired --- */}
      <div className="space-decor node node-1"><Cpu size={24} strokeWidth={0.5} /></div>
      <div className="space-decor node node-2"><Zap size={20} strokeWidth={0.5} /></div>
      <motion.div className="space-decor wave-flow" animate={{ x: [-20, 20, -20] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}>
        <Activity size={32} strokeWidth={0.5} />
      </motion.div>

      {/* --- Swimming / Sports Inspired --- */}
      <motion.div className="space-decor ripple-1" animate={{ scale: [1, 1.5, 1], opacity: [0.03, 0.01, 0.03] }} transition={{ duration: 8, repeat: Infinity }}>
        <Waves size={60} strokeWidth={0.5} />
      </motion.div>
      <div className="space-decor lane-line-1"></div>
      <div className="space-decor lane-line-2"></div>

      {/* --- Stars --- */}
      <div className="space-decor star star-1"><Sparkles size={12} /></div>
      <div className="space-decor star star-2"><Sparkles size={8} /></div>
      <div className="space-decor star star-3"><Sparkles size={10} /></div>
      <div className="space-decor star star-4"><Sparkles size={6} /></div>
    </div>
  );
}
