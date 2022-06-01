module.exports = {
  secret: process.env.AUTH_SECRET,
  expires: process.env.AUTH_EXPIRES,
  rounds: process.env.AUTH_ROUNDS,
  port: process.env.PORT
}
