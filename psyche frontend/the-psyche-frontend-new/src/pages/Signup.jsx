// // // // // // // import { useState } from 'react';
// // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // import axiosInstance from '../utils/axiosInstance.js';

// // // // // // // function Signup() {
// // // // // // //   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     try {
// // // // // // //       const res = await axiosInstance.post('/auth/signup', formData);
// // // // // // //       localStorage.setItem('token', res.data.token); // Token save
// // // // // // //       navigate('/questions'); // Redirect to questions
// // // // // // //     } catch (err) {
// // // // // // //       alert('Error: ' + (err.response?.data?.message || 'Signup failed'));
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div style={{ padding: '20px' }}>
// // // // // // //       <h2>Signup</h2>
// // // // // // //       <form onSubmit={handleSubmit}>
// // // // // // //         <input
// // // // // // //           type="text"
// // // // // // //           placeholder="Name"
// // // // // // //           value={formData.name}
// // // // // // //           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// // // // // // //           style={{ display: 'block', margin: '10px 0', padding: '10px' }}
// // // // // // //         />
// // // // // // //         <input
// // // // // // //           type="email"
// // // // // // //           placeholder="Email"
// // // // // // //           value={formData.email}
// // // // // // //           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// // // // // // //           style={{ display: 'block', margin: '10px 0', padding: '10px' }}
// // // // // // //         />
// // // // // // //         <input
// // // // // // //           type="password"
// // // // // // //           placeholder="Password"
// // // // // // //           value={formData.password}
// // // // // // //           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
// // // // // // //           style={{ display: 'block', margin: '10px 0', padding: '10px' }}
// // // // // // //         />
// // // // // // //         <button type="submit" style={{ padding: '10px 20px' }}>Signup</button>
// // // // // // //       </form>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default Signup;

// // // // // // import { useState } from 'react';
// // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // import { motion } from 'framer-motion';
// // // // // // import axiosInstance from '../utils/axiosInstance.js';

