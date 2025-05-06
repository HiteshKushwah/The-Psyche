// // import { useNavigate } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import { FaArrowLeft, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
// // import bgImage from '../assets/pexels-simon73-1323550.jpg'; // Same background as other pages

// // function ContactUs() {
// //   const navigate = useNavigate();

// //   return (
// //     <div
// //       style={{
// //         display: 'flex',
// //         flexDirection: 'column',
// //         minHeight: '100vh',
// //       }}
// //     >
// //       <div
// //         style={{
// //           flex: '1 0 auto',
// //           background: `url(${bgImage}) no-repeat center center/cover`,
// //           color: '#fff',
// //           display: 'flex',
// //           flexDirection: 'column',
// //           alignItems: 'center',
// //           padding: '80px 20px',
// //           boxSizing: 'border-box',
// //           fontFamily: "'Poppins', sans-serif",
// //         }}
// //       >
// //         {/* Back Arrow */}
// //         <motion.div
// //           whileHover={{ scale: 1.1 }}
// //           onClick={() => navigate('/')}
// //           style={{
// //             position: 'absolute',
// //             top: '80px',
// //             left: '30px',
// //             cursor: 'pointer',
// //             display: 'flex',
// //             alignItems: 'center',
// //             gap: '10px',
// //           }}
// //         >
// //           <FaArrowLeft size={24} color="#e94560" />
// //           <span style={{ fontSize: '18px', color: '#e94560' }}>Back to Home</span>
// //         </motion.div>

// //         {/* Contact Us Content */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           style={{
// //             maxWidth: '800px',
// //             textAlign: 'center',
// //             padding: '40px',
// //             background: 'rgba(255, 255, 255, 0.1)',
// //             borderRadius: '20px',
// //             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// //             border: '1px solid rgba(255, 255, 255, 0.25)',
// //           }}
// //         >
// //           <h1
// //             style={{
// //               fontSize: '40px',
// //               fontWeight: '700',
// //               marginBottom: '20px',
// //               color: '#fff',
// //               textTransform: 'uppercase',
// //               letterSpacing: '2px',
// //             }}
// //           >
// //             Contact The Psyche
// //           </h1>

// //           {/* Branding & Tagline */}
// //           <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px' }}>
// //             The Psyche
// //           </h3>
// //           <p
// //             style={{
// //               fontSize: '18px',
// //               fontStyle: 'italic',
// //               color: '#e94560',
// //               marginBottom: '20px',
// //             }}
// //           >
// //             The journey to self-discovery begins with understanding your psyche.
// //           </p>
// //           <p
// //             style={{
// //               fontSize: '16px',
// //               color: '#e0e0e0',
// //               marginBottom: '30px',
// //             }}
// //           >
// //             Inspiring 1M adults to discover themselves by 2030.
// //           </p>

// //           {/* Quick Links */}
// //           <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px' }}>
// //             Quick Links
// //           </h3>
// //           <div
// //             style={{
// //               display: 'flex',
// //               flexWrap: 'wrap',
// //               justifyContent: 'center',
// //               gap: '20px',
// //               marginBottom: '30px',
// //             }}
// //           >
// //             <a
// //               href="/"
// //               style={{
// //                 color: '#e0e0e0',
// //                 textDecoration: 'none',
// //                 fontSize: '16px',
// //                 transition: 'color 0.3s ease',
// //               }}
// //               onMouseOver={(e) => (e.target.style.color = '#e94560')}
// //               onMouseOut={(e) => (e.target.style.color = '#e0e0e0')}
// //             >
// //               Home
// //             </a>
// //             <a
// //               href="/about"
// //               style={{
// //                 color: '#e0e0e0',
// //                 textDecoration: 'none',
// //                 fontSize: '16px',
// //                 transition: 'color 0.3s ease',
// //               }}
// //               onMouseOver={(e) => (e.target.style.color = '#e94560')}
// //               onMouseOut={(e) => (e.target.style.color = '#e0e0e0')}
// //             >
// //               About
// //             </a>
// //             <a
// //               href="mailto:thepsyche@gmail.com"
// //               style={{
// //                 color: '#e0e0e0',
// //                 textDecoration: 'none',
// //                 fontSize: '16px',
// //                 transition: 'color 0.3s ease',
// //               }}
// //               onMouseOver={(e) => (e.target.style.color = '#e94560')}
// //               onMouseOut={(e) => (e.target.style.color = '#e0e0e0')}
// //             >
// //               Contact: thepsyche@gmail.com
// //             </a>
// //           </div>

