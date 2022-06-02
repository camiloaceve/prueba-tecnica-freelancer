const { Router } = require('express')
const usuarioRouter = require('./user')
const bookRouter = require('./book')

const router = Router()

router.use('/user', usuarioRouter)
router.use('/book', bookRouter)

module.exports = router
