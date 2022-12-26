const express = require('express')
const authController = require('../controllers/auth')
const { verifyAuth } = require('../middlewares/auth')
const router = express.Router()

router.get('/', authController.getHomePage)
router.get('/login', authController.getLoginPage)
router.get('/signup', authController.getSignupPage)
router.get('/dashboard',verifyAuth,authController.getDashboard)
router.post('/signup', authController.postSignup)
router.post('/login', authController.postLogin)
router.get('/logout',authController.getLogout)

module.exports = router 