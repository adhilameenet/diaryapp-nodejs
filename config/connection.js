require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const connectionString = process.env.CONNECTION_STRING ;
const connectDB = () => {
    mongoose.connect( connectionString , {
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