const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const app = express()

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
app.use(express.urlencoded({extended : false}))

app.use('/', require('./routes/auth'))

const port = process.env.PORT || 3000
app.listen(port , () => console.log(`server listening on port ${port}`))