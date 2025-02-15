// backend/routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { authenticateJWT } = require('../middlewares/authMiddleware');
const router = express.Router();

// User Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(400).send('User not found');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send('Invalid credentials');

  const token = jwt.sign(
    { id: user._id, role: user.role, isSuperAdmin: user.isSuperAdmin },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  res.json({ token });
});

// Super Admin Creation (initial setup)
router.post('/super-admin', async (req, res) => {
  const { username, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newSuperAdmin = new User({
    username,
    email,
    password: hashedPassword,
    isSuperAdmin: true,
  });

  await newSuperAdmin.save();
  res.status(201).send('Super admin created!');
});

module.exports = router;
