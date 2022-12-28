const express = require('express')
const { verifyAuth } = require('../middlewares/auth')
const diaryController = require('../controllers/diary')
const router = express.Router()

router.get('/create', verifyAuth, diaryController.getCreatePage)
router.post('/create', verifyAuth, diaryController.postCreatePage)
router.get('/:id', verifyAuth, diaryController.getSingleDiary)

module.exports = router
