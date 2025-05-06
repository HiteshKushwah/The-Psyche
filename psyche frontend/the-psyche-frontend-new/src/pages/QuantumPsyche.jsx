// import { useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';

// function QuantumPsyche() {
//   const navigate = useNavigate();
//   const [particles, setParticles] = useState([]);

//   // Colors for the 5 phases
//   const phaseColors = {
//     Mentality: '#FFD700', // Gold
//     Philosophy: '#7B68EE', // Purple
//     Psychology: '#00CED1', // Cyan
//     Fear: '#FF4500', // Red-Orange
//     SelfDiscovery: '#32CD32', // Green
//   };

//   // Function to handle click and create a new particle
//   const handleCanvasClick = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - rect.left; // Mouse X position relative to canvas
//     const y = e.clientY - rect.top; // Mouse Y position relative to canvas

//     // Randomly select a phase for the particle
//     const phases = Object.keys(phaseColors);
//     const randomPhase = phases[Math.floor(Math.random() * phases.length)];
//     const newParticle = {
//       id: Date.now(), // Unique ID for AnimatePresence
//       x,
//       y,
//       color: phaseColors[randomPhase],
//       phase: randomPhase,
//     };

//     setParticles((prev) => [...prev, newParticle]);
//   };

//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         width: '100%',
//         background: 'linear-gradient(135deg, #1C2526, #2E3B55, #4B5EAA, #1F2A44, #0A0E17)', // Dark quantum-inspired gradient
//         color: '#fff',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: '40px 20px',
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Header and Tagline */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         style={{ textAlign: 'center', marginBottom: '30px' }}
//       >
//         <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
//           Quantum Psyche
//         </h1>
//         <p style={{ fontSize: '24px', maxWidth: '600px', margin: '0 auto' }}>
//           Shape Your Quantum Mind
//         </p>
//       </motion.div>

//       {/* Interactive Canvas */}
//       <div
//         onClick={handleCanvasClick}
//         style={{
//           width: '80%',
//           height: '400px',
//           background: 'rgba(255, 255, 255, 0.05)',
//           borderRadius: '15px',
//           position: 'relative',
//           cursor: 'pointer',
//           border: '1px solid rgba(255, 255, 255, 0.2)',
//           overflow: 'hidden',
//         }}
//       >
//         <AnimatePresence>
//           {particles.map((particle) => (
//             <motion.div
//               key={particle.id}
//               initial={{ opacity: 1, scale: 0, x: particle.x, y: particle.y }}
//               animate={{
//                 opacity: 0,
//                 scale: 2,
//                 x: particle.x + (Math.random() * 100 - 50), // Random orbit
//                 y: particle.y + (Math.random() * 100 - 50),
//               }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 3, ease: 'easeOut' }}
//               style={{
//                 position: 'absolute',
//                 width: '10px',
//                 height: '10px',
//                 background: particle.color,
//                 borderRadius: '50%',
//                 boxShadow: `0 0 15px ${particle.color}`,
//               }}
//             />
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* Instructions */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//         style={{ fontSize: '18px', marginTop: '20px', textAlign: 'center' }}
//       >
//         Click to shape your quantum psyche—each particle reflects a part of your mind.
//       </motion.p>

//       {/* Back Button */}
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => navigate('/journey-guide')}
//         style={{
//           marginTop: '30px',
//           padding: '15px 30px',
//           background: '#e94560',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '50px',
//           fontSize: '18px',
//           cursor: 'pointer',
//         }}
//       >
//         Back to Journey
//       </motion.button>
//     </div>
//   );
// }

// export default QuantumPsyche;

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

