const express = require('express')
const path = require('path')
const connectDB = require('./config/connection')
const exphbs = require('express-handlebars')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()

// Database Connection
connectDB()

// cookie & session
app.use(cookieParser())
app.use(session({
    secret : 'secret key',
    resave : false,
    saveUninitialized : true
}))

// view engine setup
app.set('views', path.join(__dirname , 'views'))
app.set('view engine', 'hbs')
app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}))

// parsing incoming data
app.use(express.json())
app.use(express.urlencoded({extended : true}))

// static middleware
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/auth'))
app.use('/diary', require('./routes/diary'))

const port = process.env.PORT || 3000
app.listen(port , () => console.log(`server listening on port ${port}`))