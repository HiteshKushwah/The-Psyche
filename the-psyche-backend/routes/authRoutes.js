// import express from 'express';
// import { signup, login } from '../controllers/authController.js';

// const router = express.Router();

// router.post('/signup', signup);
// router.post('/login', login);

// export default router;

import express from 'express';
import { signup, login } from '../controllers/authController.js';
import { getUserDetails } from '../controllers/authController.js'; // New endpoint
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/me', authMiddleware, getUserDetails); // New route to get user details

export default router;