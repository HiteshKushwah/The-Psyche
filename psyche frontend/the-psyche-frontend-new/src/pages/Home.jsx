// // // // // // // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // // // // // // import { motion } from 'framer-motion'; // For animations

// // // // // // // // // // // // // function Home() {
// // // // // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div
// // // // // // // // // // // // //       style={{
// // // // // // // // // // // // //         minHeight: '100vh',
// // // // // // // // // // // // //         background: 'linear-gradient(135deg, #6E5F5F, #242424, #5C7C89, #1F4459, #011325)',
// // // // // // // // // // // // //         color: '#fff',
// // // // // // // // // // // // //         padding: '0 20px',
// // // // // // // // // // // // //       }}
// // // // // // // // // // // // //     >
// // // // // // // // // // // // //       <motion.div
// // // // // // // // // // // // //         initial={{ opacity: 0, y: 50 }}
// // // // // // // // // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // // //         transition={{ duration: 1 }}
// // // // // // // // // // // // //         style={{
// // // // // // // // // // // // //           textAlign: 'center',
// // // // // // // // // // // // //           paddingTop: '100px',
// // // // // // // // // // // // //         }}
// // // // // // // // // // // // //       >
// // // // // // // // // // // // //         <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
// // // // // // // // // // // // //           Welcome to The Psyche
// // // // // // // // // // // // //         </h1>
// // // // // // // // // // // // //         <p style={{ fontSize: '24px', maxWidth: '600px', margin: '0 auto 30px' }}>
// // // // // // // // // // // // //           Embark on a journey of self-discovery through 25 carefully crafted questions.
// // // // // // // // // // // // //         </p>
// // // // // // // // // // // // //         <motion.button
// // // // // // // // // // // // //           whileHover={{ scale: 1.05 }}
// // // // // // // // // // // // //           whileTap={{ scale: 0.95 }}
// // // // // // // // // // // // //           onClick={() => navigate(localStorage.getItem('token') ? '/questions' : '/signup')}
// // // // // // // // // // // // //           style={{
// // // // // // // // // // // // //             padding: '15px 30px',
// // // // // // // // // // // // //             background: '#e94560',
// // // // // // // // // // // // //             color: '#fff',
// // // // // // // // // // // // //             border: 'none',
// // // // // // // // // // // // //             borderRadius: '50px',
// // // // // // // // // // // // //             fontSize: '18px',
// // // // // // // // // // // // //             cursor: 'pointer',
// // // // // // // // // // // // //           }}
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           Get Started
// // // // // // // // // // // // //         </motion.button>
// // // // // // // // // // // // //       </motion.div>

// // // // // // // // // // // // //       {/* About Section */}
// // // // // // // // // // // // //       <motion.div
// // // // // // // // // // // // //         initial={{ opacity: 0 }}
// // // // // // // // // // // // //         animate={{ opacity: 1 }}
// // // // // // // // // // // // //         transition={{ delay: 0.5, duration: 1 }}
// // // // // // // // // // // // //         style={{
// // // // // // // // // // // // //           maxWidth: '800px',
// // // // // // // // // // // // //           margin: '50px auto',
// // // // // // // // // // // // //           textAlign: 'center',
// // // // // // // // // // // // //           fontSize: '16px',
// // // // // // // // // // // // //           lineHeight: '1.6',
// // // // // // // // // // // // //         }}
// // // // // // // // // // // // //       >
// // // // // // // // // // // // //         <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>About The Psyche</h2>
// // // // // // // // // // // // //         <p>
// // // // // // // // // // // // //           The Psyche is a revolutionary platform designed to help you understand your inner self. Through a series of 25 thought-provoking questions, we analyze five key aspects of your psyche: Mentality, Philosophy, Psychology, Fear, and Self-discovery. Our advanced algorithm provides a detailed report with insights, strengths, weaknesses, and personalized advice to help you grow. Join thousands of users on a transformative journey to uncover the depths of your mind.
// // // // // // // // // // // // //         </p>
// // // // // // // // // // // // //       </motion.div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }

// // // // // // // // // // // // // export default Home;

// // // // // // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // // // // // import { motion } from 'framer-motion';

// // // // // // // // // // // // function Home() {
// // // // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div
// // // // // // // // // // // //       style={{
// // // // // // // // // // // //         minHeight: '100vh',
// // // // // // // // // // // //         background: 'linear-gradient(135deg, #6E5F5F, #242424, #5C7C89, #1F4459, #011325)',
// // // // // // // // // // // //         color: '#fff',
// // // // // // // // // // // //         padding: '0 20px',
// // // // // // // // // // // //       }}
// // // // // // // // // // // //     >
// // // // // // // // // // // //       <motion.div
// // // // // // // // // // // //         initial={{ opacity: 0, y: 50 }}
// // // // // // // // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // // //         transition={{ duration: 1 }}
// // // // // // // // // // // //         style={{
// // // // // // // // // // // //           textAlign: 'center',
// // // // // // // // // // // //           paddingTop: '100px',
// // // // // // // // // // // //         }}
// // // // // // // // // // // //       >
// // // // // // // // // // // //         <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
// // // // // // // // // // // //           Welcome to The Psyche
// // // // // // // // // // // //         </h1>
// // // // // // // // // // // //         <p style={{ fontSize: '24px', maxWidth: '600px', margin: '0 auto 30px' }}>
// // // // // // // // // // // //           Embark on a journey of self-discovery through 25 carefully crafted questions.
// // // // // // // // // // // //         </p>
// // // // // // // // // // // //         <motion.button
// // // // // // // // // // // //           whileHover={{ scale: 1.05 }}
// // // // // // // // // // // //           whileTap={{ scale: 0.95 }}
// // // // // // // // // // // //           onClick={() => navigate('/questions')}
// // // // // // // // // // // //           style={{
// // // // // // // // // // // //             padding: '15px 30px',
// // // // // // // // // // // //             background: '#e94560',
// // // // // // // // // // // //             color: '#fff',
// // // // // // // // // // // //             border: 'none',
// // // // // // // // // // // //             borderRadius: '50px',
// // // // // // // // // // // //             fontSize: '18px',
// // // // // // // // // // // //             cursor: 'pointer',
// // // // // // // // // // // //           }}
// // // // // // // // // // // //         >
// // // // // // // // // // // //           Get Started
// // // // // // // // // // // //         </motion.button>
// // // // // // // // // // // //       </motion.div>

// // // // // // // // // // // //       <motion.div
// // // // // // // // // // // //         initial={{ opacity: 0 }}
// // // // // // // // // // // //         animate={{ opacity: 1 }}
// // // // // // // // // // // //         transition={{ delay: 0.5, duration: 1 }}
// // // // // // // // // // // //         style={{
// // // // // // // // // // // //           maxWidth: '800px',
// // // // // // // // // // // //           margin: '50px auto',
// // // // // // // // // // // //           textAlign: 'center',
// // // // // // // // // // // //           fontSize: '16px',
// // // // // // // // // // // //           lineHeight: '1.6',
// // // // // // // // // // // //         }}
// // // // // // // // // // // //       >
// // // // // // // // // // // //         <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>About The Psyche</h2>
// // // // // // // // // // // //         <p>
// // // // // // // // // // // //           The Psyche is a revolutionary platform designed to help you understand your inner self. Through a series of 25 thought-provoking questions, we analyze five key aspects of your psyche: Mentality, Philosophy, Psychology, Fear, and Self-discovery. Our advanced algorithm provides a detailed report with insights, strengths, weaknesses, and personalized advice to help you grow. Join thousands of users on a transformative journey to uncover the depths of your mind.
// // // // // // // // // // // //         </p>
// // // // // // // // // // // //       </motion.div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }

// // // // // // // // // // // // export default Home;

// // // // // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // // // // import { motion } from 'framer-motion';
// // // // // // // // // // // import axiosInstance from '../utils/axiosInstance.js';

// // // // // // // // // // // function Home() {
// // // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // // //   const handleGetStarted = async () => {
// // // // // // // // // // //     const token = localStorage.getItem('token');
// // // // // // // // // // //     if (!token) {
// // // // // // // // // // //       // Agar token nahi hai, login pe bhej do
// // // // // // // // // // //       navigate('/login');
// // // // // // // // // // //       return;
// // // // // // // // // // //     }

// // // // // // // // // // //     try {
// // // // // // // // // // //       // Token hai, toh analysis start karo
// // // // // // // // // // //       await axiosInstance.get('/psyche/start');
// // // // // // // // // // //       navigate('/questions');
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       // Token invalid hai ya expired, login pe bhej do
// // // // // // // // // // //       navigate('/login');
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div
// // // // // // // // // // //       style={{
// // // // // // // // // // //         minHeight: '100vh',
// // // // // // // // // // //         width: '100%',
// // // // // // // // // // //         background: 'linear-gradient(135deg, #6E5F5F, #242424, #5C7C89, #1F4459, #011325)',
// // // // // // // // // // //         color: '#fff',
// // // // // // // // // // //         display: 'flex',
// // // // // // // // // // //         flexDirection: 'column',
// // // // // // // // // // //         justifyContent: 'center',
// // // // // // // // // // //         alignItems: 'center',
// // // // // // // // // // //         padding: '40px 20px',
// // // // // // // // // // //       }}
// // // // // // // // // // //     >
// // // // // // // // // // //       <motion.div
// // // // // // // // // // //         initial={{ opacity: 0, y: 50 }}
// // // // // // // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // // // // // // //         transition={{ duration: 1 }}
// // // // // // // // // // //         style={{ textAlign: 'center' }}
// // // // // // // // // // //       >
// // // // // // // // // // //         <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
// // // // // // // // // // //           Welcome to The Psyche
// // // // // // // // // // //         </h1>
// // // // // // // // // // //         <p style={{ fontSize: '24px', maxWidth: '600px', margin: '0 auto 30px' }}>
// // // // // // // // // // //           Embark on a journey of self-discovery through 25 carefully crafted questions.
// // // // // // // // // // //         </p>
// // // // // // // // // // //         <motion.button
// // // // // // // // // // //           whileHover={{ scale: 1.05 }}
// // // // // // // // // // //           whileTap={{ scale: 0.95 }}
// // // // // // // // // // //           onClick={handleGetStarted}
// // // // // // // // // // //           style={{
// // // // // // // // // // //             padding: '15px 30px',
// // // // // // // // // // //             background: '#e94560',
// // // // // // // // // // //             color: '#fff',
// // // // // // // // // // //             border: 'none',
// // // // // // // // // // //             borderRadius: '50px',
// // // // // // // // // // //             fontSize: '18px',
// // // // // // // // // // //             cursor: 'pointer',
// // // // // // // // // // //           }}
// // // // // // // // // // //         >
// // // // // // // // // // //           Get Started
// // // // // // // // // // //         </motion.button>
// // // // // // // // // // //       </motion.div>

// // // // // // // // // // //       <motion.div
// // // // // // // // // // //         initial={{ opacity: 0 }}
// // // // // // // // // // //         animate={{ opacity: 1 }}
// // // // // // // // // // //         transition={{ delay: 0.5, duration: 1 }}
// // // // // // // // // // //         style={{
// // // // // // // // // // //           maxWidth: '800px',
// // // // // // // // // // //           marginTop: '50px',
// // // // // // // // // // //           textAlign: 'center',
// // // // // // // // // // //           fontSize: '16px',
// // // // // // // // // // //           lineHeight: '1.6',
// // // // // // // // // // //         }}
// // // // // // // // // // //       >
// // // // // // // // // // //         <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>About The Psyche</h2>
// // // // // // // // // // //         <p>
// // // // // // // // // // //           The Psyche is a revolutionary platform designed to help you understand your inner self. Through a series of 25 thought-provoking questions, we analyze five key aspects of your psyche: Mentality, Philosophy, Psychology, Fear, and Self-discovery. Our advanced algorithm provides a detailed report with insights, strengths, weaknesses, and personalized advice to help you grow. Join thousands of users on a transformative journey to uncover the depths of your mind.
// // // // // // // // // // //         </p>
// // // // // // // // // // //       </motion.div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // // export default Home;


// // // // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // // // import { motion } from 'framer-motion';
// // // // // // // // // // import axiosInstance from '../utils/axiosInstance.js';

