// controllers/psycheAIController.js
import PsycheAI from '../models/PsycheAI.js';
import axios from 'axios';

export const askPsycheAI = async (req, res) => {
  const { query } = req.body;

  if (!query || typeof query !== 'string' || query.trim() === '') {
    return res.status(400).json({ message: 'Query is required' });
  }

  try {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

    const response = await axios.post(GEMINI_API_URL, {
      contents: [{ role: "user", parts: [{ text: query }] }],
    }, {
      headers: { 'Content-Type': 'application/json' },
    });

    const aiAnswer = response.data.candidates[0].content.parts[0].text;

    // Save the interaction to the database
    await PsycheAI.create({
      userID: req.user.id,
      query,
      response: aiAnswer,
    });

    res.json({ message: 'Success', answer: aiAnswer });
  } catch (error) {
    console.error('Gemini API Error:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Error fetching AI response', error: error.message });
  }
};