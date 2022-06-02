const { Router } = require('express')

const { addSale, getSales, getSale } = require('../controller/saleController')

const auth = require('../middlewares/auth')

const router = Router()

router.post('/add', auth, addSale)
router.get('/find', auth, getSales)
router.get('/find/:id', auth, getSale)

module.exports = router
