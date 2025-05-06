// // import { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import { FaArrowLeft, FaEdit, FaTrash } from 'react-icons/fa';
// // import axios from 'axios';
// // import bgImage from '../assets/pexels-simon73-1323550.jpg';

// // function Journal() {
// //   const navigate = useNavigate();
// //   const [entryText, setEntryText] = useState('');
// //   const [journalEntries, setJournalEntries] = useState([]);
// //   const [editId, setEditId] = useState(null);
// //   const [editText, setEditText] = useState('');

// //   const token = localStorage.getItem('token');

// //   // Fetch journal entries on page load
// //   useEffect(() => {
// //     const fetchEntries = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5000/api/journal', {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         setJournalEntries(response.data);
// //       } catch (error) {
// //         console.error('Error fetching journal entries:', error);
// //       }
// //     };
// //     fetchEntries();
// //   }, [token]);

// //   // Create a new journal entry
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!entryText.trim()) return;

// //     try {
// //       const response = await axios.post(
// //         'http://localhost:5000/api/journal',
// //         { entryText },
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );
// //       setJournalEntries([...journalEntries, response.data.journalEntry]);
// //       setEntryText('');
// //     } catch (error) {
// //       console.error('Error creating journal entry:', error);
// //     }
// //   };

// //   // Start editing an entry
// //   const handleEdit = (entry) => {
// //     setEditId(entry.id);
// //     setEditText(entry.entryText);
// //   };

// //   // Save edited entry
// //   const handleSaveEdit = async (id) => {
// //     try {
// //       const response = await axios.put(
// //         `http://localhost:5000/api/journal/${id}`,
// //         { entryText: editText },
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );
// //       setJournalEntries(
// //         journalEntries.map((entry) =>
// //           entry.id === id ? { ...entry, entryText: editText } : entry
// //         )
// //       );
// //       setEditId(null);
// //       setEditText('');
// //     } catch (error) {
// //       console.error('Error updating journal entry:', error);
// //     }
// //   };

// //   // Delete an entry
// //   const handleDelete = async (id) => {
// //     if (!window.confirm('Are you sure you want to delete this entry?')) return;

// //     try {
// //       await axios.delete(`http://localhost:5000/api/journal/${id}`, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       setJournalEntries(journalEntries.filter((entry) => entry.id !== id));
// //     } catch (error) {
// //       console.error('Error deleting journal entry:', error);
// //     }
// //   };

// //   return (
// //     <div
// //       style={{
// //         minHeight: '100vh',
// //         width: '100%',
// //         // background: `url(${bgImage}) no-repeat center center/cover`,
// //         color: '#fff',
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         padding: '80px 20px',
// //         boxSizing: 'border-box',
// //         fontFamily: "'Poppins', sans-serif",
// //       }}
// //     >
// //       {/* Back Arrow */}
// //       <motion.div
// //         whileHover={{ scale: 1.1 }}
// //         onClick={() => navigate('/')}
// //         style={{
// //           position: 'absolute',
// //           top: '80px',
// //           left: '30px',
// //           cursor: 'pointer',
// //           display: 'flex',
// //           alignItems: 'center',
// //           gap: '10px',
// //         }}
// //       >
// //         <FaArrowLeft size={24} color="#e94560" />
// //         <span style={{ fontSize: '18px', color: '#e94560' }}>Back to Home</span>
// //       </motion.div>

// //       {/* Journal Content */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 50 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.8 }}
// //         style={{
// //           maxWidth: '800px',
// //           width: '100%',
// //           textAlign: 'center',
// //           padding: '40px',
// //           background: 'rgba(255, 255, 255, 0.1)',
// //           borderRadius: '20px',
// //           boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
// //           border: '1px solid rgba(255, 255, 255, 0.25)',
// //         }}
// //       >
// //         <h1
// //           style={{
// //             fontSize: '40px',
// //             fontWeight: '700',
// //             marginBottom: '20px',
// //             color: '#fff',
// //             textTransform: 'uppercase',
// //             letterSpacing: '2px',
// //           }}
// //         >
// //           My Daily Journal
// //         </h1>

