const express = require('express')
const authController = require('../controllers/auth')
const router = express.Router()

router.get('/', authController.getHomePage)
router.get('/login', authController.getLoginPage)
router.get('/signup', authController.getSignupPage)
router.get('/dashboard', authController.getDashboard)

module.exports = router 