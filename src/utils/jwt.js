const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.jwtToken = {
  createToken({ id, email }) {
    return jwt.sign({ userId: id, email }, process.env.JWT_SECRET, {
      expiresIn: '20m'
    })
  },
  verifyToken(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      expiresIn: '20m'
    })
    return decoded
  }
}
