import express from 'express';
import { sequelize, initializeDatabase } from './config/database.js';
import authRoutes from './routes/authRoutes.js';
import psycheRoutes from './routes/psycheRoutes.js';
import postRoutes from './routes/postRoutes.js';
import journalRoutes from './routes/journalRoutes.js'; 
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/psyche', psycheRoutes);
app.use('/api/posts', postRoutes);


async function startServer() {
  try {
    await initializeDatabase();
    await sequelize.sync({ alter: true });
    console.log('Database synced');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  } catch (err) {
    console.error('Error starting server:', err);
  }
}

startServer();