// // // // // // // // // // function Home() {
// // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // //   const handleGetStarted = async () => {
// // // // // // // // // //     const token = localStorage.getItem('token');
// // // // // // // // // //     if (!token) {
// // // // // // // // // //       navigate('/login'); // No token, go to login
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     try {
// // // // // // // // // //       // Token hai, journey guide pe jao
// // // // // // // // // //       navigate('/journey-guide');
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       navigate('/login'); // Token invalid, go to login
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div
// // // // // // // // // //       style={{
// // // // // // // // // //         minHeight: '100vh',
// // // // // // // // // //         width: '100%',
// // // // // // // // // //         background: 'linear-gradient(135deg, #6E5F5F, #242424, #5C7C89, #1F4459, #011325)',
// // // // // // // // // //         color: '#fff',
// // // // // // // // // //         display: 'flex',
// // // // // // // // // //         flexDirection: 'column',
// // // // // // // // // //         justifyContent: 'center',
// // // // // // // // // //         alignItems: 'center',
// // // // // // // // // //         padding: '40px 20px',
// // // // // // // // // //       }}

      

      

// // // // // // // // // //     >
// // // // // // // // // //       <motion.div
// // // // // // // // // //         initial={{ opacity: 0, y: 50 }}
// // // // // // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // // // // // //         transition={{ duration: 1 }}
// // // // // // // // // //         style={{ textAlign: 'center' }}
// // // // // // // // // //       >
// // // // // // // // // //         <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
// // // // // // // // // //           Welcome to The Psyche
// // // // // // // // // //         </h1>
// // // // // // // // // //         <p style={{ fontSize: '24px', maxWidth: '600px', margin: '0 auto 30px' }}>
// // // // // // // // // //           Embark on a journey of self-discovery through 25 carefully crafted questions.
// // // // // // // // // //         </p>
// // // // // // // // // //         <motion.button
// // // // // // // // // //           whileHover={{ scale: 1.05 }}
// // // // // // // // // //           whileTap={{ scale: 0.95 }}
// // // // // // // // // //           onClick={handleGetStarted}
// // // // // // // // // //           style={{
// // // // // // // // // //             padding: '15px 30px',
// // // // // // // // // //             background: '#e94560',
// // // // // // // // // //             color: '#fff',
// // // // // // // // // //             border: 'none',
// // // // // // // // // //             borderRadius: '50px',
// // // // // // // // // //             fontSize: '18px',
// // // // // // // // // //             cursor: 'pointer',
// // // // // // // // // //           }}
// // // // // // // // // //         >
// // // // // // // // // //           Get Started
// // // // // // // // // //         </motion.button>
// // // // // // // // // //       </motion.div>

// // // // // // // // // //       <motion.div
// // // // // // // // // //         initial={{ opacity: 0 }}
// // // // // // // // // //         animate={{ opacity: 1 }}
// // // // // // // // // //         transition={{ delay: 0.5, duration: 1 }}
// // // // // // // // // //         style={{
// // // // // // // // // //           maxWidth: '800px',
// // // // // // // // // //           marginTop: '50px',
// // // // // // // // // //           textAlign: 'center',
// // // // // // // // // //           fontSize: '16px',
// // // // // // // // // //           lineHeight: '1.6',
// // // // // // // // // //         }}
// // // // // // // // // //       >
// // // // // // // // // //         <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>About The Psyche</h2>
// // // // // // // // // //         <p>
// // // // // // // // // //           The Psyche is a revolutionary platform designed to help you understand your inner self. Through a series of 25 thought-provoking questions, we analyze five key aspects of your psyche: Mentality, Philosophy, Psychology, Fear, and Self-discovery. Our advanced algorithm provides a detailed report with insights, strengths, weaknesses, and personalized advice to help you grow. Join thousands of users on a transformative journey to uncover the depths of your mind.
// // // // // // // // // //         </p>
// // // // // // // // // //       </motion.div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // export default Home;

// // // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // // import { motion } from 'framer-motion';
// // // // // // // // // import bgImage from '../assets/pexels-simon73-1323550.jpg';

// // // // // // // // // function Home() {
// // // // // // // // //   const navigate = useNavigate();

// // // // // // // // //   const handleGetStarted = async () => {
// // // // // // // // //     const token = localStorage.getItem('token');
// // // // // // // // //     if (!token) {
// // // // // // // // //       navigate('/login');
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     try {
// // // // // // // // //       navigate('/journey-guide');
// // // // // // // // //     } catch (err) {
// // // // // // // // //       navigate('/login');
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div
// // // // // // // // //       style={{
// // // // // // // // //         minHeight: '120vh',
// // // // // // // // //         width: '100%',
// // // // // // // // //         background: `url(${bgImage}) no-repeat center center/cover`,
// // // // // // // // //         color: '#fff',
// // // // // // // // //         display: 'flex',
// // // // // // // // //         flexDirection: 'column',
// // // // // // // // //         justifyContent: 'center',
// // // // // // // // //         alignItems: 'center',
// // // // // // // // //         padding: '40px 30px',
// // // // // // // // //       }}
// // // // // // // // //     >
// // // // // // // // //       <motion.div
// // // // // // // // //         initial={{ opacity: 0, y: 50 }}
// // // // // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // // // // //         transition={{ duration: 1 }}
// // // // // // // // //         style={{ textAlign: 'center' }}
// // // // // // // // //       >
// // // // // // // // //         <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
// // // // // // // // //           Welcome to The Psyche
// // // // // // // // //         </h1>
// // // // // // // // //         <p style={{ fontSize: '24px', maxWidth: '600px', margin: '0 auto 30px' }}>
// // // // // // // // //           Embark on a journey of self-discovery through 25 carefully crafted questions.
// // // // // // // // //         </p>
// // // // // // // // //         <motion.button
// // // // // // // // //           whileHover={{ scale: 1.05 }}
// // // // // // // // //           whileTap={{ scale: 0.95 }}
// // // // // // // // //           onClick={handleGetStarted}
// // // // // // // // //           style={{
// // // // // // // // //             padding: '15px 30px',
// // // // // // // // //             background: '#e94560',
// // // // // // // // //             color: '#fff',
// // // // // // // // //             border: 'none',
// // // // // // // // //             borderRadius: '50px',
// // // // // // // // //             fontSize: '18px',
// // // // // // // // //             cursor: 'pointer',
// // // // // // // // //           }}
// // // // // // // // //         >
// // // // // // // // //           Get Started
// // // // // // // // //         </motion.button>
// // // // // // // // //       </motion.div>

// // // // // // // // //       <motion.div
// // // // // // // // //         initial={{ opacity: 0 }}
// // // // // // // // //         animate={{ opacity: 1 }}
// // // // // // // // //         transition={{ delay: 0.5, duration: 1 }}
// // // // // // // // //         style={{
// // // // // // // // //           maxWidth: '800px',
// // // // // // // // //           marginTop: '50px',
// // // // // // // // //           textAlign: 'center',
// // // // // // // // //           fontSize: '16px',
// // // // // // // // //           lineHeight: '1.6',
// // // // // // // // //         }}
// // // // // // // // //       >
// // // // // // // // //         <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>About The Psyche</h2>
// // // // // // // // //         <p>
// // // // // // // // //           The Psyche is a revolutionary platform designed to help you understand your inner self. Through a series of 25 thought-provoking questions, we analyze five key aspects of your psyche: Mentality, Philosophy, Psychology, Fear, and Self-discovery. Our advanced algorithm provides a detailed report with insights, strengths, weaknesses, and personalized advice to help you grow. Join thousands of users on a transformative journey to uncover the depths of your mind.
// // // // // // // // //         </p>
// // // // // // // // //       </motion.div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // export default Home;



// // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // import { motion } from 'framer-motion';
// // // // // // // // import bgImage from '../assets/pexels-simon73-1323550.jpg';

// // // // // // // // function Home() {
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   const handleGetStarted = async () => {
// // // // // // // //     const token = localStorage.getItem('token');
// // // // // // // //     if (!token) {
// // // // // // // //       navigate('/login');
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     try {
// // // // // // // //       navigate('/journey-guide');
// // // // // // // //     } catch (err) {
// // // // // // // //       navigate('/login');
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div
// // // // // // // //       style={{
// // // // // // // //         minHeight: '100vh', // Fix height to cover full screen
// // // // // // // //         width: '100%',
// // // // // // // //         background: `url(${bgImage}) no-repeat center center/cover`, // Keep only the image
// // // // // // // //         color: '#fff',
// // // // // // // //         display: 'flex',
// // // // // // // //         flexDirection: 'column',
// // // // // // // //         justifyContent: 'center',
// // // // // // // //         alignItems: 'center',
// // // // // // // //         padding: '40px 30px',
// // // // // // // //         boxSizing: 'border-box',
// // // // // // // //       }}
// // // // // // // //     >
// // // // // // // //       <motion.div
// // // // // // // //         initial={{ opacity: 0, y: 50 }}
// // // // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // // // //         transition={{ duration: 1 }}
// // // // // // // //         style={{ textAlign: 'center', width: '100%' }}
// // // // // // // //       >
// // // // // // // //         <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
// // // // // // // //           Welcome to The Psyche
// // // // // // // //         </h1>
// // // // // // // //         <p style={{ fontSize: '24px', maxWidth: '600px', margin: '0 auto 30px' }}>
// // // // // // // //           Embark on a journey of self-discovery through 25 carefully crafted questions.
// // // // // // // //         </p>
// // // // // // // //         <motion.button
// // // // // // // //           whileHover={{ scale: 1.05 }}
// // // // // // // //           whileTap={{ scale: 0.95 }}
// // // // // // // //           onClick={handleGetStarted}
// // // // // // // //           style={{
// // // // // // // //             padding: '15px 30px',
// // // // // // // //             background: '#e94560',
// // // // // // // //             color: '#fff',
// // // // // // // //             border: 'none',
// // // // // // // //             borderRadius: '50px',
// // // // // // // //             fontSize: '18px',
// // // // // // // //             cursor: 'pointer',
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           Get Started
// // // // // // // //         </motion.button>
// // // // // // // //       </motion.div>

// // // // // // // //       <motion.div
// // // // // // // //         initial={{ opacity: 0 }}
// // // // // // // //         animate={{ opacity: 1 }}
// // // // // // // //         transition={{ delay: 0.5, duration: 1 }}
// // // // // // // //         style={{
// // // // // // // //           maxWidth: '800px',
// // // // // // // //           marginTop: '30px',
// // // // // // // //           textAlign: 'center',
// // // // // // // //           fontSize: '16px',
// // // // // // // //           lineHeight: '1.6',
// // // // // // // //           paddingBottom: '40px', // Add padding to prevent bottom gap
// // // // // // // //         }}
// // // // // // // //       >
// // // // // // // //         <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>About The Psyche</h2>
// // // // // // // //         <p>
// // // // // // // //           The Psyche is a revolutionary platform designed to help you understand your inner self. Through a series of 25 thought-provoking questions, we analyze five key aspects of your psyche: Mentality, Philosophy, Psychology, Fear, and Self-discovery. Our advanced algorithm provides a detailed report with insights, strengths, weaknesses, and personalized advice to help you grow. Join thousands of users on a transformative journey to uncover the depths of your mind.
// // // // // // // //         </p>
// // // // // // // //       </motion.div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default Home;

// // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // import { motion } from 'framer-motion';
// // // // // // // import bgImage from '../assets/pexels-simon73-1323550.jpg';

// // // // // // // function Home() {
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const handleGetStarted = async () => {
// // // // // // //     const token = localStorage.getItem('token');
// // // // // // //     if (!token) {
// // // // // // //       navigate('/login');
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     try {
// // // // // // //       navigate('/journey-guide');
// // // // // // //     } catch (err) {
// // // // // // //       navigate('/login');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div
// // // // // // //       style={{
// // // // // // //         minHeight: '100vh',
// // // // // // //         width: '100%',
// // // // // // //         background: `url(${bgImage}) no-repeat center center/cover`,
// // // // // // //         color: '#fff',
// // // // // // //         display: 'flex',
// // // // // // //         flexDirection: 'column',
// // // // // // //         justifyContent: 'center',
// // // // // // //         alignItems: 'center',
// // // // // // //         padding: '40px 30px',
// // // // // // //         boxSizing: 'border-box',
// // // // // // //         fontFamily: "'Poppins', sans-serif", // Modern font
// // // // // // //       }}
// // // // // // //     >
// // // // // // //       {/* Main Heading and Description */}
// // // // // // //       <motion.div
// // // // // // //         initial={{ opacity: 0, y: 50 }}
// // // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // // //         transition={{ duration: 1 }}
// // // // // // //         style={{
// // // // // // //           textAlign: 'center',
// // // // // // //           maxWidth: '800px',
// // // // // // //           padding: '20px',
// // // // // // //           backdropFilter: 'blur(8px)', // Glassmorphism effect
// // // // // // //           background: 'rgba(0, 0, 0, 0.5)',
// // // // // // //           borderRadius: '12px',
// // // // // // //           boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         <h1
// // // // // // //           style={{
// // // // // // //             fontSize: '56px',
// // // // // // //             fontWeight: '700',
// // // // // // //             marginBottom: '16px',
// // // // // // //             letterSpacing: '1.5px',
// // // // // // //             color: '#fff',
// // // // // // //             textTransform: 'uppercase',
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           Welcome to The Psyche
// // // // // // //         </h1>
// // // // // // //         <p
// // // // // // //           style={{
// // // // // // //             fontSize: '20px',
// // // // // // //             fontWeight: '400',
// // // // // // //             marginBottom: '24px',
// // // // // // //             color: '#ccc',
// // // // // // //             lineHeight: '1.6',
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           Embark on a journey of self-discovery through 25 carefully crafted questions.
// // // // // // //         </p>
// // // // // // //         <motion.button
// // // // // // //           whileHover={{ scale: 1.05 }}
// // // // // // //           whileTap={{ scale: 0.95 }}
// // // // // // //           onClick={handleGetStarted}
// // // // // // //           style={{
// // // // // // //             padding: '14px 36px',
// // // // // // //             background: 'linear-gradient(135deg, #e94560, #ff758c)',
// // // // // // //             color: '#fff',
// // // // // // //             border: 'none',
// // // // // // //             borderRadius: '50px',
// // // // // // //             fontSize: '18px',
// // // // // // //             fontWeight: '500',
// // // // // // //             cursor: 'pointer',
// // // // // // //             boxShadow: '0 4px 12px rgba(233, 69, 96, 0.5)',
// // // // // // //             transition: 'background 0.3s ease',
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           Get Started
// // // // // // //         </motion.button>
// // // // // // //       </motion.div>

// // // // // // //       {/* About Section */}
// // // // // // //       <motion.div
// // // // // // //         initial={{ opacity: 0 }}
// // // // // // //         animate={{ opacity: 1 }}
// // // // // // //         transition={{ delay: 0.5, duration: 1 }}
// // // // // // //         style={{
// // // // // // //           maxWidth: '800px',
// // // // // // //           marginTop: '40px',
// // // // // // //           padding: '24px',
// // // // // // //           textAlign: 'center',
// // // // // // //           color: '#eee',
// // // // // // //           background: 'rgba(0, 0, 0, 0.4)', // Glassmorphism effect
// // // // // // //           borderRadius: '12px',
// // // // // // //           backdropFilter: 'blur(10px)',
// // // // // // //           boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
// // // // // // //           lineHeight: '1.8',
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         <h2
// // // // // // //           style={{
// // // // // // //             fontSize: '32px',
// // // // // // //             fontWeight: '600',
// // // // // // //             marginBottom: '16px',
// // // // // // //             letterSpacing: '1px',
// // // // // // //             color: '#fff',
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           About The Psyche
// // // // // // //         </h2>
// // // // // // //         <p
// // // // // // //           style={{
// // // // // // //             fontSize: '18px',
// // // // // // //             fontWeight: '400',
// // // // // // //             color: '#ccc',
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           The Psyche is a revolutionary platform designed to help you understand your inner self. 
// // // // // // //           Through a series of 25 thought-provoking questions, we analyze five key aspects of your psyche: 
// // // // // // //           <strong style={{ color: '#e94560' }}> Mentality, Philosophy, Psychology, Fear, and Self-discovery</strong>. 
// // // // // // //           Our advanced algorithm provides a detailed report with insights, strengths, weaknesses, and 
// // // // // // //           personalized advice to help you grow. Join thousands of users on a transformative journey 
// // // // // // //           to uncover the depths of your mind.
// // // // // // //         </p>
// // // // // // //       </motion.div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default Home;


// // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // import { motion } from 'framer-motion';
// // // // // // import bgImage from '../assets/pexels-simon73-1323550.jpg';

// // // // // // function Home() {
// // // // // //   const navigate = useNavigate();

// // // // // //   const handleGetStarted = async () => {
// // // // // //     const token = localStorage.getItem('token');
// // // // // //     if (!token) {
// // // // // //       navigate('/login');
// // // // // //       return;
// // // // // //     }

// // // // // //     try {
// // // // // //       navigate('/journey-guide');
// // // // // //     } catch (err) {
// // // // // //       navigate('/login');
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div
// // // // // //       style={{
// // // // // //         minHeight: '100vh',
// // // // // //         width: '100%',
// // // // // //         background: `url(${bgImage}) no-repeat center center/cover`,
// // // // // //         color: '#fff',
// // // // // //         display: 'flex',
// // // // // //         flexDirection: 'column',
// // // // // //         justifyContent: 'center',
// // // // // //         alignItems: 'center',
// // // // // //         padding: '40px 20px',
// // // // // //         boxSizing: 'border-box',
// // // // // //         fontFamily: "'Poppins', sans-serif",
// // // // // //       }}
// // // // // //     >
// // // // // //       {/* Main Heading and Description */}
// // // // // //       <motion.div
// // // // // //         initial={{ opacity: 0, y: 50 }}
// // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // //         transition={{ duration: 1 }}
// // // // // //         style={{
// // // // // //           textAlign: 'center',
// // // // // //           maxWidth: '800px',
// // // // // //           padding: '20px',
// // // // // //         }}
// // // // // //       >
// // // // // //         <h1
// // // // // //           style={{
// // // // // //             fontSize: '56px',
// // // // // //             fontWeight: '700',
// // // // // //             marginBottom: '16px',
// // // // // //             letterSpacing: '1.5px',
// // // // // //             color: '#fff',
// // // // // //             textTransform: 'uppercase',
// // // // // //           }}
// // // // // //         >
// // // // // //           Welcome to The Psyche
// // // // // //         </h1>
// // // // // //         <p
// // // // // //           style={{
// // // // // //             fontSize: '20px',
// // // // // //             fontWeight: '400',
// // // // // //             marginBottom: '24px',
// // // // // //             color: '#eee',
// // // // // //             lineHeight: '1.6',
// // // // // //           }}
// // // // // //         >
// // // // // //           Embark on a journey of self-discovery through 25 carefully crafted questions.
// // // // // //         </p>
// // // // // //         <motion.button
// // // // // //           whileHover={{ scale: 1.05 }}
// // // // // //           whileTap={{ scale: 0.95 }}
// // // // // //           onClick={handleGetStarted}
// // // // // //           style={{
// // // // // //             padding: '14px 36px',
// // // // // //             background: 'linear-gradient(135deg, #e94560, #ff758c)',
// // // // // //             color: '#fff',
// // // // // //             border: 'none',
// // // // // //             borderRadius: '50px',
// // // // // //             fontSize: '18px',
// // // // // //             fontWeight: '500',
// // // // // //             cursor: 'pointer',
// // // // // //             boxShadow: '0 4px 12px rgba(233, 69, 96, 0.5)',
// // // // // //             transition: 'background 0.3s ease',
// // // // // //           }}
// // // // // //         >
// // // // // //           Get Started
// // // // // //         </motion.button>
// // // // // //       </motion.div>

// // // // // //       {/* About Section */}
// // // // // //       <motion.div
// // // // // //         initial={{ opacity: 0 }}
// // // // // //         animate={{ opacity: 1 }}
// // // // // //         transition={{ delay: 0.5, duration: 1 }}
// // // // // //         style={{
// // // // // //           maxWidth: '800px',
// // // // // //           marginTop: '40px',
// // // // // //           padding: '24px',
// // // // // //           textAlign: 'center',
// // // // // //           color: '#eee',
// // // // // //           lineHeight: '1.8',
// // // // // //         }}
// // // // // //       >
// // // // // //         <h2
// // // // // //           style={{
// // // // // //             fontSize: '32px',
// // // // // //             fontWeight: '600',
// // // // // //             marginBottom: '16px',
// // // // // //             letterSpacing: '1px',
// // // // // //             color: '#fff',
// // // // // //           }}
// // // // // //         >
// // // // // //           About The Psyche
// // // // // //         </h2>
// // // // // //         <p
// // // // // //           style={{
// // // // // //             fontSize: '18px',
// // // // // //             fontWeight: '400',
// // // // // //             color: '#ccc',
// // // // // //           }}
// // // // // //         >
// // // // // //           The Psyche is a revolutionary platform designed to help you understand your inner self. 
// // // // // //           Through a series of 25 thought-provoking questions, we analyze five key aspects of your psyche: 
// // // // // //           <strong style={{ color: '#e94560' }}> Mentality, Philosophy, Psychology, Fear, and Self-discovery</strong>. 
// // // // // //           Our advanced algorithm provides a detailed report with insights, strengths, weaknesses, and 
// // // // // //           personalized advice to help you grow. Join thousands of users on a transformative journey 
// // // // // //           to uncover the depths of your mind.
// // // // // //         </p>
// // // // // //       </motion.div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default Home;


// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import { motion } from 'framer-motion';
// // // // // import bgImage from '../assets/pexels-simon73-1323550.jpg';

// // // // // function Home() {
// // // // //   const navigate = useNavigate();

// // // // //   const handleGetStarted = async () => {
// // // // //     const token = localStorage.getItem('token');
// // // // //     if (!token) {
// // // // //       navigate('/login');
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       navigate('/journey-guide');
// // // // //     } catch (err) {
// // // // //       navigate('/login');
// // // // //     }
// // // // //   };

// // // // //   // Success Stories Data
// // // // //   const successStories = [
// // // // //     {
// // // // //       name: 'Priya Sharma',
// // // // //       photo: 'https://via.placeholder.com/150',
// // // // //       review: 'Psyche opened my eyes to my hidden fears and taught me how to build unshakable confidence—thanks to its insightful report, I now lead my team with clarity and pride. This platform is a game-changer, and I’m so grateful for how it transformed my leadership skills and personal growth!',
// // // // //     },
// // // // //     {
// // // // //       name: 'Rahul Mehta',
// // // // //       photo: 'https://via.placeholder.com/150',
// // // // //       review: 'Through Psyche, I learned to value my self-worth and turned my life around by applying its personalized advice—today, I’m happier, more balanced, and thriving in my relationships. I can’t praise this platform enough for its deep understanding and support on my journey of self-discovery!',
// // // // //     },
// // // // //     {
// // // // //       name: 'Anita Desai',
// // // // //       photo: 'https://via.placeholder.com/150',
// // // // //       review: 'Psyche’s mentality insights reshaped my decision-making process, helping me overcome self-doubt and excel in my career—I’m now thriving as a confident professional. This incredible platform deserves all the accolades for guiding me with such precision and care!',
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <div
// // // // //       style={{
// // // // //         minHeight: '100vh',
// // // // //         width: '100%',
// // // // //         background: `url(${bgImage}) no-repeat center center/cover`,
// // // // //         color: '#fff',
// // // // //         display: 'flex',
// // // // //         flexDirection: 'column',
// // // // //         justifyContent: 'center',
// // // // //         alignItems: 'center',
// // // // //         padding: '40px 20px',
// // // // //         boxSizing: 'border-box',
// // // // //         fontFamily: "'Poppins', sans-serif",
// // // // //       }}
// // // // //     >
// // // // //       {/* Main Heading and Description */}
// // // // //       <motion.div
// // // // //         initial={{ opacity: 0, y: 50 }}
// // // // //         animate={{ opacity: 1, y: 0 }}
// // // // //         transition={{ duration: 1 }}
// // // // //         style={{
// // // // //           textAlign: 'center',
// // // // //           maxWidth: '800px',
// // // // //           padding: '20px',
// // // // //         }}
// // // // //       >
// // // // //         <h1
// // // // //           style={{
// // // // //             fontSize: '56px',
// // // // //             fontWeight: '700',
// // // // //             marginBottom: '16px',
// // // // //             letterSpacing: '1.5px',
// // // // //             color: '#fff',
// // // // //             textTransform: 'uppercase',
// // // // //           }}
// // // // //         >
// // // // //           Welcome to The Psyche
// // // // //         </h1>
// // // // //         <p
// // // // //           style={{
// // // // //             fontSize: '20px',
// // // // //             fontWeight: '400',
// // // // //             marginBottom: '24px',
// // // // //             color: '#eee',
// // // // //             lineHeight: '1.6',
// // // // //           }}
// // // // //         >
// // // // //           Embark on a journey of self-discovery through 25 carefully crafted questions.
// // // // //         </p>
// // // // //         <motion.button
// // // // //           whileHover={{ scale: 1.05 }}
// // // // //           whileTap={{ scale: 0.95 }}
// // // // //           onClick={handleGetStarted}
// // // // //           style={{
// // // // //             padding: '14px 36px',
// // // // //             background: 'linear-gradient(135deg, #e94560, #ff758c)',
// // // // //             color: '#fff',
// // // // //             border: 'none',
// // // // //             borderRadius: '50px',
// // // // //             fontSize: '18px',
// // // // //             fontWeight: '500',
// // // // //             cursor: 'pointer',
// // // // //             boxShadow: '0 4px 12px rgba(233, 69, 96, 0.5)',
// // // // //             transition: 'background 0.3s ease',
// // // // //           }}
// // // // //         >
// // // // //           Get Started
// // // // //         </motion.button>
// // // // //       </motion.div>

// // // // //       {/* About Section */}
// // // // //       <motion.div
// // // // //         initial={{ opacity: 0 }}
// // // // //         animate={{ opacity: 1 }}
// // // // //         transition={{ delay: 0.5, duration: 1 }}
// // // // //         style={{
// // // // //           maxWidth: '800px',
// // // // //           marginTop: '40px',
// // // // //           padding: '24px',
// // // // //           textAlign: 'center',
// // // // //           color: '#eee',
// // // // //           lineHeight: '1.8',
// // // // //         }}
// // // // //       >
// // // // //         <h2
// // // // //           style={{
// // // // //             fontSize: '32px',
// // // // //             fontWeight: '600',
// // // // //             marginBottom: '16px',
// // // // //             letterSpacing: '1px',
// // // // //             color: '#fff',
// // // // //           }}
// // // // //         >
// // // // //           About The Psyche
// // // // //         </h2>
// // // // //         <p
// // // // //           style={{
// // // // //             fontSize: '18px',
// // // // //             fontWeight: '400',
// // // // //             color: '#ccc',
// // // // //           }}
// // // // //         >
// // // // //           The Psyche is a revolutionary platform designed to help you understand your inner self. 
// // // // //           Through a series of 25 thought-provoking questions, we analyze five key aspects of your psyche: 
// // // // //           <strong style={{ color: '#e94560' }}> Mentality, Philosophy, Psychology, Fear, and Self-discovery</strong>. 
// // // // //           Our advanced algorithm provides a detailed report with insights, strengths, weaknesses, and 
// // // // //           personalized advice to help you grow. Join thousands of users on a transformative journey 
// // // // //           to uncover the depths of your mind.
// // // // //         </p>
// // // // //       </motion.div>

// // // // //       {/* Success Stories Section */}
// // // // //       <motion.div
// // // // //         initial={{ opacity: 0 }}
// // // // //         animate={{ opacity: 1 }}
// // // // //         transition={{ delay: 1, duration: 1 }}
// // // // //         style={{
// // // // //           maxWidth: '1200px',
// // // // //           marginTop: '60px',
// // // // //           padding: '40px 20px',
// // // // //           textAlign: 'center',
// // // // //         }}
// // // // //       >
// // // // //         <h2
// // // // //           style={{
// // // // //             fontSize: '32px',
// // // // //             fontWeight: '600',
// // // // //             marginBottom: '40px',
// // // // //             letterSpacing: '1px',
// // // // //             color: '#fff',
// // // // //           }}
// // // // //         >
// // // // //           Success Stories
// // // // //         </h2>
// // // // //         <div
// // // // //           style={{
// // // // //             display: 'grid',
// // // // //             gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
// // // // //             gap: '40px', // Increased spacing for better layout
// // // // //             justifyItems: 'center',
// // // // //           }}
// // // // //         >
// // // // //           {successStories.map((story, index) => (
// // // // //             <motion.div
// // // // //               key={story.name}
// // // // //               initial={{ opacity: 0, y: 50 }}
// // // // //               animate={{ opacity: 1, y: 0 }}
// // // // //               transition={{ delay: 0.1 * (index + 1) }}
// // // // //               style={{
// // // // //                 background: 'rgba(255, 255, 255, 0.1)',
// // // // //                 borderRadius: '15px', // Rounded rectangle
// // // // //                 width: '100%',
// // // // //                 maxWidth: '300px',
// // // // //                 padding: '20px',
// // // // //                 display: 'flex',
// // // // //                 alignItems: 'center',
// // // // //                 boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
// // // // //                 border: '2px solid rgba(233, 69, 96, 0.5)',
// // // // //                 transition: 'transform 0.3s ease, box-shadow 0.3s ease',
// // // // //               }}
// // // // //               whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(233, 69, 96, 0.3)' }}
// // // // //             >
// // // // //               <img
// // // // //                 src={story.photo}
// // // // //                 alt={story.name}
// // // // //                 style={{
// // // // //                   width: '100px',
// // // // //                   height: '100px',
// // // // //                   borderRadius: '10px',
// // // // //                   objectFit: 'cover',
// // // // //                   marginRight: '20px',
// // // // //                   border: '3px solid #e94560',
// // // // //                 }}
// // // // //               />
// // // // //               <div style={{ textAlign: 'left', flex: 1 }}>
// // // // //                 <h3
// // // // //                   style={{
// // // // //                     fontSize: '20px',
// // // // //                     fontWeight: '600',
// // // // //                     color: '#e94560',
// // // // //                     marginBottom: '10px',
// // // // //                   }}
// // // // //                 >
// // // // //                   {story.name}
// // // // //                 </h3>
// // // // //                 <p style={{ fontSize: '14px', color: '#e0e0e0', lineHeight: '1.5' }}>
// // // // //                   {story.review}
// // // // //                 </p>
// // // // //               </div>
// // // // //             </motion.div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </motion.div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Home;

// // // // import { useNavigate } from 'react-router-dom';
// // // // import { motion } from 'framer-motion';
// // // // import bgImage from '../assets/pexels-simon73-1323550.jpg';

// // // // function Home() {
// // // //   const navigate = useNavigate();

// // // //   const handleGetStarted = async () => {
// // // //     const token = localStorage.getItem('token');
// // // //     if (!token) {
// // // //       navigate('/login');
// // // //       return;
// // // //     }

// // // //     try {
// // // //       navigate('/journey-guide');
// // // //     } catch (err) {
// // // //       navigate('/login');
// // // //     }
// // // //   };

// // // //   // Success Stories Data
// // // //   const successStories = [
// // // //     {
// // // //       name: 'Priya Sharma',
// // // //       photo: 'https://via.placeholder.com/150',
// // // //       review: 'Psyche opened my eyes to my hidden fears and taught me how to build unshakable confidence—thanks to its insightful report, I now lead my team with clarity and pride. This platform is a game-changer, and I’m so grateful for how it transformed my leadership skills and personal growth!',
// // // //     },
// // // //     {
// // // //       name: 'Rahul Mehta',
// // // //       photo: 'https://via.placeholder.com/150',
// // // //       review: 'Through Psyche, I learned to value my self-worth and turned my life around by applying its personalized advice—today, I’m happier, more balanced, and thriving in my relationships. I can’t praise this platform enough for its deep understanding and support on my journey of self-discovery!',
// // // //     },
// // // //     {
// // // //       name: 'Anita Desai',
// // // //       photo: 'https://via.placeholder.com/150',
// // // //       review: 'Psyche’s mentality insights reshaped my decision-making process, helping me overcome self-doubt and excel in my career—I’m now thriving as a confident professional. This incredible platform deserves all the accolades for guiding me with such precision and care!',
// // // //     },
// // // //     {
// // // //       name: 'Vikram Singh',
// // // //       photo: 'https://via.placeholder.com/150',
// // // //       review: 'Psyche helped me confront my inner philosophy and find peace within—its detailed reports guided me to a fulfilling life, and I’m amazed at how transformative this platform has been for my soul!',
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <div
// // // //       style={{
// // // //         minHeight: '100vh',
// // // //         width: '100%',
// // // //         background: `url(${bgImage}) no-repeat center center/cover`,
// // // //         color: '#fff',
// // // //         display: 'flex',
// // // //         flexDirection: 'column',
// // // //         justifyContent: 'center',
// // // //         alignItems: 'center',
// // // //         padding: '40px 20px',
// // // //         boxSizing: 'border-box',
// // // //         fontFamily: "'Poppins', sans-serif",
// // // //       }}
// // // //     >
// // // //       {/* Main Heading and Description */}
// // // //       <motion.div
// // // //         initial={{ opacity: 0, y: 50 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ duration: 1 }}
// // // //         style={{
// // // //           textAlign: 'center',
// // // //           maxWidth: '800px',
// // // //           padding: '20px',
// // // //         }}
// // // //       >
// // // //         <h1
// // // //           style={{
// // // //             fontSize: '56px',
// // // //             fontWeight: '700',
// // // //             marginBottom: '16px',
// // // //             letterSpacing: '1.5px',
// // // //             color: '#fff',
// // // //             textTransform: 'uppercase',
// // // //           }}
// // // //         >
// // // //           Welcome to The Psyche
// // // //         </h1>
// // // //         <p
// // // //           style={{
// // // //             fontSize: '20px',
// // // //             fontWeight: '400',
// // // //             marginBottom: '24px',
// // // //             color: '#eee',
// // // //             lineHeight: '1.6',
// // // //           }}
// // // //         >
// // // //           Embark on a journey of self-discovery through 25 carefully crafted questions.
// // // //         </p>
// // // //         <motion.button
// // // //           whileHover={{ scale: 1.05 }}
// // // //           whileTap={{ scale: 0.95 }}
// // // //           onClick={handleGetStarted}
// // // //           style={{
// // // //             padding: '14px 36px',
// // // //             background: 'linear-gradient(135deg, #e94560, #ff758c)',
// // // //             color: '#fff',
// // // //             border: 'none',
// // // //             borderRadius: '50px',
// // // //             fontSize: '18px',
// // // //             fontWeight: '500',
// // // //             cursor: 'pointer',
// // // //             boxShadow: '0 4px 12px rgba(233, 69, 96, 0.5)',
// // // //             transition: 'background 0.3s ease',
// // // //           }}
// // // //         >
// // // //           Get Started
// // // //         </motion.button>
// // // //       </motion.div>

// // // //       {/* About Section */}
// // // //       <motion.div
// // // //         initial={{ opacity: 0 }}
// // // //         animate={{ opacity: 1 }}
// // // //         transition={{ delay: 0.5, duration: 1 }}
// // // //         style={{
// // // //           maxWidth: '800px',
// // // //           marginTop: '40px',
// // // //           padding: '24px',
// // // //           textAlign: 'center',
// // // //           color: '#eee',
// // // //           lineHeight: '1.8',
// // // //         }}
// // // //       >
// // // //         <h2
// // // //           style={{
// // // //             fontSize: '32px',
// // // //             fontWeight: '600',
// // // //             marginBottom: '16px',
// // // //             letterSpacing: '1px',
// // // //             color: '#fff',
// // // //           }}
// // // //         >
// // // //           About The Psyche
// // // //         </h2>
// // // //         <p
// // // //           style={{
// // // //             fontSize: '18px',
// // // //             fontWeight: '400',
// // // //             color: '#ccc',
// // // //           }}
// // // //         >
// // // //           The Psyche is a revolutionary platform designed to help you understand your inner self. 
// // // //           Through a series of 25 thought-provoking questions, we analyze five key aspects of your psyche: 
// // // //           <strong style={{ color: '#e94560' }}> Mentality, Philosophy, Psychology, Fear, and Self-discovery</strong>. 
// // // //           Our advanced algorithm provides a detailed report with insights, strengths, weaknesses, and 
// // // //           personalized advice to help you grow. Join thousands of users on a transformative journey 
// // // //           to uncover the depths of your mind.
// // // //         </p>
// // // //       </motion.div>

// // // //       {/* Success Stories Section */}
// // // //       <motion.div
// // // //         initial={{ opacity: 0 }}
// // // //         animate={{ opacity: 1 }}
// // // //         transition={{ delay: 1, duration: 1 }}
// // // //         style={{
// // // //           maxWidth: '1200px',
// // // //           marginTop: '40px', // Matching the spacing from About to cards
// // // //           padding: '40px 20px',
// // // //           textAlign: 'center',
// // // //         }}
// // // //       >
// // // //         <h2
// // // //           style={{
// // // //             fontSize: '40px',
// // // //             fontWeight: '700',
// // // //             marginBottom: '20px',
// // // //             letterSpacing: '2px',
// // // //             color: '#fff',
// // // //             textTransform: 'uppercase',
// // // //           }}
// // // //         >
// // // //           WHY YOU CHOOSE THE PSYCHE
// // // //         </h2>
// // // //         <h3
// // // //           style={{
// // // //             fontSize: '28px',
// // // //             fontWeight: '600',
// // // //             marginBottom: '40px',
// // // //             color: '#e94560',
// // // //             letterSpacing: '1px',
// // // //           }}
// // // //         >
// // // //           Success Stories
// // // //         </h3>
// // // //         <div
// // // //           style={{
// // // //             display: 'grid',
// // // //             gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// // // //             gap: '40px', // Consistent spacing
// // // //             justifyItems: 'center',
// // // //           }}
// // // //         >
// // // //           {successStories.map((story, index) => (
// // // //             <motion.div
// // // //               key={story.name}
// // // //               initial={{ opacity: 0, y: 50 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ delay: 0.1 * (index + 1) }}
// // // //               style={{
// // // //                 background: 'rgba(255, 255, 255, 0.1)',
// // // //                 borderRadius: '15px',
// // // //                 width: '100%',
// // // //                 maxWidth: '300px',
// // // //                 padding: '20px',
// // // //                 display: 'flex',
// // // //                 alignItems: 'center',
// // // //                 boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
// // // //                 border: '2px solid rgba(233, 69, 96, 0.5)',
// // // //                 transition: 'transform 0.3s ease, box-shadow 0.3s ease',
// // // //               }}
// // // //               whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(233, 69, 96, 0.3)' }}
// // // //             >
// // // //               <img
// // // //                 src={story.photo}
// // // //                 alt={story.name}
// // // //                 style={{
// // // //                   width: '100px',
// // // //                   height: '100px',
// // // //                   borderRadius: '10px',
// // // //                   objectFit: 'cover',
// // // //                   marginRight: '20px',
// // // //                   border: '3px solid #e94560',
// // // //                 }}
// // // //               />
// // // //               <div style={{ textAlign: 'left', flex: 1 }}>
// // // //                 <h3
// // // //                   style={{
// // // //                     fontSize: '20px',
// // // //                     fontWeight: '600',
// // // //                     color: '#e94560',
// // // //                     marginBottom: '10px',
// // // //                   }}
// // // //                 >
// // // //                   {story.name}
// // // //                 </h3>
// // // //                 <p style={{ fontSize: '14px', color: '#e0e0e0', lineHeight: '1.5' }}>
// // // //                   {story.review}
// // // //                 </p>
// // // //               </div>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </motion.div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Home;

// // // import { useNavigate } from 'react-router-dom';
// // // import { motion } from 'framer-motion';
// // // import bgImage from '../assets/pexels-simon73-1323550.jpg';
// // // import priyaImage from  "../assets/priya.jpg";
// // // import rahulImage from  "../assets/rahul.jpg";
// // // import henryImage from  "../assets/henry.jpg";
// // // import sophiaImage from  "../assets/sophia.jpg";


// // // function Home() {
// // //   const navigate = useNavigate();

// // //   const handleGetStarted = async () => {
// // //     const token = localStorage.getItem('token');
// // //     if (!token) {
// // //       navigate('/login');
// // //       return;
// // //     }

// // //     try {
// // //       navigate('/journey-guide');
// // //     } catch (err) {
// // //       navigate('/login');
// // //     }
// // //   };

// // //   // Success Stories Data
// // //   const successStories = [
// // //     {
// // //       name: 'Priya Sharma',
// // //       photo: priyaImage,
// // //       review: 'Psyche opened my eyes to my hidden fears and taught me how to build unshakable confidence—thanks to its insightful report, I now lead my team with clarity and pride. This platform is a game-changer, and I’m so grateful for how it transformed my leadership skills and personal growth!',
// // //     },
// // //     {
// // //       name: 'Rahul Mehta',
// // //       photo: rahulImage,
// // //       review: 'Through Psyche, I learned to value my self-worth and turned my life around by applying its personalized advice—today, I’m happier, more balanced, and thriving in my relationships. I can’t praise this platform enough for its deep understanding and support on my journey of self-discovery!',
// // //     },
// // //     {
// // //       name: 'Sophia Bennett',
// // //       photo: sophiaImage,
// // //       review: "I didn’t expect such profound insights from a quiz! Psyche helped me confront my deepest fears and understand the patterns behind my choices. It’s like therapy wrapped in a beautifully designed platform."
// // //     },
// // //     {
// // //       name: 'Henry Walker',
// // //       photo: henryImage,
// // //       review: "I struggled with emotional control, but the Psychology Phase showed me how to handle my inner storms. Sigmund Freud’s insights into the unconscious mind helped me process emotions more effectively."
// // //     }
// // //   ];

// // //   return (
// // //     <div
// // //       style={{
// // //         minHeight: '100vh',
// // //         width: '100%',
// // //         background: `url(${bgImage}) no-repeat center center/cover`,
// // //         color: '#fff',
// // //         display: 'flex',
// // //         flexDirection: 'column',
// // //         justifyContent: 'center',
// // //         alignItems: 'center',
// // //         padding: '40px 20px',
// // //         boxSizing: 'border-box',
// // //         fontFamily: "'Poppins', sans-serif",
// // //       }}
// // //     >
// // //       {/* Main Heading and Description */}
// // //       <motion.div
// // //         initial={{ opacity: 0, y: 50 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 1 }}
// // //         style={{
// // //           textAlign: 'center',
// // //           maxWidth: '800px',
// // //           padding: '20px',
// // //         }}
// // //       >
// // //         <h1
// // //           style={{
// // //             fontSize: '56px',
// // //             fontWeight: '700',
// // //             marginBottom: '16px',
// // //             letterSpacing: '1.5px',
// // //             color: '#fff',
// // //             textTransform: 'uppercase',
// // //           }}
// // //         >
// // //           Welcome to The Psyche
// // //         </h1>
// // //         <p
// // //           style={{
// // //             fontSize: '20px',
// // //             fontWeight: '400',
// // //             marginBottom: '24px',
// // //             color: 'blue',
// // //             lineHeight: '1.6',
// // //           }}
// // //         >
// // //           Embark on a journey of self-discovery through 25 carefully crafted questions.
// // //         </p>
// // //         <motion.button
// // //           whileHover={{ scale: 1.05 }}
// // //           whileTap={{ scale: 0.95 }}
// // //           onClick={handleGetStarted}
// // //           style={{
// // //             padding: '14px 36px',
// // //             background: 'linear-gradient(135deg, #e94560, #ff758c)',
// // //             color: '#fff',
// // //             border: 'none',
// // //             borderRadius: '50px',
// // //             fontSize: '18px',
// // //             fontWeight: '500',
// // //             cursor: 'pointer',
// // //             boxShadow: '0 4px 12px rgba(233, 69, 96, 0.5)',
// // //             transition: 'background 0.3s ease',
// // //           }}
// // //         >
// // //           Get Started
// // //         </motion.button>
// // //       </motion.div>

// // //       {/* About Section */}
// // //       <motion.div
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ delay: 0.5, duration: 1 }}
// // //         style={{
// // //           maxWidth: '800px',
// // //           marginTop: '40px',
// // //           padding: '24px',
// // //           textAlign: 'center',
// // //           color: '#eee',
// // //           lineHeight: '1.8',
// // //         }}
// // //       >
// // //         <h2
// // //           style={{
// // //             fontSize: '32px',
// // //             fontWeight: '600',
// // //             marginBottom: '16px',
// // //             letterSpacing: '1px',
// // //             color: '#fff',
// // //           }}
// // //         >
// // //           About The Psyche
// // //         </h2>
// // //         <p
// // //           style={{
// // //             fontSize: '18px',
// // //             fontWeight: '400',
// // //             color: 'blue',
// // //           }}
// // //         >
// // //           The Psyche is a revolutionary platform designed to help you understand your inner self. 
// // //           Through a series of 25 thought-provoking questions, we analyze five key aspects of your psyche: 
// // //           <strong style={{ color: '#e94560' }}> Mentality, Philosophy, Psychology, Fear, and Self-discovery</strong>. 
// // //           Our advanced algorithm provides a detailed report with insights, strengths, weaknesses, and 
// // //           personalized advice to help you grow. Join thousands of users on a transformative journey 
// // //           to uncover the depths of your mind.
// // //         </p>
// // //       </motion.div>

// // //       {/* Success Stories Section */}
// // //       <motion.div
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ delay: 1, duration: 1 }}
// // //         style={{
// // //           maxWidth: '1200px',
// // //           marginTop: '40px', // Matching the spacing from About to cards
// // //           padding: '40px 20px',
// // //           textAlign: 'center',
// // //         }}
// // //       >
// // //         <h2
// // //           style={{
// // //             fontSize: '40px',
// // //             fontWeight: '700',
// // //             marginBottom: '20px',
// // //             letterSpacing: '2px',
// // //             color: '#fff',
// // //             textTransform: 'uppercase',
// // //           }}
// // //         >
// // //           WHY YOU CHOOSE THE PSYCHE
// // //         </h2>
// // //         <h3
// // //           style={{
// // //             fontSize: '28px',
// // //             fontWeight: '600',
// // //             marginBottom: '40px',
// // //             color: '#e94560',
// // //             letterSpacing: '1px',
// // //           }}
// // //         >
// // //           Success Stories
// // //         </h3>
// // //         <div
// // //           style={{
// // //             display: 'grid',
// // //             gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// // //             gap: '60px', // Adjust gap between cards here
// // //             justifyItems: 'center',
// // //           }}
// // //         >
// // //           {successStories.map((story, index) => (
// // //             <motion.div
// // //               key={story.name}
// // //               initial={{ opacity: 0, y: 50 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ delay: 0.1 * (index + 1) }}
// // //               style={{
// // //                 background: 'rgba(255, 255, 255, 0.1)',
// // //                 borderRadius: '15px',
// // //                 width: '100%',
// // //                 maxWidth: '300px',
// // //                 padding: '20px',
// // //                 display: 'flex',
// // //                 alignItems: 'center',
// // //                 boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
// // //                 border: '2px solid rgba(233, 69, 96, 0.5)',
// // //                 transition: 'transform 0.3s ease, box-shadow 0.3s ease',
// // //               }}
// // //               whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(233, 69, 96, 0.3)' }}
// // //             >
// // //               <img
// // //                 src={story.photo}
// // //                 alt={story.name}
// // //                 style={{
// // //                   width: '100px',
// // //                   height: '100px',
// // //                   borderRadius: '10px',
// // //                   objectFit: 'cover',
// // //                   marginRight: '20px',
// // //                   border: '3px solid #e94560',
// // //                 }}
// // //               />
// // //               <div style={{ textAlign: 'left', flex: 1 }}>
// // //                 <h3
// // //                   style={{
// // //                     fontSize: '20px',
// // //                     fontWeight: '600',
// // //                     color: '#e94560',
// // //                     marginBottom: '10px',
// // //                   }}
// // //                 >
// // //                   {story.name}
// // //                 </h3>
// // //                 <p style={{ fontSize: '14px', color: '#e0e0e0', lineHeight: '1.5' }}>
// // //                   {story.review}
// // //                 </p>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </motion.div>
// // //     </div>
// // //   );
// // // }

// // // export default Home;

// // import { useNavigate } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import bgImage from '../assets/pexels-simon73-1323550.jpg';
// // import priyaImage from '../assets/priya.jpg';
// // import rahulImage from '../assets/rahul.jpg';
// // import henryImage from '../assets/henry.jpg';
// // import sophiaImage from '../assets/sophia.jpg';

// // function Home() {
// //   const navigate = useNavigate();

// //   const handleGetStarted = async () => {
// //     const token = localStorage.getItem('token');
// //     if (!token) {
// //       navigate('/login');
// //       return;
// //     }
// //     try {
// //       navigate('/journey-guide');
// //     } catch (err) {
// //       navigate('/login');
// //     }
// //   };

// //   // Success Stories Data
// //   const successStories = [
// //     {
// //       name: 'Priya Sharma',
// //       photo: priyaImage,
// //       review:
// //         'Psyche opened my eyes to my hidden fears and taught me how to build unshakable confidence—thanks to its insightful report, I now lead my team with clarity and pride.',
// //     },
// //     {
// //       name: 'Rahul Mehta',
// //       photo: rahulImage,
// //       review:
// //         'Through Psyche, I learned to value my self-worth and turned my life around by applying its personalized advice—today, I’m happier and thriving.',
// //     },
// //     {
// //       name: 'Sophia Bennett',
// //       photo: sophiaImage,
// //       review:
// //         'Psyche helped me confront my deepest fears and understand the patterns behind my choices. It’s like therapy in a beautifully designed platform.',
// //     },
// //     {
// //       name: 'Henry Walker',
// //       photo: henryImage,
// //       review:
// //         'The Psychology Phase showed me how to handle my inner storms effectively, helping me process emotions with clarity.',
// //     },
// //   ];

// //   // Services Data
// //   const services = [
// //     {
// //       title: 'Personality Analysis',
// //       description:
// //         'Dive deep into your psyche with our 25-question quiz to uncover your unique personality traits and strengths.',
// //     },
// //     {
// //       title: 'Self-Discovery Reports',
// //       description:
// //         'Receive personalized reports with insights, weaknesses, and actionable advice to fuel your personal growth.',
// //     },
// //     {
// //       title: 'Mindset Coaching',
// //       description:
// //         'Access guided coaching sessions to transform your mentality and overcome fears, inspired by psychological principles.',
// //     },
// //   ];

// //   // Partner Companies (for marquee)
// //   const partners = [
// //     'MindSpace Inc.',
// //     'GrowEasy Analytics',
// //     'TherapyWorks',
// //     'InnerQuest Labs',
// //     'PsycheTech Solutions',
// //     'WellMind Academy',
// //   ];

// //   // Animation Variants
// //   const heroVariants = {
// //     hidden: { opacity: 0, y: 100, scale: 0.8 },
// //     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.5, type: 'spring', bounce: 0.3 } },
// //   };

// //   const textVariants = {
// //     hidden: { opacity: 0, x: -100 },
// //     visible: { opacity: 1, x: 0, transition: { duration: 1.2, type: 'spring' } },
// //   };

// //   const buttonVariants = {
// //     hidden: { opacity: 0, scale: 0 },
// //     visible: { opacity: 1, scale: 1, transition: { duration: 0.8, type: 'spring', bounce: 0.5 } },
// //     hover: { scale: 1.1, rotate: 5, boxShadow: '0 0 20px rgba(233, 69, 96, 0.7)' },
// //     tap: { scale: 0.9, rotate: -5 },
// //   };

// //   const sectionVariants = {
// //     hidden: { opacity: 0, y: 100 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 1.5, type: 'spring' } },
// //   };

// //   const cardVariants = {
// //     hidden: { opacity: 0, y: 50, rotateX: 45 },
// //     visible: (index) => ({
// //       opacity: 1,
// //       y: 0,
// //       rotateX: 0,
// //       transition: { duration: 0.8, delay: index * 0.2, type: 'spring', stiffness: 100 },
// //     }),
// //     hover: { scale: 1.05, rotateY: 10, boxShadow: '0 10px 30px rgba(233, 69, 96, 0.5)' },
// //   };

// //   return (
// //     <div
// //       style={{
// //         width: '100%',
// //         background: `url(${bgImage}) no-repeat center center/cover`,
// //         color: '#fff',
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         boxSizing: 'border-box',
// //         fontFamily: "'Poppins', sans-serif",
// //       }}
// //     >
// //       {/* Upper Section: Hero */}
// //       <motion.section
// //         variants={heroVariants}
// //         initial="hidden"
// //         animate="visible"
// //         style={{
// //           minHeight: '100vh',
// //           width: '100%',
// //           background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage}) no-repeat center center/cover',
// //           display: 'flex',
// //           flexDirection: 'column',
// //           justifyContent: 'center',
// //           alignItems: 'center',
// //           padding: '40px 20px',
// //         }}
// //       >
// //         <motion.h1
// //           variants={textVariants}
// //           style={{
// //             fontSize: '56px',
// //             fontWeight: '700',
// //             marginBottom: '16px',
// //             letterSpacing: '1.5px',
// //             color: '#fff',
// //             textTransform: 'uppercase',
// //             textShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
// //           }}
// //         >
// //           Welcome to The Psyche
// //         </motion.h1>
// //         <motion.p
// //           variants={textVariants}
// //           style={{
// //             fontSize: '20px',
// //             fontWeight: '400',
// //             marginBottom: '24px',
// //             color: 'blue',
// //             lineHeight: '1.6',
// //             textAlign: 'center',
// //             maxWidth: '800px',
// //           }}
// //         >
// //           Embark on a journey of self-discovery through 25 carefully crafted questions.
// //         </motion.p>
// //         <motion.button
// //           variants={buttonVariants}
// //           initial="hidden"
// //           animate="visible"
// //           whileHover="hover"
// //           whileTap="tap"
// //           onClick={handleGetStarted}
// //           style={{
// //             padding: '14px 36px',
// //             background: 'linear-gradient(135deg, #e94560, #ff758c)',
// //             color: '#fff',
// //             border: 'none',
// //             borderRadius: '50px',
// //             fontSize: '18px',
// //             fontWeight: '500',
// //             cursor: 'pointer',
// //             boxShadow: '0 4px 12px rgba(233, 69, 96, 0.5)',
// //           }}
// //         >
// //           Get Started
// //         </motion.button>
// //       </motion.section>

// //       {/* Middle Section: Services */}
// //       <motion.section
// //         variants={sectionVariants}
// //         initial="hidden"
// //         whileInView="visible"
// //         viewport={{ once: true, amount: 0.3 }}
// //         style={{
// //           width: '100%',
// //           background: 'rgba(255, 255, 255, 0.1)',
// //           padding: '60px 20px',
// //           textAlign: 'center',
// //           borderTop: '2px solid rgba(233, 69, 96, 0.5)',
// //           borderBottom: '2px solid rgba(233, 69, 96, 0.5)',
// //         }}
// //       >
// //         <motion.h2
// //           initial={{ opacity: 0, scale: 0.8 }}
// //           whileInView={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
// //           style={{
// //             fontSize: '40px',
// //             fontWeight: '700',
// //             marginBottom: '40px',
// //             letterSpacing: '2px',
// //             color: '#fff',
// //             textTransform: 'uppercase',
// //           }}
// //         >
// //           Our Services
// //         </motion.h2>
// //         <div
// //           style={{
// //             display: 'grid',
// //             gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// //             gap: '40px',
// //             maxWidth: '1200px',
// //             margin: '0 auto',
// //           }}
// //         >
// //           {services.map((service, index) => (
// //             <motion.div
// //               key={service.title}
// //               custom={index}
// //               variants={cardVariants}
// //               initial="hidden"
// //               whileInView="visible"
// //               whileHover="hover"
// //               style={{
// //                 background: 'rgba(255, 255, 255, 0.15)',
// //                 borderRadius: '15px',
// //                 padding: '30px',
// //                 textAlign: 'center',
// //                 boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
// //                 border: '2px solid rgba(233, 69, 96, 0.5)',
// //               }}
// //             >
// //               <motion.h3
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
// //                 style={{
// //                   fontSize: '24px',
// //                   fontWeight: '600',
// //                   color: '#e94560',
// //                   marginBottom: '15px',
// //                 }}
// //               >
// //                 {service.title}
// //               </motion.h3>
// //               <motion.p
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
// //                 style={{
// //                   fontSize: '16px',
// //                   color: '#e0e0e0',
// //                   lineHeight: '1.6',
// //                 }}
// //               >
// //                 {service.description}
// //               </motion.p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </motion.section>

// //       {/* Lower Section: About, Success Stories, and Partners */}
// //       <motion.section
// //         variants={sectionVariants}
// //         initial="hidden"
// //         whileInView="visible"
// //         viewport={{ once: true, amount: 0.3 }}
// //         style={{
// //           width: '100%',
// //           padding: '60px 20px',
// //           textAlign: 'center',
// //           background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage}) no-repeat center center/cover',
// //         }}
// //       >
// //         {/* About Subsection */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 1, type: 'spring' }}
// //           style={{
// //             maxWidth: '800px',
// //             margin: '0 auto 60px',
// //             padding: '24px',
// //             textAlign: 'center',
// //             color: '#eee',
// //             lineHeight: '1.8',
// //           }}
// //         >
// //           <motion.h2
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
// //             style={{
// //               fontSize: '32px',
// //               fontWeight: '600',
// //               marginBottom: '16px',
// //               letterSpacing: '1px',
// //               color: '#fff',
// //             }}
// //           >
// //             About The Psyche
// //           </motion.h2>
// //           <motion.p
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 1, delay: 0.3 }}
// //             style={{
// //               fontSize: '18px',
// //               fontWeight: '400',
// //               color: 'blue',
// //             }}
// //           >
// //             The Psyche is a revolutionary platform designed to help you understand your inner self.
// //             Through a series of 25 thought-provoking questions, we analyze five key aspects of your psyche:
// //             <strong style={{ color: '#e94560' }}>
// //               {' '}
// //               Mentality, Philosophy, Psychology, Fear, and Self-discovery
// //             </strong>
// //             . Our advanced algorithm provides a detailed report with insights, strengths, weaknesses, and
// //             personalized advice to help you grow.
// //           </motion.p>
// //         </motion.div>

