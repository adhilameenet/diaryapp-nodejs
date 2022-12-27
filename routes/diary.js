const express = require('express')
const diaryController = require('../controllers/diary')
const router = express.Router()

router.get('/create', diaryController.getCreatePage)
router.post('/create', diaryController.postCreatePage)

module.exports = router