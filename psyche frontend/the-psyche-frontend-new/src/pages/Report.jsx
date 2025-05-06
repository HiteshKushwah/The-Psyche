// // // // // // import { useState, useEffect } from 'react';
// // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // import { motion } from 'framer-motion';
// // // // // // import axiosInstance from '../utils/axiosInstance.js';

// // // // // // function Report() {
// // // // // //   const [report, setReport] = useState(null);
// // // // // //   const [feedback, setFeedback] = useState('');
// // // // // //   const navigate = useNavigate();

// // // // // //   useEffect(() => {
// // // // // //     const fetchReport = async () => {
// // // // // //       try {
// // // // // //         const res = await axiosInstance.get('/psyche/report');
// // // // // //         if (res.data.message === 'Incomplete analysis—please answer all 25 questions') {
// // // // // //           navigate('/questions');
// // // // // //         } else {
// // // // // //           // Normalize scores to 0-10
// // // // // //           const normalizedReport = {
// // // // // //             ...res.data,
// // // // // //             report: Object.fromEntries(
// // // // // //               Object.entries(res.data.report).map(([phase, data]) => [
// // // // // //                 phase,
// // // // // //                 {
// // // // // //                   ...data,
// // // // // //                   score: Math.round((data.score / 50) * 10 * 10) / 10, // Assuming max raw score is 50
// // // // // //                 },
// // // // // //               ])
// // // // // //             ),
// // // // // //           };
// // // // // //           setReport(normalizedReport);
// // // // // //         }
// // // // // //       } catch (err) {
// // // // // //         alert('Error: ' + (err.response?.data?.message || 'Failed to load report'));
// // // // // //         navigate('/questions');
// // // // // //       }
// // // // // //     };
// // // // // //     fetchReport();
// // // // // //   }, [navigate]);

// // // // // //   const handleFeedback = async () => {
// // // // // //     if (!feedback.trim()) {
// // // // // //       alert('Feedback cannot be empty');
// // // // // //       return;
// // // // // //     }
// // // // // //     try {
// // // // // //       await axiosInstance.post('/psyche/feedback', { text: feedback });
// // // // // //       setFeedback('');
// // // // // //       alert('Feedback submitted!');
// // // // // //     } catch (err) {
// // // // // //       alert('Error: ' + (err.response?.data?.message || 'Failed to submit feedback'));
// // // // // //     }
// // // // // //   };

// // // // // //   if (!report) return <div style={{ padding: '20px' }}>Loading...</div>;

// // // // // //   return (
// // // // // //     <motion.div
// // // // // //       initial={{ opacity: 0 }}
// // // // // //       animate={{ opacity: 1 }}
// // // // // //       transition={{ duration: 0.5 }}
// // // // // //       style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}
// // // // // //     >
// // // // // //       <h2 style={{ fontSize: '32px', marginBottom: '20px', textAlign: 'center' }}>Your Psyche Report</h2>
// // // // // //       {Object.entries(report.report).map(([phase, { score, insight }]) => (
// // // // // //         <motion.div
// // // // // //           key={phase}
// // // // // //           initial={{ x: -50, opacity: 0 }}
// // // // // //           animate={{ x: 0, opacity: 1 }}
// // // // // //           transition={{ duration: 0.5 }}
// // // // // //           style={{
// // // // // //             margin: '20px 0',
// // // // // //             padding: '20px',
// // // // // //             background: 'rgba(255, 255, 255, 0.1)',
// // // // // //             borderRadius: '10px',
// // // // // //             boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
// // // // // //           }}
// // // // // //         >
// // // // // //           <h3 style={{ fontSize: '24px' }}>
// // // // // //             {phase.charAt(0).toUpperCase() + phase.slice(1)}: {score}/10
// // // // // //           </h3>
// // // // // //           <p style={{ fontSize: '16px', marginTop: '10px' }}>{insight}</p>
// // // // // //         </motion.div>
// // // // // //       ))}
// // // // // //       <motion.div
// // // // // //         initial={{ opacity: 0 }}
// // // // // //         animate={{ opacity: 1 }}
// // // // // //         transition={{ delay: 0.5 }}
// // // // // //         style={{ marginTop: '30px' }}
// // // // // //       >
// // // // // //         <p style={{ fontSize: '18px' }}><strong>Dominant Phase:</strong> {report.dominantPhase}</p>
// // // // // //         <p style={{ fontSize: '18px' }}><strong>Strengths:</strong> {report.strengths}</p>
// // // // // //         <p style={{ fontSize: '18px' }}><strong>Weaknesses:</strong> {report.weaknesses}</p>
// // // // // //         <p style={{ fontSize: '18px' }}><strong>Advice:</strong> {report.advice}</p>
// // // // // //         <p style={{ fontSize: '18px' }}><strong>Recommendation:</strong> {report.recommendation}</p>
// // // // // //       </motion.div>
// // // // // //       <motion.div
// // // // // //         initial={{ opacity: 0 }}
// // // // // //         animate={{ opacity: 1 }}
// // // // // //         transition={{ delay: 0.7 }}
// // // // // //         style={{ marginTop: '30px' }}
// // // // // //       >
// // // // // //         <textarea
// // // // // //           value={feedback}
// // // // // //           onChange={(e) => setFeedback(e.target.value)}
// // // // // //           placeholder="Your feedback..."
// // // // // //           style={{
// // // // // //             width: '100%',
// // // // // //             height: '100px',
// // // // // //             padding: '10px',
// // // // // //             background: 'rgba(255, 255, 255, 0.1)',
// // // // // //             border: '1px solid #fff',
// // // // // //             borderRadius: '5px',
// // // // // //             color: '#fff',
// // // // // //             resize: 'none',
// // // // // //           }}
// // // // // //         />
// // // // // //         <motion.button
// // // // // //           whileHover={{ scale: 1.05 }}
// // // // // //           whileTap={{ scale: 0.95 }}
// // // // // //           onClick={handleFeedback}
// // // // // //           style={{
// // // // // //             marginTop: '10px',
// // // // // //             padding: '10px 20px',
// // // // // //             background: '#e94560',
// // // // // //             border: 'none',
// // // // // //             borderRadius: '50px',
// // // // // //             color: '#fff',
// // // // // //             cursor: 'pointer',
// // // // // //           }}
// // // // // //         >
// // // // // //           Submit Feedback
// // // // // //         </motion.button>
// // // // // //       </motion.div>
// // // // // //     </motion.div>
// // // // // //   );
// // // // // // }

// // // // // // export default Report;

// // // // // import { useState, useEffect } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import { motion } from 'framer-motion';
// // // // // import axiosInstance from '../utils/axiosInstance.js';

// // // // // function Report() {
// // // // //   const [report, setReport] = useState(null);
// // // // //   const [feedback, setFeedback] = useState('');
// // // // //   const navigate = useNavigate();

// // // // //   useEffect(() => {
// // // // //     const fetchReport = async () => {
// // // // //       try {
// // // // //         const res = await axiosInstance.get('/psyche/report');
// // // // //         if (res.data.message === 'Incomplete analysis—please answer all 25 questions') {
// // // // //           navigate('/questions');
// // // // //         } else {
// // // // //           const normalizedReport = {
// // // // //             ...res.data,
// // // // //             report: Object.fromEntries(
// // // // //               Object.entries(res.data.report).map(([phase, data]) => [
// // // // //                 phase,
// // // // //                 {
// // // // //                   ...data,
// // // // //                   score: Math.round((data.score / 50) * 10 * 10) / 10,
// // // // //                 },
// // // // //               ])
// // // // //             ),
// // // // //           };
// // // // //           setReport(normalizedReport);
// // // // //         }
// // // // //       } catch (err) {
// // // // //         alert('Error: ' + (err.response?.data?.message || 'Failed to load report'));
// // // // //         navigate('/questions');
// // // // //       }
// // // // //     };
// // // // //     fetchReport();
// // // // //   }, [navigate]);

// // // // //   const handleFeedback = async () => {
// // // // //     if (!feedback.trim()) {
// // // // //       alert('Feedback cannot be empty');
// // // // //       return;
// // // // //     }
// // // // //     try {
// // // // //       await axiosInstance.post('/psyche/feedback', { text: feedback });
// // // // //       setFeedback('');
// // // // //       alert('Feedback submitted!');
// // // // //     } catch (err) {
// // // // //       alert('Error: ' + (err.response?.data?.message || 'Failed to submit feedback'));
// // // // //     }
// // // // //   };

// // // // //   if (!report) return <div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>;

// // // // //   return (
// // // // //     <motion.div
// // // // //       initial={{ opacity: 0 }}
// // // // //       animate={{ opacity: 1 }}
// // // // //       transition={{ duration: 0.5 }}
// // // // //       style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}
// // // // //     >
// // // // //       <div style={{ maxWidth: '800px' }}>
// // // // //         <h2 style={{ fontSize: '32px', marginBottom: '20px', textAlign: 'center' }}>Your Psyche Report</h2>
// // // // //         {Object.entries(report.report).map(([phase, { score, insight }]) => (
// // // // //           <motion.div
// // // // //             key={phase}
// // // // //             initial={{ x: -50, opacity: 0 }}
// // // // //             animate={{ x: 0, opacity: 1 }}
// // // // //             transition={{ duration: 0.5 }}
// // // // //             style={{
// // // // //               margin: '20px 0',
// // // // //               padding: '20px',
// // // // //               background: 'rgba(255, 255, 255, 0.1)',
// // // // //               borderRadius: '10px',
// // // // //               boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
// // // // //             }}
// // // // //           >
// // // // //             <h3 style={{ fontSize: '24px' }}>
// // // // //               {phase.charAt(0).toUpperCase() + phase.slice(1)}: {score}/10
// // // // //             </h3>
// // // // //             <p style={{ fontSize: '16px', marginTop: '10px' }}>{insight}</p>
// // // // //           </motion.div>
// // // // //         ))}
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0 }}
// // // // //           animate={{ opacity: 1 }}
// // // // //           transition={{ delay: 0.5 }}
// // // // //           style={{ marginTop: '30px' }}
// // // // //         >
// // // // //           <p style={{ fontSize: '18px' }}><strong>Dominant Phase:</strong> {report.dominantPhase}</p>
// // // // //           <p style={{ fontSize: '18px' }}><strong>Strengths:</strong> {report.strengths}</p>
// // // // //           <p style={{ fontSize: '18px' }}><strong>Weaknesses:</strong> {report.weaknesses}</p>
// // // // //           <p style={{ fontSize: '18px' }}><strong>Advice:</strong> {report.advice}</p>
// // // // //           <p style={{ fontSize: '18px' }}><strong>Recommendation:</strong> {report.recommendation}</p>
// // // // //         </motion.div>
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0 }}
// // // // //           animate={{ opacity: 1 }}
// // // // //           transition={{ delay: 0.7 }}
// // // // //           style={{ marginTop: '30px' }}
// // // // //         >
// // // // //           <textarea
// // // // //             value={feedback}
// // // // //             onChange={(e) => setFeedback(e.target.value)}
// // // // //             placeholder="Your feedback..."
// // // // //             style={{
// // // // //               width: '100%',
// // // // //               height: '100px',
// // // // //               padding: '10px',
// // // // //               background: 'rgba(255, 255, 255, 0.1)',
// // // // //               border: '1px solid #fff',
// // // // //               borderRadius: '5px',
// // // // //               color: '#fff',
// // // // //               resize: 'none',
// // // // //             }}
// // // // //           />
// // // // //           <motion.button
// // // // //             whileHover={{ scale: 1.05 }}
// // // // //             whileTap={{ scale: 0.95 }}
// // // // //             onClick={handleFeedback}
// // // // //             style={{
// // // // //               marginTop: '10px',
// // // // //               padding: '10px 20px',
// // // // //               background: '#e94560',
// // // // //               border: 'none',
// // // // //               borderRadius: '50px',
// // // // //               color: '#fff',
// // // // //               cursor: 'pointer',
// // // // //             }}
// // // // //           >
// // // // //             Submit Feedback
// // // // //           </motion.button>
// // // // //         </motion.div>
// // // // //       </div>
// // // // //     </motion.div>
// // // // //   );
// // // // // }

// // // // // export default Report;

// // // // import { useState, useEffect } from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import { motion } from 'framer-motion';
// // // // import axiosInstance from '../utils/axiosInstance.js';

// // // // function Report() {
// // // //   const [report, setReport] = useState(null);
// // // //   const [feedback, setFeedback] = useState('');
// // // //   const navigate = useNavigate();

// // // //   useEffect(() => {
// // // //     const fetchReport = async () => {
// // // //       try {
// // // //         const res = await axiosInstance.get('/psyche/report');
// // // //         if (res.data.message === 'Incomplete analysis—please answer all 25 questions') {
// // // //           navigate('/questions');
// // // //         } else {
// // // //           const normalizedReport = {
// // // //             ...res.data,
// // // //             report: Object.fromEntries(
// // // //               Object.entries(res.data.report).map(([phase, data]) => [
// // // //                 phase,
// // // //                 {
// // // //                   ...data,
// // // //                   score: Math.round((data.score / 50) * 10 * 10) / 10,
// // // //                 },
// // // //               ])
// // // //             ),
// // // //           };
// // // //           setReport(normalizedReport);
// // // //         }
// // // //       } catch (err) {
// // // //         alert('Error: ' + (err.response?.data?.message || 'Failed to load report'));
// // // //         navigate('/questions');
// // // //       }
// // // //     };
// // // //     fetchReport();
// // // //   }, [navigate]);