function QuantumPsyche() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [orbs, setOrbs] = useState([]);
  const [draggingOrb, setDraggingOrb] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Colors and behaviors for the 5 phases
  const phaseData = {
    Mentality: { color: '#FFD700', mass: 1, attraction: 0.5 }, // Gold, neutral
    Philosophy: { color: '#7B68EE', mass: 1.2, attraction: 0.7 }, // Purple, moderate
    Psychology: { color: '#00CED1', mass: 0.8, attraction: 0.3 }, // Cyan, weak
    Fear: { color: '#FF4500', mass: 1.5, attraction: -0.9 }, // Red-Orange, repels
    SelfDiscovery: { color: '#32CD32', mass: 1, attraction: 0.6 }, // Green, moderate
  };

  // Handle canvas click to spawn orb
  const handleCanvasClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const phases = Object.keys(phaseData);
    const randomPhase = phases[Math.floor(Math.random() * phases.length)];
    const { color, mass, attraction } = phaseData[randomPhase];

    setOrbs((prev) => [
      ...prev,
      { id: Date.now(), x, y, vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2, color, mass, attraction },
    ]);
  };

  // Handle drag start
  const handleDragStart = (e, orb) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - orb.x;
    const y = e.clientY - rect.top - orb.y;
    setDraggingOrb(orb);
    setDragOffset({ x, y });
  };

  // Handle drag move
  const handleDragMove = (e) => {
    if (draggingOrb) {
      const rect = canvasRef.current.getBoundingClientRect();
      const newX = e.clientX - rect.left - dragOffset.x;
      const newY = e.clientY - rect.top - dragOffset.y;
      setOrbs((prev) =>
        prev.map((o) => (o.id === draggingOrb.id ? { ...o, x: newX, y: newY, vx: 0, vy: 0 } : o))
      );
    }
  };

  // Handle drag end
  const handleDragEnd = () => {
    setDraggingOrb(null);
  };

  // Physics simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update orb positions
      setOrbs((prevOrbs) => {
        const newOrbs = [...prevOrbs];
        for (let i = 0; i < newOrbs.length; i++) {
          for (let j = i + 1; j < newOrbs.length; j++) {
            const dx = newOrbs[j].x - newOrbs[i].x;
            const dy = newOrbs[j].y - newOrbs[i].y;
            const distance = Math.sqrt(dx * dx + dy * dy) || 1;
            const force = (newOrbs[i].attraction * newOrbs[j].attraction) / distance;

            newOrbs[i].vx += (dx / distance) * force * 0.1;
            newOrbs[i].vy += (dy / distance) * force * 0.1;
            newOrbs[j].vx -= (dx / distance) * force * 0.1;
            newOrbs[j].vy -= (dy / distance) * force * 0.1;
          }

          newOrbs[i].x += newOrbs[i].vx;
          newOrbs[i].y += newOrbs[i].vy;

          // Boundary check
          if (newOrbs[i].x < 0) newOrbs[i].x = 0;
          if (newOrbs[i].x > canvas.width) newOrbs[i].x = canvas.width;
          if (newOrbs[i].y < 0) newOrbs[i].y = 0;
          if (newOrbs[i].y > canvas.height) newOrbs[i].y = canvas.height;
        }
        return newOrbs;
      });

      // Draw orbs
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      orbs.forEach((orb) => {
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, 15 * orb.mass, 0, Math.PI * 2);
        ctx.fillStyle = orb.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = orb.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Add event listeners
    canvas.addEventListener('mousemove', handleDragMove);
    canvas.addEventListener('mouseup', handleDragEnd);
    canvas.addEventListener('mouseleave', handleDragEnd);

    return () => {
      canvas.removeEventListener('mousemove', handleDragMove);
      canvas.removeEventListener('mouseup', handleDragEnd);
      canvas.removeEventListener('mouseleave', handleDragEnd);
    };
  }, [orbs, draggingOrb]);

  // Reset simulation
  const handleReset = () => {
    setOrbs([]);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(135deg, #1C2526, #2E3B55, #4B5EAA, #1F2A44, #0A0E17)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px',
        position: 'relative',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
          Quantum Psyche
        </h1>
        <p style={{ fontSize: '24px', maxWidth: '600px', margin: '0 auto' }}>
          Play with the gravity of your mind
        </p>
      </motion.div>

      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '15px',
          cursor: 'crosshair',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
        onClick={handleCanvasClick}
        onMouseDown={(e) => {
          const rect = canvasRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const orb = orbs.find((o) => Math.sqrt((o.x - x) ** 2 + (o.y - y) ** 2) < 15 * o.mass);
          if (orb) handleDragStart(e, orb);
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ marginTop: '20px', textAlign: 'center' }}
      >
        <p style={{ fontSize: '16px', marginBottom: '10px' }}>
          Click to launch orbs, drag to move them—watch your psyche in motion!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReset}
          style={{
            padding: '10px 20px',
            background: '#e94560',
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            fontSize: '16px',
            cursor: 'pointer',
            marginRight: '10px',
          }}
        >
          Reset
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/journey-guide')}
          style={{
            padding: '10px 20px',
            background: 'transparent',
            border: '1px solid #fff',
            borderRadius: '50px',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Back to Journey
        </motion.button>
      </motion.div>
    </div>
  );
}

export default QuantumPsyche;