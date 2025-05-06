import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaPaperPlane } from 'react-icons/fa';

const PsycheAI = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  const getAIResponse = async () => {
    if (!query.trim()) {
      setChatHistory([...chatHistory, { query: query.trim(), answer: 'Ask me something meaningful.' }]);
      return;
    }

    setChatHistory([...chatHistory, { query, answer: '...' }]);
    setLoading(true);

    try {
     

      const aiAnswer = "This is a placeholder response. Connect your API.";

      setChatHistory((prev) => {
        const updatedHistory = [...prev];
        updatedHistory[updatedHistory.length - 1].answer = aiAnswer;
        return updatedHistory;
      });
    } catch (error) {
      setChatHistory((prev) => {
        const updatedHistory = [...prev];
        updatedHistory[updatedHistory.length - 1].answer = 'Error: Couldn’t connect. Try again.';
        return updatedHistory;
      });
    } finally {
      setLoading(false);
      setQuery('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getAIResponse();
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: '#0d0d1a',
      color: '#e0e0e0',
      fontFamily: "'Inter', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      margin: 0,
      padding: 0,
    }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          width: '100%',
          padding: '15px 20px',
          background: 'rgba(20, 20, 40, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <FaArrowLeft size={16} color="#00d4ff" />
          <span style={{ fontSize: '14px', color: '#00d4ff', fontWeight: '500' }}>Home</span>
        </motion.div>
        <h1 style={{ fontSize: '20px', fontWeight: '600', color: '#fff' }}>
          Psyche AI
        </h1>
        <div style={{ width: '40px' }} />
      </motion.div>

      {/* Chat Area */}
      <div style={{
        flex: 1,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}>
        {chatHistory.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              textAlign: 'center',
              color: '#606080',
              fontSize: '16px',
              marginTop: '20vh',
            }}
          >
            I’m Psyche AI. What’s on your mind?
          </motion.div>
        ) : (
          chatHistory.map((chat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <div style={{
                alignSelf: 'flex-end',
                maxWidth: '80%',
                background: '#1a1a3a',
                padding: '10px 16px',
                borderRadius: '12px 12px 0 12px',
                color: '#e0e0e0',
                fontSize: '15px',
              }}>
                {chat.query}
              </div>
              <div style={{
                alignSelf: 'flex-start',
                maxWidth: '80%',
                background: 'rgba(30, 30, 60, 0.9)',
                padding: '10px 16px',
                borderRadius: '12px 12px 12px 0',
                color: '#d0d0e0',
                fontSize: '15px',
              }}>
                {chat.answer}
              </div>
            </motion.div>
          ))
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '15px 20px',
          background: 'rgba(20, 20, 40, 0.9)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <form onSubmit={handleSubmit} style={{ display: 'flex', width: '100%', gap: '10px' }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask me anything..."
            style={{
              flex: 1,
              padding: '10px 15px',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(40, 40, 60, 0.8)',
              color: '#e0e0e0',
              fontSize: '15px',
              outline: 'none',
            }}
            disabled={loading}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            style={{
              padding: '10px',
              background: loading ? '#404060' : '#00d4ff',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            <FaPaperPlane size={16} />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default PsycheAI;
