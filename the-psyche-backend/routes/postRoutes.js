import express from 'express';
import { createPost, getPosts, likePost } from '../controllers/postController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.post('/', authMiddleware, createPost); // Create a post
router.get('/', authMiddleware, getPosts); // Fetch all posts
router.post('/like/:postID', authMiddleware, likePost); // Like a post

export default router;