// //         {/* New Journal Entry Form */}
// //         <form onSubmit={handleSubmit} style={{ marginBottom: '40px' }}>
// //           <textarea
// //             value={entryText}
// //             onChange={(e) => setEntryText(e.target.value)}
// //             placeholder="Write about what you learned today and how you can improve..."
// //             style={{
// //               width: '100%',
// //               minHeight: '100px',
// //               padding: '10px',
// //               borderRadius: '10px',
// //               border: '1px solid #fff',
// //               background: 'rgba(255, 255, 255, 0.05)',
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
// //               padding: '10px 20px',
// //               background: '#e94560',
// //               border: 'none',
// //               borderRadius: '30px',
// //               color: '#fff',
// //               cursor: 'pointer',
// //               fontSize: '16px',
// //             }}
// //           >
// //             Submit
// //           </motion.button>
// //         </form>

// //         {/* Past Journal Entries */}
// //         <h2
// //           style={{
// //             fontSize: '24px',
// //             fontWeight: '600',
// //             color: '#fff',
// //             marginBottom: '20px',
// //           }}
// //         >
// //           Past Entries
// //         </h2>
// //         {journalEntries.length === 0 ? (
// //           <p style={{ fontSize: '16px', color: '#e0e0e0' }}>
// //             No journal entries yet. Start writing!
// //           </p>
// //         ) : (
// //           journalEntries.map((entry) => (
// //             <motion.div
// //               key={entry.id}
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ duration: 0.5 }}
// //               style={{
// //                 background: 'rgba(255, 255, 255, 0.05)',
// //                 borderRadius: '10px',
// //                 padding: '20px',
// //                 marginBottom: '20px',
// //                 border: '1px solid rgba(255, 255, 255, 0.2)',
// //               }}
// //             >
// //               <p style={{ fontSize: '14px', color: '#ccc', marginBottom: '10px' }}>
// //                 {new Date(entry.date).toLocaleDateString()}
// //               </p>
// //               {editId === entry.id ? (
// //                 <div>
// //                   <textarea
// //                     value={editText}
// //                     onChange={(e) => setEditText(e.target.value)}
// //                     style={{
// //                       width: '100%',
// //                       minHeight: '80px',
// //                       padding: '10px',
// //                       borderRadius: '10px',
// //                       border: '1px solid #fff',
// //                       background: 'rgba(255, 255, 255, 0.05)',
// //                       color: '#fff',
// //                       fontSize: '16px',
// //                       resize: 'vertical',
// //                       marginBottom: '10px',
// //                     }}
// //                   />
// //                   <motion.button
// //                     whileHover={{ scale: 1.05 }}
// //                     whileTap={{ scale: 0.95 }}
// //                     onClick={() => handleSaveEdit(entry.id)}
// //                     style={{
// //                       padding: '8px 16px',
// //                       background: '#e94560',
// //                       border: 'none',
// //                       borderRadius: '20px',
// //                       color: '#fff',
// //                       cursor: 'pointer',
// //                       marginRight: '10px',
// //                     }}
// //                   >
// //                     Save
// //                   </motion.button>
// //                   <motion.button
// //                     whileHover={{ scale: 1.05 }}
// //                     whileTap={{ scale: 0.95 }}
// //                     onClick={() => setEditId(null)}
// //                     style={{
// //                       padding: '8px 16px',
// //                       background: 'none',
// //                       border: '1px solid #fff',
// //                       borderRadius: '20px',
// //                       color: '#fff',
// //                       cursor: 'pointer',
// //                     }}
// //                   >
// //                     Cancel
// //                   </motion.button>
// //                 </div>
// //               ) : (
// //                 <div>
// //                   <p style={{ fontSize: '16px', color: '#e0e0e0', lineHeight: '1.8' }}>
// //                     {entry.entryText}
// //                   </p>
// //                   <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
// //                     <motion.button
// //                       whileHover={{ scale: 1.05 }}
// //                       whileTap={{ scale: 0.95 }}
// //                       onClick={() => handleEdit(entry)}
// //                       style={{
// //                         padding: '8px 16px',
// //                         background: 'none',
// //                         border: '1px solid #fff',
// //                         borderRadius: '20px',
// //                         color: '#fff',
// //                         cursor: 'pointer',
// //                         display: 'flex',
// //                         alignItems: 'center',
// //                         gap: '5px',
// //                       }}
// //                     >
// //                       <FaEdit /> Edit
// //                     </motion.button>
// //                     <motion.button
// //                       whileHover={{ scale: 1.05 }}
// //                       whileTap={{ scale: 0.95 }}
// //                       onClick={() => handleDelete(entry.id)}
// //                       style={{
// //                         padding: '8px 16px',
// //                         background: '#e94560',
// //                         border: 'none',
// //                         borderRadius: '20px',
// //                         color: '#fff',
// //                         cursor: 'pointer',
// //                         display: 'flex',
// //                         alignItems: 'center',
// //                         gap: '5px',
// //                       }}
// //                     >
// //                       <FaTrash /> Delete
// //                     </motion.button>
// //                   </div>
// //                 </div>
// //               )}
// //             </motion.div>
// //           ))
// //         )}
// //       </motion.div>
// //     </div>
// //   );
// // }

