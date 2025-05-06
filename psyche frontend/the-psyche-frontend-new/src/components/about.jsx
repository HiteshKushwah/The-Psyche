import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa'; // For the back arrow
import bgImage from '../assets/pexels-simon73-1323550.jpg'; // Same background as Home.jsx

function About() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        // background: `url(${bgImage}) no-repeat center center/cover`,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px 20px', // Extra padding to account for fixed navbar
        boxSizing: 'border-box',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Back Arrow */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate('/')}
        style={{
          position: 'absolute',
          top: '80px',
          left: '30px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <FaArrowLeft size={24} color="#e94560" />
        <span style={{ fontSize: '18px', color: '#e94560' }}>Back to Home</span>
      </motion.div>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: '800px',
          textAlign: 'center',
          padding: '40px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
        }}
      >
        <h1
          style={{
            fontSize: '40px',
            fontWeight: '700',
            marginBottom: '20px',
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          About The Psyche
        </h1>
        <p
          style={{
            fontSize: '18px',
            fontStyle: 'italic',
            color: '#e94560',
            marginBottom: '30px',
          }}
        >
          “The journey to self-discovery begins with understanding your psyche.”
        </p>
        <p
          style={{
            fontSize: '16px',
            color: '#e0e0e0',
            lineHeight: '1.8',
            marginBottom: '20px',
          }}
        >
          I’m <strong>Hitesh Kushwah</strong>, the founder of The Psyche. Growing up, I always felt there was more to life than what meets the eye. I struggled with self-doubt, fear, and a longing to understand my true self. Like many of you, I wanted answers—why do I think the way I do? What drives my fears? How can I grow into the best version of myself?
        </p>
        <p
          style={{
            fontSize: '16px',
            color: '#e0e0e0',
            lineHeight: '1.8',
            marginBottom: '20px',
          }}
        >
          That’s when The Psyche was born. After years of studying psychology, philosophy, and personal growth, I created a platform to help others uncover the depths of their minds. It started as a small idea in 2024—a simple quiz to explore the human psyche. But with every challenge, late night, and moment of doubt, I poured my heart into building something meaningful. Today, The Psyche is a transformative journey for thousands of adults seeking clarity and growth.
        </p>
        <p
          style={{
            fontSize: '16px',
            color: '#e0e0e0',
            lineHeight: '1.8',
            marginBottom: '20px',
          }}
        >
          Our 25-question quiz analyzes five key aspects of your psyche: <strong style={{ color: '#e94560' }}>Mentality, Philosophy, Psychology, Fear, and Self-Discovery</strong>. With personalized insights, strengths, weaknesses, and advice, we empower you to take control of your journey. Whether you’re overcoming fears or seeking deeper meaning, The Psyche is here to guide you.
        </p>
        <h3
          style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#fff',
            marginBottom: '15px',
          }}
        >
          Our Mission
        </h3>
        <p
          style={{
            fontSize: '16px',
            color: '#e0e0e0',
            lineHeight: '1.8',
            marginBottom: '20px',
          }}
        >
          To inspire 1 million adults to embark on a journey of self-discovery by 2030, helping them live more fulfilled, balanced lives.
        </p>
        <h3
          style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#fff',
            marginBottom: '15px',
          }}
        >
          Join the Movement
        </h3>
        <p
          style={{
            fontSize: '16px',
            color: '#e0e0e0',
            lineHeight: '1.8',
            marginBottom: '20px',
          }}
        >
          Over 10,000 users have already discovered their psyche with us. Here’s what one of them had to say:
        </p>
        <blockquote
          style={{
            fontSize: '16px',
            fontStyle: 'italic',
            color: 'blue',
            marginBottom: '20px',
            borderLeft: '4px solid #e94560',
            paddingLeft: '20px',
          }}
        >
          "The Psyche helped me confront my fears and find peace within. It’s a game-changer!" – Priya Sharma
        </blockquote>
        <p
          style={{
            fontSize: '16px',
            color: '#e0e0e0',
            lineHeight: '1.8',
          }}
        >
          Let’s uncover your psyche together. Start your journey today.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          style={{
            marginTop: '30px',
            padding: '15px 40px',
            background: 'linear-gradient(135deg, #e94560, #ff6f91)',
            border: 'none',
            borderRadius: '50px',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '18px',
            boxShadow: '0 4px 15px rgba(233, 69, 96, 0.4)',
          }}
        >
          Start Your Journey
        </motion.button>
      </motion.div>
    </div>
  );
}

export default About;