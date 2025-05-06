// // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // import { motion } from 'framer-motion';

// // // // // // // function Navbar() {
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const isAuthenticated = !!localStorage.getItem('token');

// // // // // // //   const handleLogout = () => {
// // // // // // //     localStorage.removeItem('token');
// // // // // // //     navigate('/login');
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <motion.nav
// // // // // // //       initial={{ y: -50 }}
// // // // // // //       animate={{ y: 0 }}
// // // // // // //       transition={{ duration: 0.5 }}
// // // // // // //       style={{
// // // // // // //         background: 'rgba(15, 52, 96, 0.9)',
// // // // // // //         backdropFilter: 'blur(10px)',
// // // // // // //         padding: '20px',
// // // // // // //         display: 'flex',
// // // // // // //         justifyContent: 'space-between',
// // // // // // //         alignItems: 'center',
// // // // // // //         color: '#fff',
// // // // // // //         position: 'sticky',
// // // // // // //         top: 0,
// // // // // // //         zIndex: 100,
// // // // // // //       }}
// // // // // // //     >
// // // // // // //       <motion.h2
// // // // // // //         whileHover={{ scale: 1.05 }}
// // // // // // //         style={{ cursor: 'pointer', fontSize: '24px', fontWeight: 'bold' }}
// // // // // // //         onClick={() => navigate('/')}
// // // // // // //       >
// // // // // // //         The Psyche
// // // // // // //       </motion.h2>
// // // // // // //       <div>
// // // // // // //         {isAuthenticated ? (
// // // // // // //           <>
// // // // // // //             <motion.button
// // // // // // //               whileHover={{ scale: 1.05 }}
// // // // // // //               whileTap={{ scale: 0.95 }}
// // // // // // //               style={{
// // // // // // //                 marginLeft: '10px',
// // // // // // //                 padding: '10px 20px',
// // // // // // //                 background: 'transparent',
// // // // // // //                 border: '1px solid #fff',
// // // // // // //                 borderRadius: '50px',
// // // // // // //                 color: '#fff',
// // // // // // //                 cursor: 'pointer',
// // // // // // //               }}
// // // // // // //               onClick={() => navigate('/profile')}
// // // // // // //             >
// // // // // // //               Profile
// // // // // // //             </motion.button>
// // // // // // //             <motion.button
// // // // // // //               whileHover={{ scale: 1.05 }}
// // // // // // //               whileTap={{ scale: 0.95 }}
// // // // // // //               style={{
// // // // // // //                 marginLeft: '10px',
// // // // // // //                 padding: '10px 20px',
// // // // // // //                 background: '#e94560',
// // // // // // //                 border: 'none',
// // // // // // //                 borderRadius: '50px',
// // // // // // //                 color: '#fff',
// // // // // // //                 cursor: 'pointer',
// // // // // // //               }}
// // // // // // //               onClick={handleLogout}
// // // // // // //             >
// // // // // // //               Logout
// // // // // // //             </motion.button>
// // // // // // //           </>
// // // // // // //         ) : (
// // // // // // //           <>
// // // // // // //             <motion.button
// // // // // // //               whileHover={{ scale: 1.05 }}
// // // // // // //               whileTap={{ scale: 0.95 }}
// // // // // // //               style={{
// // // // // // //                 marginLeft: '10px',
// // // // // // //                 padding: '10px 20px',
// // // // // // //                 background: 'transparent',
// // // // // // //                 border: '1px solid #fff',
// // // // // // //                 borderRadius: '50px',
// // // // // // //                 color: '#fff',
// // // // // // //                 cursor: 'pointer',
// // // // // // //               }}
// // // // // // //               onClick={() => navigate('/signup')}
// // // // // // //             >
// // // // // // //               Signup
// // // // // // //             </motion.button>
// // // // // // //             <motion.button
// // // // // // //               whileHover={{ scale: 1.05 }}
// // // // // // //               whileTap={{ scale: 0.95 }}
// // // // // // //               style={{
// // // // // // //                 marginLeft: '10px',
// // // // // // //                 padding: '10px 20px',
// // // // // // //                 background: 'transparent',
// // // // // // //                 border: '1px solid #fff',
// // // // // // //                 borderRadius: '50px',
// // // // // // //                 color: '#fff',
// // // // // // //                 cursor: 'pointer',
// // // // // // //               }}
// // // // // // //               onClick={() => navigate('/login')}
// // // // // // //             >
// // // // // // //               Login
// // // // // // //             </motion.button>
// // // // // // //           </>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </motion.nav>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default Navbar;

// // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // import { motion } from 'framer-motion';

// // // // // // function Navbar() {
// // // // // //   const navigate = useNavigate();
// // // // // //   const token = localStorage.getItem('token');

// // // // // //   const handleLogout = () => {
// // // // // //     localStorage.removeItem('token');
// // // // // //     navigate('/login');
// // // // // //   };

// // // // // //   return (
// // // // // //     <motion.nav
// // // // // //       initial={{ opacity: 0 }}
// // // // // //       animate={{ opacity: 1 }}
// // // // // //       transition={{ duration: 0.5 }}
// // // // // //       style={{
// // // // // //         position: 'fixed', // Fixed position to stay at top
// // // // // //         top: 0,
// // // // // //         left: 0,
// // // // // //         width: '100%', // Full width
// // // // // //         height: '40px',
// // // // // //         padding: '20px',
// // // // // //         background: 'rgba(0, 0, 0, 0.5)', // Glassmorphism effect
// // // // // //         backdropFilter: 'blur(10px)', // Blur background
// // // // // //         display: 'flex',
// // // // // //         justifyContent: 'space-between',
// // // // // //         alignItems: 'center',
// // // // // //         zIndex: 1000, // Stay above other content
// // // // // //       }}
// // // // // //     >
// // // // // //       <motion.h1
// // // // // //         whileHover={{ scale: 1.05 }}
// // // // // //         onClick={() => navigate('/')}
// // // // // //         style={{ fontSize: '24px', cursor: 'pointer' }}
// // // // // //       >
// // // // // //         The Psyche
// // // // // //       </motion.h1>
// // // // // //       <div>
// // // // // //         {token ? (
// // // // // //           <>
// // // // // //             <motion.button
// // // // // //               whileHover={{ scale: 1.05 }}
// // // // // //               whileTap={{ scale: 0.95 }}
// // // // // //               onClick={() => navigate('/profile')}
// // // // // //               style={{
// // // // // //                 marginRight: '20px',
// // // // // //                 padding: '10px 20px',
// // // // // //                 background: 'none',
// // // // // //                 border: '1px solid #fff',
// // // // // //                 borderRadius: '50px',
// // // // // //                 color: '#fff',
// // // // // //                 cursor: 'pointer',
// // // // // //               }}
// // // // // //             >
// // // // // //               Profile
// // // // // //             </motion.button>
// // // // // //             <motion.button
// // // // // //               whileHover={{ scale: 1.05 }}
// // // // // //               whileTap={{ scale: 0.95 }}
// // // // // //               onClick={handleLogout}
// // // // // //               style={{
// // // // // //                 padding: '10px 20px',
// // // // // //                 background: '#e94560',
// // // // // //                 border: 'none',
// // // // // //                 borderRadius: '50px',
// // // // // //                 marginRight: '50px',
// // // // // //                 color: '#fff',
// // // // // //                 cursor: 'pointer',
// // // // // //               }}
// // // // // //             >
// // // // // //               Logout
// // // // // //             </motion.button>
// // // // // //           </>
// // // // // //         ) : (
// // // // // //           <>
// // // // // //             <motion.button
// // // // // //               whileHover={{ scale: 1.05 }}
// // // // // //               whileTap={{ scale: 0.95 }}
// // // // // //               onClick={() => navigate('/login')}
// // // // // //               style={{
// // // // // //                 marginRight: '20px',
// // // // // //                 padding: '10px 20px',
// // // // // //                 background: 'none',
// // // // // //                 border: '1px solid #fff',
// // // // // //                 borderRadius: '30px',
// // // // // //                 color: '#fff',
// // // // // //                 cursor: 'pointer',
// // // // // //               }}
// // // // // //             >
// // // // // //               Login
// // // // // //             </motion.button>
// // // // // //             <motion.button
// // // // // //               whileHover={{ scale: 1.05 }}
// // // // // //               whileTap={{ scale: 0.95 }}
// // // // // //               onClick={() => navigate('/signup')}
// // // // // //               style={{
// // // // // //                 padding: '10px 20px',
// // // // // //                 background: '#e94560',
// // // // // //                 border: 'none',
// // // // // //                 borderRadius: '50px',
// // // // // //                 marginRight: '50px',
// // // // // //                 color: '#fff',
// // // // // //                 cursor: 'pointer',
// // // // // //               }}
// // // // // //             >
// // // // // //               Signup
// // // // // //             </motion.button>
// // // // // //           </>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </motion.nav>
// // // // // //   );
// // // // // // }