// // // //   const handleFeedback = async () => {
// // // //     if (!feedback.trim()) {
// // // //       alert('Feedback cannot be empty');
// // // //       return;
// // // //     }
// // // //     try {
// // // //       await axiosInstance.post('/psyche/feedback', { text: feedback });
// // // //       setFeedback('');
// // // //       alert('Feedback submitted!');
// // // //     } catch (err) {
// // // //       alert('Error: ' + (err.response?.data?.message || 'Failed to submit feedback'));
// // // //     }
// // // //   };

// // // //   if (!report) return <div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>;

// // // //   return (
// // // //     <motion.div
// // // //       initial={{ opacity: 0 }}
// // // //       animate={{ opacity: 1 }}
// // // //       transition={{ duration: 0.5 }}
// // // //       style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}
// // // //     >
// // // //       <div style={{ maxWidth: '800px' }}>
// // // //         <h2 style={{ fontSize: '32px', marginBottom: '20px', textAlign: 'center' }}>Your Psyche Report</h2>
// // // //         {Object.entries(report.report).map(([phase, { score, insight }]) => (
// // // //           <motion.div
// // // //             key={phase}
// // // //             initial={{ x: -50, opacity: 0 }}
// // // //             animate={{ x: 0, opacity: 1 }}
// // // //             transition={{ duration: 0.5 }}
// // // //             style={{
// // // //               margin: '20px 0',
// // // //               padding: '20px',
// // // //               background: 'rgba(255, 255, 255, 0.1)',
// // // //               borderRadius: '10px',
// // // //               boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
// // // //             }}
// // // //           >
// // // //             <h3 style={{ fontSize: '24px' }}>
// // // //               {phase.charAt(0).toUpperCase() + phase.slice(1)}: {score}/10
// // // //             </h3>
// // // //             <p style={{ fontSize: '16px', marginTop: '10px' }}>{insight}</p>
// // // //           </motion.div>
// // // //         ))}
// // // //         <motion.div
// // // //           initial={{ opacity: 0 }}
// // // //           animate={{ opacity: 1 }}
// // // //           transition={{ delay: 0.5 }}
// // // //           style={{ marginTop: '30px' }}
// // // //         >
// // // //           <p style={{ fontSize: '18px' }}><strong>Dominant Phase:</strong> {report.dominantPhase}</p>
// // // //           <p style={{ fontSize: '18px' }}><strong>Strengths:</strong> {report.strengths}</p>
// // // //           <p style={{ fontSize: '18px' }}><strong>Weaknesses:</strong> {report.weaknesses}</p>
// // // //           <p style={{ fontSize: '18px' }}><strong>Advice:</strong> {report.advice}</p>
// // // //           <p style={{ fontSize: '18px' }}><strong>Recommendation:</strong> {report.recommendation}</p>
// // // //         </motion.div>
// // // //         <motion.div
// // // //           initial={{ opacity: 0 }}
// // // //           animate={{ opacity: 1 }}
// // // //           transition={{ delay: 0.7 }}
// // // //           style={{ marginTop: '30px' }}
// // // //         >
// // // //           <textarea
// // // //             value={feedback}
// // // //             onChange={(e) => setFeedback(e.target.value)}
// // // //             placeholder="Your feedback..."
// // // //             style={{
// // // //               width: '100%',
// // // //               height: '100px',
// // // //               padding: '10px',
// // // //               background: 'rgba(255, 255, 255, 0.1)',
// // // //               border: '1px solid #fff',
// // // //               borderRadius: '5px',
// // // //               color: '#fff',
// // // //               resize: 'none',
// // // //             }}
// // // //           />
// // // //           <motion.button
// // // //             whileHover={{ scale: 1.05 }}
// // // //             whileTap={{ scale: 0.95 }}
// // // //             onClick={handleFeedback}
// // // //             style={{
// // // //               marginTop: '10px',
// // // //               padding: '10px 20px',
// // // //               background: '#e94560',
// // // //               border: 'none',
// // // //               borderRadius: '50px',
// // // //               color: '#fff',
// // // //               cursor: 'pointer',
// // // //             }}
// // // //           >
// // // //             Submit Feedback
// // // //           </motion.button>
// // // //         </motion.div>
// // // //       </div>
// // // //     </motion.div>
// // // //   );
// // // // }

// // // // export default Report;

// // // import { useState, useEffect } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { motion } from 'framer-motion';
// // // import axiosInstance from '../utils/axiosInstance.js';

// // // function Report() {
// // //   const [report, setReport] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [feedback, setFeedback] = useState('');
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const fetchReport = async () => {
// // //       const token = localStorage.getItem('token');
// // //       if (!token) {
// // //         navigate('/login');
// // //         return;
// // //       }

// // //       try {
// // //         const res = await axiosInstance.get('/psyche/report');
// // //         setReport(res.data);
// // //       } catch (err) {
// // //         if (err.response?.status === 400) {
// // //           alert('Please complete all 25 questions to view your report.');
// // //           navigate('/questions');
// // //         } else {
// // //           navigate('/login');
// // //         }
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     fetchReport();
// // //   }, [navigate]);

// // //   const handleFeedbackSubmit = async (e) => {
// // //     e.preventDefault();
// // //     if (!feedback.trim()) {
// // //       alert('Feedback cannot be empty.');
// // //       return;
// // //     }

// // //     try {
// // //       await axiosInstance.post('/psyche/feedback', { text: feedback });
// // //       alert('Feedback submitted successfully!');
// // //       setFeedback('');
// // //     } catch (err) {
// // //       alert('Error submitting feedback: ' + (err.response?.data?.message || 'Try again later.'));
// // //     }
// // //   };

// // //   if (loading) {
// // //     return <div style={{ width: '100%', textAlign: 'center', padding: '40px' }}>Loading...</div>;
// // //   }

// // //   if (!report) {
// // //     return <div style={{ width: '100%', textAlign: 'center', padding: '40px' }}>No report available.</div>;
// // //   }

// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0 }}
// // //       animate={{ opacity: 1 }}
// // //       transition={{ duration: 0.5 }}
// // //       style={{
// // //         width: '100%',
// // //         maxWidth: '1300px',
// // //         padding: '60px 20px',
// // //         textAlign: 'center',
// // //         background: 'linear-gradient(135deg, #1F4459, #011325)',
// // //       }}
// // //     >
// // //       <h2
// // //         style={{
// // //           fontSize: '42px',
// // //           fontWeight: '700',
// // //           marginBottom: '50px',
// // //           color: '#fff',
// // //           textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
// // //         }}
// // //       >
// // //         Your Psyche Report
// // //       </h2>

// // //       {/* Side-by-Side Cards */}
// // //       <div
// // //         style={{
// // //           display: 'grid',
// // //           gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
// // //           gap: '30px',
// // //           justifyItems: 'center',
// // //           padding: '0 10px',
// // //         }}
// // //       >
// // //         {/* Mentality Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.2 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Mentality
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.report.mentality.score}/10 - {report.report.mentality.insight}
// // //           </p>
// // //         </motion.div>

// // //         {/* Philosophy Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.3 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Philosophy
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.report.philosophy.score}/10 - {report.report.philosophy.insight}
// // //           </p>
// // //         </motion.div>

// // //         {/* Psychology Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.4 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Psychology
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.report.psychology.score}/10 - {report.report.psychology.insight}
// // //           </p>
// // //         </motion.div>

// // //         {/* Fear Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.5 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Fear
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.report.fear.score}/10 - {report.report.fear.insight}
// // //           </p>
// // //         </motion.div>

// // //         {/* Self-Discovery Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.6 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Self-Discovery
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.report['self-discovery'].score}/10 - {report.report['self-discovery'].insight}
// // //           </p>
// // //         </motion.div>

// // //         {/* Test Date Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.7 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Test Date
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.testDate}
// // //           </p>
// // //         </motion.div>

// // //         {/* Dominant Phase Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.8 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Dominant Phase
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.dominantPhase}
// // //           </p>
// // //         </motion.div>

// // //         {/* Strengths Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.9 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Strengths
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.strengths}
// // //           </p>
// // //         </motion.div>

// // //         {/* Weaknesses Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 1.0 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Weaknesses
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.weaknesses}
// // //           </p>
// // //         </motion.div>

// // //         {/* Advice Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 1.1 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Advice
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.advice}
// // //           </p>
// // //         </motion.div>

// // //         {/* Recommendation Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 1.2 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Recommendation
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.recommendation}
// // //           </p>
// // //         </motion.div>
// // //       </div>

// // //       {/* Feedback Section */}
// // //       <motion.div
// // //         initial={{ opacity: 0, y: 50 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ delay: 1.3 }}
// // //         style={{
// // //           marginTop: '60px',
// // //           maxWidth: '600px',
// // //           marginLeft: 'auto',
// // //           marginRight: 'auto',
// // //         }}
// // //       >
// // //         <h3
// // //           style={{
// // //             fontSize: '28px',
// // //             fontWeight: '600',
// // //             color: '#fff',
// // //             marginBottom: '20px',
// // //           }}
// // //         >
// // //           Your Feedback
// // //         </h3>
// // //         <form onSubmit={handleFeedbackSubmit}>
// // //           <textarea
// // //             value={feedback}
// // //             onChange={(e) => setFeedback(e.target.value)}
// // //             placeholder="Share your thoughts..."
// // //             style={{
// // //               width: '100%',
// // //               minHeight: '120px',
// // //               padding: '15px',
// // //               background: 'rgba(255, 255, 255, 0.1)',
// // //               border: '1px solid rgba(255, 255, 255, 0.3)',
// // //               borderRadius: '10px',
// // //               color: '#fff',
// // //               fontSize: '16px',
// // //               resize: 'vertical',
// // //               marginBottom: '20px',
// // //             }}
// // //           />
// // //           <motion.button
// // //             whileHover={{ scale: 1.05 }}
// // //             whileTap={{ scale: 0.95 }}
// // //             type="submit"
// // //             style={{
// // //               padding: '15px 40px',
// // //               background: '#e94560',
// // //               border: 'none',
// // //               borderRadius: '50px',
// // //               color: '#fff',
// // //               cursor: 'pointer',
// // //               fontSize: '18px',
// // //             }}
// // //           >
// // //             Submit Feedback
// // //           </motion.button>
// // //         </form>
// // //       </motion.div>
// // //     </motion.div>
// // //   );
// // // }

// // // export default Report;

// // // import { useState, useEffect } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { motion } from 'framer-motion';
// // // import axiosInstance from '../utils/axiosInstance.js';

// // // function Report() {
// // //   const [report, setReport] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [feedback, setFeedback] = useState('');
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const fetchReport = async () => {
// // //       const token = localStorage.getItem('token');
// // //       if (!token) {
// // //         navigate('/login');
// // //         return;
// // //       }

// // //       try {
// // //         const res = await axiosInstance.get('/psyche/report');
// // //         // Ensure scores are capped at 10
// // //         const normalizedReport = {
// // //           ...res.data,
// // //           report: {
// // //             mentality: {
// // //               score: Math.min(res.data.report.mentality.score, 10),
// // //               insight: res.data.report.mentality.insight,
// // //             },
// // //             philosophy: {
// // //               score: Math.min(res.data.report.philosophy.score, 10),
// // //               insight: res.data.report.philosophy.insight,
// // //             },
// // //             psychology: {
// // //               score: Math.min(res.data.report.psychology.score, 10),
// // //               insight: res.data.report.psychology.insight,
// // //             },
// // //             fear: {
// // //               score: Math.min(res.data.report.fear.score, 10),
// // //               insight: res.data.report.fear.insight,
// // //             },
// // //             'self-discovery': {
// // //               score: Math.min(res.data.report['self-discovery'].score, 10),
// // //               insight: res.data.report['self-discovery'].insight,
// // //             },
// // //           },
// // //         };
// // //         setReport(normalizedReport);
// // //       } catch (err) {
// // //         if (err.response?.status === 400) {
// // //           alert('Please complete all 25 questions to view your report.');
// // //           navigate('/questions');
// // //         } else {
// // //           navigate('/login');
// // //         }
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     fetchReport();
// // //   }, [navigate]);

// // //   const handleFeedbackSubmit = async (e) => {
// // //     e.preventDefault();
// // //     if (!feedback.trim()) {
// // //       alert('Feedback cannot be empty.');
// // //       return;
// // //     }

// // //     try {
// // //       await axiosInstance.post('/psyche/feedback', { text: feedback });
// // //       alert('Feedback submitted successfully!');
// // //       setFeedback('');
// // //     } catch (err) {
// // //       alert('Error submitting feedback: ' + (err.response?.data?.message || 'Try again later.'));
// // //     }
// // //   };

// // //   if (loading) {
// // //     return <div style={{ width: '100%', textAlign: 'center', padding: '40px' }}>Loading...</div>;
// // //   }

// // //   if (!report) {
// // //     return <div style={{ width: '100%', textAlign: 'center', padding: '40px' }}>No report available.</div>;
// // //   }

// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0 }}
// // //       animate={{ opacity: 1 }}
// // //       transition={{ duration: 0.5 }}
// // //       style={{
// // //         width: '100%',
// // //         maxWidth: '1300px',
// // //         padding: '60px 20px',
// // //         textAlign: 'center',
// // //         background: 'linear-gradient(135deg, #1F4459, #011325)',
// // //       }}
// // //     >
// // //       <h2
// // //         style={{
// // //           fontSize: '42px',
// // //           fontWeight: '700',
// // //           marginBottom: '50px',
// // //           color: '#fff',
// // //           textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
// // //         }}
// // //       >
// // //         Your Psyche Report
// // //       </h2>

// // //       {/* Test Date at the Top */}
// // //       <motion.div
// // //         initial={{ opacity: 0, y: 50 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ delay: 0.1 }}
// // //         style={{
// // //           background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //           backdropFilter: 'blur(12px)',
// // //           borderRadius: '18px',
// // //           padding: '25px',
// // //           boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //           border: '1px solid rgba(255, 255, 255, 0.25)',
// // //           textAlign: 'center',
// // //           width: '100%',
// // //           maxWidth: '350px',
// // //           margin: '0 auto 50px auto', // Centered above cards
// // //           transition: 'transform 0.3s ease',
// // //           ':hover': {
// // //             transform: 'scale(1.02)',
// // //           },
// // //         }}
// // //       >
// // //         <h3
// // //           style={{
// // //             fontSize: '22px',
// // //             fontWeight: '600',
// // //             color: '#e94560',
// // //             marginBottom: '15px',
// // //             textTransform: 'uppercase',
// // //             letterSpacing: '1px',
// // //           }}
// // //         >
// // //           Test Date
// // //         </h3>
// // //         <p
// // //           style={{
// // //             fontSize: '18px',
// // //             color: '#e0e0e0',
// // //             lineHeight: '1.6',
// // //             fontFamily: 'Arial, sans-serif',
// // //           }}
// // //         >
// // //           {report.testDate}
// // //         </p>
// // //       </motion.div>

// // //       {/* Side-by-Side Cards */}
// // //       <div
// // //         style={{
// // //           display: 'grid',
// // //           gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
// // //           gap: '30px',
// // //           justifyItems: 'center',
// // //           padding: '0 10px',
// // //         }}
// // //       >
// // //         {/* Mentality Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.2 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Mentality
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.report.mentality.score}/10 - {report.report.mentality.insight}
// // //           </p>
// // //         </motion.div>

