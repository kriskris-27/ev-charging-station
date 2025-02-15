// backend/middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to authenticate JWT and check role
const authenticateJWT = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('Unauthorized');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).send('Unauthorized');

    req.user = user;
    next();
  } catch (error) {
    res.status(401).send('Invalid token');
  }
};

// Middleware to check if the user is a super admin
const authenticateSuperAdmin = async (req, res, next) => {
  if (req.user && req.user.isSuperAdmin) {
    return next(); // Proceed if it's the super admin
  }
  return res.status(403).send('Only the super admin can perform this action');
};

module.exports = { authenticateJWT, authenticateSuperAdmin };
