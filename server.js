const express = require('express')
const path = require('path')
const connectDB = require('./config/connection')
const exphbs = require('express-handlebars')
const app = express()

connectDB()

// view engine setup
app.set('views', path.join(__dirname , 'views'))
app.set('view engine', 'hbs')
app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/', require('./routes/auth'))

const port = process.env.PORT || 3000
app.listen(port , () => console.log(`server listening on port ${port}`))