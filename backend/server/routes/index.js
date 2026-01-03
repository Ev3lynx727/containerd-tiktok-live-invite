const express = require('express');
const router = express.Router();
const { triggerInvite } = require('../utils/tiktokApi');
const { authenticate } = require('../middleware/auth');
const historyRoutes = require('./history');

// Use history routes
router.use('/', historyRoutes);

// POST /api/trigger-invite
router.post('/trigger-invite', authenticate, async (req, res) => {
  try {
    const { liveUrl, invitees } = req.body;
    if (!liveUrl || !invitees || !Array.isArray(invitees)) {
      return res.status(400).json({ error: 'Invalid input' });
    }
    for (const invitee of invitees) {
      if (!invitee.type || !invitee.value || !['username', 'userid'].includes(invitee.type)) {
        return res.status(400).json({ error: 'Invalid invitee format' });
      }
    }
    const result = await triggerInvite(req.user.id, liveUrl, invitees);
    res.json({ status: 'posted', result });
  } catch (error) {
    console.error('Trigger invite error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/webhook/live-start
router.post('/webhook/live-start', async (req, res) => {
  try {
    const { userId, liveUrl } = req.body;
    if (!userId || !liveUrl) {
      return res.status(400).json({ error: 'Invalid webhook data' });
    }
    console.log('Webhook received for live start:', { userId, liveUrl });
    // Future: Trigger invite based on config
    res.json({ status: 'webhook received' });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;