// // // // // // export default Navbar;

// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import { motion } from 'framer-motion';

// // // // // function Navbar() {
// // // // //   const navigate = useNavigate();
// // // // //   const token = localStorage.getItem('token');

// // // // //   const handleLogout = () => {
// // // // //     localStorage.removeItem('token');
// // // // //     navigate('/login');
// // // // //   };

// // // // //   return (
// // // // //     <motion.nav
// // // // //       initial={{ opacity: 0 }}
// // // // //       animate={{ opacity: 1 }}
// // // // //       transition={{ duration: 0.5 }}
// // // // //       style={{
// // // // //         position: 'fixed',
// // // // //         top: 0,
// // // // //         left: 0,
// // // // //         width: '100%',
// // // // //         height: '40px',
// // // // //         padding: '20px',
// // // // //         background: 'rgba(0, 0, 0, 0.5)',
// // // // //         backdropFilter: 'blur(10px)',
// // // // //         display: 'flex',
// // // // //         justifyContent: 'space-between',
// // // // //         alignItems: 'center',
// // // // //         zIndex: 1000,
// // // // //       }}
// // // // //     >
// // // // //       <motion.h1
// // // // //         whileHover={{ scale: 1.05 }}
// // // // //         onClick={() => navigate('/')}
// // // // //         style={{ fontSize: '24px', cursor: 'pointer' }}
// // // // //       >
// // // // //         The Psyche
// // // // //       </motion.h1>
// // // // //       <div style={{ display: 'flex', alignItems: 'center' }}>
// // // // //         {/* About Us Link */}
// // // // //         <motion.button
// // // // //           whileHover={{ scale: 1.05 }}
// // // // //           whileTap={{ scale: 0.95 }}
// // // // //           onClick={() => navigate('/about')}
// // // // //           style={{
// // // // //             marginRight: '20px',
// // // // //             padding: '10px 20px',
// // // // //             background: 'none',
// // // // //             border: '1px solid #fff',
// // // // //             borderRadius: '30px',
// // // // //             color: '#fff',
// // // // //             cursor: 'pointer',
// // // // //           }}
// // // // //         >
// // // // //           About Us
// // // // //         </motion.button>
// // // // //         {token ? (
// // // // //           <>
// // // // //             <motion.button
// // // // //               whileHover={{ scale: 1.05 }}
// // // // //               whileTap={{ scale: 0.95 }}
// // // // //               onClick={() => navigate('/profile')}
// // // // //               style={{
// // // // //                 marginRight: '20px',
// // // // //                 padding: '10px 20px',
// // // // //                 background: 'none',
// // // // //                 border: '1px solid #fff',
// // // // //                 borderRadius: '50px',
// // // // //                 color: '#fff',
// // // // //                 cursor: 'pointer',
// // // // //               }}
// // // // //             >
// // // // //               Profile
// // // // //             </motion.button>
// // // // //             <motion.button
// // // // //               whileHover={{ scale: 1.05 }}
// // // // //               whileTap={{ scale: 0.95 }}
// // // // //               onClick={handleLogout}
// // // // //               style={{
// // // // //                 padding: '10px 20px',
// // // // //                 background: '#e94560',
// // // // //                 border: 'none',
// // // // //                 borderRadius: '50px',
// // // // //                 marginRight: '50px',
// // // // //                 color: '#fff',
// // // // //                 cursor: 'pointer',
// // // // //               }}
// // // // //             >
// // // // //               Logout
// // // // //             </motion.button>
// // // // //           </>
// // // // //         ) : (
// // // // //           <>
// // // // //             <motion.button
// // // // //               whileHover={{ scale: 1.05 }}
// // // // //               whileTap={{ scale: 0.95 }}
// // // // //               onClick={() => navigate('/login')}
// // // // //               style={{
// // // // //                 marginRight: '20px',
// // // // //                 padding: '10px 20px',
// // // // //                 background: 'none',
// // // // //                 border: '1px solid #fff',
// // // // //                 borderRadius: '30px',
// // // // //                 color: '#fff',
// // // // //                 cursor: 'pointer',
// // // // //               }}
// // // // //             >
// // // // //               Login
// // // // //             </motion.button>
// // // // //             <motion.button
// // // // //               whileHover={{ scale: 1.05 }}
// // // // //               whileTap={{ scale: 0.95 }}
// // // // //               onClick={() => navigate('/signup')}
// // // // //               style={{
// // // // //                 padding: '10px 20px',
// // // // //                 background: '#e94560',
// // // // //                 border: 'none',
// // // // //                 borderRadius: '50px',
// // // // //                 marginRight: '50px',
// // // // //                 color: '#fff',
// // // // //                 cursor: 'pointer',
// // // // //               }}
// // // // //             >
// // // // //               Signup
// // // // //             </motion.button>
// // // // //           </>
// // // // //         )}
// // // // //       </div>
// // // // //     </motion.nav>
// // // // //   );
// // // // // }

