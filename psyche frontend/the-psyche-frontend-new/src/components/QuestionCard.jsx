// // function QuestionCard({ phase, question, options, index, onAnswer }) {
// //     return (
// //       <div style={{ padding: '20px', border: '1px solid #0f3460', borderRadius: '5px' }}>
// //         <h3>{phase.toUpperCase()} - Question {index + 1}</h3>
// //         <p>{question}</p>
// //         <div style={{ marginTop: '20px' }}>
// //           {options.map((option, idx) => (
// //             <button
// //               key={idx}
// //               onClick={() => onAnswer(option)}
// //               style={{ display: 'block', margin: '10px 0', padding: '10px', background: '#e94560', color: '#fff', border: 'none', borderRadius: '5px' }}
// //             >
// //               {option}
// //             </button>
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   }
  
// //   export default QuestionCard;

// import { motion } from 'framer-motion';

// function QuestionCard({ phase, question, options, index, onAnswer }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       style={{
//         padding: '20px',
//         background: 'rgba(255, 255, 255, 0.1)',
//         borderRadius: '10px',
//         boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//       }}
//     >
//       <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>
//         {phase.toUpperCase()} - Question {index + 1}
//       </h3>
//       <p style={{ fontSize: '18px', marginBottom: '20px' }}>{question}</p>
//       <div>
//         {options.map((option, idx) => (
//           <motion.button
//             key={idx}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => onAnswer(option)}
//             style={{
//               display: 'block',
//               width: '100%',
//               margin: '10px 0',
//               padding: '10px',
//               background: '#e94560',
//               color: '#fff',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//             }}
//           >
//             {option}
//           </motion.button>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// export default QuestionCard;
import { motion } from 'framer-motion';

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0, 
    transition: { 
      duration: 0.7, 
      ease: 'easeOut', 
      when: 'beforeChildren', 
      staggerChildren: 0.15 
    }
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.4 } }
};

// Button animation variants
const buttonVariants = {
  hidden: { opacity: 0, y: 20, rotate: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotate: 0, 
    transition: { duration: 0.5, ease: 'easeOut' } 
  },
  hover: { 
    scale: 1.1, 
    boxShadow: '0 0 20px rgba(233, 69, 96, 0.7)', 
    transition: { duration: 0.3 } 
  },
  tap: { scale: 0.9 }
};

function QuestionCard({ phase, question, options, index, onAnswer }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        padding: '30px',
        background: 'linear-gradient(145deg, #1a1a2e, #16213e)',
        borderRadius: '16px 8px 16px 8px', // Asymmetric for uniqueness
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(233, 69, 96, 0.3)',
        margin: '20px auto',
        maxWidth: '700px',
        border: '2px solid #e94560',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Progress Indicator */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        style={{
          height: '4px',
          background: '#e94560',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          fontSize: '28px',
          fontWeight: '700',
          background: 'linear-gradient(90deg, #e94560, #ff6b6b)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '20px',
          textAlign: 'center',
          letterSpacing: '1px',
        }}
      >
        {phase.toUpperCase()} - Q{index + 1}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          fontSize: '20px',
          color: '#e0e0e0',
          marginBottom: '30px',
          lineHeight: '1.6',
          textAlign: 'center',
          fontWeight: '400',
        }}
      >
        {question}
      </motion.p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
        {options.map((option, idx) => (
          <motion.button
            key={idx}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => onAnswer(option)}
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #e94560, #ff6b6b)',
              color: '#fff',
              border: '3px solid #fff',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '10px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Orbit effect */}
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                width: '140px',
                height: '140px',
                border: '1px dashed #fff',
                borderRadius: '50%',
                opacity: 0.3,
              }}
            />
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

export default QuestionCard;