// // //         {/* Philosophy Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.3 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Philosophy
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.report.philosophy.score}/10 - {report.report.philosophy.insight}
// // //           </p>
// // //         </motion.div>

// // //         {/* Psychology Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.4 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Psychology
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.report.psychology.score}/10 - {report.report.psychology.insight}
// // //           </p>
// // //         </motion.div>

// // //         {/* Fear Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.5 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Fear
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.report.fear.score}/10 - {report.report.fear.insight}
// // //           </p>
// // //         </motion.div>

// // //         {/* Self-Discovery Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.6 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Self-Discovery
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.report['self-discovery'].score}/10 - {report.report['self-discovery'].insight}
// // //           </p>
// // //         </motion.div>

// // //         {/* Dominant Phase Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.7 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Dominant Phase
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.dominantPhase}
// // //           </p>
// // //         </motion.div>

// // //         {/* Strengths Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.8 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Strengths
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.strengths}
// // //           </p>
// // //         </motion.div>

// // //         {/* Weaknesses Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.9 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Weaknesses
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.weaknesses}
// // //           </p>
// // //         </motion.div>

// // //         {/* Advice Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 1.0 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Advice
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.advice}
// // //           </p>
// // //         </motion.div>

// // //         {/* Recommendation Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 1.1 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Recommendation
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.recommendation}
// // //           </p>
// // //         </motion.div>
// // //       </div>

// // //       {/* Feedback Section */}
// // //       <motion.div
// // //         initial={{ opacity: 0, y: 50 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ delay: 1.2 }}
// // //         style={{
// // //           marginTop: '60px',
// // //           maxWidth: '600px',
// // //           marginLeft: 'auto',
// // //           marginRight: 'auto',
// // //         }}
// // //       >
// // //         <h3
// // //           style={{
// // //             fontSize: '28px',
// // //             fontWeight: '600',
// // //             color: '#fff',
// // //             marginBottom: '20px',
// // //           }}
// // //         >
// // //           Your Feedback
// // //         </h3>
// // //         <form onSubmit={handleFeedbackSubmit}>
// // //           <textarea
// // //             value={feedback}
// // //             onChange={(e) => setFeedback(e.target.value)}
// // //             placeholder="Share your thoughts..."
// // //             style={{
// // //               width: '100%',
// // //               minHeight: '120px',
// // //               padding: '15px',
// // //               background: 'rgba(255, 255, 255, 0.1)',
// // //               border: '1px solid rgba(255, 255, 255, 0.3)',
// // //               borderRadius: '10px',
// // //               color: '#fff',
// // //               fontSize: '16px',
// // //               resize: 'vertical',
// // //               marginBottom: '20px',
// // //             }}

            
// // //           />
// // //           <motion.button
// // //             whileHover={{ scale: 1.05 }}
// // //             whileTap={{ scale: 0.95 }}
// // //             type="submit"
// // //             style={{
// // //               padding: '15px 40px',
// // //               background: '#e94560',
// // //               border: 'none',
// // //               borderRadius: '50px',
// // //               color: '#fff',
// // //               cursor: 'pointer',
// // //               fontSize: '18px',
// // //             }}
// // //           >
// // //             Submit Feedback
// // //           </motion.button>
// // //         </form>
// // //       </motion.div>
// // //     </motion.div>
// // //   );
// // // }





// // // // export default Report;
// // // import { useState, useEffect } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { motion } from 'framer-motion';
// // // import axiosInstance from '../utils/axiosInstance.js';

// // // function Report() {
// // //   const [report, setReport] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [feedback, setFeedback] = useState('');
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const fetchReport = async () => {
// // //       const token = localStorage.getItem('token');
// // //       if (!token) {
// // //         navigate('/login');
// // //         return;
// // //       }

// // //       try {
// // //         const res = await axiosInstance.get('/psyche/report');
// // //         // Ensure scores are capped at 10
// // //         const normalizedReport = {
// // //           ...res.data,
// // //           report: {
// // //             mentality: {
// // //               score: Math.min(res.data.report.mentality.score, 10),
// // //               insight: res.data.report.mentality.insight,
// // //             },
// // //             philosophy: {
// // //               score: Math.min(res.data.report.philosophy.score, 10),
// // //               insight: res.data.report.philosophy.insight,
// // //             },
// // //             psychology: {
// // //               score: Math.min(res.data.report.psychology.score, 10),
// // //               insight: res.data.report.psychology.insight,
// // //             },
// // //             fear: {
// // //               score: Math.min(res.data.report.fear.score, 10),
// // //               insight: res.data.report.fear.insight,
// // //             },
// // //             'self-discovery': {
// // //               score: Math.min(res.data.report['self-discovery'].score, 10),
// // //               insight: res.data.report['self-discovery'].insight,
// // //             },
// // //           },
// // //         };
// // //         setReport(normalizedReport);
// // //       } catch (err) {
// // //         if (err.response?.status === 400) {
// // //           alert('Please complete all 25 questions to view your report.');
// // //           navigate('/questions');
// // //         } else {
// // //           navigate('/login');
// // //         }
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     fetchReport();
// // //   }, [navigate]);

// // //   const handleFeedbackSubmit = async (e) => {
// // //     e.preventDefault();
// // //     if (!feedback.trim()) {
// // //       alert('Feedback cannot be empty.');
// // //       return;
// // //     }

// // //     try {
// // //       await axiosInstance.post('/psyche/feedback', { text: feedback });
// // //       alert('Feedback submitted successfully!');
// // //       setFeedback('');
// // //     } catch (err) {
// // //       alert('Error submitting feedback: ' + (err.response?.data?.message || 'Try again later.'));
// // //     }
// // //   };

// // //   const handleExplorePhilosophers = () => {
// // //     navigate('/philosophers', { state: { dominantPhase: report.dominantPhase } });
// // //   };

// // //   if (loading) {
// // //     return <div style={{ width: '100%', textAlign: 'center', padding: '40px' }}>Loading...</div>;
// // //   }

// // //   if (!report) {
// // //     return <div style={{ width: '100%', textAlign: 'center', padding: '40px' }}>No report available.</div>;
// // //   }

// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0 }}
// // //       animate={{ opacity: 1 }}
// // //       transition={{ duration: 0.5 }}
// // //       style={{
// // //         width: '100%',
// // //         maxWidth: '1300px',
// // //         padding: '60px 20px',
// // //         textAlign: 'center',
// // //         background: 'linear-gradient(135deg, #1F4459, #011325)',
// // //       }}
// // //     >
// // //       <h2
// // //         style={{
// // //           fontSize: '42px',
// // //           fontWeight: '700',
// // //           marginBottom: '50px',
// // //           color: '#fff',
// // //           textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
// // //         }}
// // //       >
// // //         Your Psyche Report
// // //       </h2>

// // //       {/* Test Date at the Top */}
// // //       <motion.div
// // //         initial={{ opacity: 0, y: 50 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ delay: 0.1 }}
// // //         style={{
// // //           background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //           backdropFilter: 'blur(12px)',
// // //           borderRadius: '18px',
// // //           padding: '25px',
// // //           boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //           border: '1px solid rgba(255, 255, 255, 0.25)',
// // //           textAlign: 'center',
// // //           width: '100%',
// // //           maxWidth: '350px',
// // //           margin: '0 auto 50px auto', // Centered above cards
// // //           transition: 'transform 0.3s ease',
// // //           ':hover': {
// // //             transform: 'scale(1.02)',
// // //           },
// // //         }}
// // //       >
// // //         <h3
// // //           style={{
// // //             fontSize: '22px',
// // //             fontWeight: '600',
// // //             color: '#e94560',
// // //             marginBottom: '15px',
// // //             textTransform: 'uppercase',
// // //             letterSpacing: '1px',
// // //           }}
// // //         >
// // //           Test Date
// // //         </h3>
// // //         <p
// // //           style={{
// // //             fontSize: '18px',
// // //             color: '#e0e0e0',
// // //             lineHeight: '1.6',
// // //             fontFamily: 'Arial, sans-serif',
// // //           }}
// // //         >
// // //           {report.testDate}
// // //         </p>
// // //       </motion.div>

// // //       {/* Side-by-Side Cards */}
// // //       <div
// // //         style={{
// // //           display: 'grid',
// // //           gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
// // //           gap: '30px',
// // //           justifyItems: 'center',
// // //           padding: '0 10px',
// // //         }}
// // //       >
// // //         {/* Mentality Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.2 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Mentality
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.report.mentality.score}/10 - {report.report.mentality.insight}
// // //           </p>
// // //         </motion.div>

// // //         {/* Philosophy Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.3 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Philosophy
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.report.philosophy.score}/10 - {report.report.philosophy.insight}
// // //           </p>
// // //         </motion.div>

// // //         {/* Psychology Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.4 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Psychology
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.report.psychology.score}/10 - {report.report.psychology.insight}
// // //           </p>
// // //         </motion.div>

// // //         {/* Fear Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.5 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Fear
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.report.fear.score}/10 - {report.report.fear.insight}
// // //           </p>
// // //         </motion.div>

// // //         {/* Self-Discovery Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.6 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Self-Discovery
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.report['self-discovery'].score}/10 - {report.report['self-discovery'].insight}
// // //           </p>
// // //         </motion.div>

// // //         {/* Dominant Phase Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.7 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Dominant Phase
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.dominantPhase}
// // //           </p>
// // //         </motion.div>

// // //         {/* Strengths Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.8 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Strengths
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.strengths}
// // //           </p>
// // //         </motion.div>

// // //         {/* Weaknesses Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.9 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Weaknesses
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.weaknesses}
// // //           </p>
// // //         </motion.div>

// // //         {/* Advice Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 1.0 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Advice
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.advice}
// // //           </p>
// // //         </motion.div>

// // //         {/* Recommendation Card */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 1.1 }}
// // //           style={{
// // //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// // //             backdropFilter: 'blur(12px)',
// // //             borderRadius: '18px',
// // //             padding: '25px',
// // //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// // //             border: '1px solid rgba(255, 255, 255, 0.25)',
// // //             textAlign: 'left',
// // //             width: '100%',
// // //             maxWidth: '350px',
// // //             transition: 'transform 0.3s ease',
// // //             ':hover': {
// // //               transform: 'scale(1.02)',
// // //             },
// // //           }}
// // //         >
// // //           <h3
// // //             style={{
// // //               fontSize: '22px',
// // //               fontWeight: '600',
// // //               color: '#e94560',
// // //               marginBottom: '15px',
// // //               textTransform: 'uppercase',
// // //               letterSpacing: '1px',
// // //             }}
// // //           >
// // //             Recommendation
// // //           </h3>
// // //           <p
// // //             style={{
// // //               fontSize: '18px',
// // //               color: '#e0e0e0',
// // //               lineHeight: '1.6',
// // //               fontFamily: 'Arial, sans-serif',
// // //             }}
// // //           >
// // //             {report.recommendation}
// // //           </p>
// // //         </motion.div>
// // //       </div>

