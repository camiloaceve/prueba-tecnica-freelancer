const { jwtToken } = require('../utils/jwt')

module.exports = (req, res, next) => {
  console.log(req.headers)

  // Verify that the token exists
  if (!req.headers.authorization) {
    res.status(401).json({ msg: 'Acceso no autorizado' })
  } else {
    // Check validity of this token
    const token = req.headers.authorization.split(' ')[1]

    // Check validity token
    jwtToken.verifyToken(token)
  }
}
