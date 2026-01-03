const express = require('express');
const router = express.Router();
const db = require('../utils/database');
const { authenticate } = require('../middleware/auth');

// GET /api/invites - Get user's invite history
router.get('/invites', authenticate, (req, res) => {
  db.all('SELECT * FROM invites WHERE userId = ? ORDER BY createdAt DESC', [req.user.id], (err, rows) => {
    if (err) {
      console.error('DB error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ invites: rows });
  });
});

module.exports = router;