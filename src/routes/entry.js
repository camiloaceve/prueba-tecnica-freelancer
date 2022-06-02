const { Router } = require('express')

const { addEntry, getEntries, getEntry } = require('../controller/entryController')

const auth = require('../middlewares/auth')

const router = Router()

router.post('/add', auth, addEntry)
router.get('/find', auth, getEntries)
router.get('/find/:id', auth, getEntry)


module.exports = router