// //         {/* Success Stories Subsection */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 1, type: 'spring' }}
// //           style={{
// //             maxWidth: '1200px',
// //             margin: '0 auto 60px',
// //             padding: '40px 20px',
// //             textAlign: 'center',
// //           }}
// //         >
// //           <motion.h2
// //             initial={{ opacity: 0, y: -50 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
// //             style={{
// //               fontSize: '40px',
// //               fontWeight: '700',
// //               marginBottom: '20px',
// //               letterSpacing: '2px',
// //               color: '#fff',
// //               textTransform: 'uppercase',
// //             }}
// //           >
// //             Why You Choose The Psyche
// //           </motion.h2>
// //           <motion.h3
// //             initial={{ opacity: 0, y: -30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 1, delay: 0.3 }}
// //             style={{
// //               fontSize: '28px',
// //               fontWeight: '600',
// //               marginBottom: '40px',
// //               color: '#e94560',
// //               letterSpacing: '1px',
// //             }}
// //           >
// //             Success Stories
// //           </motion.h3>
// //           <div
// //             style={{
// //               display: 'grid',
// //               gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// //               gap: '60px',
// //               justifyItems: 'center',
// //             }}
// //           >
// //             {successStories.map((story, index) => (
// //               <motion.div
// //                 key={story.name}
// //                 custom={index}
// //                 variants={cardVariants}
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 whileHover="hover"
// //                 style={{
// //                   background: 'rgba(255, 255, 255, 0.1)',
// //                   borderRadius: '15px',
// //                   width: '100%',
// //                   maxWidth: '300px',
// //                   padding: '20px',
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
// //                   border: '2px solid rgba(233, 69, 96, 0.5)',
// //                 }}
// //               >
// //                 <motion.img
// //                   src={story.photo}
// //                   alt={story.name}
// //                   initial={{ scale: 0, rotate: 360 }}
// //                   whileInView={{ scale: 1, rotate: 0 }}
// //                   transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
// //                   style={{
// //                     width: '100px',
// //                     height: '100px',
// //                     borderRadius: '10px',
// //                     objectFit: 'cover',
// //                     marginRight: '20px',
// //                     border: '3px solid #e94560',
// //                   }}
// //                 />
// //                 <div style={{ textAlign: 'left', flex: 1 }}>
// //                   <motion.h3
// //                     initial={{ opacity: 0, x: -30 }}
// //                     whileInView={{ opacity: 1, x: 0 }}
// //                     transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
// //                     style={{
// //                       fontSize: '20px',
// //                       fontWeight: '600',
// //                       color: '#e94560',
// //                       marginBottom: '10px',
// //                     }}
// //                   >
// //                     {story.name}
// //                   </motion.h3>
// //                   <motion.p
// //                     initial={{ opacity: 0, y: 20 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
// //                     style={{
// //                       fontSize: '14px',
// //                       color: '#e0e0e0',
// //                       lineHeight: '1.5',
// //                     }}
// //                   >
// //                     {story.review}
// //                   </motion.p>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>

