import { motion } from 'framer-motion';
import { Sparkles, Milestone, Rocket, Compass } from 'lucide-react';

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

      {/* Space Decorative Elements */}
      <motion.div className="space-decor rocket-1" animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 10, repeat: Infinity }}>
        <Rocket size={40} strokeWidth={1} />
      </motion.div>
      <motion.div className="space-decor satellite-1" animate={{ x: [0, 30, 0], rotate: [0, 360] }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
        <Milestone size={32} strokeWidth={1} />
      </motion.div>
      <div className="space-decor star star-1"><Sparkles size={12} /></div>
      <div className="space-decor star star-2"><Sparkles size={8} /></div>
      <div className="space-decor star star-3"><Sparkles size={10} /></div>
    </div>
  );
}
