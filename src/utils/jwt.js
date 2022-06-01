const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.jwtToken = {
  createToken({ id, email }) {
    return jwt.sign({ userId: id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIRES
    })
  },
  verifyToken(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIRES
    })
    return decoded
  }
}