// //           {/* Social Media */}
// //           <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px' }}>
// //             Follow Us
// //           </h3>
// //           <div
// //             style={{
// //               display: 'flex',
// //               justifyContent: 'center',
// //               gap: '20px',
// //               marginBottom: '30px',
// //             }}
// //           >
// //             <a
// //               href="https://linkedin.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               style={{ color: '#e0e0e0', transition: 'color 0.3s ease' }}
// //               onMouseOver={(e) => (e.target.style.color = '#e94560')}
// //               onMouseOut={(e) => (e.target.style.color = '#e0e0e0')}
// //             >
// //               <FaLinkedin size={30} />
// //             </a>
// //             <a
// //               href="https://twitter.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               style={{ color: '#e0e0e0', transition: 'color 0.3s ease' }}
// //               onMouseOver={(e) => (e.target.style.color = '#e94560')}
// //               onMouseOut={(e) => (e.target.style.color = '#e0e0e0')}
// //             >
// //               <FaTwitter size={30} />
// //             </a>
// //             <a
// //               href="https://instagram.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               style={{ color: '#e0e0e0', transition: 'color 0.3s ease' }}
// //               onMouseOver={(e) => (e.target.style.color = '#e94560')}
// //               onMouseOut={(e) => (e.target.style.color = '#e0e0e0')}
// //             >
// //               <FaInstagram size={30} />
// //             </a>
// //             <a
// //               href="https://facebook.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               style={{ color: '#e0e0e0', transition: 'color 0.3s ease' }}
// //               onMouseOver={(e) => (e.target.style.color = '#e94560')}
// //               onMouseOut={(e) => (e.target.style.color = '#e0e0e0')}
// //             >
// //               <FaFacebook size={30} />
// //             </a>
// //           </div>

// //           {/* Copyright Notice */}
// //           <p
// //             style={{
// //               fontSize: '14px',
// //               color: '#ccc',
// //               marginTop: '20px',
// //             }}
// //           >
// //             © 2025 The Psyche. All rights reserved.
// //           </p>
// //         </motion.div>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default ContactUs;

// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Footer from './Footer';
// import { FaArrowLeft, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
// import bgImage from '../assets/pexels-simon73-1323550.jpg'; // Same background as other pages

// function ContactUs() {
//   const navigate = useNavigate();

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         minHeight: '100vh',
//       }}
//     >
//       <div
//         style={{
//           flex: '1 0 auto',
//           // background: `url(${bgImage}) no-repeat center center/cover`,
//           color: '#fff',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           padding: '80px 20px',
//           boxSizing: 'border-box',
//           fontFamily: "'Poppins', sans-serif",
//         }}
//       >
//         {/* Back Arrow */}
//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           onClick={() => navigate('/')}
//           style={{
//             position: 'absolute',
//             top: '80px',
//             left: '30px',
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '10px',
//           }}
//         >
//           <FaArrowLeft size={24} color="#e94560" />
//           <span style={{ fontSize: '18px', color: '#e94560' }}>Back to Home</span>
//         </motion.div>

//         {/* Contact Us Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           style={{
//             maxWidth: '800px',
//             textAlign: 'center',
//             padding: '40px',
//             background: 'rgba(255, 255, 255, 0.1)',
//             borderRadius: '20px',
//             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
//             border: '1px solid rgba(255, 255, 255, 0.25)',
//           }}
//         >
//           <h1
//             style={{
//               fontSize: '40px',
//               fontWeight: '700',
//               marginBottom: '20px',
//               color: '#fff',
//               textTransform: 'uppercase',
//               letterSpacing: '2px',
//             }}
//           >
//             Contact The Psyche
//           </h1>

//           {/* Branding & Tagline */}
//           <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px' }}>
//             The Psyche
//           </h3>
//           <p
//             style={{
//               fontSize: '18px',
//               fontStyle: 'italic',
//               color: '#e94560',
//               marginBottom: '20px',
//             }}
//           >
//             The journey to self-discovery begins with understanding your psyche.
//           </p>
//           <p
//             style={{
//               fontSize: '16px',
//               color: '#e0e0e0',
//               marginBottom: '30px',
//             }}
//           >
//             Inspiring 1M adults to discover themselves by 2030.
//           </p>