// //         {/* Partners Subsection (Marquee) */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 1, type: 'spring' }}
// //           style={{
// //             width: '100%',
// //             overflow: 'hidden',
// //             padding: '20px 0',
// //             background: 'rgba(255, 255, 255, 0.05)',
// //             marginTop: '40px',
// //           }}
// //         >
// //           <motion.h2
// //             initial={{ opacity: 0, y: -30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
// //             style={{
// //               fontSize: '32px',
// //               fontWeight: '600',
// //               marginBottom: '20px',
// //               color: '#fff',
// //               textAlign: 'center',
// //             }}
// //           >
// //             Our Partners
// //           </motion.h2>
// //           <div
// //             style={{
// //               display: 'flex',
// //               animation: 'marquee 20s linear infinite',
// //               whiteSpace: 'nowrap',
// //             }}
// //           >
// //             {[...partners, ...partners].map((partner, index) => (
// //               <motion.div
// //                 key={`${partner}-${index}`}
// //                 whileHover={{ scale: 1.1, color: '#e94560' }}
// //                 style={{
// //                   fontSize: '20px',
// //                   fontWeight: '500',
// //                   color: '#e0e0e0',
// //                   margin: '0 40px',
// //                   padding: '10px 20px',
// //                   background: 'rgba(233, 69, 96, 0.2)',
// //                   borderRadius: '10px',
// //                 }}
// //               >
// //                 {partner}
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>
// //       </motion.section>

