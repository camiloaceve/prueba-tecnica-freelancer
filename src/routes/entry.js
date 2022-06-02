const { Router } = require('express')

const { addEntry } = require('../controller/entryController')

const auth = require('../middlewares/auth')

const router = Router()

router.post('/add', auth, addEntry)

module.exports = router
