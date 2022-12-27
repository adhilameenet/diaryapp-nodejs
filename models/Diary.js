const mongoose = require('mongoose')

const diarySchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'Diary should have title']
    },
    content : {
        type : String,
        required : [true , 'Diary should have some content'],
        trim : true
    },
    date : {
        type : Date,
    }
})

const Diary = mongoose.model('Diary', diarySchema)
module.exports = Diary