// // // // // export default Navbar;

// // // // import { useNavigate } from 'react-router-dom';
// // // // import { motion } from 'framer-motion';

// // // // function Navbar() {
// // // //   const navigate = useNavigate();
// // // //   const token = localStorage.getItem('token');

// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem('token');
// // // //     navigate('/login');
// // // //   };

// // // //   return (
// // // //     <motion.nav
// // // //       initial={{ opacity: 0 }}
// // // //       animate={{ opacity: 1 }}
// // // //       transition={{ duration: 0.5 }}
// // // //       style={{
// // // //         position: 'fixed',
// // // //         top: 0,
// // // //         left: 0,
// // // //         width: '100%',
// // // //         height: '40px',
// // // //         padding: '20px',
// // // //         background: 'rgba(0, 0, 0, 0.5)',
// // // //         backdropFilter: 'blur(10px)',
// // // //         display: 'flex',
// // // //         justifyContent: 'space-between',
// // // //         alignItems: 'center',
// // // //         zIndex: 1000,
// // // //       }}
// // // //     >
// // // //       <motion.h1
// // // //         whileHover={{ scale: 1.05 }}
// // // //         onClick={() => navigate('/')}
// // // //         style={{ fontSize: '24px', cursor: 'pointer' }}
// // // //       >
// // // //         The Psyche
// // // //       </motion.h1>
// // // //       <div style={{ display: 'flex', alignItems: 'center' }}>
// // // //         {/* About Us Link */}
// // // //         <motion.button
// // // //           whileHover={{ scale: 1.05 }}
// // // //           whileTap={{ scale: 0.95 }}
// // // //           onClick={() => navigate('/about')}
// // // //           style={{
// // // //             marginRight: '20px',
// // // //             padding: '10px 20px',
// // // //             background: 'none',
// // // //             border: '1px solid #fff',
// // // //             borderRadius: '30px',
// // // //             color: '#fff',
// // // //             cursor: 'pointer',
// // // //           }}
// // // //         >
// // // //           About Us
// // // //         </motion.button>
// // // //         {/* Contact Us Link */}
// // // //         <motion.button
// // // //           whileHover={{ scale: 1.05 }}
// // // //           whileTap={{ scale: 0.95 }}
// // // //           onClick={() => navigate('/contact-us')}
// // // //           style={{
// // // //             marginRight: '20px',
// // // //             padding: '10px 20px',
// // // //             background: 'none',
// // // //             border: '1px solid #fff',
// // // //             borderRadius: '30px',
// // // //             color: '#fff',
// // // //             cursor: 'pointer',
// // // //           }}
// // // //         >
// // // //           Contact Us
// // // //         </motion.button>
// // // //         {token ? (
// // // //           <>
// // // //             <motion.button
// // // //               whileHover={{ scale: 1.05 }}
// // // //               whileTap={{ scale: 0.95 }}
// // // //               onClick={() => navigate('/profile')}
// // // //               style={{
// // // //                 marginRight: '20px',
// // // //                 padding: '10px 20px',
// // // //                 background: 'none',
// // // //                 border: '1px solid #fff',
// // // //                 borderRadius: '50px',
// // // //                 color: '#fff',
// // // //                 cursor: 'pointer',
// // // //               }}
// // // //             >
// // // //               Profile
// // // //             </motion.button>
// // // //             <motion.button
// // // //               whileHover={{ scale: 1.05 }}
// // // //               whileTap={{ scale: 0.95 }}
// // // //               onClick={handleLogout}
// // // //               style={{
// // // //                 padding: '10px 20px',
// // // //                 background: '#e94560',
// // // //                 border: 'none',
// // // //                 borderRadius: '50px',
// // // //                 marginRight: '50px',
// // // //                 color: '#fff',
// // // //                 cursor: 'pointer',
// // // //               }}
// // // //             >
// // // //               Logout
// // // //             </motion.button>
// // // //           </>
// // // //         ) : (
// // // //           <>
// // // //             <motion.button
// // // //               whileHover={{ scale: 1.05 }}
// // // //               whileTap={{ scale: 0.95 }}
// // // //               onClick={() => navigate('/login')}
// // // //               style={{
// // // //                 marginRight: '20px',
// // // //                 padding: '10px 20px',
// // // //                 background: 'none',
// // // //                 border: '1px solid #fff',
// // // //                 borderRadius: '30px',
// // // //                 color: '#fff',
// // // //                 cursor: 'pointer',
// // // //               }}
// // // //             >
// // // //               Login
// // // //             </motion.button>
// // // //             <motion.button
// // // //               whileHover={{ scale: 1.05 }}
// // // //               whileTap={{ scale: 0.95 }}
// // // //               onClick={() => navigate('/signup')}
// // // //               style={{
// // // //                 padding: '10px 20px',
// // // //                 background: '#e94560',
// // // //                 border: 'none',
// // // //                 borderRadius: '50px',
// // // //                 marginRight: '50px',
// // // //                 color: '#fff',
// // // //                 cursor: 'pointer',
// // // //               }}
// // // //             >
// // // //               Signup
// // // //             </motion.button>
// // // //           </>
// // // //         )}
// // // //       </div>
// // // //     </motion.nav>
// // // //   );
// // // // }