// // //       {/* Feedback Section */}
// // //       <motion.div
// // //         initial={{ opacity: 0, y: 50 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ delay: 1.2 }}
// // //         style={{
// // //           marginTop: '60px',
// // //           maxWidth: '600px',
// // //           marginLeft: 'auto',
// // //           marginRight: 'auto',
// // //         }}
// // //       >
// // //         <h3
// // //           style={{
// // //             fontSize: '28px',
// // //             fontWeight: '600',
// // //             color: '#fff',
// // //             marginBottom: '20px',
// // //           }}
// // //         >
// // //           Your Feedback
// // //         </h3>
// // //         <form onSubmit={handleFeedbackSubmit}>
// // //           <textarea
// // //             value={feedback}
// // //             onChange={(e) => setFeedback(e.target.value)}
// // //             placeholder="Share your thoughts..."
// // //             style={{
// // //               width: '100%',
// // //               minHeight: '120px',
// // //               padding: '15px',
// // //               background: 'rgba(255, 255, 255, 0.1)',
// // //               border: '1px solid rgba(255, 255, 255, 0.3)',
// // //               borderRadius: '10px',
// // //               color: '#fff',
// // //               fontSize: '16px',
// // //               resize: 'vertical',
// // //               marginBottom: '20px',
// // //             }}
// // //           />
// // //           <motion.button
// // //             whileHover={{ scale: 1.05 }}
// // //             whileTap={{ scale: 0.95 }}
// // //             type="submit"
// // //             style={{
// // //               padding: '15px 40px',
// // //               background: '#e94560',
// // //               border: 'none',
// // //               borderRadius: '50px',
// // //               color: '#fff',
// // //               cursor: 'pointer',
// // //               fontSize: '18px',
// // //             }}
// // //           >
// // //             Submit Feedback
// // //           </motion.button>
// // //         </form>
// // //         <motion.button
// // //           whileHover={{ scale: 1.05 }}
// // //           whileTap={{ scale: 0.95 }}
// // //           onClick={handleExplorePhilosophers}
// // //           style={{
// // //             marginTop: '20px',
// // //             padding: '15px 40px',
// // //             background: 'linear-gradient(135deg, #e94560, #ff6f91)',
// // //             border: 'none',
// // //             borderRadius: '50px',
// // //             color: '#fff',
// // //             cursor: 'pointer',
// // //             fontSize: '18px',
// // //             boxShadow: '0 4px 15px rgba(233, 69, 96, 0.4)',
// // //           }}
// // //         >
// // //           Explore Philosophers
// // //         </motion.button>
// // //       </motion.div>
// // //     </motion.div>
// // //   );
// // // }

// // // export default Report;

// // import { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import axiosInstance from '../utils/axiosInstance.js';
// // import jsPDF from 'jspdf';
// // import html2canvas from 'html2canvas';

// // function Report() {
// //   const [report, setReport] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [feedback, setFeedback] = useState('');
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchReport = async () => {
// //       const token = localStorage.getItem('token');
// //       if (!token) {
// //         navigate('/login');
// //         return;
// //       }

// //       try {
// //         const res = await axiosInstance.get('/psyche/report');
// //         // Ensure scores are capped at 10
// //         const normalizedReport = {
// //           ...res.data,
// //           report: {
// //             mentality: {
// //               score: Math.min(res.data.report.mentality.score, 10),
// //               insight: res.data.report.mentality.insight,
// //             },
// //             philosophy: {
// //               score: Math.min(res.data.report.philosophy.score, 10),
// //               insight: res.data.report.philosophy.insight,
// //             },
// //             psychology: {
// //               score: Math.min(res.data.report.psychology.score, 10),
// //               insight: res.data.report.psychology.insight,
// //             },
// //             fear: {
// //               score: Math.min(res.data.report.fear.score, 10),
// //               insight: res.data.report.fear.insight,
// //             },
// //             'self-discovery': {
// //               score: Math.min(res.data.report['self-discovery'].score, 10),
// //               insight: res.data.report['self-discovery'].insight,
// //             },
// //           },
// //         };
// //         setReport(normalizedReport);
// //       } catch (err) {
// //         if (err.response?.status === 400) {
// //           alert('Please complete all 25 questions to view your report.');
// //           navigate('/questions');
// //         } else {
// //           navigate('/login');
// //         }
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchReport();
// //   }, [navigate]);

// //   const handleFeedbackSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!feedback.trim()) {
// //       alert('Feedback cannot be empty.');
// //       return;
// //     }

// //     try {
// //       await axiosInstance.post('/psyche/feedback', { text: feedback });
// //       alert('Feedback submitted successfully!');
// //       setFeedback('');
// //     } catch (err) {
// //       alert('Error submitting feedback: ' + (err.response?.data?.message || 'Try again later.'));
// //     }
// //   };

// //   const handleExplorePhilosophers = () => {
// //     navigate('/philosophers', { state: { dominantPhase: report.dominantPhase } });
// //   };

// //   const generatePDF = async () => {
// //     const doc = new jsPDF({
// //       orientation: 'portrait',
// //       unit: 'mm',
// //       format: 'a4',
// //     });

// //     // Add premium header
// //     doc.setFillColor(31, 68, 89); // #1F4459
// //     doc.rect(0, 0, 210, 30, 'F'); // Full width header
// //     doc.setTextColor(255, 255, 255); // White text
// //     doc.setFontSize(24);
// //     doc.text('Psyche Report', 105, 20, { align: 'center' });

// //     // Add user info
// //     doc.setFontSize(16);
// //     doc.setTextColor(0, 0, 0); // Black text
// //     doc.text(`Your Psyche Profile - Generated on ${new Date().toLocaleDateString()}`, 105, 40, { align: 'center' });

// //     // Add category scores
// //     doc.setFontSize(12);
// //     const tableY = 50;
// //     doc.text('Category Scores', 105, tableY - 5, { align: 'center' });
// //     doc.setDrawColor(233, 69, 96); // #e94560 border
// //     doc.rect(20, tableY, 170, 120); // Table boundary (increased height for more content)
// //     const categories = ['Mentality', 'Philosophy', 'Psychology', 'Fear', 'Self-Discovery'];
// //     categories.forEach((cat, index) => {
// //       const score = report.report[cat.toLowerCase()]?.score || 0;
// //       const insight = report.report[cat.toLowerCase()]?.insight || 'No insight available';
// //       doc.text(cat, 30, tableY + 10 + (index * 15));
// //       doc.text(`${score}/10`, 100, tableY + 10 + (index * 15));
// //       if (index === 0) doc.text('Insight:', 120, tableY + 10);
// //       doc.text(insight.substring(0, 40) + (insight.length > 40 ? '...' : ''), 120, tableY + 10 + (index * 15)); // Shorter insight
// //     });

// //     // Add dominant phase
// //     doc.setFontSize(14);
// //     doc.text(`Dominant Phase: ${report.dominantPhase}`, 105, 150, { align: 'center' });
// //     doc.setFontSize(12);
// //     doc.text(report.report[report.dominantPhase]?.insight || 'No dominant insight', 105, 160, { align: 'center' });

// //     // Add additional fields (test date, strengths, weaknesses, advice, recommendation)
// //     const additionalY = 170;
// //     doc.text('Additional Insights', 105, additionalY - 5, { align: 'center' });
// //     doc.text(`Test Date: ${report.testDate || 'N/A'}`, 105, additionalY + 10, { align: 'center' });
// //     doc.text(`Strengths: ${report.strengths || 'N/A'}`, 105, additionalY + 25, { align: 'center' });
// //     doc.text(`Weaknesses: ${report.weaknesses || 'N/A'}`, 105, additionalY + 40, { align: 'center' });
// //     doc.text(`Advice: ${report.advice || 'N/A'}`, 105, additionalY + 55, { align: 'center' });
// //     doc.text(`Recommendation: ${report.recommendation || 'N/A'}`, 105, additionalY + 70, { align: 'center' });

// //     // Add footer
// //     doc.setFillColor(0, 19, 37); // #011325
// //     doc.rect(0, 270, 210, 30, 'F'); // Footer
// //     doc.setTextColor(255, 255, 255);
// //     doc.setFontSize(10);
// //     doc.text('Powered by The Psyche', 105, 285, { align: 'center' });

// //     // Save the PDF
// //     doc.save(`Psyche_Report_${new Date().toLocaleDateString().replace(/\//g, '-')}.pdf`);
// //   };

// //   if (loading) {
// //     return <div style={{ width: '100%', textAlign: 'center', padding: '40px' }}>Loading...</div>;
// //   }

// //   if (!report) {
// //     return <div style={{ width: '100%', textAlign: 'center', padding: '40px' }}>No report available.</div>;
// //   }

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ duration: 0.5 }}
// //       style={{
// //         width: '100%',
// //         maxWidth: '1300px',
// //         padding: '60px 20px',
// //         textAlign: 'center',
// //         // background: 'linear-gradient(135deg, #1F4459, #011325)',
// //       }}
// //     >
// //       <h2
// //         style={{
// //           fontSize: '42px',
// //           fontWeight: '700',
// //           marginBottom: '50px',
// //           color: '#fff',
// //           textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
// //         }}
// //       >
// //         Your Psyche Report
// //       </h2>

// //       {/* Test Date at the Top */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 50 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.1 }}
// //         style={{
// //           background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// //           backdropFilter: 'blur(12px)',
// //           borderRadius: '18px',
// //           padding: '25px',
// //           boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// //           border: '1px solid rgba(255, 255, 255, 0.25)',
// //           textAlign: 'center',
// //           width: '100%',
// //           maxWidth: '350px',
// //           margin: '0 auto 50px auto', // Centered above cards
// //           transition: 'transform 0.3s ease',
// //           ':hover': {
// //             transform: 'scale(1.02)',
// //           },
// //         }}
// //       >
// //         <h3
// //           style={{
// //             fontSize: '22px',
// //             fontWeight: '600',
// //             color: '#e94560',
// //             marginBottom: '15px',
// //             textTransform: 'uppercase',
// //             letterSpacing: '1px',
// //           }}
// //         >
// //           Test Date
// //         </h3>
// //         <p
// //           style={{
// //             fontSize: '18px',
// //             color: '#e0e0e0',
// //             lineHeight: '1.6',
// //             fontFamily: 'Arial, sans-serif',
// //           }}
// //         >
// //           {report.testDate}
// //         </p>
// //       </motion.div>

// //       {/* Side-by-Side Cards */}
// //       <div
// //         style={{
// //           display: 'grid',
// //           gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
// //           gap: '30px',
// //           justifyItems: 'center',
// //           padding: '0 10px',
// //         }}
// //       >
// //         {/* Mentality Card */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.2 }}
// //           style={{
// //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// //             backdropFilter: 'blur(12px)',
// //             borderRadius: '18px',
// //             padding: '25px',
// //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// //             border: '1px solid rgba(255, 255, 255, 0.25)',
// //             textAlign: 'left',
// //             width: '100%',
// //             maxWidth: '350px',
// //             transition: 'transform 0.3s ease',
// //             ':hover': {
// //               transform: 'scale(1.02)',
// //             },
// //           }}
// //         >
// //           <h3
// //             style={{
// //               fontSize: '22px',
// //               fontWeight: '600',
// //               color: '#e94560',
// //               marginBottom: '15px',
// //               textTransform: 'uppercase',
// //               letterSpacing: '1px',
// //             }}
// //           >
// //             Mentality
// //           </h3>
// //           <p
// //             style={{
// //               fontSize: '18px',
// //               color: '#e0e0e0',
// //               lineHeight: '1.6',
// //               fontFamily: 'Arial, sans-serif',
// //             }}
// //           >
// //             {report.report.mentality.score}/10 - {report.report.mentality.insight}
// //           </p>
// //         </motion.div>

// //         {/* Philosophy Card */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.3 }}
// //           style={{
// //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// //             backdropFilter: 'blur(12px)',
// //             borderRadius: '18px',
// //             padding: '25px',
// //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// //             border: '1px solid rgba(255, 255, 255, 0.25)',
// //             textAlign: 'left',
// //             width: '100%',
// //             maxWidth: '350px',
// //             transition: 'transform 0.3s ease',
// //             ':hover': {
// //               transform: 'scale(1.02)',
// //             },
// //           }}
// //         >
// //           <h3
// //             style={{
// //               fontSize: '22px',
// //               fontWeight: '600',
// //               color: '#e94560',
// //               marginBottom: '15px',
// //               textTransform: 'uppercase',
// //               letterSpacing: '1px',
// //             }}
// //           >
// //             Philosophy
// //           </h3>
// //           <p
// //             style={{
// //               fontSize: '18px',
// //               color: '#e0e0e0',
// //               lineHeight: '1.6',
// //               fontFamily: 'Arial, sans-serif',
// //             }}
// //           >
// //             {report.report.philosophy.score}/10 - {report.report.philosophy.insight}
// //           </p>
// //         </motion.div>

// //         {/* Psychology Card */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.4 }}
// //           style={{
// //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// //             backdropFilter: 'blur(12px)',
// //             borderRadius: '18px',
// //             padding: '25px',
// //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// //             border: '1px solid rgba(255, 255, 255, 0.25)',
// //             textAlign: 'left',
// //             width: '100%',
// //             maxWidth: '350px',
// //             transition: 'transform 0.3s ease',
// //             ':hover': {
// //               transform: 'scale(1.02)',
// //             },
// //           }}
// //         >
// //           <h3
// //             style={{
// //               fontSize: '22px',
// //               fontWeight: '600',
// //               color: '#e94560',
// //               marginBottom: '15px',
// //               textTransform: 'uppercase',
// //               letterSpacing: '1px',
// //             }}
// //           >
// //             Psychology
// //           </h3>
// //           <p
// //             style={{
// //               fontSize: '18px',
// //               color: '#e0e0e0',
// //               lineHeight: '1.6',
// //               fontFamily: 'Arial, sans-serif',
// //             }}
// //           >
// //             {report.report.psychology.score}/10 - {report.report.psychology.insight}
// //           </p>
// //         </motion.div>

