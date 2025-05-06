// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// function JourneyGuide() {
//   const navigate = useNavigate();

//   const handleBegin = () => {
//     navigate('/questions'); // Start the questions
//   };


//   const handleBack = () => {
//     navigate(-1); // Go back one page in history (to /)
//   };


//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         width: '100vw',
//         // background: 'linear-gradient(135deg, #011325, #1F4459, #242424)',
//         color: '#fff',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: '40px 20px',
//         textAlign: 'center',
//       }}


//       <motion.button
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       onClick={handleBack}
//       style={{
//         position: 'absolute',
//         top: '70px', // Below navbar (40px height + 20px padding + 10px buffer)
//         left: '20px',
//         padding: '10px 15px',
//         background: 'linear-gradient(135deg, #e94560, #ff6f91)',
//         border: 'none',
//         borderRadius: '50px',
//         color: '#fff',
//         cursor: 'pointer',
//         fontSize: '18px',
//         display: 'flex',
//         alignItems: 'center',
//         gap: '5px',
//         zIndex: 1001, // Higher than navbar's 1000
//       }}
//     >
//       ←
//     </motion.button>

//     >
//       <motion.h1
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '30px' }}

        
//       >


        
//         Your Journey Guide
//       </motion.h1>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 1 }}
//         style={{ maxWidth: '800px', fontSize: '18px', lineHeight: '1.6' }}
//       >
//         <p>Welcome to The Psyche—a 25-question adventure to uncover your true self. Here’s what’s ahead:</p>
        
//         <h2 style={{ fontSize: '24px', margin: '20px 0 10px' }}>The 5 Phases</h2>
//         <ul style={{ listStyleType: 'none', padding: 0 }}>
//           <li><strong>Mentality:</strong> How sharp is your mind? These 5 questions dig into how you think, fail, and rise. <em>Example: "When you broke, what did you learn?"</em></li>
//           <li><strong>Philosophy:</strong> What’s your life’s meaning? 5 big questions about existence and your place in it. <em>Example: "What truth would you bleed for?"</em></li>
//           <li><strong>Psychology:</strong> What’s inside your soul? 5 deep dives into your emotions and past. <em>Example: "What color are your darkest days?"</em></li>
//           <li><strong>Fear:</strong> What holds you back? 5 questions to face your shadows head-on. <em>Example: "Would you jump into what you’ve run from?"</em></li>
//           <li><strong>Self-Discovery:</strong> Who are you, really? 5 final steps to find your fire. <em>Example: "What purpose would you die for?"</em></li>
//         </ul>

//         <h2 style={{ fontSize: '24px', margin: '20px 0 10px' }}>What You’ll Learn</h2>
//         <p>You’ll see your strengths, your cracks, and what drives you. Each answer peels back a layer—by the end, you’ll know your psyche like never before.</p>

//         <h2 style={{ fontSize: '24px', margin: '20px 0 10px' }}>What’s Next?</h2>
//         <p>After the questions, you’ll get a report—your psyche’s map with insights, advice, and a nudge toward purpose. Save it, reflect on it, or share your thoughts with us!</p>
//       </motion.div>
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={handleBegin}
//         style={{
//           marginTop: '40px',
//           padding: '15px 40px',
//           background: '#e94560',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '50px',
//           fontSize: '18px',
//           cursor: 'pointer',
//         }}
//       >
//         Begin Your Journey
//       </motion.button>
//     </div>
//   );
// }

// export default JourneyGuide;

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function JourneyGuide() {
  const navigate = useNavigate();

  const handleBegin = () => {
    navigate('/questions'); // Start the questions
  };

  const handleBack = () => {
    navigate(-1); // Go back one page in history (to /)
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px',
        textAlign: 'center',
      }}
    >
      {/* Back Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBack}
        style={{
          position: 'absolute',
          top: '120px', // Below navbar (40px height + 20px padding + 10px buffer)
          left: '60px',
          padding: '10px 15px',
          background: 'linear-gradient(135deg, #e94560, #ff6f91)',
          border: 'none',
          borderRadius: '50px',
          color: '#fff',
          cursor: 'pointer',
          fontSize: '18px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          zIndex: 1001, // Higher than navbar's 1000
        }}
      >
        ←
      </motion.button>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: '48px',
          fontWeight: 'bold',
          marginBottom: '30px',
        }}
      >
        Your Journey Guide
      </motion.h1>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{
          maxWidth: '800px',
          fontSize: '18px',
          lineHeight: '1.6',
          marginBottom: '20px',
        }}
      >
        <p>
          Welcome to <strong>The Psyche</strong>—a 25-question adventure to uncover your true self. Here’s what’s ahead:
        </p>

        <h2 style={{ fontSize: '24px', margin: '20px 0 10px' }}>The 5 Phases</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <strong>Mentality:</strong> How sharp is your mind? These 5 questions dig into how you think, fail, and rise.  
            <em> Example: "When you broke, what did you learn?"</em>
          </li>
          <li>
            <strong>Philosophy:</strong> What’s your life’s meaning? 5 big questions about existence and your place in it.  
            <em> Example: "What truth would you bleed for?"</em>
          </li>
          <li>
            <strong>Psychology:</strong> What’s inside your soul? 5 deep dives into your emotions and past.  
            <em> Example: "What color are your darkest days?"</em>
          </li>
          <li>
            <strong>Fear:</strong> What holds you back? 5 questions to face your shadows head-on.  
            <em> Example: "Would you jump into what you’ve run from?"</em>
          </li>
          <li>
            <strong>Self-Discovery:</strong> Who are you, really? 5 final steps to find your fire.  
            <em> Example: "What purpose would you die for?"</em>
          </li>
        </ul>

        <h2 style={{ fontSize: '24px', margin: '20px 0 10px' }}>What You’ll Learn</h2>
        <p>
          You’ll see your strengths, your cracks, and what drives you. Each answer peels back a layer—by the end, you’ll know your psyche like never before.
        </p>

        <h2 style={{ fontSize: '24px', margin: '20px 0 10px' }}>What’s Next?</h2>
        <p>
          After the questions, you’ll get a report—your psyche’s map with insights, advice, and a nudge toward purpose. Save it, reflect on it, or share your thoughts with us!
        </p>
      </motion.div>

      {/* Start Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBegin}
        style={{
          marginTop: '40px',
          padding: '15px 40px',
          background: '#e94560',
          color: '#fff',
          border: 'none',
          borderRadius: '50px',
          fontSize: '18px',
          cursor: 'pointer',
        }}
      >
        Begin Your Journey
      </motion.button>
    </div>
  );
}

export default JourneyGuide;
