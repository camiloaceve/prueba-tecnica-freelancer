const { Router } = require('express')

const { add, getBooks, getBook, updateBook, deleteBook } = require('../controller/bookController')

const auth = require('../middlewares/auth')

const router = Router()

router.post('/add', auth, add)
router.get('/find', auth, getBooks)
router.get('/find/:id', auth, getBook)
router.put('/update/:id', auth, updateBook)
router.put('/delete/:id', auth, deleteBook)


module.exports = router
