const { Router } = require('express')

const { add, getBook, updateBook } = require('../controller/bookController')

const auth = require('../middlewares/auth')

const router = Router()

router.post('/add', auth, add)
router.get('/find', auth, getBook)
router.put('/update/:id', auth, updateBook)

module.exports = router