// // // // export default Navbar;

// // // import { useNavigate } from 'react-router-dom';
// // // import { motion } from 'framer-motion';

// // // function Navbar() {
// // //   const navigate = useNavigate();
// // //   const token = localStorage.getItem('token');

// // //   const handleLogout = () => {
// // //     localStorage.removeItem('token');
// // //     navigate('/login');
// // //   };

// // //   return (
// // //     <motion.nav
// // //       initial={{ opacity: 0 }}
// // //       animate={{ opacity: 1 }}
// // //       transition={{ duration: 0.5 }}
// // //       style={{
// // //         position: 'fixed',
// // //         top: 0,
// // //         left: 0,
// // //         width: '100%',
// // //         height: '40px',
// // //         padding: '20px',
// // //         background: 'rgba(0, 0, 0, 0.5)',
// // //         backdropFilter: 'blur(10px)',
// // //         display: 'flex',
// // //         justifyContent: 'space-between',
// // //         alignItems: 'center',
// // //         zIndex: 1000,
// // //       }}
// // //     >
// // //       <motion.h1
// // //         whileHover={{ scale: 1.05 }}
// // //         onClick={() => navigate('/')}
// // //         style={{ fontSize: '24px', cursor: 'pointer' }}
// // //       >
// // //         The Psyche
// // //       </motion.h1>
// // //       <div style={{ display: 'flex', alignItems: 'center' }}>
// // //         {/* About Us Link */}
// // //         <motion.button
// // //           whileHover={{ scale: 1.05 }}
// // //           whileTap={{ scale: 0.95 }}
// // //           onClick={() => navigate('/about')}
// // //           style={{
// // //             marginRight: '20px',
// // //             padding: '10px 20px',
// // //             background: 'none',
// // //             border: '1px solid #fff',
// // //             borderRadius: '30px',
// // //             color: '#fff',
// // //             cursor: 'pointer',
// // //           }}
// // //         >
// // //           About Us
// // //         </motion.button>
// // //         {/* Contact Us Link */}
// // //         <motion.button
// // //           whileHover={{ scale: 1.05 }}
// // //           whileTap={{ scale: 0.95 }}
// // //           onClick={() => navigate('/contact-us')}
// // //           style={{
// // //             marginRight: '20px',
// // //             padding: '10px 20px',
// // //             background: 'none',
// // //             border: '1px solid #fff',
// // //             borderRadius: '30px',
// // //             color: '#fff',
// // //             cursor: 'pointer',
// // //           }}
// // //         >
// // //           Contact Us
// // //         </motion.button>
// // //         {token ? (
// // //           <>
// // //             <motion.button
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               onClick={() => navigate('/profile')}
// // //               style={{
// // //                 marginRight: '20px',
// // //                 padding: '10px 20px',
// // //                 background: 'none',
// // //                 border: '1px solid #fff',
// // //                 borderRadius: '50px',
// // //                 color: '#fff',
// // //                 cursor: 'pointer',
// // //               }}
// // //             >
// // //               Profile
// // //             </motion.button>
// // //             <motion.button
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               onClick={handleLogout}
// // //               style={{
// // //                 padding: '10px 20px',
// // //                 background: '#e94560',
// // //                 border: 'none',
// // //                 borderRadius: '50px',
// // //                 marginRight: '50px',
// // //                 color: '#fff',
// // //                 cursor: 'pointer',
// // //               }}
// // //             >
// // //               Logout
// // //             </motion.button>
// // //           </>
// // //         ) : (
// // //           <>
// // //             <motion.button
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               onClick={() => navigate('/login')}
// // //               style={{
// // //                 marginRight: '20px',
// // //                 padding: '10px 20px',
// // //                 background: 'none',
// // //                 border: '1px solid #fff',
// // //                 borderRadius: '30px',
// // //                 color: '#fff',
// // //                 cursor: 'pointer',
// // //               }}
// // //             >
// // //               Login
// // //             </motion.button>
// // //             <motion.button
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               onClick={() => navigate('/signup')}
// // //               style={{
// // //                 padding: '10px 20px',
// // //                 background: '#e94560',
// // //                 border: 'none',
// // //                 borderRadius: '50px',
// // //                 marginRight: '50px',
// // //                 color: '#fff',
// // //                 cursor: 'pointer',
// // //               }}
// // //             >
// // //               Signup
// // //             </motion.button>
// // //           </>
// // //         )}
// // //       </div>
// // //     </motion.nav>
// // //   );
// // // }

