import express from 'express';
import { createJournalEntry, getJournalEntries, updateJournalEntry, deleteJournalEntry, authenticateToken } from '../controllers/journalController.js';

const router = express.Router();

// Protect all routes with authentication middleware
router.use(authenticateToken);

router.post('/', createJournalEntry);
router.get('/', getJournalEntries);
router.put('/:id', updateJournalEntry);
router.delete('/:id', deleteJournalEntry);

export default router;