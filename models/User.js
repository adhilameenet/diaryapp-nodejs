const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
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
    diary : {
        type : mongoose.Schema.Types.ObjectId,
        ref :  'Diary'
    }
})

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

userSchema.statics.login = async function (email,password) {
    const user = await this.findOne({email})
    if(user) {
        const auth = await bcrypt.compare(password,user.password)
        if(auth) {
            return user
        }
        throw Error('Incorrect Password')
    }
    throw Error("Incorrect Username")
}

const User = mongoose.model('User', userSchema)
module.exports = User