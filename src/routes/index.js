const { Router } = require('express')
const usuarioRouter = require('./user')

const router = Router()

router.use('/user', usuarioRouter)

module.exports = router
