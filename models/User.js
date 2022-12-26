const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, 'Please enter a username'],
        unique : true
    },
    password : {
        type : String,
        required : true,
        minlength : [6, 'Password must be atleast 6 Characters']
    },
    confirmPassword : {
        type : String,
        required : true,
        validate : {
            validator : function (el) {
                return el === this.password
            },
            message : "Password are not the same"
        }
    },
    diary : {
        type : mongoose.Schema.Types.ObjectId,
        ref :  'Diary'
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User