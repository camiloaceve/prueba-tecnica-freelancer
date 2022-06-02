const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  console.log(req.headers)

  // Verify that the token exists
  if (!req.headers.authorization) {
    res.status(401).json({ msg: 'Acceso no autorizado' })
  } else {
    // Check validity of this token
    const token = req.headers.authorization.split(' ')[1]

    // Check validity token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res
          .status(500)
          .json({ msg: 'Ha ocurrido un problema al decodificar el token', err })
      } else {
        req.user = decoded
        next()
      }
    })
  }
}