// // export default Journal;

// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaArrowLeft, FaEdit, FaTrash } from 'react-icons/fa';
// import axios from 'axios';
// import bgImage from '../assets/pexels-simon73-1323550.jpg';

// function Journal() {
//   const navigate = useNavigate();
//   const [entryText, setEntryText] = useState('');
//   const [journalEntries, setJournalEntries] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [editText, setEditText] = useState('');
//   const [error, setError] = useState(null);
//   const [authMessage, setAuthMessage] = useState(null);

//   const token = localStorage.getItem('token');

//   // Check authentication and redirect if not logged in
//   useEffect(() => {
//     if (!token) {
//       setAuthMessage('Please log in first to access your journal.');
//       // Show message for 2 seconds before redirecting
//       setTimeout(() => {
//         navigate('/login');
//       }, 4000);
//       return; // Exit early to prevent further execution
//     }
//   }, [token, navigate]);

//   // Fetch journal entries only if authenticated
//   useEffect(() => {
//     const fetchEntries = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/journal', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setJournalEntries(response.data);
//         setError(null);
//       } catch (error) {
//         console.error('Error fetching journal entries:', error);
//         if (error.response?.status === 403 || error.response?.status === 401) {
//           setError('Authentication failed. Please log in again.');
//           localStorage.removeItem('token');
//           navigate('/login');
//         } else {
//           setError('Failed to fetch journal entries. Please try again.');
//         }
//       }
//     };
//     if (token) {
//       fetchEntries();
//     }
//   }, [token, navigate]);

//   // Create a new journal entry
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!entryText.trim()) return;

//     try {
//       const response = await axios.post(
//         'http://localhost:5000/api/journal',
//         { entryText },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setJournalEntries([...journalEntries, response.data.journalEntry]);
//       setEntryText('');
//       setError(null);
//     } catch (error) {
//       console.error('Error creating journal entry:', error);
//       if (error.response?.status === 403 || error.response?.status === 401) {
//         setError('Authentication failed. Please log in again.');
//         localStorage.removeItem('token');
//         navigate('/login');
//       } else {
//         setError('Failed to create journal entry. Please try again.');
//       }
//     }
//   };

//   // Start editing an entry
//   const handleEdit = (entry) => {
//     setEditId(entry.id);
//     setEditText(entry.entryText);
//   };

//   // Save edited entry
//   const handleSaveEdit = async (id) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/journal/${id}`,
//         { entryText: editText },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setJournalEntries(
//         journalEntries.map((entry) =>
//           entry.id === id ? { ...entry, entryText: editText } : entry
//         )
//       );
//       setEditId(null);
//       setEditText('');
//       setError(null);
//     } catch (error) {
//       console.error('Error updating journal entry:', error);
//       if (error.response?.status === 403 || error.response?.status === 401) {
//         setError('Authentication failed. Please log in again.');
//         localStorage.removeItem('token');
//         navigate('/login');
//       } else {
//         setError('Failed to update journal entry. Please try again.');
//       }
//     }
//   };

//   // Delete an entry
//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this entry?')) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/journal/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setJournalEntries(journalEntries.filter((entry) => entry.id !== id));
//       setError(null);
//     } catch (error) {
//       console.error('Error deleting journal entry:', error);
//       if (error.response?.status === 403 || error.response?.status === 401) {
//         setError('Authentication failed. Please log in again.');
//         localStorage.removeItem('token');
//         navigate('/login');
//       } else {
//         setError('Failed to delete journal entry. Please try again.');
//       }
//     }
//   };

