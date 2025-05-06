import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Placeholder robot image (replace with your own)
const robotImage = 'https://via.placeholder.com/150?text=Robot';

function IntroInteraction() {
  const navigate = useNavigate();
  const [userAnswer, setUserAnswer] = useState('');
  const [step, setStep] = useState(0); // Track interaction steps
  const [robotResponse, setRobotResponse] = useState('');

  // Handle user input submission
  const handleSubmit = () => {
    if (userAnswer.trim() === '') return; // Prevent empty submissions

    // Robot responses based on user input
    const responses = [
      `Oh, "${userAnswer}"? That’s interesting! Let’s dive deeper into that!`,
      `Nice, you said "${userAnswer}"! I think you’re ready to explore more about yourself!`,
    ];
    setRobotResponse(responses[step]);
    setStep(step + 1);
    setUserAnswer(''); // Clear input
  };

  // Navigate to Journey Guide
  const handleProceed = () => {
    navigate('/journey-guide');
  };

  // Animation variants for the robot
  const robotVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
    bounce: {
      y: [-10, 10],
      transition: { repeat: Infinity, duration: 1.5 },
    },
  };

  // Animation variants for speech bubbles
  const bubbleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(135deg, #1F4459, #011325)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px',
        boxSizing: 'border-box',
        fontFamily: "'Poppins', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Wave Animation */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(233, 69, 96, 0.2), transparent)',
          opacity: 0.3,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ repeat: Infinity, duration: 5 }}
      />

      {/* Robot Character */}
      <motion.img
        src={robotImage}
        alt="Robot Companion"
        style={{
          width: '150px',
          height: '150px',
          marginBottom: '20px',
        }}
        variants={robotVariants}
        initial="hidden"
        animate={['visible', 'bounce']}
      />

      {/* Speech Bubbles and Interaction */}
      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        {/* Robot's Question */}
        {step === 0 && (
          <motion.div
            variants={bubbleVariants}
            initial="hidden"
            animate="visible"
            style={{
              background: '#e94560',
              color: '#fff',
              padding: '20px',
              borderRadius: '20px',
              marginBottom: '20px',
              position: 'relative',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
            }}
          >
            <p style={{ fontSize: '18px', fontWeight: '500' }}>
              Hey there! What do you think about yourself right now?
            </p>
            {/* Speech bubble tail */}
            <div
              style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '10px solid #e94560',
              }}
            />
          </motion.div>
        )}

        {step === 1 && robotResponse && (
          <motion.div
            variants={bubbleVariants}
            initial="hidden"
            animate="visible"
            style={{
              background: '#e94560',
              color: '#fff',
              padding: '20px',
              borderRadius: '20px',
              marginBottom: '20px',
              position: 'relative',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
            }}
          >
            <p style={{ fontSize: '18px', fontWeight: '500' }}>{robotResponse}</p>
            <div
              style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '10px solid #e94560',
              }}
            />
          </motion.div>
        )}

        {/* User Input */}
        {step === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Type your answer..."
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                borderRadius: '50px',
                border: '2px solid #e94560',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                width: '100%',
                maxWidth: '300px',
                marginBottom: '20px',
                outline: 'none',
              }}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
              style={{
                padding: '10px 30px',
                background: 'linear-gradient(135deg, #e94560, #ff758c)',
                color: '#fff',
                border: 'none',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(233, 69, 96, 0.5)',
              }}
            >
              Submit
            </motion.button>
          </motion.div>
        )}

        {/* Proceed Button */}
        {step === 1 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleProceed}
            style={{
              padding: '14px 36px',
              background: 'linear-gradient(135deg, #e94560, #ff758c)',
              color: '#fff',
              border: 'none',
              borderRadius: '50px',
              fontSize: '18px',
              fontWeight: '500',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(233, 69, 96, 0.5)',
            }}
          >
            Let’s Dive In!
          </motion.button>
        )}
      </div>
    </div>
  );
}

export default IntroInteraction;