// //         {/* Fear Card */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.5 }}
// //           style={{
// //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// //             backdropFilter: 'blur(12px)',
// //             borderRadius: '18px',
// //             padding: '25px',
// //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// //             border: '1px solid rgba(255, 255, 255, 0.25)',
// //             textAlign: 'left',
// //             width: '100%',
// //             maxWidth: '350px',
// //             transition: 'transform 0.3s ease',
// //             ':hover': {
// //               transform: 'scale(1.02)',
// //             },
// //           }}
// //         >
// //           <h3
// //             style={{
// //               fontSize: '22px',
// //               fontWeight: '600',
// //               color: '#e94560',
// //               marginBottom: '15px',
// //               textTransform: 'uppercase',
// //               letterSpacing: '1px',
// //             }}
// //           >
// //             Fear
// //           </h3>
// //           <p
// //             style={{
// //               fontSize: '18px',
// //               color: '#e0e0e0',
// //               lineHeight: '1.6',
// //               fontFamily: 'Arial, sans-serif',
// //             }}
// //           >
// //             {report.report.fear.score}/10 - {report.report.fear.insight}
// //           </p>
// //         </motion.div>

// //         {/* Self-Discovery Card */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.6 }}
// //           style={{
// //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// //             backdropFilter: 'blur(12px)',
// //             borderRadius: '18px',
// //             padding: '25px',
// //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// //             border: '1px solid rgba(255, 255, 255, 0.25)',
// //             textAlign: 'left',
// //             width: '100%',
// //             maxWidth: '350px',
// //             transition: 'transform 0.3s ease',
// //             ':hover': {
// //               transform: 'scale(1.02)',
// //             },
// //           }}
// //         >
// //           <h3
// //             style={{
// //               fontSize: '22px',
// //               fontWeight: '600',
// //               color: '#e94560',
// //               marginBottom: '15px',
// //               textTransform: 'uppercase',
// //               letterSpacing: '1px',
// //             }}
// //           >
// //             Self-Discovery
// //           </h3>
// //           <p
// //             style={{
// //               fontSize: '18px',
// //               color: '#e0e0e0',
// //               lineHeight: '1.6',
// //               fontFamily: 'Arial, sans-serif',
// //             }}
// //           >
// //             {report.report['self-discovery'].score}/10 - {report.report['self-discovery'].insight}
// //           </p>
// //         </motion.div>

// //         {/* Dominant Phase Card */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.7 }}
// //           style={{
// //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// //             backdropFilter: 'blur(12px)',
// //             borderRadius: '18px',
// //             padding: '25px',
// //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// //             border: '1px solid rgba(255, 255, 255, 0.25)',
// //             textAlign: 'left',
// //             width: '100%',
// //             maxWidth: '350px',
// //             transition: 'transform 0.3s ease',
// //             ':hover': {
// //               transform: 'scale(1.02)',
// //             },
// //           }}
// //         >
// //           <h3
// //             style={{
// //               fontSize: '22px',
// //               fontWeight: '600',
// //               color: '#e94560',
// //               marginBottom: '15px',
// //               textTransform: 'uppercase',
// //               letterSpacing: '1px',
// //             }}
// //           >
// //             Dominant Phase
// //           </h3>
// //           <p
// //             style={{
// //               fontSize: '18px',
// //               color: '#e0e0e0',
// //               lineHeight: '1.6',
// //               fontFamily: 'Arial, sans-serif',
// //             }}
// //           >
// //             {report.dominantPhase}
// //           </p>
// //         </motion.div>

// //         {/* Strengths Card */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.8 }}
// //           style={{
// //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// //             backdropFilter: 'blur(12px)',
// //             borderRadius: '18px',
// //             padding: '25px',
// //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// //             border: '1px solid rgba(255, 255, 255, 0.25)',
// //             textAlign: 'left',
// //             width: '100%',
// //             maxWidth: '350px',
// //             transition: 'transform 0.3s ease',
// //             ':hover': {
// //               transform: 'scale(1.02)',
// //             },
// //           }}
// //         >
// //           <h3
// //             style={{
// //               fontSize: '22px',
// //               fontWeight: '600',
// //               color: '#e94560',
// //               marginBottom: '15px',
// //               textTransform: 'uppercase',
// //               letterSpacing: '1px',
// //             }}
// //           >
// //             Strengths
// //           </h3>
// //           <p
// //             style={{
// //               fontSize: '18px',
// //               color: '#e0e0e0',
// //               lineHeight: '1.6',
// //               fontFamily: 'Arial, sans-serif',
// //             }}
// //           >
// //             {report.strengths}
// //           </p>
// //         </motion.div>

// //         {/* Weaknesses Card */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.9 }}
// //           style={{
// //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// //             backdropFilter: 'blur(12px)',
// //             borderRadius: '18px',
// //             padding: '25px',
// //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// //             border: '1px solid rgba(255, 255, 255, 0.25)',
// //             textAlign: 'left',
// //             width: '100%',
// //             maxWidth: '350px',
// //             transition: 'transform 0.3s ease',
// //             ':hover': {
// //               transform: 'scale(1.02)',
// //             },
// //           }}
// //         >
// //           <h3
// //             style={{
// //               fontSize: '22px',
// //               fontWeight: '600',
// //               color: '#e94560',
// //               marginBottom: '15px',
// //               textTransform: 'uppercase',
// //               letterSpacing: '1px',
// //             }}
// //           >
// //             Weaknesses
// //           </h3>
// //           <p
// //             style={{
// //               fontSize: '18px',
// //               color: '#e0e0e0',
// //               lineHeight: '1.6',
// //               fontFamily: 'Arial, sans-serif',
// //             }}
// //           >
// //             {report.weaknesses}
// //           </p>
// //         </motion.div>

// //         {/* Advice Card */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 1.0 }}
// //           style={{
// //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// //             backdropFilter: 'blur(12px)',
// //             borderRadius: '18px',
// //             padding: '25px',
// //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// //             border: '1px solid rgba(255, 255, 255, 0.25)',
// //             textAlign: 'left',
// //             width: '100%',
// //             maxWidth: '350px',
// //             transition: 'transform 0.3s ease',
// //             ':hover': {
// //               transform: 'scale(1.02)',
// //             },
// //           }}
// //         >
// //           <h3
// //             style={{
// //               fontSize: '22px',
// //               fontWeight: '600',
// //               color: '#e94560',
// //               marginBottom: '15px',
// //               textTransform: 'uppercase',
// //               letterSpacing: '1px',
// //             }}
// //           >
// //             Advice
// //           </h3>
// //           <p
// //             style={{
// //               fontSize: '18px',
// //               color: '#e0e0e0',
// //               lineHeight: '1.6',
// //               fontFamily: 'Arial, sans-serif',
// //             }}
// //           >
// //             {report.advice}
// //           </p>
// //         </motion.div>

// //         {/* Recommendation Card */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 1.1 }}
// //           style={{
// //             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
// //             backdropFilter: 'blur(12px)',
// //             borderRadius: '18px',
// //             padding: '25px',
// //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// //             border: '1px solid rgba(255, 255, 255, 0.25)',
// //             textAlign: 'left',
// //             width: '100%',
// //             maxWidth: '350px',
// //             transition: 'transform 0.3s ease',
// //             ':hover': {
// //               transform: 'scale(1.02)',
// //             },
// //           }}
// //         >
// //           <h3
// //             style={{
// //               fontSize: '22px',
// //               fontWeight: '600',
// //               color: '#e94560',
// //               marginBottom: '15px',
// //               textTransform: 'uppercase',
// //               letterSpacing: '1px',
// //             }}
// //           >
// //             Recommendation
// //           </h3>
// //           <p
// //             style={{
// //               fontSize: '18px',
// //               color: '#e0e0e0',
// //               lineHeight: '1.6',
// //               fontFamily: 'Arial, sans-serif',
// //             }}
// //           >
// //             {report.recommendation}
// //           </p>
// //         </motion.div>
// //       </div>

// //       {/* Feedback Section */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 50 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 1.2 }}
// //         style={{
// //           marginTop: '60px',
// //           maxWidth: '600px',
// //           marginLeft: 'auto',
// //           marginRight: 'auto',
// //         }}
// //       >
// //         <h3
// //           style={{
// //             fontSize: '28px',
// //             fontWeight: '600',
// //             color: '#fff',
// //             marginBottom: '20px',
// //           }}
// //         >
// //           Your Feedback
// //         </h3>
// //         <form onSubmit={handleFeedbackSubmit}>
// //           <textarea
// //             value={feedback}
// //             onChange={(e) => setFeedback(e.target.value)}
// //             placeholder="Share your thoughts..."
// //             style={{
// //               width: '100%',
// //               minHeight: '120px',
// //               padding: '15px',
// //               background: 'rgba(255, 255, 255, 0.1)',
// //               border: '1px solid rgba(255, 255, 255, 0.3)',
// //               borderRadius: '10px',
// //               color: '#fff',
// //               fontSize: '16px',
// //               resize: 'vertical',
// //               marginBottom: '20px',
// //             }}
// //           />
// //           <motion.button
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             type="submit"
// //             style={{
// //               padding: '15px 40px',
// //               background: '#e94560',
// //               border: 'none',
// //               borderRadius: '50px',
// //               color: '#fff',
// //               cursor: 'pointer',
// //               fontSize: '18px',
// //             }}
// //           >
// //             Submit Feedback
// //           </motion.button>
// //         </form>
// //         <motion.button
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //           onClick={handleExplorePhilosophers}
// //           style={{
// //             marginTop: '20px',
// //             padding: '15px 40px',
// //             background: 'linear-gradient(135deg, #e94560, #ff6f91)',
// //             border: 'none',
// //             borderRadius: '50px',
// //             color: '#fff',
// //             cursor: 'pointer',
// //             fontSize: '18px',
// //             boxShadow: '0 4px 15px rgba(233, 69, 96, 0.4)',
// //           }}
// //         >
// //           Explore Philosophers
// //         </motion.button>
// //         <motion.button
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //           onClick={generatePDF}
// //           disabled={!report}
// //           style={{
// //             marginTop: '20px',
// //             padding: '15px 40px',
// //             background: !report ? '#ccc' : 'linear-gradient(135deg, #e94560, #ff6f91)',
// //             border: 'none',
// //             borderRadius: '50px',
// //             paddingRight: '20px',
// //             color: '#fff',
// //             cursor: !report ? 'not-allowed' : 'pointer',
// //             fontSize: '18px',
// //             boxShadow: !report ? 'none' : '0 4px 15px rgba(233, 69, 96, 0.4)',
// //             opacity: !report ? 0.6 : 1,
// //           }}
// //         >
// //           Download PDF Report
// //         </motion.button>
// //       </motion.div>
// //     </motion.div>
// //   );
// // }

// // export default Report;

// import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import axiosInstance from '../utils/axiosInstance.js';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import { FaDownload } from 'react-icons/fa'; // For the download icon

// function Report() {
//   const [report, setReport] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [feedback, setFeedback] = useState('');
//   const navigate = useNavigate();
//   const cardRef = useRef(null); // Ref for capturing the card

//   useEffect(() => {
//     const fetchReport = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         navigate('/login');
//         return;
//       }

//       try {
//         const res = await axiosInstance.get('/psyche/report');
//         // Ensure scores are capped at 10
//         const normalizedReport = {
//           ...res.data,
//           report: {
//             mentality: {
//               score: Math.min(res.data.report.mentality.score, 10),
//               insight: res.data.report.mentality.insight,
//             },
//             philosophy: {
//               score: Math.min(res.data.report.philosophy.score, 10),
//               insight: res.data.report.philosophy.insight,
//             },
//             psychology: {
//               score: Math.min(res.data.report.psychology.score, 10),
//               insight: res.data.report.psychology.insight,
//             },
//             fear: {
//               score: Math.min(res.data.report.fear.score, 10),
//               insight: res.data.report.fear.insight,
//             },
//             'self-discovery': {
//               score: Math.min(res.data.report['self-discovery'].score, 10),
//               insight: res.data.report['self-discovery'].insight,
//             },
//           },
//         };
//         setReport(normalizedReport);
//       } catch (err) {
//         if (err.response?.status === 400) {
//           alert('Please complete all 25 questions to view your report.');
//           navigate('/questions');
//         } else {
//           navigate('/login');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchReport();
//   }, [navigate]);

//   const handleFeedbackSubmit = async (e) => {
//     e.preventDefault();
//     if (!feedback.trim()) {
//       alert('Feedback cannot be empty.');
//       return;
//     }

//     try {
//       await axiosInstance.post('/psyche/feedback', { text: feedback });
//       alert('Feedback submitted successfully!');
//       setFeedback('');
//     } catch (err) {
//       alert('Error submitting feedback: ' + (err.response?.data?.message || 'Try again later.'));
//     }
//   };

//   const handleExplorePhilosophers = () => {
//     navigate('/philosophers', { state: { dominantPhase: report.dominantPhase } });
//   };

