// // import User from '../models/User.js';
// // import bcrypt from 'bcryptjs';
// // import jwt from 'jsonwebtoken';
// // import dotenv from 'dotenv';

// // dotenv.config();

// // export const signup = async (req, res) => {
// //   const { name, email, password } = req.body;
// //   try {
// //     let user = await User.findOne({ where: { email } });
// //     if (user) return res.status(400).json({ message: 'User already exists' });

// //     user = await User.create({ name, email, password });
// //     const token = jwt.sign({ id: user.userID }, process.env.JWT_SECRET, { expiresIn: '1h' });
// //     res.json({ token });
// //   } catch (err) {
// //     res.status(500).json({ message: 'Server error', error: err.message });
// //   }
// // };

// // export const login = async (req, res) => {
// //   const { email, password } = req.body;
// //   try {
// //     const user = await User.findOne({ where: { email } });
// //     if (!user) return res.status(400).json({ message: 'Invalid credentials' });

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

// //     const token = jwt.sign({ id: user.userID }, process.env.JWT_SECRET, { expiresIn: '1h' });
// //     res.json({ token });
// //   } catch (err) {
// //     res.status(500).json({ message: 'Server error', error: err.message });
// //   }
// // };

//   import User from '../models/User.js';
//   import bcrypt from 'bcryptjs';
//   import jwt from 'jsonwebtoken';
//   import dotenv from 'dotenv';

//   dotenv.config();

//   export const signup = async (req, res) => {
//     const { name, email, password } = req.body;
//     try {
//       let user = await User.findOne({ where: { email } });
//       if (user) return res.status(400).json({ message: 'User already exists' });

//       user = await User.create({ name, email, password });
//       const token = jwt.sign({ id: user.userID }, process.env.JWT_SECRET, { expiresIn: '1h' });
//       res.json({ token });
//     } catch (err) {
//       res.status(500).json({ message: 'Server error', error: err.message });
//     }
//   };

//   export const login = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//       const user = await User.findOne({ where: { email } });
//       if (!user) return res.status(400).json({ message: 'Invalid credentials' });

//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//       const token = jwt.sign({ id: user.userID }, process.env.JWT_SECRET, { expiresIn: '1h' });
//       res.json({ token });
//     } catch (err) {
//       res.status(500).json({ message: 'Server error', error: err.message });
//     }
//   };

//   // New endpoint to get user details
//   export const getUserDetails = async (req, res) => {
//     try {
//       const user = await User.findByPk(req.user.id); // req.user.id comes from authMiddleware
//       if (!user) return res.status(404).json({ message: 'User not found' });

//       res.json({
//         name: user.name,
//         email: user.email,
//       });
//     } catch (err) {
//       res.status(500).json({ message: 'Server error', error: err.message });
//     }
//   };

import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ where: { email } });
    if (user) return res.status(400).json({ message: 'User already exists' });

    user = await User.create({ name, email, password });
    const token = jwt.sign({ id: user.userID }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, userId: user.userID }); // Add userId to response
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.userID }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, userId: user.userID }); // Add userId to response
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const getUserDetails = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};