// //       {/* Inline CSS for Marquee Animation */}
// //       <style>
// //         {`
// //           @keyframes marquee {
// //             0% { transform: translateX(0); }
// //             100% { transform: translateX(-50%); }
// //           }
// //           div:hover > div {
// //             animation-play-state: paused;
// //           }
// //         `}
// //       </style>
// //     </div>
// //   );
// // }

// // export default Home;

// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import bgImage from '../assets/pexels-simon73-1323550.jpg';
// import priyaImage from '../assets/priya.jpg';
// import rahulImage from '../assets/rahul.jpg';
// import henryImage from '../assets/henry.jpg';
// import sophiaImage from '../assets/sophia.jpg';

// function Home() {
//   const navigate = useNavigate();

//   const handleGetStarted = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//       return;
//     }
//     try {
//       navigate('/journey-guide');
//     } catch (err) {
//       navigate('/login');
//     }
//   };

//   // Success Stories Data (for Carousel)
//   const successStories = [
//     {
//       name: 'Priya Sharma',
//       photo: priyaImage,
//       review:
//         'Psyche opened my eyes to my hidden fears and taught me how to build unshakable confidence—thanks to its insightful report, I now lead my team with clarity and pride.',
//     },
//     {
//       name: 'Rahul Mehta',
//       photo: rahulImage,
//       review:
//         'Through Psyche, I learned to value my self-worth and turned my life around by applying its personalized advice—today, I’m happier and thriving.',
//     },
//     {
//       name: 'Sophia Bennett',
//       photo: sophiaImage,
//       review:
//         'Psyche helped me confront my deepest fears and understand the patterns behind my choices. It’s like therapy in a beautifully designed platform.',
//     },
//     {
//       name: 'Henry Walker',
//       photo: henryImage,
//       review:
//         'The Psychology Phase showed me how to handle my inner storms effectively, helping me process emotions with clarity.',
//     },
//   ];

