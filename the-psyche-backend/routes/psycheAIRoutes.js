// routes/psycheAIRoutes.js
import express from 'express';
import { askPsycheAI } from '../controllers/psycheAIController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.post('/ask', authMiddleware, askPsycheAI);

export default router;