//   // If not authenticated, show only the message
//   if (!token) {
//     return (
//       <div
//         style={{
//           minHeight: '100vh',
//           width: '100%',
//         //   background: `url(${bgImage}) no-repeat center center/cover`,
//           color: '#fff',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontFamily: "'Poppins', sans-serif",
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           style={{
//             background: 'rgba(255, 255, 255, 0.1)',
//             padding: '20px',
//             borderRadius: '10px',
//             textAlign: 'center',
//           }}
//         >
//           <p style={{ fontSize: '20px', color: '#e94560' }}>{authMessage}</p>
//           <p style={{ fontSize: '16px', color: '#fff' }}>Redirecting to login...</p>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         width: '100%',
//         // background: `url(${bgImage}) no-repeat center center/cover`,
//         color: '#fff',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         padding: '80px 20px',
//         boxSizing: 'border-box',
//         fontFamily: "'Poppins', sans-serif",
//       }}
//     >
//       {/* Back Arrow */}
//       <motion.div
//         whileHover={{ scale: 1.1 }}
//         onClick={() => navigate('/')}
//         style={{
//           position: 'absolute',
//           top: '80px',
//           left: '30px',
//           cursor: 'pointer',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '10px',
//         }}
//       >
//         <FaArrowLeft size={24} color="#e94560" />
//         <span style={{ fontSize: '18px', color: '#e94560' }}>Back to Home</span>
//       </motion.div>

//       {/* Journal Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         style={{
//           maxWidth: '800px',
//           width: '100%',
//           textAlign: 'center',
//           padding: '40px',
//           background: 'rgba(255, 255, 255, 0.1)',
//           borderRadius: '20px',
//           boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
//           border: '1px solid rgba(255, 255, 255, 0.25)',
//         }}
//       >
//         <h1
//           style={{
//             fontSize: '40px',
//             fontWeight: '700',
//             marginBottom: '20px',
//             color: '#fff',
//             textTransform: 'uppercase',
//             letterSpacing: '2px',
//           }}
//         >
//           My Daily Journal
//         </h1>

//         {/* Error Message */}
//         {error && (
//           <p style={{ color: '#e94560', marginBottom: '20px', fontSize: '16px' }}>
//             {error}
//           </p>
//         )}

//         {/* New Journal Entry Form */}
//         <form onSubmit={handleSubmit} style={{ marginBottom: '40px' }}>
//           <textarea
//             value={entryText}
//             onChange={(e) => setEntryText(e.target.value)}
//             placeholder="Write about what you learned today and how you can improve..."
//             style={{
//               width: '100%',
//               minHeight: '100px',
//               padding: '10px',
//               borderRadius: '10px',
//               border: '1px solid #fff',
//               background: 'rgba(255, 255, 255, 0.05)',
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
//               padding: '10px 20px',
//               background: '#e94560',
//               border: 'none',
//               borderRadius: '30px',
//               color: '#fff',
//               cursor: 'pointer',
//               fontSize: '16px',
//             }}
//           >
//             Submit
//           </motion.button>
//         </form>

//         {/* Past Journal Entries */}
//         <h2
//           style={{
//             fontSize: '24px',
//             fontWeight: '600',
//             color: '#fff',
//             marginBottom: '20px',
//           }}
//         >
//           Past Entries
//         </h2>
//         {journalEntries.length === 0 ? (
//           <p style={{ fontSize: '16px', color: '#e0e0e0' }}>
//             No journal entries yet. Start writing!
//           </p>
//         ) : (
//           journalEntries.map((entry) => (
//             <motion.div
//               key={entry.id}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               style={{
//                 background: 'rgba(255, 255, 255, 0.05)',
//                 borderRadius: '10px',
//                 padding: '20px',
//                 marginBottom: '20px',
//                 border: '1px solid rgba(255, 255, 255, 0.2)',
//               }}
//             >
//               <p style={{ fontSize: '14px', color: '#ccc', marginBottom: '10px' }}>
//                 {new Date(entry.date).toLocaleDateString()}
//               </p>
//               {editId === entry.id ? (
//                 <div>
//                   <textarea
//                     value={editText}
//                     onChange={(e) => setEditText(e.target.value)}
//                     style={{
//                       width: '100%',
//                       minHeight: '80px',
//                       padding: '10px',
//                       borderRadius: '10px',
//                       border: '1px solid #fff',
//                       background: 'rgba(255, 255, 255, 0.05)',
//                       color: '#fff',
//                       fontSize: '16px',
//                       resize: 'vertical',
//                       marginBottom: '10px',
//                     }}
//                   />
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => handleSaveEdit(entry.id)}
//                     style={{
//                       padding: '8px 16px',
//                       background: '#e94560',
//                       border: 'none',
//                       borderRadius: '20px',
//                       color: '#fff',
//                       cursor: 'pointer',
//                       marginRight: '10px',
//                     }}
//                   >
//                     Save
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setEditId(null)}
//                     style={{
//                       padding: '8px 16px',
//                       background: 'none',
//                       border: '1px solid #fff',
//                       borderRadius: '20px',
//                       color: '#fff',
//                       cursor: 'pointer',
//                     }}
//                   >
//                     Cancel
//                   </motion.button>
//                 </div>
//               ) : (
//                 <div>
//                   <p style={{ fontSize: '16px', color: '#e0e0e0', lineHeight: '1.8' }}>
//                     {entry.entryText}
//                   </p>
//                   <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => handleEdit(entry)}
//                       style={{
//                         padding: '8px 16px',
//                         background: 'none',
//                         border: '1px solid #fff',
//                         borderRadius: '20px',
//                         color: '#fff',
//                         cursor: 'pointer',
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '5px',
//                       }}
//                     >
//                       <FaEdit /> Edit
//                     </motion.button>
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => handleDelete(entry.id)}
//                       style={{
//                         padding: '8px 16px',
//                         background: '#e94560',
//                         border: 'none',
//                         borderRadius: '20px',
//                         color: '#fff',
//                         cursor: 'pointer',
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '5px',
//                       }}
//                     >
//                       <FaTrash /> Delete
//                     </motion.button>
//                   </div>
//                 </div>
//               )}
//             </motion.div>
//           ))
//         )}
//       </motion.div>
//     </div>
//   );
// }

