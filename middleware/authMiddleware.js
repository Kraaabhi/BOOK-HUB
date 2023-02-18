function authMiddleware(req, res, next) {
  const apiKey = req.headers['x-api-key']
  const API_KEY = process.env.API_KEY

  if (apiKey === API_KEY) {
    next()
  } else {
    res.status(401).json({ error: 'Unauthorized' })
  }
}

module.exports = authMiddleware
