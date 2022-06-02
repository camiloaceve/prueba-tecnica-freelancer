const { Router } = require('express')
const usuarioRouter = require('./user')
const bookRouter = require('./book')
const entryRouter = require('./entry')
const saleRouter = require('./sale')

const router = Router()

router.use('/user', usuarioRouter)
router.use('/book', bookRouter)
router.use('/entry', entryRouter)
router.use('/sale', saleRouter)

module.exports = router