// // // // // // function Signup() {
// // // // // //   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
// // // // // //   const navigate = useNavigate();

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     try {
// // // // // //       const res = await axiosInstance.post('/auth/signup', formData);
// // // // // //       localStorage.setItem('token', res.data.token);
// // // // // //       navigate('/questions');
// // // // // //     } catch (err) {
// // // // // //       alert('Error: ' + (err.response?.data?.message || 'Signup failed'));
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <motion.div
// // // // // //       initial={{ opacity: 0 }}
// // // // // //       animate={{ opacity: 1 }}
// // // // // //       transition={{ duration: 0.5 }}
// // // // // //       style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}
// // // // // //     >
// // // // // //       <h2 style={{ fontSize: '28px', textAlign: 'center', marginBottom: '20px' }}>Signup</h2>
// // // // // //       <form onSubmit={handleSubmit}>
// // // // // //         <motion.input
// // // // // //           initial={{ x: -50, opacity: 0 }}
// // // // // //           animate={{ x: 0, opacity: 1 }}
// // // // // //           transition={{ delay: 0.2 }}
// // // // // //           type="text"
// // // // // //           placeholder="Name"
// // // // // //           value={formData.name}
// // // // // //           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// // // // // //           style={{
// // // // // //             display: 'block',
// // // // // //             width: '100%',
// // // // // //             margin: '10px 0',
// // // // // //             padding: '10px',
// // // // // //             background: 'rgba(255, 255, 255, 0.1)',
// // // // // //             border: '1px solid #fff',
// // // // // //             borderRadius: '5px',
// // // // // //             color: '#fff',
// // // // // //           }}
// // // // // //         />
// // // // // //         <motion.input
// // // // // //           initial={{ x: -50, opacity: 0 }}
// // // // // //           animate={{ x: 0, opacity: 1 }}
// // // // // //           transition={{ delay: 0.3 }}
// // // // // //           type="email"
// // // // // //           placeholder="Email"
// // // // // //           value={formData.email}
// // // // // //           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// // // // // //           style={{
// // // // // //             display: 'block',
// // // // // //             width: '100%',
// // // // // //             margin: '10px 0',
// // // // // //             padding: '10px',
// // // // // //             background: 'rgba(255, 255, 255, 0.1)',
// // // // // //             border: '1px solid #fff',
// // // // // //             borderRadius: '5px',
// // // // // //             color: '#fff',
// // // // // //           }}
// // // // // //         />
// // // // // //         <motion.input
// // // // // //           initial={{ x: -50, opacity: 0 }}
// // // // // //           animate={{ x: 0, opacity: 1 }}
// // // // // //           transition={{ delay: 0.4 }}
// // // // // //           type="password"
// // // // // //           placeholder="Password"
// // // // // //           value={formData.password}
// // // // // //           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
// // // // // //           style={{
// // // // // //             display: 'block',
// // // // // //             width: '100%',
// // // // // //             margin: '10px 0',
// // // // // //             padding: '10px',
// // // // // //             background: 'rgba(255, 255, 255, 0.1)',
// // // // // //             border: '1px solid #fff',
// // // // // //             borderRadius: '5px',
// // // // // //             color: '#fff',
// // // // // //           }}
// // // // // //         />
// // // // // //         <motion.button
// // // // // //           whileHover={{ scale: 1.05 }}
// // // // // //           whileTap={{ scale: 0.95 }}
// // // // // //           type="submit"
// // // // // //           style={{
// // // // // //             width: '100%',
// // // // // //             padding: '10px',
// // // // // //             background: '#e94560',
// // // // // //             border: 'none',
// // // // // //             borderRadius: '50px',
// // // // // //             color: '#fff',
// // // // // //             cursor: 'pointer',
// // // // // //             marginTop: '10px',
// // // // // //           }}
// // // // // //         >
// // // // // //           Signup
// // // // // //         </motion.button>
// // // // // //       </form>
// // // // // //     </motion.div>
// // // // // //   );
// // // // // // }

// // // // // // export default Signup;

// // // // // import { useState } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import { motion } from 'framer-motion';
// // // // // import axiosInstance from '../utils/axiosInstance.js';

// // // // // function Signup() {
// // // // //   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
// // // // //   const navigate = useNavigate();

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       const res = await axiosInstance.post('/auth/signup', formData);
// // // // //       localStorage.setItem('token', res.data.token);
// // // // //       navigate('/'); // Redirect to Home
// // // // //     } catch (err) {
// // // // //       alert('Error: ' + (err.response?.data?.message || 'Signup failed'));
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <motion.div
// // // // //       initial={{ opacity: 0 }}
// // // // //       animate={{ opacity: 1 }}
// // // // //       transition={{ duration: 0.5 }}
// // // // //       style={{ maxWidth: '400px', margin: '0 auto' }}
// // // // //     >
// // // // //       <h2 style={{ fontSize: '28px', textAlign: 'center', marginBottom: '20px' }}>Signup</h2>
// // // // //       <form onSubmit={handleSubmit}>
// // // // //         <motion.input
// // // // //           initial={{ x: -50, opacity: 0 }}
// // // // //           animate={{ x: 0, opacity: 1 }}
// // // // //           transition={{ delay: 0.2 }}
// // // // //           type="text"
// // // // //           placeholder="Name"
// // // // //           value={formData.name}
// // // // //           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// // // // //           style={{
// // // // //             display: 'block',
// // // // //             width: '100%',
// // // // //             margin: '10px 0',
// // // // //             padding: '10px',
// // // // //             background: 'rgba(255, 255, 255, 0.1)',
// // // // //             border: '1px solid #fff',
// // // // //             borderRadius: '5px',
// // // // //             color: '#fff',
// // // // //           }}
// // // // //         />
// // // // //         <motion.input
// // // // //           initial={{ x: -50, opacity: 0 }}
// // // // //           animate={{ x: 0, opacity: 1 }}
// // // // //           transition={{ delay: 0.3 }}
// // // // //           type="email"
// // // // //           placeholder="Email"
// // // // //           value={formData.email}
// // // // //           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// // // // //           style={{
// // // // //             display: 'block',
// // // // //             width: '100%',
// // // // //             margin: '10px 0',
// // // // //             padding: '10px',
// // // // //             background: 'rgba(255, 255, 255, 0.1)',
// // // // //             border: '1px solid #fff',
// // // // //             borderRadius: '5px',
// // // // //             color: '#fff',
// // // // //           }}
// // // // //         />
// // // // //         <motion.input
// // // // //           initial={{ x: -50, opacity: 0 }}
// // // // //           animate={{ x: 0, opacity: 1 }}
// // // // //           transition={{ delay: 0.4 }}
// // // // //           type="password"
// // // // //           placeholder="Password"
// // // // //           value={formData.password}
// // // // //           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
// // // // //           style={{
// // // // //             display: 'block',
// // // // //             width: '100%',
// // // // //             margin: '10px 0',
// // // // //             padding: '10px',
// // // // //             background: 'rgba(255, 255, 255, 0.1)',
// // // // //             border: '1px solid #fff',
// // // // //             borderRadius: '5px',
// // // // //             color: '#fff',
// // // // //           }}
// // // // //         />
// // // // //         <motion.button
// // // // //           whileHover={{ scale: 1.05 }}
// // // // //           whileTap={{ scale: 0.95 }}
// // // // //           type="submit"
// // // // //           style={{
// // // // //             width: '100%',
// // // // //             padding: '10px',
// // // // //             background: '#e94560',
// // // // //             border: 'none',
// // // // //             borderRadius: '50px',
// // // // //             color: '#fff',
// // // // //             cursor: 'pointer',
// // // // //             marginTop: '10px',
// // // // //           }}
// // // // //         >
// // // // //           Signup
// // // // //         </motion.button>
// // // // //       </form>
// // // // //     </motion.div>
// // // // //   );
// // // // // }

// // // // // export default Signup;

// // // // import { useState } from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import { motion } from 'framer-motion';
// // // // import axiosInstance from '../utils/axiosInstance.js';

// // // // function Signup() {
// // // //   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
// // // //   const navigate = useNavigate();

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const res = await axiosInstance.post('/auth/signup', formData);
// // // //       localStorage.setItem('token', res.data.token);
// // // //       navigate('/'); // Signup successful, go to Home
// // // //     } catch (err) {
// // // //       alert('Error: ' + (err.response?.data?.message || 'Signup failed'));
// // // //     }
// // // //   };

// // // //   return (
// // // //     <motion.div
// // // //       initial={{ opacity: 0 }}
// // // //       animate={{ opacity: 1 }}
// // // //       transition={{ duration: 0.5 }}
// // // //       style={{ width: '100%', maxWidth: '500px' }}
// // // //     >
// // // //       <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '30px' }}>Signup</h2>
// // // //       <form onSubmit={handleSubmit}>
// // // //         <motion.input
// // // //           initial={{ x: -50, opacity: 0 }}
// // // //           animate={{ x: 0, opacity: 1 }}
// // // //           transition={{ delay: 0.2 }}
// // // //           type="text"
// // // //           placeholder="Name"
// // // //           value={formData.name}
// // // //           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// // // //           style={{
// // // //             display: 'block',
// // // //             width: '100%',
// // // //             margin: '15px 0',
// // // //             padding: '15px',
// // // //             background: 'rgba(255, 255, 255, 0.1)',
// // // //             border: '1px solid #fff',
// // // //             borderRadius: '10px',
// // // //             color: '#fff',
// // // //             fontSize: '16px',
// // // //           }}
// // // //         />
// // // //         <motion.input
// // // //           initial={{ x: -50, opacity: 0 }}
// // // //           animate={{ x: 0, opacity: 1 }}
// // // //           transition={{ delay: 0.3 }}
// // // //           type="email"
// // // //           placeholder="Email"
// // // //           value={formData.email}
// // // //           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// // // //           style={{
// // // //             display: 'block',
// // // //             width: '100%',
// // // //             margin: '15px 0',
// // // //             padding: '15px',
// // // //             background: 'rgba(255, 255, 255, 0.1)',
// // // //             border: '1px solid #fff',
// // // //             borderRadius: '10px',
// // // //             color: '#fff',
// // // //             fontSize: '16px',
// // // //           }}
// // // //         />
// // // //         <motion.input
// // // //           initial={{ x: -50, opacity: 0 }}
// // // //           animate={{ x: 0, opacity: 1 }}
// // // //           transition={{ delay: 0.4 }}
// // // //           type="password"
// // // //           placeholder="Password"
// // // //           value={formData.password}
// // // //           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
// // // //           style={{
// // // //             display: 'block',
// // // //             width: '100%',
// // // //             margin: '15px 0',
// // // //             padding: '15px',
// // // //             background: 'rgba(255, 255, 255, 0.1)',
// // // //             border: '1px solid #fff',
// // // //             borderRadius: '10px',
// // // //             color: '#fff',
// // // //             fontSize: '16px',
// // // //           }}
// // // //         />
// // // //         <motion.button
// // // //           whileHover={{ scale: 1.05 }}
// // // //           whileTap={{ scale: 0.95 }}
// // // //           type="submit"
// // // //           style={{
// // // //             width: '100%',
// // // //             padding: '15px',
// // // //             background: '#e94560',
// // // //             border: 'none',
// // // //             borderRadius: '50px',
// // // //             color: '#fff',
// // // //             cursor: 'pointer',
// // // //             marginTop: '20px',
// // // //             fontSize: '18px',
// // // //           }}
// // // //         >
// // // //           Signup
// // // //         </motion.button>
// // // //       </form>
// // // //     </motion.div>
// // // //   );
// // // // }

// // // // export default Signup;

// // // import { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { motion } from 'framer-motion';
// // // import axiosInstance from '../utils/axiosInstance.js';

// // // function Signup() {
// // //   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
// // //   const navigate = useNavigate();

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const res = await axiosInstance.post('/auth/signup', formData);
// // //       localStorage.setItem('token', res.data.token);
// // //       navigate('/before-diving-in'); // Signup ke baad yeh page
// // //     } catch (err) {
// // //       alert('Error: ' + (err.response?.data?.message || 'Signup failed'));
// // //     }
// // //   };

// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0 }}
// // //       animate={{ opacity: 1 }}
// // //       transition={{ duration: 0.5 }}
// // //       style={{ width: '100%', maxWidth: '500px' }}
// // //     >
// // //       <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '30px' }}>Signup</h2>
// // //       <form onSubmit={handleSubmit}>
// // //         <motion.input
// // //           initial={{ x: -50, opacity: 0 }}
// // //           animate={{ x: 0, opacity: 1 }}
// // //           transition={{ delay: 0.2 }}
// // //           type="text"
// // //           placeholder="Name"
// // //           value={formData.name}
// // //           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// // //           style={{
// // //             display: 'block',
// // //             width: '100%',
// // //             margin: '15px 0',
// // //             padding: '15px',
// // //             background: 'rgba(255, 255, 255, 0.1)',
// // //             border: '1px solid #fff',
// // //             borderRadius: '10px',
// // //             color: '#fff',
// // //             fontSize: '16px',
// // //           }}
// // //         />
// // //         <motion.input
// // //           initial={{ x: -50, opacity: 0 }}
// // //           animate={{ x: 0, opacity: 1 }}
// // //           transition={{ delay: 0.3 }}
// // //           type="email"
// // //           placeholder="Email"
// // //           value={formData.email}
// // //           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// // //           style={{
// // //             display: 'block',
// // //             width: '100%',
// // //             margin: '15px 0',
// // //             padding: '15px',
// // //             background: 'rgba(255, 255, 255, 0.1)',
// // //             border: '1px solid #fff',
// // //             borderRadius: '10px',
// // //             color: '#fff',
// // //             fontSize: '16px',
// // //           }}
// // //         />
// // //         <motion.input
// // //           initial={{ x: -50, opacity: 0 }}
// // //           animate={{ x: 0, opacity: 1 }}
// // //           transition={{ delay: 0.4 }}
// // //           type="password"
// // //           placeholder="Password"
// // //           value={formData.password}
// // //           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
// // //           style={{
// // //             display: 'block',
// // //             width: '100%',
// // //             margin: '15px 0',
// // //             padding: '15px',
// // //             background: 'rgba(255, 255, 255, 0.1)',
// // //             border: '1px solid #fff',
// // //             borderRadius: '10px',
// // //             color: '#fff',
// // //             fontSize: '16px',
// // //           }}
// // //         />
// // //         <motion.button
// // //           whileHover={{ scale: 1.05 }}
// // //           whileTap={{ scale: 0.95 }}
// // //           type="submit"
// // //           style={{
// // //             width: '100%',
// // //             padding: '15px',
// // //             background: '#e94560',
// // //             border: 'none',
// // //             borderRadius: '50px',
// // //             color: '#fff',
// // //             cursor: 'pointer',
// // //             marginTop: '20px',
// // //             fontSize: '18px',
// // //           }}
// // //         >
// // //           Signup
// // //         </motion.button>
// // //       </form>
// // //     </motion.div>
// // //   );
// // // }

// // // export default Signup;

// // // src/pages/Signup.jsx
// // import { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import { toast } from 'react-toastify'; // Import toast
// // import axiosInstance from '../utils/axiosInstance.js';

// // function Signup() {
// //   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Client-side validation
// //     if (!formData.name.trim()) {
// //       toast.error('🌀 A psyche without a name? Please provide your name to begin the journey.', {
// //         position: 'top-right',
// //         autoClose: 3000,
// //         hideProgressBar: false,
// //         closeOnClick: true,
// //         pauseOnHover: true,
// //         draggable: true,
// //         theme: 'dark',
// //       });
// //       return;
// //     }
// //     if (!formData.email.trim()) {
// //       toast.error('🌀 The psyche realm needs your email to connect. Please provide it.', {
// //         position: 'top-right',
// //         autoClose: 3000,
// //         hideProgressBar: false,
// //         closeOnClick: true,
// //         pauseOnHover: true,
// //         draggable: true,
// //         theme: 'dark',
// //       });
// //       return;
// //     }
// //     if (!formData.password.trim()) {
// //       toast.error('🌀 A psyche without a key? Please set a password to secure your journey.', {
// //         position: 'top-right',
// //         autoClose: 3000,
// //         hideProgressBar: false,
// //         closeOnClick: true,
// //         pauseOnHover: true,
// //         draggable: true,
// //         theme: 'dark',
// //       });
// //       return;
// //     }

// //     try {
// //       const res = await axiosInstance.post('/auth/signup', formData);
// //       localStorage.setItem('token', res.data.token);
// //       toast.success('🌟 Welcome to the Psyche realm! Your journey begins now.', {
// //         position: 'top-right',
// //         autoClose: 3000,
// //         hideProgressBar: false,
// //         closeOnClick: true,
// //         pauseOnHover: true,
// //         draggable: true,
// //         theme: 'dark',
// //       });
// //       navigate('/before-diving-in'); // Signup ke baad yeh page
// //     } catch (err) {
// //       toast.error('⚠️ A ripple in the psyche realm. Signup failed—please try again.', {
// //         position: 'top-right',
// //         autoClose: 3000,
// //         hideProgressBar: false,
// //         closeOnClick: true,
// //         pauseOnHover: true,
// //         draggable: true,
// //         theme: 'dark',
// //       });
// //     }
// //   };

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ duration: 0.5 }}
// //       style={{ width: '100%', maxWidth: '500px' }}
// //     >
// //       <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '30px' }}>Signup</h2>
// //       <form onSubmit={handleSubmit}>
// //         <motion.input
// //           initial={{ x: -50, opacity: 0 }}
// //           animate={{ x: 0, opacity: 1 }}
// //           transition={{ delay: 0.2 }}
// //           type="text"
// //           placeholder="Name"
// //           value={formData.name}
// //           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// //           style={{
// //             display: 'block',
// //             width: '100%',
// //             margin: '15px 0',
// //             padding: '15px',
// //             background: 'rgba(255, 255, 255, 0.1)',
// //             border: '1px solid #fff',
// //             borderRadius: '10px',
// //             color: '#fff',
// //             fontSize: '16px',
// //           }}
// //         />
// //         <motion.input
// //           initial={{ x: -50, opacity: 0 }}
// //           animate={{ x: 0, opacity: 1 }}
// //           transition={{ delay: 0.3 }}
// //           type="email"
// //           placeholder="Email"
// //           value={formData.email}
// //           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// //           style={{
// //             display: 'block',
// //             width: '100%',
// //             margin: '15px 0',
// //             padding: '15px',
// //             background: 'rgba(255, 255, 255, 0.1)',
// //             border: '1px solid #fff',
// //             borderRadius: '10px',
// //             color: '#fff',
// //             fontSize: '16px',
// //           }}
// //         />
// //         <motion.input
// //           initial={{ x: -50, opacity: 0 }}
// //           animate={{ x: 0, opacity: 1 }}
// //           transition={{ delay: 0.4 }}
// //           type="password"
// //           placeholder="Password"
// //           value={formData.password}
// //           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
// //           style={{
// //             display: 'block',
// //             width: '100%',
// //             margin: '15px 0',
// //             padding: '15px',
// //             background: 'rgba(255, 255, 255, 0.1)',
// //             border: '1px solid #fff',
// //             borderRadius: '10px',
// //             color: '#fff',
// //             fontSize: '16px',
// //           }}
// //         />
// //         <motion.button
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //           type="submit"
// //           style={{
// //             width: '100%',
// //             padding: '15px',
// //             background: '#e94560',
// //             border: 'none',
// //             borderRadius: '50px',
// //             color: '#fff',
// //             cursor: 'pointer',
// //             marginTop: '20px',
// //             fontSize: '18px',
// //           }}
// //         >
// //           Signup
// //         </motion.button>
// //       </form>
// //     </motion.div>
// //   );
// // }

