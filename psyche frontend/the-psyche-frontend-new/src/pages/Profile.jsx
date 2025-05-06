// // import { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axiosInstance from '../utils/axiosInstance.js';

// // function Profile() {
// //   const [report, setReport] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         const res = await axiosInstance.get('/psyche/report');
// //         if (res.data.message === 'Incomplete analysis—please answer all 25 questions') {
// //           navigate('/questions');
// //         } else {
// //           setReport(res.data);
// //         }
// //       } catch (err) {
// //         alert('Error: ' + (err.response?.data?.message || 'Failed to load profile'));
// //         navigate('/questions');
// //       }
// //     };
// //     fetchProfile();
// //   }, [navigate]);

// //   if (!report) return <div style={{ padding: '20px' }}>Loading...</div>;

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <h2>Your Profile</h2>
// //       {Object.entries(report.report).map(([phase, { score }]) => (
// //         <div key={phase} style={{ margin: '20px 0' }}>
// //           <p>{phase.charAt(0).toUpperCase() + phase.slice(1)}: {score}/10</p>
// //         </div>
// //       ))}
// //       <button
// //         onClick={() => navigate('/questions')}
// //         style={{ padding: '10px 20px', background: '#0f3460', color: '#fff', border: 'none', borderRadius: '5px' }}
// //       >
// //         Take Another Analysis
// //       </button>
// //     </div>
// //   );
// // }

// // export default Profile;

// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import axiosInstance from '../utils/axiosInstance.js';

// function Profile() {
//   const [report, setReport] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axiosInstance.get('/psyche/report');
//         if (res.data.message === 'Incomplete analysis—please answer all 25 questions') {
//           navigate('/questions');
//         } else {
//           const normalizedReport = {
//             ...res.data,
//             report: Object.fromEntries(
//               Object.entries(res.data.report).map(([phase, data]) => [
//                 phase,
//                 {
//                   ...data,
//                   score: Math.round((data.score / 50) * 10 * 10) / 10,
//                 },
//               ])
//             ),
//           };
//           setReport(normalizedReport);
//         }
//       } catch (err) {
//         alert('Error: ' + (err.response?.data?.message || 'Failed to load profile'));
//         navigate('/questions');
//       }
//     };
//     fetchProfile();
//   }, [navigate]);

//   if (!report) return <div style={{ padding: '20px' }}>Loading...</div>;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}
//     >
//       <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>Your Profile</h2>
//       {Object.entries(report.report).map(([phase, { score }]) => (
//         <motion.div
//           key={phase}
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           style={{
//             margin: '20px 0',
//             padding: '20px',
//             background: 'rgba(255, 255, 255, 0.1)',
//             borderRadius: '10px',
//             boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//           }}
//         >
//           <p style={{ fontSize: '18px' }}>
//             {phase.charAt(0).toUpperCase() + phase.slice(1)}: {score}/10
//           </p>
//         </motion.div>
//       ))}
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => navigate('/questions')}
//         style={{
//           width: '100%',
//           padding: '10px',
//           background: '#e94560',
//           border: 'none',
//           borderRadius: '50px',
//           color: '#fff',
//           cursor: 'pointer',
//           marginTop: '20px',
//         }}
//       >
//         Take Another Analysis
//       </motion.button>
//     </motion.div>
//   );
// }

// export default Profile;

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axiosInstance from '../utils/axiosInstance.js';

function Profile() {
  const [userDetails, setUserDetails] = useState({ name: '', email: '' });
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login'); // No token, redirect to login
        return;
      }

      try {
        // Fetch user details
        const userRes = await axiosInstance.get('/auth/me');
        setUserDetails(userRes.data);

        // Fetch report (if exists)
        const reportRes = await axiosInstance.get('/psyche/report');
        setReport(reportRes.data);
      } catch (err) {
        if (err.response?.status === 400 && err.response?.data?.message === 'Incomplete analysis—please answer all 25 questions') {
          setReport(null); // No report yet, show 0 activity
        } else {
          console.error('Profile Error:', err);
          navigate('/login'); // Token invalid, redirect to login
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProfileData();
  }, [navigate]);

  if (loading) {
    return <div style={{ width: '100%', textAlign: 'center', padding: '40px' }}>Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width: '100%', maxWidth: '800px', textAlign: 'center' }}
    >
      <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Your Profile</h2>
      
      {/* User Details */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '20px',
          borderRadius: '10px',
          marginBottom: '30px',
        }}
      >
        <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>{userDetails.name}</h3>
        <p style={{ fontSize: '18px', color: '#ccc' }}>{userDetails.email}</p>
      </motion.div>

      {/* Report or Activity Status */}
      {report ? (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Your Psyche Report</h3>
          <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '20px', borderRadius: '10px' }}>
            <p><strong>Test Date:</strong> {report.testDate}</p>
            <p><strong>Strengths:</strong> {report.strengths}</p>
            <p><strong>Weaknesses:</strong> {report.weaknesses}</p>
            <p><strong>Dominant Phase:</strong> {report.dominantPhase}</p>
            <p><strong>Advice:</strong> {report.advice}</p>
            <p><strong>Recommendation:</strong> {report.recommendation}</p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Activity Status</h3>
          <p style={{ fontSize: '18px', color: '#e94560' }}>
            0 Activity—Complete the 25 questions to see your psyche report!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/journey-guide')}
            style={{
              marginTop: '20px',
              padding: '10px 30px',
              background: '#e94560',
              border: 'none',
              borderRadius: '50px',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Start Journey
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Profile;