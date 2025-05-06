import Post from '../models/Post.js';
import User from '../models/User.js';

// Create a new post
export const createPost = async (req, res) => {
  const { content } = req.body;
  if (!content || content.length > 280) {
    return res.status(400).json({ message: 'Content is required and must be 280 characters or less' });
  }

  try {
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const post = await Post.create({
      userID: req.user.id,
      username: user.name,
      content,
    });

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Error creating post', error: err.message });
  }
};

// Fetch all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      order: [['timestamp', 'DESC']], // Newest first
    });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching posts', error: err.message });
  }
};

// Like or unlike a post
export const likePost = async (req, res) => {
  const { postID } = req.params;

  try {
    const post = await Post.findByPk(postID);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    let likes = post.likes || [];
    if (likes.includes(req.user.id)) {
      // Unlike: Remove user ID from likes
      likes = likes.filter(id => id !== req.user.id);
    } else {
      // Like: Add user ID to likes
      likes.push(req.user.id);
    }

    post.likes = likes;
    await post.save();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Error liking post', error: err.message });
  }
};