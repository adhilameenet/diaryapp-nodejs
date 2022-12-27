const Diary = require('../models/Diary')

module.exports.getCreatePage = (req,res) => {
    res.render('diary/create', {title : 'Create', user : req.session.user}) 
}
module.exports.postCreatePage = async (req,res) => {
    const date = req.body.ddate;
    const title = req.body.dtitle;
    const content = req.body.dcontent

    if(!date || !title || !content) {
        return console.log("Please Provide all Fields")
    }
   try {
    const diary = new Diary({
        date : date,
        title : title,
        content : content
    })
    await diary.save()
    res.redirect('/dashboard')
   } catch (error) {
    console.log(error)
   }

}