// export default Journal;

// src/components/Journal.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify'; // Import toast
import axios from 'axios';
import bgImage from '../assets/pexels-simon73-1323550.jpg';

function Journal() {
  const navigate = useNavigate();
  const [entryText, setEntryText] = useState('');
  const [journalEntries, setJournalEntries] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');

  // Check authentication and redirect if not logged in
  useEffect(() => {
    if (!token) {
      toast.warn('🌀 Your psyche isn’t connected yet. Please log in to access your journal.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
      setTimeout(() => {
        navigate('/login');
      }, 4000);
      return;
    }
  }, [token, navigate]);

  // Fetch journal entries only if authenticated
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/journal', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setJournalEntries(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching journal entries:', error);
        if (error.response?.status === 403 || error.response?.status === 401) {
          toast.error('⚠️ Psyche connection lost. Please log in again to continue your journey.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
          });
          localStorage.removeItem('token');
          navigate('/login');
        } else {
          toast.error('⚠️ Unable to retrieve your psyche reflections. Please try again.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
          });
        }
      }
    };
    if (token) {
      fetchEntries();
    }
  }, [token, navigate]);

  // Create a new journal entry
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!entryText.trim()) {
      toast.warn('🌀 A blank psyche reflection? Please write something to capture your thoughts.', {
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
      const response = await axios.post(
        'http://localhost:5000/api/journal',
        { entryText },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setJournalEntries([...journalEntries, response.data.journalEntry]);
      setEntryText('');
      setError(null);
      toast.success('🌟 Your psyche reflection has been captured successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
    } catch (error) {
      console.error('Error creating journal entry:', error);
      if (error.response?.status === 403 || error.response?.status === 401) {
        toast.error('⚠️ Psyche connection lost. Please log in again to continue your journey.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        });
        localStorage.removeItem('token');
        navigate('/login');
      } else {
        toast.error('⚠️ Failed to capture your psyche reflection. Please try again.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        });
      }
    }
  };

  // Start editing an entry
  const handleEdit = (entry) => {
    setEditId(entry.id);
    setEditText(entry.entryText);
  };

  // Save edited entry
  const handleSaveEdit = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/journal/${id}`,
        { entryText: editText },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setJournalEntries(
        journalEntries.map((entry) =>
          entry.id === id ? { ...entry, entryText: editText } : entry
        )
      );
      setEditId(null);
      setEditText('');
      setError(null);
      toast.success('🌟 Your psyche reflection has been updated successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
    } catch (error) {
      console.error('Error updating journal entry:', error);
      if (error.response?.status === 403 || error.response?.status === 401) {
        toast.error('⚠️ Psyche connection lost. Please log in again to continue your journey.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        });
        localStorage.removeItem('token');
        navigate('/login');
      } else {
        toast.error('⚠️ Failed to update your psyche reflection. Please try again.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        });
      }
    }
  };

  // Delete an entry
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this entry?')) return;

    try {
      await axios.delete(`http://localhost:5000/api/journal/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJournalEntries(journalEntries.filter((entry) => entry.id !== id));
      setError(null);
      toast.success('🌟 A psyche reflection has been released into the void.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
    } catch (error) {
      console.error('Error deleting journal entry:', error);
      if (error.response?.status === 403 || error.response?.status === 401) {
        toast.error('⚠️ Psyche connection lost. Please log in again to continue your journey.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        });
        localStorage.removeItem('token');
        navigate('/login');
      } else {
        toast.error('⚠️ Failed to release your psyche reflection. Please try again.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        });
      }
    }
  };

  // If not authenticated, show only the message
  if (!token) {
    return (
      <div
        style={{
          minHeight: '100vh',
          width: '100%',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '16px', color: '#fff' }}>Redirecting to login...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px 20px',
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

      {/* Journal Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: '800px',
          width: '100%',
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
          My Daily Journal
        </h1>

        {/* Error Message */}
        {error && (
          <p style={{ color: '#e94560', marginBottom: '20px', fontSize: '16px' }}>
            {error}
          </p>
        )}

        {/* New Journal Entry Form */}
        <form onSubmit={handleSubmit} style={{ marginBottom: '40px' }}>
          <textarea
            value={entryText}
            onChange={(e) => setEntryText(e.target.value)}
            placeholder="Write about what you learned today and how you can improve..."
            style={{
              width: '100%',
              minHeight: '100px',
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid #fff',
              background: 'rgba(255, 255, 255, 0.05)',
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
              padding: '10px 20px',
              background: '#e94560',
              border: 'none',
              borderRadius: '30px',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Submit
          </motion.button>
        </form>

        {/* Past Journal Entries */}
        <h2
          style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#fff',
            marginBottom: '20px',
          }}
        >
          Past Entries
        </h2>
        {journalEntries.length === 0 ? (
          <p style={{ fontSize: '16px', color: '#e0e0e0' }}>
            No journal entries yet. Start writing!
          </p>
        ) : (
          journalEntries.map((entry) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '10px',
                padding: '20px',
                marginBottom: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <p style={{ fontSize: '14px', color: '#ccc', marginBottom: '10px' }}>
                {new Date(entry.date).toLocaleDateString()}
              </p>
              {editId === entry.id ? (
                <div>
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    style={{
                      width: '100%',
                      minHeight: '80px',
                      padding: '10px',
                      borderRadius: '10px',
                      border: '1px solid #fff',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: '#fff',
                      fontSize: '16px',
                      resize: 'vertical',
                      marginBottom: '10px',
                    }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSaveEdit(entry.id)}
                    style={{
                      padding: '8px 16px',
                      background: '#e94560',
                      border: 'none',
                      borderRadius: '20px',
                      color: '#fff',
                      cursor: 'pointer',
                      marginRight: '10px',
                    }}
                  >
                    Save
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setEditId(null)}
                    style={{
                      padding: '8px 16px',
                      background: 'none',
                      border: '1px solid #fff',
                      borderRadius: '20px',
                      color: '#fff',
                      cursor: 'pointer',
                    }}
                  >
                    Cancel
                  </motion.button>
                </div>
              ) : (
                <div>
                  <p style={{ fontSize: '16px', color: '#e0e0e0', lineHeight: '1.8' }}>
                    {entry.entryText}
                  </p>
                  <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleEdit(entry)}
                      style={{
                        padding: '8px 16px',
                        background: 'none',
                        border: '1px solid #fff',
                        borderRadius: '20px',
                        color: '#fff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <FaEdit /> Edit
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDelete(entry.id)}
                      style={{
                        padding: '8px 16px',
                        background: '#e94560',
                        border: 'none',
                        borderRadius: '20px',
                        color: '#fff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <FaTrash /> Delete
                    </motion.button>
                  </div>
                </div>
              )}
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
}

export default Journal;