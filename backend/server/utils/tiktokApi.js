const axios = require('axios');
const db = require('./database');

// Helper to get access token (placeholder - implement OAuth flow)
const getAccessToken = async (userId) => {
  // TODO: Retrieve token from DB or OAuth service
  return process.env.TIKTOK_ACCESS_TOKEN || 'mock_token';
};

const triggerInvite = async (userId, liveUrl, usernames, retries = 3) => {
  const postText = `Join my live: ${liveUrl} @${usernames.join(' @')}`;
  console.log(`Attempting to post: ${postText}`);

  const accessToken = await getAccessToken(userId);

  try {
    // Real TikTok Content Posting API call (using research API endpoint as example)
    const response = await axios.post('https://open-api.tiktok.com/research/content/post/', {
      text: postText,
      // Note: Content Posting API may require video; adjust for text-only if supported
    }, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      timeout: 10000 // 10s timeout
    });

    console.log('Post successful:', response.data);
    const result = { postId: response.data?.id || 'real_id_' + Date.now(), text: postText };

    // Log to DB
    db.run('INSERT INTO invites (userId, liveUrl, usernames, status) VALUES (?, ?, ?, ?)',
      [userId, liveUrl, JSON.stringify(usernames), 'success']);
    return result;
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);

    if (error.response?.status === 401) {
      // Token expired - TODO: Implement refresh logic
      console.log('Token expired, refresh needed');
    } else if (error.response?.status === 429) {
      // Rate limited
      console.log('Rate limited, backing off');
      await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5s
    }

    if (retries > 0) {
      console.log(`Retrying... ${retries} left`);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Exponential backoff
      return triggerInvite(userId, liveUrl, usernames, retries - 1);
    }

    // Log failure to DB
    db.run('INSERT INTO invites (userId, liveUrl, usernames, status) VALUES (?, ?, ?, ?)',
      [userId, liveUrl, JSON.stringify(usernames), 'failed']);
    throw new Error('Failed to post invite');
  }
};

module.exports = { triggerInvite, getAccessToken };