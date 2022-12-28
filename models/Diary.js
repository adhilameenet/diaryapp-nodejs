const mongoose = require('mongoose')
const { marked } = require('marked')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)

const diarySchema = new mongoose.Schema({
    markdown : {
        type : String,
        required : true
    },
    sanitizedHtml : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
})

diarySchema.pre('validate', function(next) {
    if(this.markdown) {
        this.sanitizedHtml = dompurify.sanitize(marked(this.markdown)) 
    }
    next()
 })

const Diary = mongoose.model('Diary', diarySchema)
module.exports = Diary