// // // export default Navbar;


// // import { useNavigate } from 'react-router-dom';
// // import { motion } from 'framer-motion';

// // function Navbar() {
// //   const navigate = useNavigate();
// //   const token = localStorage.getItem('token');

// //   const handleLogout = () => {
// //     localStorage.removeItem('token');
// //     navigate('/login');
// //   };

// //   return (
// //     <motion.nav
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ duration: 0.5 }}
// //       style={{
// //         position: 'fixed',
// //         top: 0,
// //         left: 0,
// //         width: '100%',
// //         height: '40px',
// //         padding: '20px',
// //         background: 'rgba(0, 0, 0, 0.5)',
// //         backdropFilter: 'blur(10px)',
// //         display: 'flex',
// //         justifyContent: 'space-between',
// //         alignItems: 'center',
// //         zIndex: 1000,
// //       }}
// //     >
// //       <motion.h1
// //         whileHover={{ scale: 1.05 }}
// //         onClick={() => navigate('/')}
// //         style={{ fontSize: '24px', cursor: 'pointer' }}
// //       >
// //         The Psyche
// //       </motion.h1>
// //       <div style={{ display: 'flex', alignItems: 'center' }}>
// //         {/* About Us Link */}
// //         <motion.button
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //           onClick={() => navigate('/about')}
// //           style={{
// //             marginRight: '20px',
// //             padding: '10px 20px',
// //             background: 'none',
// //             border: '1px solid #fff',
// //             borderRadius: '30px',
// //             color: '#fff',
// //             cursor: 'pointer',
// //           }}
// //         >
// //           About Us
// //         </motion.button>
// //         {/* Contact Us Link */}
// //         <motion.button
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //           onClick={() => navigate('/contact-us')}
// //           style={{
// //             marginRight: '20px',
// //             padding: '10px 20px',
// //             background: 'none',
// //             border: '1px solid #fff',
// //             borderRadius: '30px',
// //             color: '#fff',
// //             cursor: 'pointer',
// //           }}
// //         >
// //           Contact Us
// //         </motion.button>
// //         {token ? (
// //           <>
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               onClick={() => navigate('/profile')}
// //               style={{
// //                 marginRight: '20px',
// //                 padding: '10px 20px',
// //                 background: 'none',
// //                 border: '1px solid #fff',
// //                 borderRadius: '50px',
// //                 color: '#fff',
// //                 cursor: 'pointer',
// //               }}
// //             >
// //               Profile
// //             </motion.button>
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               onClick={handleLogout}
// //               style={{
// //                 padding: '10px 20px',
// //                 background: '#e94560',
// //                 border: 'none',
// //                 borderRadius: '50px',
// //                 marginRight: '50px',
// //                 color: '#fff',
// //                 cursor: 'pointer',
// //               }}
// //             >
// //               Logout
// //             </motion.button>
// //           </>
// //         ) : (
// //           <>
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               onClick={() => navigate('/login')}
// //               style={{
// //                 marginRight: '20px',
// //                 padding: '10px 20px',
// //                 background: 'none',
// //                 border: '1px solid #fff',
// //                 borderRadius: '30px',
// //                 color: '#fff',
// //                 cursor: 'pointer',
// //               }}
// //             >
// //               Login
// //             </motion.button>
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               onClick={() => navigate('/signup')}
// //               style={{
// //                 padding: '10px 20px',
// //                 background: '#e94560',
// //                 border: 'none',
// //                 borderRadius: '50px',
// //                 marginRight: '50px',
// //                 color: '#fff',
// //                 cursor: 'pointer',
// //               }}
// //             >
// //               Signup
// //             </motion.button>
// //           </>
// //         )}
// //       </div>
// //     </motion.nav>
// //   );
// // }

