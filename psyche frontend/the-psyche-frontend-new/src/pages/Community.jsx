// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import axiosInstance from '../utils/axiosInstance';

// function Community() {
//   const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState('');
//   const [error, setError] = useState('');

//   // Fetch all posts on mount
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await axiosInstance.get('/posts');
//         setPosts(res.data);
//       } catch (err) {
//         setError('Failed to load posts');
//       }
//     };
//     fetchPosts();
//   }, []);

//   // Handle creating a new post
//   const handlePost = async () => {
//     if (!newPost || newPost.length > 280) {
//       setError('Post must be between 1 and 280 characters');
//       return;
//     }
//     try {
//       const res = await axiosInstance.post('/posts', { content: newPost });
//       setPosts([res.data, ...posts]);
//       setNewPost('');
//       setError('');
//     } catch (err) {
//       setError('Failed to create post');
//     }
//   };

//   // Handle liking a post
//   const handleLike = async (postID) => {
//     try {
//       const res = await axiosInstance.post(`/posts/like/${postID}`);
//       setPosts(posts.map((post) => (post.postID === postID ? res.data : post)));
//     } catch (err) {
//       setError('Failed to like post');
//     }
//   };

//   // Handle sharing report
//   const handleShareReport = async () => {
//     try {
//       // Fetch the user's report
//       const reportRes = await axiosInstance.get('/psyche/report');
//       const report = reportRes.data.report;
//       const content = `My Psyche Report: Mentality - ${report.mentality.score * 10}%, Philosophy - ${report.philosophy.score * 10}%, Psychology - ${report.psychology.score * 10}%, Fear - ${report.fear.score * 10}%, Self-discovery - ${report['self-discovery'].score * 10}%`;
      
//       const res = await axiosInstance.post('/posts', { content });
//       setPosts([res.data, ...posts]);
//     } catch (err) {
//       setError('Failed to share report');
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         width: '100%',
//         background: 'linear-gradient(135deg, #6E5F5F, #242424, #5C7C89, #1F4459, #011325)',
//         color: '#fff',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         padding: '80px 20px',
//       }}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         style={{ textAlign: 'center', marginBottom: '30px' }}
//       >
//         <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
//           Psyche Community
//         </h1>
//         <p style={{ fontSize: '24px', maxWidth: '600px', margin: '0 auto' }}>
//           Share your journey, learn from others, and grow together
//         </p>
//       </motion.div>

//       {/* Post Creation Form */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 1 }}
//         style={{
//           width: '100%',
//           maxWidth: '600px',
//           marginBottom: '40px',
//           textAlign: 'center',
//         }}
//       >
//         <textarea
//           value={newPost}
//           onChange={(e) => setNewPost(e.target.value)}
//           placeholder="Share your learnings or growth (280 characters max)"
//           style={{
//             width: '100%',
//             height: '100px',
//             padding: '10px',
//             background: 'rgba(255, 255, 255, 0.1)',
//             border: '1px solid rgba(255, 255, 255, 0.2)',
//             borderRadius: '10px',
//             color: '#fff',
//             fontSize: '16px',
//             resize: 'none',
//             marginBottom: '10px',
//           }}
//         />
//         <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handlePost}
//             style={{
//               padding: '10px 20px',
//               background: '#e94560',
//               color: '#fff',
//               border: 'none',
//               borderRadius: '50px',
//               fontSize: '16px',
//               cursor: 'pointer',
//             }}
//           >
//             Post
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleShareReport}
//             style={{
//               padding: '10px 20px',
//               background: 'transparent',
//               border: '1px solid #fff',
//               borderRadius: '50px',
//               color: '#fff',
//               fontSize: '16px',
//               cursor: 'pointer',
//             }}
//           >
//             Share Report
//           </motion.button>
//         </div>
//         {error && <p style={{ color: '#ff4500', marginTop: '10px' }}>{error}</p>}
//       </motion.div>

//       {/* Community Feed */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//         style={{
//           width: '100%',
//           maxWidth: '600px',
//         }}
//       >
//         {posts.map((post) => (
//           <motion.div
//             key={post.postID}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             style={{
//               background: 'rgba(255, 255, 255, 0.1)',
//               padding: '15px',
//               borderRadius: '10px',
//               marginBottom: '15px',
//               display: 'flex',
//               flexDirection: 'column',
//               gap: '10px',
//             }}
//           >
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//               <p style={{ fontSize: '14px', color: '#e0e0e0' }}>{post.username}</p>
//               <p style={{ fontSize: '14px', color: '#e0e0e0' }}>
//                 {new Date(post.timestamp).toLocaleString()}
//               </p>
//             </div>
//             <p style={{ fontSize: '16px' }}>{post.content}</p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => handleLike(post.postID)}
//               style={{
//                 alignSelf: 'flex-start',
//                 padding: '5px 10px',
//                 background: post.likes.includes(localStorage.getItem('userId'))
//                   ? '#ff4500'
//                   : 'transparent',
//                 border: '1px solid #fff',
//                 borderRadius: '50px',
//                 color: '#fff',
//                 fontSize: '14px',
//                 cursor: 'pointer',
//               }}
//             >
//               ❤️ {post.likes.length}
//             </motion.button>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// export default Community;