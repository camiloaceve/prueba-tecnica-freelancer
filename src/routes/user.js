const { Router } = require('express')

const {
  register,
  sigIn,
  profile,
  updateProfile
} = require('../controller/userController')

const auth = require("../middlewares/auth")

const router = Router()

router.post('/register', register)
router.post('/login', sigIn)
router.post('/profile', auth, profile)
router.put('/update/profile/:id', auth,  updateProfile)

module.exports = router