//   // Services Data
//   const services = [
//     {
//       title: 'Personality Analysis',
//       description:
//         'Dive deep into your psyche with our 25-question quiz to uncover your unique personality traits and strengths.',
//     },
//     {
//       title: 'Self-Discovery Reports',
//       description:
//         'Receive personalized reports with insights, weaknesses, and actionable advice to fuel your personal growth.',
//     },
//     {
//       title: 'Mindset Coaching',
//       description:
//         'Access guided coaching sessions to transform your mentality and overcome fears, inspired by psychological principles.',
//     },
//   ];

//   // Stats Data
//   const stats = [
//     { value: 10000, label: 'Users Inspired' },
//     { value: 25, label: 'Powerful Questions' },
//     { value: 5, label: 'Psyche Aspects' },
//   ];

//   // FAQ Data
//   const faqs = [
//     {
//       question: 'How does the Psyche quiz work?',
//       answer:
//         'Our quiz consists of 25 carefully crafted questions that analyze five aspects of your psyche. You answer at your own pace, and our algorithm generates a personalized report.',
//     },
//     {
//       question: 'Is my data safe with Psyche?',
//       answer:
//         'Absolutely! We use industry-standard encryption to protect your data, and your answers are kept confidential.',
//     },
//     {
//       question: 'How long does the quiz take?',
//       answer:
//         'The quiz typically takes 10-15 minutes, but you can pause and resume anytime.',
//     },
//   ];

//   // Partner Companies (for Marquee)
//   const partners = [
//     'MindSpace Inc.',
//     'GrowEasy Analytics',
//     'TherapyWorks',
//     'InnerQuest Labs',
//     'PsycheTech Solutions',
//     'WellMind Academy',
//   ];

