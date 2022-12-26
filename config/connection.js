const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const connectDB = () => {
    mongoose.connect('mongodb://localhost/diaryapp', {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then(() => {
        console.log("Connected to the MongoDB!")
    }).catch((err) => {
        console.error(err)
        process.exit(1)
    })
}

module.exports = connectDB