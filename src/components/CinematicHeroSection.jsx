import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Wireframe } from '@react-three/drei';
import { Code, Box, Crosshair, Terminal, Activity, Focus, Rocket } from 'lucide-react';
import './CinematicHeroSection.css';

// --- 3D Hologram Component ---
const HolographicAircraft = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.5;
    groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
    groupRef.current.position.y = Math.sin(t) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Abstract Aircraft/Aerospace Geometry */}
      <mesh>
        <coneGeometry args={[1, 3, 4]} />
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.6} />
      </mesh>
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.5, 0.8, 1, 8]} />
        <meshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.4} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.05, 16, 32]} />
        <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.5} />
      </mesh>
    </group>
  );
};

// --- Rain Effect Component ---
const Rain = () => {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const generateDrops = () => {
      return Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${0.5 + Math.random() * 0.5}s`,
        animationDelay: `${Math.random() * 2}s`,
      }));
    };
    setDrops(generateDrops());
  }, []);

  return (
    <div className="rain-container">
      {drops.map((drop) => (
        <div 
          key={drop.id} 
          className="rain-drop" 
          style={{ 
            left: drop.left, 
            animationDuration: drop.animationDuration,
            animationDelay: drop.animationDelay 
          }} 
        />
      ))}
    </div>
  );
};

export default function CinematicHeroSection() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Normalize mouse coordinates from -1 to 1
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    
    setMousePosition({ x, y });
  };

  // Parallax calculations
  const parallaxX = mousePosition.x * 20;
  const parallaxY = mousePosition.y * 20;

  return (
    <section 
      id="home" 
      className="cinematic-hero" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Background Layers */}
      <div className="city-lights-bg" />
      <Rain />
      
      {/* Ambient Room Lighting */}
      <motion.div 
        className="room-glow glow-blue"
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="room-glow glow-purple"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Main Workspace Container (Parallax) */}
      <motion.div 
        className="workspace-container"
        animate={{
          x: -parallaxX,
          y: -parallaxY,
          rotateX: mousePosition.y * 2,
          rotateY: -mousePosition.x * 2,
        }}
        transition={{ type: "spring", stiffness: 75, damping: 20 }}
      >
        
        {/* Left Monitor: Code / System Logs */}
        <div className="monitor left-monitor glass-panel-dark">
          <div className="monitor-header">
            <Terminal size={14} /> <span>sys_core.log</span>
          </div>
          <div className="monitor-content code-scroll">
            <p className="code-line"><span className="keyword">import</span> {`{ system }`} <span className="keyword">from</span> 'aerospace_core';</p>
            <p className="code-line"><span className="keyword">const</span> ai_model = <span className="function">init_model</span>('v2.4');</p>
            <p className="code-line comment">// Initializing telemetry...</p>
            <p className="code-line">system.<span className="function">connect</span>();</p>
            <p className="code-line typing-effect">await data_sync()_</p>
          </div>
        </div>

        {/* Center Monitor: Product Wireframes & Main Identity */}
        <div className="monitor center-monitor glass-panel-dark active-monitor">
          <div className="monitor-header">
            <Focus size={14} /> <span>product_vision.fig</span>
          </div>
          <div className="center-content">
            <motion.div 
              className="identity-badge"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Rocket size={16} /> Aerospace Engineer → AI Product Builder
            </motion.div>
            
            <motion.h1 
              className="cinematic-title"
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Onkar Kalra
            </motion.h1>

            <motion.p 
              className="mission-quote"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              “Engineering systems taught me <span className="highlight-blue">structure</span>.<br/>
              Product thinking taught me <span className="highlight-purple">impact</span>.”
            </motion.p>

            <div className="wireframe-mockups">
              <div className="wire-box box-1" />
              <div className="wire-box box-2" />
              <div className="wire-box box-3" />
            </div>
          </div>
        </div>

        {/* Right Monitor: Aerospace Hologram / CAD */}
        <div className="monitor right-monitor glass-panel-dark">
          <div className="monitor-header">
            <Box size={14} /> <span>aero_model_v7.obj</span>
          </div>
          <div className="monitor-content hologram-container">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
              <HolographicAircraft />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
            <div className="hologram-overlay">
              <Crosshair size={24} className="crosshair ch-tl" />
              <Crosshair size={24} className="crosshair ch-br" />
            </div>
          </div>
        </div>

        {/* Floating UI Elements */}
        <motion.div 
          className="floating-card stat-card"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Activity size={16} /> <span>System Stable</span>
        </motion.div>

      </motion.div>

      {/* Foreground Elements (Desk Silhouette, Mug) */}
      <div className="foreground-desk">
        <div className="coffee-mug">
          <div className="steam steam-1"></div>
          <div className="steam steam-2"></div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Initialize sequence</span>
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  );
}
