import express from 'express';
import { startAnalysis, submitAnswer, getReport, submitFeedback } from '../controllers/psycheController.js';

import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.get('/start', authMiddleware, startAnalysis);
router.post('/answer', authMiddleware, submitAnswer);
router.get('/report', authMiddleware, getReport);
router.post('/feedback', authMiddleware, submitFeedback);

export default router;