const winston = require('winston')

const handleError = (err, req, res, next) => {
  winston.error(
    `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${
      req.method
    } - ${req.ip}`,
  )
  res.status(err.status || 500).json({ error: err.message })
}

module.exports = { handleError }
