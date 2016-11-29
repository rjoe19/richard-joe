var express = require('express')
var templit = require('templit')
var bodyParser = require('body-parser')

var app = express()
var PORT = process.env.PORT || 3000

var index = require('./routes/index')

// MIDDLEWARE //
app.engine('js', templit)
app.set('view engine', 'js')
app.set('views', `${__dirname}/views`)
app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.urlencoded({ extended: false }))

// ROUTES //
app.use('/', index)

app.listen(PORT, () => {
  console.log(`richard joe is being sexy on port ${PORT}`)
})