//           {/* Quick Links */}
//           <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px' }}>
//             Quick Links
//           </h3>
//           <div
//             style={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               justifyContent: 'center',
//               gap: '20px',
//               marginBottom: '30px',
//             }}
//           >
//             <a
//               href="/"
//               style={{
//                 color: '#e0e0e0',
//                 textDecoration: 'none',
//                 fontSize: '16px',
//                 transition: 'color 0.3s ease',
//               }}
//               onMouseOver={(e) => (e.target.style.color = '#e94560')}
//               onMouseOut={(e) => (e.target.style.color = '#e0e0e0')}
//             >
//               Home
//             </a>
//             <a
//               href="/about"
//               style={{
//                 color: '#e0e0e0',
//                 textDecoration: 'none',
//                 fontSize: '16px',
//                 transition: 'color 0.3s ease',
//               }}
//               onMouseOver={(e) => (e.target.style.color = '#e94560')}
//               onMouseOut={(e) => (e.target.style.color = '#e0e0e0')}
//             >
//               About
//             </a>
//             <a
//               href="mailto:thepsyche@gmail.com"
//               style={{
//                 color: '#e0e0e0',
//                 textDecoration: 'none',
//                 fontSize: '16px',
//                 transition: 'color 0.3s ease',
//               }}
//               onMouseOver={(e) => (e.target.style.color = '#e94560')}
//               onMouseOut={(e) => (e.target.style.color = '#e0e0e0')}
//             >
//               Contact: thepsyche@gmail.com
//             </a>
//           </div>

//           {/* Social Media */}
//           <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px' }}>
//             Follow Us
//           </h3>
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               gap: '20px',
//               marginBottom: '30px',
//             }}
//           >
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: '#e0e0e0', transition: 'color 0.3s ease' }}
//               onMouseOver={(e) => (e.target.style.color = '#e94560')}
//               onMouseOut={(e) => (e.target.style.color = '#e0e0e0')}
//             >
//               <FaLinkedin size={30} />
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: '#e0e0e0', transition: 'color 0.3s ease' }}
//               onMouseOver={(e) => (e.target.style.color = '#e94560')}
//               onMouseOut={(e) => (e.target.style.color = '#e0e0e0')}
//             >
//               <FaTwitter size={30} />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: '#e0e0e0', transition: 'color 0.3s ease' }}
//               onMouseOver={(e) => (e.target.style.color = '#e94560')}
//               onMouseOut={(e) => (e.target.style.color = '#e0e0e0')}
//             >
//               <FaInstagram size={30} />
//             </a>
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: '#e0e0e0', transition: 'color 0.3s ease' }}
//               onMouseOver={(e) => (e.target.style.color = '#e94560')}
//               onMouseOut={(e) => (e.target.style.color = '#e0e0e0')}
//             >
//               <FaFacebook size={30} />
//             </a>
//           </div>

//           {/* Copyright Notice */}
//           <p
//             style={{
//               fontSize: '14px',
//               color: '#ccc',
//               marginTop: '20px',
//             }}
//           >
//             © 2025 The Psyche. All rights reserved.
//           </p>
//         </motion.div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default ContactUs;

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Social icons and back arrow
import bgImage from '../assets/pexels-simon73-1323550.jpg'; // Same background as Home.jsx and About.jsx

function ContactUs() {
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

      {/* Contact Us Content */}
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
          Contact The Psyche
        </h1>
        <p
          style={{
            fontSize: '18px',
            fontStyle: 'italic',
            color: '#e94560',
            marginBottom: '30px',
          }}
        >
          "The journey to self-discovery begins with understanding your psyche."
        </p>
        <p
          style={{
            fontSize: '16px',
            color: '#e0e0e0',
            lineHeight: '1.8',
            marginBottom: '20px',
          }}
        >
          We’re here to help you on your journey of self-discovery. Have questions, feedback, or just want to say hello? Reach out to us!
        </p>

        {/* Contact Info */}
        <h3
          style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#fff',
            marginBottom: '15px',
          }}
        >
          Get in Touch
        </h3>
        <p
          style={{
            fontSize: '16px',
            color: '#e0e0e0',
            lineHeight: '1.8',
            marginBottom: '20px',
          }}
        >
          Email: <a href="mailto:thepsyche@gmail.com" style={{ color: '#e94560', textDecoration: 'none' }}>thepsyche@gmail.com</a>
        </p>

        {/* Mission */}
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
          Inspiring 1M adults to discover themselves by 2030 for a balanced life.
        </p>

        {/* Navigation Links */}
        <h3
          style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#fff',
            marginBottom: '15px',
          }}
        >
          Explore More
        </h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            style={{
              padding: '10px 20px',
              background: 'none',
              border: '1px solid #fff',
              borderRadius: '30px',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Home
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/about')}
            style={{
              padding: '10px 20px',
              background: 'none',
              border: '1px solid #fff',
              borderRadius: '30px',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            About
          </motion.button>
        </div>

        {/* Social Icons */}
        <h3
          style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#fff',
            marginBottom: '15px',
          }}
        >
          Follow Us
        </h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} color="#e94560" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} color="#e94560" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} color="#e94560" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} color="#e94560" />
          </motion.a>
        </div>

        {/* Copyright Notice */}
        <p
          style={{
            fontSize: '14px',
            color: '#ccc',
            marginTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            paddingTop: '20px',
          }}
        >
          © 2025 The Psyche. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
}

export default ContactUs;