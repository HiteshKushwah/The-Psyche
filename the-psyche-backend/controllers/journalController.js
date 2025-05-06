import JournalEntry from '../models/JournalEntry.js';
import jwt from 'jsonwebtoken';

// Middleware to authenticate user
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
};
            
// Create a new journal entry
export const createJournalEntry = async (req, res) => {
  try {
    const { entryText } = req.body;
    const userId = req.user.id;

    const journalEntry = await JournalEntry.create({
      userId,
      entryText,
      date: new Date(),
    });

    res.status(201).json({ message: 'Journal entry created', journalEntry });
  } catch (error) {
    res.status(500).json({ message: 'Error creating journal entry', error: error.message });
  }
};

// Get all journal entries for the user
export const getJournalEntries = async (req, res) => {
  try {
    const userId = req.user.id;
    const journalEntries = await JournalEntry.findAll({ where: { userId } });
    res.status(200).json(journalEntries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching journal entries', error: error.message });
  }
};

// Update a journal entry
export const updateJournalEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { entryText } = req.body;
    const userId = req.user.id;

    const journalEntry = await JournalEntry.findOne({ where: { id, userId } });
    if (!journalEntry) {
      return res.status(404).json({ message: 'Journal entry not found' });
    }

    journalEntry.entryText = entryText;
    await journalEntry.save();

    res.status(200).json({ message: 'Journal entry updated', journalEntry });
  } catch (error) {
    res.status(500).json({ message: 'Error updating journal entry', error: error.message });
  }
};

// Delete a journal entry
export const deleteJournalEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const journalEntry = await JournalEntry.findOne({ where: { id, userId } });
    if (!journalEntry) {
      return res.status(404).json({ message: 'Journal entry not found' });
    }

    await journalEntry.destroy();
    res.status(200).json({ message: 'Journal entry deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting journal entry', error: error.message });
  }
};

export { authenticateToken };