//   const generatePDF = async () => {
//     const doc = new jsPDF({
//       orientation: 'portrait',
//       unit: 'mm',
//       format: 'a4',
//     });

//     // Add premium header
//     doc.setFillColor(31, 68, 89); // #1F4459
//     doc.rect(0, 0, 210, 30, 'F'); // Full width header
//     doc.setTextColor(255, 255, 255); // White text
//     doc.setFontSize(24);
//     doc.text('Psyche Report', 105, 20, { align: 'center' });

//     // Add user info
//     doc.setFontSize(16);
//     doc.setTextColor(0, 0, 0); // Black text
//     doc.text(`Your Psyche Profile - Generated on ${new Date().toLocaleDateString()}`, 105, 40, { align: 'center' });

//     // Add category scores
//     doc.setFontSize(12);
//     const tableY = 50;
//     doc.text('Category Scores', 105, tableY - 5, { align: 'center' });
//     doc.setDrawColor(233, 69, 96); // #e94560 border
//     doc.rect(20, tableY, 170, 120); // Table boundary (increased height for more content)
//     const categories = ['Mentality', 'Philosophy', 'Psychology', 'Fear', 'Self-Discovery'];
//     categories.forEach((cat, index) => {
//       const score = report.report[cat.toLowerCase()]?.score || 0;
//       const insight = report.report[cat.toLowerCase()]?.insight || 'No insight available';
//       doc.text(cat, 30, tableY + 10 + (index * 15));
//       doc.text(`${score}/10`, 100, tableY + 10 + (index * 15));
//       if (index === 0) doc.text('Insight:', 120, tableY + 10);
//       doc.text(insight.substring(0, 40) + (insight.length > 40 ? '...' : ''), 120, tableY + 10 + (index * 15)); // Shorter insight
//     });

//     // Add dominant phase
//     doc.setFontSize(14);
//     doc.text(`Dominant Phase: ${report.dominantPhase}`, 105, 150, { align: 'center' });
//     doc.setFontSize(12);
//     doc.text(report.report[report.dominantPhase]?.insight || 'No dominant insight', 105, 160, { align: 'center' });

//     // Add additional fields (test date, strengths, weaknesses, advice, recommendation)
//     const additionalY = 170;
//     doc.text('Additional Insights', 105, additionalY - 5, { align: 'center' });
//     doc.text(`Test Date: ${report.testDate || 'N/A'}`, 105, additionalY + 10, { align: 'center' });
//     doc.text(`Strengths: ${report.strengths || 'N/A'}`, 105, additionalY + 25, { align: 'center' });
//     doc.text(`Weaknesses: ${report.weaknesses || 'N/A'}`, 105, additionalY + 40, { align: 'center' });
//     doc.text(`Advice: ${report.advice || 'N/A'}`, 105, additionalY + 55, { align: 'center' });
//     doc.text(`Recommendation: ${report.recommendation || 'N/A'}`, 105, additionalY + 70, { align: 'center' });

//     // Add footer
//     doc.setFillColor(0, 19, 37); // #011325
//     doc.rect(0, 270, 210, 30, 'F'); // Footer
//     doc.setTextColor(255, 255, 255);
//     doc.setFontSize(10);
//     doc.text('Powered by The Psyche', 105, 285, { align: 'center' });

//     // Save the PDF
//     doc.save(`Psyche_Report_${new Date().toLocaleDateString().replace(/\//g, '-')}.pdf`);
//   };

//   // Function to download the Psyche Personality Card
//   const handleDownloadCard = async () => {
//     const element = cardRef.current;
//     const canvas = await html2canvas(element);
//     const image = canvas.toDataURL('image/png');

//     // Create a temporary link to download the image
//     const link = document.createElement('a');
//     link.href = image;
//     link.download = 'psyche-personality-card.png';
//     link.click();

//     // Optionally, open a share dialog (browser-dependent)
//     if (navigator.share) {
//       navigator.share({
//         title: 'My Psyche Personality Card',
//         text: `I’m a Certified Psyche Achiever! Discover your Psyche at The Psyche.`,
//         url: window.location.origin,
//       });
//     } else {
//       alert('Download your card and share it on your favorite platform!');
//     }
//   };

//   if (loading) {
//     return <div style={{ width: '100%', textAlign: 'center', padding: '40px' }}>Loading...</div>;
//   }

//   if (!report) {
//     return <div style={{ width: '100%', textAlign: 'center', padding: '40px' }}>No report available.</div>;
//   }