// // export default Navbar;

// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// function Navbar() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <motion.nav
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '40px',
//         padding: '20px',
//         background: 'rgba(0, 0, 0, 0.5)',
//         backdropFilter: 'blur(10px)',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         zIndex: 1000,
//       }}
//     >
//       <motion.h1
//         whileHover={{ scale: 1.05 }}
//         onClick={() => navigate('/')}
//         style={{ fontSize: '24px', cursor: 'pointer' }}
//       >
//         The Psyche
//       </motion.h1>
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         {/* About Us Link */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => navigate('/about')}
//           style={{
//             marginRight: '20px',
//             padding: '10px 20px',
//             background: 'none',
//             border: '1px solid #fff',
//             borderRadius: '30px',
//             color: '#fff',
//             cursor: 'pointer',
//           }}
//         >
//           About Us
//         </motion.button>
//         {/* Contact Us Link */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => navigate('/contact-us')}
//           style={{
//             marginRight: '20px',
//             padding: '10px 20px',
//             background: 'none',
//             border: '1px solid #fff',
//             borderRadius: '30px',
//             color: '#fff',
//             cursor: 'pointer',
//           }}
//         >
//           Contact Us
//         </motion.button>
//         {/* Journal Link */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => navigate('/journal')}
//           style={{
//             marginRight: '20px',
//             padding: '10px 20px',
//             background: 'none',
//             border: '1px solid #fff',
//             borderRadius: '30px',
//             color: '#fff',
//             cursor: 'pointer',
//           }}
//         >
//           Journal
//         </motion.button>
//         {token ? (
//           <>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => navigate('/profile')}
//               style={{
//                 marginRight: '20px',
//                 padding: '10px 20px',
//                 background: 'none',
//                 border: '1px solid #fff',
//                 borderRadius: '50px',
//                 color: '#fff',
//                 cursor: 'pointer',
//               }}
//             >
//               Profile
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleLogout}
//               style={{
//                 padding: '10px 20px',
//                 background: '#e94560',
//                 border: 'none',
//                 borderRadius: '50px',
//                 marginRight: '50px',
//                 color: '#fff',
//                 cursor: 'pointer',
//               }}
//             >
//               Logout
//             </motion.button>
//           </>
//         ) : (
//           <>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => navigate('/login')}
//               style={{
//                 marginRight: '20px',
//                 padding: '10px 20px',
//                 background: 'none',
//                 border: '1px solid #fff',
//                 borderRadius: '30px',
//                 color: '#fff',
//                 cursor: 'pointer',
//               }}
//             >
//               Login
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => navigate('/signup')}
//               style={{
//                 padding: '10px 20px',
//                 background: '#e94560',
//                 border: 'none',
//                 borderRadius: '50px',
//                 marginRight: '50px',
//                 color: '#fff',
//                 cursor: 'pointer',
//               }}
//             >
//               Signup
//             </motion.button>
//           </>
//         )}
//       </div>
//     </motion.nav>
//   );
// }

