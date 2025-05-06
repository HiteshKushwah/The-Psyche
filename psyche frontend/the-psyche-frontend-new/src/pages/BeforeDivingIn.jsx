// // import { useNavigate } from 'react-router-dom';
// // import { motion } from 'framer-motion';

// // function BeforeDivingIn() {
// //   const navigate = useNavigate();

// //   const handleContinue = () => {
// //     localStorage.setItem('seenIntroPage', 'true'); // Mark as seen
// //     navigate('/'); // Go to Home
// //   };

// //   return (
// //     <div
// //       style={{
// //         minHeight: '100vh',
// //         width: '100vw',
// //         background: 'linear-gradient(135deg, #011325, #1F4459, #242424)',
// //         color: '#fff',
// //         display: 'flex',
// //         flexDirection: 'column',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         padding: '40px 20px',
// //         textAlign: 'center',
// //       }}
// //     >
// //       <motion.h1
// //         initial={{ opacity: 0, y: -50 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 1 }}
// //         style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '30px' }}
// //       >
// //                     Warning
// //         Before Diving Into The Psyche World
// //       </motion.h1>
// //       <motion.div
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ delay: 0.5, duration: 1 }}
// //         style={{ maxWidth: '600px', fontSize: '20px', lineHeight: '1.6' }}
// //       >
// //         <p>— 🔮 Today, you will uncover the deepest truth within yourself...</p>
// //         <p>— 💭 Are you ready? — To face your fears, dreams, and the hidden secrets of your heart?</p>
// //         <p>—  🚪 Once you open this door, turning back won’t be an option.</p>
// //         <p>—  👉 Do you have the courage to take the next step? 😎</p>
// //       </motion.div>
// //       <motion.button
// //         whileHover={{ scale: 1.05 }}
// //         whileTap={{ scale: 0.95 }}
// //         onClick={handleContinue}
// //         style={{
// //           marginTop: '40px',
// //           padding: '15px 40px',
// //           background: '#e94560',
// //           color: '#fff',
// //           border: 'none',
// //           borderRadius: '50px',
// //           fontSize: '18px',
// //           cursor: 'pointer',
// //         }}
// //       >
// //         Continue to The Psyche
// //       </motion.button>
// //     </div>
// //   );
// // }

// // export default BeforeDivingIn;

// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// function BeforeDivingIn() {
//   const navigate = useNavigate();

//   const handleContinue = () => {
//     localStorage.setItem('seenIntroPage', 'true'); // Mark as seen
//     navigate('/'); // Redirect to Home
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
//     >
//       <motion.h1
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '30px' }}
//       >
//         Before Diving Into The Psyche World
//       </motion.h1>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 1 }}
//         style={{ maxWidth: '600px', fontSize: '20px', lineHeight: '1.6' }}
//       >
//      <p>— 🔮 Today, you will uncover the deepest truth within yourself...</p>
//         <p>— 💭 Are you ready? — To face your fears, dreams, and the hidden secrets of your heart?</p>
//         <p>—  🚪 Once you open this door, turning back won’t be an option.</p>
//         <p>—  👉 Do you have the courage to take the next step? 😎</p>
//       </motion.div>
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={handleContinue}
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
//         Continue to The Psyche
//       </motion.button>
//     </div>
//   );
// }

// export default BeforeDivingIn;

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function BeforeDivingIn() {
  const navigate = useNavigate();

  const handleContinue = () => {
    localStorage.setItem('seenIntroPage', 'true'); // Mark as seen
    navigate('/'); // Redirect to Home (let me know if it should be /questions)
  };

  // const handleBack = () => {
  //   navigate(-1); // Go back one page in history (to /)
  // };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        // background: 'linear-gradient(135deg, #011325, #1F4459, #242424)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px',
        textAlign: 'center',
        position: 'relative', // For positioning the back button
      }}
    >
      {/* Back Button - Below Navbar */}
      {/* <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBack}
        style={{
          position: 'absolute',
          top: '70px', // Below navbar (40px height + 20px padding + 10px buffer)
          left: '20px',
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
      </motion.button> */}

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '30px' }}
      >
        Before Diving Into The Psyche World
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ maxWidth: '600px', fontSize: '20px', lineHeight: '1.6' }}
      >
        <p>— 🔮 Today, you will uncover the deepest truth within yourself...</p>
        <p>— 💭 Are you ready? — To face your fears, dreams, and the hidden secrets of your heart?</p>
        <p>— 🚪 Once you open this door, turning back won’t be an option.</p>
        <p>— 👉 Do you have the courage to take the next step? 😎</p>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleContinue}
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
        Continue to The Psyche
      </motion.button>
    </div>
  );
}

export default BeforeDivingIn;