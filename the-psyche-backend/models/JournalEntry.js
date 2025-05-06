// // import { DataTypes } from 'sequelize';
// // import { sequelize } from '../config/database.js';

// // const JournalEntry = sequelize.define('JournalEntry', {
// //   id: {
// //     type: DataTypes.INTEGER,
// //     autoIncrement: true,
// //     primaryKey: true,
// //   },
// //   userId: {
// //     type: DataTypes.STRING,
// //     allowNull: false,
// //   },
// //   entryText: {
// //     type: DataTypes.TEXT,
// //     allowNull: false,
// //   },
// //   date: {
// //     type: DataTypes.DATEONLY,
// //     allowNull: false,
// //     defaultValue: DataTypes.NOW,
// //   },
// // }, {
// //   timestamps: true,
// // });

// // export default JournalEntry;

// import express from 'express';
// import { createJournalEntry, getJournalEntries, updateJournalEntry, deleteJournalEntry, authenticateToken } from '../controllers/journalController.js';

// const router = express.Router();

// // Protect all routes with authentication middleware
// router.use(authenticateToken);

// router.post('/', createJournalEntry);
// router.get('/', getJournalEntries);
// router.put('/:id', updateJournalEntry);
// router.delete('/:id', deleteJournalEntry);

// export default router;


import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const JournalEntry = sequelize.define('JournalEntry', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  entryText: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: true,
});

export default JournalEntry;