// export default Navbar;

// src/components/Navbar.jsx
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '40px',
        padding: '20px',
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <motion.h1
        whileHover={{ scale: 1.05 }}
        onClick={() => navigate('/')}
        style={{ fontSize: '24px', cursor: 'pointer' }}
      >
        The Psyche
      </motion.h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* About Us Link */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/about')}
          style={{
            marginRight: '20px',
            padding: '10px 20px',
            background: 'none',
            border: '1px solid #fff',
            borderRadius: '30px',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          About Us
        </motion.button>
        {/* Contact Us Link */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/contact-us')}
          style={{
            marginRight: '20px',
            padding: '10px 20px',
            background: 'none',
            border: '1px solid #fff',
            borderRadius: '30px',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Contact Us
        </motion.button>
        {/* Journal Link */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/journal')}
          style={{
            marginRight: '20px',
            padding: '10px 20px',
            background: 'none',
            border: '1px solid #fff',
            borderRadius: '30px',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Journal
        </motion.button>
        {/* Psyche AI Link - New */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/psyche-ai')}
          style={{
            marginRight: '20px',
            padding: '10px 20px',
            background: 'none',
            border: '1px solid #fff',
            borderRadius: '30px',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Psyche AI
        </motion.button>
        {token ? (
          <>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/profile')}
              style={{
                marginRight: '20px',
                padding: '10px 20px',
                background: 'none',
                border: '1px solid #fff',
                borderRadius: '50px',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              Profile
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              style={{
                padding: '10px 20px',
                background: '#e94560',
                border: 'none',
                borderRadius: '50px',
                marginRight: '50px',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              Logout
            </motion.button>
          </>
        ) : (
          <>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/login')}
              style={{
                marginRight: '20px',
                padding: '10px 20px',
                background: 'none',
                border: '1px solid #fff',
                borderRadius: '30px',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/signup')}
              style={{
                padding: '10px 20px',
                background: '#e94560',
                border: 'none',
                borderRadius: '50px',
                marginRight: '50px',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              Signup
            </motion.button>
          </>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;