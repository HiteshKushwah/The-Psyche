// // // // // import { useState, useEffect } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import axiosInstance from '../utils/axiosInstance.js';
// // // // // import QuestionCard from '../components/QuestionCard';

// // // // // function Questions() {
// // // // //   const [question, setQuestion] = useState(null);
// // // // //   const navigate = useNavigate();

// // // // //   useEffect(() => {
// // // // //     const fetchQuestion = async () => {
// // // // //       try {
// // // // //         const token = localStorage.getItem('token');
// // // // //         if (!token) {
// // // // //           navigate('/login');
// // // // //           return;
// // // // //         }
// // // // //         const res = await axiosInstance.get('/psyche/start');
// // // // //         setQuestion(res.data);
// // // // //       } catch (err) {
// // // // //         alert('Error: ' + (err.response?.data?.message || 'Failed to start'));
// // // // //         if (err.response?.status === 401) {
// // // // //           navigate('/login');
// // // // //         }
// // // // //       }
// // // // //     };
// // // // //     fetchQuestion();
// // // // //   }, [navigate]);

// // // // //   const handleAnswer = async (answer) => {
// // // // //     try {
// // // // //       const res = await axiosInstance.post('/psyche/answer', {
// // // // //         phase: question.phase,
// // // // //         question: question.question,
// // // // //         answer,
// // // // //         index: question.index,
// // // // //       });
// // // // //       if (res.data.message === 'Analysis complete') {
// // // // //         navigate('/report');
// // // // //       } else {
// // // // //         setQuestion(res.data); // Next question
// // // // //       }
// // // // //     } catch (err) {
// // // // //       alert('Error: ' + (err.response?.data?.message || 'Failed to submit answer'));
// // // // //     }
// // // // //   };

// // // // //   if (!question) return <div style={{ padding: '20px' }}>Loading...</div>;

// // // // //   return (
// // // // //     <div style={{ padding: '20px' }}>
// // // // //       <QuestionCard
// // // // //         phase={question.phase}
// // // // //         question={question.question}
// // // // //         options={question.options}
// // // // //         index={question.index}
// // // // //         onAnswer={handleAnswer}
// // // // //       />
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Questions;


// // // // import { useState, useEffect } from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import { motion } from 'framer-motion';
// // // // import axiosInstance from '../utils/axiosInstance.js';
// // // // import QuestionCard from '../components/QuestionCard';

// // // // function Questions() {
// // // //   const [question, setQuestion] = useState(null);
// // // //   const navigate = useNavigate();

// // // //   useEffect(() => {
// // // //     const fetchQuestion = async () => {
// // // //       try {
// // // //         const token = localStorage.getItem('token');
// // // //         if (!token) {
// // // //           navigate('/login');
// // // //           return;
// // // //         }
// // // //         const res = await axiosInstance.get('/psyche/start');
// // // //         setQuestion(res.data);
// // // //       } catch (err) {
// // // //         alert('Error: ' + (err.response?.data?.message || 'Failed to start'));
// // // //         if (err.response?.status === 401) {
// // // //           navigate('/login');
// // // //         }
// // // //       }
// // // //     };
// // // //     fetchQuestion();
// // // //   }, [navigate]);

// // // //   const handleAnswer = async (answer) => {
// // // //     try {
// // // //       const res = await axiosInstance.post('/psyche/answer', {
// // // //         phase: question.phase,
// // // //         question: question.question,
// // // //         answer,
// // // //         index: question.index,
// // // //       });
// // // //       if (res.data.message === 'Analysis complete') {
// // // //         navigate('/report');
// // // //       } else {
// // // //         setQuestion(res.data);
// // // //       }
// // // //     } catch (err) {
// // // //       alert('Error: ' + (err.response?.data?.message || 'Failed to submit answer'));
// // // //     }
// // // //   };

// // // //   if (!question) return <div style={{ padding: '20px' }}>Loading...</div>;

// // // //   return (
// // // //     <motion.div
// // // //       initial={{ opacity: 0 }}
// // // //       animate={{ opacity: 1 }}
// // // //       transition={{ duration: 0.5 }}
// // // //       style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}
// // // //     >
// // // //       <QuestionCard
// // // //         phase={question.phase}
// // // //         question={question.question}
// // // //         options={question.options}
// // // //         index={question.index}
// // // //         onAnswer={handleAnswer}
// // // //       />
// // // //     </motion.div>
// // // //   );
// // // // }

// // // // export default Questions;

// // // import { useState, useEffect } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { motion } from 'framer-motion';
// // // import axiosInstance from '../utils/axiosInstance.js';
// // // import QuestionCard from '../components/QuestionCard';

// // // function Questions() {
// // //   const [question, setQuestion] = useState(null);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const fetchQuestion = async () => {
// // //       try {
// // //         const token = localStorage.getItem('token');
// // //         if (!token) {
// // //           navigate('/login');
// // //           return;
// // //         }
// // //         const res = await axiosInstance.get('/psyche/start');
// // //         setQuestion(res.data);
// // //       } catch (err) {
// // //         alert('Error: ' + (err.response?.data?.message || 'Failed to start'));
// // //         if (err.response?.status === 401) {
// // //           navigate('/login');
// // //         }
// // //       }
// // //     };
// // //     fetchQuestion();
// // //   }, [navigate]);