//   // Animation Variants
//   const heroVariants = {
//     hidden: { opacity: 0, y: 100, scale: 0.8 },
//     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.5, type: 'spring', bounce: 0.3 } },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, x: -100 },
//     visible: { opacity: 1, x: 0, transition: { duration: 1.2, type: 'spring' } },
//   };

//   const buttonVariants = {
//     hidden: { opacity: 0, scale: 0 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.8, type: 'spring', bounce: 0.5 } },
//     hover: { scale: 1.1, rotate: 5, boxShadow: '0 0 20px rgba(233, 69, 96, 0.7)' },
//     tap: { scale: 0.9, rotate: -5 },
//   };

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 100 },
//     visible: { opacity: 1, y: 0, transition: { duration: 1.5, type: 'spring' } },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50, rotateX: 45 },
//     visible: (index) => ({
//       opacity: 1,
//       y: 0,
//       rotateX: 0,
//       transition: { duration: 0.8, delay: index * 0.2, type: 'spring', stiffness: 100 },
//     }),
//     hover: { scale: 1.05, rotateY: 10, boxShadow: '0 10px 30px rgba(233, 69, 96, 0.5)' },
//   };

//   // Testimonial Carousel State
//   const [carouselIndex, setCarouselIndex] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCarouselIndex((prev) => (prev + 1) % successStories.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [successStories.length]);

//   // Stats Counter State
//   const [counts, setCounts] = useState(stats.map(() => 0));
//   const animateCounts = () => {
//     stats.forEach((stat, index) => {
//       const increment = Math.ceil(stat.value / 50);
//       let current = 0;
//       const timer = setInterval(() => {
//         current += increment;
//         if (current >= stat.value) {
//           current = stat.value;
//           clearInterval(timer);
//         }
//         setCounts((prev) => {
//           const newCounts = [...prev];
//           newCounts[index] = current;
//           return newCounts;
//         });
//       }, 20);
//     });
//   };

//   // FAQ Accordion State
//   const [openFaq, setOpenFaq] = useState(null);

//   return (
//     <div
//       style={{
//         width: '100%',
//         background: `url(${bgImage}) no-repeat center center/cover`,
//         color: '#fff',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         boxSizing: 'border-box',
//         fontFamily: "'Poppins', sans-serif",
//       }}
//     >
//       {/* Upper Section: Hero */}
//       <motion.section
//         variants={heroVariants}
//         initial="hidden"
//         animate="visible"
//         style={{
//           minHeight: '100vh',
//           width: '100%',
//           background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage}) no-repeat center center/cover`,
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           padding: '40px 20px',
//         }}
//       >
//         <motion.h1
//           variants={textVariants}
//           style={{
//             fontSize: '56px',
//             fontWeight: '700',
//             marginBottom: '16px',
//             letterSpacing: '1.5px',
//             color: '#fff',
//             textTransform: 'uppercase',
//             textShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
//           }}
//         >
//           Welcome to The Psyche
//         </motion.h1>
//         <motion.p
//           variants={textVariants}
//           style={{
//             fontSize: '20px',
//             fontWeight: '400',
//             marginBottom: '24px',
//             color: 'blue',
//             lineHeight: '1.6',
//             textAlign: 'center',
//             maxWidth: '800px',
//           }}
//         >
//           Embark on a journey of self-discovery through 25 carefully crafted questions.
//         </motion.p>
//         <motion.button
//           variants={buttonVariants}
//           initial="hidden"
//           animate="visible"
//           whileHover="hover"
//           whileTap="tap"
//           onClick={handleGetStarted}
//           style={{
//             padding: '14px 36px',
//             background: 'linear-gradient(135deg, #e94560, #ff758c)',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '50px',
//             fontSize: '18px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             boxShadow: '0 4px 12px rgba(233, 69, 96, 0.5)',
//           }}
//         >
//           Get Started
//         </motion.button>
//       </motion.section>

