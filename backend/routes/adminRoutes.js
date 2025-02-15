// backend/routes/adminRoutes.js
const express = require('express');
const User = require('../models/User');
const { authenticateJWT, authenticateSuperAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

// Add Admin route (only accessible to super admin)
router.post('/add-admin', authenticateJWT, authenticateSuperAdmin, async (req, res) => {
  const { userId } = req.body; // userId to promote to admin
  const user = await User.findById(userId);

  if (!user) return res.status(404).send('User not found');
  
  user.role = 'admin'; // Promote to admin
  await user.save();
  res.status(200).send('User promoted to admin');
});

// List Admins (only accessible to super admin)
router.get('/admins', authenticateJWT, authenticateSuperAdmin, async (req, res) => {
  const admins = await User.find({ role: 'admin' });
  res.status(200).json(admins);
});

// Remove Admin (only accessible to super admin)
router.delete('/remove-admin', authenticateJWT, authenticateSuperAdmin, async (req, res) => {
  const { userId } = req.body;
  const user = await User.findById(userId);

  if (!user) return res.status(404).send('User not found');
  if (user.isSuperAdmin) return res.status(400).send('Cannot remove super admin');

  user.role = 'user'; // Revert to user
  await user.save();
  res.status(200).send('Admin privileges removed');
});

module.exports = router;