// // //   const handleAnswer = async (answer) => {
// // //     try {
// // //       const res = await axiosInstance.post('/psyche/answer', {
// // //         phase: question.phase,
// // //         question: question.question,
// // //         answer,
// // //         index: question.index,
// // //       });
// // //       if (res.data.message === 'Analysis complete') {
// // //         navigate('/report');
// // //       } else {
// // //         setQuestion(res.data);
// // //       }
// // //     } catch (err) {
// // //       alert('Error: ' + (err.response?.data?.message || 'Failed to submit answer'));
// // //     }
// // //   };

// // //   if (!question) return <div style={{ padding: '20px' }}>Loading...</div>;

// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0 }}
// // //       animate={{ opacity: 1 }}
// // //       transition={{ duration: 0.5 }}
// // //       style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}
// // //     >
// // //       <QuestionCard
// // //         phase={question.phase}
// // //         question={question.question}
// // //         options={question.options}
// // //         index={question.index}
// // //         onAnswer={handleAnswer}
// // //       />
// // //     </motion.div>
// // //   );
// // // }

// // // export default Questions;

// // import { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import axiosInstance from '../utils/axiosInstance.js';
// // import QuestionCard from '../components/QuestionCard';

// // function Questions() {
// //   const [question, setQuestion] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchQuestion = async () => {
// //       try {
// //         const token = localStorage.getItem('token');
// //         if (!token) {
// //           navigate('/login');
// //           return;
// //         }
// //         const res = await axiosInstance.get('/psyche/start');
// //         setQuestion(res.data);
// //       } catch (err) {
// //         alert('Error: ' + (err.response?.data?.message || 'Failed to start'));
// //         if (err.response?.status === 401) {
// //           navigate('/login');
// //         }
// //       }
// //     };
// //     fetchQuestion();
// //   }, [navigate]);

// //   const handleAnswer = async (answer) => {
// //     try {
// //       const res = await axiosInstance.post('/psyche/answer', {
// //         phase: question.phase,
// //         question: question.question,
// //         answer,
// //         index: question.index,
// //       });
// //       if (res.data.message === 'Analysis complete') {
// //         navigate('/report');
// //       } else {
// //         setQuestion(res.data);
// //       }
// //     } catch (err) {
// //       alert('Error: ' + (err.response?.data?.message || 'Failed to submit answer'));
// //     }
// //   };

// //   if (!question) return <div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>;

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ duration: 0.5 }}
// //       style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}
// //     >
// //       <QuestionCard
// //         phase={question.phase}
// //         question={question.question}
// //         options={question.options}
// //         index={question.index}
// //         onAnswer={handleAnswer}
// //       />
// //     </motion.div>
// //   );
// // }

// // export default Questions;

// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import axiosInstance from '../utils/axiosInstance.js';
// import QuestionCard from '../components/QuestionCard';

// function Questions() {
//   const [question, setQuestion] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchQuestion = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         navigate('/login'); // No token, redirect to login
//         return;
//       }
//       try {
//         const res = await axiosInstance.get('/psyche/start');
//         setQuestion(res.data);
//       } catch (err) {
//         alert('Error: ' + (err.response?.data?.message || 'Failed to start'));
//         navigate('/login'); // Token invalid, redirect to login
//       }
//     };
//     fetchQuestion();
//   }, [navigate]);

//   const handleAnswer = async (answer) => {
//     try {
//       const res = await axiosInstance.post('/psyche/answer', {
//         phase: question.phase,
//         question: question.question,
//         answer,
//         index: question.index,
//       });
//       if (res.data.message === 'Analysis complete') {
//         navigate('/report');
//       } else {
//         setQuestion(res.data);
//       }
//     } catch (err) {
//       alert('Error: ' + (err.response?.data?.message || 'Failed to submit answer'));
//       navigate('/login'); // Token invalid, redirect to login
//     }
//   };

//   if (!question) return <div style={{ width: '100%', textAlign: 'center', padding: '40px' }}>Loading...</div>;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       style={{
//         width: '100%',
//         maxWidth: '800px',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <QuestionCard
//         phase={question.phase}
//         question={question.question}
//         options={question.options}
//         index={question.index}
//         onAnswer={handleAnswer}
//       />
//     </motion.div>
//   );
// }

// export default Questions;

// src/pages/Questions.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify'; // Import toast
import axiosInstance from '../utils/axiosInstance.js';
import QuestionCard from '../components/QuestionCard';

function Questions() {
  const [question, setQuestion] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestion = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.warn('🌀 Your psyche isn’t connected. Please log in to continue your journey.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        });
        navigate('/login');
        return;
      }
      try {
        const res = await axiosInstance.get('/psyche/start');
        setQuestion(res.data);
      } catch (err) {
        toast.error('⚠️ Unable to start your psyche journey. Please log in again.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        });
        navigate('/login');
      }
    };
    fetchQuestion();
  }, [navigate]);

  const handleAnswer = async (answer) => {
    try {
      const res = await axiosInstance.post('/psyche/answer', {
        phase: question.phase,
        question: question.question,
        answer,
        index: question.index,
      });
      if (res.data.message === 'Analysis complete') {
        toast.success('🌟 Your psyche journey is complete! Unveiling your report now...', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        });
        navigate('/report');
      } else {
        setQuestion(res.data);
      }
    } catch (err) {
      toast.error('⚠️ A ripple in the psyche realm. Failed to submit your answer—please try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
      navigate('/login');
    }
  };

  if (!question) return <div style={{ width: '100%', textAlign: 'center', padding: '40px' }}>Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        maxWidth: '800px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <QuestionCard
        phase={question.phase}
        question={question.question}
        options={question.options}
        index={question.index}
        onAnswer={handleAnswer}
      />
    </motion.div>
  );
}

export default Questions;