// // export default Signup;

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { toast } from 'react-toastify';
// import axiosInstance from '../utils/axiosInstance.js';

// function Signup() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.name.trim()) {
//       toast.error('🌀 A psyche without a name? Please provide your name.', {
//         position: 'top-right',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: 'dark',
//       });
//       return;
//     }
//     if (!formData.email.trim()) {
//       toast.error('🌀 We need your email to connect your psyche.', {
//         position: 'top-right',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: 'dark',
//       });
//       return;
//     }
//     if (!formData.password.trim()) {
//       toast.error('🌀 Secure your journey with a password.', {
//         position: 'top-right',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: 'dark',
//       });
//       return;
//     }

//     try {
//       const res = await axiosInstance.post('/auth/signup', formData);
//       localStorage.setItem('token', res.data.token);
//       toast.success('🌟 Welcome to The Psyche! Your journey begins.', {
//         position: 'top-right',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: 'dark',
//       });
//       navigate('/before-diving-in');
//     } catch (err) {
//       toast.error('⚠️ Signup failed. Please try again.', {
//         position: 'top-right',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: 'dark',
//       });
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//       style={{
//         width: '100%',
//         maxWidth: '450px',
//         margin: '0 auto',
//         padding: '40px 30px',
//         background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
//         backdropFilter: 'blur(15px)',
//         borderRadius: '20px',
//         boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), 0 0 50px rgba(233, 69, 96, 0.1)',
//         border: '1px solid rgba(255, 255, 255, 0.2)',
//       }}
//     >
//       <h2
//         style={{
//           fontSize: '36px',
//           fontWeight: '700',
//           textAlign: 'center',
//           color: '#fff',
//           marginBottom: '40px',
//           textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
//           letterSpacing: '1px',
//         }}
//       >
//         Join The Psyche
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <motion.input
//           initial={{ x: -30, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           type="text"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           style={{
//             display: 'block',
//             width: '100%',
//             padding: '14px 20px',
//             marginBottom: '20px',
//             background: 'rgba(255, 255, 255, 0.1)',
//             border: '1px solid rgba(255, 255, 255, 0.3)',
//             borderRadius: '12px',
//             color: '#fff',
//             fontSize: '16px',
//             fontFamily: 'Arial, sans-serif',
//             outline: 'none',
//             transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
//           }}
//           onFocus={(e) => (e.target.style.borderColor = '#e94560', e.target.style.boxShadow = '0 0 10px rgba(233, 69, 96, 0.5)')}
//           onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)', e.target.style.boxShadow = 'none')}
//         />
//         <motion.input
//           initial={{ x: -30, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           type="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           style={{
//             display: 'block',
//             width: '100%',
//             padding: '14px 20px',
//             marginBottom: '20px',
//             background: 'rgba(255, 255, 255, 0.1)',
//             border: '1px solid rgba(255, 255, 255, 0.3)',
//             borderRadius: '12px',
//             color: '#fff',
//             fontSize: '16px',
//             fontFamily: 'Arial, sans-serif',
//             outline: 'none',
//             transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
//           }}
//           onFocus={(e) => (e.target.style.borderColor = '#e94560', e.target.style.boxShadow = '0 0 10px rgba(233, 69, 96, 0.5)')}
//           onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)', e.target.style.boxShadow = 'none')}
//         />
//         <motion.input
//           initial={{ x: -30, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           type="password"
//           placeholder="Create Password"
//           value={formData.password}
//           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//           style={{
//             display: 'block',
//             width: '100%',
//             padding: '14px 20px',
//             marginBottom: '30px',
//             background: 'rgba(255, 255, 255, 0.1)',
//             border: '1px solid rgba(255, 255, 255, 0.3)',
//             borderRadius: '12px',
//             color: '#fff',
//             fontSize: '16px',
//             fontFamily: 'Arial, sans-serif',
//             outline: 'none',
//             transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
//           }}
//           onFocus={(e) => (e.target.style.borderColor = '#e94560', e.target.style.boxShadow = '0 0 10px rgba(233, 69, 96, 0.5)')}
//           onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)', e.target.style.boxShadow = 'none')}
//         />
//         <motion.button
//           whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(233, 69, 96, 0.4)' }}
//           whileTap={{ scale: 0.95 }}
//           type="submit"
//           style={{
//             width: '100%',
//             padding: '16px',
//             background: 'linear-gradient(135deg, #e94560, #ff6f91)',
//             border: 'none',
//             borderRadius: '50px',
//             color: '#fff',
//             fontSize: '18px',
//             fontWeight: '600',
//             cursor: 'pointer',
//             boxShadow: '0 4px 15px rgba(233, 69, 96, 0.3)',
//             transition: 'all 0.3s ease',
//           }}
//         >
//           Start Your Journey
//         </motion.button>
//       </form>
//       <p
//         style={{
//           textAlign: 'center',
//           color: '#e0e0e0',
//           fontSize: '14px',
//           marginTop: '20px',
//         }}
//       >
//         Already a member?{' '}
//         <span
//           onClick={() => navigate('/login')}
//           style={{ color: '#e94560', cursor: 'pointer', textDecoration: 'underline' }}
//         >
//           Log In
//         </span>
//       </p>
//     </motion.div>
//   );
// }

