const Diary = require('../models/Diary')
const moment = require('moment')

module.exports.getCreatePage = (req, res) => {
  res.render('diary/create', { title: 'Create', user: req.user })
}
module.exports.postCreatePage = async (req, res) => {
  const date = req.body.date
  const content = req.body.content
  if (!date || !content) {
    return console.log('Please Provide all Fields')
  }
  try {
    const diary = new Diary({
      user : req.session.user._id,  
      date: date,
      markdown: content,
    })
    await diary.save()
    res.redirect('/dashboard')
  } catch (error) {
    console.log(error)
  }
}

module.exports.getSingleDiary = async (req, res) => {
  const diaryId = req.params.id
  const diary = await Diary.findById({ _id: diaryId }).lean()
  const formatedDate = moment(diary.date).format('YYYY-MM-DD')
  res.render('diary/view', { diary, user: req.user, formatedDate })
}
module.exports.deleteSingleDiary = async (req, res) => {
  const diaryId = req.params.id
  await Diary.findByIdAndRemove({ _id: diaryId })
  res.redirect('/dashboard')
}
module.exports.getEditDiaryPage = async (req, res) => {
  const diaryId = req.params.id
  const diary = await Diary.findById({ _id: diaryId }).lean()
  const formatedDate = moment(diary.date).format('YYYY-MM-DD')
  res.render('diary/edit', { diary, user: req.user , formatedDate })
}

module.exports.updateDiaryPage = async (req, res) => {
  try {
    const diary = await Diary.findOne({_id:req.params.id})
    diary.date = req.body.date
    diary.markdown = req.body.content
    await diary.save()
    res.redirect('/dashboard')
  } catch (error) {
    console.error(error)
  }
}