//       {/* Middle Section: Services & Stats */}
//       <motion.section
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         style={{
//           width: '100%',
//           background: 'rgba(255, 255, 255, 0.1)',
//           padding: '60px 20px',
//           textAlign: 'center',
//           borderTop: '2px solid rgba(233, 69, 96, 0.5)',
//           borderBottom: '2px solid rgba(233, 69, 96, 0.5)',
//         }}
//       >
//         {/* Services */}
//         <motion.h2
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
//           style={{
//             fontSize: '40px',
//             fontWeight: '700',
//             marginBottom: '40px',
//             letterSpacing: '2px',
//             color: '#fff',
//             textTransform: 'uppercase',
//           }}
//         >
//           Our Services
//         </motion.h2>
//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//             gap: '40px',
//             maxWidth: '1200px',
//             margin: '0 auto 60px',
//           }}
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               custom={index}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               whileHover="hover"
//               style={{
//                 background: 'rgba(255, 255, 255, 0.15)',
//                 borderRadius: '15px',
//                 padding: '30px',
//                 textAlign: 'center',
//                 boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
//                 border: '2px solid rgba(233, 69, 96, 0.5)',
//               }}
//             >
//               <motion.h3
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
//                 style={{
//                   fontSize: '24px',
//                   fontWeight: '600',
//                   color: '#e94560',
//                   marginBottom: '15px',
//                 }}
//               >
//                 {service.title}
//               </motion.h3>
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
//                 style={{
//                   fontSize: '16px',
//                   color: '#e0e0e0',
//                   lineHeight: '1.6',
//                 }}
//               >
//                 {service.description}
//               </motion.p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Stats Counter */}
//         <motion.h2
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
//           style={{
//             fontSize: '40px',
//             fontWeight: '700',
//             marginBottom: '40px',
//             letterSpacing: '2px',
//             color: '#fff',
//             textTransform: 'uppercase',
//           }}
//         >
//           Our Impact
//         </motion.h2>
//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//             gap: '40px',
//             maxWidth: '1200px',
//             margin: '0 auto',
//           }}
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               custom={index}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               onViewportEnter={animateCounts}
//               style={{
//                 background: 'rgba(255, 255, 255, 0.15)',
//                 borderRadius: '15px',
//                 padding: '30px',
//                 textAlign: 'center',
//                 boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
//                 border: '2px solid rgba(233, 69, 96, 0.5)',
//               }}
//             >
//               <motion.h3
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
//                 style={{
//                   fontSize: '36px',
//                   fontWeight: '700',
//                   color: '#e94560',
//                   marginBottom: '10px',
//                 }}
//               >
//                 {counts[index].toLocaleString()}+
//               </motion.h3>
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
//                 style={{
//                   fontSize: '18px',
//                   color: '#e0e0e0',
//                   lineHeight: '1.6',
//                 }}
//               >
//                 {stat.label}
//               </motion.p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Lower Section: About, Testimonials, FAQs, Partners */}
//       <motion.section
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         style={{
//           width: '100%',
//           padding: '60px 20px',
//           textAlign: 'center',
//           background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage}) no-repeat center center/cover`,
//         }}
//       >
//         {/* About Subsection */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, type: 'spring' }}
//           style={{
//             maxWidth: '800px',
//             margin: '0 auto 60px',
//             padding: '24px',
//             textAlign: 'center',
//             color: '#eee',
//             lineHeight: '1.8',
//           }}
//         >
//           <motion.h2
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
//             style={{
//               fontSize: '32px',
//               fontWeight: '600',
//               marginBottom: '16px',
//               letterSpacing: '1px',
//               color: '#fff',
//             }}
//           >
//             About The Psyche
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             style={{
//               fontSize: '18px',
//               fontWeight: '400',
//               color: 'blue',
//             }}
//           >
//             The Psyche is a revolutionary platform designed to help you understand your inner self.
//             Through a series of 25 thought-provoking questions, we analyze five key aspects of your psyche:
//             <strong style={{ color: '#e94560' }}>
//               {' '}
//               Mentality, Philosophy, Psychology, Fear, and Self-discovery
//             </strong>
//             . Our advanced algorithm provides a detailed report with insights, strengths, weaknesses, and
//             personalized advice to help you grow.
//           </motion.p>
//         </motion.div>

//         {/* Testimonial Carousel Subsection */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, type: 'spring' }}
//           style={{
//             maxWidth: '1200px',
//             margin: '0 auto 60px',
//             padding: '40px 20px',
//             textAlign: 'center',
//           }}
//         >
//           <motion.h2
//             initial={{ opacity: 0, y: -50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
//             style={{
//               fontSize: '40px',
//               fontWeight: '700',
//               marginBottom: '20px',
//               letterSpacing: '2px',
//               color: '#fff',
//               textTransform: 'uppercase',
//             }}
//           >
//             Why You Choose The Psyche
//           </motion.h2>
//           <motion.h3
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             style={{
//               fontSize: '28px',
//               fontWeight: '600',
//               marginBottom: '40px',
//               color: '#e94560',
//               letterSpacing: '1px',
//             }}
//           >
//             Success Stories
//           </motion.h3>
//           <div style={{ overflow: 'hidden', position: 'relative' }}>
//             <motion.div
//               animate={{ x: `-${carouselIndex * 100}%` }}
//               transition={{ duration: 0.8, ease: 'easeInOut' }}
//               style={{
//                 display: 'flex',
//                 width: `${successStories.length * 100}%`,
//               }}
//             >
//               {successStories.map((story, index) => (
//                 <motion.div
//                   key={story.name}
//                   style={{
//                     width: `${100 / successStories.length}%`,
//                     padding: '0 20px',
//                   }}
//                 >
//                   <motion.div
//                     variants={cardVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     whileHover="hover"
//                     custom={index}
//                     style={{
//                       background: 'rgba(255, 255, 255, 0.1)',
//                       borderRadius: '15px',
//                       padding: '20px',
//                       display: 'flex',
//                       alignItems: 'center',
//                       boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
//                       border: '2px solid rgba(233, 69, 96, 0.5)',
//                     }}
//                   >
//                     <motion.img
//                       src={story.photo}
//                       alt={story.name}
//                       initial={{ scale: 0, rotate: 360 }}
//                       whileInView={{ scale: 1, rotate: 0 }}
//                       transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
//                       style={{
//                         width: '100px',
//                         height: '100px',
//                         borderRadius: '10px',
//                         objectFit: 'cover',
//                         marginRight: '20px',
//                         border: '3px solid #e94560',
//                       }}
//                     />
//                     <div style={{ textAlign: 'left', flex: 1 }}>
//                       <motion.h3
//                         initial={{ opacity: 0, x: -30 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
//                         style={{
//                           fontSize: '20px',
//                           fontWeight: '600',
//                           color: '#e94560',
//                           marginBottom: '10px',
//                         }}
//                       >
//                         {story.name}
//                       </motion.h3>
//                       <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
//                         style={{
//                           fontSize: '14px',
//                           color: '#e0e0e0',
//                           lineHeight: '1.5',
//                         }}
//                       >
//                         {story.review}
//                       </motion.p>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </motion.div>
//             <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//               {successStories.map((_, index) => (
//                 <motion.button
//                   key={index}
//                   onClick={() => setCarouselIndex(index)}
//                   whileHover={{ scale: 1.2 }}
//                   whileTap={{ scale: 0.9 }}
//                   style={{
//                     width: '12px',
//                     height: '12px',
//                     borderRadius: '50%',
//                     background: carouselIndex === index ? '#e94560' : '#e0e0e0',
//                     border: 'none',
//                     margin: '0 5px',
//                     cursor: 'pointer',
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* FAQ Accordion Subsection */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, type: 'spring' }}
//           style={{
//             maxWidth: '800px',
//             margin: '0 auto 60px',
//             padding: '0 20px',
//             textAlign: 'center',
//           }}
//         >
//           <motion.h2
//             initial={{ opacity: 0, y: -50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
//             style={{
//               fontSize: '40px',
//               fontWeight: '700',
//               marginBottom: '40px',
//               letterSpacing: '2px',
//               color: '#fff',
//               textTransform: 'uppercase',
//             }}
//           >
//             Frequently Asked Questions
//           </motion.h2>
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={faq.question}
//               layout
//               style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 borderRadius: '15px',
//                 marginBottom: '15px',
//                 padding: '20px',
//                 boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
//                 border: '2px solid rgba(233, 69, 96, 0.5)',
//                 cursor: 'pointer',
//               }}
//               onClick={() => setOpenFaq(openFaq === index ? null : index)}
//             >
//               <motion.h3
//                 style={{
//                   fontSize: '20px',
//                   fontWeight: '600',
//                   color: '#e94560',
//                   marginBottom: openFaq === index ? '10px' : '0',
//                 }}
//               >
//                 {faq.question}
//               </motion.h3>
//               <motion.p
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{
//                   height: openFaq === index ? 'auto' : 0,
//                   opacity: openFaq === index ? 1 : 0,
//                 }}
//                 transition={{ duration: 0.5, ease: 'easeInOut' }}
//                 style={{
//                   fontSize: '16px',
//                   color: '#e0e0e0',
//                   lineHeight: '1.6',
//                   overflow: 'hidden',
//                 }}
//               >
//                 {faq.answer}
//               </motion.p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Partners Subsection (Marquee) */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, type: 'spring' }}
//           style={{
//             width: '100%',
//             overflow: 'hidden',
//             padding: '20px 0',
//             background: 'rgba(255, 255, 255, 0.05)',
//           }}
//         >
//           <motion.h2
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
//             style={{
//               fontSize: '32px',
//               fontWeight: '600',
//               marginBottom: '20px',
//               color: '#fff',
//               textAlign: 'center',
//             }}
//           >
//             Our Partners
//           </motion.h2>
//           <div
//             style={{
//               display: 'flex',
//               animation: 'marquee 20s linear infinite',
//               whiteSpace: 'nowrap',
//             }}
//           >
//             {[...partners, ...partners].map((partner, index) => (
//               <motion.div
//                 key={`${partner}-${index}`}
//                 whileHover={{ scale: 1.1, color: '#e94560' }}
//                 style={{
//                   fontSize: '20px',
//                   fontWeight: '500',
//                   color: '#e0e0e0',
//                   margin: '0 40px',
//                   padding: '10px 20px',
//                   background: 'rgba(233, 69, 96, 0.2)',
//                   borderRadius: '10px',
//                 }}
//               >
//                 {partner}
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </motion.section>

//       {/* Inline CSS for Marquee Animation */}
//       <style>
//         {`
//           @keyframes marquee {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           div:hover > div {
//             animation-play-state: paused;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Home;

import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import bgImage from '../assets/pexels-simon73-1323550.jpg';
import priyaImage from '../assets/priya.jpg';
import rahulImage from '../assets/rahul.jpg';
import henryImage from '../assets/henry.jpg';
import sophiaImage from '../assets/sophia.jpg';

function Home() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();

  const handleGetStarted = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      navigate('/journey-guide');
    } catch (err) {
      navigate('/login');
    }
  };

  // Success Stories Data (for Carousel)
  const successStories = [
    {
      name: 'Priya Sharma',
      photo: priyaImage,
      review:
        'Psyche opened my eyes to my hidden fears and taught me how to build unshakable confidence—thanks to its insightful report, I now lead my team with clarity and pride.',
    },
    {
      name: 'Rahul Mehta',
      photo: rahulImage,
      review:
        'Through Psyche, I learned to value my self-worth and turned my life around by applying its personalized advice—today, I’m happier and thriving.',
    },
    {
      name: 'Sophia Bennett',
      photo: sophiaImage,
      review:
        'Psyche helped me confront my deepest fears and understand the patterns behind my choices. It’s like therapy in a beautifully designed platform.',
    },
    {
      name: 'Henry Walker',
      photo: henryImage,
      review:
        'The Psychology Phase showed me how to handle my inner storms effectively, helping me process emotions with clarity.',
    },
  ];

  // Services Data
  const services = [
    {
      title: 'Personality Analysis',
      description:
        'Dive deep into your psyche with our 25-question quiz to uncover your unique personality traits and strengths.',
    },
    {
      title: 'Self-Discovery Reports',
      description:
        'Receive personalized reports with insights, weaknesses, and actionable advice to fuel your personal growth.',
    },
    {
      title: 'Mindset Coaching',
      description:
        'Access guided coaching sessions to transform your mentality and overcome fears, inspired by psychological principles.',
    },
  ];

  // Stats Data
  const stats = [
    { value: 10000, label: 'Users Inspired' },
    { value: 25, label: 'Powerful Questions' },
    { value: 5, label: 'Psyche Aspects' },
  ];

  // FAQ Data
  const faqs = [
    {
      question: 'How does the Psyche quiz work?',
      answer:
        'Our quiz consists of 25 carefully crafted questions that analyze five aspects of your psyche. You answer at your own pace, and our algorithm generates a personalized report.',
    },
    {
      question: 'Is my data safe with Psyche?',
      answer:
        'Absolutely! We use industry-standard encryption to protect your data, and your answers are kept confidential.',
    },
    {
      question: 'How long does the quiz take?',
      answer:
        'The quiz typically takes 10-15 minutes, but you can pause and resume anytime.',
    },
  ];

  // Partner Companies (for Marquee)
  const partners = [
    'MindSpace Inc.',
    'GrowEasy Analytics',
    'TherapyWorks',
    'InnerQuest Labs',
    'PsycheTech Solutions',
    'WellMind Academy',
  ];

  // Animation Variants
  const heroVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.5, type: 'spring', bounce: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, type: 'spring' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, type: 'spring', bounce: 0.5 } },
    hover: { scale: 1.1, rotate: 5, boxShadow: '0 0 20px rgba(233, 69, 96, 0.7)' },
    tap: { scale: 0.9, rotate: -5 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, type: 'spring', staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 45 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, delay: index * 0.2, type: 'spring', stiffness: 100 },
    }),
    hover: { scale: 1.05, rotateY: 10, boxShadow: '0 10px 30px rgba(233, 69, 96, 0.5)' },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  // Scroll-Based Parallax and Scale Effects
  const heroParallax = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
  const lowerParallax = useTransform(scrollYProgress, [0.4, 0.8], [0, -150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.7]);

  // Testimonial Carousel State
  const [carouselIndex, setCarouselIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [successStories.length]);

  // Stats Counter State
  const [counts, setCounts] = useState(stats.map(() => 0));
  const animateCounts = () => {
    stats.forEach((stat, index) => {
      const increment = Math.ceil(stat.value / 50);
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = current;
          return newCounts;
        });
      }, 20);
    });
  };

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div
      style={{
        width: '100%',
        background: `url(${bgImage}) no-repeat center center/cover`,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Upper Section: Hero */}
      <motion.section
        style={{
          minHeight: '100vh',
          width: '100%',
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage}) no-repeat center center/cover`,
          backgroundPositionY: heroParallax,
          scale: heroScale,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px 20px',
        }}
      >
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: '56px',
            fontWeight: '700',
            marginBottom: '16px',
            letterSpacing: '1.5px',
            color: '#fff',
            textTransform: 'uppercase',
            textShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
            opacity: textOpacity,
          }}
        >
          Welcome to The Psyche
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: '20px',
            fontWeight: '400',
            marginBottom: '24px',
            color: 'blue',
            lineHeight: '1.6',
            textAlign: 'center',
            maxWidth: '800px',
            opacity: textOpacity,
          }}
        >
          Embark on a journey of self-discovery through 25 carefully crafted questions.
        </motion.p>
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          onClick={handleGetStarted}
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
          Get Started
        </motion.button>
      </motion.section>

      {/* Middle Section: Services & Stats */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          width: '100%',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '60px 20px',
          textAlign: 'center',
          borderTop: '2px solid rgba(233, 69, 96, 0.5)',
          borderBottom: '2px solid rgba(233, 69, 96, 0.5)',
        }}
      >
        {/* Services */}
        <motion.h2
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          style={{
            fontSize: '40px',
            fontWeight: '700',
            marginBottom: '40px',
            letterSpacing: '2px',
            color: '#fff',
            textTransform: 'uppercase',
          }}
        >
          Our Services
        </motion.h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto 60px',
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '15px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                border: '2px solid rgba(233, 69, 96, 0.5)',
              }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#e94560',
                  marginBottom: '15px',
                }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                style={{
                  fontSize: '16px',
                  color: '#e0e0e0',
                  lineHeight: '1.6',
                }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Stats Counter */}
        <motion.h2
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          style={{
            fontSize: '40px',
            fontWeight: '700',
            marginBottom: '40px',
            letterSpacing: '2px',
            color: '#fff',
            textTransform: 'uppercase',
          }}
        >
          Our Impact
        </motion.h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              onViewportEnter={animateCounts}
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '15px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                border: '2px solid rgba(233, 69, 96, 0.5)',
              }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: '#e94560',
                  marginBottom: '10px',
                }}
              >
                {counts[index].toLocaleString()}+
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                style={{
                  fontSize: '18px',
                  color: '#e0e0e0',
                  lineHeight: '1.6',
                }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Lower Section: About, Testimonials, FAQs, Partners */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          width: '100%',
          padding: '60px 20px',
          textAlign: 'center',
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage}) no-repeat center center/cover`,
          backgroundPositionY: lowerParallax,
        }}
      >
        {/* About Subsection */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          style={{
            maxWidth: '800px',
            margin: '0 auto 60px',
            padding: '24px',
            textAlign: 'center',
            color: '#eee',
            lineHeight: '1.8',
          }}
        >
          <motion.h2
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            style={{
              fontSize: '32px',
              fontWeight: '600',
              marginBottom: '16px',
              letterSpacing: '1px',
              color: '#fff',
            }}
          >
            About The Psyche
          </motion.h2>
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            style={{
              fontSize: '18px',
              fontWeight: '400',
              color: 'blue',
            }}
          >
            The Psyche is a revolutionary platform designed to help you understand your inner self.
            Through a series of 25 thought-provoking questions, we analyze five key aspects of your psyche:
            <strong style={{ color: '#e94560' }}>
              {' '}
              Mentality, Philosophy, Psychology, Fear, and Self-discovery
            </strong>
            . Our advanced algorithm provides a detailed report with insights, strengths, weaknesses, and
            personalized advice to help you grow.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel Subsection */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          style={{
            maxWidth: '800px',
            margin: '0 auto 60px',
            padding: '40px 20px',
            textAlign: 'center',
          }}
        >
          <motion.h2
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            style={{
              fontSize: '40px',
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '2px',
              color: '#fff',
              textTransform: 'uppercase',
            }}
          >
            Why You Choose The Psyche
          </motion.h2>
          <motion.h3
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            style={{
              fontSize: '28px',
              fontWeight: '600',
              marginBottom: '40px',
              color: '#e94560',
              letterSpacing: '1px',
            }}
          >
            Success Stories
          </motion.h3>
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            <motion.div
              animate={{ x: -carouselIndex * 600 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              {successStories.map((story, index) => (
                <motion.div
                  key={story.name}
                  style={{
                    minWidth: '600px',
                    padding: '0 20px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    custom={index}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '15px',
                      padding: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                      border: '2px solid rgba(233, 69, 96, 0.5)',
                      width: '100%',
                      maxWidth: '560px',
                    }}
                  >
                    <motion.img
                      src={story.photo}
                      alt={story.name}
                      initial={{ scale: 0, rotate: 360 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                      style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '10px',
                        objectFit: 'cover',
                        marginRight: '20px',
                        border: '3px solid #e94560',
                      }}
                    />
                    <div style={{ textAlign: 'left', flex: 1 }}>
                      <motion.h3
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                        style={{
                          fontSize: '20px',
                          fontWeight: '600',
                          color: '#e94560',
                          marginBottom: '10px',
                        }}
                      >
                        {story.name}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                        style={{
                          fontSize: '14px',
                          color: '#e0e0e0',
                          lineHeight: '1.5',
                        }}
                      >
                        {story.review}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              {successStories.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCarouselIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: carouselIndex === index ? '#e94560' : '#e0e0e0',
                    border: 'none',
                    margin: '0 5px',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>
            {/* Navigation Arrows */}
            <motion.button
              onClick={() => setCarouselIndex((prev) => (prev - 1 + successStories.length) % successStories.length)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(233, 69, 96, 0.5)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: '#fff',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ←
            </motion.button>
            <motion.button
              onClick={() => setCarouselIndex((prev) => (prev + 1) % successStories.length)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(233, 69, 96, 0.5)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: '#fff',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              →
            </motion.button>
          </div>
        </motion.div>

        {/* FAQ Accordion Subsection */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          style={{
            maxWidth: '800px',
            margin: '0 auto 60px',
            padding: '0 20px',
            textAlign: 'center',
          }}
        >
          <motion.h2
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            style={{
              fontSize: '40px',
              fontWeight: '700',
              marginBottom: '40px',
              letterSpacing: '2px',
              color: '#fff',
              textTransform: 'uppercase',
            }}
          >
            Frequently Asked Questions
          </motion.h2>
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                marginBottom: '15px',
                padding: '20px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                border: '2px solid rgba(233, 69, 96, 0.5)',
                cursor: 'pointer',
              }}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <motion.h3
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#e94560',
                  marginBottom: openFaq === index ? '10px' : '0',
                }}
              >
                {faq.question}
              </motion.h3>
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openFaq === index ? 'auto' : 0,
                  opacity: openFaq === index ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                style={{
                  fontSize: '16px',
                  color: '#e0e0e0',
                  lineHeight: '1.6',
                  overflow: 'hidden',
                }}
              >
                {faq.answer}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners Subsection (Marquee) */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          style={{
            width: '100%',
            overflow: 'hidden',
            padding: '20px 0',
            background: 'rgba(255, 255, 255, 0.05)',
          }}
        >
          <motion.h2
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            style={{
              fontSize: '32px',
              fontWeight: '600',
              marginBottom: '20px',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            Our Partners
          </motion.h2>
          <div
            style={{
              display: 'flex',
              animation: 'marquee 20s linear infinite',
              whiteSpace: 'nowrap',
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner}-${index}`}
                variants={cardVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.1, color: '#e94560' }}
                style={{
                  fontSize: '20px',
                  fontWeight: '500',
                  color: '#e0e0e0',
                  margin: '0 40px',
                  padding: '10px 20px',
                  background: 'rgba(233, 69, 96, 0.2)',
                  borderRadius: '10px',
                }}
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Inline CSS for Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          div:hover > div {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
}

export default Home;