//   // Determine dominant phase and personality title
//   const personalityTitles = {
//     mentality: 'Strategic Mastermind',
//     philosophy: 'Philosophical Thinker',
//     psychology: 'Empathetic Explorer',
//     fear: 'Fearless Trailblazer',
//     'self-discovery': 'Soulful Seeker',
//   };
//   const dominantPhase = report.dominantPhase;
//   const personalityTitle = personalityTitles[dominantPhase] || 'Balanced Soul';

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       style={{
//         width: '100%',
//         maxWidth: '1300px',
//         padding: '60px 20px',
//         textAlign: 'center',
//       }}
//     >
//       <h2
//         style={{
//           fontSize: '42px',
//           fontWeight: '700',
//           marginBottom: '50px',
//           color: '#fff',
//           textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
//         }}
//       >
//         Your Psyche Report
//       </h2>

//       {/* Test Date at the Top */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.1 }}
//         style={{
//           background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
//           backdropFilter: 'blur(12px)',
//           borderRadius: '18px',
//           padding: '25px',
//           boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
//           border: '1px solid rgba(255, 255, 255, 0.25)',
//           textAlign: 'center',
//           width: '100%',
//           maxWidth: '350px',
//           margin: '0 auto 50px auto',
//           transition: 'transform 0.3s ease',
//           ':hover': {
//             transform: 'scale(1.02)',
//           },
//         }}
//       >
//         <h3
//           style={{
//             fontSize: '22px',
//             fontWeight: '600',
//             color: '#e94560',
//             marginBottom: '15px',
//             textTransform: 'uppercase',
//             letterSpacing: '1px',
//           }}
//         >
//           Test Date
//         </h3>
//         <p
//           style={{
//             fontSize: '18px',
//             color: '#e0e0e0',
//             lineHeight: '1.6',
//             fontFamily: 'Arial, sans-serif',
//           }}
//         >
//           {report.testDate}
//         </p>
//       </motion.div>

//       {/* Side-by-Side Cards */}
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
//           gap: '30px',
//           justifyItems: 'center',
//           padding: '0 10px',
//         }}
//       >
//         {/* Mentality Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           style={{
//             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
//             backdropFilter: 'blur(12px)',
//             borderRadius: '18px',
//             padding: '25px',
//             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
//             border: '1px solid rgba(255, 255, 255, 0.25)',
//             textAlign: 'left',
//             width: '100%',
//             maxWidth: '350px',
//             transition: 'transform 0.3s ease',
//             ':hover': {
//               transform: 'scale(1.02)',
//             },
//           }}
//         >
//           <h3
//             style={{
//               fontSize: '22px',
//               fontWeight: '600',
//               color: '#e94560',
//               marginBottom: '15px',
//               textTransform: 'uppercase',
//               letterSpacing: '1px',
//             }}
//           >
//             Mentality
//           </h3>
//           <p
//             style={{
//               fontSize: '18px',
//               color: '#e0e0e0',
//               lineHeight: '1.6',
//               fontFamily: 'Arial, sans-serif',
//             }}
//           >
//             {report.report.mentality.score}/10 - {report.report.mentality.insight}
//           </p>
//         </motion.div>

//         {/* Philosophy Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           style={{
//             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
//             backdropFilter: 'blur(12px)',
//             borderRadius: '18px',
//             padding: '25px',
//             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
//             border: '1px solid rgba(255, 255, 255, 0.25)',
//             textAlign: 'left',
//             width: '100%',
//             maxWidth: '350px',
//             transition: 'transform 0.3s ease',
//             ':hover': {
//               transform: 'scale(1.02)',
//             },
//           }}
//         >
//           <h3
//             style={{
//               fontSize: '22px',
//               fontWeight: '600',
//               color: '#e94560',
//               marginBottom: '15px',
//               textTransform: 'uppercase',
//               letterSpacing: '1px',
//             }}
//           >
//             Philosophy
//           </h3>
//           <p
//             style={{
//               fontSize: '18px',
//               color: '#e0e0e0',
//               lineHeight: '1.6',
//               fontFamily: 'Arial, sans-serif',
//             }}
//           >
//             {report.report.philosophy.score}/10 - {report.report.philosophy.insight}
//           </p>
//         </motion.div>

//         {/* Psychology Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           style={{
//             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
//             backdropFilter: 'blur(12px)',
//             borderRadius: '18px',
//             padding: '25px',
//             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
//             border: '1px solid rgba(255, 255, 255, 0.25)',
//             textAlign: 'left',
//             width: '100%',
//             maxWidth: '350px',
//             transition: 'transform 0.3s ease',
//             ':hover': {
//               transform: 'scale(1.02)',
//             },
//           }}
//         >
//           <h3
//             style={{
//               fontSize: '22px',
//               fontWeight: '600',
//               color: '#e94560',
//               marginBottom: '15px',
//               textTransform: 'uppercase',
//               letterSpacing: '1px',
//             }}
//           >
//             Psychology
//           </h3>
//           <p
//             style={{
//               fontSize: '18px',
//               color: '#e0e0e0',
//               lineHeight: '1.6',
//               fontFamily: 'Arial, sans-serif',
//             }}
//           >
//             {report.report.psychology.score}/10 - {report.report.psychology.insight}
//           </p>
//         </motion.div>

//         {/* Fear Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           style={{
//             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
//             backdropFilter: 'blur(12px)',
//             borderRadius: '18px',
//             padding: '25px',
//             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
//             border: '1px solid rgba(255, 255, 255, 0.25)',
//             textAlign: 'left',
//             width: '100%',
//             maxWidth: '350px',
//             transition: 'transform 0.3s ease',
//             ':hover': {
//               transform: 'scale(1.02)',
//             },
//           }}
//         >
//           <h3
//             style={{
//               fontSize: '22px',
//               fontWeight: '600',
//               color: '#e94560',
//               marginBottom: '15px',
//               textTransform: 'uppercase',
//               letterSpacing: '1px',
//             }}
//           >
//             Fear
//           </h3>
//           <p
//             style={{
//               fontSize: '18px',
//               color: '#e0e0e0',
//               lineHeight: '1.6',
//               fontFamily: 'Arial, sans-serif',
//             }}
//           >
//             {report.report.fear.score}/10 - {report.report.fear.insight}
//           </p>
//         </motion.div>

//         {/* Self-Discovery Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           style={{
//             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
//             backdropFilter: 'blur(12px)',
//             borderRadius: '18px',
//             padding: '25px',
//             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
//             border: '1px solid rgba(255, 255, 255, 0.25)',
//             textAlign: 'left',
//             width: '100%',
//             maxWidth: '350px',
//             transition: 'transform 0.3s ease',
//             ':hover': {
//               transform: 'scale(1.02)',
//             },
//           }}
//         >
//           <h3
//             style={{
//               fontSize: '22px',
//               fontWeight: '600',
//               color: '#e94560',
//               marginBottom: '15px',
//               textTransform: 'uppercase',
//               letterSpacing: '1px',
//             }}
//           >
//             Self-Discovery
//           </h3>
//           <p
//             style={{
//               fontSize: '18px',
//               color: '#e0e0e0',
//               lineHeight: '1.6',
//               fontFamily: 'Arial, sans-serif',
//             }}
//           >
//             {report.report['self-discovery'].score}/10 - {report.report['self-discovery'].insight}
//           </p>
//         </motion.div>

//         {/* Dominant Phase Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.7 }}
//           style={{
//             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
//             backdropFilter: 'blur(12px)',
//             borderRadius: '18px',
//             padding: '25px',
//             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
//             border: '1px solid rgba(255, 255, 255, 0.25)',
//             textAlign: 'left',
//             width: '100%',
//             maxWidth: '350px',
//             transition: 'transform 0.3s ease',
//             ':hover': {
//               transform: 'scale(1.02)',
//             },
//           }}
//         >
//           <h3
//             style={{
//               fontSize: '22px',
//               fontWeight: '600',
//               color: '#e94560',
//               marginBottom: '15px',
//               textTransform: 'uppercase',
//               letterSpacing: '1px',
//             }}
//           >
//             Dominant Phase
//           </h3>
//           <p
//             style={{
//               fontSize: '18px',
//               color: '#e0e0e0',
//               lineHeight: '1.6',
//               fontFamily: 'Arial, sans-serif',
//             }}
//           >
//             {report.dominantPhase}
//           </p>
//         </motion.div>

//         {/* Strengths Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           style={{
//             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
//             backdropFilter: 'blur(12px)',
//             borderRadius: '18px',
//             padding: '25px',
//             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
//             border: '1px solid rgba(255, 255, 255, 0.25)',
//             textAlign: 'left',
//             width: '100%',
//             maxWidth: '350px',
//             transition: 'transform 0.3s ease',
//             ':hover': {
//               transform: 'scale(1.02)',
//             },
//           }}
//         >
//           <h3
//             style={{
//               fontSize: '22px',
//               fontWeight: '600',
//               color: '#e94560',
//               marginBottom: '15px',
//               textTransform: 'uppercase',
//               letterSpacing: '1px',
//             }}
//           >
//             Strengths
//           </h3>
//           <p
//             style={{
//               fontSize: '18px',
//               color: '#e0e0e0',
//               lineHeight: '1.6',
//               fontFamily: 'Arial, sans-serif',
//             }}
//           >
//             {report.strengths}
//           </p>
//         </motion.div>

//         {/* Weaknesses Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.9 }}
//           style={{
//             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
//             backdropFilter: 'blur(12px)',
//             borderRadius: '18px',
//             padding: '25px',
//             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
//             border: '1px solid rgba(255, 255, 255, 0.25)',
//             textAlign: 'left',
//             width: '100%',
//             maxWidth: '350px',
//             transition: 'transform 0.3s ease',
//             ':hover': {
//               transform: 'scale(1.02)',
//             },
//           }}
//         >
//           <h3
//             style={{
//               fontSize: '22px',
//               fontWeight: '600',
//               color: '#e94560',
//               marginBottom: '15px',
//               textTransform: 'uppercase',
//               letterSpacing: '1px',
//             }}
//           >
//             Weaknesses
//           </h3>
//           <p
//             style={{
//               fontSize: '18px',
//               color: '#e0e0e0',
//               lineHeight: '1.6',
//               fontFamily: 'Arial, sans-serif',
//             }}
//           >
//             {report.weaknesses}
//           </p>
//         </motion.div>

//         {/* Advice Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.0 }}
//           style={{
//             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
//             backdropFilter: 'blur(12px)',
//             borderRadius: '18px',
//             padding: '25px',
//             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
//             border: '1px solid rgba(255, 255, 255, 0.25)',
//             textAlign: 'left',
//             width: '100%',
//             maxWidth: '350px',
//             transition: 'transform 0.3s ease',
//             ':hover': {
//               transform: 'scale(1.02)',
//             },
//           }}
//         >
//           <h3
//             style={{
//               fontSize: '22px',
//               fontWeight: '600',
//               color: '#e94560',
//               marginBottom: '15px',
//               textTransform: 'uppercase',
//               letterSpacing: '1px',
//             }}
//           >
//             Advice
//           </h3>
//           <p
//             style={{
//               fontSize: '18px',
//               color: '#e0e0e0',
//               lineHeight: '1.6',
//               fontFamily: 'Arial, sans-serif',
//             }}
//           >
//             {report.advice}
//           </p>
//         </motion.div>

//         {/* Recommendation Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.1 }}
//           style={{
//             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
//             backdropFilter: 'blur(12px)',
//             borderRadius: '18px',
//             padding: '25px',
//             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
//             border: '1px solid rgba(255, 255, 255, 0.25)',
//             textAlign: 'left',
//             width: '100%',
//             maxWidth: '350px',
//             transition: 'transform 0.3s ease',
//             ':hover': {
//               transform: 'scale(1.02)',
//             },
//           }}
//         >
//           <h3
//             style={{
//               fontSize: '22px',
//               fontWeight: '600',
//               color: '#e94560',
//               marginBottom: '15px',
//               textTransform: 'uppercase',
//               letterSpacing: '1px',
//             }}
//           >
//             Recommendation
//           </h3>
//           <p
//             style={{
//               fontSize: '18px',
//               color: '#e0e0e0',
//               lineHeight: '1.6',
//               fontFamily: 'Arial, sans-serif',
//             }}
//           >
//             {report.recommendation}
//           </p>
//         </motion.div>
//       </div>



//       {/* Feedback Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.2 }}
//         style={{
//           marginTop: '60px',
//           maxWidth: '600px',
//           marginLeft: 'auto',
//           marginRight: 'auto',
//         }}
//       >
//         <h3
//           style={{
//             fontSize: '28px',
//             fontWeight: '600',
//             color: '#fff',
//             marginBottom: '20px',
//           }}
//         >
//           Your Feedback
//         </h3>
//         <form onSubmit={handleFeedbackSubmit}>
//           <textarea
//             value={feedback}
//             onChange={(e) => setFeedback(e.target.value)}
//             placeholder="Share your thoughts..."
//             style={{
//               width: '100%',
//               minHeight: '120px',
//               padding: '15px',
//               background: 'rgba(255, 255, 255, 0.1)',
//               border: '1px solid rgba(255, 255, 255, 0.3)',
//               borderRadius: '10px',
//               color: '#fff',
//               fontSize: '16px',
//               resize: 'vertical',
//               marginBottom: '20px',
//             }}
//           />
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             style={{
//               padding: '15px 40px',
//               background: '#e94560',
//               border: 'none',
//               borderRadius: '50px',
//               color: '#fff',
//               cursor: 'pointer',
//               fontSize: '18px',
//             }}
//           >
//             Submit Feedback
//           </motion.button>
//         </form>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={handleExplorePhilosophers}
//           style={{
//             marginTop: '20px',
//             padding: '15px 40px',
//             background: 'linear-gradient(135deg, #e94560, #ff6f91)',
//             border: 'none',
//             borderRadius: '50px',
//             color: '#fff',
//             cursor: 'pointer',
//             fontSize: '18px',
//             boxShadow: '0 4px 15px rgba(233, 69, 96, 0.4)',
//           }}
//         >
//           Explore Philosophers
//         </motion.button>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={generatePDF}
//           disabled={!report}
//           style={{
//             marginTop: '20px',
//             padding: '15px 40px',
//             background: !report ? '#ccc' : 'linear-gradient(135deg, #e94560, #ff6f91)',
//             border: 'none',
//             borderRadius: '50px',
//             paddingRight: '20px',
//             color: '#fff',
//             cursor: !report ? 'not-allowed' : 'pointer',
//             fontSize: '18px',
//             boxShadow: !report ? 'none' : '0 4px 15px rgba(233, 69, 96, 0.4)',
//             opacity: !report ? 0.6 : 1,
//           }}
//         >
//           Download PDF Report
//         </motion.button>

//         {/* Psyche Personality Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.3 }}
//           style={{
//             marginTop: '60px',
//             textAlign: 'center',
//           }}
//         >
//           <h3
//             style={{
//               fontSize: '28px',
//               fontWeight: '600',
//               color: '#fff',
//               marginBottom: '30px',
//             }}
//           >
//             Your Psyche Personality Badge
//           </h3>
//           <div
//             ref={cardRef}
//             style={{
//               background: 'linear-gradient(135deg, #FFD700, #DAA520)', // Golden gradient
//               borderRadius: '20px',
//               padding: '30px',
//               maxWidth: '500px',
//               margin: '0 auto',
//               color: '#1F4459', // Dark text for contrast
//               textAlign: 'center',
//               boxShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.5)', // Golden glow
//               border: '3px solid #FFD700', // Golden border
//               position: 'relative',
//             }}
//           >
//             {/* Psyche Stamp */}
//             <div
//               style={{
//                 position: 'absolute',
//                 top: '10px',
//                 right: '10px',
//                 background: '#e94560',
//                 color: '#fff',
//                 padding: '5px 15px',
//                 borderRadius: '20px',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 transform: 'rotate(15deg)',
//                 boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
//               }}
//             >
//               Certified by The Psyche
//             </div>
//             <h4
//               style={{
//                 fontSize: '24px',
//                 fontWeight: '700',
//                 marginBottom: '15px',
//                 textTransform: 'uppercase',
//                 letterSpacing: '1px',
//               }}
//             >
//               {personalityTitle}
//             </h4>
//             <p
//               style={{
//                 fontSize: '16px',
//                 fontStyle: 'italic',
//                 marginBottom: '20px',
//                 lineHeight: '1.5',
//               }}
//             >
//               Certified Psyche Achiever: Your journey of self-discovery shines bright! Keep exploring with The Psyche.
//             </p>
//             <p
//               style={{
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#011325',
//               }}
//             >
//               Awarded on {new Date().toLocaleDateString()}
//             </p>
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleDownloadCard}
//             style={{
//               marginTop: '20px',
//               padding: '15px 40px',
//               background: 'linear-gradient(135deg, #FFD700, #DAA520)', // Golden button
//               border: 'none',
//               borderRadius: '50px',
//               color: '#1F4459',
//               cursor: 'pointer',
//               fontSize: '18px',
//               fontWeight: '600',
//               boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '10px',
//               margin: '20px auto',
//             }}
//           >
//             <FaDownload /> Download & Share Your Badge
//           </motion.button>
//           <p
//             style={{
//               fontSize: '16px',
//               color: '#e0e0e0',
//               marginTop: '30px',
//               lineHeight: '1.6',
//             }}
//           >
//             Share with your friends and take on Psyche Challenges to unlock deeper insights into your journey!
//           </p>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Report;

import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axiosInstance from '../utils/axiosInstance.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FaDownload } from 'react-icons/fa'; // For the download icon
import { Line } from 'react-chartjs-2'; // Chart.js import
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'; // Chart.js components

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Report() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();
  const cardRef = useRef(null); // Ref for capturing the card

  useEffect(() => {
    const fetchReport = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const res = await axiosInstance.get('/psyche/report');
        // Ensure scores are capped at 10
        const normalizedReport = {
          ...res.data,
          report: {
            mentality: {
              score: Math.min(res.data.report.mentality.score, 10),
              insight: res.data.report.mentality.insight,
            },
            philosophy: {
              score: Math.min(res.data.report.philosophy.score, 10),
              insight: res.data.report.philosophy.insight,
            },
            psychology: {
              score: Math.min(res.data.report.psychology.score, 10),
              insight: res.data.report.psychology.insight,
            },
            fear: {
              score: Math.min(res.data.report.fear.score, 10),
              insight: res.data.report.fear.insight,
            },
            'self-discovery': {
              score: Math.min(res.data.report['self-discovery'].score, 10),
              insight: res.data.report['self-discovery'].insight,
            },
          },
        };
        setReport(normalizedReport);
      } catch (err) {
        if (err.response?.status === 400) {
          alert('Please complete all 25 questions to view your report.');
          navigate('/questions');
        } else {
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchReport();
  }, [navigate]);

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.trim()) {
      alert('Feedback cannot be empty.');
      return;
    }

    try {
      await axiosInstance.post('/psyche/feedback', { text: feedback });
      alert('Feedback submitted successfully!');
      setFeedback('');
    } catch (err) {
      alert('Error submitting feedback: ' + (err.response?.data?.message || 'Try again later.'));
    }
  };

  const handleExplorePhilosophers = () => {
    navigate('/philosophers', { state: { dominantPhase: report.dominantPhase } });
  };

  const generatePDF = async () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    // Add premium header
    doc.setFillColor(31, 68, 89); // #1F4459
    doc.rect(0, 0, 210, 30, 'F'); // Full width header
    doc.setTextColor(255, 255, 255); // White text
    doc.setFontSize(24);
    doc.text('Psyche Report', 105, 20, { align: 'center' });

    // Add user info
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0); // Black text
    doc.text(`Your Psyche Profile - Generated on ${new Date().toLocaleDateString()}`, 105, 40, { align: 'center' });

    // Add category scores
    doc.setFontSize(12);
    const tableY = 50;
    doc.text('Category Scores', 105, tableY - 5, { align: 'center' });
    doc.setDrawColor(233, 69, 96); // #e94560 border
    doc.rect(20, tableY, 170, 120); // Table boundary (increased height for more content)
    const categories = ['Mentality', 'Philosophy', 'Psychology', 'Fear', 'Self-Discovery'];
    categories.forEach((cat, index) => {
      const score = report.report[cat.toLowerCase()]?.score || 0;
      const insight = report.report[cat.toLowerCase()]?.insight || 'No insight available';
      doc.text(cat, 30, tableY + 10 + (index * 15));
      doc.text(`${score}/10`, 100, tableY + 10 + (index * 15));
      if (index === 0) doc.text('Insight:', 120, tableY + 10);
      doc.text(insight.substring(0, 40) + (insight.length > 40 ? '...' : ''), 120, tableY + 10 + (index * 15)); // Shorter insight
    });

    // Add dominant phase
    doc.setFontSize(14);
    doc.text(`Dominant Phase: ${report.dominantPhase}`, 105, 150, { align: 'center' });
    doc.setFontSize(12);
    doc.text(report.report[report.dominantPhase]?.insight || 'No dominant insight', 105, 160, { align: 'center' });

    // Add additional fields (test date, strengths, weaknesses, advice, recommendation)
    const additionalY = 170;
    doc.text('Additional Insights', 105, additionalY - 5, { align: 'center' });
    doc.text(`Test Date: ${report.testDate || 'N/A'}`, 105, additionalY + 10, { align: 'center' });
    doc.text(`Strengths: ${report.strengths || 'N/A'}`, 105, additionalY + 25, { align: 'center' });
    doc.text(`Weaknesses: ${report.weaknesses || 'N/A'}`, 105, additionalY + 40, { align: 'center' });
    doc.text(`Advice: ${report.advice || 'N/A'}`, 105, additionalY + 55, { align: 'center' });
    doc.text(`Recommendation: ${report.recommendation || 'N/A'}`, 105, additionalY + 70, { align: 'center' });

    // Add footer
    doc.setFillColor(0, 19, 37); // #011325
    doc.rect(0, 270, 210, 30, 'F'); // Footer
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text('Powered by The Psyche', 105, 285, { align: 'center' });

    // Save the PDF
    doc.save(`Psyche_Report_${new Date().toLocaleDateString().replace(/\//g, '-')}.pdf`);
  };

  // Function to download the Psyche Personality Card
  const handleDownloadCard = async () => {
    const element = cardRef.current;
    const canvas = await html2canvas(element);
    const image = canvas.toDataURL('image/png');

    // Create a temporary link to download the image
    const link = document.createElement('a');
    link.href = image;
    link.download = 'psyche-personality-card.png';
    link.click();

    // Optionally, open a share dialog (browser-dependent)
    if (navigator.share) {
      navigator.share({
        title: 'My Psyche Personality Card',
        text: `I’m a Certified Psyche Achiever! Discover your Psyche at The Psyche.`,
        url: window.location.origin,
      });
    } else {
      alert('Download your card and share it on your favorite platform!');
    }
  };

  // Chart Data Preparation
  const prepareChartData = () => {
    if (!report || !report.report) return null;

    const phases = [
      { name: 'Mentality', score: report.report.mentality.score },
      { name: 'Philosophy', score: report.report.philosophy.score },
      { name: 'Psychology', score: report.report.psychology.score },
      { name: 'Fear', score: report.report.fear.score },
      { name: 'Self-Discovery', score: report.report['self-discovery'].score },
    ];

    // Sort phases by score in ascending order
    const sortedPhases = phases.sort((a, b) => a.score - b.score);

    const labels = sortedPhases.map(phase => phase.name);
    const scores = sortedPhases.map(phase => phase.score);

    return {
      labels,
      datasets: [
        {
          label: 'Psyche Scores',
          data: scores,
          borderColor: '#e94560',
          backgroundColor: 'rgba(233, 69, 96, 0.2)',
          pointBackgroundColor: '#ff6f91',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#e94560',
          tension: 0.4, // Smooth curve
          fill: true,
        },
      ],
    };
  };

  // Chart Options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#e0e0e0',
        },
      },
      title: {
        display: true,
        text: 'Your Psyche Phases Overview',
        color: '#fff',
        font: {
          size: 24,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}/10`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Phases (Low to High)',
          color: '#e0e0e0',
        },
        ticks: {
          color: '#e0e0e0',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Score (0-10)',
          color: '#e0e0e0',
        },
        ticks: {
          color: '#e0e0e0',
        },
        min: 0,
        max: 10,
      },
    },
  };

  if (loading) {
    return <div style={{ width: '100%', textAlign: 'center', padding: '40px' }}>Loading...</div>;
  }

  if (!report) {
    return <div style={{ width: '100%', textAlign: 'center', padding: '40px' }}>No report available.</div>;
  }

  // Determine dominant phase and personality title
  const personalityTitles = {
    mentality: 'Strategic Mastermind',
    philosophy: 'Philosophical Thinker',
    psychology: 'Empathetic Explorer',
    fear: 'Fearless Trailblazer',
    'self-discovery': 'Soulful Seeker',
  };
  const dominantPhase = report.dominantPhase;
  const personalityTitle = personalityTitles[dominantPhase] || 'Balanced Soul';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        maxWidth: '1300px',
        padding: '60px 20px',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '42px',
          fontWeight: '700',
          marginBottom: '50px',
          color: '#fff',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        Your Psyche Report
      </h2>

      {/* Test Date at the Top */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
          backdropFilter: 'blur(12px)',
          borderRadius: '18px',
          padding: '25px',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          textAlign: 'center',
          width: '100%',
          maxWidth: '350px',
          margin: '0 auto 50px auto',
          transition: 'transform 0.3s ease',
          ':hover': {
            transform: 'scale(1.02)',
          },
        }}
      >
        <h3
          style={{
            fontSize: '22px',
            fontWeight: '600',
            color: '#e94560',
            marginBottom: '15px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          Test Date
        </h3>
        <p
          style={{
            fontSize: '18px',
            color: '#e0e0e0',
            lineHeight: '1.6',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          {report.testDate}
        </p>
      </motion.div>

      {/* Side-by-Side Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          justifyItems: 'center',
          padding: '0 10px',
        }}
      >
        {/* Mentality Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
            backdropFilter: 'blur(12px)',
            borderRadius: '18px',
            padding: '25px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            textAlign: 'left',
            width: '100%',
            maxWidth: '350px',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'scale(1.02)',
            },
          }}
        >
          <h3
            style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#e94560',
              marginBottom: '15px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Mentality
          </h3>
          <p
            style={{
              fontSize: '18px',
              color: '#e0e0e0',
              lineHeight: '1.6',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {report.report.mentality.score}/10 - {report.report.mentality.insight}
          </p>
        </motion.div>

        {/* Philosophy Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
            backdropFilter: 'blur(12px)',
            borderRadius: '18px',
            padding: '25px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            textAlign: 'left',
            width: '100%',
            maxWidth: '350px',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'scale(1.02)',
            },
          }}
        >
          <h3
            style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#e94560',
              marginBottom: '15px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Philosophy
          </h3>
          <p
            style={{
              fontSize: '18px',
              color: '#e0e0e0',
              lineHeight: '1.6',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {report.report.philosophy.score}/10 - {report.report.philosophy.insight}
          </p>
        </motion.div>

        {/* Psychology Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
            backdropFilter: 'blur(12px)',
            borderRadius: '18px',
            padding: '25px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            textAlign: 'left',
            width: '100%',
            maxWidth: '350px',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'scale(1.02)',
            },
          }}
        >
          <h3
            style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#e94560',
              marginBottom: '15px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Psychology
          </h3>
          <p
            style={{
              fontSize: '18px',
              color: '#e0e0e0',
              lineHeight: '1.6',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {report.report.psychology.score}/10 - {report.report.psychology.insight}
          </p>
        </motion.div>

        {/* Fear Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
            backdropFilter: 'blur(12px)',
            borderRadius: '18px',
            padding: '25px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            textAlign: 'left',
            width: '100%',
            maxWidth: '350px',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'scale(1.02)',
            },
          }}
        >
          <h3
            style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#e94560',
              marginBottom: '15px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Fear
          </h3>
          <p
            style={{
              fontSize: '18px',
              color: '#e0e0e0',
              lineHeight: '1.6',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {report.report.fear.score}/10 - {report.report.fear.insight}
          </p>
        </motion.div>

        {/* Self-Discovery Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
            backdropFilter: 'blur(12px)',
            borderRadius: '18px',
            padding: '25px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            textAlign: 'left',
            width: '100%',
            maxWidth: '350px',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'scale(1.02)',
            },
          }}
        >
          <h3
            style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#e94560',
              marginBottom: '15px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Self-Discovery
          </h3>
          <p
            style={{
              fontSize: '18px',
              color: '#e0e0e0',
              lineHeight: '1.6',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {report.report['self-discovery'].score}/10 - {report.report['self-discovery'].insight}
          </p>
        </motion.div>

        {/* Dominant Phase Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
            backdropFilter: 'blur(12px)',
            borderRadius: '18px',
            padding: '25px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            textAlign: 'left',
            width: '100%',
            maxWidth: '350px',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'scale(1.02)',
            },
          }}
        >
          <h3
            style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#e94560',
              marginBottom: '15px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Dominant Phase
          </h3>
          <p
            style={{
              fontSize: '18px',
              color: '#e0e0e0',
              lineHeight: '1.6',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {report.dominantPhase}
          </p>
        </motion.div>

        {/* Strengths Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
            backdropFilter: 'blur(12px)',
            borderRadius: '18px',
            padding: '25px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            textAlign: 'left',
            width: '100%',
            maxWidth: '350px',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'scale(1.02)',
            },
          }}
        >
          <h3
            style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#e94560',
              marginBottom: '15px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Strengths
          </h3>
          <p
            style={{
              fontSize: '18px',
              color: '#e0e0e0',
              lineHeight: '1.6',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {report.strengths}
          </p>
        </motion.div>

        {/* Weaknesses Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
            backdropFilter: 'blur(12px)',
            borderRadius: '18px',
            padding: '25px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            textAlign: 'left',
            width: '100%',
            maxWidth: '350px',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'scale(1.02)',
            },
          }}
        >
          <h3
            style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#e94560',
              marginBottom: '15px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Weaknesses
          </h3>
          <p
            style={{
              fontSize: '18px',
              color: '#e0e0e0',
              lineHeight: '1.6',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {report.weaknesses}
          </p>
        </motion.div>

        {/* Advice Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
            backdropFilter: 'blur(12px)',
            borderRadius: '18px',
            padding: '25px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            textAlign: 'left',
            width: '100%',
            maxWidth: '350px',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'scale(1.02)',
            },
          }}
        >
          <h3
            style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#e94560',
              marginBottom: '15px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Advice
          </h3>
          <p
            style={{
              fontSize: '18px',
              color: '#e0e0e0',
              lineHeight: '1.6',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {report.advice}
          </p>
        </motion.div>

        {/* Recommendation Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
            backdropFilter: 'blur(12px)',
            borderRadius: '18px',
            padding: '25px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            textAlign: 'left',
            width: '100%',
            maxWidth: '350px',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'scale(1.02)',
            },
          }}
        >
          <h3
            style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#e94560',
              marginBottom: '15px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Recommendation
          </h3>
          <p
            style={{
              fontSize: '18px',
              color: '#e0e0e0',
              lineHeight: '1.6',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {report.recommendation}
          </p>
        </motion.div>
      </div>

      {/* Chart Section - Added between Cards and Feedback */}
      {report && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: '60px',
            marginBottom: '60px',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '18px',
            padding: '20px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
          }}
        >
          <Line data={prepareChartData()} options={chartOptions} />
        </motion.div>
      )}

      {/* Feedback Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        style={{
          marginTop: '60px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <h3
          style={{
            fontSize: '28px',
            fontWeight: '600',
            color: '#fff',
            marginBottom: '20px',
          }}
        >
          Your Feedback
        </h3>
        <form onSubmit={handleFeedbackSubmit}>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your thoughts..."
            style={{
              width: '100%',
              minHeight: '120px',
              padding: '15px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '10px',
              color: '#fff',
              fontSize: '16px',
              resize: 'vertical',
              marginBottom: '20px',
            }}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            style={{
              padding: '15px 40px',
              background: '#e94560',
              border: 'none',
              borderRadius: '50px',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '18px',
            }}
          >
            Submit Feedback
          </motion.button>
        </form>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleExplorePhilosophers}
          style={{
            marginTop: '20px',
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
          Explore Philosophers
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={generatePDF}
          disabled={!report}
          style={{
            marginTop: '20px',
            padding: '15px 40px',
            background: !report ? '#ccc' : 'linear-gradient(135deg, #e94560, #ff6f91)',
            border: 'none',
            borderRadius: '50px',
            paddingRight: '20px',
            color: '#fff',
            cursor: !report ? 'not-allowed' : 'pointer',
            fontSize: '18px',
            boxShadow: !report ? 'none' : '0 4px 15px rgba(233, 69, 96, 0.4)',
            opacity: !report ? 0.6 : 1,
          }}
        >
          Download PDF Report
        </motion.button>




      
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate('/roadmap', { state: { report } })} // Pass report data
  disabled={!report}
  style={{
    marginTop: '100px',
    padding: '15px 40px',
    background: !report ? '#ccc' : 'linear-gradient(135deg, #e94560, #ff6f91)',
    border: 'none',
    borderRadius: '50px',
    color: '#fff',
    cursor: !report ? 'not-allowed' : 'pointer',
    fontSize: '18px',
    boxShadow: !report ? 'none' : '0 4px 15px rgba(233, 69, 96, 0.4)',
    opacity: !report ? 0.6 : 1,
  }}
>
  View Your 21-Day Roadmap
</motion.button>
        {/* Psyche Personality Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          style={{
            marginTop: '60px',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontSize: '28px',
              fontWeight: '600',
              color: '#fff',
              marginBottom: '30px',
            }}
          >
            Your Psyche Personality Badge
          </h3>
          <div
            ref={cardRef}
            style={{
              background: 'linear-gradient(135deg, #FFD700, #DAA520)', // Golden gradient
              borderRadius: '20px',
              padding: '30px',
              maxWidth: '500px',
              margin: '0 auto',
              color: '#1F4459', // Dark text for contrast
              textAlign: 'center',
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.5)', // Golden glow
              border: '3px solid #FFD700', // Golden border
              position: 'relative',
            }}
          >
            {/* Psyche Stamp */}
            <div
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: '#e94560',
                color: '#fff',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '600',
                transform: 'rotate(15deg)',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
              }}
            >
              Certified by The Psyche
            </div>
            <h4
              style={{
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '15px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {personalityTitle}
            </h4>
            <p
              style={{
                fontSize: '16px',
                fontStyle: 'italic',
                marginBottom: '20px',
                lineHeight: '1.5',
              }}
            >
              Certified Psyche Achiever: Your journey of self-discovery shines bright! Keep exploring with The Psyche.
            </p>
            <p
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#011325',
              }}
            >
              Awarded on {new Date().toLocaleDateString()}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadCard}
            style={{
              marginTop: '20px',
              padding: '15px 40px',
              background: 'linear-gradient(135deg, #FFD700, #DAA520)', // Golden button
              border: 'none',
              borderRadius: '50px',
              color: '#1F4459',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: '600',
              boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              margin: '20px auto',
            }}
          >
            <FaDownload /> Download & Share Your Badge
          </motion.button>
          <p
            style={{
              fontSize: '16px',
              color: '#e0e0e0',
              marginTop: '30px',
              lineHeight: '1.6',
            }}
          >
            Share with your friends and take on Psyche Challenges to unlock deeper insights into your journey!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Report;