// export default Signup;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import axiosInstance from '../utils/axiosInstance.js';

function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error('🌀 A psyche without a name? Please provide your name.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
      return;
    }
    if (!formData.email.trim()) {
      toast.error('🌀 We need your email to connect your psyche.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
      return;
    }
    if (!formData.password.trim()) {
      toast.error('🌀 Secure your journey with a password.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
      return;
    }

    try {
      const res = await axiosInstance.post('/auth/signup', formData);
      localStorage.setItem('token', res.data.token);
      toast.success('🌟 Welcome to The Psyche! Your journey begins.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
      navigate('/before-diving-in');
    } catch (err) {
      toast.error('⚠️ Signup failed. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        width: '100%',
        maxWidth: '400px', // Reduced width for better containment
        margin: '0 auto',
        padding: '30px',
        background: 'rgba(20, 20, 30, 0.95)', // Solid dark base with slight transparency
        borderRadius: '16px',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5), 0 0 40px rgba(233, 69, 96, 0.05)', // Subtle glow
        border: '1px solid rgba(233, 69, 96, 0.2)', // Brand color border
      }}
    >
      <h2
        style={{
          fontSize: '32px',
          fontWeight: '700',
          textAlign: 'center',
          color: '#fff',
          marginBottom: '30px',
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
          letterSpacing: '0.5px',
        }}
      >
        Join The Psyche
      </h2>
      <form onSubmit={handleSubmit}>
        <motion.input
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{
            width: '100%',
            padding: '12px 16px',
            marginBottom: '15px',
            background: 'rgba(40, 40, 50, 0.8)', // Darker input background
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '15px',
            fontFamily: 'Arial, sans-serif',
            outline: 'none',
            boxSizing: 'border-box', // Ensures padding stays inside
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#e94560', e.target.style.boxShadow = '0 0 8px rgba(233, 69, 96, 0.4)')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)', e.target.style.boxShadow = 'none')}
        />
        <motion.input
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{
            width: '100%',
            padding: '12px 16px',
            marginBottom: '15px',
            background: 'rgba(40, 40, 50, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '15px',
            fontFamily: 'Arial, sans-serif',
            outline: 'none',
            boxSizing: 'border-box',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#e94560', e.target.style.boxShadow = '0 0 8px rgba(233, 69, 96, 0.4)')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)', e.target.style.boxShadow = 'none')}
        />
        <motion.input
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          type="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          style={{
            width: '100%',
            padding: '12px 16px',
            marginBottom: '25px',
            background: 'rgba(40, 40, 50, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '15px',
            fontFamily: 'Arial, sans-serif',
            outline: 'none',
            boxSizing: 'border-box',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#e94560', e.target.style.boxShadow = '0 0 8px rgba(233, 69, 96, 0.4)')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)', e.target.style.boxShadow = 'none')}
        />
        <motion.button
          whileHover={{ scale: 1.03, boxShadow: '0 6px 20px rgba(233, 69, 96, 0.4)' }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          style={{
            width: '100%',
            padding: '14px',
            background: 'linear-gradient(135deg, #e94560, #ff6f91)',
            border: 'none',
            borderRadius: '10px',
            color: '#fff',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(233, 69, 96, 0.3)',
            transition: 'all 0.3s ease',
          }}
        >
          Start Your Journey
        </motion.button>
      </form>
      <p
        style={{
          textAlign: 'center',
          color: '#e0e0e0',
          fontSize: '13px',
          marginTop: '20px',
        }}
      >
        Already a member?{' '}
        <span
          onClick={() => navigate('/login')}
          style={{ color: '#e94560', cursor: 'pointer', textDecoration: 'underline' }}
        >
          Log In
        </span>
      </p>
    </motion.div>
  );
}

export default Signup;