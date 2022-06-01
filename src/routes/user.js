const { Router } = require('express')

const { register, sigIn } = require('../controller/userController')

//const auth = require("../middlewares/auth")

const router = Router()

router.post('/register', register)
router.post('/login', sigIn)
// router.get("/listUser", auth.verifyUser, listUsers)
// router.put("/update/:id", auth.verifyAdmin, updateUser)
// router.delete("/deleteUser/:id", auth.verifyAdmin, deleteUser)

module.exports = router
