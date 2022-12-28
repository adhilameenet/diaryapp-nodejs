const express = require('express')
const { verifyAuth } = require('../middlewares/auth')
const diaryController = require('../controllers/diary')
const router = express.Router()

router.get('/create', verifyAuth, diaryController.getCreatePage)
router.post('/create', verifyAuth, diaryController.postCreatePage)
router.get('/:id', verifyAuth, diaryController.getSingleDiary)
router.delete('/:id', verifyAuth,diaryController.deleteSingleDiary)
router.get('/edit/:id',verifyAuth, diaryController.getEditDiaryPage)
router.post('/edit/:id',verifyAuth, diaryController.updateDiaryPage)
module.exports = router
