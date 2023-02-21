const express = require('express')
const { Register, Login, getUser } = require('../controllers/user.controllers')
const auth = require('../middleware/auth')
const { registerRules,validator } = require('../middleware/validator')
const router = express.Router()


router.post('/register',registerRules(),validator,Register)
router.post('/login',Login)
router.get('/get_user',auth, getUser)


module.exports = router