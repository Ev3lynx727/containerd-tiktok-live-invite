const rateLimit = (req, res, next) => {
  // Simple in-memory rate limit (max 1 per hour per user)
  const key = `rate_${req.user.id}`;
  const now = Date.now();
  if (!global.rateLimits) global.rateLimits = {};
  if (global.rateLimits[key] && now - global.rateLimits[key] < 3600000) {
    return res.status(429).json({ error: 'Rate limit exceeded' });
  }
  global.rateLimits[key] = now;
  next();
};

module.exports = { rateLimit };